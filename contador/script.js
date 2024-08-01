let valor = document.getElementById("valor")
valor.innerHTML = 0

let multiatual = document.getElementById("multiatual")
multiatual.innerHTML = 1

let multi1 = document.getElementById("multi1")
multi1.addEventListener("click", () => {
    multi1.innerHTML = 1
    multiplicador = Number(multi1.innerHTML)
    multiatual.innerHTML = 1
})

let multi5 = document.getElementById("multi5")
multi5.addEventListener("click", () => {
    multi5.innerHTML = 5
    multiplicador = Number(multi5.innerHTML)
    multiatual.innerHTML = 5
})

let multi10 = document.getElementById("multi10")
multi10.addEventListener("click", () => {
    multi10.innerHTML = 10
    multiplicador = Number(multi10.innerHTML)
    multiatual.innerHTML = 10
})

let multi20 = document.getElementById("multi20")
multi20.addEventListener("click", () => {
    multi20.innerHTML = 20
    multiplicador = Number(multi20.innerHTML)
    multiatual.innerHTML = 20
})

let multiplicador = 1

const adicionar = document.getElementById("adicionar")

adicionar.addEventListener("click", () => {
    valor.innerHTML = Number(valor.innerHTML) + Number(multiplicador)
})

const diminuir = document.getElementById("diminuir")

diminuir.addEventListener("click", () => {
    valor.innerHTML = Number(valor.innerHTML) - multiplicador
    if (Number(valor.innerHTML) < 0) {
        valor.innerHTML = 0
    }
})

const resetar = document.getElementById("resetar")

resetar.addEventListener("click", () => {
    valor.innerHTML = Number(0)
})