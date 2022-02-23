function whatFlavors(cost, money) {
    // let tracker=[]
    // for(let i=0;i<cost.length;i++){
    //     for(let w=i+1;w<cost.length;w++){
    //         if(cost[i]+cost[w]==money){
    //             tracker.push(i+1)
    //             tracker.push(w+1)
    //         }
    //     }
    // }
    //  console.log(`${tracker[0]} ${tracker[1]}`)
     
     
     
    let costTracker={}
    let moneyTracker=0
    for(let i=0;i<cost.length;i++){
        if(!costTracker[cost[i]]){
            costTracker[cost[i]]={val:1,position:i+1}
        } else {
            costTracker[cost[i]].val+=1
        }
    }
    
    for(let val in costTracker){
        moneyTracker=money-val
        if(costTracker[val].val>1){    
            costTracker[val].val--
        }
        if(Object.keys(costTracker).includes(`${moneyTracker}`)&&costTracker[moneyTracker].val>0){
            return console.log(`${costTracker[val].position} ${costTracker[moneyTracker].position}`)
        }
    }
}

https://www.youtube.com/watch?v=uDsfX1068XM&ab_channel=GlitchedFailure