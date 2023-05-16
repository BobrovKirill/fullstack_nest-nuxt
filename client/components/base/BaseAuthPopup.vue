<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'BaseAuthPopup',
});
</script>

<template>
	<div
		class="auth-popup form-disable"
		data-site="6LeICKwjAAAAABS3NJOC1EdDhONEq50MiwAljO0l"
	>
		<div class="auth-popup__container">
			<button
				class="auth-popup__button"
				areaLabel="Закрыть меню авторизации"
			></button>
			<picture class="auth-popup__logo"
				><img
					loading="lazy"
					src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
					data-src="/static/images/ohotniki-logo.svg"
					alt="Логотип охотники.ру"
			/></picture>
			<div class="auth-popup__radio">
				<input
					id="login"
					type="radio"
					name="radio"
					value="login"
					checked="checked"
				/>
				<label for="login">Вход</label>
				<input id="auth" type="radio" name="radio" value="auth" />
				<label for="auth">Регистрация</label>
			</div>
			<form class="auth-popup__login-form login-form" method="POST">
				<label
					>Введите E-mail
					<input
						type="text"
						name="login"
						placeholder="Введите E-mail"
						required="required"
					/>
				</label>
				<label
					>Введите пароль
					<input
						type="password"
						placeholder="Введите пароль"
						name="password"
						required="required"
					/>
					<button type="button">
						<svg width="24" height="24">
							<use xlink:href="#close-eye"></use>
						</svg>
					</button>
				</label>
				<button class="login-form__forgete" type="button">
					Забыли пароль?
				</button>
				<p class="error-message"></p>
				<button
					class="dark login-btn button__large"
					type="submit"
					areaLabel="Показать еще материалов по теме"
				>
					Войти
				</button>
			</form>
			<form class="auth-popup__auth-form auth-form form-disable" method="POST">
				<label
					>Введите E-mail
					<input
						type="email"
						name="email"
						placeholder="Введите E-mail"
						required="required"
					/>
				</label>
				<label
					>Введите пароль
					<input
						type="password"
						name="password"
						placeholder="Введите пароль"
						required="required"
						min="1"
						max="128"
					/>
					<button type="button">
						<svg width="24" height="24">
							<use xlink:href="#close-eye"></use>
						</svg>
					</button>
				</label>
				<label
					>Повторите пароль
					<input
						type="password"
						name="password-confirm"
						placeholder="Повторите пароль"
						required="required"
					/>
					<button type="button">
						<svg width="24" height="24">
							<use xlink:href="#close-eye"></use>
						</svg>
					</button>
				</label>
				<p class="error-message"></p>
				<button
					class="dark auth-btn button__large"
					type="submit"
					areaLabel="Показать еще материалов по теме"
				>
					Зарегистрироваться
				</button>
			</form>
			<form class="auth-popup__forget-form forget-form form-disable">
				<h4>Восстановление пароля</h4>
				<label
					>Введите E-mail
					<input
						type="email"
						name="email"
						placeholder="Введите E-mail"
						required="required"
					/>
				</label>
				<p class="error-message">
					Пожалуйста, укажите email, который Вы использовали для входа в личный
					кабинет.Вам будет отправлено сообщение со ссылкой для создания нового
					пароля.
				</p>
				<button
					class="dark forget-btn button__large"
					type="submit"
					areaLabel="Показать еще материалов по теме"
				>
					Восстановить пароль
				</button>
			</form>
		</div>
		<!--            <script src="https://www.google.com/recaptcha/api.js?render=6LeICKwjAAAAABS3NJOC1EdDhONEq50MiwAljO0l"></script>-->
	</div>
</template>

<style lang="stylus"></style>
