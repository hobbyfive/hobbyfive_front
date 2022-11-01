import React, { useState } from 'react';

import './Tmp.css';

import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import Box from '@mui/material/Box';

const StyledTabs = styled(Tabs)({
  margin: '1vh auto',
  width: '80vw',
});

const StyledTab = styled(Tab)({
  '&.Mui-selected': { backgroundColor: 'black' },
});

export default function Tmp() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <header></header>
      <StyledTabs value={value} onChange={handleChange}>
        <StyledTab label="공지사항" />
        <StyledTab label="강의 게시판" />
      </StyledTabs>
      {value === 0 && <div>공지사항</div>}
      {value === 1 && (
        <Box
          sx={{
            margin: '1vh auto',

            width: '80vw',

            backgroundColor: 'white',
            borderRadius: '15px',
            border: '1px solid #EEEFF2',
          }}
        >
          <div className="hoho2">
            <div className="hehe">
              <h2 className="h2g">질문하기</h2>
              <button>취소</button>
            </div>

            <div className="hehe2">
              <TextField
                id="outlined-textarea"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">0 / 100</InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <TextField id="outlined-textarea" fullWidth multiline rows={18} />
              <div className="hehe3">
                <span className="hehe4">0 / 50000</span>
              </div>
            </div>
          </div>

          <div className="hoho hoho2">
            <div className="hehe">
              <h2 className="h2g">분류선택</h2>
            </div>
          </div>
        </Box>
      )}
    </div>
  );
}
