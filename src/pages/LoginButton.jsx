import React, { useState } from "react";
import { LoginModal } from "../components/LoginModal";
import { Login } from "../components/Login";
 
function LoginButton(props) {
  const [login, setLogin] = useState(false);
 
  return (
    <div className="LoginButton">
      <input type="button" value="로그인" className="blueBtn" onClick={() => setLogin(!login)}/>
      {login && (
        <LoginModal  closeModal={() => setLogin(!login)}>
          <Login />
        </LoginModal>
      )}
    </div>
  );
}
 
export default LoginButton;