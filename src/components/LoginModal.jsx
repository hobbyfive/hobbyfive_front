import React from "react"; 
import { requestLogin } from "./Auth";
import '../pages/Modal.css'

const LoginModal = ({closeLoginModal}) => {
 
 
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
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="exampleInputPassword1" className="form-label mt-4 left_box">비밀번호</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
              </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={requestLogin}>로그인</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeLoginModal}>나중에</button>
              </div>
            </div>
          </div>
    </div>
  );
}
 
export {LoginModal};
