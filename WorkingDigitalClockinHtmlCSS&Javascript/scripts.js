function clock() {
    let hrDots = document.querySelector('.hr-dots');
    let minDots = document.querySelector('.min-dots');
    let secDots = document.querySelector('.sec-dots');

    var date = new Date();
    var hours = date.getHours() % 12; // converte para 12 horas
    var amPm = date.getHours() >= 12 ? 'PM' : 'AM';
    hours = hours === 0 ? 12 : hours; // se for 0, muda para 12
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var hoursDots = dots( hours, 13, 30 );
    var minutesDots = dots( minutes );
    var secondsDots = dots( seconds );
    

    hrDots.innerHTML = `
        <div class="container">
            <div class="number">${addZero(hours)}</div>
            <div class="indicadores">Horas</div>
        </div>

        <div class="dots-wrapper">
            ${hoursDots}
        </div>
    `;
    minDots.innerHTML = `
        <div class="container">
            <div class="number">${addZero(minutes)}</div>
            <div class="indicadores">Minutos</div>
        </div>

        <div class="dots-wrapper">
            ${minutesDots}
        </div>
    `;
    secDots.innerHTML = `
        <div class="container">
            <div class="am-pm">${amPm}</div>
            <div class="number">${addZero(seconds)}</div>
            <div class="indicadores">Segundos</div>
        </div>
        
        <div class="dots-wrapper">
            ${secondsDots}
        </div>
    `;
}

setInterval(clock, 1000);

function addZero(num) {
    return num < 10 ? '0' + num : num;
}

function dots( param, time = 61, step = 6) {
    let dots = '';

    for (let i = 1; i < time; i++) {
        var rotation = i * step; // 6 graus por segundo

        if ( i === param ) {
            dots += `<div class="dot active" style="--rotation: ${rotation}deg"></div>`;
            
        } else {
            dots += `<div class="dot" style="--rotation: ${rotation}deg"></div>`;
        }
    }

    return dots;
}