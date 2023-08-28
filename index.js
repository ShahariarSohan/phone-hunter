const phoneLoad = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    phoneCollection(phones)
}
const phoneCollection = phones => {
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

}
const buttonLoad = () => {
    const input = document.getElementById('input')
    const searchText = input.value
    phoneLoad(searchText)
}