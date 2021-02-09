import React from 'react';
import IngredientItem from './IngredientItem';
// import background from './public/list-bg.png'

const ingredientArray= [
    {
        amount:'1 1/2 cups',
        name: 'milk'
    },{
        amount: '1/2 cup',
        name:'mascarpone'
    },{
        amount: '1/2 tsp',
        name:'pink salt'
    },{
        amount: '1lb',
        name:'black mission figs'
    },{
        amount: '1/2 cup',
        name:'brown sugar'
    },{
        amount: '2 to 4 tbsp',
        name:'water'
    },{
        amount: '1/2 cup',
        name:'heavy cream'
    },{
        amount: '1/3 cup',
        name:'granulated sugar'
    },{
        amount: '2',
        name:'egg yolks'
    },{
        amount: '1',
        name:'lemon juiced'
    },{
        amount: '2 tbsp',
        name:'butter'
    },{
        amount: '1 cup',
        name:'Honey roasted pecans'
    }
]
const componentArray = ingredientArray.map(ingredient => {
    return(<IngredientItem amount={ingredient.amount} name={ingredient.name}/>)
    
})
console.log(componentArray)

export default class IngredientList extends React.Component {
    render() {
        return (
            <div className="ingredients" style={{ backgroundImage: 'url(./list-bg.png)' }}
            >
               <IngredientItem amount="1 1/cups" name="milk"/>
               <IngredientItem amount="1/2 cup" name="mascarpone"/>
               <IngredientItem amount="1/2 tsp" name="pink salt"/>
               <IngredientItem amount="1lb" name="black mission figs"/>
               <IngredientItem amount="1/2 cup" name="brown sugar"/>
               <IngredientItem amount="2 to 4 tbsp" name="water"/>
               <IngredientItem amount="1 1/2 cup" name="heavy cream"/>


            </div>
        )
    }
}