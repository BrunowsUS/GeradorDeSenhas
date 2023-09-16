// seleção de elementos
const generatePasswordBtn = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// novas funcções 

const openCloseGeneratorBtn = document.querySelector("#open-generate-password")
const generatePasswordContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#length")
const lettersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const copyPassword = document.querySelector("#copy-password")


// funções
const getLetterLowerCase = () => {
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 97));
};

const getLetterUpperCase = () => {
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 65));
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
    const symbols = "(){}[]=<>;!@#$%¨&*=-+";

    return symbols[Math.floor(Math.random() * symbols.length) ]
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getSymbol, getNumber) => {

    let password = '';

    // segunda versão

    const passwordLength = +lengthInput.value;

    const generators = []
    
    if (lettersInput.checked) {
        generators.push(getLetterLowerCase, getLetterUpperCase)
    }
    if (numbersInput.checked) {
        generators.push(getNumber)
    }
    if (symbolsInput.checked) {
        generators.push(getSymbol)
    }
    if (generators.length === 0) {
        return;
    }

    console.log(generators.length)


    for (i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
          const randomValue =
            generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue ;
        });
    }
        password = password.slice(0, passwordLength);

        generatedPasswordElement.style.display = "block";
        generatedPasswordElement.querySelector("h4").innerText = password;

};




// letras, números e símbolos

// eventos

generatePasswordBtn.addEventListener("click", () => {
    generatePassword(        
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol);
});

openCloseGeneratorBtn.addEventListener('click', () => {
    generatePasswordContainer.classList.toggle('hide')
});

copyPassword.addEventListener('click', (e) => {
    e.preventDefault()

    const password = generatedPasswordElement.querySelector("h4").innerText;

    navigator.clipboard.writeText(password).then(() => {
        copyPassword.innerText = "Senha copiada com sucesso!"


        setTimeout(() => {
            copyPassword.innerText = "Copiar "
        }, 5000)
    })
})