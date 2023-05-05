<template>
    <section class="news"><h2 class="news__title container">новое</h2>
        <div class="news__body container">
            <article class="news__content">
                <div class="news__content-link">
                    <a
                        :href="generalNews.link"
                        class="news__content-img cursor">
                    <img v-if="generalNews.imgUrl"
                        :src="generalNews.imgUrl"
                        :alt="'Изображение ' + generalNews.title">
                    </a>
                </div>
                <div class="news__content-header">
                    <TheMeta :meta-data="generalNews.metaData"></TheMeta>
                    <div class="meta dark">
                        <div class="meta__date">
                            <time datetime="2022-05-26">4 мая 2023&nbsp;—&nbsp;</time>
                            <a href="/menslife/" rel="noopener">Мужская среда</a></div>
                        <div class="meta__rubric"><span>статья</span>
                            <svg width="32" height="32">
                                <use xlink:href="#icon-rubric_wright"></use>
                            </svg>
                        </div>
                        <hr class="meta__hr">
                    </div>
                </div>
                <a :href="generalNews.link"
                   class="cursor">
                    <h3 class="news__content-title">{{generalNews.title}}</h3>
                    <p class="news__content-text">{{generalNews.text}}</p>
                </a>
            </article>
            <div class="news__good good"></div>
            <ul class="news__listing">
                <li class="listing-item">
                    <div class="meta dark">
                        <div class="meta__date">
                            <time datetime="2022-05-26">4 мая 2023&nbsp;—&nbsp;</time>
                            <a href="/news/" rel="noopener">Новости</a></div>
                        <div class="meta__rubric"><span>новость</span>
                            <svg width="32" height="32">
                                <use xlink:href="#icon-rubric_wright"></use>
                            </svg>
                        </div>
                        <hr class="meta__hr">
                    </div>
                    <a href="/hunting/news/2023/05/04/663564-kogda-garri-vstretil-salli-dva-mopsa-nedelyami-poedali-trup-hozyaina.html"
                       class="cursor"><h4 class="listing-item__title cursor">«Когда Гарри встретил Салли»: два мопса
                        неделями поедали труп хозяина</h4></a></li>
                <li class="listing-item">
                    <div class="meta dark">
                        <div class="meta__date">
                            <time datetime="2022-05-26">4 мая 2023&nbsp;—&nbsp;</time>
                            <a href="/news/" rel="noopener">Новости</a></div>
                        <div class="meta__rubric"><span>новость</span>
                            <svg width="32" height="32">
                                <use xlink:href="#icon-rubric_wright"></use>
                            </svg>
                        </div>
                        <hr class="meta__hr">
                    </div>
                    <a href="/hunting/news/2023/05/04/663563-opasnaya-infektsiya-v-yugre-u-severnogo-olenya-vyiyavlen-brutsellez.html"
                       class="cursor"><h4 class="listing-item__title cursor">Опасная инфекция в Югре: у северного
                        оленя выявлен бруцеллез</h4></a></li>
                <li class="listing-item">
                    <div class="meta dark">
                        <div class="meta__date">
                            <time datetime="2022-05-26">4 мая 2023&nbsp;—&nbsp;</time>
                            <a href="/news/" rel="noopener">Новости</a></div>
                        <div class="meta__rubric"><span>новость</span>
                            <svg width="32" height="32">
                                <use xlink:href="#icon-rubric_wright"></use>
                            </svg>
                        </div>
                        <hr class="meta__hr">
                    </div>
                    <a href="/hunting/news/2023/05/04/663562-lipovyiy-zveroboy-pod-bryanskom-inspektsiya-ostanovila-uazbobrovoz.html"
                       class="cursor"><h4 class="listing-item__title cursor">Липовый зверобой: под Брянском
                        инспекция остановила «УАЗ-бобровоз»</h4></a></li>
                <li class="listing-item">
                    <div class="meta dark">
                        <div class="meta__date">
                            <time datetime="2022-05-26">4 мая 2023&nbsp;—&nbsp;</time>
                            <a href="/news/" rel="noopener">Новости</a></div>
                        <div class="meta__rubric"><span>новость</span>
                            <svg width="32" height="32">
                                <use xlink:href="#icon-rubric_wright"></use>
                            </svg>
                        </div>
                        <hr class="meta__hr">
                    </div>
                    <a href="/hunting/news/2023/05/04/663561-dikiy-ohotnik-v-habarovskih-lesah-sobaku-izreshetili-drobyu.html"
                       class="cursor"><h4 class="listing-item__title cursor">Дикий охотник: в хабаровских лесах
                        собаку изрешетили дробью</h4></a></li>
                <li class="listing-item">
                    <div class="meta dark">
                        <div class="meta__date">
                            <time datetime="2022-05-26">4 мая 2023&nbsp;—&nbsp;</time>
                            <a href="/news/" rel="noopener">Новости</a></div>
                        <div class="meta__rubric"><span>новость</span>
                            <svg width="32" height="32">
                                <use xlink:href="#icon-rubric_wright"></use>
                            </svg>
                        </div>
                        <hr class="meta__hr">
                    </div>
                    <a href="/hunting/news/2023/05/04/663560-ryazanskiy-myasnik-ubil-kosulyu-na-glazah-u-detey.html"
                       class="cursor"><h4 class="listing-item__title cursor">Рязанский мясник убил косулю на глазах
                        у детей</h4></a></li>
                <li class="listing-item">
                    <div class="meta dark">
                        <div class="meta__date">
                            <time datetime="2022-05-26">4 мая 2023&nbsp;—&nbsp;</time>
                            <a href="/news/" rel="noopener">Новости</a></div>
                        <div class="meta__rubric"><span>новость</span>
                            <svg width="32" height="32">
                                <use xlink:href="#icon-rubric_wright"></use>
                            </svg>
                        </div>
                        <hr class="meta__hr">
                    </div>
                    <a href="/hunting/news/2023/05/04/663559-shodili-na-kabana-v-slovakii-ohotniki-spasalis-strelboy-ot-medvedya.html"
                       class="cursor"><h4 class="listing-item__title cursor">Сходили на кабана: в Словакии охотники
                        спасались стрельбой от медведя</h4></a></li>
            </ul>
            <a class="light button-icon" href="/news/">все новости
                <svg width="24" height="24" class="button-icon__icon">
                    <use xlink:href="#icon-arrow_small"></use>
                </svg>
            </a></div>
    </section>
