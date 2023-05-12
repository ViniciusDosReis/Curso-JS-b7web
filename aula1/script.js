function clicou() {
    const teste = document.querySelector('#teste')
    const ul = document.querySelector('ul')
    
    let button = document.createElement("button")
    button.innerHTML = "botão"
    ul.after(button)
}