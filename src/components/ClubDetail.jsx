import React, { useState } from 'react';
import './ClubDetail.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import GroupsIcon from '@mui/icons-material/Groups';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  padding: 4,
  width: '65vw',
  backgroundColor: 'white',
  borderRadius: '15px',
  border: '1px solid #EEEFF2',
  overflowY: 'scroll',
  height: '90%',
};

const StyledButton = styled(Button)({
  border: '1px solid',
  fontSize: '18px',
  color: 'black',
  backgroundColor: '#F9FAFB',
  borderColor: '#EEEFF2',
  width: '20%',
  '&:hover': {
    backgroundColor: '#e4e6e7',
    borderColor: '#bdbec2',
    boxShadow: 'none',
  },
});

export default function ClubDetail({ clubId }) {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [region, setRegion] = useState(['지역1(dummy)', '지역2(dummy)']);
  const [category, setCategory] = useState([
    '범주1(dummy)',
    '범주2(dummy)',
    '범주3(dummy)',
  ]);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="dTitleArea">
            <div className="dClubTitle">모임제목(dummy)</div>
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
          <hr />
          <div className="dOptions">
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
          </div>
          <hr />
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
          <div className="dButtons">
            <StyledButton>참가신청 or 모집마감</StyledButton>
            <StyledButton onClick={handleClose}>닫기</StyledButton>
          </div>

        </Box>
      </Modal>
    </div>
  );
}
