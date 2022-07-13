import React,{useState , useRef} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal  from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";


const AddUser = props => {
   const nameInputRef =   useRef();
   const ageInputRef =   useRef();

    // const [enteredUsername, setEnteredUsername] = useState("");
    
    // const [enteredAge, setEnteredAge] = useState("");

    const [error, setErorr]  = useState();

    const addUserHandler = (event) =>{


        event.preventDefault();
       const enteredUser = nameInputRef.current.value;
      const  enteredUserAge =ageInputRef.current.value;

        if(enteredUser.trim().length===0||enteredUserAge.trim().length===0){
            setErorr({

                   title: "Invalid input",
                   massage: "Please enter a valid name and age (non-empty values)." 

            });
            return;
        }
        if(+enteredUserAge<1){

            setErorr({

                title: "Invalid age",
                massage: "Please enter a valid  age (> 0)." 

         });

            return;
        }
        props.onAddUser(enteredUser,enteredUserAge);
      
             nameInputRef.current.value="";
             ageInputRef.current.value="";
  
        
    };

    // const usernameChangeHandler = (event) =>{
    //     setEnteredUsername(event.target.value);
    

    // };

    // const ageChangeHandler = (event) =>{
    //     setEnteredAge(event.target.value);
    

    // };

    const errorHandler = () =>{
        setErorr(null);
    };

return (

     <Wrapper>
     {
     error &&
      <ErrorModal 
       title = {error.title}
       massage = {error.massage}
       onConfirm = {errorHandler}
       />
     }
    <Card className={classes.input}>
        <form onSubmit ={addUserHandler}>


        <label htmlFor="username">Username</label>
        <input id="username" type="text" 
         ref = {nameInputRef}
         />



        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" 
         ref = {ageInputRef}
          />

        <Button type="submit">Add User</Button>


        </form>

    </Card>


        </Wrapper>


);




};


export default AddUser;