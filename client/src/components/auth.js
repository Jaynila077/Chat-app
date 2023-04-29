import {signInWithPopup} from "firebase/auth";
import {auth,provider} from "../firebase-config";

export const Auth = () =>{

    const signInWithGooge = async() =>{
         await signInWithPopup(auth,provider);
    }
    return(
        <div className="auth">
            <h1>Sign in with Google</h1>
            <button onClick={signInWithGooge}>Sign In</button>
        </div>
    )
}