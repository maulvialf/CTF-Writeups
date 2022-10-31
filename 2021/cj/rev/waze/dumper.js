import init, {valid_move, get_flag} from "./waze.js";
console.log(valid_move)
console.log(get_flag)
const _ = await init("./waze_bg.wasm");
let button = ""
let coord = {x: 1, y: 0}
let finish = {x: 126, y: 127}

var x = new Array(128);

for (var i = 0; i < 128; i++) {
  x[i] = new Array(128);
}


for (var i = 0; i < 128; i++) {
  for(var j = 0; j < 128; j++){
    x[i][j] = '0';
  }
}


// console.log(x);

function wait(){
  console.log('alfan')
  for (var i = 0; i < 128; i++) {
    for(var j = 0; j < 128; j++){
      var val1 =  valid_move(i,j)
      if(val1 == true){
        x[j][i] = "1";
      }
      else{
        x[j][i] = "0";
      }
    }
  }
  console.log(x)
  console.log('kelar')
  
  for (let i = 0; i < x.length; i++) {
    console.log(x[i].join())
    
  }


}


console.log(x)
setTimeout(wait, 500)