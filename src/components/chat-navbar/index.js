import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('chatMenu', tpl);

export default (name) => {
	return tpl({ name });
}
