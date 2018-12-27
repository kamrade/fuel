export default function test() {

	const train = document.getElementById('test');

	function animate(draw, duration) {
		let start = performance.now();

		requestAnimationFrame(function animate(time) {
			let timePassed = time - start;

			if (timePassed > duration) timePassed = duration;

			draw(timePassed);

			if (timePassed < duration) {
				requestAnimationFrame(animate);
			}
		})
	}

	animate(function(timePassed) {
		train.style.left = timePassed / 5 + 'px';
	}, 2000);


}