let calcular = document.getElementById('calcular');
const dato = document.getElementById('peso');
const ERROR = document.getElementById('error');
const resultadoHolliday = document.getElementById('resultadoHolliday');
const resultadoSuperficie = document.getElementById('resultadoSuperficie');
const resultadoFlujo = document.getElementById('resultadoFlujo');


dato.addEventListener("keyup", function (e) {
    if (e.code === 'Enter') {
        calcular.click();
    }
});

calcular.addEventListener("click", () => {
    let peso = dato.value * 1;
    resultadoFlujo.style.display = 'none';

    if (peso > 0) {
        ERROR.style.display = 'none'; 
        if (peso <= 30) { 
            hollidaySegar(peso); 
             // PAra mostrar resultados en el DOM
             resultadoHolliday.innerHTML = `Holliday Segar: ${hollidaySegar(peso)}`;
             resultadoSuperficie.style.display = 'block';
             resultadoFlujo.innerHTML = `Flujo: ${calcFlujo(peso)}`; 
        } else {
            let volumen1 = superficieCorporal(peso) * 1500;
            let volumen2 = superficieCorporal(peso) * 2000;
            /* console.log(volumen1, volumen2); */
            resultadoFlujo.style.display = 'block';
            resultadoHolliday.style.display = 'none';
            // Para mostrar resultados en el DOM
            resultadoSuperficie.innerHTML = `Superficie Corporal (volumen1): ${volumen1.toFixed(2)}<br>Superficie Corporal (volumen2): ${volumen2.toFixed(2)}`;   
            resultadoFlujo.innerHTML = `Flujo: ${calcFlujo(peso)}`;
        }
    } else {
        ERROR.style.display = 'block';
        resultadoFlujo.style.display = 'none';
    }
});

function superficieCorporal(p) {
    return (((p * 4) + 7) / (Number(p) + 90));
}

function hollidaySegar(p) {
    let hollBasal;
    if (p <= 10) {
        hollBasal = p * 100;
    } else if (p <= 20) {
        hollBasal = (p - 10) * 50 + 1000;
    } else {
        hollBasal = (p - 20) * 20 + 1000 + 500;
    }
    return hollBasal;
}

function calcFlujo(peso) {
    let resto = peso;
    let flujo = 0;
    if (resto > 20) {
        let aux = resto - 20;
        flujo += aux * 1;
        resto -= aux;
    }
    if (resto > 10) {
        let aux = resto - 10;
        flujo += aux * 2;
        resto -= aux;
    }
    flujo += resto * 4;
    return flujo;
}
