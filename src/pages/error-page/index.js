import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('errorPage', tpl);

export default (props = {}) => {
	return tpl(props);
}
