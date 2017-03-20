/**
 * Created by zhongpeipei on 2017/3/10.
 */
import React from 'react';

const Item = React.createClass({
    remove: function() {
        this.props.removeItem(this.props.item.id);
    },

    render: function(){
        return (
            <div>
                <span>{this.props.item.text}</span>
                <input type="button" value="remove" onClick={this.remove}/>
            </div>
        )
    }
})
class List extends React.Component {
    render(){
        const items = this.props.items.map((item, index) => {
            return (
                <Item key={index} item={item} remove={this.props.removeItem}/>
            )
        });

        return (
            <div>{items}</div>
        )
    }
}

export default List;