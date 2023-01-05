function checkPart(part) {

    function isPalindrome(part){
        return part.split("").reverse().join("") === part;
    }

    if(isPalindrome(part)) return true;

    for(let i = 0; i <= part.length; i++){
        let partRemovedCharacter = part.substr(0,i) + part.substr(i + 1, part.length);
        if (isPalindrome(partRemovedCharacter)) return true;
    }

    return false;
  
}


console.log(checkPart("miidim"));