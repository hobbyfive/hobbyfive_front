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
          <input type="text" class="form-control" placeholder="제목을 입력해 주세요." id="inputDefault" />
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
          <textarea class="form-control form-control-lg" type="text" placeholder="내용을 입력해 주세요." id="inputLarge" rows="18" />

        </div>

        <div className="timeBox">
          <div className="breadcrumb gatheringDay">
            {/* <div className="gatheringDayText inlineBlock">모임예정일</div> */}
            <h3 className="mr3">모임 예정일</h3>
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
          <div className="breadcrumb deadLine ">
            {/* <div className="deadLineText inlineBlock">모집마감일</div> */}
            <h3 className="mr3">모집 마감일</h3>
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
          <div className='breadcrumb uicenter'>
            <TextField
              sx={{ width: '100%' }}
              id="outlined-basic"
              type="number"
              label="최소인원"
              variant="standard"
            />
          </div>
          <div className='breadcrumb uicenter'>
            <TextField
              sx={{ width: '100%' }}
              id="outlined-basic"
              type="number"
              label="최대인원"
              variant="standard"
            />
          </div>
          <div className='breadcrumb uicenter'>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-label">지역</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={region}
                label="region"
                onChange={handleRegion}
                variant="standard"
              >
                <MenuItem value={'지역1'}>지역1</MenuItem>
                <MenuItem value={'지역2'}>지역2</MenuItem>
                <MenuItem value={'지역3'}>지역3</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='breadcrumb uicenter'>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="category"
                onChange={handleCategory}
                variant="standard"
              >
                <MenuItem value={'범주1'}>범주1</MenuItem>
                <MenuItem value={'범주2'}>범주2</MenuItem>
                <MenuItem value={'범주3'}>범주3</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="buttons">
          <button type="button" class="btn btn-outline-success">만들기</button>
          <button type="button" class="btn btn-outline-danger">취소</button>
        </div>
      </Box>
    </div>
  );
};

export default Create;
