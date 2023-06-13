async function getCostumerList() {
    const response = await fetch('http://localhost:3000/api/atendimento')
    const data = await response.json()
    const costumer = document.querySelectorAll('tr > td')

    costumer.forEach(td => {
        const tr = td.parentNode
        tr.remove()
    })
    const costumerListContainer = document.getElementById('costumer-list-container')

    data.forEach(costumer => {
        const newCostumerTr = document.createElement('tr')

        newCostumerTr.id = costumer.id
        newCostumerTr.innerHTML = `
      <td>${costumer.service}</td>
      <td>${costumer.animal}</td>
      <td>${costumer.date}</td>
    `

        costumerListContainer.appendChild(newCostumerTr)
    })

}
getCostumerList()

const createCostumerButton = document.getElementById('create-costumer-button')

createCostumerButton.addEventListener('click', async(event) => {
    event.preventDefault()

    const service = document.querySelector('input[name="service"]').value
    const animal = document.querySelector('input[name="animal"]').value
    const date = document.querySelector('input[name="date"]').value

    await fetch('http://localhost:3000/api/atendimento', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            service,
            animal,
            date,
        })
    })

    await getCostumerList()
})