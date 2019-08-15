import { Button, ButtonGroup } from '@rocket.chat/fuselage';
import React from 'react';

import { useTranslation } from '../../hooks/useTranslation';

export function Pager({ disabled, onBackClick, isContinueEnabled = true }) {
	const t = useTranslation();

	return <ButtonGroup align='start'>
		{onBackClick ? <Button type='button' disabled={disabled} onClick={onBackClick}>
			{t('Back')}
		</Button> : null}
		<Button type='submit' primary disabled={!isContinueEnabled || disabled}>
			{t('Continue')}
		</Button>
	</ButtonGroup>;
}