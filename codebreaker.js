let codiguito = '';

function codeBreaker(code, numVar) {
    this.codiguito = code;

    console.log("codigo:", code);
    console.log("variable:", numVar);
    let x = '';
    for(let i = 0; i < 4; i ++){
      x = x + computeNumber(code, numVar, i);
    }
    return x;
  } 

function computeNumber(code, number, pos){
  let char = '';
  console.log("codigo:", code);
  if(code.includes(number[pos])){
      char = '_';
  }
  if(number[pos] === code[pos]){
      char = 'x';
  }
  console.log('numero: ', number[pos], '\n',
  'code[pos]', code[pos], '\n',
  'resultado: ',char);
  return char;
}
  module.exports.codeBreaker = codeBreaker;