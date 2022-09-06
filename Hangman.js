

/* .then(response => {
    console.log("Response", response)
  })
  // .then(data => console.log(data))
  .catch(err => console.error(err)); */

var randomWordNum = 0
var randomWord = ''
var remainingletter = 0

function loading() {
    document.getElementById('load').innerHTML = "Loading...";
}

var fetchWord = async () => {
    var response = await fetch("https://random-word-api.herokuapp.com/all")
    var word = await response.json();

    randomWordNum = Math.floor(Math.random() * word.length);
    randomWord = word[randomWordNum];


    remainingletter = randomWord.length;

    console.log(randomWord);

    generateunderscore();

    document.getElementById('letter').innerHTML = '<h4>Enter a Letter</h4>';

}

fetchWord();

var lives = 6;

document.getElementById('lives').innerHTML = lives;

var underscore = [];
var underscore1;

function generateunderscore() {
    document.getElementById('hangman').src = '1.jpg';
    for (var i = 0; i < randomWord.length; i++) {
        underscore[i] = "_";
    }
    underscore1 = underscore.join(" ");
    document.getElementById('showletter').innerHTML = underscore1;
}


function Search() {

    var search = document.getElementById("search").value.toLowerCase();
    var wordPresent = false;
    if (search.length < 1) {
        document.getElementById('letter').style.display = '';
        document.getElementById('singleLetter').style.display = 'none';
        document.getElementById('wrong').style.display = 'none';
    }
    else if (search.length > 1) {
        document.getElementById('singleLetter').style.display = '';
        document.getElementById('letter').style.display = 'none';
        document.getElementById('wrong').style.display = 'none';
    }
    else {

        for (var i = 0; i < randomWord.length; i++) {

            if (randomWord[i] === search && underscore[i] !== search) {


                underscore[i] = search;
                console.log(randomWord[i]);
                console.log(underscore)
                remainingletter--;
                wordPresent = true;
                document.getElementById('letter').style.display = 'none';
                document.getElementById('singleLetter').style.display = 'none';
                document.getElementById('wrong').style.display = 'none';
            }



        }

        if (!wordPresent) {
            lives--;
            console.log(lives);
            document.getElementById('lives').innerHTML = lives;
            document.getElementById('wrong').style.display = '';
            document.getElementById('letter').style.display = 'none';
            document.getElementById('singleLetter').style.display = 'none';

        }
        document.getElementById("showletter").innerHTML = underscore.join(" ");
    }


    if (remainingletter === 0) {
        document.getElementById('win').innerHTML = '<h4>You Win!!</h4>';
        document.getElementById('over').innerHTML = '<h4>Game Over!!</h4>';
        document.getElementById('hide').style.display = 'none';
        document.getElementById('play').style.display = '';
        document.getElementById('hangman').style.display = 'none';
        document.getElementById('letter').style.display = 'none';
        document.getElementById('singleLetter').style.display = 'none';
    }
    if (lives === 5) {
        document.getElementById('hangman').src = '2.jpg';
    }
    else if (lives === 4) {
        document.getElementById('hangman').src = '3.jpg';
    }
    else if (lives === 3) {
        document.getElementById('hangman').src = '4.jpg';
    }
    else if (lives === 2) {
        document.getElementById('hangman').src = '5.jpg';
    }
    else if (lives === 1) {
        document.getElementById('hangman').src = '6.jpg';
    }
    if (lives === 0) {

        document.getElementById('hangman').src = '7.jpg';
        document.getElementById('lose').innerHTML = '<h4>You Lose!!</h4>';
        document.getElementById('over').innerHTML = '<h4>Game Over!!</h4>';
        document.getElementById('hide').style.display = 'none';
        document.getElementById('play').style.display = '';
        document.getElementById('wrong').style.display = 'none';
        document.getElementById('letter').style.display = 'none';
        document.getElementById('singleLetter').style.display = 'none';

    }

}

document.getElementById('play').style.display = 'none';
document.getElementById('singleLetter').style.display = 'none';
document.getElementById('wrong').style.display = 'none';

function play() {
    window.location.reload();
}




