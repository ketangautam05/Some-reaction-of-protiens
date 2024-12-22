let minute = 0; 
let second = 0; 
let running = false

let min = document.querySelector("#min")
let sec = document.querySelector("#sec")
  
function startBtntimer() { 
    timer = true; 
    second = parseInt(sec.innerText)
    minute = parseInt(min.innerText)
    stopWatch(); 
}
  
function stopBtn() { 
    timer = false; 
}
  
function resetBtn() { 
    timer = false; 
    minute = 0; 
    second = 0; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
}
  
function stopWatch() { 
    running = true
    if (timer) { 
        second--; 
  
  
        if (second == -1) { 
            minute-- 
            second = 59; 
        } 
  
        if (minute == 0 && second == 0) { 
            // minute = 0; 
            // second = 0; 
            stopBtn()
            albuminselect.src=albuminsrc
            ins.innerText="Click on test tube to place back in test tube stand. "
            f=30
        } 
  
        let minString = minute; 
        let secString = second; 
  
  
        if (minute < 10) { 
            minString = "0" + minString; 
        } 
  
        if (second < 10) { 
            secString = "0" + secString; 
        } 
  

  
        document.getElementById('min').innerHTML = minString; 
        document.getElementById('sec').innerHTML = secString; 
        setTimeout(stopWatch, 100); 
    } 
}










