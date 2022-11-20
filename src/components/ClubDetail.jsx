import React, { useEffect, useState } from 'react';
import './ClubDetail.css';
import '../pages/Modal.css';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import GroupsIcon from '@mui/icons-material/Groups';
import axios from 'axios';

export default function ClubDetail({ closeClubModal, clubId }) {
  const [clubName, setClubName] = useState('');
  const [meetTime, setMeetTime] = useState('');
  const [expiryTime, setExpiryTime] = useState('');
  const [maxNum, setMaxNum] = useState('');
  const [currNum, setCurrNum] = useState('');
  const [content, setContent] = useState('');

  const [region, setRegion] = useState('');
  const [category, setCategory] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const [state, setState] = useState('Loading...');

  const [currentUser, setCurrentUser] = useState('');
  const [status, setStatus] = useState(0);
  // 0:미참가자, 1: 마스터, 2: 기참가자

  const clubClose = () => {
    axios
      .post(
        `http://18.206.77.87:8090/api/club/mail/send/${clubId}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
        },
      )
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  const already = () => {
    alert('이미 신청 완료되었습니다.');
  };

  const handleJoin = () => {
    axios
      .post(
        `http://18.206.77.87:8090/api/clubmember/post/${clubId}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
        },
      )
      .then(res => {
        alert('참가신청 완료되었습니다.');
        setCurrNum(currNum + 1);
        setState('신청완료');
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://18.206.77.87:8090/api/user`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
      })
      .then(res => {
        setCurrentUser(res.data.userId);

        axios({
          method: 'get',
          url: `http://18.206.77.87:8090/api/clubmember/list/${clubId}`,
        }).then(res => {
          for (const elem of res.data) {
            if (elem.userId === currentUser && elem.isMasterUser === 1) {
              setStatus(1);
              setState('마감하기');
              break;
            } else if (elem.userId === currentUser) {
              setStatus(2);
              setState('신청완료');
              break;
            }
          }
          if (currentUser && state !== 'Loading...') {
            setState('참가신청');
          }

          axios({
            method: 'get',
            url: `http://18.206.77.87:8090/api/club/clubInfo/${clubId}`,
          })
            .then(res => {
              setClubName(res.data.title);
              let mt = res.data.meetTime;
              let lmeetTime = `${mt.slice(0, 4)}년 ${mt.slice(
                5,
                7,
              )}월 ${mt.slice(8, 10)}일 ${mt.slice(11, 13)}시 ${mt.slice(
                14,
                16,
              )}분`;
              let et = res.data.expiryTime;
              let lexpiryTime = `${et.slice(0, 4)}년 ${et.slice(
                5,
                7,
              )}월 ${et.slice(8, 10)}일 ${et.slice(11, 13)}시 ${et.slice(
                14,
                16,
              )}분`;
              setMeetTime(lmeetTime);
              setExpiryTime(lexpiryTime);
              setRegion(res.data.district.districtName);
              setCategory(res.data.category.categoryName);
              setMaxNum(res.data.maxNum);
              setCurrNum(res.data.currNum);
              setContent(res.data.content);
              setImgUrl(res.data.imageUrl);
              if (res.data.currNum >= res.data.maxNum) {
                setState('모집마감');
              }
            })
            .catch(error => {
              throw new Error(error);
            });
        });
      });
  }, [currNum]);

  return (
    <div className="modal custom-modal fontsizebigger">
      <div className="modal-dialog dmaxWidth">
        <div className="modal-content">
          <div className="modal-header dblock">
            <div className="modal-title dtitle">{clubName}</div>
            <div className="timeArea">
              <div className="dGatheringDay">
                <Stack direction="row" spacing={1}>
                  <Chip label="모임 예정일" />
                  <Chip label={meetTime} variant="outlined" />
                </Stack>
              </div>
              <div className="dDeadLine">
                <Stack direction="row" spacing={1}>
                  <Chip label="모집 마감일" />
                  <Chip label={expiryTime} variant="outlined" />
                </Stack>
              </div>
            </div>
          </div>
          <div className="modal-body">
            <div className="dLeftOptions">
              <div className="dRegion">
                <div className="dRegionText">Region</div>
                <div className="dRegionContent">
                  <Chip label={region} sx={{ mr: '0.5vw' }} />
                </div>
              </div>
              <div className="dCategory">
                <div className="dCategoryText">Category</div>
                <div className="dCategoryContent">
                  <Chip
                    label={category}
                    variant="outlined"
                    sx={{ mr: '0.5vw' }}
                  />
                </div>
              </div>
            </div>
            <div className="dParticipants">
              <div className="dIcon">
                <GroupsIcon sx={{ fontSize: '4vh' }} />
              </div>
              <div className="dNum">
                {currNum} / {maxNum}
              </div>
            </div>
            <div className="dImageBox">
              <img src={imgUrl} alt="" className="dImage" />
            </div>
            <div className="dTextContent">
              <textarea
                class="form-control"
                id="exampleTextarea"
                rows="5"
                disabled
                value={content}
              ></textarea>
            </div>
          </div>

          <div className="modal-footer">
            {status === 0 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleJoin}
              >
                {state}
              </button>
            ) : status === 1 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={clubClose}
              >
                {state}
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={already}
              >
                {state}
              </button>
            )}

            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeClubModal}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
