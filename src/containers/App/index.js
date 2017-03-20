import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todoActions from '../../actions/todoAction';
import TodoList from '../../components/TodoList';

// APP是一个容器，而TodoList只是一个UI组件
class App extends Component {
    // 构造函数，固定写法
    constructor(props){
        super(props);
        // 取出boundTodoActions
        const { boundTodoActions } = this.props;

        this.onAdd = () => {
            // 两种写法一样
            //const text = this.refs.addvalue.value;
            const text = this.refs['addvalue'].value;            
            
            boundTodoActions.addTodo(text);
            this.refs.addvalue.value='';
        };

        this.onSearch = () => {
            const searchtext= this.refs.searchvalue.value;
            boundTodoActions.searchTodo(searchtext);
        }

        this.onChange = () => {
            const searchvalue= this.refs.searchvalue.value;
            boundTodoActions.searchValue(searchvalue);
        }

        this.onRemove = (id) => {
            boundTodoActions.removeTodo(id);
        }
    }

    render(){
        const {
            todos,
            alerts,

            boundTodoActions
        } = this.props;

        // 方便拆解数据，需要什么取什么
        const todoListData = {
            todos
        };
        const todoActions = {
            onRemove: this.onRemove
        };

        return (
            <div>
                <div>
                    <input ref="addvalue"/>
                    <input type="button" value="add" onClick={this.onAdd}/>
                </div>
                <div>
                    <input ref="searchvalue" onChange={this.onChange}/>
                    <input type="button" value="search" onClick={this.onSearch}/>
                </div>
                
                <TodoList data={todoListData} actions={todoActions}/>
            </div>
        )
    }
}

// store定义的数据
const mapStateToProps = state =>({
    todos: state.todos,
    alerts: state.alerts
});

const mapDispatchToProps = dispatch => ({
    // bindActionCreators(actionCreators, dispatch)，链接store和UI
    boundTodoActions: bindActionCreators(todoActions, dispatch)
});

// 链接store和UI
export default connect(mapStateToProps, mapDispatchToProps)(App);
