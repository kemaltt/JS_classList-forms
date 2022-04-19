//Forms===========================

//Lev1_1
//==============

let input = document.getElementById('input')
    // console.log(input);
let output = document.getElementById('output-verdoppel')
    // console.log(ergebnis);


function verdoppel() {
    let verdoppel = input.value * 2
        // console.log(verdoppel);

    output.innerHTML = verdoppel
}


// 2.variant-------------

// let button = document.getElementById('button')

// button.addEventListener('click', () => {
//         let verdoppel = input.value * 2
//         output.innerHTML = verdoppel
//     })


//Lev1_2
//=====================

let inputYear = document.getElementById('input-year')
    // console.log(input);
let outputAge = document.getElementById('output-age')
    // console.log(outputAge);

function age() {
    let year = 2022
    let age = year - inputYear.value
        // console.log(age);
    outputAge.innerHTML = age
}

//Lev1_3
//=============================

let inputAgeOne = document.getElementById('input-age1')
    // console.log(inputAgeOne);
let inputAgeTwo = document.getElementById('input-age2')
    // console.log(inputAgeTwo);
let outputDifferenz = document.getElementById('output-differenz')
    // console.log(outputDifferenz);

function differenz() {
    let output = inputAgeOne.value - inputAgeTwo.value
    console.log(output);

    outputDifferenz.innerHTML += output
}

//Lev3_1
//=========================
let inputFontSize = document.getElementById('font-size')
    // console.log(inputFontSize);
let inputFontFamily = document.getElementById('font-family')
    // console.log(inputFontFamily);
let inputText = document.getElementById('input-text')
    // console.log(inputText);

let outputHeadline = document.getElementById('headline-output')
    // console.log(outputH1);

function changeFontsSize() {
    let fontSize = inputFontSize.value
        // console.log(fontSize);
    let fontFamily = inputFontFamily.value
        // console.log(fontFamily);
    outputHeadline.style.fontFamily = fontFamily
    outputHeadline.style.fontSize = fontSize + 'px'
    outputHeadline.innerHTML = inputText.value
}

//Lev3_2
//=========================
let rangeRed = document.getElementById('red')
    // console.log(red);
let rangeGreen = document.getElementById('green')
    // console.log(green);
let rangeBlue = document.getElementById('blue')
    // console.log(blue);
let body = document.getElementById('body')
    // console.log(body);

function changeBackground() {
    let red = rangeRed.value
    let green = rangeGreen.value
    let blue = rangeBlue.value
    body.style.backgroundColor = `rgb(${red},${green},${blue})`
}

//ClassList===========================================================

//Lev1_1
//==============
let headline = document.getElementById('headline')

function changeHeadline() {
    headline.classList.add('headline-style')
}

function toggleMode() {
    headline.classList.toggle('headline-style')
}

//Lev1_2
//==============

function resetHeadline() {
    headline.classList.remove('headline-style')
}