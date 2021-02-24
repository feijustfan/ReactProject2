












//set operator precedence
var PRECEDENCE = {
  "=": 1,
  "+": 2,
  "-": 2,
  "*": 3,
  "/": 3,
}

//
function maybe_binary(left, my_prec){
  //tk for token
  var tk = is_op();
  if (tk){
    var his_prec = PRECEDENCE[tk.value];
    if(his_prec > my_prec){
      Input.next();
      return maybe_binary({
        type: tk.value == "="? "assign":"binary",
        operator: tk.value,
        lef: left,
        right: maybe_binary(parse_atom(), his_prec)
      },my_prec)
    }
  }
}