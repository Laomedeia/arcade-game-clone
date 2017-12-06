import Resources from "./resources.js";

/**
 * @description 需要躲避的虫子敌人对象
 * @class Enemy
 */
class Enemy {
  /**
   * Creates an instance of Enemy.应用到每个敌人的实例的变量写在这里
   * @param {any} posX 虫子x坐标
   * @param {any} posY 虫子y坐标
   * @param {any} speedX 虫子移动速度
   * @memberof Enemy
   */
  constructor(posX,posY,speedX) {
    this.posX = posX;
    this.posY = posY;
    this.speedX = speedX;
    //敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = "src/images/enemy-bug.png";
  }
  /**
   * @description 此为游戏必须的函数，用来更新敌人的位置
   * @param {any} dt 表示时间间隙
   * @param {any} maxWidth 画布宽度最大值
   * @memberof Enemy
   */
  update(dt, maxWidth) {
    //你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上,都是以同样的速度运行的
    this.posX = this.posX + this.speedX * dt;
    //虫子X坐标大于画布后重新开始。
    if(this.posX > maxWidth) {
      this.posX = 0;
      //重新随机设置虫子移动速度
      this.speedX = _.random(100, 300);
    }
    // console.log(dt);
  }
  
  /**
   * @description 此为游戏必须的函数，用来在屏幕上画出敌人，
   * @memberof Enemy
   */
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.posX, this.posY);
  }
}


export default Enemy;
