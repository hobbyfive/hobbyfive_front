import React, { useEffect, useState } from "react"; 
import { requestLogin } from "./Auth";
import '../pages/Modal.css'
import axios from "axios";

const LoginModal = ({closeLoginModal, getLoginStatus}) => {
  const [inputEmail, setEmail] = useState("");
  const [inputPasswd, setPasswd] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswd = (e) => {
    setPasswd(e.target.value);
  }

  const Login = () => {

    axios.post("http://34.236.154.248:8090/api/authenticate", {
        email: inputEmail,
        password: inputPasswd
      })
        .then((res) => {
          console.log(res.data);
          getLoginStatus(true);
          closeLoginModal();
        })
        .catch((error) => {
          console.log("데이터를 확인해주세용");
          throw new Error(error);
        });
        
  }
 
  return (
    <div className="modal custom-modal">
      <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
              </div>
              <div className="input_box_login">
              <div className="modal-body">
              <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4 left_box">Email 주소</label>
              <input type="email" className="form-control" id="exampleInputEmail1" value={inputEmail} onChange={handleEmail} aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="exampleInputPassword1" className="form-label mt-4 left_box">비밀번호</label>
              <input type="password" className="form-control" id="exampleInputPassword1" value={inputPasswd} onChange={handlePasswd} placeholder="Password"/>
            </div>
              </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={Login}>로그인</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeLoginModal}>나중에</button>
              </div>
            </div>
          </div>
    </div>
  );
}
 
export {LoginModal};
