const gifts = ['cat', 'game', 'socks'];


function wrapping(gifts) {
    let result = [];
    gifts.forEach(gift => {
        result.push(`${'*'.repeat(gift.length + 2)}\n*${gift}*\n${'*'.repeat(gift.length + 2)}`);
    });

    return result;
}
  


const wrapped = wrapping(gifts)
console.log(wrapped);
