
//login onload da pagina
function loginpage(){

    var user = '';
    var senha= '';
    
    while( user != 'admin' | senha != 'aaa'){

    let sign = prompt("Qual seu Usuario ?");
    let key = prompt("Qual sua Senha ?");

    if (sign.toLowerCase() == "admin" & key.toLowerCase() == 'aaa') {
      alert("Logou com sucesso");
    }

    else if(sign != "admin"){ 
alert("error!!! - Usuario Digite: admin");

    }
    else if(key != "aaa"){
alert("error!!! - Senha   Digite: aaa");

    }

    

    user = sign;
    senha = key;
    
}

}

//fim login onload da pagina


//ABAS DO MENU LATERAL//
function aba1(){


    document.getElementById("main").innerHTML='<div id="caixa-s"><h1>Bem-Vindo</h1><h2>V.A Store</h1><h3>Sempre com você</h2></div>  '
    

    document.getElementById("m-home").style.backgroundColor = "#363636";
    document.getElementById("m-item").style.backgroundColor = "#F1F1F1";
    document.getElementById("m-cadastro").style.backgroundColor = "#F1F1F1";
    document.getElementById("m-contato").style.backgroundColor = "#F1F1F1";
    document.getElementById("m-sobre").style.backgroundColor = "#F1F1F1";
    document.getElementById("m-equipe").style.backgroundColor = "#F1F1F1";

    document.getElementById("m-home").style.color ="#fff";
    document.getElementById("m-item").style.color ="#000";
    document.getElementById("m-cadastro").style.color ="#000";
    document.getElementById("m-contato").style.color ="#000";
    document.getElementById("m-sobre").style.color ="#000";
    document.getElementById("m-equipe").style.color ="#000";
}

function aba2(){

    document.getElementById("main").innerHTML='<div class="produtos"><div class="produto-f"> <img src="./img/camisa1.png" alt="test"><h1>Dior</h1> <br><p class="no-stock">fora de estoque</p></div><div class="produto-f"> <img src="./img/gucci1.jpg" alt="test"><h1>acquard</h1><br><p>R$9.410</p></div><div class="produto-f"> <img src="./img/3.jpg" alt="test"><h1>Atemporal</h1> <br><p>R$4.050</p></div>'
   
   
    document.getElementById("m-home").style.backgroundColor = "#F1F1F1";
    document.getElementById("m-item").style.backgroundColor = "#363636";
    document.getElementById("m-cadastro").style.backgroundColor = "#F1F1F1";
    document.getElementById("m-contato").style.backgroundColor = "#F1F1F1";
    document.getElementById("m-sobre").style.backgroundColor = "#F1F1F1";
    document.getElementById("m-equipe").style.backgroundColor = "#F1F1F1";

    document.getElementById("m-home").style.color ="#000";
    document.getElementById("m-item").style.color ="#fff";
    document.getElementById("m-cadastro").style.color ="#000";
    document.getElementById("m-contato").style.color ="#000";
    document.getElementById("m-sobre").style.color ="#000";
    document.getElementById("m-equipe").style.color ="#000";
}

function aba3(){

document.getElementById("main").innerHTML = '<form action="#"><label for="">Nome</label> <input id="nome3"  type="text" placeholder="Seu Nome" value="" ><br><label for="">Senha</label> <input required id="senha3"  type="password" placeholder="Senha" value="" ><br><label for="">E-mail</label> <input required id="email3" type="email" placeholder="Email" value="" ><br><input type="submit" onclick="cadastro()" value="Cadastrar"></form>'


document.getElementById("m-home").style.backgroundColor = "#F1F1F1";
document.getElementById("m-item").style.backgroundColor = "#F1F1F1";
document.getElementById("m-cadastro").style.backgroundColor = "#363636";
document.getElementById("m-contato").style.backgroundColor = "#F1F1F1";
document.getElementById("m-sobre").style.backgroundColor = "#F1F1F1";
document.getElementById("m-equipe").style.backgroundColor = "#F1F1F1";

    document.getElementById("m-home").style.color ="#000";
    document.getElementById("m-item").style.color ="#000";
    document.getElementById("m-cadastro").style.color ="#fff";
    document.getElementById("m-contato").style.color ="#000";
    document.getElementById("m-sobre").style.color ="#000";
    document.getElementById("m-equipe").style.color ="#000";
}

