import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

function TodoListFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Book',
            status: 'new'
        },
        {
            id: 2,
            title: 'Food',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Job',
            status: 'new'
        },
    ];

    const [todoList, setTodoList] = useState(initTodoList);

    const handleOnClickTodoItem = (item, idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx] = { ...newTodoList[idx], status: newTodoList[idx].status === 'new' ? 'completed' : 'new' };
        setTodoList(newTodoList);
    }

    return <TodoList todoList={todoList} onClickTodoItem={handleOnClickTodoItem} />;
}

TodoListFeature.propTypes = {};

export default TodoListFeature;
