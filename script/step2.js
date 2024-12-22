
let beakerdiv = document.querySelector("#beakerdiv")
let measuringdiv = document.querySelector("#measuringdiv")
let msol = document.querySelector("#msol")
let falbumin2 = document.querySelector("#falbumin2")

let albumin1 = document.querySelector("#albumin1")
let albumin2 = document.querySelector("#albumin2")
let albumin3 = document.querySelector("#albumin3")
let albumin4 = document.querySelector("#albumin4")
let albumin5 = document.querySelector("#albumin5")
let albumin6 = document.querySelector("#albumin6")



let inst = "Click on measuring cylinder to pour this measured liquid into 'T1' naming test-tube."
let inst1
let albuminselect = albumin1 
let measuringleft="12%"
let falbumin2left="9.9%"

function beakerpour(){
    if(f==4){
        f=5
        beakerdiv.style.top="55%"
        setTimeout(function(){
            beakerdiv.style.left="55%"
            setTimeout(function(){
                beakerdiv.style.rotate="-40deg"
                beakerdiv.style.top="48%"
                beakerdiv.style.left="56.5%"
                falbumin.style.left="54.4%"
                falbumin.style.height="0%"
                falbumin.style.bottom="41.5%"
                setTimeout(function(){
                    falbumin.style.height="31.5%"
                    falbumin.style.bottom="10%"
                    balbumin.style.height=bliquidheight
                    balbumin.style.bottom=bbottom
                    setTimeout(function(){
                        msol.style.height="42%"
                        setTimeout(function(){
                            falbumin.style.height="0%"
                            setTimeout(function(){
                                beakerdiv.style.rotate=""
                                setTimeout(function(){
                                    beakerdiv.style.left=""
                                    setTimeout(function(){
                                        beakerdiv.style.top=""
                                        f=6
                                        ins.innerText=inst
                                    },1000)
                                },1000)
                            },500)
                        },500)
                    },1000)
                },1000)
            },1000)
        },1000)
    }
}



function measure(){
    if(f==6){
        f=7
        measuringdiv.style.top="1%"
        setTimeout(function(){
            measuringdiv.style.left=measuringleft
            setTimeout(function(){
                measuringdiv.style.rotate="-30deg"
                falbumin2.style.left=falbumin2left
                falbumin2.style.bottom=""
                setTimeout(function(){
                    falbumin2.style.bottom="10%"
                    falbumin2.style.height="83.8%"
                    msol.style.height="0%"
                    setTimeout(function(){
                        albuminselect.style.height="43%"
                        setTimeout(function(){
                            falbumin2.style.height="0%"
                            setTimeout(function(){
                                measuringdiv.style.rotate=""
                                setTimeout(function(){
                                    measuringdiv.style.left=""
                                    setTimeout(function(){
                                        measuringdiv.style.top=""
                                        ttubeverify()
                                        ins.innerText=inst1
                                    },1000)
                                },1000)
                            },500)
                        },500)
                    },1000)
                },1000)
            },1000)
        },1000)
    }



}

function ttubeverify(){
    if(albuminselect==albumin1){
        albuminselect=albumin2
        inst1="Again click on beaker to measure 5ml albumen liquid into measuring cylinder."
        inst="Click on measuring cylinder to pour this measured liquid into 'T2' naming test-tube."
        measuringleft="17%"
        f=4
        falbumin2left="14.9%"
        bbottom="0.4%"
        bliquidheight="60%"
    }
    else if(albuminselect==albumin2){
        albuminselect=albumin3
        inst1="Again click on beaker to measure 5ml albumen liquid into measuring cylinder."
        inst="Click on measuring cylinder to pour this measured liquid into 'T3' naming test-tube."
        measuringleft="22%"
        f=4
        falbumin2left="19.9%"
        bbottom="0.6%"
        bliquidheight="55%"
    }
    else if(albuminselect==albumin3){
        albuminselect=albumin4
        inst1="Again click on beaker to measure 5ml albumen liquid into measuring cylinder."
        inst="Click on measuring cylinder to pour this measured liquid into 'T4' naming test-tube."
        measuringleft="27%"
        f=4
        falbumin2left="24.9%"
        bbottom="0.8%"
        bliquidheight="50%"
    }
    else if(albuminselect==albumin4){
        albuminselect=albumin5
        inst1="Again click on beaker to measure 5ml albumen liquid into measuring cylinder."
        inst="Click on measuring cylinder to pour this measured liquid into 'T5' naming test-tube."
        measuringleft="32%"
        f=4
        falbumin2left="29.9%"
        bbottom="1%"
        bliquidheight="45%"
    }
    else if(albuminselect==albumin5){
        albuminselect=albumin6
        inst1="Again click on beaker to measure 5ml albumen liquid into measuring cylinder."
        inst="Click on measuring cylinder to pour this measured liquid into 'T6' naming test-tube."
        measuringleft="37%"
        f=4
        falbumin2left="34.9%"
        bbottom="1.2%"
        bliquidheight="40%"
    }
    else if(albuminselect==albumin6){
        albuminselect=albumin1
        startbutton.innerText="NEXT"
        startbutton.style.visibility="visible"
        inst1="Press NEXT button"
        f=10
    }
}



































