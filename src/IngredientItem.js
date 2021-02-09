import React from 'react';

export default class IngredientItem extends React.Component{
    render(){
        return (
            <div>
                <label>
                {this.props.amount}{this.props.name}
                <input type="checkbox"/>
                </label>
            </div>
        )
    }
}
                