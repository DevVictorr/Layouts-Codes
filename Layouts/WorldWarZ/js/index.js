

function corPs4() {
    
        document.getElementById("ps4").style.borderColor="red";
        document.getElementById("windows").style.borderColor="white";
        document.getElementById("xbox").style.borderColor="white";
    }
    function corWindows() {
    
        document.getElementById("ps4").style.borderColor="white";
        document.getElementById("windows").style.borderColor="red";
        document.getElementById("xbox").style.borderColor="white";
  
    }
    function corXbox() {
    
        document.getElementById("ps4").style.borderColor="white";
        document.getElementById("windows").style.borderColor="white";
        document.getElementById("xbox").style.borderColor="red";
  
    }


    function step2(){

    document.getElementById("corpo").innerHTML = '<br><br><p>Choose your PACK</p><div class="plataforms" id="plataform-2"><div id="ps4" class="arma1"><button  onclick="corPs4()"><img class="ajuste" src="./img/arma1.jpg" alt=""></button></div><div id="windows" class="arma2"><button onclick="corWindows()"><img class="ajuste" src="./img/arma2.jpg" alt=""></button></div><div id="xbox" class="arma3"><button onclick="corXbox()"><img class="ajuste" src="./img/arma3.jpg" alt=""></button></div></div><div name="botaoEnviar"><button type="submit" id="botaoEnviar" onclick="CPABuildLock()" >Im not a robot</button></div>';

    }