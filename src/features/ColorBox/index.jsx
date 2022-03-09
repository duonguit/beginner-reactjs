import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BoxList from './components/BoxList';

ColorBoxFeature.propTypes = {

};

function ColorBoxFeature(props) {
    const iniBoxList = [
        {
            key: 1,
            color: 'red',
            rounded: true,
            status: 'unchanged'
        },
        {
            key: 2,
            color: 'green',
            rounded: false,
            status: 'changed'
        },
        {
            key: 3,
            color: 'blue',
            rounded: true,
            status: 'unchanged'
        },
    ];

    const [boxList, setBoxList] = useState(iniBoxList);


    const handleOnClickBox = (box, idx) => {
        console.log(box, idx);

        const newBoxList = [...boxList];

        const newBox = {
            ...newBoxList[idx]
            , status: newBoxList[idx].status === 'changed' ? 'unchanged' : 'changed'
        };

        newBoxList[idx] = newBox;

        setBoxList(newBoxList);
    }

    return (
        <BoxList boxs={boxList} onClickBox={handleOnClickBox}></BoxList>
    );
}

export default ColorBoxFeature;