const rightTriangleStarInput = document.querySelector('.right-triangle-star')
const invertRightTriangleStarInput = document.querySelector('.invert-right-star')
const pyramidPatternStarInput = document.querySelector('.pyramid-pattern-star')
const invertPyramidPatternStarInput = document.querySelector('.invert-pyramid-star')
const hollowSquareStarInput = document.querySelector('.hollow-square-star')
const hollowPyramidStarInput = document.querySelector('.hollow-pyramid-star')
const binaryTriangleInput = document.querySelector('.binary-triangle')
const hollowInvertedPyramidInput = document.querySelector('.hollow-inverted-pyramid')
const butterflyStarInput = document.querySelector('.butterfly-pattern')
const diamondStarInput = document.querySelector('.diamond-pattern')
const hourGlassStarInput = document.querySelector('.hourglass-pattern')
const hollowDiamondStarInput = document.querySelector('.hollow-diamond-pattern')
const rhombusStarInput = document.querySelector('.rhombus-pattern')
const multiplicationTableInput = document.querySelector('.multiplication-table')
const multiplicationTableUptoInput = document.querySelector('.multiplication-table-upto')
const rightTriangleStarOutput = document.querySelector('.right-star-output')
const invertRightTriangleStarOutput = document.querySelector('.invert-right-output')
const pyramidPatternStarOutput = document.querySelector('.pyramid-pattern-output')
const invertPyramidPatternStarOutput = document.querySelector('.invert-pyramid-output')
const hollowSquareStarOutput = document.querySelector('.hollow-square-output')
const hollowPyramidStarOutput = document.querySelector('.hollow-pyramid-output')
const binaryTriangleOutput = document.querySelector('.binary-triangle-output')
const hollowInvertedPyramidOutput = document.querySelector('.hollow-inverted-pyramid-output')
const butterflyStarOutput = document.querySelector('.butterfly-pattern-output')
const diamondStarOutput = document.querySelector('.diamond-pattern-output')
const hourglassStarOutput = document.querySelector('.hourglass-pattern-output')
const hollowDiamondStarOutput = document.querySelector('.hollow-diamond-pattern-output')
const rhombusStarOutput = document.querySelector('.rhombus-pattern-output')
const multiplicationTableOutput = document.querySelector('.multiplication-table-output')
const multiplicationTableUptoOutput = document.querySelector('.multiplication-table-upto-output')

function rightTriangleStar(input) {
    let star = ''
  for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i ; j++) {
        star += '*'
    }
   star +=  '<br>'
}
rightTriangleStarOutput.innerHTML = star
}

rightTriangleStarInput.addEventListener('input', (e) => {
  rightTriangleStar(e.target.value)
})

function invertRightTriangleStar(input) {
    let star = ''
  for (let i = 1; i <= input; i++) {
    for (let j = input; j >= i ; j--) {
        star += '*'
    }
   star +=  '<br>'
}
invertRightTriangleStarOutput.innerHTML = star
}

invertRightTriangleStarInput.addEventListener('input', (e) => {
  invertRightTriangleStar(e.target.value)
})


function pyramidPatterStar(input) {
    let star = ''
  for (let i = 1; i <= input; i++) {
    for(let x = 1; x <= input-i; x++  ) {
       star += '&nbsp;'
    }
    for (let j = 1; j <= (2*i-1) ; j++) {
      star += '*'
    }
   star +=  '<br>'
}
pyramidPatternStarOutput.innerHTML = star
}

pyramidPatternStarInput.addEventListener('input', (e) => {
  pyramidPatterStar(e.target.value)
})

function invertPyramidPatterStar(input) {
    let star = ''
  for (let i = 1; i <= input; i++) {
    for(let x = input; x >= input -i+2; x--  ) {
       star += '&nbsp;'
    }
    for (let j = input*2; j >= (2*i) ; j--) {
      star += '*'
    }
   star +=  '<br>'
}
invertPyramidPatternStarOutput.innerHTML = star
}

invertPyramidPatternStarInput.addEventListener('input', (e) => {
  invertPyramidPatterStar(e.target.value)
})


function hollowSquareStar(input) {
    let star = ''
  for (let i = 1; i <= input; i++) {
    for (let x = 1; x <= input; x++) {
      if(i == 1 || i == input || x == 1 || x == input) {
        star += '*'
      } else {
        star += '&nbsp;&nbsp;'
      }
    }
     star +=  '<br>'
}
hollowSquareStarOutput.innerHTML = star
}

hollowSquareStarInput.addEventListener('input', (e) => {
  hollowSquareStar(e.target.value)
})


function hollowPyramidStar(input) {
    let star = ''
  for (let i = 1; i <= input; i++) {
      for (let x = 1; x <= input -i; x++) {
        star += '&nbsp;'
      } 
      for(let j = 1; j <= (i*2 -1); j++) {
        if(j== 1 || j == (i*2 -1) || i == input) {
            star+= '*'
        } else {
          star+= '&nbsp;&nbsp;'
        }
      }
     star +=  '<br>'
}
hollowPyramidStarOutput.innerHTML = star
}

hollowPyramidStarInput.addEventListener('input', (e) => {
  hollowPyramidStar(e.target.value)
})

