let escuro = document.querySelector('div#container')
let input = document.querySelector('input')

function modo() {
    escuro.classList.add('black')
    
    /*const input = document.createElement('input')
    
    escuro.appendChild(input)
    escuro.removeChild(container.children[2]) 
    
    
    
    input.setAttribute('type', 'button')
    input.setAttribute('value', 'Aperte') */
    input.setAttribute('onclick', 'modo2()')
    input.setAttribute('class', 'botao2')
    
}

function modo2() {
    escuro.classList.remove('black')

   /*const input = document.createElements('input')

   escuro.appendChild(input)
    escuro.removeChild(container.children[1]) 
     

    input.setAttribute('type', 'button')
    input.setAttribute('value', 'Aperte') */
    input.setAttribute('onclick', 'modo()')
    input.setAttribute('class', 'botao')

    
}