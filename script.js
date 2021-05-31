
iterator=0;
seconds=0;
minute=0;
word=0;

String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index+1,this.length);}


function func() {
	key = event.key;
	code = event.keyCode;
	var audioAlert = new Audio("Cave6.mp3");

		if (document.querySelector(".txt").innerHTML[iterator] == key) {
		document.querySelector(".txt").innerHTML=document.querySelector(".txt").innerHTML.replaceAt(iterator,"<span class='passed'>"+key+"</span>");
		document.querySelector(".copyText").value=document.querySelector(".copyText").value + key;
		
		iterator+=29;
		word++;
	} else
	{
		audioAlert.play();
	}

   if (iterator==18618) {
   	window.clearInterval(window.timerId);
   	alert('Поздравляем! Ваша скорость печати '+speed+' символов в минуту.') 
   }
}

function func1() {
	document.getElementById('test1').outerHTML = '<input type="text" class="copyText" id("test1") onkeypress="func()" onblur="this.focus()" autofocus readonly>';
	document.getElementById('button').outerHTML = '<button onclick="location.reload()">Заново</button>';
	window.timerId = window.setInterval(timer, 1000);
}

function timer() {
	seconds++;
	   	  minute= seconds/60;
      speed = word/minute;
   	   document.querySelector(".speed").innerHTML = speed.toFixed(0);

   	   if (speed>=5 || speed==0) {
   	   	document.querySelector(".time").innerHTML = "символов в минуту";
   	  }else if (speed<5 && speed>1){
   	  	document.querySelector(".time").innerHTML = "символа в минуту";
   	  }else {
   	  	document.querySelector(".time").innerHTML = "символ в минуту";
   	  }
   
	if (document.querySelector(".timer2").innerHTML < 59) {
		document.querySelector(".timer2").innerHTML = parseInt(document.querySelector(".timer2").innerHTML)+1;
	}
		else {document.querySelector(".timer1").innerHTML = parseInt(document.querySelector(".timer1").innerHTML)+1;
			document.querySelector(".timer2").innerHTML = 0;

}

  if (document.querySelector(".timer2").innerHTML < 10) {
   	document.querySelector(".timer2").innerHTML = "0" + document.querySelector(".timer2").innerHTML;
   }
   if (document.querySelector(".timer1").innerHTML < 10) {
   	document.querySelector(".timer1").innerHTML = parseInt(document.querySelector(".timer1").innerHTML);
   		document.querySelector(".timer1").innerHTML = "0"+document.querySelector(".timer1").innerHTML;
}
}


