// document.addEventListener('keydown', (event) => {
//     if(event.key =="a") { keyboardInput.value += event.key; }
//     if(event.key =="b") { keyboardInput.value += event.key; }
//     if(event.key =="c") { keyboardInput.value += event.key; }
//     if(event.key =="d") { keyboardInput.value += event.key; }
//     if(event.key =="e") { keyboardInput.value += event.key; }
//     if(event.key =="f") { keyboardInput.value += event.key; }
//     if(event.key =="g") { keyboardInput.value += event.key; }
//     if(event.key =="h") { keyboardInput.value += event.key; }
//     if(event.key =="i") { keyboardInput.value += event.key; }
//     if(event.key =="j") { keyboardInput.value += event.key; }
//     if(event.key =="k") { keyboardInput.value += event.key; }
//     if(event.key =="l") { keyboardInput.value += event.key; }
//     if(event.key =="m") { keyboardInput.value += event.key; }
//     if(event.key =="n") { keyboardInput.value += event.key; }
//     if(event.key =="o") { keyboardInput.value += event.key; }
//     if(event.key =="p") { keyboardInput.value += event.key; }
//     if(event.key =="q") { keyboardInput.value += event.key; }
//     if(event.key =="r") { keyboardInput.value += event.key; }
//     if(event.key =="s") { keyboardInput.value += event.key; }
//     if(event.key =="t") { keyboardInput.value += event.key; }
//     if(event.key =="u") { keyboardInput.value += event.key; }
//     if(event.key =="v") { keyboardInput.value += event.key; }
//     if(event.key =="w") { keyboardInput.value += event.key; }
//     if(event.key =="y") { keyboardInput.value += event.key; }
//     if(event.key =="x") { keyboardInput.value += event.key; }
//     if(event.key =="z") { keyboardInput.value += event.key; }
//     if(event.key ==".") { keyboardInput.value += event.key; }
//     if(event.key =="Backspace") { keyboardInput.value = keyboardInput.value.slice(0,-1) }
// });

function setUpQuote() {
    // this code is  put the quote in the quote display 
    var display = document.getElementById('quoteDisplay');
    var quote = String(getRandomItem(quotes));
    //document.getElementById("quoteDisplay") = String(getRandomItem(item));
    display.innerHTML = quote;
    return quote;
}

 const quotes = ["Just the two of us we can make if we try just the two of us", 
 "For What is man, what has he got. If not himself then he has not",
 "I'm the badddddddddddddddd guy. duh.",
 "Graudtions, I was like crazy, and it was year",
 "ChatGPT was a goated idea but couldn't make me a math equation"
] ;
const quoteInput = document.querySelector(".quotedisplay p");
inpField = document.querySelector(".wrapper .inputfield");

function getRandomItem(item) {
    var randIndex = Math.floor(Math.random()*item.length)
    var quote = item[randIndex];
    return quote;
}
var Up = setUpQuote();

//
// -> House Scholarship Foundation

// Prompt: House Scholarshio Foundation





// 1. How to change a select number (maybe just one) of characters in a string to a different font color
// 2. Check if the last character inputted is correct and change color
// 3. Backspaces


//
let prevChars = true;

let i = 0;
let prevText = document.getElementById("quoteInput").value;
document.getElementById("quoteInput").onkeydown = function(){
    
    
    let text = document.getElementById("quoteInput").value;
    let lastChar = String(text).slice(-1);

    if (prevText != text) {
        console.log(String("text " + text));
        console.log(String("lastchar " + lastChar));
        console.log(String("quote " + Up.charAt(i)));


        if (lastChar === Up.charAt(i)){
            document.getElementById("quoteDisplay").style.color = "green";
        } else {
            document.getElementById("quoteDisplay").style.color = "red";
        }

        i++;

    }

    
}

    const timerElement = document.getElementById('timer')
 
function startTimer() {
    timerElement.innerText = 0

setInterval(() => {
    timer.innerText = getTimerTime()
}, 1000)

    let startTime
    function startTimer() {
      timerElement.innerText = 0
      startTime = new Date()
      setInterval(() => {
        timer.innerText = getTimerTime()
      }, 1000)
    }
     
    function getTimerTime() {
      return Math.floor((new Date() - startTime) / 1000) // For the timer to work accurately in seconds
    }
}
