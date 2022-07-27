window.onload = function () {
  var seconds = 0;
  var tens = 0;
  var minutes = 0;
  var hours = 0;
  var domTime = document.getElementById('time')
  var domSeconds = document.getElementById("seconds");
  var domTens = document.getElementById("tens");
  var domMins = document.getElementById('mins')
  var startButton = document.getElementById('start');
  var interval ;

  startButton.onclick = function start() {

    if(startButton.id == "stop"){
      clearInterval(interval);
      startButton.setAttribute('id', 'start')
      startButton.innerHTML = "start"
    }else {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);

    startButton.setAttribute('id', 'stop');
    startButton.innerHTML = "stop";
    console.log(startButton.id)
    }
  }




  function startTimer () {
    tens++;

    if (tens <=9){
      domTens.innerHTML = "0" + tens;
    }

    if (tens >9){
      domTens.innerHTML = tens;
    }

    if (tens > 99){
      seconds++;
      domSeconds.innerHTML = "0" + seconds;
      tens = 0;
      domTens.innerHTML = "0" + tens;
    }

    if (seconds > 9){
      domSeconds.innerHTML = seconds;
    }

    if (seconds > 59){
      minutes++;
      if (minutes == 1){
        createMins = document.createElement('span');
    
        createMins.setAttribute("id", "mins");
        // createMins.innerHTML = "0" + minutes + ":";
        // console.log(domMins)
        domTime.insertBefore(createMins, domSeconds);

        domMins = createMins;
      }
      console.log(domMins)
      seconds = 0;
      domSeconds.innerHTML = "0" + seconds;
      domMins.innerHTML = "0" + minutes + ":";


    }
  }
}