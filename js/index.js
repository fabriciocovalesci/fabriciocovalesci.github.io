
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 230 * i)

  });
}
// const titulo = document.querySelector('#welcome');

// setTimeout(typeWrite(titulo),4500);



const nomeTitulo = document.querySelector('#fabricio');

typeWrite(nomeTitulo)


