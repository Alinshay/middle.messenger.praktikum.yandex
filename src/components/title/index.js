import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('title', tpl);

export default (value) => {
	return tpl({ value });
}
