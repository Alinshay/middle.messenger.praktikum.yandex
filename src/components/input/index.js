import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('input', tpl);

export default (placeholder, name) => {
	return tpl({ placeholder, name });
}