</template>

<script>
export default {
    name: "news",
    props: {
        newsData: Object
    },
    data(){
        return {
            generalNews: this.newsData.generalNews,
            newsList: this.newsData.newsList,
            button: this.newsData.button
        }
    }
}
</script>

<style lang="stylus">
.news
	grid-area news
	background-image url(/static/images/main-bg.png)
	background-repeat no-repeat
	background-size cover
	background-position center

	padding 35px 0 30px

	&__title
		padding 0 0 20px

		font-family: 'Verdana'
		font-size 16px
		line-height 19px
		font-weight 700
		color #FFFFFF
		text-transform uppercase
		text-align center
		@media ({min}: sm)
			padding 0 0 20px 40px

			text-align left

	&__body
		display grid
		grid-template-areas "content"\
		"listing"\
		"btn"\
		"ad"
		grid-template-columns 1fr
		grid-template-rows repeat(4, auto)
		column-gap 21px
		row-gap 20px
		@media ({min}: sm)
			grid-template-areas "content content"\
			"listing ad"\
			"btn btn"
			grid-template-columns auto 353px
			grid-template-rows repeat(3, auto)
		@media ({min}: md)
			grid-template-columns 628px 336px
		@media ({min}: xl)
			grid-template-areas "content ad"\
			"listing listing"\
			"btn btn"
			grid-template-columns 773px 336px
		@media ({min}: xxl)
			grid-template-columns 1127px 336px


	&__content
		grid-area content
		display grid
		grid-template-columns 1fr
		grid-template-rows auto auto auto 1fr

		background-color #fff
		border-radius 10px

		padding 20px 20px 60px
		@media ({min}: sm)
			grid-template-columns 231px 1fr
			grid-template-rows auto auto 1fr
			column-gap 21px

			padding 40px 40px 60px
		@media ({min}: md)
			grid-template-columns 326px 1fr
		@media ({min}: xl)
			padding 40px 40px 95px

		&-link
			@media ({min}: sm)
				grid-row 3 span

		&-img
			display block

			height calc((100vw - 20px - 10px) * 0.67)

			background-image url('/static/images/placeholder.webp')
			background-repeat no-repeat
			background-position center center
			background-size cover

			overflow hidden
			@media ({min}: sm)
				height 172px
			@media ({min}: md)
				height 244px
			@media ({min}: xxl)
				height 250px

			img
				width 100%
				height 100%

				object-fit cover
				object-position center center

				transition transform 0.6s

			&:hover
				img
					transform scale(1.2)

		&-header
			margin 0 0 12px

		&-title
			font-size 26px
			line-height 32px
			font-weight 700
			color secondaryColor
			font-family: "Roboto", sans-serif;
			@media ({min} sm)
				font-size 32px
				line-height 36px
			@media ({min} md)
				font-size 36px
				line-height 40px
			@media ({min} xl)
				font-size 32px
			@media ({min} xxl)
				font-size 44px
				line-height 52px

		a:hover
			.news__content-title
				color hoverFontColor

		&-text
			line-height 24px
			font-weight 400

			margin-top 12px
			@media ({min} xl)
				font-size 18px
				line-height 28px
			@media ({min} xxl)
				font-size 20px
				line-height 30px


	&__good
		grid-area ad

		padding 40px 0 70px

		background-color #fff
		border-radius 10px

	&__listing
		grid-area listing
		display grid
		grid-template-columns 1fr
		gap 30px

		padding 40px 0 60px

		background-color #fff
		border-radius 10px
		@media ({min} sm)
			gap 40px

			padding 40px 20px 60px
		@media ({min} md)
			padding 40px 30px 60px
		@media ({min} xl)
			padding 40px 40px 80px

			grid-template-columns repeat(3, 1fr)


	.button-icon
		grid-area btn
		margin 0 auto
</style>