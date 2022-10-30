import React, { useRef, useState } from 'react';
import './Create.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import ClubDetail from '../components/ClubDetail';

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

  const [region, setRegion] = useState('');
  const handleRegion = event => {
    setRegion(event.target.value);
  };

  const [category, setCategory] = useState('');
  const handleCategory = event => {
    setCategory(event.target.value);
  };
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
            placeholder="제목을 입력해 주세요"
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
        <div className="textContent">
          <TextField
            id="outlined-textarea"
            fullWidth
            placeholder="내용을 입력해 주세요"
            multiline
            rows={18}
          />
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
        <div className="options">
          <TextField
            sx={{ width: '24%' }}
            id="outlined-basic"
            type="number"
            label="최소인원"
            variant="outlined"
          />
          <TextField
            sx={{ width: '24%' }}
            id="outlined-basic"
            type="number"
            label="최대인원"
            variant="outlined"
          />
          <FormControl sx={{ width: '24%' }}>
            <InputLabel id="demo-simple-select-label">지역</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={region}
              label="region"
              onChange={handleRegion}
            >
              <MenuItem value={'지역1'}>지역1</MenuItem>
              <MenuItem value={'지역2'}>지역2</MenuItem>
              <MenuItem value={'지역3'}>지역3</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: '24%' }}>
            <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="category"
              onChange={handleCategory}
            >
              <MenuItem value={'범주1'}>범주1</MenuItem>
              <MenuItem value={'범주2'}>범주2</MenuItem>
              <MenuItem value={'범주3'}>범주3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="buttons">
          <StyledButton>만들기</StyledButton>
          <StyledButton>취소</StyledButton>
          <ClubDetail />
        </div>
      </Box>
    </div>
  );
};

export default Create;
