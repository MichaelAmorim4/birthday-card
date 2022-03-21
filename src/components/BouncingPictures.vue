<template>
  <div>
    <div :style="dvdLogoStyle_1">
      <img :src="picture_1" :style="dvdLogoImageStyle" />
    </div>
    <div :style="dvdLogoStyle_2">
      <img :src="picture_2" :style="dvdLogoImageStyle" />
    </div>
  </div>
</template>

<script>
let prefix = ''

if (process.env.NODE_ENV === 'production') {
  prefix = 'birthday-card/'
}
const picture_array = [
  `../${prefix}picture1.gif`,
  `../${prefix}picture2.png`,
  `../${prefix}picture3.png`,
  `../${prefix}picture4.png`,
  `../${prefix}picture5.png`,
  `../${prefix}picture6.gif`,
  `../${prefix}picture7.gif`,
  `../${prefix}picture8.gif`,
  `../${prefix}picture9.gif`,
  `../${prefix}picture10.gif`,
]
const rand = (max) => {
  return Math.floor(Math.random() * max)
}

const randBetween = (min, max) => {
  return (Math.random() * (max - min)) + min
}

const randColor = () => {
  return `rgb(${rand(256)}, ${rand(256)}, ${rand(256)})`
}

let changeXMag = 1
let changeYMag = 1

let DVD_LOGO_WIDTH = 300
let DVD_LOGO_HEIGHT = 200

let BORDER_SIZE = 10

if (window.innerWidth < 600 || window.innerHeight < 640) {
  DVD_LOGO_WIDTH = 150
  DVD_LOGO_HEIGHT = 100
  changeXMag = 0.75
  changeYMag = 0.5
  BORDER_SIZE = 5
  BORDER_SIZE = 5
} else if (window.innerWidth < 1250 || window.innerHeight < 650) {
  DVD_LOGO_WIDTH = 250
  DVD_LOGO_HEIGHT = 166.666667
  changeXMag = 0.75
  changeYMag = 0.75
  BORDER_SIZE = 8.33333333
}

let changeX_1 = changeXMag
let changeY_1 = changeYMag

let changeX_2 = -changeXMag
let changeY_2 = -changeYMag

