

let screen = document.querySelector("#screen")
let temp = document.querySelector("#temp")
let celcius = document.querySelector("#celcius")
let onoff = document.querySelector("#onoff")
let mm = document.querySelector("#mm")
let ss = document.querySelector("#ss")

let wbath = document.querySelector("#wbath")
let wbath1 = document.querySelector("#wbath1")



let statusmachine = "off"
let trial = "1st"
let insttubeplace="Click on T1 named test tube to place it in water bath."
let instemp = "By pressing '+' '-' buttons, set the temperature to 40 C then again press 'TEMP' button."



function onoff1(){
    if(f==11){
        f=12
        screen.style.opacity="100%"
        onoff.style.background="radial-gradient(rgb(255, 215, 15),rgb(255, 122, 6))"
        ins.innerText="Press 'TEMP' button to set temperature."
    }
    else if(f==12 && statusmachine=="off"){
        f=11
        screen.style.opacity="0%"
        onoff.style.background="radial-gradient(rgb(255, 255, 255),rgb(135, 135, 135))"
        ins.innerText="Press 'ON/OFF' button to turn on the water bath."
    }
}



function temp1(){
    if(f==12){
        f=13
        temp.style.animationIterationCount="infinite"
        statusmachine="on"
        ins.innerText=instemp
    }
    else if(f==13){
        f=12
        temp.style.animationIterationCount="0"
        ins.innerText="Press 'MM' button to set minutes in timer."
    }
}


function mm1(){
    if(f==12){
        f=14
        statusmachine="on"
        min.style.animationIterationCount="infinite"
        ins.innerText="By pressing '+' '-' buttons, set minutes to 05 then again press 'MM' button."
    }
    else if(f==14){
        f=12
        min.style.animationIterationCount="0"
        ins.innerText="Press 'SS' button to set seconds in timer."
    }
}


function ss1(){
    if(f==12){
        f=15
        statusmachine="on"
        sec.style.animationIterationCount="infinite"
        ins.innerText="By pressing '+' '-' buttons, set seconds to 00 then again press 'SS' button."
    }
    else if(f==15){
        f=12
        sec.style.animationIterationCount="0"
        ins.innerText="Wait for some time to heat the water inside water bath."
        setTimeout(function(){
            if(ttselector.style.left=="67.5%"){
                settings()
            }
            else{
                ins.innerText=insttubeplace
                f=20
            }
        },5000)
    }
}



function plus1(){
    if(f==13){
        if((parseInt(temp.innerText))<150 && (parseInt(temp.innerText))>=0){
            if((parseInt(temp.innerText))<9){
                temp.innerText="0"+(parseInt(temp.innerText)+1)
            }
            else{
                temp.innerText=(parseInt(temp.innerText)+1)
            }
        }
    }
    else if(f==14){
        if((parseInt(min.innerText))<59 && (parseInt(min.innerText))>=0){
            if((parseInt(min.innerText))<9){
                min.innerText="0"+(parseInt(min.innerText)+1)
            }
            else{
                min.innerText=(parseInt(min.innerText)+1)
            }
        }
    }
    else if(f==15){
        if((parseInt(sec.innerText))<59 && (parseInt(sec.innerText))>=0){
            if((parseInt(sec.innerText))<9){
                sec.innerText="0"+(parseInt(sec.innerText)+1)
            }
            else{
                sec.innerText=(parseInt(sec.innerText)+1)
            }
        }
    }




}

function minus1(){
    if(f==13){
        if(parseInt(temp.innerText)<=150 && parseInt(temp.innerText)>0){
            if((parseInt(temp.innerText))<9){
                temp.innerText="0"+(parseInt(temp.innerText)-1)
            }
            else{
                temp.innerText=parseInt(temp.innerText)-1
            }
        }
    }
    else if(f==14){
        if((parseInt(min.innerText))<=59 && (parseInt(min.innerText))>0){
            if((parseInt(min.innerText))<9){
                min.innerText="0"+(parseInt(min.innerText)-1)
            }
            else{
                min.innerText=(parseInt(min.innerText)-1)
            }
        }
    }
    else if(f==15){
        if((parseInt(sec.innerText))<=59 && (parseInt(sec.innerText))>0){
            if((parseInt(sec.innerText))<9){
                sec.innerText="0"+(parseInt(sec.innerText)-1)
            }
            else{
                sec.innerText=(parseInt(sec.innerText)-1)
            }
        }
    }
}

















