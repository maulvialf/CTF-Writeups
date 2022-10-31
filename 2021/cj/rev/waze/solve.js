import init, {valid_move, get_flag} from "./waze.js";
console.log(valid_move)
console.log(get_flag)
const _ = await init("./waze_bg.wasm");
let button = ""
let coord = {x: 1, y: 0}
let finish = {x: 126, y: 127}

document.addEventListener('keydown', press)
function press(e){
    // console.log(coord)
    var data = "ssddwdddddsddddsssssddddsddsssdsddddsddwddddwdwdddssdddddddsssdsddwddddsddddsssddddssssdssssddddwddwddddddddddddsddddsddsdddssddddwddwwwwdddddddwddwwwwwwwwwwwdwdddddssaassassssssdsdsdsdddsssssdssssssdsssdssssssassssdsssssassssssssdddsssdsdsdsssssasssssdssddsssssdssssdsssssdddsssddssdssasssssssssaaasassssssassdddddssssddsssss";
    for (let i = 0; i < data.length; i++) {
        console.log(coord)

        const move = data[i];
        if (move == 'w' ) {
    
            if (valid_move(coord.x, coord.y - 1)) {
                button += 'w'
                coord.y -= 1
                if (coord.x == finish.x && coord.y == finish.y) { get_flag(button) }
            }
          }
          if (move == 'd') {
            
            if (valid_move(coord.x + 1, coord.y)) {
                button += 'd'
                coord.x += 1
                if (coord.x == finish.x && coord.y == finish.y) { get_flag(button) }
            }
          }
          if (move == 's') {
            
            if (valid_move(coord.x, coord.y + 1)) {
                button += 's'
                coord.y += 1
                if (coord.x == finish.x && coord.y == finish.y) { get_flag(button) }
            }
          }
          if (move == 'a') {
            
            if (valid_move(coord.x - 1, coord.y)) {
                button += 'a'
                coord.x -= 1
                if (coord.x == finish.x && coord.y == finish.y) { get_flag(button) }
            }
          }
          console.log(coord)

            
    }

      if (e.keyCode === 82) /* r */{
          button = ""
          coord = {x: 1, y: 0}
      }
}

