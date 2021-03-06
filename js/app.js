(function() {

	let loader = document.querySelector("#loader-wrapper")
	setTimeout(() => {
		loader.style.display = "none"
	}, 750)

	var message = {

		message: [
		'Biological Sciences Student',
		'In love with environmental education!'
		],
		counterS: 0,
		counterL: 0,
		deleteS: false,

		init: function() {
			this.cacheElem();
			this.type();
		},

		cacheElem: function() {
      this.$text = document.querySelector('.text');
		},

		type: function() {
			var message = this.message[this.counterS],
				  that = this,
				  speed = 0;

			message = !this.deleteS ? message.slice(0, ++this.counterL) : message.slice(0, --this.counterL);
			if(this.message[this.counterS] != message && !this.deleteS) {
				this.$text.innerText = message;
				speed = 100;
			}
			else {
				this.deleteS = true;
				speed = this.message[this.counterS] == message ? 1000 : 40;
				this.$text.innerText =  message;
				if (message == '') {
					this.deleteS = false;
					this.counterS = this.counterS < this.message.length - 1 ? this.counterS + 1 : 0;
				}
			}
			setTimeout(function(){that.type()}, speed);
		}
	};
	message.init();
})();