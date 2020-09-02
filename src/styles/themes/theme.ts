// Styles
import light from 'styles/themes/light';
import dark from 'styles/themes/dark';

// Types
import type { Light } from 'styles/themes/light';
import type { Dark } from 'styles/themes/dark';

type Mode = 'dark' | 'light';
type Theme = Light | Dark;

const theme = (mode: Mode): Theme => (mode === 'dark' ? dark : light);

export type { Theme };

export default theme;
