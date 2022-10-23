import React, { useState } from 'react';
import './ClubDetail.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

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
};

export default function ClubDetail() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
              <div className="dRegion">Region</div>
              <div className="dCategory">Category</div>
            </div>
            <div className="dParticipants"></div>
          </div>
          <hr />
        </Box>
      </Modal>
    </div>
  );
}
