//for buttons
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
        if (button.id !== "radio-button") {
            button.addEventListener("click", clickSound);
        }
    });
});

// // for radio
// document.addEventListener('DOMContentLoaded', function() {
    
//     var radioBtn = document.getElementById("radio-button");
//     radioBtn.addEventListener('click', radioButtonSound)
// });

//for input field
document.addEventListener('DOMContentLoaded', function() {
    var inputField = document.getElementById('q');
    var audio = document.getElementById("type1");

    inputField.addEventListener('input', inputSound)
    // //Enter press
    // inputField.addEventListener('keydown', function(event) {
    //     // Check if the key pressed was the Enter key
    //     if (event.key === "Enter" || event.keyCode === 13) {
    //         setQ()
    //         inputSound()
    //     }
    // });
});
// q.addEventListener('input', inputSound);

function clickSound () {
    var audio = document.getElementById("click1");
    audio.play();
}

function inputSound () {
    var audio = document.getElementById("type1");
    audio.play();
}

function radioButtonSound () {
    var audio = document.getElementById("radioButton");
    audio.play();
}

function encounterSound () {
    var audio = document.getElementById("encounter");
    //delayed start
    setTimeout(function() {
        audio.play();
    }, 1500);
}

function nothingVoice () {
    var audio = document.getElementById("nothing");
    audio.play();
}

function yesVoice () {
    var audio = document.getElementById("yes");
    audio.play();
}

function noVoice () {
    var audio = document.getElementById("no");
    audio.play();
}

function exc_yesVoice () {
    var audio = document.getElementById("exc_yes");
    audio.play();
}

function exc_noVoice () {
    var audio = document.getElementById("exc_no");
    audio.play();
}

function someDetailsVoice () {
    var audio = document.getElementById("someDetails");
    audio.play();
}

//Radios
function playRadio(radio) {
    if (radio == 'Galaxy News Radio' && state == 'on') {
        var audio = document.getElementById("radioGalaxyNews");
        // Set the duration of the audio clip
        var duration = audio.duration;
        // Generate a random start time
        var randomStartTime = Math.random() * duration;
        audio.play();
        audio.currentTime = randomStartTime;
        audio.loop = true;
        // set volume
        audio.volume = 0.2;
        //stop other audios
        document.getElementById("radioNewVegas").pause();
        document.getElementById("radioDiamondCity").pause();
        document.getElementById("radioOther").pause();
    }
    else if (radio == 'Radio New Vegas' && state == 'on') {
        var audio = document.getElementById("radioNewVegas");
        var duration = audio.duration;
        var randomStartTime = Math.random() * duration;
        audio.play();
        audio.currentTime = randomStartTime;
        audio.loop = true;
        // set volume
        audio.volume = 0.2;
        // stop other audios
        document.getElementById("radioGalaxyNews").pause();
        document.getElementById("radioDiamondCity").pause();
        document.getElementById("radioOther").pause();
    }
    else if (radio == 'Diamond City Radio' && state == 'on') {
        var audio = document.getElementById("radioDiamondCity");
        var duration = audio.duration;
        var randomStartTime = Math.random() * duration;
        audio.play();
        audio.currentTime = randomStartTime;
        audio.loop = true;
        // set volume
        audio.volume = 0.2;
        // stop other audios
        document.getElementById("radioGalaxyNews").pause();
        document.getElementById("radioNewVegas").pause();
        document.getElementById("radioOther").pause();
    }
    else if (radio == 'Other Radio' && state == 'on') {
        var audio = document.getElementById("radioOther");
        var duration = audio.duration;
        var randomStartTime = Math.random() * duration;
        audio.play();
        audio.currentTime = randomStartTime;
        audio.loop = true;
        // set volume
        audio.volume = 0.6;
        // stop other audios
        document.getElementById("radioGalaxyNews").pause();
        document.getElementById("radioNewVegas").pause();
        document.getElementById("radioDiamondCity").pause();
    }
}

state = 'off';
function on_off () {
    radioButtonSound();
    if (state == 'off') {
        state = 'on';

        document.getElementById("radioLight").classList.remove("light-off");
        document.getElementById("radioLight").classList.add("light-on");

        try {
            if (selectedRadio == 'Galaxy News Radio') {
                var audio = document.getElementById("radioGalaxyNews");
                audio.play();
                audio.volume = 0.2;
                audio.loop = true;
            }
            else if (selectedRadio == 'Radio New Vegas') {
                var audio = document.getElementById("radioNewVegas");
                audio.play();
                audio.volume = 0.2;
                audio.loop = true;
            }
            else if (selectedRadio == 'Diamond City Radio') {
                var audio = document.getElementById("radioDiamondCity");
                audio.play();
                audio.volume = 0.2;
                audio.loop = true;
            }
            else if (selectedRadio == 'Other Radio') {
                var audio = document.getElementById("radioOther");
                audio.play();
                audio.volume = 0.6;
                audio.loop = true;
            }
            else {''}
        }   
        catch(err) {
            console.log('no radio is set');
        }}

    else if (state == 'on') {
        state = 'off';

        document.getElementById("radioLight").classList.remove("light-on");
        document.getElementById("radioLight").classList.add("light-off");

        document.getElementById('radioGalaxyNews').pause();
        document.getElementById("radioNewVegas").pause();
        document.getElementById("radioDiamondCity").pause();
        document.getElementById("radioOther").pause();
    }

}

function silence() {
    document.getElementById('noise').play();

    if (selectedCF !='') {
        document.getElementById('answer').innerHTML = `.... `;
        document.getElementById('event').innerHTML = ` `;
        openDropdown('scene-selection');
    }
    else {

        document.getElementById('answer').innerHTML = `.... **set Chaos Factor first**`;
        document.getElementById('event').innerHTML = ` `;
        
    };
    }