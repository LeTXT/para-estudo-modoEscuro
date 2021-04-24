let escuro = document.querySelector('div#container')


function modo() {
    escuro.classList.add('white')
    
    const input = document.createElement('input')
    
    escuro.removeChild(container.children[0])
    escuro.appendChild(input)
    
    
    input.setAttribute('type', 'button')
    input.setAttribute('value', 'Aperte')
    input.setAttribute('onclick', 'modo2()')

    
}

function modo2() {
    escuro.classList.remove('white')

   const input = document.createElement('input')

    escuro.removeChild(container.children[0])
    escuro.appendChild(input) 

    input.setAttribute('type', 'button')
    input.setAttribute('value', 'Aperte')
    input.setAttribute('onclick', 'modo()')

    
}