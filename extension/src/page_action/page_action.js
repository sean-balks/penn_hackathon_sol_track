function openInNewTab() {
	window.open("https://solscan.io/tx/47cbKeHk92P4rMBdCqUuGjduRRddbm9i2rsw1ws3PCjncQx5wno87g3nKiUVxg6LpJswsd76yJQU6fch1MvAJMNY", '_blank').focus();
  }

function approveToVideo() {
	document.getElementById("background").style.backgroundImage = "url('./ad.svg')";
	document.getElementById("approve").style.height = 0;
	setTimeout(() => {
		document.getElementById("background").style.backgroundImage = "url('./complete.svg')";
		document.getElementById('background').addEventListener('click', openInNewTab);
	}, "5000")

}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('approve').addEventListener('click', approveToVideo);
});
