import React from 'react';
import IngredientItem from './IngredientItem';
// import background from './public/list-bg.png'

export default class IngredientList extends React.Component {
    render() {
        return (
            <div className="ingredients" style={{ backgroundImage: 'url(./list-bg.png)' }}
            >
                <IngredientItem amount="1 cup" name="salt" />


            </div>
        )
    }
}