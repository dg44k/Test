function caesarCipher(shipher, shift) {
    let SHIFT='a'.charCodeAt()-'A'.charCodeAt(); 
    let new_str = '';
   for (let i = 0; i < shipher.length; i++) {
        if(!shipher[i].match(/[a-zA-Z]/g)) {
            new_str+=shipher[i];
            continue;
        }
        let kostil=0;
        if(shipher[i].charCodeAt()>'Z'.charCodeAt())
            kostil=SHIFT;
        new_str += String.fromCharCode((shipher[i].charCodeAt()-kostil + shift - 'A'.charCodeAt()) % 
        ('A'.charCodeAt() - 'Z'.charCodeAt()) + 'A'.charCodeAt()+kostil)
   }
   return new_str;
}

module.exports = caesarCipher;