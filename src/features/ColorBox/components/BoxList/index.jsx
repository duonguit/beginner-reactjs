import React from 'react'
import PropTypes from 'prop-types'
import ColorBox from '../ColorBox';
import './styles.scss';

function BoxList(props) {
    const { boxs, onClickBox } = props;

    const handleOnClickBox = (box, idx) => {
        if (!onClickBox) return;

        onClickBox(box, idx);
    }

    return (
        <ul>
            {boxs.map((e, idx) => (
                <li key={e.key} >
                    <ColorBox idx={idx} color={e.color} rounded={e.rounded} status={e.status} onClickBox={handleOnClickBox} ></ColorBox>
                </li>
            ))}
        </ul>
    )
}

BoxList.propTypes = {
    boxs: PropTypes.array.isRequired,
    onClickBox: PropTypes.func
}

BoxList.defaultProps = {
    boxs: [],
    onClickBox: null
};

export default BoxList

