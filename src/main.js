import { foo } from "./js/player.js";
import Resources from "./js/resources.js";
import Enemy from "./js/Enemy.js";
import { Engine } from "./js/engine.js"
import "./css/style.css";

//console.log(Engine); 
const MyEngine = Engine(global);


// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

   // player.handleInput(allowedKeys[e.keyCode]);
});