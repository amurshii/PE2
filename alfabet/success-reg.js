import library from './alfabet.js';
 
const STEP_DELAY = 20; // мс між двома «кроками» перебору
 
export default class SuccessReg {
    constructor() {
        this.popup = document.querySelector('.pop-up');
        this.closeButton = document.querySelector('.close-button'); // хрестик ×
        this.close = document.querySelector('.close');              // кнопка Close
        this.userName = document.querySelector('.user-name');       // поле з іменем
        this.timer = null;
 
        this.hide();
        this.closeButton.addEventListener('click', () => this.hide());
        this.close.addEventListener('click', () => this.hide());
    }
 
    show() {
        this.popup.classList.remove('hidden');
    }
 
    hide() {
        this.stop();
        this.popup.classList.add('hidden');
    }
 
    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }
   
    findAlphabet(letter) {
        const found = Object.values(library).find((lang) => lang.alphabet.includes(letter));
        if (!found) return null;
 
        const isUpper = letter === letter.toUpperCase();
        return found.alphabet.filter((item) => (item === item.toUpperCase()) === isUpper);
    }

    writeName(name) {
        this.stop();
        this.userName.textContent = '';
        this.show();
 
        const target = [...name.trim()]; 
        let done = '';                   
        let position = 0;                
        let cursor = 0;                  
        let alphabet = this.findAlphabet(target[0]);
 
        const fix = (letter) => {
            done += letter;
            this.userName.textContent = done;
            position++;
            cursor = 0;
            alphabet = this.findAlphabet(target[position]);
        };
 
        this.timer = setInterval(() => {
            if (position >= target.length) {
                this.stop();
                return;
            }
 
            const letter = target[position];
 
            if (!alphabet) {                  
                fix(letter);
            } else if (alphabet[cursor] === letter) {
                fix(letter);                  
            } else {
                this.userName.textContent = done + alphabet[cursor];
                cursor++;
            }
        }, STEP_DELAY);
    }
}
