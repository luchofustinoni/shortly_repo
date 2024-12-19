const input = document.querySelector('.sdaSecInput')
const inputContainer = document.querySelector('.sdaSecInputContainer')
const btnShortenIt = document.querySelector('.sdaSecBtnShort')
const txtAdvise = document.createElement('i')
const linkAddContainer = document.querySelector('.sdaSecLinksAddedContainer')
let cadena;

function generarCaracteresAleatorios() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';
    for (let i = 0; i < 7; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres[indiceAleatorio];
    }
    return resultado;
}

btnShortenIt.addEventListener('click',()=>{
    const textInput = input.value.trim(); //elimina espacios al principio y al final
    if(textInput.includes('.com') || textInput.includes('.com.ar')){
        console.log('válido')
        input.style.color = 'black'
        input.style.borderColor = 'green'
        txtAdvise.classList.remove('sdaSeccionTxtAdvise')
        txtAdvise.classList.add('nonTxtAdvise')
        cadena = generarCaracteresAleatorios();

        const linkContent = document.createElement('div')
        linkContent.classList.add('linkAddedContainer')
        linkContent.innerHTML = `
                <p class="linkAdded">https://${input.value}</p>
                <div class="btnCopyContainer">
                    <p class="linkCopy">https://rel.ink/${cadena}</p>
                    <button class="buttonCopy">Copy</button>
                </div>
    `
    linkAddContainer.appendChild(linkContent)
    }else{
        input.style.color = 'red';
        input.style.borderColor = 'red'
        txtAdvise.textContent = `Please add a link`
        txtAdvise.classList.remove('nonTxtAdvise')
        txtAdvise.classList.add('sdaSeccionTxtAdvise')
        inputContainer.appendChild(txtAdvise)
    }
})
