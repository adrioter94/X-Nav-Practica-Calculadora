jQuery(document).ready(function(){
	var screen = $(".screen")

	$(window).keypress(function(e) {
		checkSyntax();
		var key = "";
		var html = screen.html();
		if(e.which == 13){
			try {
				var ans = eval(html);
				screen.html(ans);
			}
			catch(err) {
				screen.html("Syntax ERROR");
			}
		}else if(e.which == 8){
			html = html.slice(0,-1);
			screen.html(html);
		}else{
			if(checkLength()){
				if (e.which == 48){
					key = 0;
				}else if(e.which == 49){
					key = 1;
				}else if(e.which == 50){
					key = 2;
				}else if(e.which == 51){
					key = 3;
				}else if(e.which == 52){
					key = 4;
				}else if(e.which == 53){
					key = 5;
				}else if(e.which == 54){
					key = 6;
				}else if(e.which == 55){
					key = 7;
				}else if(e.which == 56){
					key = 8;
				}else if(e.which == 57){
					key = 9;
				}else if(e.which == 43){
					key = '+';
				}else if(e.which == 45){
					key = '-';
				}else if(e.which == 42){
					key = '*';
				}else if(e.which == 47){
					key = '/';
				}else if(e.which == 46){
					key = ".";
				}
				screen.html(html + key);
			}
		}
	});

	$(".num,.op").click(function(){
		checkSyntax();
		if(checkLength()){
			var html = screen.html();
			screen.html(html + $(this).html());
		}
	});

	$(".divide").click(function(){
		checkSyntax();
		if(checkLength()){
			var html = screen.html();
			screen.html(html + "/");
		}
	});

	$(".mult").click(function(){
		checkSyntax();
		if(checkLength()){
			var html = screen.html();
			screen.html(html + "*");
		}
	});

	$(".clear").click(function(){
		var html = screen.html();
		screen.html("");
	});
	
	$(".plusmn").click(function(){
		checkSyntax();
		var html = screen.html();
		sign = html.charAt(0);
		if(sign == '-'){
			html = html.substr(1);
		}else{
			html = "-" + html;
		}
		screen.html(html);
	});

	$(".erase").click(function(){
		checkSyntax();
		var html = screen.html();
		html = html.slice(0,-1);
		screen.html(html);
	});
	
	$(".sqrt").click(function(){
		checkSyntax();
		var html = screen.html();
		html = Math.sqrt(parseInt(html));
		if(isNaN(html)){
			screen.html("Math ERROR");
		}else{
			screen.html(html);
		}
	});

	$(".equal").click(function(){
		checkSyntax();
		var html = screen.html();
		try {
			var ans = eval(html);
			screen.html(ans);
		}
		catch(err) {
			screen.html("Syntax ERROR");
		}
	});

	function checkSyntax(){
		if(screen.html() == "Syntax ERROR" ||
		   screen.html() == "Math ERROR"){
			screen.html("");
		}
	}

	function checkLength(){
		if(screen.html().length < 17){
			return true;
		}else{
			return false;
		}
	}
});
