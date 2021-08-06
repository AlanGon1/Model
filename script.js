var agr = new Date()
var hora = agr.getHours()
var escreva = document.querySelector('div#espaço-data')
var insira = document.querySelector('img#foto')
var a = new Date()
var diaSem = a.getDay()

function carregar() {
    
    //document.body.style.background-Image.linear-gradient            

    escreva.innerHTML = `Agora são exatamente ${hora} horas de uma ` 
    switch(diaSem) {
        case 0:
            escreva.innerHTML += 'Domingo-feira. '
            break    
        case 1:
            escreva.innerHTML +='Segunda-feira. '
            break
        case 2:
            escreva.innerHTML +='Terça-feira. '
            break
        case 3:
            escreva.innerHTML +='Quarta-feira. '
            break
        case 4:
            escreva.innerHTML +='Quinta-feira. '
            break
        case 5:
            escreva.innerHTML +='Sexta-feira. '
            break
        case 7:
            escreva.innerHTML +='Sábado-feira. '
            break
        default:
            break
    }

    if (hora>=6 && hora<9) {
        escreva.innerHTML += ' Bom dia!'
        insira.src = 'imagens/a-manha1.png'
        document.body.style.background = '#f7ae04b2'

    } else if (hora>=9 && hora<12) {
        escreva.innerHTML += ' Bom dia!'
        insira.src = 'imagens/a-manha2.png'
        document.body.style.background = '#f7ae04b2'

    } else if (hora>=12 && hora<=15) {
        escreva.innerHTML += ' Boa tarde!'
        insira.src = 'imagens/a-tarde1.png'
        document.body.style.background = '#1C3240'

    } else if (hora>15 && hora<18) {
        escreva.innerHTML += ' Boa tarde!'
        insira.src = 'imagens/a-tarde2.png'
        document.body.style.background = '#1C3240'

    } else if (hora>=18 && hora<=23) {
        escreva.innerHTML += ' Boa noite!'
        insira.src = 'imagens/a-noite1.png'
        document.body.style.background = '#0D212C'

    } else {
        escreva.innerHTML += ' Boa madrugada!'
        insira.src = 'imagens/a-noite2.png'
        document.body.style.background = '#0a1922'
    }    
}