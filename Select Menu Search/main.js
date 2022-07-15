const main = document.querySelector(".main"),
selectBtn = main.querySelector(".selectBtn"),
search = main.querySelector("input"),
options = main.querySelector(".options")

// array de alguns países
let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

function addPaises(selectedCountry){
    options.innerHTML = ""
    countries.forEach(Paises => {
        //se o valor do país e do país selecionado for o mesmo, adicione a classe selecionada
        let isSelected = Paises == selectedCountry ? "selected" : ""
        //ADICIONANDO CADA PAÍS DENTRO DO LI E INSERINDO TODAS AS TAG DE OPÇÕES DO LI DENTRO
        let li = `<li onclick="updateName(this)" class="${isSelected}">${Paises}</li>`
        options.insertAdjacentHTML("beforeend", li)
    })
}
addPaises()

function updateName(selectedLi){
    search.value = ""
    addPaises(selectedLi.innerText)
    main.classList.remove("active")
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

search.addEventListener("keyup", () => {
    let arr= []
    let searchedVal = search.value.toLowerCase()

    //retornando todos os países da matriz que começam com o valor pesquisado pelo usuário
    //e mapeando os paises retornado com li e juntando-se a eles
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("")
    options.innerHTML = arr ? arr : `<p>Oops! País não encontrado</p>`
})

selectBtn.addEventListener("click", () => {
    main.classList.toggle("active")
})

