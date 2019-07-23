// This is where we code

// let freqs = "+1, -2, +3, +1";
// let freqs = "+1, +1, +1";
// let freqs = "-1, -2, -3"

const sumThem = function(freqs) {

  let numbers = freqs.split(', ');

  // console.log("numbers: ", numbers);

  let resulting = 0;

  for (let num of numbers) {
    // console.log("for ", num, resulting)
    resulting = resulting + Number(num);
    // console.log("    ", num, resulting)
  }

  // console.log("Resulting frequency: ", resulting)
  return resulting;
};

console.assert(sumThem("+1, -2, +3, +1") === 3);
console.assert(sumThem("+1, +1, +1") === 3);
console.assert(sumThem("-1, -2, -3") === -6);

