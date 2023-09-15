// seleção de elementos
const generatePasswordBtn = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

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

    const passwordLength = 10;

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol,
    ] 
    for (i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
          const randomValue =
            generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue ;
        });
    }
    console.log(password);
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