<template>
    <header class="header">
        <div class="header__wrapper"><a class="header__logo" href="/">
            <picture>
                <source srcset="/static/images/gluhar2x.webp"/>
                <source srcset="/static/images/gluhar4x.webp x4"/>
                <img loading="lazy"
                     src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                     data-src="/static/images/gluhar2x.png"
                     alt="Логотип охотники — глухарь"/>
            </picture>
            <img loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                 data-src="/static/images/ohotniki-logo.svg" alt="Логотип охотники.ру"/>
        </a>
            <div class="header__links"><a class="header__link" href="/editions/rog/">
                <picture class="header__link-img">
                    <source srcset="/static/images/ru-gazeta-logo.webp"/>
                    <img loading="lazy"
                         src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                         data-src="/static/images/ru-gazeta-logo.png" alt="Логотип российская охотничья газета"/>
                </picture>
                <span class="header__link-text">Российская охотничья газета</span>
            </a><a class="header__link" href="/editions/oir/">
                <picture class="header__link-img">
                    <source srcset="/static/images/ohota-ribalka-logo.webp"/>
                    <img loading="lazy"
                         src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                         data-src="/static/images/ohota-ribalka-logo.png" alt="Логотип Охота и рыбалка XXI век"/>
                </picture>
                <span class="header__link-text">Охота и&nbsp;рыбалка XXI&nbsp;век</span>
            </a></div>
            <div class="header__control">
                <div class="header__social social-sharing"></div>
                <button class="header__burger" aria-label="Открыть меню"><span></span></button>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
 name: "header"
})
</script>

<style  lang="stylus">
.header
	position sticky
	top 0
	z-index 10

	transition top .2s, height .5s

	height 96px
	width 100%

	background-color primaryBg

	&_fixed
		height 73px

		.header__picture
			width 0
			height 10px
			opacity 0

	&__wrapper
		position relative
		display flex
		justify-content space-between
		align-items center
		gap 9px

		padding 0 20px

		height 100%

		box-shadow 0 15px 25px 3px rgba(0, 0, 0, 0.1)
		@media ({min}: md)
			padding 0 40px

	&__logo
		display flex
		align-items center
		gap 4px

		width 356px

		& > img
			width 179px
			height 34px
			@media ({min} sm)
				height 53px
				width 282px

	&__picture
		width 44px
		height 44px
		transition all .5s, opacity .8s
		opacity 1
		@media ({min} sm)
			width 70px
			height 70px

		img
			height 100%
			width 100%

	&__links
		display none
		@media ({min}: sm)
			display flex
			justify-content center
			align-items center
			gap 40px

	&__link
		display flex
		align-items center
		gap 8px

		max-width 85px

		color #5D6359
		@media ({min}: lg)
			max-width 196px

		&-img
			display none
			width 44px
			height 44px
			flex-shrink 0

			img
				width 100%
				height 100%
			@media ({min}: lg)
				display block

		&-text
			font-size 14px
			line-height 16px
			font-weight 700


		&:hover
			color hoverFontColor

	&__control
		display flex
		justify-content flex-end
		gap 46px

	&__social
		@media ({min}: md)
			display block
		display none
		align-self center

	&__burger
		position relative
		z-index 5

		display block
		justify-self end

		width 44px
		height 44px

		cursor pointer
		background-color thirdColor
		border none
		border-radius 100px

		&:hover
			filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.15))

		&::before,
		&::after,
		span
			position absolute
			left 50%
			transform translate(-50%)
			transform-origin left top
			width 16px

			height 2px

			transition all 0.3 ease
			background-color #333333

		&::before
			content ''
			top 16px

		&:after
			content ''
			bottom 16px

		& span
			top 50%
			transform scale(1) translate(-50%, -50%)

		&.active
			span
				transform: scale(0) translate(0px, -50%)

			&::after
				bottom 50%
				transform rotate(-45deg) translate(-60%, 50%)

			&::before
				top 50%
				transform rotate(45deg) translate(-45%, -50%)

</style>