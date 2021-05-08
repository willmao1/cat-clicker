
import React from 'react';
import axios from 'axios';
import $ from 'jquery';
export default class Joke extends React.Component {
    constructor(){
        super()
        this.state = {
            time: 0
        }
    }
    async componentDidMount(){
        const joke =  await axios({
            method: 'get',
            url: 'https://official-joke-api.appspot.com/random_joke'  
          })
        $(`#clock`).html(joke.data.setup +"       "+joke.data.punchline );
        this.myTimer = setInterval(async ()=> {
            const joke =  await axios({
                method: 'get',
                url: 'https://official-joke-api.appspot.com/random_joke'  
            })
            $(`#clock`).html(joke.data.setup +"       "+joke.data.punchline );
        },60000)
    }
    render(){
        return (<div id ="clockContainer"><div id="clock">{this.state.time}</div></div>)
    }

}
    