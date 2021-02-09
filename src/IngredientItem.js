import React from 'react';

export default class IngredientItem extends React.Component{
    render(){
        return (
           <li>
               {this.props.amount}{this.props.name}
           </li> 
        )
    }
}

                