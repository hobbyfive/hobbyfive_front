import React, {useState} from 'react';
import '../pages/SignUp.css'

const Login = () => {
    return (
<div className="modals custommodals">
  <div className="modals-dialog" role="document">
    <div className="modals-content">
      <div className="modals-header">
        <h5 className="modals-title">Login</h5>
      </div>
      <div className="modals-body">
      <div className="form-group">
      <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
    <div className="form-group mb-4">
      <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
      </div>
      <div className="modals-footer">
        <button type="button" className="btn btn-primary">Login</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modals">Close</button>
      </div>
    </div>
  </div>
</div>
    );
};

export { Login };