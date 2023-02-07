import { useState } from "react";
import { signInWithGooglePopUp, signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss"
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
// import { UserContext } from "../contexts/user.context";

const defaultFormFields = {
    email:"",
    password:"",
}

const SignInForm= ()=> {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, } = formFields;

    // const {setCurrentUser} = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async ()=> {
        // const {user} = 
        await signInWithGooglePopUp();
        // setCurrentUser(user);
        
    };

    const handleSubmit = async(event)=> {
        event.preventDefault();

        try{
        //   const {user} = 
          await signInAuthUserWithEmailAndPassword(email, password)
            // setCurrentUser(user)
            resetFormFields();
        } catch(error){
            switch(error.code){
                case "auth/wrong-password":
                    alert("Password incorrect for email. Try again.");
                    break;
                case "auth/user-not-found":
                    alert("email not found");
                    break;
                default:
                console.log(error);
            }
            }
        };

    const handleChange = (event)=> {
        const {name,value} = event.target;
        setFormFields({...formFields, [name]:value});
    };
    
    return (
        <div className="sign-up-container">
        <h2>Already have an account? </h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>  
                
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
            <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign in</Button>
            </div>
            </form>
        </div>
    );
};

export default SignInForm;