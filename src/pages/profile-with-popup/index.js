import Handlebars from 'handlebars';
import tpl from './tpl.hbs';

Handlebars.registerPartial('profileWithPopup', tpl);

export default (props = {}) => {
	return tpl(props);
}
