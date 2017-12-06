import Enemy from "./Enemy.js";
import Player from "./Player.js";
import _ from "lodash";

//虫子大军
let allEnemies = [];

//构建虫子大军
_.times(3, function(n) {
  //赛道1，2，3
  let addY = n * 83;        
  _.times(2, function(n) {
    let speedX = _.random(100, 300);    
    const enemy = new Enemy(0, 60 + addY, speedX);
    allEnemies.push(enemy);  
  });
});

//创建一个玩家
const player = new Player(202,392);

// 监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput() 方法里面。
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };
  player.handleInput(allowedKeys[e.keyCode]);
});

export { allEnemies, player };
