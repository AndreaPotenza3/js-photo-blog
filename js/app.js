const baseUrl = 'https://jsonplaceholder.typicode.com/'
let urlBody = 'photos'
const post = document.querySelector('.row')

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
        console.log(photos)

        getPhotos(photos, post)

        // 
    })
    .catch((err) => {
        console.log(err)
    })
    

function getPhotos(photos, root) {
    console.log(photos, root)

    photos.forEach((photo) => {

    const {title, url} = photo
    console.log(title, url)

    const photoCard = `<div class="col-3">
                         <img src="./img/pin.svg" alt="" class="pin">
                         <div class="card">    
                             <img src="${url}" alt="${title}">
                            <div class="card-body">
                                 <p>${title}</p>
                             </div>
                        </div>
                     </div>`

    root.innerHTML += photoCard
                    
    })
}