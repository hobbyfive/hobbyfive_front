import React, {useState} from "react"; 
import '../pages/Modal.css'
import './SignUp.css'
import axios from "axios";

const SignUpModal = ({closeSignUpModal, getSignUpStatus}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  const [nickname, setNickName] = useState("")
  const [companyName, setCompany] = useState("")
  const [gender, setGender] = useState("M")


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

  const onCompanyHandler = (event) => {
    setCompany(event.currentTarget.value)
  }

  const onGenderHandler = (event) => {
    setGender(event.currentTarget.value)
  }

  const SignUp = () => {
    if(password !== confirmPassword) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
    } else {
      console.log(email, password, name, nickname, gender, companyName);
      axios.post("http://18.206.77.87:8090/api/signup", {
        email,
        password,
        name,
        nickname,
        gender,
        company : {
          companyName
        },
      })
        .then((res) => {
          console.log(res.data);
          getSignUpStatus(true);
          closeSignUpModal();
          return alert('회원가입이 완료되었습니다.')
        })
        .catch((error) => {
          console.log(error.response.data);
          throw new Error(error);
        });
        
    }
  }
  
  return (
    <div className="modal custom-modal">
      <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">SignUp</h5>
              </div>
              <div className="modal-body">
                <div className="loginregister">
                  <form>
              <div className="form-floating mb-3 input_box"><input name="email" type="email" placeholder="name@example.com" value={email} onChange={onEmailHandler} className="form-control"/><label for="floatingInput">Email 주소</label></div>
              <div className="form-floating mb-3"><input name="password" type="password" placeholder="Password" value={password} onChange={onPasswordHandler} className="form-control"/><label for="floatingInput">비밀번호</label></div>
              <div className="form-floating mb-3"><input name="confirmPassword" type="password" placeholder="ConfirmPassword" value={confirmPassword} onChange={onConfirmPasswordHandler} className="form-control"/><label for="floatingInput">비밀번호 확인</label></div>
              <div className="form-floating mb-3"><input name="name" type="text" placeholder="Name" value={name} onChange={onNameHandler} className="form-control"/><label for="floatingInput">이름</label></div>
              <div className="form-floating mb-3"><input name="nickname" type="text" placeholder="NickName" value={nickname} onChange={onNickNameHandler} className="form-control"/><label for="floatingInput">닉네임</label></div>
              <div className="form-floating mb-3"><input name="companyName" type="text" placeholder="Company" value={companyName} onChange={onCompanyHandler} className="form-control"/><label for="floatingInput">회사명</label></div>
              <div className="form-check">
                <input id="gender_man" type="radio" name="gender" className="form-check-input" value="M" onChange={onGenderHandler}/><label className="form-check-label" for="gender_man">
                  저는 남자입니다.</label></div>
              <div className="form-check">
                <input id="gender_woman" type="radio" name="gender" className="form-check-input" value="F" onChange={onGenderHandler}/><label className="form-check-label" for="gender_woman">
                  저는 여자입니다.</label>
              </div>
          </form>
        </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => SignUp()}>가입하기</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeSignUpModal}>나중에</button>
              </div>
            </div>
          </div>
    </div>
  );
}
 
export {SignUpModal};
