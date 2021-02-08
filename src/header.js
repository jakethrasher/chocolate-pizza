import React from 'react';

export default class WonderfulHeader extends React.Component{
    render(){
        return (
            <header className="header">
                <div>
                    <img alt="small" src="small-logo.png"/>
                    <span>DELICIOUS</span>
                </div>
                <div>
                    <img alt="facebook"src="fb-icon.png"/>
                    <img alt="twitter"src="twit-icon.png"/>
                    <img alt="google"src="gp-icon.png"/>
                    <img alt="instagram"src="insta-icon.png"/>
                    <img alt="flic"src="flic-icon.png"/>
                    <img alt="pint"src="pint-icon.png"/>
                    <img alt="rss"src="rss-icon.png"/>
                    <img alt="mail"src="mail-icon.png"/>
                </div>
                
            </header>
        )
    }
}