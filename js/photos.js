const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelector('#photo-gallery');

images.addEventListener('click', e => {
    // if statement checks to see if an area of the photo gallery that is not an image was clicked
    // if so, the lightbox does not appear.
    if (e.path[0].src != null) {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        img.src = e.path[0].src
        lightbox.appendChild(img);
    }

});


lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active');
});