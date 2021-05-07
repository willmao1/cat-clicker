import './DarkModeButton.css'
import React from 'react'
import $ from 'jquery'
import catDark from './catDark.png'
import cat from './cat.png'
export default class DarkModeButton extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.dark = false;
    }
    handleClick(){
        if(!this.dark){
            $(`#mode`).attr("href","dark-mode.css")
            $(`#cat`).attr("src",`${catDark}`)
            this.dark = true;
        }
        else {
            $(`#mode`).attr("href","index.css")
            $(`#cat`).attr("src",`${cat}`)

            this.dark =false;
        }
        
    }
    render(){
        return(<div className = "button" onClick = {this.handleClick} id = "DarkModeButton">Change Theme</div>)
    }
    
}
