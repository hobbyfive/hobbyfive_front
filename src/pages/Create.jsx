import React, { useEffect, useRef, useState } from 'react';
import './Create.css';
import './Main.css';
import hobbyfiveloggo from './high-five.png';

import TextField from '@mui/material/TextField';
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
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import { NoBackpackSharp } from '@mui/icons-material';

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
    dayjs('2022-11-04T18:00:01'),
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

  const [minNum, setMinNum] = useState('');
  const handleMinNum = event => {
    setMinNum(event.target.value);
  };
  const [maxNum, setMaxNum] = useState('');
  const handleMaxNum = event => {
    setMaxNum(event.target.value);
  };
  const [clubTitle, setClubTitle] = useState('');
  const handleClubTitle = event => {
    setClubTitle(event.target.value);
  };
  const [clubContent, setClubContent] = useState('');
  const handleClubContent = event => {
    setClubContent(event.target.value);
  };
  const navigate = useNavigate();
  const onNavi = () => {
    navigate(`/`);
  };

  const createClub = () => {
    // console.log(clubTitle);
    // console.log(clubContent);
    // console.log(gatheringDay);
    // console.log(deadLine);
    // console.log(new Date(deadLine));
    // console.log(minNum);
    // console.log(maxNum);
    // console.log(region);
    // console.log(category);
    axios
      .post(
        'http://18.206.77.87:8090/api/club/create',
        {
          title: clubTitle,
          content: clubContent,

          minNum: minNum,
          maxNum: maxNum,
          meetTime: new Date(gatheringDay),
          expiryTime: new Date(deadLine),
          district: region,
          category: category,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
        },
      )
      .then(res => {
        console.log(res.data);
        onNavi();
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  useEffect(() => {
    // axios({
    //   method: 'get',
    //   url: 'http://34.236.154.248:8090/api/hello',
    // })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    //   .catch(error => {
    //     throw new Error(error);
    //   });
  }, []);

  return (
    <div>
      <div className="center_box">
        <img src={hobbyfiveloggo} alt="logo" className="img" />
        <h1>HOBBYFIVE</h1>
      </div>

      <div className="wrap">
        <div className="menuBar">
          <ul className="tabs">
            <li className="active">모임 만들기</li>
            <li className="inactive"></li>
          </ul>
        </div>
        <div className="contents">
          <div>
            <div className="title">
              <legend>Title</legend>
              <input
                value={clubTitle}
                onChange={handleClubTitle}
                type="text"
                class="form-control"
                placeholder="제목을 입력해 주세요."
                id="inputDefault"
              />
            </div>

            {fileImage && (
              <div className="imageBox">
                <img alt="sample" src={fileImage} className="uploadedImage" />
              </div>
            )}

            <div className="textContent">
              <legend>Contents</legend>
              <textarea
                value={clubContent}
                onChange={handleClubContent}
                class="form-control form-control-lg"
                type="text"
                placeholder="내용을 입력해 주세요."
                id="inputLarge"
                rows="6"
              />
            </div>
            <div className="inputf">
              <label for="formFile" class="form-label">
                Image
              </label>
              <input
                class="form-control"
                type="file"
                accept="image/*"
                id="formFile"
                onChange={handleChange}
              />
            </div>

            <div className="timeBox">
              <div className="gatheringDay">
                <div className="gatheringDayText inlineBlock">모임예정일</div>
                {/* <h3 className="mr3">모임 예정일</h3> */}
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
              <div className="deadLine ">
                <div className="deadLineText inlineBlock">모집마감일</div>
                {/* <h3 className="mr3">모집 마감일</h3> */}
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
              <div className="inputGroup">
                <div class="form-group customWidth">
                  <label
                    class="col-form-label col-form-label-lg mt-4"
                    for="inputLarge"
                  >
                    최소 인원
                  </label>
                  <input
                    value={minNum}
                    onChange={handleMinNum}
                    class="form-control form-control-lg"
                    type="number"
                    placeholder="모임의 최소인원을 입력해 주세요"
                    id="inputLarge"
                  />
                </div>
                <div class="form-group customWidth">
                  <label
                    class="col-form-label col-form-label-lg mt-4"
                    for="inputLarge"
                  >
                    최대 인원
                  </label>
                  <input
                    value={maxNum}
                    onChange={handleMaxNum}
                    class="form-control form-control-lg"
                    type="number"
                    placeholder="모임의 최대인원을 입력해 주세요"
                    id="inputLarge"
                  />
                </div>
              </div>
              <div className="inputGroup">
                <div class="form-group customWidth">
                  <label
                    class="col-form-label col-form-label-lg mt-4"
                    for="inputLarge"
                  >
                    지역
                  </label>
                  <div class="form-group">
                    <select multiple="" class="form-select" id="exampleSelect2">
                      <option>강남</option>
                      <option>홍대</option>
                      <option>성수</option>
                      <option>명동</option>
                      <option>김포</option>
                      <option>용산</option>
                      <option>광화문</option>
                      <option>을지로</option>
                    </select>
                  </div>
                </div>
                <div class="form-group customWidth">
                  <label
                    class="col-form-label col-form-label-lg mt-4"
                    for="inputLarge"
                  >
                    카테고리
                  </label>
                  <div class="form-group">
                    <select multiple="" class="form-select" id="exampleSelect2">
                      <option>식사</option>
                      <option>운동</option>
                      <option>요리</option>
                      <option>춤</option>
                      <option>공부</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons">
              <button
                type="button"
                className="btn btn-primary cmargin"
                onClick={createClub}
              >
                개설하기
              </button>
              <Link to="/" type="button" className="btn btn-secondary">
                메인화면
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
