// import {useEffect} from "react";
// import {getRedirectResult} from "firebase/auth";
// import {
// auth,
//     signInWithGooglePopUp,
// signInWithGoogleRedirect,
//    createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss"

const Authentication= ()=> {
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

    return (
        <div className="authentication-container">
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignUpForm/>
            <SignInForm/>
        </div>
    );
};

export default Authentication;