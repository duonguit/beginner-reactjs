import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styles.scss';
import classNames from 'classnames';

function ColorBox(props) {
    const { color, rounded, status, onClickBox, idx } = props;

    const handleOnClickBox = () => {
        if (!onClickBox) return;

        const box = { color, rounded, status, onClickBox, idx };
        onClickBox(box, idx);
    }

    return (
        <div style={{ backgroundColor: color, borderRadius: rounded ? '5rem' : 'none' }}
            className={classNames(
                {
                    box: true,
                    'box-changed': status === 'changed'
                }
            )}
            onClick={() => handleOnClickBox()}
        ></div >
    );
}

ColorBox.propTypes = {
    color: PropTypes.string.isRequired,
    rounded: PropTypes.bool,
    status: PropTypes.string,
    onClickBox: PropTypes.func,
    idx: PropTypes.number.isRequired
};

ColorBox.defaultProps = {
    rounded: false,
    status: null,
    onClickBox: null
};

export default ColorBox

