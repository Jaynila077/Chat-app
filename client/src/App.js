import React,{useRef, useState} from 'react';
import './App.css';
import { Auth } from './components/auth';
import Cookies from "universal-cookie"
const cookies = new Cookies();


function App() {
  const  [isAuth , setIsAuth] = useState(cookies.get("auth-token"));
  const [room,setRoom] = useState(null);

  const roomInputRef = useRef(null);

  if(!isAuth){
  return (
    <div className="App">
      <Auth setIsAuth={setIsAuth}/>
    </div>
  );
}

return (
  <div>
    {room ? (<div>Room</div>) 
    :(
    <div className="room">
      <h1>Enter Room Chat</h1>
      <input type="text" ref={roomInputRef}/>
      <button onClick={()=> setRoom(roomInputRef.current.value)}>Enter</button>
    </div>
    )}
  </div>
)
}

export default App;
