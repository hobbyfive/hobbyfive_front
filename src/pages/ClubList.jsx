import React, { useState } from 'react';
import ClubDetail from '../components/ClubDetail';

import './ClubList.css'
import FilterModal from './FilterModal';

const ClubList = ({selectMenu}) => {
  const [clubList, setClubList] = useState([{title:"모임명1"}, {title:"모임명2"}, {title:"모임명3"}, {title:"모임명4"}]);
  const [filterVisible, setFilterVisible] = useState(false);
  const [clubVisible, setClubVisible] = useState(false);

  const closeFilterModal = () => {
    setFilterVisible(!filterVisible);
  }

  const closeClubModal = () => {
    setClubVisible(!clubVisible);
  }


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
              {filterVisible && <FilterModal closeFilterModal={closeFilterModal} />}
              <div className='breadcrumb btn btn-outline-secondary bg' onClick={closeFilterModal}>FILTER</div>
              <div className='filter_title'>Date</div>
              <div className='filter_content'></div>
              <div className='filter_title'>Category</div>
              <div className='filter_title'>Location</div>
            </div>
            
            <div className='clubs'>
                {clubVisible && <ClubDetail closeClubModal={closeClubModal} clubId={1}/>}
                {
                  clubList.map((club, index) => (
                    <div className="card custom-card" key={index} onClick={closeClubModal}>
                      <div className="custom-card-body">
                        <img className='custom-card-img' alt="HTML" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F05jk8%2FbtqFNhPwZ8D%2FKSyAaHOZKrXHsq56K731e1%2Fimg.png"/>
                        <span className="badge bg-info">모집중</span>
                        <span className="badge bg-secondary">운동</span>
                        <h4 className="custom-card-title">{club.title}</h4>
                        <p className="card-text">정원 : 2/4</p>
                        <p className="card-text">모임예정일 : 10/26</p>
                        <p className="card-text">모집마감일 : ~까지</p>
                      </div>
                    </div>
                  ))
                }
                
                

              
              <div className='page-wrap'>
                <ul className="pagination pagination-sm">
                  <li className="page-item"><a className="page-link" href="#none">&laquo;</a></li>
                  <li className="page-item active"><a className="page-link" href="#none">1</a></li>
                  <li className="page-item"><a className="page-link" href="#none">2</a></li>
                  <li className="page-item"><a className="page-link" href="#none">3</a></li>
                  <li className="page-item"><a className="page-link" href="#none">4</a></li>
                  <li className="page-item"><a className="page-link" href="#none">5</a></li>
                  <li className="page-item"><a className="page-link" href="#none">&raquo;</a></li>
                </ul>
              </div>
            </div>
          </div>

          { selectMenu === 0 ? "all" : "part"}
        </div>

    );
};

export default ClubList;