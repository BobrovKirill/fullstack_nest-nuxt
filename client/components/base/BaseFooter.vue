<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
	name: "footer"
})
</script>

<template>
    <footer class="footer">
       
        <div class="footer__container container">
            <ul class="footer__nav">
                <li class="footer__rubric"><a class="footer__rubric-link" href="/rubric-list.html">Охота</a>
                    <ul class="footer__subrubrics">
                        <li class="footer__subrubric"><a href="/rubric-list.html">Хозяйства и общества</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Отчеты об охотах</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Кухня</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Трофеи</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Уголок манильщика</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Видеотчеты</a></li>
                    </ul>
                </li>
                <li class="footer__rubric"><a class="footer__rubric-link" href="/rubric-list.html">Оружие</a>
                    <ul class="footer__subrubrics">
                        <li class="footer__subrubric"><a href="/rubric-list.html">Гладкоствольное оружие</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Нарезное оружие</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Луки и арбалеты</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Холодное оружие</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Тиры и стрельбища</a></li>
                    </ul>
                </li>
                <li class="footer__rubric"><a class="footer__rubric-link" href="/rubric-list.html">Рыбалка</a>
                    <ul class="footer__subrubrics">
                        <li class="footer__subrubric"><a href="/rubric-list.html">Обзоры</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Ловля рыбы</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Места</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">рецепты</a></li>
                    </ul>
                </li>
                <li class="footer__rubric"><a class="footer__rubric-link" href="/rubric-list.html">Снаряжение</a>
                    <ul class="footer__subrubrics">
                        <li class="footer__subrubric"><a href="/rubric-list.html">Одежда</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">обувь</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Головные уборы</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Термобелье</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Рюкзаки</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Спальные мешки</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Палатки</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">GPS</a></li>
                    </ul>
                </li>
                <li class="footer__rubric"><a class="footer__rubric-link" href="/rubric-list.html">Транспорт</a>
                    <ul class="footer__subrubrics">
                        <li class="footer__subrubric"><a href="/rubric-list.html">Маломерные суда</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Колесная техника</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Гусеничная техника</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Лодочные моторы</a></li>
                    </ul>
                </li>
                <li class="footer__rubric"><a class="footer__rubric-link" href="/rubric-list.html">Собаки</a>
                    <ul class="footer__subrubrics">
                        <li class="footer__subrubric"><a href="/rubric-list.html">Породы</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Законодательство</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Подготовка экспертов и судей</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Выставки и испытания</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Вести с полей</a></li>
                    </ul>
                </li>
                <li class="footer__rubric"><a class="footer__rubric-link" href="/rubric-list.html">Законы</a>
                    <ul class="footer__subrubrics">
                        <li class="footer__subrubric"><a href="/rubric-list.html">Федеральные законы</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Постановления правительства</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Правила охоты</a></li>
                        <li class="footer__subrubric"><a href="/rubric-list.html">Приказы министерства природных
                            ресурсов и
                            экологии</a></li>
                    </ul>
                </li>
                <li class="footer__rubric"><a class="footer__rubric-link" href="/rubric-list.html">Стоп браконьер</a>
                    <ul class="footer__subrubrics">
                        <li class="footer__subrubric"><a href="/rubric-list.html">Сообщения о браконьерстве</a></li>
                    </ul>
                </li>
                <li class="footer__rubric"><a class="footer__rubric-link" href="/rubric-list.html">Российская охотничья
                    газета</a>
                    <ul class="footer__subrubrics">
                    </ul>
                </li>
                <li class="footer__rubric"><a class="footer__rubric-link" href="/rubric-list.html">Охота и рыбалка. XXI
                    век</a>
                    <ul class="footer__subrubrics">
                    </ul>
                </li>
            </ul>
            <div class="footer__about"><a class="footer__about-title" href="/rubric-list.html">О проекте</a><a
                    class="footer__about-title" href="/rubric-list.html">Реклама</a>
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