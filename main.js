// id das imagens 
const oitoHoras = document.getElementById('08');


const quatroHoras = document.getElementById('16');


const cincoHoras = document.getElementById('17');


const seisHoras = document.getElementById('18');


const seteHoras = document.getElementById('19');

// Ao clicar em cada botao especifico mudará a imagem de cada id
oitoHoras.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('./img/0800.jpg')"

});

quatroHoras.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('./img/1600.jpg')"
});

cincoHoras.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('./img/1700.png')"
});

seisHoras.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('./img/1800.jpg')"
});

seteHoras.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('./img/2000.jpg')"
});


// Usando a função de relogar a página
// O 05:00 é o banner principal, então, esse botão irá apenas relogar a pagina

function reloadPage() {
    location.reload();
  }
  
  const cincoHorasManha = document.getElementById('05');
  cincoHorasManha.addEventListener('click', reloadPage);
  
