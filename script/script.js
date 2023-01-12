
// add class navbarDark on navbar scroll
const header = document.querySelector('.navbarScroll');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarScroll');
    }
    else {
        header.classList.remove('navbarScroll');
    }
}







// add event listener for cards
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const card6 = document.getElementById('card6');

card1.addEventListener('click', function() {
    var card = document.getElementById('card1');

    // send card to foreground
    card.style.zIndex = '1';

    // transition speed
    card.style.transition = 'transform .75s ease-in-out';

    card.style.backgroundColor = 'white';

    // translate card to middle of screen
    card.style.transform = 'translate(105%, -50%)';

    // redirect to href=tictactoe.html after .5 seconds
    setTimeout(function() {
        window.location.href = 'tictactoe.html';
    }, 750);
});

card2.addEventListener('click', function() {
    var card = document.getElementById('card2');

    // send card to foreground
    card.style.zIndex = '1';

    // transition speed
    card.style.transition = 'transform .75s ease-in-out';

    card.style.backgroundColor = 'white';

    // translate card to middle of screen
    card.style.transform = 'translate(0%, -50%)';

    // redirect to href="pong.html after .5 seconds
    setTimeout(function() {
        window.location.href = 'pong.html';
    }, 750);
});

card3.addEventListener('click', function() {
    var card = document.getElementById('card3');

    // transition speed
    card.style.transition = 'transform .75s ease-in-out';

    card.style.backgroundColor = 'white';
    
    // translate card to middle of screen
    card.style.transform = 'translate(-106%, -50%)';

    // redirect to href=CircleRacing.html after .5 seconds
    setTimeout(function() {
        window.location.href = 'CircleRacing.html';
    }, 750);
    
});

card4.addEventListener('click', function() {
    var card = document.getElementById('card4');

    // send card to foreground
    card.style.zIndex = '1';

    // transition speed
    card.style.transition = 'transform .75s ease-in-out';

    card.style.backgroundColor = 'white';

    // translate card to middle of screen
    card.style.transform = 'translate(106%, -160%)';

    // redirect to href=tictactoe.html after .5 seconds
    setTimeout(function() {
        // window.location.href = 'tictactoe.html';
    }, 750);
});

card5.addEventListener('click', function() {
    var card = document.getElementById('card5');

    // send card to foreground
    card.style.zIndex = '1';

    // transition speed
    card.style.transition = 'transform .75s ease-in-out';

    card.style.backgroundColor = 'white';

    // translate card to middle of screen
    card.style.transform = 'translate(0, -160%)';

    // redirect to href=tictactoe.html after .5 seconds
    setTimeout(function() {
        // window.location.href = 'tictactoe.html';
    }, 750);
});

card6.addEventListener('click', function() {
    var card = document.getElementById('card6');

    // send card to foreground
    card.style.zIndex = '1';

    // transition speed
    card.style.transition = 'transform .75s ease-in-out';

    card.style.backgroundColor = 'white';

    // transition speed
    card.style.transition = 'transform 1s ease-in-out';

    // translate card to middle of screen
    card.style.transform = 'translate(-106%, -160%)';

    // redirect to href=tictactoe.html after .5 seconds
    setTimeout(function() {
        // window.location.href = 'tictactoe.html';
    }, 750);
});