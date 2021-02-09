import React from 'react';
// import background from './public/list-bg.png'

export default class Recipe extends React.Component{
    render(){
        return (
            <div className="ingredients" style={{ backgroundImage: 'url(./list-bg.png)'}}
            >
             <input type="checkbox"/>
             <label>1 1/2 cups milk</label>
             <input type="checkbox"/>
             <label>1/2 cup mascarpone</label>
             <input type="checkbox"/>
             <label>1/2 tsp pink salt </label>
             <input type="checkbox"/>
             <label>1 lb black mission figs</label>
             <input type="checkbox"/>
             <label>1 1/2 cup brown sugar</label>
             <input type="checkbox"/>
             <label>2-4 tbsp water</label>
             <input type="checkbox"/>
             <label>1 1/2 cups heavy cream</label>
             <input type="checkbox"/>
             <label>1/3 cup granulated sugar</label>
             <input type="checkbox"/>
             <label>2 egg yolks</label>
             <input type="checkbox"/>
             <label>1 lemon juiced</label>
             <input type="checkbox"/>
             <label>3 tbsp butter</label>
             <input type="checkbox"/>
             <label>1 cup honey roasted pecans roughly chopped</label>


            </div>
        )
    }
}