let escuro = document.querySelector('div#container')
let input = document.querySelector('input')
let card = document.querySelector('div.card')

function modo() {
    escuro.classList.add('black')
    card.classList.add('black')
    
    /*const input = document.createElement('input')
    
    escuro.appendChild(input)
    escuro.removeChild(container.children[2]) 
    
    input.setAttribute('type', 'button')
    input.setAttribute('value', 'Aperte') */

    card.removeChild(card.children[1])
    
    const ht = document.createElement('h1')
    ht.innerHTML = 'Modo Escuro'
    
    card.appendChild(ht)
    
    input.setAttribute('onclick', 'modo2()')
    input.setAttribute('class', 'botao2')
    
}

function modo2() {
    escuro.classList.remove('black')
    card.classList.remove('black')

   /*const input = document.createElements('input')

   escuro.appendChild(input)
    escuro.removeChild(container.children[1]) 
     

    input.setAttribute('type', 'button')
    input.setAttribute('value', 'Aperte') */

    card.removeChild(card.children[1])
    
    const ht = document.createElement('h1')
    ht.innerHTML = 'Modo Claro'
    
    card.appendChild(ht)

    input.setAttribute('onclick', 'modo()')
    input.setAttribute('class', 'botao')

    
}