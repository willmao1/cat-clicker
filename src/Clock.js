
import React from 'react';
import axios from 'axios';
import $ from 'jquery';
export default class App extends React.Component {
    constructor(){
        super()
        this.state = {
            time: 0
        }
    }
    async componentDidMount(){
        const clock =  await axios({
            method: 'get',
            url: ' http://worldclockapi.com/api/json/est/now'  
  
          })
        console.log(clock);
        $(`#clock`).html(clock.data.currentDateTime);
        this.myTimer = setInterval(async ()=> {
            const clock =  await axios({
                method: 'get',
                url: ' http://worldclockapi.com/api/json/est/now' 
              })
            console.log(clock);
            $(`#clock`).html(clock.data.currentDateTime);
        },60000)
    }
    render(){
        return (<div id ="clockContainer"><div id="clock">{this.state.time}</div></div>)
    }

}
    