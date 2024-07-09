
document.addEventListener('DOMContentLoaded', function () {
    const words = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
    let currentWord = "";
    let guessesLeft = 6;
    let guessedLetterSet = new Set();
  
    const form = document.getElementById('guessForm');
    const letterInput = document.getElementById('letterInput');
    const wordToGuess = document.getElementById('wordToGuess');
    const result = document.getElementById('result');
    const guessedLetters = document.getElementById('guessedLetters');
    const guessesLeftElement = document.getElementById('guessesLeft');
  
    setupNewWord();
    form.addEventListener('submit', handleGuess);
    document.getElementById('newWordButton').addEventListener('click', setupNewWord);
  
    function setupNewWord() {
      currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
      guessedLetterSet.clear();
      guessesLeft = 6;
      updateDisplay();
    }
  
    function handleGuess(event) {
      event.preventDefault();
      const guess = letterInput.value.toUpperCase();
  z
      if (guess.length === 1 && /^[A-Z]$/i.test(guess)) {
        if (!guessedLetterSet.has(guess)) {
          guessedLetterSet.add(guess);
          updateGame(guess);
        } else {
          result.textContent = "Ši raidė jau buvo spėta.";
        }
      } else {
        result.textContent = "Įveskite vieną raidę.";
      }
  
      letterInput.value = '';
      letterInput.focus();
    }
  
    function updateDisplay() {
      wordToGuess.textContent = currentWord.split('').map(letter => guessedLetterSet.has(letter) ? letter : '_').join(' ');
      guessedLetters.textContent = Array.from(guessedLetterSet).join(', ');
      guessesLeftElement.textContent = guessesLeft;
    }
  
    function updateGame(guess) {
      let correctGuess = false;
  
      for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === guess) {
          correctGuess = true;
          break;
        }
      }
  
      if (correctGuess) {
        updateDisplay();
        if (!wordToGuess.textContent.includes('_')) {
          result.textContent = "Sveikiname! Atspėjote žodį!";
          form.removeEventListener('submit', handleGuess);
        }
      } else {
        guessesLeft--;
        updateDisplay();
        if (guessesLeft === 0) {
          result.textContent += " Žaidimas baigtas. Žodis buvo: " + currentWord;
          form.removeEventListener('submit', handleGuess);
        } else {
          result.textContent = "Neteisingas spėjimas.";
        }
      }
    }
  });
  































