let navBtn = document.querySelector('#navBtn');
if(navBtn){
    navBtn.addEventListener('click', function(){
        let line1 = document.querySelector('#line-1');
        let line2 = document.querySelector('#line-2');
        let line3 = document.querySelector('#line-3');
        line1.classList.toggle('animation-line1');
        line2.classList.toggle('animation-line2');
        line3.classList.toggle('animation-line3');
        let navDiv = document.querySelector('.custom-nav-div');
        navDiv.classList.toggle('width-effect');
    });
}

const propertyOption = document.querySelector('.propertyOption');
const locationOption = document.querySelector('.locationOption');
const statusOption = document.querySelector('.statusOption');
const priceOption = document.querySelector('.priceOption');
const priceOption1 = document.querySelector('.priceOption1');
const furnitureOption = document.querySelector('.furnitureOption');
const sIOption = document.querySelector('.sIOption');
const bedOption = document.querySelector('.bedOption');
const bathOption = document.querySelector('.bathOption');
const searchType = document.querySelector('#searchType');
const searchLocation = document.querySelector('#searchLocation');



searchType.addEventListener('keyup', ()=> {
    let arr = [];
    let searchedVal = searchType.value;
    arr = propertyTypes.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li>${data}</li>`).join("");
    propertyOption.innerHTML = arr ? arr : `<p style='padding:0px 10px;color:#000!important' >Result Not Found</p>`;
});

searchLocation.addEventListener('keyup', ()=> {
    let arr = [];
    let searchedVal = searchLocation.value;
    arr = locationTypes.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li>${data}</li>`).join("");
    locationOption.innerHTML = arr ? arr : `<p style='padding:0px 10px;color:#000!important' >Result Not Found</p>`;
});



const wrappers = document.querySelectorAll('.wrapper');
wrappers.forEach(wrapper => {
    initializeCustomSelect(wrapper);
});


let propertyTypes = ["Villa","Apartment","Duplex","Townhouse","Penthouse","Chalet","Bungalow","Compound",
    "Staff Accommodation","Whole Building","Land","Staff Accommodation","Commercial","Villa","Apartment","Office Space","Full Space","Retail","Shop","Warehouse","Restaurant","Show Room","Labour Camp","Staff Accommodation","Whole Building","Medical Facility","Land"];
