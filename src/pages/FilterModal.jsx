import React, { useEffect, useState } from 'react';

import './Modal.css'
import './FilterModal.css'
import axios from 'axios';

const STATUS_LIST = [
    { id: 1, data: '모집중' },
    { id: 2, data: '모집완료' }
    ]

const CATEGORY_LIST = [
    { id: 1, data: '식사' },
    { id: 2, data: '운동' },
    { id: 3, data: '요리' },
    { id: 4, data: '춤' },
    { id: 5, data: '공부' }
    ]

const LOCATION_LIST = [
    { id: 1, data: '강남' },
    { id: 2, data: '홍대' },
    { id: 3, data: '성수' },
    { id: 4, data: '명동' },
    { id: 5, data: '김포' },
    { id: 6, data: '용산' },
    { id: 7, data: '광화문' },
    { id: 8, data: '을지로' }
]

const FilterModal = ({closeFilterModal, statusData, categoryData, locationData}) => {

    const [checkedStList, setCheckedStList] = useState(statusData);
    const [checkedCgList, setCheckedCgList] = useState(categoryData);
    const [checkedLcList, setCheckedLcList] = useState(locationData);

    const onCheckedStElement = (checked, item) => {
        if (checked) {
            setCheckedStList(item);
        } else {
            setCheckedStList(checkedStList.filter(el => el !== item));
        }
    };

    const onCheckedCgElement = (checked, item) => {
        if (checked) {
            setCheckedCgList(item);
        } else {
            setCheckedCgList(checkedCgList.filter(el => el !== item));
        }
    };

    const onCheckedLcElement = (checked, item) => {
        if (checked) {
            setCheckedLcList(item);
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
        closeFilterModal([STATUS_LIST[checkedStList-1]], [CATEGORY_LIST[checkedCgList-1]], [LOCATION_LIST[checkedLcList-1]], 1);
    }

    

    return (
        <div class="modal custom-modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">원하는 지역, 카테고리에 맞는 모임을 찾아보세요 !</h5>
                        <button type="button" class="btn-close" onClick={closeFilterModal}>
                        <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className='filter_title'>Status</div>
                            {STATUS_LIST.map(item => {
                                return (
                                    <div class="form-check" style={{display : 'inline-block', 'margin-right' : '7px'}}>
                                        <input class="form-check-input" type="checkbox" value={item.id} id="flexCheckDefault"
                                        onChange={e => {onCheckedStElement(e.target.checked, e.target.value)}}
                                        checked={checkedStList.includes(item.id) ? true : false}/>
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
                                        <input class="form-check-input" type="checkbox" value={item.id} id="flexCheckDefault"
                                        onChange={e => {onCheckedCgElement(e.target.checked, e.target.value)}}
                                        checked={checkedCgList.includes(item.id) ? true : false}/>
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
                                            <input class="form-check-input" type="checkbox" value={item.id} id="flexCheckDefault"
                                            onChange={e => {onCheckedLcElement(e.target.checked, e.target.value)}}
                                            checked={checkedLcList.includes(item.id) ? true : false}/>
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