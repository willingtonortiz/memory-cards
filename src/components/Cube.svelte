<script>
</script>

<div class="cube">
	<div class="front" />
	<div class="back" />
	<div class="right" />
	<div class="left" />
	<div class="top" />
	<div class="bottom" />
</div>

<style>
	.cube {
		width: 200px;
		height: 200px;
		margin: 100px auto;
		position: relative;
		transform-style: preserve-3d;
		transform: perspective(700px) rotateX(-30deg) rotateY(-30deg);
		animation: rotate 5s infinite linear;
	}

	.front,
	.back,
	.right,
	.left,
	.top,
	.bottom {
		position: absolute;
		width: 200px;
		height: 200px;
	}

	.top {
		background-color: dodgerblue;
		transform: rotateX(90deg) translateZ(100px);
	}

	.bottom {
		background-color: slateblue;
		transform: rotateX(90deg) translateZ(-100px);
	}

	.front {
		background-color: mediumseagreen;
		transform: translateZ(100px);
	}

	.back {
		background-color: yellow;
		transform: translateZ(-100px);
	}

	.right {
		background-color: tomato;
		transform: rotateY(90deg) translateZ(100px);
	}

	.left {
		background-color: #323232;
		transform: rotateY(90deg) translateZ(-100px);
	}

	@keyframes rotate {
		0% {
			transform: rotateX(0deg) rotateY(0deg);
		}
		100% {
			transform: rotateX(360deg) rotateY(360deg);
		}
	}
</style>
