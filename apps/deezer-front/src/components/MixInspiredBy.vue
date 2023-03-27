<script>

</script>

<template>

	<div class='card'>
		<div class='card-image'>
			<div class='image-wrapper'>
				<div class='image-overlay'></div>
				<img src='image.jpg' alt='Card Image'>
			</div>
		</div>
		<div class='card-content'>
			<p class='title'>Card Title</p>
			<p class='subtitle'>by <span class='author'>Author Name</span></p>
		</div>
	</div>

</template>


<style lang='scss' scoped>
	.card {
		display: flex;
		align-items: center;
		background-color: #23232D;
		border-radius: 4px;
		height: 54px;
		position: relative;
	}

	.card-image {
		flex: 0 0 54px;
	}

	.image-wrapper {
		position: relative;
	}

	.image-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.play-button {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}

	.play-button svg {
		transition: all 0.2s ease;
	}

	.image-wrapper:hover .play-button {
		opacity: 1;
	}

	.image-wrapper:hover .play-button svg {
		transform: scale(1.1);
		fill: #fff;
	}

	.card-image img {
		min-height: 54px;
		min-width: 54px;
		border-radius: 4px;
		z-index: 0;
	}

	.card-content {
		margin-left: 4px;
	}

	.title {
		font-size: 15px;
		color: #fff;
		max-width: 95%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: lighter;
		cursor: pointer;
	}

	.title:hover {
		text-decoration: underline;
	}

	.subtitle {
		font-size: 12px;
		color: #787882;
		max-width: 95%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: lighter;
	}

	.author {
		color: #fff;
		text-decoration: underline;
		cursor: pointer;
	}

	.author:hover {
		text-decoration: none;
	}

</style>