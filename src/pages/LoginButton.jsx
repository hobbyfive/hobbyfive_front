import React, { useState } from "react";
import { LoginModal } from "../components/LoginModal";
import './SignUp.css'
 
function LoginButton(props) {
  const [login, setLogin] = useState(false);
 
  return (
    <div>
      <input type="button" value="로그인" className="btn btn-primary" onClick={() => setLogin(!login)}/>
      {login && (
        <LoginModal closeModal={() => setLogin(!login)}>
        </LoginModal>
      )}
    </div>
  );
}
 
export default LoginButton;