function binaryTriangle(input) {
    let binary = ''
    // const num = parseInt(input).toString(2)
    // console.log(num);
  for (let i = 1; i <= input; i++) {
    for(let j = 1; j <= i; j++) {
       if((j+i) % 2 === 0 ) {
        binary += '1'
       } else {
        binary += '0'
       }
    }
     binary +=  '<br>'
}
binaryTriangleOutput.innerHTML = binary
}

binaryTriangleInput.addEventListener('input', (e) => {
  binaryTriangle(e.target.value)
})


function hollowInvertedPyramid(input) {
    let star = ''
  for (let i = input; i >= 1 ; i--) {

    for(let x = input ; x >= i ; x--) {
      star += '&nbsp;'
    }
    for(let j = 1; j <= (i*2)-1; j++) {
      if(j == 1 || j == (i*2)-1 || i == input) {
        star+= '*'
      }else {
        star += '&nbsp;&nbsp;'
      }
    }
     star +=  '<br>'
}
hollowInvertedPyramidOutput.innerHTML = star
}

hollowInvertedPyramidInput.addEventListener('input', (e) => {
  hollowInvertedPyramid(e.target.value)
})


function butterflyStar(input) {
    let star = ''
  for (let i = 1; i <= input ; i++) {

    for (let j = 1; j <= i; j++) {
     star+= '*'
    }
    for(let j = 1; j <= (input-i)*2; j++) {
      star+= '&nbsp;&nbsp;'
    }
    for(let j = 1; j <= i; j++){
      star+= '*'
    }
     star +=  '<br>'
}

  for (let i = input-1; i >= 1 ; i--) {

    for (let j = 1; j <= i; j++) {
     star+= '*'
    }
    for(let j = 1; j <= (input-i)*2; j++) {
      star+= '&nbsp;&nbsp;'
    }
    for(let j = 1; j <= i; j++){
      star+= '*'
    }
     star +=  '<br>'
}
butterflyStarOutput.innerHTML = star
}
 
butterflyStarInput.addEventListener('input', (e) => {
  butterflyStar(e.target.value)
})

function diamondStar(input) {
    let star = ''
  for (let i = 1; i <= input; i++) {
    for (let j = 1; j <=  (2*i-1) ; j++) {
        star += '*'
    }
   star +=  '<br>'
}
  for (let i = input-1; i >= 1; i--) {
    for (let j = 1; j <=  (2*i-1) ; j++) {
        star += '*'
    }
   star +=  '<br>'
}
diamondStarOutput.innerHTML = star
}

diamondStarInput.addEventListener('input', (e) => {
  diamondStar(e.target.value)
})

function hourglassStar(input) {
    let star = ''
    for (let i = 1; i <= input; i++) {
    for(let x = input; x >= input -i+2; x--  ) {
       star += '&nbsp;'
    }
    for (let j = input*2; j >= (2*i) ; j--) {
      star += '*'
    }
   star +=  '<br>'
}
  for (let i = input-1; i >= 1; i--) {
    for(let x = input; x >= input -i+2; x--  ) {
       star += '&nbsp;'
    }
    for (let j = input*2; j >= (2*i) ; j--) {
      star += '*'
    }
   star +=  '<br>'
}
hourglassStarOutput.innerHTML = star
}

hourGlassStarInput.addEventListener('input', (e) => {
  hourglassStar(e.target.value)
})

function hollowDiamondStar(input) {
    let star = ''
  for (let i = 1; i <= input; i++) {
    for (let j = 1; j <=  (2*i-1) ; j++) {
       if(j == 1 || j == (i*2)-1) {
         star += '*'
       } else {
        star += '&nbsp;'
       }
    }
   star +=  '<br>'
}
  for (let i = input-1; i >= 1; i--) {
    for (let j = 1; j <=  (2*i-1) ; j++) {
       if(j == 1 || j == (i*2-1)){
         star += '*'
       } else {
        star+= '&nbsp;'
       }
    }
   star +=  '<br>'
}
hollowDiamondStarOutput.innerHTML = star
}

hollowDiamondStarInput.addEventListener('input', (e) => {
  hollowDiamondStar(e.target.value)
})

function rhombusStar (input) {
  let star = ''
  for (let i = 1; i <= input; i++) {
    for(let x = input-1; x >= i; x--){
        star+= '&nbsp;&nbsp;'
    }
    for(let j = 1; j <= input; j++) {
      star+= '*'
    }
    star+= '<br>'
  }
  rhombusStarOutput.innerHTML = star
}

rhombusStarInput.addEventListener('input', (e) => {
  rhombusStar(e.target.value)
})

function multiplicationTable(input) {
  let table = ''
  for (let i = 1; i <= 10; i++) {
     let result = input*i
        table += `${input}x${i} = ${result}`
    table+= '<br>'
  }
  multiplicationTableOutput.innerHTML = table
}

multiplicationTableInput.addEventListener('input', (e) => {
  multiplicationTable(e.target.value)
})
function multiplicationTableUpto(input) {
  let table = ''
   for(let j =1; j <= input; j++) {
     for (let i = 1; i <= 10; i++) {
     let result = j*i
        table += `${j}x${i} = ${result}`
    table+= '<br>'
  }
  table += '<br>'
 }
  multiplicationTableUptoOutput.innerHTML = table
}

multiplicationTableUptoInput.addEventListener('input', (e) => {
  multiplicationTableUpto(e.target.value)
})

