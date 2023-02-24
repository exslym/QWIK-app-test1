/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import { Alert, Box, Button, Slider, TextField } from '@mui/material';
import { BsPeopleFill } from 'react-icons/bs/index';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa/index';
import { IoMdMan } from 'react-icons/io/index';

export const MUIButton = qwikify$(Button);
export const MUIAlert = qwikify$(Alert);
export const MUISlider = qwikify$(Slider, { eagerness: 'hover' });
export const MUITextField = qwikify$(TextField);
export const MUIBox = qwikify$(Box);
export const UserIcon = qwikify$(FaUser);
export const LockIcon = qwikify$(FaLock);
export const EnvelopeIcon = qwikify$(FaEnvelope);
export const PeopleIcon = qwikify$(BsPeopleFill);
export const ManIcon = qwikify$(IoMdMan);