let statusTypes = ["Any","Rent","Sale"];
let priceTypes = ["30,000 BHD","40,000 BHD","50,000 BHD","60,000 BHD","70,000 BHD","80,000 BHD","90,000 BHD","100,000 BHD","110,000 BHD","120,000 BHD","130,000 BHD","140,000 BHD","150,000 BHD","160,000 BHD","170,000 BHD","180,000 BHD","190,000 BHD","200,000 BHD","225,000 BHD","250,000 BHD","300,000 BHD","350,000 BHD","400,000 BHD","500,000 BHD","750,000 BHD","1,000,000 BHD"];
let furnitureType = ["Any","Unfurnished","Semi-Furnished","Furnished"];
let sItypes = ["Inclusive","Exclusive"];
let countTypes = ["1","2","3","4","5","6","7","8","9+"];
let locationTypes = ["Adliya","Al Jasra","Amwaj Islands","Budaiya","Busaiteen","Diplomatic Area","Dilmunia Island","Diyar Al Muharraq","Janabiya","Juffair","Hamala","Hidd","Mahooz","Manama","Reef Island","Riffa Views","Saar","Sanabis","Seef","Tubli","Um Al Hasam","Zinj","Abraj Al Lulu (Capital Governorate, Manama)","Al Areen Development (Southern Governorate, Zallaq)","Al Bu Khmais (Capital Governorate)","Al Burhama (Capital Governorate, Manama)","Al Marsa Floating City (Muharraq Governorate, Amwaj Islands)","Al Naseem (Muharraq Governorate, Diyar Al Muharraq)","Al Noor (Muharraq Governorate, Diyar Al Muharraq)","Al Qadam (Northern Governorate)","Al Qalah (Governorate)","Al Qamra (Muharraq Governorate, Diyar Al Muharraq)","Al Qurayyah (Northern Governorate)","Al-Zayayina (Muharraq Governorate)","Amwaj Islands (Muharraq Governorate, Amwaj Islands)","Amwaj Homes (Muharraq Governorate, Amwaj Islands)","Amwaj Marina (Muharraq Governorate, Amwaj Islands)","Bahrain Bay (Capital Governorate)","Bahrain Financial Harbour (Capital Governorate, Manama)","Buhrain Investment Gateway (Muharraq Governorate)","Bani Jamra (Muharraq Governorate)", "Barbar (Northern Governorate)","Breeze of Dilmunia (Muharraq Governorate, Dilmunia Island)","Bu Kowarah (South Governorate, Riffa)","Bu Quwah (Northern Governorate)","Canal View (Muharraq Governorate, Dilmunia Island)","Dar Kulaib (Northern Governorate)","Deerat Al Oyoun (Muharraq Governorate, Diyar Al Muharraq)","Diraz (Northern Governorate)","Dumistan (Northern Governorate)","Durrat Al Bahrain (Southern Governorate)","Durrat Marina (Southern Governorate)","Eker (Central Governorate)","Essence of Dilmunia (Muharraq Governorate, Dilmunia Island)","Exhibition Road (Capital Governorate, Hoora)","Galali (Muharraq Governorate)","Ghuraifah (Old Juffair) (Capital Governorate, Manama)","Gudaibiya (Capital Governorate, Manama)","Gufool (Capital Governorate, Manama)","Hammad Town (Northern Governorate)","Hanging Garden (Muharraq Governorate, Dilmunia Island)","Hoora (Capital Governorate)","Isa Town (Central Governorate)","Jannusan (Northern Governorate)","Jeblat Hebshi (Northern Governorate)","Jid Al Haj (Northern Governorate)","Jid Ali (Central Governorate)","Jidhafs (Nothern Governorate)","Jurdab (Central Governorate)","Karbabad (Capital Governorate, Manama)","Karrana (Northern Governorate)","Karzakkan (Northern Governorate)","Khamis (Northern Governorate)","Manama Downtown (Capital Governorate, Manama)","Manama Sea Front (Capital Governorate, Manama)","Marassi Al Bahrain (Muharraq Governorate, Diyar Al Muharraq)","Marassi Boulevard (Muharraq Governorate, Diyar Al Muharraq)","Marassi Residences (Muharraq Governorate, Diyar Al Muharraq)","Marassi Shores Residences (Muharraq Governorate, Diyar Al Muharraq)","Mina Salman Industrial Area (Capital Governorate, Mina Salman)","Nabih Saleh (Capital Governorate)","Najma (Muharraq Governorate, Amwaj Islands)","North Riffa (Southern Governorate, Riffa)","Northern City (Madinat Salman) (Northern Governorate)","Nuwaidrat (Central Governorate)","Ras Zuwayed (Southern Governorate)","Riffa (Southern Governorate)","Riffa Al Sharqi (Southern Governorate, Riffa)","Salmabad (Central Governorate)","Salmaniya (Capital Governorate, Manama)","Sanad (Central Governorate)","Sitra (Central Governorate)","Tala Island (Muharraq Governorate, Amwaj Islands)","Tashan (Northern Governorate)","The Address Residences (Muharraq Governorate, Diyar Al Muharraq)","The Lagoon (Muharraq Governorate, Amwaj Islands)","The Treasure (Muharraq Governorate, Dilmunia Island)","Wahat Al Muharraq (Muharraq Governorate)","Water Garden City (Capital Governorate, Manama)","West Riffa (Southern Governorate, Riffa)","Zallaq (Southern Governorate)"];

bathOption.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        updateName(event.target);
    }
});
function addBathType(){
    bathOption.innerHTML = "";
    countTypes.forEach(count => {
        let li = `<li>${count}</li>`;
        bathOption.insertAdjacentHTML("beforeend",li);
    });
}
addBathType();


