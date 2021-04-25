//Pega os atributos da HTML
let escuro = document.querySelector('div#container')//Pega a id do container
//let input = document.querySelector('input') //Apenas o input do botao Não é mais necessário
let card = document.querySelector('div.card') //Classe da div
let scro = document.querySelector('div.scroll') //Classe da div
let botao = document.querySelector('input.botao')//Classe da div

function modo() {
    //adição de classe black 
    escuro.classList.add('black')
    card.classList.add('black')
    scro.classList.add('black')
    botao.classList.add('black')
    
    /*const input = document.createElement('input')
    
    escuro.appendChild(input)
    escuro.removeChild(container.children[2]) 
    
    input.setAttribute('type', 'button')
    input.setAttribute('value', 'Aperte') */ //Não é mais necessário
    //Remove os filhos h1 e p
    card.removeChild(card.children[1])
    card.removeChild(card.children[1])
    //Cria novos filhos h1 e p
    const ht = document.createElement('h1')
    const p = document.createElement('p')
    //Cria string no card de acordo com os filhos h1 e p
    ht.innerHTML = 'Modo Escuro'
    p.innerHTML = 'Esse é o modo escuro'
    //Adiciona os filhos criados no pai div container
    card.appendChild(ht)
    card.appendChild(p)
    //Muda o atributo onlick
    botao.setAttribute('onclick', 'modo2()')
    //input.setAttribute('class', 'botao2')
    
}

function modo2() {
    //Remove os atributos criados 
    escuro.classList.remove('black')
    card.classList.remove('black')
    scro.classList.remove('black')
    botao.classList.remove('black')
   /*const input = document.createElements('input')

   escuro.appendChild(input)
    escuro.removeChild(container.children[1]) 
     

    input.setAttribute('type', 'button')
    input.setAttribute('value', 'Aperte') */ //Não é mais necessário
    //remove o filho criado h1 e p
    card.removeChild(card.children[1])
    card.removeChild(card.children[1])
    //cria novos filhos h1 e p
    const ht = document.createElement('h1')
    const p = document.createElement('p')
    //Adiciona string no card nos filhos h1 e p
    ht.innerHTML = 'Modo Claro'
    p.innerHTML = 'Esse é o modo claro'
    //Adiciona os filhos criados no pai div container
    card.appendChild(ht)
    card.appendChild(p)
    //Muda o atributo do onclick
    botao.setAttribute('onclick', 'modo()')
    //input.setAttribute('class', 'botao')

    
}