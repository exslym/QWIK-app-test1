import { component$, useRef, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import QwikTextField from '~/components/QwikTextField';
import styles from './style.scss?inline';

export default component$(() => {
	useStylesScoped$(styles);

	const username = useRef();
	const password = useRef();

	return (
		<div class='container'>
			<div class='input'>
				<QwikTextField name='Username' reference={username} />
			</div>
			<div class='input'>
				<QwikTextField name='Password' reference={password} />
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: 'Login',
};
