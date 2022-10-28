import React, {useState} from 'react'
import { Navigate } from 'react-router';
import './SignUp.css'

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  const [nickname, setNickName] = useState("")


  const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
      setConfirmPassword(event.currentTarget.value)
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const onNickNameHandler = (event) => {
    setNickName(event.currentTarget.value)
  }

  const onSubmit = () => {
    if(password !== confirmPassword) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
    } else {
      document.location.href('/')
    }
  }

  return (
    <div className="loginregister">
      <form>
          <div className="form-floating mb-3"><input name="email" type="email" placeholder="name@example.com" value={email} onChange={onEmailHandler} className="form-control"/><label for="floatingInput">Email address</label></div>
          <div className="form-floating mb-3"><input name="password" type="password" placeholder="Password" value={password} onChange={onPasswordHandler} className="form-control"/><label for="floatingInput">Password</label></div>
          <div className="form-floating mb-3"><input name="confirmPassword" type="password" placeholder="ConfirmPassword" value={confirmPassword} onChange={onConfirmPasswordHandler} className="form-control"/><label for="floatingInput">Confirm Password</label></div>
          <div className="form-floating mb-3"><input name="name" type="text" placeholder="Name" value={name} onChange={onNameHandler} className="form-control"/><label for="floatingInput">Name</label></div>
          <div className="form-floating mb-3"><input name="nickname" type="text" placeholder="NickName" value={nickname} onChange={onNickNameHandler} className="form-control"/><label for="floatingInput">Nickname</label></div>
          <div className="form-check">
            <input id="gender_man" type="radio" name="gender" className="form-check-input"/><label className="form-check-label" for="gender_man">
              I am a man.</label></div>
          <div className="form-check">
            <input id="gender_woman" type="radio" name="gender" className="form-check-input"/><label className="form-check-label" for="gender_man">
              I am a woman.</label>
          </div>
          <div className="submit-button"><button type="submit" onClick={() => onSubmit()} className="btn btn-primary">I'm ready to create my account!</button></div>
      </form>
    </div>
  );
}
export default SignUp;