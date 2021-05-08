import React from 'react';
import './Counter.css';
import cat from './cat.png'
import axios from 'axios'
import $ from 'jquery'

export default class Counter extends React.Component {
    constructor() {
        super();
        this.catFactCount = 0;
        this.state = {
            cats:0,
        };
    }
    async getFact() {
        const catFacts = await axios({
            method: 'get',
            url: 'https://cat-fact.herokuapp.com/facts',            
          });
        return catFacts;
    }
    add(bonus) {
        this.setState({cats: this.state.cats+bonus}) 
    }
    componentDidMount = () => {
        this.myTimer = setInterval(()=> {
            this.setState({cats: this.state.cats+this.props.catsPS/100})
        },10    )
    }
    async componentWillUpdate(nextProps) {
        
        if(this.props.clicks <nextProps.clicks) {
            this.setState({cats: this.state.cats+this.props.addCat});
        }
        if(this.props.catsPS!==nextProps.catsPS){
            
            this.catFactCount++;
            if(this.catFactCount == 5){
                this.catFactCount = 0;
            }
            this.setState({cats: this.state.cats-nextProps.subCat});
            const facts = await this.getFact();
            if($(`#catfact`).html() === undefined){
                $(`#Counter`).append(`<div id = "catfact">${facts.data[this.catFactCount].text}<div>`)
            }
            else {
                $(`#catfact`).html(`${facts.data[this.catFactCount].text}`)
            }

        }
    }
    render() {
       
        var catNum = Math.floor(this.state.cats);
        
        return (<div id ="Counter"><div id ="catCounter" className = "">
        {catNum} <img id ="catImage" src={cat}></img>
        </div><div id = "catsPS">{this.props.catsPS} C/S</div></div>)
  }
}

