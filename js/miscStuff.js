//Carousel
const buttonPrev = document.querySelector('#prev')
const buttonNext = document.querySelector('#next')

const urls = [
    /*
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    */
    '../img/uma/tanuki/Rudolf+TeioDance.gif',
    '../img/uma/tanuki/Rudolf1.gif',
    '../img/uma/tanuki/RudolfCam.gif'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}
showImages()

function caroTimer(num) {
    if(num === 1){
        setInterval(() => {
            currentImage--;
            showImages()
        }, 5000);
    }
}

buttonNext.addEventListener('click', () => {
    currentImage--;
    showImages()
})

buttonPrev.addEventListener('click', () => {
    currentImage++;
    showImages()
})

caroTimer(1)
