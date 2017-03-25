jQuery(document).ready(function(){
	var screen = $(".screen")
	var solved = false;
	var ans = 0;

	$(window).keypress(function(e) {
		checkSyntax();
		var key = "";
		var html = screen.html();
		if(e.which == 13){
			try {
				e.preventDefault();
				solved = true;
				ans = eval(html);
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
					e.preventDefault();
					key = '/';
				}else if(e.which == 46){
					key = ".";
				}else if(e.which == 40){
					key = "(";
				}else if(e.which == 41){
					key = ")";
				}

				if(solved && Number.isInteger(key)){
					screen.html(key);
				}else{
					screen.html(html + key);
				}
				solved = false;
			}
		}
	});

	$(".num,.dot").click(function(){
		checkSyntax();
		if(solved){
			solved = false;
			screen.html($(this).html());
		}else{
			if(checkLength()){
				var html = screen.html();
				screen.html(html + $(this).html());
			}
		}
	});

	$(".op").click(function(){
		checkSyntax();
		solved = false;
		if(checkLength()){
			var html = screen.html();
			screen.html(html + $(this).html());
		}
	});

	$(".ans").click(function(){
		checkSyntax();
		if(solved){
			solved = false;
			screen.html(ans);
		}else{
			if(checkLength()){
				var html = screen.html();
				screen.html(html + ans);
			}
		}
	});

	$(".divide").click(function(){
		checkSyntax();
		solved = false;
		if(checkLength()){
			var html = screen.html();
			screen.html(html + "/");
		}
	});

	$(".mult").click(function(){
		checkSyntax();
		solved = false;
		if(checkLength()){
			var html = screen.html();
			screen.html(html + "*");
		}
	});

	$(".clear").click(function(){
		solved = false;
		var html = screen.html();
		screen.html("");
	});

	$(".plusmn").click(function(){
		checkSyntax();
		solved = false;
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
		solved = false;
		var html = screen.html();
		html = html.slice(0,-1);
		screen.html(html);
	});

	$(".sqrt").click(function(){
		checkSyntax();
		solved = true;
		var html = screen.html();
		html = Math.sqrt(parseInt(html));
		if(isNaN(html)){
			screen.html("Math ERROR");
		}else{
			ans = html;
			screen.html(html);
		}
	});

	$(".equal").click(function(){
		checkSyntax();
		solved = true;
		var html = screen.html();
		try {
			ans = eval(html);
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

	function checkSolved(){
		if(solved){
			return true;
		}else{
			return false;
		}
	}
});
