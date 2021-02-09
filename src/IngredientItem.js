import React from 'react';

export default class IngredientItem extends React.Component{
    render(){
        return (
            <div>
                <label>
                <input type="checkbox"/>
                {this.props.amount}{this.props.name}
                </label>
            </div>
        )
    }
}
                