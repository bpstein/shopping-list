$(document).ready(function(){

	//cached variables for drawing app
	var $canvas = $("canvas");
	var lastEvent; 
	var mousedown = false;
	var context = $('canvas')[0].getContext('2d');

	//Click checkmark to check item from list
	$(".checkBtn").click(function(){
		$(this).closest('li').css('text-decoration', 'line-through');
	});

	//Click 'x' to remove item from list
	$(".crossBtn").click(function(){
		$(this).closest('li').remove();
	});

	//Add post-it note functionality
	$canvas.mousedown(function(e){
		lastEvent = e;
		mousedown = true;
	})
	.mousemove(function(e){
		//Draw lines
		if(mousedown) {
			context.beginPath();
			context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
			context.lineTo(e.offsetX, e.offsetY);
			context.strokeStyle = "red";
			context.stroke();
			lastEvent = e;
		}
	})

	.mouseup(function(){
		mousedown = false;
	})

    function addItem(){	
    	var listItem = '<li>' + $('#item').val() + '<img class="checkBtn" src="images/check.png">' + '<img class="crossBtn" src="images/cross.png">' + '</li>';
    	$('ul').append(listItem);
    }
})