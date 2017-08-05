
var CALC = {
				
	onReady: function() {
		$('focus').focus();
		$('#reset').hide();
		$('#calculate').click(CALC.calculate);
		$('#reset').click(CALC.reset);
	},
	
	calculate: function(event) {
		// Get quantity
	var Day1 = $('#Day1').val();
    var Day2 = $('#Day2'). val ();
    var Day3 = $('#Day3'). val ();
	// Get price
	var Day4 = $('#Day4').val();
	
	var Day5 = $('#Day5').val();
	
	var Day6 = $('#Day6').val();
	
	var Day7 = $('#Day7').val();
    var Figures = $('#F').val();
    
 

	var tc = ((Day1 * 1)+(Day2 * 1)+(Day3 * 1)+(Day4 * 1)+(Day5 * 1)+(Day6 * 1)+(Day7 * 1));
    var totalCost = tc / (Figures * 1);
	totalCost=totalCost.toFixed(2);
      	
    // Set total cost
	$('#total').val(totalCost);
           
	$('#calculate').hide();
	$('#reset').show();
    
	
	},
 
	
	reset: function(event) {
		$('#Day1').val('');
		$('#Day2').val('');
		$('#Day3').val('');
		$('#Day4').val('');
		$('#Day5').val('');
		$('#Day6').val('');
		$('#Day7').val('');
        $('#F').val('');
        $('#total').val('');
        $('#quantity').focus();
		$('#calculate').show();
		$('#reset').hide();
		
	}
};


	
$(document).ready(CALC.onReady);

