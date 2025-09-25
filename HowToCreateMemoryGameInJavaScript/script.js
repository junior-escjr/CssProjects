const emojis = ['😊','😊','😂','😂','🤣','🤣','❤️','❤️','😍','😍','😒','😒','👌','👌','😘','😘'];

var shuf_emoji = emojis.sort(() => Math.random() > .5 ? 2 : -1);

for ( var i = 0; i < shuf_emoji.length; i++ ) {
    let box = document.createElement('span');
    box.className = 'item';
    box.innerHTML = shuf_emoji[i];

    box.onclick = function() {
        this.classList.toggle('box-open');

        setTimeout(() => {
            if ( document.querySelectorAll('.box-open').length > 1 ) {
                if (document.querySelectorAll('.box-open')[0].innerHTML == document.querySelectorAll('.box-open')[1].innerHTML) {
                    document.querySelectorAll('.box-open')[0].classList.add('box-match');
                    document.querySelectorAll('.box-open')[1].classList.add('box-match');

                    document.querySelectorAll('.box-open')[1].classList.remove('box-open');
                    document.querySelectorAll('.box-open')[0].classList.remove('box-open');

                    if ( document.querySelectorAll('.box-match').length == emojis.length ) {
                        setTimeout(() => {
                            alert('Parabéns! Você ganhou!');
                        }, 500);
                    }

                } else {
                    document.querySelectorAll('.box-open')[1].classList.remove('box-open');
                    document.querySelectorAll('.box-open')[0].classList.remove('box-open');
                }
            }
        }, 500);
    }
    document.querySelector('.game').appendChild(box);
}