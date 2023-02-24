import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './style.scss?inline';

export default component$(() => {
	useStylesScoped$(styles);
	return <div></div>;
});

export const head: DocumentHead = {
	title: 'Register',
};
