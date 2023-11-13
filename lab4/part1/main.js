1. //COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// Variables
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() 
{
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    let newStory = storyText;

    newStory = newStory.replace(':insertX:', xItem);
    newStory = newStory.replace(':insertY:', yItem);
    newStory = newStory.replace(':insertZ:', zItem);

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION





  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

}
// formula for converting lbs to stone: pounds * 0.0714286
// formula for converting fahrenheit to celcius : C = 5/9(F-32)
  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286) + "stone"}`;
    const temperature =  `${Math.round(5/9(94-32)) + "centigrade"}`;
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}