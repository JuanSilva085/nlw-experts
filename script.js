const perguntas = [
    {
      pergunta:
        "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
      respostas: ["let", "var", "const", "declare"],
      correta: 0, // A resposta correta é "let"
    },
    {
      pergunta:
        "Qual destas opções é uma forma válida de se referir a um elemento HTML usando JavaScript?",
      respostas: [
        "document.getElement('myElement')",
        "document.find('myElement')",
        "document.getElementById('myElement')",
        "document.select('myElement')",
      ],
      correta: 2, // A resposta correta é "document.getElementById('myElement')"
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Adicionar um novo elemento ao documento",
        "Adicionar um ouvinte de eventos a um elemento",
        "Adicionar um estilo CSS a um elemento",
        "Adicionar um atributo a um elemento",
      ],
      correta: 1, // A resposta correta é "Adicionar um ouvinte de eventos a um elemento"
    },
    {
      pergunta: "O que o método 'querySelector' faz em JavaScript?",
      respostas: [
        "Seleciona o primeiro elemento do documento que corresponde a um seletor especificado",
        "Seleciona todos os elementos do documento que correspondem a um seletor especificado",
        "Altera o seletor de um elemento no documento",
        "Remove um elemento do documento",
      ],
      correta: 0, // A resposta correta é "Seleciona o primeiro elemento do documento que corresponde a um seletor especificado"
    },
    {
      pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
      respostas: ["+", "-", "*", "/"],
      correta: 0, // A resposta correta é "+"
    },
    {
      pergunta:
        "Qual método é usado para converter uma string em um número inteiro em JavaScript?",
      respostas: ["parseInt()", "toFloat()", "toInteger()", "convertToInt()"],
      correta: 0, // A resposta correta é "parseInt()"
    },
    {
      pergunta:
        "Qual dos seguintes métodos é usado para remover o último elemento de um array em JavaScript?",
      respostas: ["pop()", "remove()", "delete()", "splice()"],
      correta: 0, // A resposta correta é "pop()"
    },
    {
      pergunta:
        "Em JavaScript, qual é a sintaxe correta para um comentário de uma linha?",
      respostas: [
        "// Este é um comentário de uma linha",
        "<!-- Este é um comentário de uma linha -->",
        "/* Este é um comentário de uma linha */",
        "** Este é um comentário de uma linha **",
      ],
      correta: 0, // A resposta correta é "// Este é um comentário de uma linha"
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: ["55", "10", "5", "Error"],
      correta: 0, // A resposta correta é "55"
    },
    {
      pergunta:
        "Qual método JavaScript é usado para enviar uma solicitação HTTP assíncrona?",
      respostas: ["fetch()", "sendRequest()", "requestAsync()", "ajax()"],
      correta: 0, // A resposta correta é "fetch()"
    },
  ];
  
  const quiz = document.querySelector("#quiz");
  const template = document.querySelector('template');
  const quizItem = template.content.cloneNode(true);
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('acertos span')
  
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
     
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        if(estaCorreta){
          corretas.add(item)
        }  
          
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
     
     
      quizItem.querySelector('dl').appendChild(dt)
     
    }
  
    quizItem.querySelector('dl dt').remove()
  
  
    // isso coloca a pergunta na tela
    quiz.appendChild(quizItem);
  }
  