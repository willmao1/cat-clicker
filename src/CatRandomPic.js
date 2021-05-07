import React from 'react';
import './App.css';
import $ from 'jquery';
import axios from 'axios'

export default class CatRandomPic extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      
      this.state = {
        clicks:0,
        exists: false,
      }
    }
    async getCatPic(){
        const cats = await axios({
            method: 'get',
            url: 'https://thatcopy.pw/catapi/rest/',            
          });
        return cats;
    }
   
    handleClick(event) {
        // console.log("BRUH")
        var ele = document.createElement("div");
        ele.innerHTML = `+${this.props.bonus}`;
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

        $(`#randomCat`).css("pointer-events","none");
        $(`#randomCat`).css("display","none");
        console.log("bye");
        this.setState({clicks: this.state.clicks+1, exists:false});    
    }
    async componentDidMount() {
        const catPic = await this.getCatPic()
        $('#randomCat').attr("src",`${catPic.data.url}`);  
        $(`#randomCat`).css("pointer-events","all");
        $(`#randomCat`).css("position","absolute");
        const randx = Math.floor(Math.random() * 95);
        const randy = Math.floor(Math.random() * 95);
        $(`#randomCat`).css("left",`${randx}%`);
        $(`#randomCat`).css("top",`${randy}%`);
        $(`#randomCat`).css("width",`50px`);
        $(`#randomCat`).css("height",`50px`);
        $(`#randomCat`).css("display","none");  
    }
    componentDidUpdate(prevProps){
        console.log(this.props.clicks);

        if(this.props.clicks%50 == 0 && this.props.clicks>0 && prevProps.clicks != this.props.clicks && this.state.exists == false){  
            $(`#randomCat`).css("pointer-events","all");
            $(`#randomCat`).css("position","absolute");
            const randx = Math.floor(Math.random() * 95);
            const randy = Math.floor(Math.random() * 95);
            $(`#randomCat`).css("left",`${randx}%`);
            $(`#randomCat`).css("top",`${randy}%`);
            $(`#randomCat`).css("width",`50px`);
            $(`#randomCat`).css("height",`50px`);
            $(`#randomCat`).css("display","block");  
            $(`#randomCat`).css("z-index","100");  

            this.setState({clicks: this.state.clicks, exists:true});    
        }
       
    }
    render(){
        return (<img id ="randomCat"  onClick={this.handleClick}></img>)
    }
        
}