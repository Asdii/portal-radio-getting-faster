var radio = new Howl({
	src: ["audio/radio.ogg"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.57686;

var rate = 1;
var rate_timer = percent_time;

function update() {

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * delta / 1000;

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate += 0.01;
		radio.rate(rate);
		document.getElementById("texto").innerHTML = "velocidad: " + (rate * 100).toFixed(0) + "%";
	}

	document.getElementById("radio").style.top = (rate - Math.random() * rate * 2) + "px";
	document.getElementById("radio").style.left = (rate - Math.random() * rate * 2) + "px";
	requestAnimationFrame(update);
}

function run() {
	radio.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
