import React from 'react';

export default class Image extends React.Component{
    render(){
        return (
            <div>
                <h1>Chocolate Pizza</h1>
                <img alt="pizza" src="choco-pizza.png"/>
                <img alt="directions" src="./article.jpg"/>
            </div>
        )
    }
}

