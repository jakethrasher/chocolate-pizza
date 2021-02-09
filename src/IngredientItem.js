import React from 'react';

export default class IngredientItem extends React.Component{
    render(){
        let ingredientAmount = this.props.amount;
        let ingredientName = this.props.name;
        return (
           <li>
               {ingredientAmount}{ingredientName}
           </li> 
        )
    }
}

                