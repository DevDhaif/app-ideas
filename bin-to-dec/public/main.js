/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-alert */
// eslint-disable-next-line no-unused-vars
function convert() {
    const binary = document.getElementById('binary').value;
    if (binary === '') return alert('thats not a binary number dude');
    binary.split('').map((char) => {
        if (char !== '0' && char !== '1') return alert('empty or nonrsence');
    });
    
    const decimal = parseInt(binary, 2);
    document.getElementById('dec').value = decimal;
    return true;
}
