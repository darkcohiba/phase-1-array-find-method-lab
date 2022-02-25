// const superbowlWin = obj => obj.find(win)
// console.log(superbowlWin())

// function win(obj){
//     return obj.result === 'W'
// }


// function superbowlWin(obj){
//     let win = record.find(obj => obj.result === 'W')
//     console.log(win.year)
//     return(win.year)
// }

function superbowlWin(obj){
    let win = obj.find((record) => record.result === 'W')
    if (win){
        return win.year
    }else{
        return undefined
    }
}