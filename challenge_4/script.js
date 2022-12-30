const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2}
]


function fitsInOneBox(boxes) {
    boxes.sort((a,b) => a.l - b.l)
    let fits = true;
    for(let i = 0; i < boxes.length -1; i++){
        if(
            boxes[i]['l'] >= boxes[i+1]['l'] ||
            boxes[i]['w'] >= boxes[i+1]['w'] ||
            boxes[i]['h'] >= boxes[i+1]['h']
        ){
                fits = false;
                break;
        }
    }
    
    return fits;
}

console.log(fitsInOneBox(boxes))