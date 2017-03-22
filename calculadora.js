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
				if (e.which == 48 || e.which == 96){
					key = 0;
				}else if(e.which == 49 || e.which == 97){
					key = 1;
				}else if(e.which == 50 || e.which == 98){
					key = 2;
				}else if(e.which == 51 || e.which == 99){
					key = 3;
				}else if(e.which == 52 || e.which == 100){
					key = 4;
				}else if(e.which == 53 || e.which == 101){
					key = 5;
				}else if(e.which == 54 || e.which == 102){
					key = 6;
				}else if(e.which == 55 || e.which == 103){
					key = 7;
				}else if(e.which == 56 || e.which == 104){
					key = 8;
				}else if(e.which == 57 || e.which == 105){
					key = 9;
				}else if(e.which == 43 || e.which == 107){
					key = '+';
				}else if(e.which == 45 || e.which == 109){
					key = '-';
				}else if(e.which == 42 || e.which == 106){
					key = '*';
				}else if(e.which == 47 || e.which == 111){
					key = '/';
				}else if(e.which == 46){
					key = ".";
				}
				screen.html(html + key);
			}
		}
	});

	$(".val").click(function(){
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

	$(".erase").click(function(){
		checkSyntax();
		var html = screen.html();
		html = html.slice(0,-1);
		screen.html(html);
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
		if(screen.html() == "Syntax ERROR"){
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
