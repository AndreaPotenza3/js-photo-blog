const baseUrl = 'https://jsonplaceholder.typicode.com/'
let urlBody = 'photos'
const post = document.querySelector('.row')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close')


const endpoint = baseUrl + urlBody 
console.log(endpoint)

axios
    .get(endpoint, {
        params: {
            _limit: 6,
        }
    })
    .then((res) => {
        console.log(res)
        const photos = res.data
        

        getPhotos(photos, post)

        // 
    })
    .catch((err) => {
        console.log(err)
    })

    closeBtn.addEventListener('click', () =>{
        overlay.classList.add('d-none')
    })
    
    const cards = document.querySelectorAll('.card')
    console.log(cards)
    
    cards.forEach((card) => {
    
        card.addEventListener('click', () => {
            console.log('click')
        })
    })
    

function getPhotos(photos, root) {
    

    photos.forEach((photo) => {

    const {title, url} = photo
    

    const photoCard = `<div class="col-3">
                        <div class="card">
                            <img src="./img/pin.svg" alt="" class="pin">    
                             <img src="${url}" alt="${title}">
                            <div class="card-body">
                                 <p>${title}</p>
                            </div>
                        </div>
                       </div>`

    root.innerHTML += photoCard
                    
    })
}

