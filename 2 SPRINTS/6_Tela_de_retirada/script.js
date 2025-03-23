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

function buscarCEP() {
     // Obtém o valor do CEP digitado pelo usuário
     var cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove caracteres não numéricos
     var resultado = document.getElementById('resultado');
 
     // Valida se o CEP tem 8 dígitos
     if (cep.length !== 8 || isNaN(cep)) {
         resultado.innerHTML = '<p style="color: red;">CEP inválido! Digite um CEP com 8 números.</p>';
         return; // Interrompe a execução da função
     }
 
     // Faz a requisição à API do ViaCEP
     fetch(`https://viacep.com.br/ws/${cep}/json/`)
         .then(response => response.json()) // Converte a resposta para JSON
         .then(data => {
             // Verifica se o CEP foi encontrado
             if (data.erro) {
                 resultado.innerHTML = '<p style="color: red;">CEP não encontrado.</p>';
             } else {
                 // Exibe os dados do endereço
                 resultado.innerHTML = `
                     <p><strong>CEP:</strong> ${data.cep}</p>
                     <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                     <p><strong>Bairro:</strong> ${data.bairro}</p>
                     <p><strong>Cidade:</strong> ${data.localidade}</p>
                     <p><strong>Estado:</strong> ${data.uf}</p>
                 `;
             }
         })
         .catch(error => {
             // Exibe uma mensagem de erro em caso de falha na requisição
             resultado.innerHTML = '<p style="color: red;">Erro ao buscar o CEP.</p>';
             console.error('Erro:', error);
         });
 }