import Resources from "./resources.js";

/**
 * @description 奖品对象

 * @class Prize 
 */
class Prize {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.sprite = "src/images/Star.png"; //101*171
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.posX, this.posY);
  }

}

export default Prize;
