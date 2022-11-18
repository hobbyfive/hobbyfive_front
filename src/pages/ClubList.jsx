import React, { useEffect, useState } from 'react';
import ClubDetail from '../components/ClubDetail';

import './ClubList.css'
import FilterModal from './FilterModal';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ClubList = ({selectMenu, userId}) => {
  const [clubList, setClubList] = useState([]);
  const [filterVisible, setFilterVisible] = useState(false);
  const [clubVisible, setClubVisible] = useState(false);
  const [switchId, setSwitchId] = useState(0);
  const [statusData, setStatusData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [locationData, setLocationData] = useState([]);

  const closeFilterModal = (f_status, f_category, f_location) => {
    setFilterVisible(!filterVisible);
    
    setStatusData(f_status);
    setCategoryData(f_category);
    setLocationData(f_location);
  }

  const closeClubModal = (clubId) => {
    setClubVisible(!clubVisible);
    setSwitchId(clubId);
  }

  const print_filter = (arr) => {
    const result = [];

    if (arr) {
      if (arr.length === 0) {
        result.push("전체");
      } else {
        for (let i = 0; i < arr.length; i++) {
          if (i === arr.length - 1) {
            result.push(arr[i]);
          } else {
            result.push(arr[i] + " / ");
          }
        }
      }
      
    }
    

    return result;
  }
  
  
  const AllClub = (selectMenu) => {
    console.log(selectMenu); 
    console.log("전체선택함");
    useEffect(() => {
      axios.get("http://18.206.77.87:8090/api/club/allClub")
        .then((res) => {
          console.log(res.data);
          setClubList(res.data);
        })
        .catch((error) => {
          throw new Error(error);
        });
    }, [selectMenu]);
    
  }


  const CompanyClub = (selectMenu, userId) => {
    console.log("회사선택함");
    console.log(selectMenu);
    useEffect(() => {
      axios.get(`http://18.206.77.87:8090/api/club/selectClubByCompanyId/${userId}`)
        .then((res) => {
          setClubList(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          throw new Error(error);
        });
    }, [selectMenu]);
    
  }

  if (selectMenu === 0) {
    AllClub(selectMenu);
  } else {
    CompanyClub(selectMenu, userId);
  }
  

    return (
        <div>

          <div className='createClub'>
            <Link to="/create" className='a-tag'>모임 개설</Link>
          </div>

          <div className='clublistGrid'>

            <div className='filter'>
              {filterVisible && <FilterModal closeFilterModal={closeFilterModal} />}
              <div className='breadcrumb btn btn-outline-secondary bg' onClick={closeFilterModal}>FILTER</div>
              <div className='filter_title'>Date</div>
              <div className='filter_content'>전체</div>
              <div>------------------</div>
              <div className='filter_title'>Status</div>
              <div className='filter_content'>{print_filter(statusData)}</div>
              <div>------------------</div>
              <div className='filter_title'>Category</div>
              <div className='filter_content'>{print_filter(categoryData)}</div>
              <div>------------------</div>
              <div className='filter_title'>Location</div>
              <div className='filter_content'>{print_filter(locationData)}</div>
            </div>
            
            <div className='clubs'>
                {clubVisible && <ClubDetail closeClubModal={closeClubModal} clubId={switchId}/> }
               
               
                {
                  
                  clubList.map((club, index) => (
                    
                    <div className="card custom-card" key={index} onClick={() => closeClubModal(club.clubId)}>
                      
                      <div className="custom-card-body">
                        <img className='custom-card-img' alt="HTML" src={club.imageUrl}/>
                        {club.status.description === "모집중" ? <span className="badge bg-success">{club.status.description}</span>
                        : <span className="badge bg-danger">{club.status.description}</span>}
                        
                        <span className="badge bg-secondary">{club.categoryId}</span>
                        <h4 className="custom-card-title">{club.title}</h4>
                        <p className="card-text">신청 인원 : {club.currNum}/{club.maxNum} ({club.minNum}명이상 개설)</p>
                        <p className="card-text">모임 예정일 : {club.meetTime.slice(0, 4)}/{club.meetTime.slice(5, 7)}/{club.meetTime.slice(8,10)} {club.meetTime.slice(11, 13)}:{club.meetTime.slice(14, 16)}</p>
                        <p className="card-text">모집 마감일 : {club.expiryTime.slice(0, 4)}/{club.expiryTime.slice(5, 7)}/{club.expiryTime.slice(8,10)} {club.expiryTime.slice(11, 13)}:{club.expiryTime.slice(14, 16)}</p>
                      </div>
                    </div>
                  ))
                }
                

              
              <div className='page-wrap'>
                <ul className="pagination pagination-sm">
                  <li className="page-item"><a className="page-link" href="#none">&#60;</a></li>
                  <li className="page-item active"><a className="page-link" href="#none">1</a></li>
                  <li className="page-item"><a className="page-link" href="#none">2</a></li>
                  <li className="page-item"><a className="page-link" href="#none">3</a></li>
                  <li className="page-item"><a className="page-link" href="#none">4</a></li>
                  <li className="page-item"><a className="page-link" href="#none">5</a></li>
                  <li className="page-item"><a className="page-link" href="#none">&#62;</a></li>
                </ul>
              </div>

            </div>
            
          </div>

          
        </div>

    );
};

export default ClubList;