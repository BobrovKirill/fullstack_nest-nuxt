<template>
	<aside class="ring" style="transform: translate(0px, 0px)">
		<a href="#main" class="ring__skiplink">Перейти к основному контенту</a>
		<div class="ring__scroll">
			<nav aria-label="Сайты сателиты" class="ring__projects">
				<a
					href="https://www.mk.ru"
					target="_blank"
					rel="noopener"
					class="ring__item"
				>
					<svg width="24" height="24" class="ring__item-icon">
						<use xlink:href="#icon-mk"></use>
					</svg>
					<span class="ring__item-name">МК</span></a
				><a
					href="https://avtovzglyad.ru"
					target="_blank"
					rel="noopener"
					class="ring__item"
				>
					<svg width="24" height="24" class="ring__item-icon">
						<use xlink:href="#icon-av"></use>
					</svg>
					<span class="ring__item-name">АвтоВзгляд</span></a
				><a
					href="https://ohotniki.ru"
					target="_blank"
					rel="noopener"
					class="ring__item ring__item_active"
				>
					<svg width="24" height="24" class="ring__item-icon">
						<use xlink:href="#icon-oh"></use>
					</svg>
					<span class="ring__item-name">Охотники.ру</span></a
				><a
					href="https://womanhit.ru"
					target="_blank"
					rel="noopener"
					class="ring__item"
				>
					<svg width="24" height="24" class="ring__item-icon">
						<use xlink:href="#icon-wh"></use>
					</svg>
					<span class="ring__item-name">WomanHit.ru</span></a
				><a
					href="https://www.mk.ru/promokodi/"
					target="_blank"
					rel="noopener"
					class="ring__item"
				>
					<svg width="24" height="24" class="ring__item-icon">
						<use xlink:href="#icon-promo"></use>
					</svg>
					<span class="ring__item-name">Промокоды</span></a
				>
			</nav>
			<div class="ring__right">
				<div class="ring__right-search">
					<form role="search" action="/search/" class="ring-search">
						<input
							id="header-search"
							type="search"
							name="q"
							aria-labelledby="tabpanel-label"
							placeholder="Поиск"
							value=""
							aria-label="Поиск"
							required="required"
							class="ring-search__input"
						/><label for="header-search" class="ring-search__label">
							<svg
								width="32"
								height="32"
								class="ring-search__label-icon ring-search-icon"
							>
								<use xlink:href="#icon-search"></use>
							</svg>
						</label>
						<button
							aria-label="Искать"
							type="submit"
							class="ring-search__button"
						>
							<svg width="32" height="32" class="ring-search__icon">
								<use xlink:href="#icon-search"></use>
							</svg>
						</button>
					</form>
				</div>
				<button
					aria-label="Зайти в личный кабинет"
					data-authorized="auth"
					class="ring__right-btn"
				>
					Войти
				</button>
				<div class="ring__right-age">
					<svg width="34" height="37" class="ring__age-icon">
						<use xlink:href="#icon-16"></use>
					</svg>
				</div>
				<span class="visually-hidden"
					>Предназначено для лиц старше шестнадцати лет</span
				>
			</div>
		</div>
	</aside>
</template>

<script>
export default {
	name: 'BaseRing',
};
</script>

<style lang="stylus">
.ring
	display flex
	position relative
	overflow hidden
	background-color ringBg
	transition shadow, transform 0.3s

	&after,
	&before
		content ''
		display block
		height 40px
		pointer-events none
		position absolute
		top 0
		width 20px


	&:before
		background-image linear-gradient(270deg, rgba(51, 51, 51, 0) 0, #333333)
		left 0


	&:after
		background-image linear-gradient(90deg, rgba(51, 51, 51, 0) 0, #333333)
		right 0

	&__skiplink
		position absolute
		top -200px
		left 20px

		padding 5px

		transition top .2s
		background-color primaryColor
		color white

		&:focus
			top 5px

	&__scroll
		display flex
		flex-grow 1
		margin-bottom -20px
		padding-bottom 20px
		overflow-x auto
		overflow-y hidden
		scrollbar-width none

		&-webkit-scrollbar
			display none

	&__projects
		display flex
		gap 20px
		flex-grow 0
		flex-shrink 0
		margin-left 20px
		font-family Verdana, Aria, sans-serif
		@media ({min}: $lg)
			gap 30px
			margin-left 40px

	&__item
		display flex
		align-items center
		flex-shrink 0

		min-height 40px

		font-weight 700
		color #dddddd
		text-decoration none
		font-size 14px
		font-family Verdana, sans-serif

		&_active, &:hover
			svg
				color #fff
				background-color #df3836

		&-icon
			fill #dddddd
			background-color #777777
			border-radius 12px
			cursor pointer
			display flex
			flex-shrink 0
			height 24px
			margin-right 10px
			width 24px

		&-name
			flex-shrink 0


	&__right
		display flex
		gap 30px
		align-self flex-start
		height 100%

		color #eeeeee
		margin 0 20px 0 auto
		padding 0 0 0 20px
		// width 185px

		&-search
			margin-left auto
			min-width 40px
			min-height 40px

		&-btn
			color #ffffff
			font-size 12px
			line-height 14.6px
			font-weight 400
			text-transform uppercase

			background-color transparent
			border none

			&:hover
				color #EEEEEE
			@media ({max} 899px)
				display none

		&-age
			width 34px

			&-icon
				fill #777777
</style>
