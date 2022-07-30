import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('signUp', tpl);

export default (props = {}) => {
	return tpl(props);
}
