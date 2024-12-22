
let tt1 = document.querySelector("#tt1")
let tt2 = document.querySelector("#tt2")
let tt3 = document.querySelector("#tt3")
let tt4 = document.querySelector("#tt4")
let tt5 = document.querySelector("#tt5")
let tt6 = document.querySelector("#tt6")

let tbl1 = document.querySelector("#tbl1") 

let o1 = document.querySelector("#o1")
let o2 = document.querySelector("#o2")
let o3 = document.querySelector("#o3")
let o4 = document.querySelector("#o4")
let o5 = document.querySelector("#o5")
let o6 = document.querySelector("#o6")

let c1 = document.querySelector("#c1")
let c2 = document.querySelector("#c2")
let c3 = document.querySelector("#c3")
let c4 = document.querySelector("#c4")
let c5 = document.querySelector("#c5")
let c6 = document.querySelector("#c6")

let pd1 = document.querySelector("#pd1")
let pd2 = document.querySelector("#pd2")
let pd3 = document.querySelector("#pd3")
let pd4 = document.querySelector("#pd4")
let pd5 = document.querySelector("#pd5")
let pd6 = document.querySelector("#pd6")





let ttselector=tt1
let firsttrial="40"
let albuminsrc ="images/albumin40.png"
let oselector = o1
let cselector = c1
let pdselector = pd1




let otext = "Translucent" 
let ctext = "Very liquid"
let pdtext = "No coagulation"


function placettube(){
    if(f==20){
        f=21
        ttselector.style.bottom="65%"
        setTimeout(function(){
            ttselector.style.left="67.5%"
            setTimeout(function(){
                ttselector.style.bottom="30%"
                settings()
            },1000)
        },1000)
    }
    else if(f==30){
        f=31
        ttselector.style.bottom="65%"
        setTimeout(function(){
            ttselector.style.left=""
            setTimeout(function(){
                ttselector.style.bottom=""
                setTimeout(function(){
                    tbl1.style.visibility="visible"
                    oselector.innerHTML='<button id="valbutton" onclick="valbutton1()">Observe</button>'
                    f=32
                    ins.innerText="Click on observe button to observe the opacity of egg albumen and write in the table's column."
                },2000)
            },1000)
        },1000)
    }
}



function settings(){
    setTimeout(function(){
        if((temp.innerText)==firsttrial && (min.innerText=="05" && sec.innerText=="00")){
            startBtntimer()
            ins.innerText="Please wait to complete timer then click on test tube to remove from water bath."
        }
        else{
            ins.innerText="Temperature or timer is not correctly set !! Please set correct temperature or timer."
            f=12
        }
    },2000)
}



function verifytrial(){
    if(ttselector==tt1){
        ttselector=tt2
        oselector=o2
        cselector=c2
        pdselector=pd2
        otext="Mildly opaque"
        ctext="Liquid, slightly thicker"
        pdtext="Some coagulation"
        firsttrial="50"
        albuminselect=albumin2
        albuminsrc ="images/albumin50.png"
        instemp = "By pressing '+' '-' buttons, set the temperature to 50 C then again press 'TEMP' button."
        insttubeplace="Click on T2 named test tube to place it in water bath."
    }
    else if(ttselector==tt2){
        ttselector=tt3
        oselector=o3
        cselector=c3
        pdselector=pd3
        otext="Mildly opaque"
        ctext="Liquid, thicker"
        pdtext="Noticeable coagulation"
        firsttrial="60"
        albuminselect=albumin3
        albuminsrc ="images/albumin60.png"
        instemp = "By pressing '+' '-' buttons, set the temperature to 60 C then again press 'TEMP' button."
        insttubeplace="Click on T3 named test tube to place it in water bath."
    }
    else if(ttselector==tt3){
        ttselector=tt4
        oselector=o4
        cselector=c4
        pdselector=pd4
        otext="Partially opaque"
        ctext="Semi solid"
        pdtext="Significant coagulation"
        firsttrial="70"
        albuminselect=albumin4
        albuminsrc ="images/albumin70.png"
        instemp = "By pressing '+' '-' buttons, set the temperature to 70 C then again press 'TEMP' button."
        insttubeplace="Click on T4 named test tube to place it in water bath."
    }
    else if(ttselector==tt4){
        ttselector=tt5
        oselector=o5
        cselector=c5
        pdselector=pd5
        otext="Completely opaque"
        ctext="Solid"
        pdtext="Full coagulation"
        firsttrial="80"
        albuminselect=albumin5
        albuminsrc ="images/albumin80.png"
        instemp = "By pressing '+' '-' buttons, set the temperature to 80 C then again press 'TEMP' button."
        insttubeplace="Click on T5 named test tube to place it in water bath."
    }
    else if(ttselector==tt5){
        ttselector=tt6
        oselector=o6
        cselector=c6
        pdselector=pd6
        otext="Completely opaque"
        ctext="Solid"
        pdtext="Full coagulation"
        firsttrial="90"
        albuminselect=albumin6
        albuminsrc ="images/albumin90.png"
        instemp = "By pressing '+' '-' buttons, set the temperature to 90 C then again press 'TEMP' button."
        insttubeplace="Click on T6 named test tube to place it in water bath."
    }
    else if(ttselector==tt6){
        tbl1.style.visibility="visible"
        startbutton.style.visibility="visible"
        startbutton.innerText="NEXT"
        f=50
        ins.innerText="Press Next button to go to Inference of this Experiment."
    }



}






function valbutton1(){
    if(f==32){
        if(oselector.innerHTML=='<button id="valbutton" onclick="valbutton1()">Observe</button>'){
            oselector.innerHTML=""
            oselector.innerText=otext
            cselector.innerHTML='<button id="valbutton" onclick="valbutton1()">Observe</button>'
            ins.innerText="Click on 'Observe' button to observe the Consistency of the egg albumen and write in that column."
        }
        else if(cselector.innerHTML=='<button id="valbutton" onclick="valbutton1()">Observe</button>'){
            cselector.innerHTML=""
            cselector.innerText=ctext
            pdselector.innerHTML='<button id="valbutton" onclick="valbutton1()">Observe</button>'
            ins.innerText="Click on 'Observe' button to observe Protien denaturation of egg albumen and write in that column."
        }
        else if(pdselector.innerHTML=='<button id="valbutton" onclick="valbutton1()">Observe</button>'){
            pdselector.innerHTML=""
            pdselector.innerText=pdtext
            setTimeout(function(){
                f=12
                ins.innerText="Press 'TEMP' button to set temperature for another test tube."
                tbl1.style.visibility="hidden"
                verifytrial()
            },4000)
        }
    }
}











