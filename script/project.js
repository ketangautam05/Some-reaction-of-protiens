
let startbutton = document.querySelector("#start")
let ins = document.querySelector("#text")
let stp1 = document.querySelector("#stp1")
let egg = document.querySelector("#egg")
let inference = document.querySelector("#inference")


stasuses = 0
let f=0



function start(){
    if(stasuses==0){
        stasuses=1
        f=1
        startbutton.style.visibility="hidden"
        startbutton.innerText="NEXT"
        ins.innerText="Click on first left egg to break it on upper side to make a fine hole."
    }
    else if(f==10){
        f=11
        startbutton.style.visibility="hidden"
        egg.style.right="-50%"
        beakerdiv.style.left="150%"
        measuringdiv.style.left="150%"
        wbath.style.visibility="visible"
        wbath1.style.visibility="visible"
        setTimeout(function(){
            egg.style.visibility="hidden"
            beakerdiv.style.visibility="hidden"
            measuringdiv.style.visibility="hidden"
            wbath.style.left="55%"
            wbath1.style.left="55%"
            albuminselect=albumin1
            setTimeout(function(){
                ins.innerText="Press ON/OFF button on water bath."
            },1000)
        },1000)

    }
    else if(f==100){
        f=101
        startbutton.style.visibility="hidden"
        wbath.style.left="150%"
        wbath1.style.left="150%"
        setTimeout(function(){
            ins.innerText=inschange
            ttselector=tt1
            titselector.innerHTML='<img class="ttubes" id="tit1" onclick="placettube()" src="images/test-tube.png" alt="">'
        },1000)
    }
    else if(f==50){
        f=60
        ins.innerText="Thank You..."
        startbutton.style.visibility="hidden"
        tbl1.style.visibility="visible"
        inference.style.top="0%"
        tbl1.style.left="20%"
        tbl1.style.top="30%"

    }





}



start()

