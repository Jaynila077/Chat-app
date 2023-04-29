import {signInWithPopup} from "firebase/auth";
import {auth,provider} from "../firebase-config";
import Cookies from "universal-cookie"

const cookies = new Cookies();

export const Auth = (props) =>{

    const {setIsAuth} = props;

    const signInWithGooge = async() =>{
        try{
        const result = await signInWithPopup(auth,provider);
        cookies.set("auth-token",result.user.refreshToken);
        setIsAuth(true);
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <div className="auth">
            <h1>Sign in with Google</h1>
            <button onClick={signInWithGooge}>Sign In</button>
        </div>
    )
}