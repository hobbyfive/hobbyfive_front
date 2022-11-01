import React, { useState } from 'react';
import ClubList from './ClubList';

import './Main.css'

const Main = () => {

  const[menu, setMenu] = useState(0)

  const changeMenu = (menuIndex) =>{
    setMenu(menuIndex);
  }

    return (
      <div>
        {/* 타이틀 */}
        <div className='center_box'>
          <h1>HOBBYFIVE</h1>
        </div>

        {/* 로그인, 회원가입 */}
        <div className='right_box'>
          <a className='login mycolor' href="/login">로그인</a>
          <a className='join' href="/join">회원가입</a>
        </div>

        {/* 메인 탭 */}
        <div className="wrap">
          <div className="menuBar">
            <ul className="tabs">
              <li className={`${menu === 0? 'active': 'inactive'}`} onClick={() => changeMenu(0)}>전체</li>
              <li className={`${menu === 1? 'active': 'inactive'}`} onClick={() => changeMenu(1)}>신세계아이앤씨</li>
            </ul>
          </div>
          <div className="contents">
             <ClubList selectMenu={menu} /> 
          </div>
        </div>


      </div>

    );
};

export default Main;