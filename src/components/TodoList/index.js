import React, { Component } from 'react';

import './index.scss';

class TodoList extends Component {

    render(){
        const {data, actions} = this.props;
        const {todos} = data;
        const { onRemove } = actions;

        return (
            <ul className="todo-list">
                {
                    todos.map((todo, index) => {
                        return (
                            <li key={index}>
                                {todo.text}
                                <input type="button" value="remove" onClick={onRemove.bind(this, todo.id)}/>
                            </li>
                            )
                    })
                }
            </ul>
        );
    }
}

export default TodoList;

