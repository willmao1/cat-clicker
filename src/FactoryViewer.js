import React from 'react';
import './Sidebar.css'
import cursors from './cursor.png'
import milks from './milk.png'
import sps from './sp.png'
import cfs from './farm.png'
import miners from './pick.png'
import cms from './cloningmachine.png'
import spaceships from './spaceship.png'
import portals from './portal.png'

import $ from 'jquery'
export default class FactoryViewer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          cursors:props.amounts.cursors,
          milks:props.amounts.milks,
          sps:props.amounts.sps,
          cfs:props.amounts.cfs,
          miners:props.amounts.miners,
          cms:props.amounts.cms,
          spaceships:props.amounts.spaceships,
          portals:props.amounts.portals,
      }
    }
    static getDerivedStateFromProps(props, state) {
        return {cursors:props.amounts.cursors,
            milks:props.amounts.milks,
            sps:props.amounts.sps,
            cfs:props.amounts.cfs,
            miners:props.amounts.miners,
            cms:props.amounts.cms,
            spaceships:props.amounts.spaceships,
            portals:props.amounts.portals};
    }
    componentDidUpdate(prevProps,prevState) {
        var pics = {
            cursors: cursors,
            milks: milks,
            sps:sps,
            cfs:cfs,
            miners:miners,
            cms:cms,
            spaceships:spaceships,
            portals:portals
        }
        Object.keys(this.state).forEach(ele=> {
            if(prevState[ele]<this.state[ele]){
                $(`#${ele}Display`).append(`<img style = "height:40px;width:40px"src=${pics[ele]}></img>`)
            }
        })
        
        
        
    }
    render() {
      
          return (
            <div className ="column">
                <li id ="cursorsDisplay" className = "tile is-child  catViewer"></li>
                <li id ="milksDisplay" className = "tile is-child  catViewer"></li>
                <li id ="spsDisplay" className = "tile is-child  catViewer"></li>
                <li id ="cfsDisplay" className = "tile is-child  catViewer"></li>
                <li id ="minersDisplay" className = "tile is-child  catViewer"></li>
                <li id ="cmsDisplay" className = "tile is-child  catViewer"></li>
                <li id ="spaceshipsDisplay" className = "tile is-child  catViewer"></li>
                <li id ="portalsDisplay" className = "tile is-child  catViewer"></li>

            </div>)
    }
  }
  