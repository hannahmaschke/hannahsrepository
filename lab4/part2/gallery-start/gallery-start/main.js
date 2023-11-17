const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const alts = 
{'pic1.jpg' : "Closeup image of a blue eye. ",
'pic2.jpg' : "An interesting wave-like rock formation. ",
'pic3.jpg' : "Purple flowers. ",
'pic4.jpg' : "Egyptian hieroglyphs. ",
'pic5.jpg' : "A brown moth on a green leaf. "};

/* Looping through images */
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);;
/* Add a click event listener to each <img> inside the thumb bar (this is supposed to be part of the loop) */
    newImage.addEventlistener('click', e => 
    {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */ /* Add a click event listener to the button */
btn.addEventListener('click', ()  =>
{
    const btnclass = btnclass.getAttribute();
    if (btnclass === "dark")
    {
        btn.setAttribute("class", "light");
        btn.textContent = "lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";

    }else (btnclass === "light")
    { 
        btn.setAttribute("class", "darken")
        btn.textContent = "darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";

    }
    
});