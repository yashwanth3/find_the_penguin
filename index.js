
$(document).ready( function() {
	
	
		//suffling the penguin positions in the mound
    var suffle = $("#random > div").remove().toArray();//all child div elements of random are considered as array.
        for (var i = suffle.length - 1; i >= 1; i--) {
         var j = Math.floor(Math.random() * (i + 1));
         var temp1 = suffle[i];
         var temp2 = suffle[j];
         suffle[i] = temp2;
         suffle[j] = temp1;
		}
    $("#random").append(suffle);
		    
			
		var score = 0;
		//if selected mound has penguin1 then score is increased by 1
	   $("#penguin1").click(function () {
        $(this).css("background-image", "url('images/penguin_1.png')");
		popup();
        score = score + 1;
        $("#score_number").text(score);
        $("#penguin1").off('click');
        validateScore();
    });
    //score is increased by 1 if selected mound has penguin2
    $("#penguin2").click(function () {
        $(this).css("background-image", "url('images/penguin_2.png')");
		popup();
        score = score + 1;
        $("#score_number").text(score);
        $("#penguin2").off('click');
        validateScore();
    });
	
    //score is increased by 1 if selected mound has penguin3

    $("#penguin3").click(function () {
        $(this).css("background-image", "url('images/penguin_3.png')");
		popup();
        score = score + 1;
        $("#score_number").text(score);
        $("#penguin3").off('click');
        validateScore();

    });
      //score is increased by 1 if selected mound has penguin4

    $("#penguin4").click(function () {
        $(this).css("background-image", "url('images/penguin_4.png')");
		popup();
        score = score + 1;
        $("#score_number").text(score);
        $("#penguin4").off('click');
        validateScore();
    });
        //score is increased by 1 if selected mound has penguin5

    $("#penguin5").click(function () {
        $(this).css("background-image", "url('images/penguin_5.png')");
		popup();
        score = score + 1;
        $("#score_number").text(score);
        $("#penguin5").off('click');
        validateScore();
    });
        //score is increased by 1 if selected mound has penguin6

    $("#penguin6").click(function () {
        $(this).css("background-image", "url('images/penguin_6.png')");
		popup();
       score = score + 1;
        $("#score_number").text(score);
        $("#penguin6").off('click');
        validateScore();
    });
    //score is increased by 1 if selected mound has penguin7

    $("#penguin7").click(function () {
        $(this).css("background-image", "url('images/penguin_7.png')");
		popup();
        score = score + 1;
        $("#score_number").text(score);
        $("#penguin7").off('click');
        validateScore();
    });
       //score is increased by 1 if selected mound has penguin8

    $("#penguin8").click(function () {
        $(this).css("background-image", "url('images/penguin_8.png')");
		popup();
		 score = score +1;
        $("#score_number").text(score);
        $("#penguin8").off('click');
        validateScore();
    });


		//display message when all mounds are selected without click on yeti
	function validateScore() {
        if ($("#score_number").text() == 8) {
			winMusic();
          setTimeout(function(){ 
	        alert("You Win");
            location.reload();
	        },100);
			
        }
    };

    //This code will run after your page loads

    $("#yeti").click(function () {
          clearMounds();
		  yetiroar();
     setTimeout(function(){ 
	  alert("Yaaaarrrr!");
        location.reload();
	 },100);
	 validateScore();
    });
	//clearing the mounds when yeti is cliked 
    function clearMounds(){
		 $("#yeti").css("background-image", "url('images/yeti.png')");
		 $("#penguin1").css("background-image", "url('images/mound_1.png')");
		 $("#penguin2").css("background-image", "url('images/mound_2.png')");
		 $("#penguin3").css("background-image", "url('images/mound_3.png')");
		 $("#penguin4").css("background-image", "url('images/mound_4.png')");
		 $("#penguin5").css("background-image", "url('images/mound_5.png')");
		 $("#penguin6").css("background-image", "url('images/mound_6.png')");
		 $("#penguin7").css("background-image", "url('images/mound_7.png')");
		 $("#penguin8").css("background-image", "url('images/mound_8.png')");
	};
	function popup() {
        var popupSound = new Audio("media/mixkit-hard-pop-click-2364.wav");
        popupSound.play();
      };
	  function yetiroar() {
        var audio = new Audio("media/mixkit-beast-long-roar-306.wav");
        audio.play();
      };
	   
	  function  winMusic(){
		  var winMusic = new Audio("media/Ta Da-SoundBible.com-1884170640.mp3");
        winMusic.play();
	  };
});
