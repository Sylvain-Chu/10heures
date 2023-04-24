<script lang="ts" setup></script>

<template>
	<div class="headerGauche">
		<i class="fa-solid fa-magnifying-glass"></i>
		<input type="text" name="search" id="searchHeader" placeholder="Rechercher" />
	</div>
	<div class="headerDroite">
		<a href="#" class="HeaderLinkNotif">
			<i class="fa-solid fa-bell fa-lg"></i>
		</a>
		<a href="#" class="HeaderLinkImg">
			<img src="../../public/img/profil.png" alt="profil image" />
		</a>
	</div>
</template>

<style scoped>
	.headerGauche i {
		color: white;
		opacity: 0.3;
		margin-left: 25px;
		margin-right: 10px;
		font-size: 16px;
	}

	.headerGauche input::placeholder {
		color: white;
		opacity: 0.7;
		/* font-family: inherit; */
		line-height: inherit;
	}

	.headerDroite {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 7vw;
	}

	.headerDroite img {
		width: 1.6vw;
		border-radius: 50vw;
		/* padding: 7px; */
	}

	#searchHeader {
		background-color: #121216;
		color: white;
		border: none;
		width: 25vw;
	}

	#searchHeader:focus {
		border-color: #121216;
	}

	input {
		outline: none;
		padding: 15px;
	}

	.HeaderLinkNotif {
		color: white;
		padding: 10px;
		margin-right: 10px;
	}

	.HeaderLinkNotif:hover,
	.HeaderLinkImg:hover {
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
	}
</style>
