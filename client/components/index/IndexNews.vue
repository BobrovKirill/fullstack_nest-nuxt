<template>
	<section class="news">
		<h2 class="news__title container">новое</h2>
		<div class="news__body container">
			<article class="news__content">
				<div class="news__content-link">
					<a :href="newsData.generalNews.link" class="news__content-img cursor">
						<img
							v-if="newsData.generalNews.imgUrl"
							:src="newsData.generalNews.imgUrl"
							:alt="'Изображение ' + newsData.generalNews.title"
						/>
					</a>
				</div>
				<div class="news__content-header">
					<TheMeta :meta-data="generalNews.metaData"></TheMeta>
					<div class="meta dark">
						<div class="meta__date">
							<time datetime="2022-05-26">4 мая 2023&nbsp;—&nbsp;</time>
							<a href="/menslife/" rel="noopener">Мужская среда</a>
						</div>
						<div class="meta__rubric">
							<span>статья</span>
							<svg width="32" height="32">
								<use xlink:href="#icon-rubric_wright"></use>
							</svg>
						</div>
						<hr class="meta__hr" />
					</div>
				</div>
				<a :href="newsData.generalNews.link" class="cursor">
					<h3 class="news__content-title">{{ newsData.generalNews.title }}</h3>
					<p class="news__content-text">{{ newsData.generalNews.text }}</p>
				</a>
			</article>
			<div class="news__good good"></div>
			<ul class="news__listing"></ul>
			<a class="light button-icon" href="/news/"
				>все новости
				<svg width="24" height="24" class="button-icon__icon">
					<use xlink:href="#icon-arrow_small"></use>
				</svg>
			</a>
		</div>
	</section>
</template>

<script>
export default {
	name: 'IndexNews',
	props: {
		newsData: {
			type: Object,
			generalNews: {
				type: Object,
				required: true,
			},
			newsList: {
				type: Object,
				required: true,
			},
			button: {
				type: Object,
				required: true,
			},
		},
	},
	data() {
		return {
			test: 'news-foto',
			generalNews: this.newsData,
			// newsList: this.newsData.newsList,
			// button: this.newsData.button
		};
	},

	mounted() {
		console.log('kek', this.newsData.generalNews);
	},
	created() {
		console.log('created()', this.newsData.generalNews);
	},
	beforeCreate() {
		console.log('beforeCreate()', this.newsData.generalNews);
	},
	beforeMount() {
		console.log('beforeMount()', this.newsData.generalNews);
	},
	beforeUpdate() {
		console.log('beforeUpdate()', this.newsData.generalNews);
	},
	updated() {
		console.log('updated()', this.newsData.generalNews);
	},
	beforeUnmount() {
		console.log('beforeUnmount()', this.newsData.generalNews);
	},
	unmounted() {
		console.log('unmounted()', this.newsData.generalNews);
	},
	methods: {
		imgUrl(filename) {
			return new URL(`~/assets/dev/images/${filename}.png`, import.meta.url)
				.href;
		},
	},
};
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
