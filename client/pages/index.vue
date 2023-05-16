<template>
	<section class="grid-container grid-container_index">
		<IndexNews :news-data="newsData"></IndexNews>
		<BaseSubscribe></BaseSubscribe>
		<IndexHunt></IndexHunt>
		<IndexGuns></IndexGuns>
		reklama gallery
		<IndexFishing></IndexFishing>
		<IndexDogs></IndexDogs>
		reklama
		<IndexNewComments></IndexNewComments>
		Vgallery
		<IndexKit></IndexKit>
		<IndexTransport></IndexTransport>
		reklama
		<IndexMostRead></IndexMostRead>
		<BaseAbout></BaseAbout>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import indexData from '~/json/index.json';

export default defineComponent({
	data() {
		return {
			newsData: indexData.newsPreview,
			huntData: indexData.hunt,
			gunsData: indexData.guns,
			fishingData: indexData.fishing,
			dogsData: indexData.dogs,
			equipmentData: indexData.equipment,
			transportData: indexData.transport,
			newCommentsData: indexData.newComments,
			mostReadingNewsData: indexData.mostReadingNews,
			aboutMainPageData: indexData.aboutMainPage,
			fotoGalleryData: indexData.fotoGallery,
			videoGalleryData: indexData.videoGallery,
		};
	},
});
</script>

<style lang="stylus"></style>
