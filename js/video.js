let video;

window.addEventListener("load", function() {
	video = document.querySelector(".video")
	console.log("Good job opening the window")
	console.log("Auto play is set to false")
	console.log("Loop is set to false")
	video.autoplay = false;
	video.loop = false;

});

// plays the video and updates volume information //
document.querySelector("#play").addEventListener("click", function() {
	let element = document.querySelector("#play");
		console.log("Play Video")
		video.play();
		document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	}
);


// pauses the video //
document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video")
		video.pause();
	}
);


// slows down the video //
document.querySelector("#slower").addEventListener("click", function () {
		console.log("Slow down video")
		rate = video.playbackRate *= 0.9;
		console.log("Speed is " + rate)

	}
);

// speeds up the video //
document.querySelector("#faster").addEventListener("click", function () {
		console.log("Speed up video")
		rate = video.playbackRate /= 0.9;
		console.log("Speed is " + rate)
	}
);


// skip ahead: advance the current video by 10 seconds//
document.querySelector("#skip").addEventListener("click", function() {
		time = video.currentTime += 10;
		console.log("Video current time is " + time)
	}
);


// mute: mute and unmute the video and update the text in the button //
document.querySelector("#mute").addEventListener("click", function() {
	let element = document.querySelector("#mute");
	if (video.muted == true){
		console.log("Unmute video")
		video.muted = false;
		element.innerHTML = 'Mute';
	 }
	 else{
		console.log("Mute video")
		video.muted = true;
		element.innerHTML = 'Unmute';

	 }
});


// volume slider: change the volume based on the slider and update the volume information//
document.querySelector("#slider").addEventListener("change", function() {
	var output = document.querySelector("#volume");
	output.innerHTML = this.value + "%";

	video.volume = this.value / 100;
	console.log("The current value is " + video.volume + "%");
	console.log(document.querySelector("#volume"));
	
});

// styled: utilize the existing oldSchool class on the video element //
document.querySelector("#vintage").addEventListener("click", function() {
	let element = document.querySelector(".video");
		element.classList.add("oldSchool");
	}
);

// original: remove oldSchool class from the video //
document.querySelector("#orig").addEventListener("click", function() {
	let element = document.querySelector(".video");
		element.classList.remove("oldSchool");
	}
);
