const particle = new Particle();
let token;

let breaker1 = document.getElementById('Breaker1');
const img = document.querySelector('.img');

breaker1.addEventListener('input', function() {
    if (breaker1.value == "1") {
        breaker1.classList.add('active');
        img.classList.add('on');
    } else {
        breaker1.classList.remove('active');
        img.classList.remove('on');
    }
});

particle.login({username: 'hectorjesus029@gmail.com', password: 'PAR2002hector'}).then(
    function(data) {
        token = data.body.access_token;
    },
    function (err) {
        console.log("Could not log in.", err);
    }
);

breaker1.oninput = function() {
    let output = document.getElementById('state1');
    output.innerHTML = this.value;
    let Salida1 = this.value;
    particle.callFunction({ deviceId: '0a10aced202194944a058b28', name: 'led', argument: Salida1, auth: token, });
}
