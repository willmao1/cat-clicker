import React from 'react';
import './App.css';
import cat from './cat.png'
import $ from 'jquery';
import Counter from './Counter.js'
import CatRandomPic from './CatRandomPic.js';
import Clock from './Clock.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clicks:0,
     
      bonus:1,
      catClicks:0,
    }
    this.ChildElement2 = React.createRef();
    this.handler = this.handler.bind(this);
    this.ChildElement = React.createRef();

  }
  static getDerivedStateFromProps(props, state) {
    return {clicks: state.clicks,
            bonus: props.bonus,
            catClicks: state.catClicks};
}
  handler(catClicks){
    console.log(catClicks);

      if(catClicks!=this.state.catClicks) {
          this.setState({clicks:this.state.clicks,  bonus: this.state.bonus, catClicks: this.state.catClicks+1})
          this.ChildElement.current.add(this.state.bonus*50);
        }
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
    this.setState({clicks:this.state.clicks+1, bonus: this.state.bonus, catClicks: this.state.catClicks, ChildElement: this.state.ChildElement, ChildElement2: this.state.ChildElement2});
  }
  
  
  render() {
    
        return (
          <div>
               <Clock/>
              <CatRandomPic handler = {this.handler} ref = {this.ChildElement2} bonus = {this.state.bonus*50} clicks = {this.state.clicks}/>
              <Counter ref = {this.ChildElement}  catsPS = {this.props.catsPS} subCat = {this.props.subCat} addCat={this.state.bonus} clicks={this.state.clicks} />
              <div id="main" onClick={this.handleClick}>
              <img id="cat" src={cat}></img>
              </div>
          </div>)
  }
}

