//tokenizer
//input: string
function tokenizer(input){
  var tk = [];
  for (let i = 0; input[i] !== null && input[i] !== " "; i++){
    if (typeof(input[i]) == Number){
      var numberInTk = numberProcess(input);
      tk.push(numberInTk);
    }else{
      tk.push(input[i]);
    }
  }

//need further adjust...
  function croakErr(msg){
    throw new console.error(msg);
    
  }
}
//process 1 digit, 2 digit, 3 digit numbers... 
function numProcess(strnum){
  var numOutput = strnum[0];
  for(let i = 1; strnum[i] !== " ";i++){
    numOutput = numOutput*10 + strnum[i];

  }
}