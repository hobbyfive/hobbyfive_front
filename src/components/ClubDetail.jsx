import React, { useEffect, useState } from 'react';
import './ClubDetail.css';
import '../pages/Modal.css'

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import GroupsIcon from '@mui/icons-material/Groups';
import axios from 'axios';



export default function ClubDetail({ closeClubModal, clubId }) {
  const [clubName, setClubName] = useState('');
  const [meetTime, setMeetTime] = useState('');
  const [expiryTime, setExpiryTime] = useState('');
  const [maxNum, setMaxNum] = useState('')
  const [currNum, setCurrNum] = useState('')

  const [region, setRegion] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios({
      method: "get",
      url: `http://34.236.154.248:8090/api/club/clubInfo/${clubId}`,
    })
      .then((res) => {
        console.log(res.data.districtId.name);
        setClubName(res.data.name)
        let mt = res.data.meetTime
        let lmeetTime = `${mt.slice(0, 4)}년 ${mt.slice(5, 7)}월 ${mt.slice(8, 10)}일 ${mt.slice(11, 13)}시 ${mt.slice(14, 16)}분`
        let et = res.data.expiryTime
        let lexpiryTime = `${et.slice(0, 4)}년 ${et.slice(5, 7)}월 ${et.slice(8, 10)}일 ${et.slice(11, 13)}시 ${et.slice(14, 16)}분`
        setMeetTime(lmeetTime)
        setExpiryTime(lexpiryTime)
        setRegion(res.data.districtId.name)
        setCategory(res.data.categoryId.name)
        setMaxNum(res.data.maxNum)
        setCurrNum(res.data.currNum)
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return (
    <div className='modal custom-modal fontsizebigger'>
      <div className='modal-dialog dmaxWidth'>
        <div className='modal-content'>
          <div className="modal-header dblock">
            <div className="modal-title dtitle">{clubName}</div>
            <div className="timeArea">
              <div className="dGatheringDay">
                <Stack direction="row" spacing={1}>
                  <Chip label="모임 예정일" />
                  <Chip
                    label={meetTime}
                    variant="outlined"
                  />
                </Stack>
              </div>
              <div className="dDeadLine">
                <Stack direction="row" spacing={1}>
                  <Chip label="모집 마감일" />
                  <Chip
                    label={expiryTime}
                    variant="outlined"
                  />
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

                  <Chip label={category} variant="outlined" sx={{ mr: '0.5vw' }} />

                </div>
              </div>
            </div>
            <div className="dParticipants">
              <div className="dIcon">
                <GroupsIcon sx={{ fontSize: '4vh' }} />
              </div>
              <div className="dNum">{currNum} / {maxNum}</div>
            </div>
            <div className="dImageBox">
              <img
                src="https://i.picsum.photos/id/377/1000/1000.jpg?hmac=X5DlFTiYUTtO6JBLOBmUOMPUAgvC8BefyGtLHNAmOWk"
                alt=""
                className="dImage"
              />
            </div>
            <div className="dTextContent">
              <textarea class="form-control" id="exampleTextarea" rows="8" disabled value={"ggggggggggggg"}></textarea>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className='btn btn-primary'>참가신청</button>
            <button type="button" className='btn btn-secondary' onClick={closeClubModal}>닫기</button>
          </div>

        </div>
      </div>
    </div>
  );
}
