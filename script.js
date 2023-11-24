const form = document.getElementById('form');
const nomusuari = document.getElementById('nomusuari');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// FUNCIONS

// function esObligatori(input) {
//     if(input.value.trim() === '') {
//         mostraError(input, 'és obligatori');
//     }
// }

function esObligatori(inputArray) {

    inputArray.forEach((input) => {
        if(input.value.trim() === ''){
            mostraError(input, `${prenNomInput(input)} és obligatori`);
        }else {
            mostraCorrecte(input);
        }
    });

}

function comprovaLongitud(input, min, max) {
    if(input.value.length < min){
        mostraError(input, `${prenNomInput(input)} ha de tenir un mínim de ${min} caràcters`);
    } else if(input.value.length > max) {
        mostraError(input, `${prenNomInput(input)} només pot tenir fins ${max} caràcters`);
    }else {
        mostraCorrecte(input);
    }
}

function esEmailValid(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value.trim())){
        mostraCorrecte(input);
    }else {
        let missatge = `${prenNomInput(input)} no té el format correcte`;
        mostraError(input, missatge);
    }

}

function comprovaContrassenyesSonIguals(input1, input2){
    if(input1.value != input2.value){
        let missatge = `${prenNomInput(input2)} ha de ser igual a ${prenNomInput(input1)}`;
        mostraError(input2, missatge);
    }
}

function mostraError(input, missatge) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const label = formControl.querySelector('label');
    const small = formControl.querySelector('small');
    small.innerText = missatge;
}

function mostraCorrecte(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control correcte';
}

function prenNomInput(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// EVENTO
form.addEventListener('submit', (e) => {
    e.preventDefault();

    esObligatori([nomusuari,email,password,password2]);

    // esObligatori(nomusuari);
    // esObligatori(email);
    // esObligatori(password);
    // esObligatori(password2);

    comprovaLongitud(nomusuari, 3, 15);
    comprovaLongitud(password, 6, 25);

    esEmailValid(email);

    comprovaContrassenyesSonIguals(password, password2);
});

