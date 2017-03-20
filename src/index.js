/**
 * Created by zhongpeipei on 2017/3/6.
 */
import React from 'react';
import ReactDOM from 'react-dom';

let AddTodoComponent =  React.createClass({
    getInitialState: function () {
        return {
            value: this.props.value
        };
    },
    getDefaultProps: function () {
        return {
            value: 'abc'
        };
    },
    addTodo: function (e) {
        const addTodoItem = this.props.addTodoItem;

        const value = this.refs.todoText.value;
        if(value){
            addTodoItem(value);

            this.refs.todoText.value = '';
        }
    },
    componentWillMount(){

    },

    render: function () {
        return (
            <div>
                <input type="text" ref="todoText" defaultValue={this.state.value}/>
                <input type="button" value="add" onClick={this.addTodo}/>
            </div>
        )
    },

    componetDidMount(){

    }
});

let TodoComponent =  React.createClass({
//      getInitialState: function () {
//        return {text: 'learn react', id: 1, status: 'done'};
//      },
    remove: function () {
        this.props.removeItem(this.props.data.id);
    },
    componetWillReceiveProps: function(nextProps){

    },
    shouldComponetUpdate: function (nextProps, nextState) {
        // true, false
    },
    componetWillUpdate: function(){

    },
    componetDidUpdate: function () {

    },
    render: function () {
        // props
        console.log(this.props.data);
        return (
            <div>
                {this.props.data.text}

                <input type="button" value="remove" onClick={this.remove}/>
            </div>
        );
    }
});

let SearchComponent =  React.createClass({
    getInitialState: function () {
        return {};
    },
    search:function () {
        const searchItem = this.props.searchItem;
        searchItem(this.refs.searchedText.value);
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="searchedText"/>
                <input type="button" value="search" onClick={this.search}/>
            </div>
        );
    }
});

let TodoListComponent =  React.createClass({
    getInitialState: function () {
        const list = [
            {text: 'apple', status: 'todo', id: new Date().getTime()},
            {text: 'orange', status: 'todo', id: new Date().getTime()},
            {text: 'banana', status: 'todo', id: new Date().getTime()},
        ];

        return {
            list: list,
            originalList: list
        };
    },
    addTodoItem: function (text) {
        const list = this.state.list;

        list.push({
            text: text,
            status: 'todo',
            id: new Date().getTime()
        });

        this.setState({
            list: list,
            originalList: list
        });
    },
    removeItem: function (id) {
        let list = this.state.list;

        const index = list.findIndex(item => {
            return item.id === id;
        });

        if(index !== -1){
            list.splice(index, 1);

            this.setState({
                list: list,
                originalList: list
            });
        }
    },
    filter:function (value) {
        let list = this.state.originalList;
        const newList = [];

        list.forEach(item => {
            if(item.text.toLowerCase().indexOf(value.toLowerCase()) !== -1){
                newList.push(item);
            }
        });

        this.setState({
            list: newList
        });
    },
    render: function () {
        const todoHtmls = this.state.list.map((item, index) => {
            return (
                <TodoComponent data={item} key={index} removeItem={this.removeItem}/>
            );
        });

        return (
            <div>
                <AddTodoComponent addTodoItem={this.addTodoItem} value="react"/>

                <SearchComponent searchItem={this.filter}/>

                {todoHtmls}
            </div>
        );
    }
});

ReactDOM.render(
    <TodoListComponent />,
    document.getElementById('example')
);