import Enemy from "./Enemy.js";
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

export { allEnemies };
