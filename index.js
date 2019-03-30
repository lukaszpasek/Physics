
function tablica_dwuwymiarowa(liczba_wierszy) {
  var tab = new Array(liczba_wierszy);
  for (var i = 0; i < liczba_wierszy; i++) {
    tab[i] = [];
  }
 
  return tab;
}



var odp = tablica_dwuwymiarowa(64);


function zmien(zadanie,numer)
{
   
     odp[zadanie][0]=false;
	 odp[zadanie][1]=false;
     odp[zadanie][2]=false;                                 
	 odp[zadanie][3]=false;

	 div1 = document.getElementById("odpa"+zadanie);
	 div2 = document.getElementById("odpb"+zadanie);
	 div3 = document.getElementById("odpc"+zadanie);
	 div4 = document.getElementById("odpd"+zadanie);
	 with (div1.style) { backgroundColor = '#26282E';}
	 with (div2.style) { backgroundColor = '#26282E';}
	 with (div3.style) { backgroundColor = '#26282E';}
	 with (div4.style) { backgroundColor = '#26282E';}
	
	
odp[zadanie][numer]=true;

var div;
if(numer==0)
{   div = document.getElementById("odpa"+zadanie);
   
}
else if(numer==1)
{
	  div = document.getElementById("odpb"+zadanie);
}
else if(numer==2)
{
	div = document.getElementById("odpc"+zadanie);
	
}
else if(numer==3)
{
	 div = document.getElementById("odpd"+zadanie);
	
}
 
     with (div.style) {
		 if(odp[zadanie][numer]==true)
		 {
       backgroundColor = '#4B91D1';
			
		 }
		 else 
		 {
			 
			  backgroundColor = '#26282E';
			  odp[zadanie][numer]=false;
		 }

     
	 }

	
	

}


		function sprawdzegzamin(test)
{
	
	var punkty=0;
	var div;
	if(odp[2][1]==true)
	{
		punkty++;
		
	}
		else if(odp[2][1]==undefined)
	{
	$('#rezultat2').css('display','block');

		
	}
	
	if(odp[3][3]==true)
	{
		punkty++;

	}
		else if(odp[3][3]==undefined)
	{
	$('#rezultat3').css('display','block');

		
	}

	if(odp[4][2]==true)
	{
		punkty++;
	
	}
		else if(odp[4][1]==undefined)
	{
	$('#rezultat4').css('display','block');

		
	}
	if(odp[5][0]==true)
	{
		punkty++;
	
	}
		else if(odp[5][1]==undefined)
			$('#rezultat5').css('display','block');

	{
		
		
	}
	if(odp[6][2]==true)
	{
		punkty++;
	
	}
		else if(odp[6][1]==undefined)
			$('#rezultat6').css('display','block');

	{

		
	}
	if(odp[7][1]==true)
	{
		punkty++;
	
	}
		else if(odp[7][1]==undefined)
	{
		$('#rezultat7').css('display','block');

		
	}
	if(odp[8][1]==true)
	{
		punkty++;
	
	}
		else if(odp[8][1]==undefined)
	{
		$('#rezultat8').css('display','block');

		
	}
	if(odp[9][2]==true)
	{
		punkty++;
	
	}
		else if(odp[9][1]==undefined)
	{
	$('#rezultat9').css('display','block');

		
	}
	if(odp[10][1]==true)
	{
		punkty++;
		
	}
		else if(odp[10][1]==undefined)
	{
		$('#rezultat10').css('display','block');

		
	}
	if(odp[11][0]==true)
	{
		punkty++;
		
	}
		else if(odp[11][0]==undefined)
	{
	$('#rezultat11').css('display','block');

		
	}
	if(odp[12][3]==true)
	{
		punkty++;
		
	}
		else if(odp[12][1]==undefined)
	{
	$('#rezultat12').css('display','block');

		
	}
	
	if(odp[13][2]==true)
	{
		punkty++;

	}
		else if(odp[13][1]==undefined)
	{
	$('#rezultat13').css('display','block');

		
	}

	if(odp[14][2]==true)
	{
		punkty++;
	
	}
		else if(odp[14][1]==undefined)
	{
	$('#rezultat14').css('display','block');

		
	}
	if(odp[15][0]==true)
	{
		punkty++;
	
	}
		else if(odp[15][1]==undefined)
			$('#rezultat15').css('display','block');

	{
		
		
	}
	if(odp[16][3]==true)
	{
		punkty++;
	
	}
		else if(odp[16][1]==undefined)
			$('#rezultat16').css('display','block');

	{

		
	}
	if(odp[17][0]==true)
	{
		punkty++;
	
	}
		else if(odp[17][1]==undefined)
	{
		$('#rezultat17').css('display','block');

		
	}
	if(odp[18][2]==true)
	{
		punkty++;
	
	}
		else if(odp[18][1]==undefined)
	{
		$('#rezultat18').css('display','block');

		
	}
	if(odp[19][1]==true)
	{
		punkty++;
	
	}
		else if(odp[19][1]==undefined)
	{
	$('#rezultat19').css('display','block');

		
	}
	if(odp[20][1]==true)
	{
		punkty++;
		
	}
		else if(odp[20][1]==undefined)
	{
		$('#rezultat20').css('display','block');

		
	}
	if(odp[21][0]==true)
	{
		punkty++;
		
	}
		else if(odp[21][1]==undefined)
	{
	$('#rezultat21').css('display','block');

		
	}
	if(odp[22][3]==true)
	{
		punkty++;
		
	}
		else if(odp[22][1]==undefined)
	{
		$('#rezultat22').css('display','block');

		
	}
	if(odp[23][3]==true)
	{
		punkty++;
		
	}
		else if(odp[23][1]==undefined)
	{
	$('#rezultat23').css('display','block');

		
	}
	if(odp[25][0]==true)
	{
		punkty++;
		
	}
		else if(odp[25][1]==undefined)
	{
		$('#rezultat25').css('display','block');

		
	}
	if(odp[26][3]==true)
	{
		punkty++;
		
	}
		else if(odp[26][1]==undefined)
	{
	$('#rezultat26').css('display','block');

		
	}
	if(odp[27][0]==true)
	{
		punkty++;
		
	}
		else if(odp[27][1]==undefined)
	{
		$('#rezultat27').css('display','block');

		
	}
	if(odp[28][1]==true)
	{
		punkty++;
		
	}
		else if(odp[28][1]==undefined)
	{
	$('#rezultat28').css('display','block');

		
	}
	if(odp[29][2]==true)
	{
		punkty++;
		
	}
		else if(odp[30][1]==undefined)
	{
		$('#rezultat30').css('display','block');

		
	}
	if(odp[30][3]==true)
	{
		punkty++;
		
	}
		else if(odp[30][1]==undefined)
	{
	$('#rezultat30').css('display','block');

		
	}
	if(odp[31][1]==true)
	{
		punkty++;
		
	}
		else if(odp[31][1]==undefined)
	{
	$('#rezultat31').css('display','block');

		
	}
	if(odp[32][0]==true)
	{
		punkty++;
		
	}
		else if(odp[32][1]==undefined)
	{
		$('#rezultat32').css('display','block');

		
	}
	if(odp[33][3]==true)
	{
		punkty++;
		
	}
		else if(odp[33][1]==undefined)
	{
	$('#rezultat33').css('display','block');

		
	}
	if(odp[34][2]==true)
	{
		punkty++;
		
	}
		else if(odp[34][1]==undefined)
	{
		$('#rezultat34').css('display','block');

		
	}
	if(odp[35][3]==true)
	{
		punkty++;
		
	}
		else if(odp[35][1]==undefined)
	{
	$('#rezultat35').css('display','block');

		
	}
	if(odp[36][2]==true)
	{
		punkty++;
		
	}
		else if(odp[36][1]==undefined)
	{
		$('#rezultat36').css('display','block');

		
	}
	if(odp[37][0]==true)
	{
		punkty++;
		
	}
		else if(odp[37][1]==undefined)
	{
	$('#rezultat37').css('display','block');

		
	}
	if(odp[38][1]==true)
	{
		punkty++;
		
	}
		else if(odp[38][1]==undefined)
	{
		$('#rezultat38').css('display','block');

		
	}
	if(odp[39][2]==true)
	{
		punkty++;
		
	}
		else if(odp[39][1]==undefined)
	{
	$('#rezultat39').css('display','block');

		
	}
	if(odp[40][3]==true)
	{
		punkty++;
		
	}
		else if(odp[40][1]==undefined)
	{
	$('#rezultat40').css('display','block');

		
	}
	if(odp[41][3]==true)
	{
		punkty++;
		
	}
		else if(odp[41][1]==undefined)
	{
	$('#rezultat41').css('display','block');

		
	}
	if(odp[42][1]==true)
	{
		punkty++;
		
	}
		else if(odp[42][1]==undefined)
	{
		$('#rezultat42').css('display','block');

		
	}
	if(odp[43][0]==true)
	{
		punkty++;
		
	}
		else if(odp[43][1]==undefined)
	{
	$('#rezultat43').css('display','block');

		
	}
	if(odp[44][2]==true)
	{
		punkty++;
		
	}
		else if(odp[44][1]==undefined)
	{
		$('#rezultat44').css('display','block');

		
	}
	if(odp[45][0]==true)
	{
		punkty++;
		
	}
		else if(odp[45][1]==undefined)
	{
	$('#rezultat45').css('display','block');

		
	}
	if(odp[46][0]==true)
	{
		punkty++;
		
	}
		else if(odp[46][1]==undefined)
	{
		$('#rezultat46').css('display','block');

		
	}
	if(odp[47][2]==true)
	{
		punkty++;
		
	}
		else if(odp[47][1]==undefined)
	{
	$('#rezultat47').css('display','block');

		
	}
	if(odp[48][1]==true)
	{
		punkty++;
		
	}
		else if(odp[48][1]==undefined)
	{
		$('#rezultat48').css('display','block');

		
	}
	if(odp[49][3]==true)
	{
		punkty++;
		
	}
		else if(odp[49][1]==undefined)
	{
	$('#rezultat49').css('display','block');

		
	}
	if(odp[50][1]==true)
	{
		punkty++;
		
	}
		else if(odp[50][1]==undefined)
	{
	$('#rezultat50').css('display','block');

		
	}
	if(odp[51][2]==true)
	{
		punkty++;
		
	}
		else if(odp[51][1]==undefined)
	{
	$('#rezultat51').css('display','block');

		
	}
	if(odp[52][1]==true)
	{
		punkty++;
		
	}
		else if(odp[52][1]==undefined)
	{
		$('#rezultat52').css('display','block');

		
	}
	if(odp[53][0]==true)
	{
		punkty++;
		
	}
		else if(odp[53][1]==undefined)
	{
	$('#rezultat53').css('display','block');

		
	}
	if(odp[54][1]==true)
	{
		punkty++;
		
	}
		else if(odp[54][1]==undefined)
	{
		$('#rezultat54').css('display','block');

		
	}
	if(odp[55][0]==true)
	{
		punkty++;
		
	}
		else if(odp[55][1]==undefined)
	{
	$('#rezultat55').css('display','block');

		
	}
	if(odp[56][0]==true)
	{
		punkty++;
		
	}
		else if(odp[56][1]==undefined)
	{
		$('#rezultat56').css('display','block');

		
	}
	if(odp[57][1]==true)
	{
		punkty++;
		
	}
		else if(odp[57][1]==undefined)
	{
	$('#rezultat57').css('display','block');

		
	}
	if(odp[58][2]==true)
	{
		punkty++;
		
	}
		else if(odp[58][1]==undefined)
	{
		$('#rezultat58').css('display','block');

		
	}
	if(odp[59][2]==true)
	{
		punkty++;
		
	}
		else if(odp[59][1]==undefined)
	{
	$('#rezultat59').css('display','block');

		
	}
	if(odp[60][0]==true)
	{
		punkty++;
		
	}
		else if(odp[60][1]==undefined)
	{
	$('#rezultat60').css('display','block');

		
	}
	if(odp[61][3]==true)
	{
		punkty++;
		
	}
		else if(odp[51][1]==undefined)
	{
	$('#rezultat61').css('display','block');

		
	}
	
$(document).ready(function scroll() {
  
  var $main
  if(test==1)
  {
   $main = $("#test1");
  }
  else if(test==2)
  {
  $main = $("#test2");
  }
   else if(test==3)
  {
   $main = $("#test3");
  }
   else if(test==4)
  {
  $main = $("#test4");
  }
   else if(test==5)
  {
   $main = $("#test5");
  }
   else if(test==6)
  {
  $main = $("#test6");
  }
  
  
  


  //STRZAŁKA NA GÓRZE
  scroll();
   function scroll() {
    $('body,html').animate({
      scrollTop: $main.offset().top
    }, 1500, function () {})
  };

  
  
	   
    for(i=2 ; i<62 ; i++)
	{
	
	    $('#odpa'+i).css('border','2px solid #26282E');
		$('#odpb'+i).css('border','2px solid #26282E');
	    $('#odpc'+i).css('border','2px solid #26282E');
		$('#odpd'+i).css('border','2px solid #26282E');
		
	document.getElementById("odpa"+i).setAttribute("onclick",";");
	document.getElementById("odpa"+i).style.cursor = "default";
	document.getElementById("odpc"+i).setAttribute("onclick",";");
	document.getElementById("odpc"+i).style.cursor = "default";
	document.getElementById("odpd"+i).setAttribute("onclick",";");
	document.getElementById("odpd"+i).style.cursor = "default";
	document.getElementById("odpb"+i).setAttribute("onclick",";");
	document.getElementById("odpb"+i).style.cursor = "default";
	
	
	
	}

  $('.logo1').text("Zdobyłeś "+punkty+"/10");
  

  

}); 
	

	
	
	
	

	 changeStyle();
	 
	
}


