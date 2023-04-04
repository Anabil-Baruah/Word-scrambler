const msg = document.querySelector('.msg');
const guess = document.querySelector('input');;
const btn = document.querySelector('.btn');
let play = false;
let words = ['python', 'javascript', 'typescript', 'ruby', 'go', 'mern', 'mean'];
let newWords = "";
let randomWords = "";

btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords()
        randomWords = scramble(newWords.split('')).join("");
        //console.log(randomWords.join(""));
        msg.innerHTML = `Gusee the word : <b> ${randomWords} </b>`;
    }
    else {
        let tempWord = guess.value;
        if (tempWord === newWords) { //console.log('correct');
            play = false
            msg.innerHTML = `Awesome its correct , Its : ${newWords}`;
            btn.innerHTML = `Start again`;
            guess.classList.toggle('hidden');
            guess.value = "";
        }
        else {
            msg.innerHTML = `Sorry its incorrect. Plz try again : ${randomWords}`;
        }
    }
})
const createNewWords = () => {
    let randNum = Math.floor(Math.random() * words.length)
    let newTempWords = words[randNum];
    return newTempWords;
}

const scramble = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        //console.log(temp)
        let j = Math.floor(Math.random() * (i + 1));

        arr[i] = arr[j];
        arr[j] = temp
    }
    return arr
}