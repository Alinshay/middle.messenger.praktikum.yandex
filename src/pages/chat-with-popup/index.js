import Handlebars from 'handlebars';
import tpl from './tpl.hbs';

Handlebars.registerPartial('chatWithPopup', tpl);

export default (props = {}) => {
	return tpl(props);
}
