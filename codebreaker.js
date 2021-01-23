let code = '1536';

function codeBreaker(code, numVar) {
    this.code = code;
    let x = '';
    for(let i = 0; i < 4; i ++){
      x = x + computeNumber(numVar, i);
    }
    return x;
  } 

function computeNumber(number, pos){
  let char = '';
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