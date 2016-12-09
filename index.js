// @flow

window.addEventListener("keydown", (e) => {
	const key = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	console.log(key)
})
