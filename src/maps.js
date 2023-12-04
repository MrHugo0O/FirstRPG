const offset = {x: -100, y: -100}

class MapImage
{
    constructor({position, image})
    {
        this.position = position
        this.image = image
    }

    draw()
    {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const starterMap = new Image()
starterMap.src = './Assets/Map/Starter-Map.png'
export const bgStarterMap = new MapImage({position: {x: offset.x, y: offset.y}, image: starterMap})