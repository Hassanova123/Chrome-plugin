let myLeads=["google.com", "amazon.com"]

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const remBtn = document.getElementById("rem-btn")

let leadsFromLocalStorage = JSON.parse( localStorage.getItem(myLeads) )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()

    console.log( localStorage.getItem("myLeads") )
})

remBtn.addEventListener("click", function() {
    myLeads.length = 0;
    renderLeads()
})



function renderLeads() {
    
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li> 
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]} 
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}