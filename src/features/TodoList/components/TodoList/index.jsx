import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import classNames from 'classnames';

function TodoList(props) {
    const { todoList, onClickTodoItem } = props;

    const handleOnClickTodoItem = (item, idx) => {
        if (!onClickTodoItem) return;
        onClickTodoItem(item, idx);
    }

    return (
        <ul className='todo-list'>
            {todoList.map((item, idx) => (
                <li className={classNames({ 'todo-item': true, 'completed': item.status === 'completed' })} key={item.id} onClick={() => handleOnClickTodoItem(item, idx)}>{item.title}</li>
            ))
            }
        </ul >
    );
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    onClickTodoItem: PropTypes.func
};

TodoList.defaultProps = {
    todoList: [],
    onClickTodoItem: null
};

export default TodoList;
