import Resources from "./resources.js";

/**
 * @description 玩家对象

 * @class Player 
 */
class Player {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.sprite = "src/images/char-boy.png"; //101*171
  }

  update(maxWidth) {
    if(this.posX > maxWidth) {
        this.posX = 0;
    } else if (this.posX < 0) {
        this.posX = maxWidth;
    }
    if(this.posY > 392) {
        this.posY = 392;
    } else if (this.posY < 60) {
        this.posY = 60;
    }
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.posX, this.posY);
  }

  handleInput(key) {
    switch (key) {
      case "left":
        this.posX -= 101;
        break;
      case "up":
        this.posY -= 83;
        break;
      case "right":
        this.posX += 101;
        break;
      case "down":
        this.posY += 83;
        break;
      default:
        break;
    }
  }

  
}

export default Player;
