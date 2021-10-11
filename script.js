// var windowWidth = $(window).width();

// console.log(windowWidth);

// let dot_cnt = 200;
// console.log(dot_cnt);

// var array = ["black","gray","silver","white","blue","navy","teal","green","lime","aqua","yellow","red","fuchsia","olive","purple","maroon"];


// let x = 0;
// let y = 0;
// let map = map_arr();

// for(let cy = 0; cy <= dot_cnt;cy++){
//     let div = $("<div>").appendTo($("#screen"));
//     for(let cx = 0; cx <= dot_cnt;cx++){
//         $("<span>",{class:"dot " + map[y + cy][x + cx],id:String(cx) +"_" + String(cy)}).appendTo(div)
//     }
// }

// let c = new ctrl();


// function rend(x,y){
//     console.log(x,y);
//     for(let cy = 0; cy <= dot_cnt;cy++){
//         for(let cx = 0; cx <= dot_cnt;cx++){
//             $("#" +String(cx) +"_" + String(cy)).attr('class', 'dot ' + map[y + cy][x + cx]);
//         }
//     }
// }


// function ctrl(){

//     this.move_left = function(){
//         rend(x - 1,y);
//         x -= 1;
//     }

//     this.move_right = function(){
//         rend(x + 1,y);
//         x += 1;
//     }

//     this.move_up = function(){
//         rend(x,y - 1);
//         y -= 1;
//     }

//     this.move_down = function(){
//         rend(x,y + 1);
//         y += 1;
//     }
// }

// $(function(){
// 	$('html').keydown(function(e){
// 		switch(e.which){
// 			case 39: // Key[→]
// 			c.move_right();
// 			break;

// 			case 37: // Key[←]
// 			c.move_left();
// 			break;

// 			case 38: // Key[↑]
// 			c.move_up();
// 			break;

// 			case 40: // Key[↓]
// 			c.move_down();
// 			break;
// 		}
// 	});
// });


let audio_done = new Audio("./done.mp3");
let audio_move = new Audio("./move.mp3");

function move(dir = "u"){
    audio_move.pause();
    audio_move.currentTime = 0;
    audio_move.play();
    let ele = $(".now");
    ele.removeClass("now");
    let id = Number(ele.attr("id"))
    console.log(id)
    if(dir == "d"){
        id += 1;
        if(id == 5){
            id = 1;
        }
    }else{
        id -= 1;
        if(id == 0){
            id = 4;
        }
    }
    $("#" + String(id)).addClass("now")
}


$(function(){
    $("#up").click(function(e){
        move("u");
    })
    $("#down").click(function(e){
        move("d");
    })
    $("#jump").click(function(e){
        audio_done.currentTime = 0;
        audio_done.play();
        audio_done.onended = function(){
            const href = $(".now a").attr("href");
            location.href = href;
        }
    })
    $('html').keydown(function(e){
		switch(e.which){
			case 38:
                move("u");
			break;

			case 40:
                move("d");
			break;

            case 13:
                audio_done.currentTime = 0;
                audio_done.play();
                audio_done.onended = function(){
                    const href = $(".now a").attr("href");
                    location.href = href;
                }
                break;
		}
	});
    $('.typed').typed({
        strings: ["豊昭学園吹奏楽部 ライブ配信"],
        typeSpeed: 150,
        startDelay: 500,
        loop: false,
        showCursor: false,
        callback : function(){
            $('#1').fadeTo(600, 1);
            $('#2').fadeTo(700, 1);
            $('#3').fadeTo(800, 1);
            $('#4').fadeTo(900, 1);
            setTimeout(function(){$(".typed").removeClass("typed")},500)
        }
    });
})
