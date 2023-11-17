const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
pic1.alt = "Closeup image of a blue eye. "
pic2.alt = "An interesting wave-like rock formation. "
pic3.alt = "Purple flowers. "
pic4.alt = "Egyptian hieroglyphs. "
pic5.alt = "A brown moth on a green leaf. "

/* Looping through images */
for (const image of images) {
    const image = document.createElement('img');
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
btn.addEventListener('click', e =>
{
    const btnclass = btnclass.getAttribute();
})