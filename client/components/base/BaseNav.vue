<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'BaseNav',
});
</script>

<template>
	<nav v-if="false">fdsfdsf</nav>
</template>

<style lang="stylus">
.nav
	display none

	width 100vw
	height calc(100vh - 73px)

	padding 30px 20px


	background-color primaryBg
	overflow-y: auto

	scrollbar-width none
		&::-webkit-scrollbar
			width 0px
			height 0px
	@media ({min}: sm)
		padding 20px 40px
	@media ({min}: md)
		padding 44px 28px
	@media ({min}: lg)
		padding 25px calc((100% - 1069px) / 2)
	@media ({min}: xl)
		padding 25px calc((100% - 1380px) / 2)
	@media ({min}: xxl)
		padding 25px calc((100% - 1425px) / 2)

	&__search
		margin-bottom 0
		@media ({min}: 900px)
			margin-bottom 30px
		@media ({min}: md)
			display none

	&__login
		border-bottom 1px solid rgba(51, 51, 51, 0.1)
		margin-bottom 30px
		@media ({min} 900px)
			display none

		&-btn
			width 100%

			display flex
			align-items center
			gap 5px


			background-color transparent
			border none

			padding 10px 0

			text-align left
			font-weight 700
			font-size 14px
			line-height 19px
			color secondaryColor
			text-transform uppercase

			&:before
				content url("data:image/svg+xml; utf8, <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><circle cx='12' cy='7.5' r='3.75' fill='%23AAAAAA'/><path fill-rule='evenodd' clip-rule='evenodd' d='M5.52948 18.8818C4.37757 17.7856 4.04 16.2104 5.35807 14.8441C7.03876 13.1017 9.51779 12 12.2827 12C15.0477 12 17.5267 13.1017 19.2074 14.8441C20.2161 15.8897 20.2549 17.0577 19.7011 18.0397C17.4069 19.4419 14.71 20.25 11.8244 20.25C9.57808 20.25 7.44613 19.7603 5.52948 18.8818Z' fill='%23AAAAAA'/></svg>")

				display block
				height 24px
				width 24px

			svg
				margin-left auto

				width 24px
				height 24px

				fill #BAC0B7
				transform rotate(-90deg)

		&[open]
			svg
				transform rotate(0)

		ul
			padding 16px 20px 20px

			display flex
			flex-direction column
			gap 16px

			a
				display block
				width 100%

	&__rubrics
		position relative

		display flex
		flex-direction column
		gap 2px
		flex 1 0 auto
		@media ({min} sm)
			padding-bottom 300px
		@media ({min} md)
			padding-bottom 0

	&__rubric
		width 100%
		@media ({min}: sm)
			max-width 166px
		@media ({min}: lg)
			max-width 200px

		&.active
			.nav__btn
				background-color thirdColor

			.nav__subnav
				display block
			@media ({max}: sm - 1px)
				.nav__btn
					svg
						transform rotate(0deg)


	&__btn
		display flex
		justify-content space-between
		align-items center

		font-family 'OpenSans'
		font-size 14px
		line-height 19px
		font-weight 700
		text-transform uppercase
		text-align left
		color secondaryColor

		padding 14px 20px

		border none
		border-radius 5px
		background-color transparent
		width 100%

		&:hover
			background-color thirdColor
		@media ({max}: sm - 1px)
			padding 7px 8px 6px 22px

		svg
			flex-shrink 0

			height 24px
			width 24px

			transform rotate(-90deg)
			fill #BAC0B7

			margin-left 10px


	&__social
		display block
		margin-top 30px

		.share__list
			justify-content center
		@media ({min}: sm)
			display none

	&__subnav
		@media ({min} sm)
			padding-left 21px

	&.active
		display block
		@media ({min} md)
			display flex
			align-items center

.subnav
	display none
	@media ({min} sm)
		position absolute
		top 0
		left 166px
		max-width 100%
		height calc(100vh - 100px)

	@media ({min} lg)
		left 200px

	&__container
		position sticky
		top 0
		@media ({max} sm - 1px)
			background-color secondaryBg
			padding 0 20px 16px
			margin-top -2px

	&__header
		display flex
		flex-direction column-reverse

		@media ({min} sm)
			display grid
			grid-template-columns 1fr auto
			grid-template-rows repeat(2, auto)
			row-gap 8px
			.hr
				display none

		&-title
			display none
			@media ({min} sm)
				display block
				margin-left 20px

				font-size 28px
				line-height 38px
				font-weight 700
				text-transform uppercase
				color secondaryColor

		.subnav__link
			justify-content space-between

	&__subrubrics
		display flex
		flex-direction column
		gap 16px

		margin 15px 0 18px

		@media ({min}: sm)
			grid-column 2 span
			flex-direction row
			flex-wrap wrap
			column-gap 2px
			row-gap 6px

			margin-top 0
			width 100%

	&__subrubric
		font-size 12px
		line-height 16.3px
		font-weight 400
		text-transform uppercase
		@media ({min} sm)
			padding 8px 20px
			border-radius 5px
			&:hover
				background-color secondaryBg

	&__link
		margin-top 11px

		display flex
		justify-content flex-end
		align-items center
		gap 8px

		font-size 12px
		line-height 16.3px
		font-weight 400
		color secondaryColor

		&-icon
			display flex
			justify-content center
			align-items center

			width 24px
			height 24px

			background-color #BAC0B7
			border-radius 50%
			fill primaryBg
		@media ({min}: sm)
			margin-top 0

		&:hover
			span
				color hoverFontColor

			.subnav__link-icon
				background-color primaryAccentColor

	&__body
		display none
		@media ({min}: sm)
			display block
			border-radius: 5px;
			background-color thirdBg
		@media ({min} md)
			display grid
			grid-template-columns 454px 1fr

			padding 20px
		@media ({min}: lg)
			grid-template-columns 493px 1fr
		@media ({min}: xl)
			grid-template-columns 562px minmax(auto, 604px)

		.reportage
			height 356px
			@media ({min}: md)
				height 100%
				max-height 341px
			@media ({min}: lg)
				max-height 370px
			@media ({min}: xl)
				max-height 422px

	&__list
		display flex
		flex-direction column
		gap 14px
		padding 18px 20px 70px

		.listing-item__title
			font-size 20px
			line-height 26px
		@media ({min}: md)
			padding 7px 0 60px 20px
		@media ({min}: lg)
			padding 7px 20px 60px
</style>
