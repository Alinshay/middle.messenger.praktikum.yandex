import Handlebars from 'handlebars';
import tpl from './tpl.hbs';

Handlebars.registerPartial('signIn', tpl);

export default (props = {}) => {
	return tpl(props);
}
