

export default function calculateCookies(obj, clickedItem){
    if( clickedItem === "counter"){
        var catNum =0;
        console.log(obj)
        catNum += obj.amounts.cursors*Math.pow(2,obj.upgrades.cursors);
        catNum += (obj.amounts.milks*Math.pow(2,obj.upgrades.milks))*10;
        catNum += (obj.amounts.sps*Math.pow(2,obj.upgrades.sps))*40;
        catNum += (obj.amounts.cfs*Math.pow(2,obj.upgrades.cfs))*100;
        catNum += (obj.amounts.miners*Math.pow(2,obj.upgrades.miners))*200;
        catNum += (obj.amounts.cms*Math.pow(2,obj.upgrades.cms))*800;
        catNum += (obj.amounts.spaceships*Math.pow(2,obj.upgrades.spaceships))*2000;
        catNum += (obj.amounts.portals*Math.pow(2,obj.upgrades.portals))*10000;
        return catNum;
    } 
    var newObj = obj;
    newObj.amounts[clickedItem.substring(0,clickedItem.length-3)]+=1;
    newObj.latestPurchase = newObj.prices[clickedItem];
    newObj.prices[clickedItem]+=Math.ceil(newObj.prices[clickedItem]*.2);
    return newObj;

            
        
    }

