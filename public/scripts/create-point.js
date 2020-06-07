

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")


    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        })
}

populateUFs()


function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {

            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false

        })
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


//Itens de coleta
// pegar todos os li's
const itensToCollect = document.querySelectorAll(".itens-grid li")

for (const iten of itensToCollect) {
    iten.addEventListener("click", handleSelectedIten)
}


const collectedItens = document.querySelector("input[name=items]")

let selectedItens = []

function handleSelectedIten(event) {

    const itenLi = event.target

    // adicionar ou remover classe com JS
    itenLi.classList.toggle("selected")

    const itenId = event.target.dataset.id

    const alreadySelected = selectedItens.findIndex(iten => {
        const itenFound = iten == itenId
        return itenFound
    })

    if (alreadySelected >= 0) {
        const filteredItens = selectedItens.filter(iten => {
            const itenIsDifferent = iten != itenId
            return itenIsDifferent
        })

        selectedItens = filteredItens
    } else {
        selectedItens.push(itenId)

    }

    collectedItens.value = selectedItens

}
