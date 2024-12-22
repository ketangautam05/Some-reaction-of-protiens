
let eg1 = document.querySelector("#eg1")
let eg2 = document.querySelector("#eg2")
let eg3 = document.querySelector("#eg3")

let egg1 = document.querySelector("#egg1")
let egg2 = document.querySelector("#egg2")
let egg3 = document.querySelector("#egg3")

let falbumin = document.querySelector("#falbumin")
let balbumin = document.querySelector("#balbumin")



let eggselector = egg1
let eggbreak = eg1
let bliquidheight = "20%"
let bbottom = "4%"


function breakegg(){
    if(f==1){
        f=2
        eggbreak.style.visibility="visible"
        ins.innerText="Click on egg to pour albumen liquid from egg into beaker carefully."
    }
    else{
        pouregg()
    }
}

function pouregg(){
    if(f==2){
        f=3
        eggselector.style.top="40%"
        setTimeout(function(){
            eggselector.style.left="65%"
            // eggselector.style.rotate="-30deg"
            setTimeout(function(){
                eggselector.style.transitionDuration="2s"
                eggselector.style.rotate="-80deg"
                falbumin.style.bottom="49%"
                setTimeout(function(){
                    falbumin.style.transitionDuration="1s"
                    falbumin.style.height="39%"
                    falbumin.style.bottom="10%"
                    setTimeout(function(){
                        balbumin.style.height=bliquidheight
                        balbumin.style.bottom=bbottom
                    },1000)
                    setTimeout(function(){
                        falbumin.style.height="0%"
                        falbumin.style.bottom="10%"
                        setTimeout(function(){
                            eggselector.style.transitionDuration="1.5s"
                            eggselector.style.rotate="0deg"
                            setTimeout(function(){
                                eggselector.style.transitionDuration="1s"
                                eggselector.style.left=""
                                setTimeout(function(){
                                    eggselector.style.top=""
                                    eggverify()
                                },1000)
                            },1500)
                        },1000)
                    },2000)
                },2000)
            },1000)
        },1000)
    }
}


function eggverify(){
    if(eggselector==egg1){
        eggselector=egg2
        eggbreak=eg2
        f=1
        bbottom="2%"
        bliquidheight="45%"
        ins.innerText="Click on middle one egg to break it on upper side to make a fine hole."
    }
    else if(eggselector==egg2){
        eggselector=egg3
        eggbreak=eg3
        f=1
        bbottom="0%"
        bliquidheight="70%"
        ins.innerText="Click on first right egg to break it on upper side to make a fine hole."
    }
    else if(eggselector==egg3){
        eggselector=egg1
        f=4
        bliquidheight="65%"
        bbottom="0.2%"
        ins.innerText="Click on beaker to pour 5ml egg albumen into measuring cylinder."
    }

}