export default {
  name: 'DvdLogo',
  props: ['dvdLogoProps'],
  data () {
    return {
      dvdLogoStyle_1: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: `${DVD_LOGO_WIDTH}px`,
        height: `${DVD_LOGO_HEIGHT}px`,
        backgroundColor: randColor(),
        transform: 'translate(0px, 0px)'
      },
      dvdLogoImageStyle: {
        width: `${DVD_LOGO_WIDTH - BORDER_SIZE}px`,
        height: `${DVD_LOGO_HEIGHT - BORDER_SIZE}px`
      },
      picture_1: picture_array[rand(picture_array.length)],
      posX_1: 0,
      posY_1: rand(window.innerHeight - DVD_LOGO_HEIGHT - 10),
      dvdLogoStyle_2: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: `${DVD_LOGO_WIDTH}px`,
        height: `${DVD_LOGO_HEIGHT}px`,
        backgroundColor: `rgb(0, 0, 255)`,
        transform: `translate(0px, 0px)`
      },
      picture_2: picture_array[rand(picture_array.length)],
      posX_2: window.innerWidth - DVD_LOGO_WIDTH,
      posY_2: rand(window.innerHeight - DVD_LOGO_HEIGHT) + 10,
    }
  },
  mounted () {
    setInterval(() => {
      this.movePic1()
      this.movePic2()
    }, 10)
  },
  methods: {
    movePic1() {
      if (changeX_1 > 0) {
        this.posX_1 += randBetween(changeX_1 - 0.25, changeX_1)
      } else {
        this.posX_1 += randBetween(changeX_1 + 0.25, changeX_1)
      }
      if (changeY_1) {
        this.posY_1 += randBetween(changeY_1 - 0.25, changeY_1)
      } else {
        this.posY_1 += randBetween(changeY_1 + 0.25, changeY_1)
      }
      const isRight = this.posX_1 >= window.innerWidth - DVD_LOGO_WIDTH
      const isLeft = this.posX_1 <= 0
      const isTop = this.posY_1 <= 0
      const isBottom = this.posY_1 >= window.innerHeight - DVD_LOGO_HEIGHT
      const isHorizontalBoundary = isLeft || isRight
      const isVerticalBounday = isTop || isBottom

      if (this.posX_1 < this.posX_2 + DVD_LOGO_WIDTH && this.posX_1 + DVD_LOGO_WIDTH > this.posX_2 && this.posY_1 < this.posY_2 + DVD_LOGO_HEIGHT && this.posY_1 + DVD_LOGO_HEIGHT > this.posY_2) {
        if ((this.posY_1 + DVD_LOGO_HEIGHT - this.posY_2 <= 2 && this.posY_1 + DVD_LOGO_HEIGHT - this.posY_2 >= -2)
            || (this.posY_2 + DVD_LOGO_HEIGHT - this.posY_1 <= 2 && this.posY_2 + DVD_LOGO_HEIGHT - this.posY_1 >= -2)){
          changeY_1 *= -1
        } else {
          changeX_1 *= -1
        }
        this.picture_1 = picture_array[rand(picture_array.length)]
        this.dvdLogoStyle_1.backgroundColor = randColor()
      }

      if (isHorizontalBoundary) {
        if (isLeft) {
          this.posX_1 = 0
        } else {
          this.posX_1 = window.innerWidth - DVD_LOGO_WIDTH
        }
        changeX_1 *= -1
        this.picture_1 = picture_array[rand(picture_array.length)]
        this.dvdLogoStyle_1.backgroundColor = randColor()
      }
      if (isVerticalBounday) {
        if (isTop) {
          this.posY_1 = 0
        } else {
          this.posY_1 = window.innerHeight - DVD_LOGO_HEIGHT
        }
        changeY_1 *= -1
        this.picture_1 = picture_array[rand(picture_array.length)]
        this.dvdLogoStyle_1.backgroundColor = randColor()
      }
      this.dvdLogoStyle_1.transform = `translate(${this.posX_1}px, ${this.posY_1}px)`
    },
    movePic2() {
      if (changeX_2 > 0) {
        this.posX_2 += randBetween(changeX_2 - 0.25, changeX_2)
      } else {
        this.posX_2 += randBetween(changeX_2 + 0.25, changeX_2)
      }
      if (changeY_2) {
        this.posY_2 += randBetween(changeY_2 - 0.25, changeY_2)
      } else {
        this.posY_2 += randBetween(changeY_2 + 0.25, changeY_2)
      }
      const isRight = this.posX_2 >= window.innerWidth - DVD_LOGO_WIDTH
      const isLeft = this.posX_2 <= 0
      const isTop = this.posY_2 <= 0
      const isBottom = this.posY_2 >= window.innerHeight - DVD_LOGO_HEIGHT
      const isHorizontalBoundary = isLeft || isRight
      const isVerticalBounday = isTop || isBottom

      if (this.posX_1 < this.posX_2 + DVD_LOGO_WIDTH && this.posX_1 + DVD_LOGO_WIDTH > this.posX_2 && this.posY_1 < this.posY_2 + DVD_LOGO_HEIGHT && this.posY_1 + DVD_LOGO_HEIGHT > this.posY_2) {
        if ((this.posY_1 + DVD_LOGO_HEIGHT - this.posY_2 <= 2 && this.posY_1 + DVD_LOGO_HEIGHT - this.posY_2 >= -2)
            || (this.posY_2 + DVD_LOGO_HEIGHT - this.posY_1 <= 2 && this.posY_2 + DVD_LOGO_HEIGHT - this.posY_1 >= -2)){
          changeY_2 *= -1
        } else {
          changeX_2 *= -1
        }
        this.picture_2 = picture_array[rand(picture_array.length)]
        this.dvdLogoStyle_2.backgroundColor = randColor()
      }

      if (isHorizontalBoundary) {
        if (isLeft) {
          this.posX_2 = 0
        } else {
          this.posX_2 = window.innerWidth - DVD_LOGO_WIDTH
        }
        changeX_2 *= -1
        this.picture_2 = picture_array[rand(picture_array.length)]
        this.dvdLogoStyle_2.backgroundColor = randColor()
      }
      if (isVerticalBounday) {
        if (isTop) {
          this.posY_2 = 0
        } else {
          this.posY_2 = window.innerHeight - DVD_LOGO_HEIGHT
        }
        changeY_2 *= -1
        this.picture_2 = picture_array[rand(picture_array.length)]
        this.dvdLogoStyle_2.backgroundColor = randColor()
      }
      this.dvdLogoStyle_2.transform = `translate(${this.posX_2}px, ${this.posY_2}px)`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>