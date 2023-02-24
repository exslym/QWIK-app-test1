import { component$, useRef, useStore, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import QwikTextField from '~/components/QwikTextField';
import { MUIAlert } from '~/integrations/react/mui';
import styles from './style.scss?inline';

export default component$(() => {
	useStylesScoped$(styles);

	const state = useStore({
		severity: 'error',
		message: 'Error Message',
		showMessage: false,
	});

	const username = useRef();
	const password = useRef();
	const firstName = useRef();
	const lastName = useRef();
	const email = useRef();
	const confirmPassword = useRef();

	return (
		<>
			<div class='container'>
				<div class='input'>
					<QwikTextField name='First name' reference={firstName} />
				</div>
				<div class='input'>
					<QwikTextField name='Last name' reference={lastName} />
				</div>
				<div class='input'>
					<QwikTextField name='Email' reference={email} />
				</div>
				<div class='input'>
					<QwikTextField name='Username' reference={username} />
				</div>
				<div class='input'>
					<QwikTextField name='Password' reference={password} />
				</div>
				<div class='input'>
					<QwikTextField name='Confirm password' reference={confirmPassword} />
				</div>
				<button
					class='button'
					onClick$={() => {
						if (password.current?.value !== confirmPassword.current?.value) {
							state.message = 'Password do not match';
							state.showMessage = true;
							return;
						}
					}}
				>
					Sign up
				</button>
			</div>
			{state.showMessage ? (
				<MUIAlert severity={`${state.severity}` as any}>{`${state.message}`}</MUIAlert>
			) : (
				''
			)}
		</>
	);
});

export const head: DocumentHead = {
	title: 'Register',
};
