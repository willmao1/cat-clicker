

export default function calculateCookies(obj, clickedItem){
    if( clickedItem === "counter"){
        var catNum =0;
        catNum += obj.amounts.cursors;
        catNum += obj.amounts.milks*10;
        catNum += obj.amounts.sps*40;
        catNum += obj.amounts.cfs*100;
        catNum += obj.amounts.miners*200;
        catNum += obj.amounts.cms*800;
        catNum += obj.amounts.spaceships*2000;
        catNum += obj.amounts.portals*10000;
        return catNum;
    } 
    var newObj = obj;
    newObj.amounts[clickedItem.substring(0,clickedItem.length-3)]+=1;
    newObj.latestPurchase = newObj.prices[clickedItem];
    newObj.prices[clickedItem]+=Math.ceil(newObj.prices[clickedItem]*.2);
    return newObj;

            
        
    }

