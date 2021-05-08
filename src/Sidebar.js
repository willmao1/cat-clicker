import React from 'react';
import 'bulma/css/bulma.min.css';
import './Sidebar.css'
import calculateCookies from './calculateCookies'
import cursor from './cursor.png';
import milk from './milk.png'
import $ from 'jquery'
import App from './App'
import cat from './cat.png'
import farm from './farm.png'
import pick from './pick.png'
import cm from './cloningmachine.png'
import spaceship from './spaceship.png'
import portal from './portal.png'
import FactoryViewer from './FactoryViewer';
import sp from './sp.png'
import Upgrades from './Upgrades.js';
export default class Sidebar extends React.Component {
    constructor() {
        super()
        this.state = {
        
            prices: {cursorsBuy:15,milksBuy:100, spsBuy:500,cfsBuy:1500, minersBuy:5000, cmsBuy:40000, spaceshipsBuy: 1000000, portalsBuy: 123456789},
            amounts: {cursors : 0,milks:0,
            sps:0,
            cfs:0,
            miners:0,
            cms:0,
            spaceships:0,
            portals:0},
            latestPurchase: 0,
            upgrades: {
                cursors : 0,
                milks:0,
                sps:0,
                cfs:0,
                miners:0,
                cms:0,
                spaceships:0,
                portals:0
            },
            upgradesPrice: {
                cursors : 500,
                milks:4000,
                sps:16000,
                cfs:60000,
                miners:240000,
                cms:1000000,
                spaceships:4000000,
                portals:200000000
            },
            handleClick : this.handleClick.bind(this),
        }
        this.ChildElement= React.createRef()
        this.handler = this.handler.bind(this);
    }
    
    handler(type) {
        this.state.upgrades[type]++;
        var latestPurchase1 = this.state.upgradesPrice[type];
        this.state.upgradesPrice[type]*=2;
        this.setState({prices: this.state.prices, amounts: this.state.amounts, latestPurchase:latestPurchase1,  upgrades:this.state.upgrades, upgradesPrice:this.state.upgradesPrice, handleClick:this.state.handleClick})
        console.log(this.state);
    }
    componentDidMount = () => {
        this.myTimer = setInterval(()=> {
            Object.keys(this.state.prices).forEach((ele) => {
                if(this.ChildElement.current.ChildElement.current.state.cats<this.state.prices[ele]){
                    $(`#${ele}`).css("filter","brightness(50%)");
                    $(`#${ele}`).css("pointer-events","none");
                }
                else {
                    $(`#${ele}`).removeAttr("style")
                }
                if(this.state.amounts[ele.substring(0,ele.length-3)]>=20+10*this.state.upgrades[ele.substring(0,ele.length-3)]){
                    $(`#${ele.substring(0,ele.length-3)}UpgradeContainer`).css("display","inline-block");
                }
                else {
                    $(`#${ele.substring(0,ele.length-3)}UpgradeContainer`).css("display","none");
                }
                if(this.ChildElement.current.ChildElement.current.state.cats<this.state.upgradesPrice[ele.substring(0,ele.length-3)]){
                   
                    $(`#${ele.substring(0,ele.length-3)}UpgradeContainer`).css("filter","brightness(50%)");
                    $(`#${ele.substring(0,ele.length-3)}UpgradeContainer`).css("pointer-events","none");
                }
                else {
                    $(`#${ele.substring(0,ele.length-3)}UpgradeContainer`).css("filter","brightness(100%)");
                    $(`#${ele.substring(0,ele.length-3)}UpgradeContainer`).css("pointer-events","all");
                }
                
            })
            
        },10)
    }
    
    handleClick(type) {
       
                this.setState(calculateCookies(this.state,type)) 
                console.log(this.state);

        
    }

