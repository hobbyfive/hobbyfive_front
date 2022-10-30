import React, {useState} from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import '../pages/SignUp.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    return (
        <div className="modals custommodal">
        <div className="modals-dialog" role="document">
            <div className="modals-content">
            <div className="modals-header">
                <h5 className="modals-title">로그인 하기</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modals" aria-label="Close">
                <span aria-hidden="true"></span>
                </button>
            </div>
            <div className="modals-body">
            <div className="form-floating mb-3"><input name="email" type="email" placeholder="name@example.com" value={email} onChange={onEmailHandler} className="form-control"/><label htmlFor="floatingInput">Email address</label></div>
            <div className="form-floating mb-3"><input name="password" type="password" placeholder="Password" value={password} onChange={onPasswordHandler} className="form-control"/><label htmlFor="floatingInput">Password</label></div>
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