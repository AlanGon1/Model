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

function carregar() {
    var a = new Date()
    var diaSem = a.getDay()

    switch(diaSem) {
        case 0:
         console.log('Domingo')
        break    
        case 1:
            console.log('Segunda')
            break
        case 2:
            console.log('Terça')
            break
        case 3:
            console.log('Quarta')
            break
        case 4:
            console.log('Quinta')
            break
        case 5:
            console.log('Sexta')
            break
        case 7:
            console.log('Sábado')
            break
        default:
            break
    }
}