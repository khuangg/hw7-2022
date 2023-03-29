var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	console.log("Auto play is off")
	console.log("Loop is off")

});


// turns off autoplay //
document.querySelector(".video").autoplay = false;


// loop is off //
document.querySelector(".video").loop = false;


// plays the video and updates volume information //
document.querySelector("#play").addEventListener("click", function() {
	let element = document.querySelector("#play");
	if(this.click){
		console.log("Play Video")
		document.querySelector(".video").play();
		document.querySelector("#volume").innerHTML = '100%';
	}
});


// pauses the video //
document.querySelector("#pause").addEventListener("click", function() {
	let element = document.querySelector("#pause");
	if(this.click){
		console.log("Pause Video")
		document.querySelector(".video").pause();
	}
});


// slows down the video //
document.querySelector("#slower").addEventListener("click", function () {
	let element = document.querySelector("#slower");
	if(this.click){
		console.log("Slow down video")
		rate = document.querySelector(".video").playbackRate *= 0.9;
		console.log("Speed is " + rate)

	}

});

// speeds up the video //
document.querySelector("#faster").addEventListener("click", function () {
	let element = document.querySelector("#faster");
	if(this.click){
		console.log("Speed up video")
		rate = document.querySelector(".video").playbackRate /= 0.9;
		console.log("Speed is " + rate)

	}

});


// skip ahead: advance the current video by 10 seconds//
document.querySelector("#skip").addEventListener("click", function() {
	let element = document.querySelector("#skip");
	if(this.click){

		time = document.querySelector('.video').currentTime += 10;
		console.log("Video current time is " + time)
	}
});


// mute: mute and unmute the video and update the text in the button //
document.querySelector("#mute").addEventListener("click", function() {
	let element = document.querySelector("#mute");
	if(this.click){
		console.log("Mute video")
		document.querySelector(".video").muted = true;
		document.querySelector('#mute').innerHTML = 'Unmute';
	 }
	 else{
		console.log("Unmute video")
		document.querySelector(".video").muted = false;
		document.querySelector('#mute').innerHTML = 'Mute';

	 }
});


// volume slider: change the volume based on the slider and update the volume information//

// styled: utilize the existing oldSchool class on the video element //
document.querySelector("#vintage").addEventListener("click", function() {
	let element = document.querySelector("#vintage");
	if(this.click){
		document.querySelector("#vintage").style.display = ".oldSchool";
	}
})
// original: remove oldSchool class from the video //






// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
