import React, { useEffect, useState } from 'react';
import { LoginModal } from '../components/LoginModal';
import ClubList from './ClubList';
import { SignUpModal } from '../components/SignUpModal';
import hobbyfiveloggo from './high-five.png'

import './Main.css'
import axios from 'axios';

const Main = () => {

  const[menu, setMenu] = useState(0);
  const[loginVisible, setLoginVisible] = useState(false);
  const[SignUpVisible, setSignUpVisible] = useState(false);
  const[loginStatus, setLoginStatus] = useState(false);
  const[signupStatus, setSignupStatus] = useState(false);
  const[companyName, setCompanyName] = useState('');
  const[userId, setUserId] = useState(0);

  const closeLoginModal = () => {
    setLoginVisible(!loginVisible);
  }

  const closeSignUpModal = () => {
    setSignUpVisible(!SignUpVisible);
  }

  const changeMenu = (menuIndex) =>{
    setMenu(menuIndex);
  }
  
  const getLoginStatus = (loginStatus) => {
    setLoginStatus(loginStatus);
  }

  const getSignUpStatus = (signupStatus) => {
    setSignupStatus(signupStatus);
  }

  if (loginStatus) {
    console.log('loginSuccess');
    console.log(localStorage.getItem('JWT'));
    axios( `http://18.206.77.87:8090/api/user`,
    {
      headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
    })
    .then(res => {
      setUserId(res.data.userId);
      setCompanyName(res.data.companyId.name);
      console.log(res.data);
    })
    .catch((error) => {
      throw new Error(error);
    });
    
  }
  
    return (
      <div>
        {/* 타이틀 */}
        <div className='center_box'>
        <a href="/">
        <img src={hobbyfiveloggo} alt='logo' className='img'/></a>
          <h1>HOBBYFIVE</h1>
        </div>

        {/* 로그인, 회원가입 */}
        <div className='right_box'>
        {loginVisible && <LoginModal closeLoginModal={closeLoginModal} getLoginStatus={getLoginStatus} />}
        {SignUpVisible && <SignUpModal closeSignUpModal={closeSignUpModal} getSignUpStatus={getSignUpStatus} />}
        {loginStatus ?
            <div>
            <a className='a-tag' >로그아웃</a>
            <a> / </a>
            <a className='a-tag' >메인으로</a> </div>
            : 
            <div>
            <a className='a-tag' onClick={closeLoginModal}>로그인</a>
            <a> / </a>
            <a className='a-tag' onClick={closeSignUpModal}>회원가입</a> </div>}
          
          
        </div>

        {/* 메인 탭 */}
        <div className="wrap">
          <div className="menuBar">
            <ul className="tabs">
              <li className={`${menu === 0? 'active': 'inactive'}`} onClick={() => changeMenu(0)}>내가 신청한 모임</li>
              <li className={`${menu === 1? 'active': 'inactive'}`} onClick={() => changeMenu(1)}>내가 만든 모임</li>
            </ul>
          </div>
          <div className="contents">
             <ClubList selectMenu={menu} userId={userId} /> 
          </div>
        </div>


      </div>

    );
};

export default Main;