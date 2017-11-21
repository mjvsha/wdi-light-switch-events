

// When someone hits the button in the switch, remove the current state class (on/off), and apply the opposite class (on/off)
document.addEventListener('DOMContentLoaded', function(){
  window.alert('Document has loaded!')
})

//Add a click listener to the switch
// incorporate the changes listed above in 'Your Assignment'

var clickButton = document.querySelector('.switch');
var body = document.querySelector('body')
var textBox = document.querySelector('h1.status')


clickButton.addEventListener('click', function() {

    if (clickButton.className === 'switch on') {

        clickButton.className = 'switch off';
        body.className = "dark";
        textBox.innerText = "Who turned off the lights?"

    }
    else {
      clickButton.className = 'switch on';
      body.className = "light";
      textBox.innerText = 'It\'s so bright in here!';
    }


})
