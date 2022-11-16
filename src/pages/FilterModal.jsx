import React, { useState } from 'react';

import './Modal.css'
import './FilterModal.css'

const STATUS_LIST = [
    { id: 0, data: '모집중' },
    { id: 1, data: '모집완료' }
    ]

const CATEGORY_LIST = [
    { id: 0, data: '술' },
    { id: 1, data: '운동' },
    { id: 2, data: '요리' },
    { id: 3, data: '춤' },
    { id: 4, data: '노래' }
    ]

const LOCATION_LIST = [
    { id: 0, data: '강서구' },
    { id: 1, data: '양천구' },
    { id: 2, data: '구로구' },
    { id: 3, data: '금천구' },
    { id: 4, data: '관악구' },
    { id: 5, data: '영등포구' },
    { id: 6, data: '마포구' },
    { id: 7, data: '동작구' },
    { id: 8, data: '서초구' },
    { id: 9, data: '용산구' },
    { id: 10, data: '서대문구' },
    { id: 11, data: '은평구' },
    { id: 12, data: '종로구' },
    { id: 13, data: '중구' },
    { id: 14, data: '강남구' },
    { id: 15, data: '성북구' },
    { id: 16, data: '강북구' },
    { id: 17, data: '동대문구' },
    { id: 18, data: '도봉구' },
    { id: 19, data: '성동구' },
    { id: 20, data: '송파구' },
    { id: 21, data: '광진구' },
    { id: 22, data: '노원구' },
    { id: 23, data: '중랑구' },
    { id: 24, data: '강동구' }
]

const FilterModal = ({closeFilterModal}) => {

    const [checkedStList, setCheckedStList] = useState([]);
    const [checkedCgList, setCheckedCgList] = useState([]);
    const [checkedLcList, setCheckedLcList] = useState([]);

    const onCheckedStElement = (checked, item) => {
        if (checked) {
            setCheckedStList([...checkedStList, item]);
        } else {
            setCheckedStList(checkedStList.filter(el => el !== item));
        }
    };

    const onCheckedCgElement = (checked, item) => {
        if (checked) {
            setCheckedCgList([...checkedCgList, item]);
        } else {
            setCheckedCgList(checkedCgList.filter(el => el !== item));
        }
    };

    const onCheckedLcElement = (checked, item) => {
        if (checked) {
            setCheckedLcList([...checkedLcList, item]);
        } else {
            setCheckedLcList(checkedLcList.filter(el => el !== item));
        }
    };

    const onRemove = item => {
        setCheckedStList(checkedStList.filter(el => el !== item));
        setCheckedCgList(checkedCgList.filter(el => el !== item));
        setCheckedLcList(checkedLcList.filter(el => el !== item));
    };

    const Filter = () => {
        closeFilterModal(checkedStList, checkedCgList, checkedLcList);
    }

    return (
        <div class="modal custom-modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">원하는 날짜, 지역, 카테고리에 맞는 모임을 찾아보세요 !</h5>
                        <button type="button" class="btn-close" onClick={closeFilterModal}>
                        <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className='filter_title'>Date</div>
                        <div>-------------------------------------------------</div>
                        <div className='filter_title'>Status</div>
                            {STATUS_LIST.map(item => {
                                return (
                                    <div class="form-check" style={{display : 'inline-block', 'margin-right' : '7px'}}>
                                        <input class="form-check-input" type="checkbox" value={item.data} id="flexCheckDefault"
                                        onChange={e => {onCheckedStElement(e.target.checked, e.target.value)}}
                                        checked={checkedStList.includes(item.data) ? true : false}/>
                                        <label class="form-check-label" for="flexCheckDefault" key={item.id}>
                                        {item.data}
                                        </label>
                                    </div>
                                );
                            })}
                        <div>-------------------------------------------------</div>
                        <div className='filter_title'>Category</div>
                            {CATEGORY_LIST.map(item => {
                                return (
                                    <div class="form-check" style={{display : 'inline-block', 'margin-right' : '7px'}}>
                                        <input class="form-check-input" type="checkbox" value={item.data} id="flexCheckDefault"
                                        onChange={e => {onCheckedCgElement(e.target.checked, e.target.value)}}
                                        checked={checkedCgList.includes(item.data) ? true : false}/>
                                        <label class="form-check-label" for="flexCheckDefault" key={item.id}>
                                        {item.data}
                                        </label>
                                    </div>
                                );
                            })}


                        <div>-------------------------------------------------</div>
                        <div className='filter_title'>Location</div>
                            {LOCATION_LIST.map(item => {
                                    return (
                                        <div class="form-check" style={{display : 'inline-block', 'margin-right' : '7px'}}>
                                            <input class="form-check-input" type="checkbox" value={item.data} id="flexCheckDefault"
                                            onChange={e => {onCheckedLcElement(e.target.checked, e.target.value)}}
                                            checked={checkedLcList.includes(item.data) ? true : false}/>
                                            <label class="form-check-label" for="flexCheckDefault" key={item.id}>
                                            {item.data}
                                            </label>
                                        </div>
                                    );
                                })}
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onClick={Filter}>필터 설정</button>
                        <button type="button" class="btn btn-secondary" onClick={closeFilterModal}>닫기</button>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default FilterModal;