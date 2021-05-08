import $ from 'jquery'
import React from 'react'
import cursors from './cursorsupgrade1.png'
import milks from './milksupgrade1.png'
import sps from './spsupgrade1.png'
import cfs from './cfsupgrade1.png'
import miners from './minersupgrade1.png'
import cms from './cmsupgrade1.png'
import spaceships from './spaceshipsupgrade1.png'
import portals from './portalsupgrade1.png'

export default class Upgrades extends React.Component {
    constructor(){
        super()
        this.state = {
            upgrades: {
                cursors : 0,
                milks:0,
                sps:0,
                cfs:0,
                miners:0,
                cms:0,
                spaceships:0,
                portals:0
            }
        }
        this.pics = {
            cursors: cursors,
            milks: milks,
            sps:sps,
            cfs:cfs,
            miners:miners,
            cms:cms,
            spaceships:spaceships,
            portals:portals
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log(props.upgrades.cursors);
        return {upgrades: {cursors:props.upgrades.cursors,
            milks:props.upgrades.milks,
            sps:props.upgrades.sps,
            cfs:props.upgrades.cfs,
            miners:props.upgrades.miners,
            cms:props.upgrades.cms,
            spaceships:props.upgrades.spaceships,
            portals:props.upgrades.portals}};
    }
    componentDidUpdate(prevProps,prevState){
        Object.keys(this.state.upgrades).forEach(key => {
            console.log(prevState.upgrades[key])
            if(this.state.upgrades[key]==4){
                $(`#${key}UpgradeContainer`).remove();
            }
            if (prevState.upgrades[key]<this.state.upgrades[key]){                
                $(`#${key}Upgrade`).css("-webkit-filter",`hue-rotate(${this.state.upgrades[key]*90}deg)`)
            }
            
        })
    }
    render() {
        return (<div id ="upgrades">
            <div id ="cursorsUpgradeContainer" className="upgradeImgContainer"><img className = "upgradeImg" id ="cursorsUpgrade"  title="Double your cursor output" onClick = { () => this.props.handler("cursors")} src ={cursors}></img></div>
            <div id ="milksUpgradeContainer" className="upgradeImgContainer"><img id ="milksUpgrade" className = "upgradeImg" title="Double your milk output" onClick = { () => this.props.handler("milks")} src ={milks}></img></div>
            <div id ="spsUpgradeContainer" className="upgradeImgContainer"><img id ="spsUpgrade" className = "upgradeImg" title="Double your scratching pole output" onClick = { () => this.props.handler("sps")} src ={sps}></img></div>
            <div id ="cfsUpgradeContainer" className="upgradeImgContainer"><img id ="cfsUpgrade" className = "upgradeImg" title="Double your catnip farm output" onClick = { () => this.props.handler("cfs")} src ={cfs}></img></div>
            <div id ="minersUpgradeContainer" className="upgradeImgContainer"><img id ="minersUpgrade" className = "upgradeImg" title="Double your miner output" onClick = { () => this.props.handler("miners")} src ={miners}></img></div>
            <div id ="cmsUpgradeContainer" className="upgradeImgContainer"><img id ="cmsUpgrade" className = "upgradeImg" title="Double your cloning machine output" onClick = { () => this.props.handler("cms")} src ={cms}></img></div>
            <div id ="spaceshipsUpgradeContainer" className="upgradeImgContainer"><img id ="spaceshipsUpgrade" className = "upgradeImg" title="Double your spaceship output" onClick = { () => this.props.handler("spaceships")} src ={spaceships}></img></div>
            <div id ="portalsUpgradeContainer" className="upgradeImgContainer"><img id ="portalsUpgrade" className = "upgradeImg" title="Double your portal output" onClick = { () => this.props.handler("portals")} src ={portals}></img></div>
        </div>)
    }
}