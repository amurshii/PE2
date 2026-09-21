// Бібліотека алфавітів: рядки малих літер розгортаються в масив «малі + великі»
const build = (letters) => [...letters, ...letters.toUpperCase()];
 
const library = {
    en: {
        name: 'English',
        script: 'Latin',
        alphabet: build('abcdefghijklmnopqrstuvwxyz'),
    },
    uk: {
        name: 'Ukrainian',
        script: 'Cyrillic',
        alphabet: build('абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'),
    },
};
 
export default library;
