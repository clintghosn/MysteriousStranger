var selectedOdd = '';
var selectedCF = '';
var selectedQ = '';

function openDropdown(id) {
    var element = document.getElementById(id);
    element.style.display = 'block';
    document.getElementById('main').style.display = 'none';

    if (id == 'q-selection') {
        document.getElementById('q').focus();
    }
}

function setOdd(odd) {
    selectedOdd = odd;
    var element = document.getElementById('odd-selection');
    element.style.display = 'none';
    document.getElementById('main').style.display = 'block';
    document.getElementById('selected-odd').innerHTML = '('+ selectedOdd +')';
}

function setCF(cf) {
    selectedCF = cf;
    var element = document.getElementById('cf-selection');
    element.style.display = 'none';
    document.getElementById('main').style.display = 'block';
    document.getElementById('selected-cf').innerHTML = '('+ selectedCF +')';
}

function setRadio(radio) {
    selectedRadio = radio;
    var element = document.getElementById('radio-selection');
    element.style.display = 'none';
    document.getElementById('main').style.display = 'block';
    document.getElementById('selected-radio').innerHTML = '('+ selectedRadio +')';
    playRadio(radio);
}

function setQ_yn() {
    selectedQ = document.getElementById('q').value;
    document.getElementById('q').value ='';
    var element = document.getElementById('q-selection');
    element.style.display = 'none';
    document.getElementById('main').style.display = 'block';
    document.getElementById('selected-q').innerHTML = `(${selectedQ}) > (Yes/No)`;
}

function setQ_desc() {
    selectedQ = document.getElementById('q').value;
    document.getElementById('q').value ='';
    var element = document.getElementById('q-selection');
    element.style.display = 'none';
    document.getElementById('main').style.display = 'block';
    document.getElementById('selected-q').innerHTML = `(${selectedQ}) > (Descr.)`;
}

function Exit() {
    // Add animation here before closing the window
    // Add CSS transition for fade-out effect
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = '0';
    setTimeout(function() {
        window.close();
    }, 1200); // Adjust the duration of the animation as needed
}