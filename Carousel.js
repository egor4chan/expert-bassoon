var photoId = 1

function set_blur() {
    document.getElementById('photo').style.filter = 'blur(4px)';
    setTimeout(() => {
        document.getElementById('photo').style.filter = 'blur(0px)';
    }, 100);
}

document.getElementById('next').addEventListener('click', () => {
    set_blur()
    if (photoId < 4)
    photoId += 1;
    else 
    photoId = 1;
    setTimeout(() => {
        document.getElementById('photo').setAttribute('src', `img/${photoId}.jpg`)
    }, 100);
    
})

document.getElementById('back').addEventListener('click', () => {
    set_blur()
    if (photoId > 1)
    photoId -= 1;
    else 
    photoId = 4
    setTimeout(() => {
        document.getElementById('photo').setAttribute('src', `img/${photoId}.jpg`)
    }, 100);
})

document.getElementById('trailer').addEventListener('click', () => {
        window.scrollBy(0, 600)
});