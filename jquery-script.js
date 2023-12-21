//efeito de esconder formulário de cadastro


$(document).ready(function(){
    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideTggle("slow");
        $("#section-login").slideTggle("slow");
        $("#botao-cadastrar").hide();

    });

});