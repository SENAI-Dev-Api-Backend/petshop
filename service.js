async function getServiceList() {
    const response = await fetch('http://localhost:3000/api/services')
    const data = await response.json()
    const service = document.querySelectorAll('tr > td')

    service.forEach(td => {
        const tr = td.parentNode
        tr.remove()
    })
    const serviceListContainer = document.getElementById('service-list-container')

    data.forEach(service => {
        const newServiceTr = document.createElement('tr')

        newServiceTr.id = service.id
        newServiceTr.innerHTML = `
      <td>${service.services}</td>
      <td>${service.name}</td>
      <td>${service.price}</td>
      <td>${service.duration}</td>
    `

        serviceListContainer.appendChild(newServiceTr)
    })

}
getServiceList()

const createServiceButton = document.getElementById('create-service-button')

createServiceButton.addEventListener('click', async(event) => {
    event.preventDefault()

    const services = document.querySelector('input[name="services"]').value
    const name = document.querySelector('input[name="name"]').value
    const price = document.querySelector('input[name="price"]').value
    const duration = document.querySelector('input[name="duration"]').value

    await fetch('http://localhost:3000/api/services', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            services,
            name,
            price,
            duration,
        })
    })

    await getServiceList()
})