    render() {
        const inline = {
            display: "inline-block",
            padding: "5px"
        };

        return (<div  id = "wholecat">
            <App bonus = {Math.pow(5,this.state.upgrades.cursors)+Math.floor(.01*(calculateCookies(this.state,"counter"))*this.state.upgrades.cursors)} subCat={this.state.latestPurchase} ref={this.ChildElement} catsPS={calculateCookies(this.state,"counter")}/>
            <div className= "columns">
            <FactoryViewer amounts =  {this.state.amounts}/>

            <div className = "column wall"></div>
            <div id="Sidebar" className = "column" >
            <Upgrades upgrades = {this.state.upgrades} handler = {this.handler}/>

            <li id = "cursorsBuy" className="tile is-child box columns" onClick={e => this.handleClick("cursorsBuy")}>
                <div className="column"><img className ="img" src={cursor}></img>
                <h1 style={inline} className= "title">
                     Hand - {this.state.prices["cursorsBuy"]}<img className="catPic" src={cat}></img>
                </h1>
                <h2 className="subtitle">
                    pet dah cat
                </h2></div>
                <div className="column"><span className="thingNum" >{this.state.amounts.cursors} </span></div>
            </li>
            <li id = "milksBuy" className="tile is-child box columns" onClick={e => this.handleClick("milksBuy")}>
            <div className="column"><img className ="img" src={milk}></img>
                <h1 style={inline} className= "title">
                     Milk - {this.state.prices["milksBuy"]}<img className="catPic" src={cat}></img>
                </h1>
                <h2 className="subtitle">
                    they like some melk
                </h2></div>
                <div className="column"><span className="thingNum" >{this.state.amounts.milks} </span></div></li>
            <li id = "spsBuy" className="tile is-child box" onClick={e => this.handleClick("spsBuy")}>
            <div className="column"><img className ="img" src={sp}></img>
                <h1 style={inline} className= "title">
                    Stratching Pole - {this.state.prices["spsBuy"]}<img className="catPic" src={cat}></img>
                </h1>
                <h2 className="subtitle">
                    get dah cats
                </h2></div>
                <div className="column"><span className="thingNum" >{this.state.amounts.sps} </span></div></li>
            <li id = "cfsBuy" className="tile is-child box" onClick={e => this.handleClick("cfsBuy")}>
            <div className="column"><img className ="img" src={farm}></img>
                <h1 style={inline} className= "title">
                    Catnip Farm - {this.state.prices["cfsBuy"]}<img className="catPic" src={cat}></img>
                </h1>
                <h2 className="subtitle">
                    le gusta las drogas
                </h2></div>
                <div className="column"><span className="thingNum" >{this.state.amounts.cfs} </span></div></li>
            <li  id = "minersBuy" className="tile is-child box" onClick={e => this.handleClick("minersBuy")}>
            <div className="column"><img className ="img" src={pick}></img>
                <h1 style={inline} className= "title">
                    Miner - {this.state.prices["minersBuy"]}<img className="catPic" src={cat}></img>
                </h1>
                <h2 className="subtitle">
                    mine dah cats
                </h2></div>
            <div className="column"><span className="thingNum" >{this.state.amounts.miners} </span></div></li>
            <li id = "cmsBuy" className="tile is-child box" onClick={e => this.handleClick("cmsBuy")}>
            <div className="column"><img className ="img" src={cm}></img>
                <h1 style={inline} className= "title">
                    Cloning Machine - {this.state.prices["cmsBuy"]}<img className="catPic" src={cat}></img>
                </h1>
                <h2 className="subtitle">
                    make dah cat
                </h2></div>
            <div className="column"><span className="thingNum" >{this.state.amounts.cms} </span></div></li>
            <li id = "spaceshipsBuy" className="tile is-child box" onClick={e => this.handleClick("spaceshipsBuy")}>
            <div className="column"><img className ="img" src={spaceship}></img>
                <h1 style={inline} className= "title">
                    Spaceship - {this.state.prices["spaceshipsBuy"]}<img className="catPic" src={cat}></img>
                </h1>
                <h2 className="subtitle">
                    get dah space cats
                </h2></div>
            <div className="column"><span className="thingNum" >{this.state.amounts.spaceships}</span></div></li>
            <li id = "portalsBuy" className="tile is-child box" onClick={e => this.handleClick("portalsBuy")}>
            <div className="column"><img className ="img" src={portal}></img>
                <h1 style={inline} className= "title">
                    Portal - {this.state.prices["portalsBuy"]}<img className="catPic" src={cat}></img>
                </h1>
                <h2 className="subtitle">
                    get dah 4d cats
                </h2></div>
            <div className="column"><span className="thingNum" >{this.state.amounts.portals} </span></div></li>
    </div></div>
            </div>)
  }
}

