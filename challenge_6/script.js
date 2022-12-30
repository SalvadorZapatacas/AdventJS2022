function createCube(size) {
    //V1.0
    
    let cube = [];
    let space = ' ';
    let faceCubeUpperCharacters = '/\\';
    let bodyCubeUpperCharacters = '_\\';
    let faceCubeBottomCharacters = '\\/';
    let bodyCubeBottomCharacters = '_/';
    let newLine = '\n';
    let emptyString = '';

    // First, build the upper half of the cube
    for(let i = 0; i < size; i++){
        cube.push(`${space.repeat(size - i - 1)}${faceCubeUpperCharacters.repeat(i + 1)}${bodyCubeUpperCharacters.repeat(size)}${newLine}`);
    }

    // Then, build the bottom half
    for(let j = size; j > 0; j--){
        cube.push(`${space.repeat(size - j)}${faceCubeBottomCharacters.repeat(j)}${bodyCubeBottomCharacters.repeat(size)}${j !== 1 ? newLine : emptyString}`);
    }

    return cube.join('');
}

console.log(createCube(7));