bedOption.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        updateName(event.target);
    }
});
function addBedType(){
    bedOption.innerHTML = "";
    countTypes.forEach(count => {
        let li = `<li>${count}</li>`;
        bedOption.insertAdjacentHTML("beforeend",li);
    });
}
addBedType();

sIOption.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        updateName(event.target);
    }
});
function addSIType(){
    sIOption.innerHTML = "";
    sItypes.forEach(type =>{
        let li = `<li>${type}</li>`;
        sIOption.insertAdjacentHTML("beforeend",li);
    });
}
addSIType();


furnitureOption.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        updateName(event.target);
    }
});
function addFurnitureType(){
    furnitureOption.innerHTML = "";
    furnitureType.forEach(furniture => {
        let li = `<li>${furniture}</li>`;
        furnitureOption.insertAdjacentHTML("beforeend",li);
    });
}
addFurnitureType();

locationOption.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        updateName(event.target);
    }
});
function addLocationType(){
    locationOption.innerHTML = "";
    locationTypes.forEach(location => {
        let li = `<li>${location}</li>`
        locationOption.insertAdjacentHTML("beforeend",li);
    });
}
addLocationType();

statusOption.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        updateName(event.target);
    }
});
function addStatusType(){
    statusOption.innerHTML = "";
    statusTypes.forEach(status => {
        let li = `<li>${status}</li>`;
        statusOption.insertAdjacentHTML("beforeend",li);
    });
}
addStatusType();

priceOption.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        updateName(event.target);
    }
});
function addPriceType(){
    priceOption.innerHTML = "";
    priceTypes.forEach(price => {
        let li = `<li>${price}</li>`;
        priceOption.insertAdjacentHTML("beforeend",li);
    });
}
addPriceType();

priceOption1.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        updateName(event.target);
    }
});

function addPriceType1(){
    priceOption1.innerHTML = "";
    priceTypes.forEach(price => {
        let li = `<li>${price}</li>`;
        priceOption1.insertAdjacentHTML("beforeend",li);
    });
}
addPriceType1();

propertyOption.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        updateName(event.target);
    }
});

function addPropertyType(){
    propertyOption.innerHTML = "";
        propertyTypes.forEach(property => {
            if(property !== "Commercial"){
                let li = `<li>${property}</li>`;
                propertyOption.insertAdjacentHTML("beforeend", li);
            }
            else{
                let li = `<li class="text-uppercase fw-bold" >${property}</li>`;
                propertyOption.insertAdjacentHTML("beforeend", li);
            }
        });
}
addPropertyType();

function updateName(selectedLi){
    searchType.value = "";
    searchLocation.value = "";
    const wrapper = selectedLi.closest('.wrapper');
    const selectBtn = selectedLi.closest('.wrapper').querySelector('.select-btn');
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
    wrapper.classList.remove('active');
    addPropertyType();
    addLocationType();
}

let openedMenu = null;

function initializeCustomSelect(wrapper) {
    const selectBtn = wrapper.querySelector(".select-btn");
    const options = wrapper.querySelector('.options');
    selectBtn.addEventListener("click", (event) => {
        // Check if any other menu is already open
        if (openedMenu && openedMenu !== wrapper) {
            openedMenu.classList.remove('active');
        }
        
        wrapper.classList.toggle('active');
        openedMenu = wrapper; // Update the currently opened menu
        event.stopPropagation();
    });
}

document.addEventListener("click", (event) => {
    // Check if the click occurred inside the opened menu
    if (openedMenu && !openedMenu.contains(event.target)) {
        openedMenu.classList.remove('active');
        openedMenu = null; // Reset the openedMenu variable
    }
});


let showBtn = document.querySelector('#showBtn');
if(showBtn){
    showBtn.addEventListener('click',function(){
        let selectMenu = document.querySelector('#select-menu');
        let searchBtn = document.querySelector('#searchBtn-div');
        selectMenu.classList.toggle('div-hidden');
        showBtn.classList.toggle('rotate-btn');
        searchBtn.classList.toggle('translate-80');
    });
}

