import React from 'react';
import './App.css';
import cat from './cat.png'
import $ from 'jquery';
import Counter from './Counter.js'
import CatRandomPic from './CatRandomPic.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clicks:0,
      ogBonus:1,
      bonus:1,
      catClicks:0,
      ChildElement: React.createRef(),
      ChildElement2: React.createRef()
    }
  }
  componentDidMount(){
    this.myTimer = setInterval(()=> {
      if(this.state.ChildElement2.current.state.clicks!=this.state.catClicks) {
          // console.log(this.state.ChildElement2.current.state.clicks);
          this.setState({clicks:this.state.clicks, ogBonus: this.state.ogBonus, bonus: this.state.bonus, catClicks: this.state.catClicks+1, ChildElement: this.state.ChildElement, ChildElement2: this.state.ChildElement2})
          this.state.ChildElement.current.add(this.state.bonus*50);

        }
      
  },100)
  }
  
  
  
  handleClick(event){
    var ele = document.createElement("div");
    ele.innerHTML = `+${this.state.bonus}`;
    ele.style["left"] = `${event.clientX}px`;
    ele.style["top"] = `${event.clientY}px`;
    ele.classList.add("add");

    $(`#root`).append(ele);
    $(`.add`).animate({
      top: "-=70px"
      }, "fast");
    $(`.add`).animate({
  
    opacity: "-=70%"
    }, "fast");

    $(`.add`).animate({
      top: "-=10px",
      opacity: "-=70%"
    }, "fast");

    for(var i = 0; i<($(`.add`).length-5); i++){
      if($(`.add`).get(i).style["opacity"]<0){
        $(`.add`).get(i).remove();
      }
    }
    this.setState({clicks:this.state.clicks+1, ogBonus: this.state.ogBonus, bonus: this.state.bonus, catClicks: this.state.catClicks, ChildElement: this.state.ChildElement, ChildElement2: this.state.ChildElement2});
  }
  
  
  render() {
    
        return (
          <div>
              <CatRandomPic ref = {this.state.ChildElement2} bonus = {this.state.bonus*50} clicks = {this.state.clicks}/>
              <Counter ref = {this.state.ChildElement}  catsPS = {this.props.catsPS} subCat = {this.props.subCat} addCat={this.state.bonus} clicks={this.state.clicks} />
              <div id="main" onClick={this.handleClick}>
              <img id="cat" src={cat}></img>
              </div>
          </div>)
  }
}

