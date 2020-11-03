function localizador(){

var cep = document.getElementById('cep').value;


var urlStr = 'https://viacep.com.br/ws/'+cep+'/json/';

$.ajax({

    url : urlStr,
    type : "get",
    dataType : "json",
    success : function(data){
        console.log(data);

        document.getElementById('uf').value = data.uf;
        document.getElementById('localidade').value = data.localidade;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('Logradouro').value = data.logradouro;
        document.getElementById('ddd').value = data.ddd;

    },
    error : function(error){
        console.log(error);
    }

});

};