function changeStyle() {
 for(i=2 ; i<62 ; i++)
 {
	 for(j=0 ; j<4 ; j++)
 {
	 if(odp[i][j]==true)
	 {
		 var div ;
		 if(j==0)
{   div = document.querySelector("#odpa"+i);
   
}
else if(j==1)
{
	div = document.querySelector("#odpb"+i);
}
else if(j==2)
{
	div = document.querySelector("#odpc"+i);
	
}
else if(j==3)
{
	div = document.querySelector("#odpd"+i);
	
}
		
		 with (div.style) {
       backgroundColor = '#820000';	
	     opacity= '0.7';
	   }
		
	 }
 }
 }
 
     $('#odpb2').addClass('odpgood');
	 $('#odpd3').addClass('odpgood');
	 $('#odpc4').addClass('odpgood');
	 $('#odpa5').addClass('odpgood');
	 $('#odpc6').addClass('odpgood');
	 $('#odpb7').addClass('odpgood');
	 $('#odpb8').addClass('odpgood');
	 $('#odpc9').addClass('odpgood');
	 $('#odpb10').addClass('odpgood');
	 $('#odpa11').addClass('odpgood');
	 
	 $('#odpd12').addClass('odpgood');
	 $('#odpc13').addClass('odpgood');
	 $('#odpc14').addClass('odpgood');
	 $('#odpa15').addClass('odpgood');
	 $('#odpd16').addClass('odpgood');
	 $('#odpa17').addClass('odpgood');
	 $('#odpc18').addClass('odpgood');
	 $('#odpb19').addClass('odpgood');
	 $('#odpb20').addClass('odpgood');
	 $('#odpa21').addClass('odpgood');
	 
	 $('#odpd22').addClass('odpgood');
	 $('#odpd23').addClass('odpgood');
	 $('#odpc24').addClass('odpgood');
	 $('#odpa25').addClass('odpgood');
	 $('#odpd26').addClass('odpgood');
	 $('#odpa27').addClass('odpgood');
	 $('#odpb28').addClass('odpgood');
	 $('#odpc29').addClass('odpgood');
	 $('#odpc30').addClass('odpgood');
	 $('#odpa31').addClass('odpgood');
	 
	 
	 
	 
	 
	 
	 $('#odpa32').addClass('odpgood');
	 $('#odpd33').addClass('odpgood');
	 $('#odpc34').addClass('odpgood');
	 $('#odpd35').addClass('odpgood');
	 $('#odpc36').addClass('odpgood');
	 $('#odpa37').addClass('odpgood');
	 $('#odpb38').addClass('odpgood');
	 $('#odpc39').addClass('odpgood');
	 $('#odpd40').addClass('odpgood');
	 $('#odpd41').addClass('odpgood');
	 
	 
	 $('#odpb42').addClass('odpgood');
	 $('#odpa43').addClass('odpgood');
	 $('#odpc44').addClass('odpgood');
	 $('#odpa45').addClass('odpgood');
	 $('#odpa46').addClass('odpgood');
	 $('#odpc47').addClass('odpgood');
	 $('#odpb48').addClass('odpgood');
	 $('#odpd49').addClass('odpgood');
	 $('#odpb50').addClass('odpgood');
	 $('#odpc51').addClass('odpgood');
	 
	 $('#odpb52').addClass('odpgood');
	 $('#odpa53').addClass('odpgood');
	 $('#odpb54').addClass('odpgood');
	 $('#odpa55').addClass('odpgood');
	 $('#odpa56').addClass('odpgood');
	 $('#odpb57').addClass('odpgood');
	 $('#odpc58').addClass('odpgood');
	 $('#odpc59').addClass('odpgood');
	 $('#odpa60').addClass('odpgood');
	 $('#odpd61').addClass('odpgood');
	 
		  
	


}

	
 


