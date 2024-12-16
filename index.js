
/*****************1.concat name******************/ 

function btn1Click() {

    lbl1.innerHTML = txt1.value + " "+ txt2.value +" "+ txt3.value;
    
}

/*************2.calculator******************/ 

function btn2Click() {

    lbl2.innerHTML = parseInt(txt4.value) +  parseInt(txt5.value) ;
    
}
function btn3Click() {

    lbl2.innerHTML = txt4.value - txt5.value ;
    
}
function btn4Click() {

    lbl2.innerHTML = txt4.value *  txt5.value ;
    
}
function btn5Click() {

    lbl2.innerHTML = txt4.value /  txt5.value ;
    
}

/*************3.Date-drop-down******************/ 

function btn6Click() {

    lbl3.innerHTML = drop1.value +"/"+ drop2.value +"/"+ drop3.value ;
    
}

/*************4.single mcq******************/ 

function btn7Click() {

    if (rdo1.checked == true) {
        lbl4.innerHTML = "You Have Selected wrong answer.";
        document.getElementById("lbl4").style.color = "red";
      }
       else if (rdo2.checked == true) {
        lbl4.innerHTML = "You Have Selected right answer.";
        document.getElementById("lbl4").style.color = "green";      
      }
      else if (rdo3.checked == true) {
        lbl4.innerHTML = "You Have Selected wrong answer.";
        document.getElementById("lbl4").style.color = "red";      
      }
      else if (rdo4.checked == true) {
        lbl4.innerHTML = "You Have Selected wrong answer.";
        document.getElementById("lbl4").style.color = "red";      
      }
       else {
        lbl4.innerHTML = "Please Select Any Option";
        document.getElementById("lbl4").style.color = "orangered";       
      }  
    
}

 /*************5.marksheet******************/ 

 function btn8Click() {

    lbl5.innerHTML = parseInt(txt6.value) + parseInt(txt7.value) + parseInt(txt8.value) + parseInt(txt9.value);


    
 }

  /*************6.Online Exam******************/ 


function btn9Click() {

  var wrong=0;
  var right=0;
  var skip=0;
  var attend=0;
  var totalmarks=0;
  var unattend =0;

  /*Q-1*/ 
  if (rdo5.checked == true ) {
    wrong++;
    Attend++;  
 
  }
  else if (rdo6.checked == true) {
    wrong++
    attend++;  
    
  }
  else if (rdo7.checked == true) {
    right++;
    attend++;  
    
  }
  else if (rdo8.checked == true) {
    wrong++;
    attend++;
  }
  else{
    skip++

  }

   /*Q-2*/ 
   if (rdo9.checked == true ) {
    wrong++;
    attend++;  
 
  }
  else if (rdo10.checked == true) {
    right++
    attend++;  
    
  }
  else if (rdo11.checked == true) {
    wrong++;
    attend++;  
    
  }
  else if (rdo12.checked == true) {
    wrong++;
    attend++;
  }
  else{
    skip++

  }
 
  /*Q-3*/ 
  if (rdo13.checked == true ) {
    right++;
    Attend++;  
 
  }
  else if (rdo14.checked == true) {
    wrong++
    attend++;  
    
  }
  else if (rdo15.checked == true) {
    wrong++;
    attend++;  
    
  }
  else if (rdo16.checked == true) {
    wrong++;
    attend++;
  }
  else{
    skip++

  }

  /*Q-4*/ 
  if (rdo17.checked == true ) {
    wrong++;
    attend++;  
 
  }
  else if (rdo18.checked == true) {
    right++
    attend++;  
    
  }
  else if (rdo19.checked == true) {
    wrong++;
    attend++;  
    
  }
  else if (rdo20.checked == true) {
    wrong++;
    attend++;
  }
  else{
    skip++

  }

  /*Q-5*/ 
  if (rdo21.checked == true ) {
    right++;
    attend++;  
 
  }
  else if (rdo22.checked == true) {
    wrong++
    attend++;  
    
  }
  else if (rdo23.checked == true) {
    wrong++;
    attend++;  
    
  }
  else if (rdo24.checked == true) {
    wrong++;
    attend++;
  }
  else{
    skip++

  }

  /*print label*/ 

  lbl8.innerHTML = attend++;
  lbl9.innerHTML = unattend++;
  lbl10.innerHTML= wrong++;
  lbl11.innerHTML= right;

   /*totalmarks*/ 

  totalmarks= right*2;
  lbl12.innerHTML = totalmarks;
 
}

 /*************7.online-shopping*****************/ 

 function btn10Click() {

  var result = txt12.value * txt13.value;

  lbl13.innerHTML = result;

  if (result >= 1000) {

    var discountresult = result*10/100;

    lbl14.innerHTML = discountresult;

    var discountamount = result-discountresult;
    lbl15.innerHTML = discountamount;

    lbl16.innerHTML = "thanks {0} of shipping{1}",txt10,txt11;
    
  }

  if (result >= 500) {

    var discountresult = result*5/100;

    lbl14.innerHTML = discountresult;

    var discountamount = result-discountresult;
    lbl15.innerHTML = discountamount;

    lbl16.innerHTML = "thanks {0} of shipping{1}",txt10,txt11;
    
  }

  if (result < 500) {

    var discountresult = result*2/100;

    lbl14.innerHTML = discountresult;

    var discountamount = result-discountresult;
    lbl15.innerHTML = discountamount;

    lbl16.innerHTML = "thanks {0} of shipping{1}",txt10,txt11;
    
  }

  
 }

 
 /*************8.*****************/ 




   
    






  





  



