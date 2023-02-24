import type { Ref } from '@builder.io/qwik';
import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { EnvelopeIcon, LockIcon, ManIcon, PeopleIcon, UserIcon } from '~/integrations/react/mui';
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
	const emailReg =
		// eslint-disable-next-line no-control-regex
		/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

	return (
		<div class='textfield' id='textfield'>
			<input
				ref={props.reference}
				onInput$={() => {
					state.value = props.reference.current?.value;
				}}
				onFocus$={() => (state.showPlaceholder = true)}
				onFocusout$={() => {
					if (state.value.length > 0) {
						state.showPlaceholder = false;
					}
				}}
				class={
					props.name === 'Username' || props.name === 'First name' || props.name === 'Last name'
						? state.value.length === 0
							? ''
							: state.value.length > 3
							? 'valid'
							: 'invalid'
						: props.name === 'Email'
						? state.value.length > 0
							? state.value.match(emailReg)
								? 'valid'
								: 'invalid'
							: ''
						: state.value.length > 0
						? state.value.match(passwordReg)
							? 'valid'
							: 'invalid'
						: ''
				}
			/>
			<span>
				{props.name === 'Username' ? (
					<UserIcon />
				) : props.name === 'First name' ? (
					<ManIcon />
				) : props.name === 'Last name' ? (
					<PeopleIcon />
				) : props.name === 'Password' || props.name === 'Confirm password' ? (
					<LockIcon />
				) : (
					<EnvelopeIcon />
				)}
			</span>
			{state.showPlaceholder ? <label for='textfield'>{`${props.name}`}</label> : <div></div>}
			<div class='underline'></div>
		</div>
	);
});

export const head: DocumentHead = {
	title: 'Login',
};
