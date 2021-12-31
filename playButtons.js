let eventCheckBox1 = document.querySelector('.checkbox.frst')
let eventCheckBox2 = document.querySelector('.checkbox.scnd')
let eventCheckBox3 = document.querySelector('.checkbox.thrd')

eventCheckBox1.addEventListener('change', function checkFirst() {
  if (this.checked) {
    document.querySelector('.learning-div').style.visibility = 'visible'
    document.querySelector('#message-home').style.visibility = 'hidden'
    document.querySelector('#game-module').style.visibility = 'hidden'
    document.querySelector('#after_submit').style.visibility = 'hidden'
    document.getElementById('quiz').style.visibility = 'hidden'
    document.getElementById('button').style.visibility = 'hidden'
    document.getElementById('container_hi').style.visibility = 'hidden'
    console.log('eventCheckBox1')
  }
})

eventCheckBox2.addEventListener('change', function checkFirst() {
  if (this.checked) {
    document.querySelector('#game-module').style.visibility = 'visible'
    document.getElementById('quiz').style.visibility = 'visible'
    document.getElementById('button').style.visibility = 'visible'
    document.getElementById('play-mess').style.visibility = 'visible'
    document.querySelector('#message-home').style.visibility = 'hidden'
    document.querySelector('.learning-div').style.visibility = 'hidden'
    document.querySelector('#message').style.visibility = 'hidden'
    document.getElementById('container_hi').style.visibility = 'hidden'
    console.log('eventCheckBox2')
  }
})

eventCheckBox3.addEventListener('change', function checkFirst() {
  if (this.checked) {
    document.getElementById('container_hi').style.visibility = 'visible'
    document.querySelector('#game-module').style.visibility = 'hidden'
    document.getElementById('quiz').style.visibility = 'hidden'
    document.getElementById('button').style.visibility = 'hidden'
    document.getElementById('play-mess').style.visibility = 'hidden'
    document.querySelector('#message-home').style.visibility = 'hidden'
    document.querySelector('.learning-div').style.visibility = 'hidden'
    document.querySelector('#message').style.visibility = 'hidden'
    document.querySelector('#after_submit').style.visibility = 'hidden'
    console.log('eventCheckBox3')
  }
})
