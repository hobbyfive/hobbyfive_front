import React, { useState } from 'react';

import './ClubList.css'

const ClubList = ({selectMenu}) => {
  const [clubList, setClubList] = useState([{title:"모임명1"}, {title:"모임명2"}, {title:"모임명3"}, {title:"모임명4"}]);
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "/emp/emplist.do", // 필터링 조건 , data: ['',''] ?.
  //   })
  //     .then((res) => {
  //       setEmpList(res.data);
  //     })
  //     .catch((error) => {
  //       throw new Error(error);
  //     });
  // }, []);

    return (
        <div>

          <div className='createClub'>
            <a href="/create">모임 개설</a>
          </div>

          <div className='clublistGrid'>
            <div className='filter'>
              <button type="button" class="btn btn-outline-secondary">FILTER</button>
              <div className='breadcrumb'>FILTER</div>
              <div className='filter_title'>Date</div>
              <div className='filter_content'></div>
              <div className='filter_title'>Category</div>
              <div className='filter_title'>Location</div>
            </div>
            
            <div className='clubs'>
                {
                  clubList.map((club, index) => (
                    <div className="card custom-card" key={index}>
                      <div className="custom-card-body">
                        <img className='custom-card-img' alt="HTML" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F05jk8%2FbtqFNhPwZ8D%2FKSyAaHOZKrXHsq56K731e1%2Fimg.png"/>
                        <span class="badge bg-info">모집중</span>
                        <span class="badge bg-secondary">운동</span>
                        <h4 className="custom-card-title">{club.title}</h4>
                        <p className="card-text">정원 : 2/4</p>
                        <p className="card-text">모임예정일 : 10/26</p>
                        <p className="card-text">만료일자 : ~까지</p>
                      </div>
                    </div>
                  ))
                }
                
                

              
              <div className='page-wrap'>
                <ul class="pagination pagination-sm">
                  <li class="page-item"><a class="page-link" href="#none">&laquo;</a></li>
                  <li class="page-item active"><a class="page-link" href="#none">1</a></li>
                  <li class="page-item"><a class="page-link" href="#none">2</a></li>
                  <li class="page-item"><a class="page-link" href="#none">3</a></li>
                  <li class="page-item"><a class="page-link" href="#none">4</a></li>
                  <li class="page-item"><a class="page-link" href="#none">5</a></li>
                  <li class="page-item"><a class="page-link" href="#none">&raquo;</a></li>
                </ul>
              </div>
            </div>
          </div>

          { selectMenu === 0 ? "all" : "part"}
        </div>

    );
};

export default ClubList;