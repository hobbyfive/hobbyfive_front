import React, {useState} from 'react'
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

  const onSubmit = (event) => {
    event.preventDefault()
    if(password !== confirmPassword) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
    }
  }

  return (
    <div class="loginregister">
      <form>
          <div><input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} class="loginregister__input"/></div>
          <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} class="loginregister__input"/></div>
          <div><input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} class="loginregister__input"/></div>
          <div><input name="name" type="text" placeholder="이름" value={name} onChange={onNameHandler} class="loginregister__input"/></div>
          <div><input name="nickname" type="text" placeholder="별명" value={nickname} onChange={onNickNameHandler} class="loginregister__input"/></div>
          <div class="loginregister__input_checkbox">
            <input id="gender_man" type="radio" name="gender"/>남성  
            <input id="gender_woman" type="radio" name="gender"/>여성
            <div id="genderError" class="error"></div>
          </div>
          <div className="submit-button"><button type="submit" onSubmit={onSubmit} class="loginregister__button">계정 생성하기</button></div>
      </form>
    </div>
  );
}
export default SignUp;