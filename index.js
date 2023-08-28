const phoneLoad = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    phoneCollection(phones)
}
const phoneCollection = phones => {
    phones = phones.slice(0, 12)
    const showAllButton = document.getElementById('show-all')
    if (phones.length >= 12) {
        showAllButton.classList.remove('hidden')
    }
    else {
        showAllButton.classList.add('hidden')
    }
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = ''
    phones.forEach(phone => {
        console.log(phone)
        const phoneCard = document.createElement('div')
        phoneCard.classList = "card  bg-base-100 shadow-xl p-5"
        phoneCard.innerHTML = `        
            <figure><img src="${phone.image}" alt="Iphone" /></figure>
            <div class="card-body text-center">
                <h2 class="text-2xl font-bold ">${phone.phone_name}</h2>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <h2 class="text-2xl font-bold">$900</h2>
                <div class="card-actions justify-center">
                <button class="btn btn-primary">Show Details</button>
                </div>
            </div>        
            `
        phoneContainer.appendChild(phoneCard)
    });
    loadingSpinner(false)

}
const buttonLoad = () => {
    loadingSpinner(true)
    const input = document.getElementById('input')
    const searchText = input.value
    phoneLoad(searchText)
}
const loadingSpinner = (isLoading) => {
    const loading = document.getElementById('loading')
    if (isLoading) {
        loading.classList.remove('hidden')
    }
    else {
        loading.classList.add('hidden')
    }
}