// creation des variables permettant de cibler les différents éléments d'affichage
let spanNb1 = document.querySelector('#spanNb1')
let spanNb2 = document.querySelector('#spanNb2')
let spanSymb = document.querySelector('#spanSymb')
let spanNb3 = document.querySelector('#spanNb3')

// creation d'une variable qui permettra de cibler l'affichage
let affiche = spanNb1

// Fonction permettant d'afficher digit : il faut inclure le digit souhaité
function afficherNb(digit) {
    affiche.innerHTML += digit
}

// Fonction permettant d'afficher le symbole : il faut inclure le symbole souhaité
function afficherSymb(symbol) {
    spanSymb.innerHTML = symbol
    affiche = spanNb2
}

// Fonction permettant de calculer le digit à l'aide des symboles
function calculer() {
    let nb1 = parseFloat(spanNb1.innerHTML)
    let nb2 = parseFloat(spanNb2.innerHTML)
    let symbol = spanSymb.innerHTML

    switch (symbol) {
        case '+':
            spanNb3.innerHTML = nb1 + nb2
            break
        case '-':
            spanNb3.innerHTML = nb1 - nb2
            break
        case '*':
            spanNb3.innerHTML = nb1 * nb2
            break
        case '/':
            spanNb3.innerHTML = nb1 / nb2
            break
    }
}

// Fonction permettant de réinitialiser le calcul
function effacer() {
    spanNb1.innerHTML = ""
    spanSymb.innerHTML = ""
    spanNb2.innerHTML = ""
    spanNb3.innerHTML = ""
    affiche = spanNb1
}