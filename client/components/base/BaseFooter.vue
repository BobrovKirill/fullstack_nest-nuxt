<script lang="ts">
import {defineComponent} from 'vue'
import navData from '@/json/nav.json'

export default defineComponent({
 name: "base-footer",
 data() {
	return {
	 navigation: navData.navigation
	};
 },
})
</script>

<template>
    <footer class="footer">
        <div class="footer__container container">
            <ul class="footer__nav">
                <li class="footer__rubric" v-for="{rubric, rubricUrl, subRubricsList} in navigation.main">
                    <a class="footer__rubric-link" :href="rubricUrl">{{ rubric }}</a>
                    <ul class="footer__subrubrics">
                        <li class="footer__subrubric" v-for="{rubric, rubricUrl} in subRubricsList">
                            <a :href="rubricUrl">{{ rubric }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="footer__about">
                <a class="footer__about-title" href="/rubric-listing">О проекте</a>
                <a class="footer__about-title" href="/rubric-listing">Реклама</a>
                <div class="footer__about-texts">
                    <p class="footer__about-text">&copy;2011&nbsp;&mdash; 2017&nbsp;Охотники.&nbsp;ру&nbsp;&mdash;
                        интернет-проект
                        объединенной редакции &laquo;Охотничьи издания&raquo; ИД&nbsp;&laquo;МК&raquo;:<br/><br/>
                        Российская
                        охотничья газета и&nbsp;Охота и&nbsp;рыбалка.
                        XXI&nbsp;век.<span>info@ohotniki.&nbsp;ru<br/><br/></span><a
                                class="footer__about-link" href="#">Реклама третьих сторон</a><a
                                class="footer__about-link"
                                href="#">Правила комментирования</a><a class="footer__about-link" href="#">Контакты и
                            выходные данные</a>
                    </p>
                    <p class="footer__about-text">Все права на&nbsp;материалы, опубликованные на&nbsp;сайте www.
                        ohotniki.&nbsp;ru, принадлежат редакции и&nbsp;охраняются в&nbsp;соответствии с&nbsp;законодательством
                        РФ.<br/><br/>Использование материалов, опубликованных на&nbsp;сайте www.
                        ohotniki.&nbsp;ru&nbsp;допускается только с&nbsp;письменного разрешения правообладателя
                        и&nbsp;с&nbsp;обязательной прямой гиперссылкой на&nbsp;страницу, с&nbsp;которой материал
                        заимствован.
                        Гиперссылка должна размещаться непосредственно в&nbsp;тексте, воспроизводящем оригинальный
                        материал www.
                        ohotniki.&nbsp;ru, до&nbsp;или после цитируемого блока.</p>
                    <div class="footer__about-webrating"><img loading="lazy"
                                                              src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                                              data-src="/dev/images/webrating1.png"
                                                              alt="Изображение счетчики"/><img loading="lazy"
                                                                                               src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                                                                               data-src="/dev/images/webrating2.png"
                                                                                               alt="Изображение счетчики"/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="stylus">
.footer
	background-color primaryBg
	padding 30px
	@media ({min} sm)
		padding 30px 40px 40px
	@media ({min} md)
		padding 30px 20px

	&__container
		display grid
		grid-template-columns 1fr
		gap 30px
		@media ({min} md)
			grid-template-columns 1fr 336px
			gap 20px

	&__nav
		display grid
		grid-template-columns repeat(2, 1fr)
		column-gap 20px
		row-gap 20px

		@media ({min} sm)
			display flex
			flex-direction column
			flex-wrap wrap
			row-gap 26px

			max-height 500px

	&__rubric
		max-width 120px
		@media ({min} sm)
			max-width 157px
		@media ({min} md)
			max-width 147px
		@media ({min} xl)
			max-width 159px

		&-link
			font-size 14px
			line-height 19px
			font-weight 700
			color secondaryColor
			text-transform uppercase

			&:hover
				color primaryAccentColor

	&__subrubrics
		display none
		@media ({min} sm)
			display flex
			flex-direction column
			gap 14px

			margin-top 14px

	&__subrubric
		font-size 12px
		line-height 16px
		font-weight 400

		&:hover
			color hoverFontColor

	&__about

		&-title
			display inline-block

			margin-right 20px
			margin-bottom 16px

			color secondaryColor
			text-transform uppercase
			font-size 14px
			line-height 19px
			font-weight 700

			&:hover
				color primaryAccentColor

		&-texts
			@media ({min} sm)
				display grid
				grid-template-columns repeat(2, 1fr)
				gap 20px
			@media ({min} md)
				display block

		&-link
			display block

			font-size 11px
			line-height 16px
			font-weight 700
			color secondaryColor

			margin-bottom 6px

			&:hover
				color primaryAccentColor

		&-text
			font-size 11px
			line-height 16px
			font-weight 400

			span
				font-weight 700
				color secondaryColor

		&-webrating
			display flex
			justify-content center
			gap 5px

			grid-column 2 span

			margin-top 20px
			@media ({min} md)
				justify-content flex-end


</style>