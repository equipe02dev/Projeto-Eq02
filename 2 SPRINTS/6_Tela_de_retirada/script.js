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

document.addEventListener('DOMContentLoaded', () => {
    const cepInput = document.getElementById('cep');
    const buscarCepButton = document.getElementById('buscar-cep');
    const resultadoCep = document.getElementById('resultado-cep');
    const cepHelper = document.getElementById('cep-helper');

    // Função para buscar o CEP
    const buscarCEP = async () => {
        const cep = cepInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (cep.length !== 8) {
            cepHelper.textContent = 'CEP inválido. Digite um CEP com 8 dígitos.';
            cepHelper.style.color = 'red';
            resultadoCep.style.display = 'none'; // Oculta a área de resultados
            return;
        }

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                cepHelper.textContent = 'CEP não encontrado.';
                cepHelper.style.color = 'red';
                resultadoCep.style.display = 'none';
            } else {
                // Preenche os campos com os dados do CEP
                document.getElementById('logradouro').textContent = data.logradouro;
                document.getElementById('bairro').textContent = data.bairro;
                document.getElementById('cidade').textContent = data.localidade;
                document.getElementById('estado').textContent = data.uf;

                resultadoCep.style.display = 'block'; // Exibe a área de resultados
                cepHelper.textContent = 'CEP válido.';
                cepHelper.style.color = 'green';
            }
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
            cepHelper.textContent = 'Erro ao buscar CEP. Tente novamente.';
            cepHelper.style.color = 'red';
        }
    };

    // Evento de clique no botão
    buscarCepButton.addEventListener('click', buscarCEP);

    // Evento de pressionar "Enter" no campo de CEP
    cepInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            buscarCEP();
        }
    });
});