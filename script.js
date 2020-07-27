//japan https://unsplash.com/photos/E_eWwM29wfU\
//athens https://unsplash.com/photos/CCLyr_m4emY
//machu pichu https://unsplash.com/photos/2vSNlKHn9h0
//switzerland https://unsplash.com/photos/V7WkmXntA8M
//canada https://unsplash.com/photos/iJTXWlMmoOg

const imageContainer = document.querySelector("img");
const button = document.querySelectorAll("button");
const indicators = document.querySelectorAll(".indicators");

const pictures = [
    "athens",
    "canada",
    "japan",
    "machu_pichu",
    "switzerland"
];

let counter = 0;

function changePicture(event){
    //recognizes if we are pressing forward or backwards and will go to the according function
    let target = event.target;
    target.classList.contains("left") ? goBack() : goForward();

    //we have a new counter value and changes picture
    indicators[counter].classList.add("active");
    imageContainer.src = `./Images/${pictures[counter]}.jpg`
}

function goBack(){
    //before we change the counter, we have to remove the active CSS class;
    indicators[counter].classList.remove("active");

    //goes to previous image
    if (counter >= 1) {
        counter--;
        console.log(counter);
    } 
    else if (counter === 0){
         counter = pictures.length - 1;
        }
    }

function goForward(){
    //before we change the counter, we have to remove the active CSS class;
    indicators[counter].classList.remove("active");
    //goes to next image 
    if (counter < pictures.length - 1) {
        counter++;
        } 
    else if (counter === pictures.length - 1){
        counter = 0;
            }
        }

button.forEach((btn) => btn.addEventListener("click", changePicture));