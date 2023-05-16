<template>
	<div class="subscribe">
		<a href="#" class="subscribe__container">
			<picture class="subscribe__logo">
				<source srcset="~/assets/images/subscribe-logo.webp" />
				<img
					src="~/assets/images/subscribe-logo.png"
					alt="Логотип «Российская охотничья газета» и журнал «Охота и рыбалка XXI век»"
			/></picture>
			<h2 class="subscribe__title">
				Читайте «Российскую охотничью газету»<br />
				и&nbsp;журнал «Охота и&nbsp;рыбалка XXI&nbsp;век»
			</h2>
			<button class="light button" type="button">Подписаться</button>
		</a>
	</div>
</template>

<script>
export default {
	name: 'BaseSubscribe',
};
</script>

<style lang="stylus">
.subscribe
	grid-area subscribe

	&__container
		display flex
		flex-direction column
		align-items center
		gap 11px

		padding 20px 20px 30px

		background-color secondaryColor
		border-radius 10px
		@media ({min}: sm)
			flex-direction row
			justify-content center
			gap 20px

			padding 20px 40px

		&:hover
			button
				color hoverFontColor

	&__logo
		min-width 64px
		min-height 64px

		img
			width 100%
			height 100%

	&__title
		font-family "Roboto", sans-serif
		color #ffffff
		font-size 16px
		line-height 28px
		font-weight 700
		text-align center
		text-transform uppercase
		hyphens none
		@media ({min}: sm)
			font-size 20px
			text-align left
		@media ({min}: md)
			font-size 22px

	button
		@media ({max} sm - 1px)
			min-width 260px
</style>
