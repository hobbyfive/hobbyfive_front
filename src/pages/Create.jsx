import React, { useRef, useState } from 'react';
import './Create.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Create = () => {
  const [gatheringDay, setGatheringDay] = useState(
    dayjs('2022-11-04T18:00:00'),
  );
  const [deadLine, setDeadLine] = useState(dayjs('2022-11-04T18:00:00'));
  const handleGatheringDay = newValue => {
    setGatheringDay(newValue);
  };
  const handleDeadLine = newValue => {
    setDeadLine(newValue);
  };

  const fileInput = useRef(null);
  const handleButtonClick = e => {
    fileInput.current.click();
  };
  const handleChange = e => {
    console.log(e.target.files[0]);
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
  const [fileImage, setFileImage] = useState('');

  return (
    <div>
      <header></header>
      <h1 className="pageTitle">모임 만들기</h1>
      <Box
        sx={{
          margin: '1vh auto',
          width: '65vw',
          backgroundColor: 'white',
          borderRadius: '15px',
          border: '1px solid #EEEFF2',
        }}
      >
        <div className="title">
          <TextField
            id="outlined-textarea"
            fullWidth
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
          />
        </div>
        <div className="imageBox" onClick={handleButtonClick}>
          {fileImage && (
            <img alt="sample" src={fileImage} className="uploadedImage" />
          )}
          {!fileImage && (
            <div className="muiIcon">
              <AddPhotoAlternateIcon fontSize="large" />
              <input
                type="file"
                accept="image/*"
                ref={fileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
              />
            </div>
          )}
        </div>
        <div className="timeBox">
          <div className="gatheringDay">
            <div className="gatheringDayText inlineBlock">모임예정일</div>
            <div className="gatheringDayContent inlineBlock">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  value={gatheringDay}
                  onChange={handleGatheringDay}
                  renderInput={params => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="deadLine">
            <div className="deadLineText inlineBlock">모집마감일</div>
            <div className="deadLineContent inlineBlock">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  value={deadLine}
                  onChange={handleDeadLine}
                  renderInput={params => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Create;
