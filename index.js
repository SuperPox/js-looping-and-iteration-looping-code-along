// Code your solutions in this file

// function writeCards( nameArray, adjective ) {
//     let cards = []
//     for ( let i = 0; i < nameArray.length; i++) {
//         cards.push( 'Thank you, ${nameArray[i]}, for the wonderful ${adjective} gift!' )
//     }
//     return cards
// }

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }


function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num -= 1;
    }
}


