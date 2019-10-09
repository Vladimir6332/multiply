module.exports = function multiply(first, second) {
  
  let firstArr = String(first).split("").reverse();
  let secondArr = String(second).split('').reverse();
  let resultArr = [];
  let buffer = 0;
  let summArr = [];
  let itemSummArr = [];
  let stringBuffer;

  for (let i = 0; i < secondArr.length; i++) {
    itemSummArr = [];
    buffer = 0;
    for (let y = 0; y < i; y++) {
      itemSummArr.push('0');
    };
    for (let y = 0; y < firstArr.length; y++) {
      buffer = secondArr[i] * firstArr[y] + buffer;
      stringBuffer = String(buffer);
      if (stringBuffer.length > 1) {
        itemSummArr.push(stringBuffer[1]);
        buffer = +stringBuffer[0];
      }
      else {
        itemSummArr.push(stringBuffer[0]);
        buffer = 0;
      };
    };
    if (buffer > 0) itemSummArr.push(String(buffer));
    summArr.push(itemSummArr);
  };

  // Loking for summ items
  for ( let i = 0; i < itemSummArr.length; i++) {
    for (let y = 0; y < summArr.length; y++) {
      
    }
  }

  return summArr;


  
};

