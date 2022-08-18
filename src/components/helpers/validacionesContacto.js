export const validarEmail = (email) => {
    const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== '' && expresion.test(email)) {
        return true;
    } else {

        return false;
    }
};

export const validarTextArea = (textArea) => {

    if (textArea.trim() !== '' && textArea.length >= 10) {

        return true;
    } else {
        return false;
    }
}; 