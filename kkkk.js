
 const listImages = document.querySelectorAll('.list-images')
 const imgs = document.getElementsByTagName('img')
 const btnLeft = document.querySelectorAll('.btn-left')
 const btnRight = document.querySelectorAll('.btn-right')
 const length = imgs.length
let current = 0

const handleChangeSlide = () => {
    if (current == length - 1) {
        current = 0
        let width = imgs[0].offsetWidth
        listImages.style.transform = `translateX(0px)` 
        document.querySelector('.active').classList.remove('active')
        document.querySelector('index-item-'+ current).classList.add('active')


    } else {

    current ++
    let width = imgs[0].offsetWidth
    listImages.style.transform = `translateX(${width * -1 * current}px)`
    document.querySelector('.active').classList.remove('active')
    document.querySelector('index-item-'+ current).classList.add('active')  
}
}
let handleEventChangeSlide = setInterval(handleChangeSlide, 4000)

btnRight.addEventListenner('click', () => {
    clearInterval(handleChangeSlide)
    handleChangeSlide()
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000)

})
btnLeft.addEventListener('click', () => {
    if (current == 0) {
        current = length - 1;
        let width = imgs[0].offsetWidth;
        listImages.style.transform = `translateX(${width * -1 * current}px)`;
        document.querySelector('.active').classList.remove('active');
        document.querySelector('index-item-'+ current).classList.add('active');
    } else {
        current--;
        let width = imgs[0].offsetWidth;
        listImages.style.transform = `translateX(${width * -1 * current}px)`;
    }
});


