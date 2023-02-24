import type { Ref } from '@builder.io/qwik';
import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { EnvelopeIcon, LockIcon, UserIcon } from '~/integrations/react/mui';
import styles from './style.scss?inline';

interface TextFieldProps {
	name: String;
	reference: Ref<Element>;
}

export default component$((props: TextFieldProps) => {
	useStylesScoped$(styles);

	const state = useStore({
		value: '',
		showPlaceholder: true,
		isValid: true,
	});

	const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
	return (
		<div class='textfield' id='textfield'>
			<input
				ref={props.reference}
				onInput$={(e: InputEvent) => {
					if (e.data === null) {
						state.value = state.value.slice(0, -1);
					} else {
						state.value += e.data;
					}
				}}
				onFocus$={() => (state.showPlaceholder = true)}
				onFocusout$={() => {
					if (state.value.length > 0) {
						state.showPlaceholder = false;
					}
				}}
				class={
					props.name === 'Username'
						? state.value.length === 0
							? ''
							: state.value.length > 3
							? 'valid'
							: 'invalid'
						: state.value.length > 0
						? state.value.match(passwordReg)
							? 'valid'
							: 'invalid'
						: ''
				}
			/>
			<span>{props.name === 'Username' ? <UserIcon /> : <LockIcon />}</span>
			{state.showPlaceholder ? <label for='textfield'>{`${props.name}`}</label> : <div></div>}
			<div class='underline'></div>
		</div>
	);
});

export const head: DocumentHead = {
	title: 'Login',
};
