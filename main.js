const header = document.getElementById('header');
const title = document.getElementById('title');
const profile_img = document.getElementById('profile__img');
const excerpt = document.getElementById('excerpt');
const pro_Name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_Text_bgs = document.querySelectorAll('.animated-text-bg');

setTimeout(getData, 2000)

function getData(){
    header.innerHTML = `<img src="/Project-6.jpg" alt="">`
    title.innerHTML = `Content placeholder design`
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur deserunt facilis ipsam facere
    necessitatibus.`
    profile_img.innerHTML = `<img src="/vishal.jpg" alt="">`
    pro_Name.innerHTML = `Vishal Jr`
    date.innerHTML = `Aug 18, 1994`

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_Text_bgs.forEach(text_bg => text_bg.classList.remove('animated-text-bg'));
}