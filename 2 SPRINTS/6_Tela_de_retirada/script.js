let cepInput = document.getElementById("cep");
let cepLabel = document.querySelector('label[for="cep"]');
let cepHelper = document.getElementById("cep-helper");

cepInput.addEventListener('change', (evento) => {
   let valor = evento.target.value;
   console.log(valor); 

   // Remove espaços e hífens
   let valorLimpo = valor.replace(/[^\d]/g, '');

   // Verifica se o CEP tem exatamente 8 dígitos
   if (valorLimpo.length !== 8) {
        cepInput.classList.add('error');
        cepInput.classList.remove('success');
        cepHelper.classList.add('visible');
        cepHelper.innerText = "O CEP deve ter exatamente 8 dígitos numéricos";
   } else {
        cepInput.classList.remove('error');
        cepInput.classList.add('success');
        cepHelper.classList.remove('visible');
        cepHelper.innerText = "";
   }
});


let numeroInput = document.getElementById("numero");
let numeroLabel = document.querySelector('label[for="numero"]');
let numeroHelper = document.getElementById("numero-helper");

numeroInput.addEventListener('change', (evento) => {
   let valor = evento.target.value;
   console.log(valor);

   // Remove qualquer coisa que não seja número
   let valorNumerico = valor.replace(/\D/g, ''); // Remove qualquer coisa que não seja número

   // Verifica se o número tem pelo menos 1 caractere
   if (valorNumerico.length < 1) {
        numeroInput.classList.add('error');
        numeroInput.classList.remove('success');
        numeroHelper.classList.add('visible');
        numeroHelper.innerText = "Digite o número da sua residência.";
   } else {
        numeroInput.classList.remove('error');
        numeroInput.classList.add('success');
        numeroHelper.classList.remove('visible');
        numeroHelper.innerText = "";
   }
});