function aba4(){

document.getElementById("main").innerHTML = '<form action="#"><label for="">Nome</label> <input required  id="nome4"  type="text" placeholder="Seu Nome" value="" ><br><label for="">E-mail</label> <input required  id="email4" type="email" placeholder="Email" value="" ><br><label for="">Texto: </label><textarea required id="txt4" cols="30" rows="10"></textarea><br><input type="submit" onclick="enviarformulario()" value="Enviar Mensagem"></form>'


document.getElementById("m-home").style.backgroundColor = "#F1F1F1";
document.getElementById("m-item").style.backgroundColor = "#F1F1F1";
document.getElementById("m-cadastro").style.backgroundColor = "#F1F1F1";
document.getElementById("m-contato").style.backgroundColor = "#363636";
document.getElementById("m-sobre").style.backgroundColor = "#F1F1F1";
document.getElementById("m-equipe").style.backgroundColor = "#F1F1F1";

    document.getElementById("m-home").style.color ="#000";
    document.getElementById("m-item").style.color ="#000";
    document.getElementById("m-cadastro").style.color ="#000";
    document.getElementById("m-contato").style.color ="#fff";
    document.getElementById("m-sobre").style.color ="#000";
    document.getElementById("m-equipe").style.color ="#000";
}


function aba5(){
document.getElementById("main").innerHTML = '<h1>Um pouco sobre Dior</h1><a href="http://www.youtube.com/embed/fb968UyAPDY" target="blank"><i class="fab fa-youtube"> Clique aqui para ir ao nosso video</i></a> '


document.getElementById("m-home").style.backgroundColor = "#F1F1F1";
document.getElementById("m-item").style.backgroundColor = "#F1F1F1";
document.getElementById("m-cadastro").style.backgroundColor = "#F1F1F1";
document.getElementById("m-contato").style.backgroundColor = "#F1F1F1";
document.getElementById("m-sobre").style.backgroundColor = "#363636";
document.getElementById("m-equipe").style.backgroundColor = "#F1F1F1";

    document.getElementById("m-home").style.color ="#000";
    document.getElementById("m-item").style.color ="#000";
    document.getElementById("m-cadastro").style.color ="#000";
    document.getElementById("m-contato").style.color ="#000";
    document.getElementById("m-sobre").style.color ="#fff";
    document.getElementById("m-equipe").style.color ="#000";
}

function aba6(){

document.getElementById("main").innerHTML = '<div class="equipe-f"><img src="./img/avatar.png" alt="test"><br><br><h1>Victor A.</h1> <br><h4>entusiasta javascript, apaixonado por clean code e boas práticas<br> está sempre interessado em adquirir novos conhecimentos</h4><a href="https://github.com/DevVictorr" target="_blank"><i class="fab fa-github"></i> Github</a> <br><a href="https://www.linkedin.com/in/victordsantunes/"target="_blank"><i class="fab fa-linkedin-in"></i></i> Linkedin</a></div>'


document.getElementById("m-home").style.backgroundColor = "#F1F1F1";
document.getElementById("m-item").style.backgroundColor = "#F1F1F1";
document.getElementById("m-cadastro").style.backgroundColor = "#F1F1F1";
document.getElementById("m-contato").style.backgroundColor = "#F1F1F1";
document.getElementById("m-sobre").style.backgroundColor = "#F1F1F1";
document.getElementById("m-equipe").style.backgroundColor = "#363636";

    document.getElementById("m-home").style.color ="#000";
    document.getElementById("m-item").style.color ="#000";
    document.getElementById("m-cadastro").style.color ="#000";
    document.getElementById("m-contato").style.color ="#000";
    document.getElementById("m-sobre").style.color ="#000";
    document.getElementById("m-equipe").style.color ="#fff";
}

// FIM ABAS DO MENU LATERAL//



// Funções das "paginas"//

function cadastro(){

    var nome = document.getElementById("nome3").value;
    var senha = document.getElementById("senha3").value;
    var email = document.getElementById("email3").value;

    

    if(nome == '' | senha == '' | email =='') {

        alert("Você precisa preencher todas as informações corretamente");
    }
    else{

    alert('Você Sr(a) '+nome+' Se cadastrou com sucesso em nosso sistema com a senha: '+senha+' e com o email: '+email);
    }
}

function enviarformulario(){

    var nome = document.getElementById("nome4").value;
    var email = document.getElementById("email4").value;
    var texto = document.getElementById("txt4").value;

    

    if(nome == '' | email =='' | texto =='') {

        alert("Você precisa preencher todas as informações corretamente");
    }
    else{

    alert('Sr(a) '+nome+' Você enviou a seguinte mensagem com sucesso: ' +texto);
    }
}

// fim Funções das "paginas"//
