const imgList = document.querySelector('#img-list');
const paginations = document.querySelector('#paginations');
const previus = document.querySelector('.previus');
const next = document.querySelector('.next');
let slideIndex = 0;

if (urlAvto){
    urlAvto.forEach(slide => {
        console.log(slide)
        renderAvtoSlide(slide)
    })
}

function renderAvtoSlide(url){
    imgList.innerHTML += `
            <img class="img" src="${url}" alt="pic"/>
        `
    ;
    renderPagination();
}

function renderPagination(){
    paginations.innerHTML += `
        <a class="paginations__item"></a>
    `
}

previus.addEventListener('click', () => {
    if (slideIndex > 0){
        slideIndex--;
        updateSlider();
    }
});

next.addEventListener('click', () => {
    if (slideIndex < urlAvto.length -1){
        slideIndex++;
        updateSlider();
    }
});

const paginationsItem = document.querySelectorAll('.paginations__item');

for (let i = 0; i < paginationsItem.length; i++){
    paginationsItem[i].addEventListener('click', () => {
        slideIndex = i;
        updateSlider();
    });
}

function updateSlider(){
    const img = document.querySelectorAll('.img');
 
    img.forEach((slide, index) => {
        if(index === slideIndex){
            slide.style.display = 'block';
            paginationsItem[index].style.border = '4px solid green';
            paginationsItem[index].style.background = 'rgb(146, 228, 146)';
        }else{
            slide.style.display = 'none';
            paginationsItem[index].style.border = '4px solid black';
            paginationsItem[index].style.background = '#fff';
        }
    });
}

updateSlider()