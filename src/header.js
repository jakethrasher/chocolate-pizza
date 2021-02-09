import React from 'react';
import ButtonList from './ButtonList';

export default class WonderfulHeader extends React.Component{
    render(){
        let buttons = [
            {   id: 1,
                src: "fb-icon.png",
            },
            {
                id:2,
                src: "flic-icon.png",
            },
            {
                id: 3,
                src: "insta-icon.png",
            },
            {
                id: 4,
                src: "mail-icon.png",
            },
            {
                id: 5,
                src: "rss-icon.png",
            },
            {
                id: 5,
                src: "pint-icon.png",
            },
            {
                id: 5,
                src: "twit-icon.png",
            }
        ]

        return (
            <header className="header">
                <div>
                    <img alt="small" src="small-logo.png"/>
                    <span>DELICIOUS</span>
                </div>

                <ul className="button-container">
                    {buttons.map((button)=>(
                        <ButtonList key={button.id} src={button.src}/>
                    ))}
                </ul>
            </header>
        )
    }
}
                