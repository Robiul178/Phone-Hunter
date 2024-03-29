// const loadPhone = async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
//     const data = await res.json();
//     const phones = data.data;
//     // console.log(phone)
//     displayPhone(phones);
// }

const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones)
    console.log('searchText', searchText)
}

const displayPhone = phones => {
    //1st step: get the id where to append
    const phoneContainer = document.getElementById('phone-container');
    //clear phone container cards before adding new cards
    phoneContainer.textContent = '';


    phones.forEach(phone => {
        // console.log(phone)
        //2nd: crete element
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 shadow-xl`;
        //3rd: add innerhtml
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
       <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
      </div>
       </div>
        `;

        //4th:append cield
        phoneContainer.appendChild(phoneCard)

    });
}
const handleSearch = () => {
    // console.log('okkk')
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText)
}



// loadPhone()