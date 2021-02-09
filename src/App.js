import './App.css';
import React from 'react';
import WonderfulHeader from './header';
import Image from './image';
import IngredientList from './recipe';


export default class App extends React.Component{
  render (){
    return(
    <div>
        <WonderfulHeader/>
        <Image/>
        <IngredientList/>
    </div>
    )
   
  }
}
