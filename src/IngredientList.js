import React from 'react';
import IngredientItem from './IngredientItem';
// import background from './public/list-bg.png'

const ingredientArray= [
    {   id:'1',
        amount:'1 1/2 cups',
        name: 'milk'
    },{ id:'2',
        amount: '1/2 cup',
        name:'mascarpone'
    },{ id:'4',
        amount: '1/2 tsp',
        name:'pink salt'
    },{ id:'5',
        amount: '1lb',
        name:'black mission figs'
    },{ id:'6',
        amount: '1/2 cup',
        name:'brown sugar'
    },{ id:'7',
        amount: '2 to 4 tbsp',
        name:'water'
    },{ id:'8',
        amount: '1/2 cup',
        name:'heavy cream'
    },{ id:'9',
        amount: '1/3 cup',
        name:'granulated sugar'
    },{ id:'10',
        amount: '2',
        name:'egg yolks'
    },{ id:'11',
        amount: '1',
        name:'lemon juiced'
    },{ id:'12',
        amount: '2 tbsp',
        name:'butter'
    },{ id:'13',
        amount: '1 cup',
        name:'Honey roasted pecans'
    }
]

export default class IngredientList extends React.Component {
    render() {
        return (
            <div className="ingredients" style={{ backgroundImage: 'url(./list-bg.png)' }}
            >
                <ul>
                {ingredientArray.map((item)=>(
                <IngredientItem  
                    key={item.id}
                    amount={item.amount} 
                    name = {item.name}
                />)
                )}
                </ul>
            </div>
        )
    }
}
                    


