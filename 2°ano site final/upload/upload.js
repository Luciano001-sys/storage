        function exibirArquivos() {
            const pdfList = document.getElementById('pdfList');
            pdfList.innerHTML = '';//limpa a lista antes de reexibir
            // Recupera os arquivos do LocalStorage
            const arquivos = JSON.parse(localStorage.getItem('pdfFiles')) || [];

            arquivos.forEach((arquivo, index) => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = arquivo.dataUrl;
                link.target = "_blank";
                link.textContent = arquivo.nome;
                listItem.appendChild(link);
                pdfList.appendChild(listItem);
            });
        }

        // Função para armazenar o arquivo no LocalStorage
        function armazenarNoLocalStorage(file) {
            //armazenar os arquivos no LocalStorage
            const reader = new FileReader();
            //chama a função para executar
            reader.onload = function (event) {
                const fileDataUrl = event.target.result; // Dados base64 do arquivo PDF
                const fileName = file.name;

                // Recupera os arquivos já armazenados ou cria um array vazio
                const arquivos = JSON.parse(localStorage.getItem('pdfFiles')) || [];

                // Adiciona o novo arquivo ao array
                arquivos.push({ nome: fileName, dataUrl: fileDataUrl });

                // Armazena novamente no LocalStorage
                localStorage.setItem('pdfFiles', JSON.stringify(arquivos));

                // Exibe a lista atualizada de arquivos
                exibirArquivos();
            };
            reader.readAsDataURL(file); // Converte o arquivo em base64
        }

        // Evento do envio do formulário
        document.getElementById('uploadForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const fileInput = document.querySelector('input[type="file"]');
            const file = fileInput.files[0]; // Pega o primeiro arquivo selecionado

            if (file && file.type === 'application/pdf') {
                // Armazena o arquivo no LocalStorage
                armazenarNoLocalStorage(file);
                fileInput.value = ''; // Limpa o campo de seleção de arquivo
            } else {
                alert('Por favor, selecione um arquivo PDF.');
            }
        });

        // Exibe os arquivos PDF armazenados ao carregar a página
        window.onload = function () {
            exibirArquivos();
        };

        
        //direciona para o contato
        document.getElementById("content2").addEventListener('click', function (event) {
            event.preventDefault();// impede o link de seguir para a url
            duvida = prompt("Escreva sua Dúvida!");
            console.log(duvida);
        });
        