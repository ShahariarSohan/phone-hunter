//data receive,load and show
const phoneLoad = async (searchText = 13) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    phoneCollection(phones)
}
const phoneCollection = phones => {
    const showAllButton = document.getElementById('show-all')
    if (phones.length >= 12) {
        showAllButton.classList.remove('hidden')
    }
    else {
        showAllButton.classList.add('hidden')
    }

    phones = phones.slice(0, 12)

    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = ''
    phones.forEach(phone => {
        const phoneCard = document.createElement('div')
        phoneCard.classList = "card  bg-base-100 shadow-xl p-5"
        phoneCard.innerHTML = `        
            <figure><img src="${phone.image}" alt="Iphone" /></figure>
            <div class="card-body text-center">
                <h2 class="text-2xl font-bold ">${phone.phone_name}</h2>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <h2 class="text-2xl font-bold">$900</h2>
                <div class="card-actions justify-center">
                <button onclick="showDetailsButton('${phone.slug}')"class="btn btn-primary">Show Details</button>
                </div>
            </div>        
            `
        phoneContainer.appendChild(phoneCard)
    });
    loadingSpinner(false)

}
//button handler
const buttonLoad = () => {
    loadingSpinner(true)
    const input = document.getElementById('input')
    const searchText = input.value
    phoneLoad(searchText)
}
//adding loading spinner
const loadingSpinner = (isLoading) => {
    const loading = document.getElementById('loading')
    if (isLoading) {
        loading.classList.remove('hidden')
    }
    else {
        loading.classList.add('hidden')
    }
}
//show modal with dynamic data
const showDetailsButton = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    const phone = data.data
    console.log(phone)
    showModalDetails(phone)
}
const showModalDetails = (phone) => {
    const phoneDetailContainer = document.getElementById('phone-detail-container')
    phoneDetailContainer.innerHTML = `
    <img  class="mx-auto"src="${phone.image}"/>
    <h1 id="title" class="text-2xl font-bold">${phone.name}</h1>
    <p class="text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
     <h1 class=""><span class="text-xl font-bold">Storage:</span> ${phone?.mainFeatures?.storage} </h1>
     <h1 class=""><span class="text-xl font-bold">DisplaySize:</span> ${phone?.mainFeatures?.displaySize} </h1>
     <h1 class=""><span class="text-xl font-bold">Chipset:</span> ${phone?.mainFeatures?.chipSet} </h1>
     <h1 class=""><span class="text-xl font-bold">Memory:</span> ${phone?.mainFeatures?.storage} </h1>
     <h1 class=""><span class="text-xl font-bold">Slug:</span> ${phone?.slug} </h1>
     <h1 class=""><span class="text-xl font-bold">ReleaseDate:</span> ${phone?.releaseDate} </h1>
     <h1 class=""><span class="text-xl font-bold">Brand:</span> ${phone?.brand} </h1>
     <h1 class=""><span class="text-xl font-bold">GPS:</span> ${phone?.others?.GPS} </h1>
     
     `
    show_details.showModal()
}
phoneLoad()