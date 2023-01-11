




const allElements = document.querySelector('.gallery').querySelectorAll('div');

// console.log(allElements);


function clickImage() {
    allElements.forEach(element => {
        element.addEventListener('click', function() {


            if (element.innerHTML.includes('img class="pongImg1"')) {
                // console log if the clicked element contains img class="pongImg1"
                console.log('pongImg1 is clicked');
            }

            // if gallery 

            // if gallery index[0] or index[1 is click, do nothing
            if (element.parentElement.firstElementChild === element || element.parentElement.firstElementChild.nextElementSibling === element) {
                // do nothing
            }
            // if gallery index[2] is click, move index[2] to index[1] and index[1] to index[3]
            else if (element.parentElement.firstElementChild.nextElementSibling.nextElementSibling === element) {
                element.parentElement.insertBefore(element, element.parentElement.firstElementChild);
                // element.parentElement.insertBefore(element.parentElement.firstElementChild.nextElementSibling, element.parentElement.lastElementChild);
            }



        })
    });
}