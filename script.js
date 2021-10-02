var windowWidth = $(window).width();

console.log(windowWidth);

let dot_cnt = 200;
// let 50 = (windowWidth - (windowWidth % 8)) / 8;
console.log(dot_cnt);

var array = ["black","gray","silver","white","blue","navy","teal","green","lime","aqua","yellow","red","fuchsia","olive","purple","maroon"];


let x = 0;
let y = 0;
let map = map_arr();

for(let cy = 0; cy <= dot_cnt;cy++){
    let div = $("<div>").appendTo($("#screen"));
    for(let cx = 0; cx <= dot_cnt;cx++){
        $("<span>",{class:"dot " + map[y + cy][x + cx],id:String(cx) +"_" + String(cy)}).appendTo(div)
    }
}

let c = new ctrl();


function rend(x,y){
    console.log(x,y);
    for(let cy = 0; cy <= dot_cnt;cy++){
        for(let cx = 0; cx <= dot_cnt;cx++){
            $("#" +String(cx) +"_" + String(cy)).attr('class', 'dot ' + map[y + cy][x + cx]);
        }
    }
}


function ctrl(){

    this.move_left = function(){
        rend(x - 1,y);
        x -= 1;
    }

    this.move_right = function(){
        rend(x + 1,y);
        x += 1;
    }

    this.move_up = function(){
        rend(x,y - 1);
        y -= 1;
    }

    this.move_down = function(){
        rend(x,y + 1);
        y += 1;
    }
}

$(function(){
	$('html').keydown(function(e){
		switch(e.which){
			case 39: // Key[→]
			c.move_right();
			break;

			case 37: // Key[←]
			c.move_left();
			break;

			case 38: // Key[↑]
			c.move_up();
			break;

			case 40: // Key[↓]
			c.move_down();
			break;
		}
	});
});