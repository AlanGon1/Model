function carregar() {
    var agr = new Date()
    var hora = agr.getHours()
    var escreva = document.querySelector('div#espaço-data')
    
    //document.body.style.background-Image.linear-gradient            

    escreva.innerHTML = `Agora são exatamente ${hora} horas.`
    if (hora<12&&hora>=6) {
        escreva.innerHTML += ' Bom dia!'
        document.body.style.background = '#B54E61'
    } else if (hora>=12&&hora<18) {
        escreva.innerHTML += ' Boa tarde!'
        document.body.style.background = '#6B4669'
    } else if (hora>=18&&hora<=23) {
        escreva.innerHTML += ' Boa noite!'
        document.body.style.background = '#3E3E67'
    } else {
        escreva.innerHTML += ' Boa madrugada!'
        document.body.style.background = '#FF8944'
    }
}