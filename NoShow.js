const loadData = async (searchValue) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    displayData(phones);
};


const displayData = (phones) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    // console.log('phoness length', phones.length)
    //display showall button if phone lemgth more than 10
    const showAllContainer = document.getElementById('show-all');
    if (phones.length > 12) {
        showAllContainer.classList.remove('hidden')
    } else {
        showAllContainer.classList.add('hidden');
    }

    //display only 10 phone
    phones = phones.slice(0, 10);

    phones.forEach(phone => {
        // console.log(phone)
        const phoneDiv = document.createElement('div');
        phoneDiv.classList = `card w-96 glass`;
        phoneDiv.innerHTML = `
        <figure><img src="${phone.image}"/></figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>${phone.brand}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary" onclick="handleShowAll('${phone.slug}')">Show Details</button>
    </div>
  </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    });
    handleLoading(false);
}


const handleSearch = () => {
    //handleLoading value true bcz it clicked
    handleLoading(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText)

    //search kore je value paccu seta load dataer parameter 
    loadData(searchText)
}

const handleShowAll = async (id) => {
    // console.log('clicked show all', id)

    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    // console.log(data.data)
    showAll(data)
}

//show all data after click show detsils button
const showAll = (phone) => {
    // console.log('phone clicked', phone)
    show_details.showModal();
}

//loading spinner
const handleLoading = (isLoading) => {
    const loading = document.getElementById('spinner');
    if (isLoading) {
        loading.classList.remove('hidden');
    } else {
        loading.classList.add('hidden');
    }
}


const handleShowAlls = () => {
    handleSearch(true)
}


// loadData();