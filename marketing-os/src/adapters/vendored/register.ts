import { coreyWrappers } from './corey/register.js';
import { kimWrappers } from './kim/register.js';
import { kostjaWrappers } from './kostja/register.js';
import { typefullyWrappers } from './typefully/register.js';

export const vendoredWrappers = [...coreyWrappers, ...kimWrappers, ...kostjaWrappers, ...typefullyWrappers];
