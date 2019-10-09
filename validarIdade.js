function validarDecisao() {
    if (confirm("É necessário confirmar sua idade para liberar alguns recursos do site ") == true) {
        var idadeUm = prompt("Informe sua idade: ");
        idadeUm = eval(idadeUm);
       

        if (idadeUm >= 18) {
            alert('O usuário é maior de idade e devido a isso, o acesso aos recursos será liberado ');
        }

        else if ((idadeUm < 18) && (idadeUm != 0)) { 
            alert('O usuário não é maior de idade e devido a isso, o acesso será negado ');
        }


        else if(idadeUm = null) {
            alert('error: valor inserido invalido ');
        }
        else{
            alert('error: valor inserido invalido ');
        }
    }else{
        return false;
    }
}
validarDecisao();
