
function calculate2 () {

	var amount = $('#amount2').val();
    
    var intrest = $('#intrest2'). val ();
	var p = document.getElementById('profit');
    var t = document.getElementById('totalCost2');
    var cal    = (intrest * amount/ 100);
        
    var profit = ( cal * 1);
    profit=profit.toFixed(2);
	var totalCost2 =((cal * 1) + (amount * 1));
	totalCost2=totalCost2.toFixed(2);

    if(1<5){
        p.innerHTML = profit;
        t.innerHTML=totalCost2;
    }
    document.getElementById('Calculate2').onclick = function(){
        
        Calculate2.style.visibility="hidden";
        reset2.style.visibility="visible";
        
    }
document.getElementById('reset2').onclick = function(){
         
         document.getElementById('amount2').value="";
         document.getElementById('intrest2').value="";
         document.getElementById('profit').innerHTML="0.00";
        document.getElementById('totalCost2').innerHTML="0.00";
     Calculate2.style.visibility="visible";
     }
    
	
	}
    

    
     