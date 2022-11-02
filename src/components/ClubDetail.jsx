import React, { useState } from 'react';
import './ClubDetail.css';
import '../pages/Modal.css'

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import GroupsIcon from '@mui/icons-material/Groups';



export default function ClubDetail({ closeClubModal, clubId }) {
  

  const [region, setRegion] = useState(['지역1(dummy)', '지역2(dummy)']);
  const [category, setCategory] = useState([
    '범주1(dummy)',
    '범주2(dummy)',
    '범주3(dummy)',
  ]);

  return (
    <div className='modal custom-modal'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className="modal-header">
            <div className="modal-title">모임제목(dummy)</div>
            <div className="timeArea">
              <div className="dGatheringDay">
                <Stack direction="row" spacing={1}>
                  <Chip label="모임 예정일" />
                  <Chip
                    label="2022년 11월 4일 18시(dummy)"
                    variant="outlined"
                  />
                </Stack>
              </div>
              <div className="dDeadLine">
                <Stack direction="row" spacing={1}>
                  <Chip label="모집 마감일" />
                  <Chip
                    label="2022년 11월 3일 18시(dummy)"
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
                  {region.map(v => {
                    return <Chip label={v} sx={{ mr: '0.5vw' }} />;
                  })}
                </div>
              </div>
              <div className="dCategory">
                <div className="dCategoryText">Category</div>
                <div className="dCategoryContent">
                  {category.map(v => {
                    return (
                      <Chip label={v} variant="outlined" sx={{ mr: '0.5vw' }} />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="dParticipants">
              <div className="dIcon">
                <GroupsIcon sx={{ fontSize: '4vh' }} />
              </div>
              <div className="dNum">3 / 6</div>
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
            <button type="button" className='btn btn-primary'>참가신청 or 모집마감</button>
            <button type="button" className='btn btn-secondary' onClick={closeClubModal}>닫기</button>
          </div>

        </div>
      </div>
    </div>
  );
}
