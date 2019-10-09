    function imprimirDate(){
        var diaCalender = window.prompt("Informe o dia: ");
        diaCalender = eval(diaCalender);
        var mesCalender = window.prompt("Informe o mês: ");
        mesCalender = eval(mesCalender);
        var anoCalender = window.prompt("Informe o ano: ");
        anoCalender = eval(anoCalender);
        
        if((diaCalender == null) | (mesCalender == null) | (anoCalender == null)){
            alert("error: valor inserido invalido");
        }
        
         if((diaCalender > 31) | (mesCalender > 12) | (anoCalender > 2019)){
            alert("error: insira uma data valida");
        }
        else{
            
            alert(diaCalender+" do "+mesCalender+" de "+anoCalender);
        }
    }
    imprimirDate();