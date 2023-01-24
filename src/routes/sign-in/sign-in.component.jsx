// import {useEffect} from "react";
// import {getRedirectResult} from "firebase/auth";
import {
    // auth,
    signInWithGooglePopUp,
    // signInWithGoogleRedirect,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn= ()=> {
    //Done if we included 
    // useEffect(
    //     () => async () => {
    //       const response = await getRedirectResult(auth);
    //     if(response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    //     },
    //     []
    //   );

    const logGoogleUser = async ()=> {
        const {user} = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>Sign in with Google Pop up</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignUpForm/>
        </div>
    );
};

export default SignIn;