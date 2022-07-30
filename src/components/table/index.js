import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('table', tpl);

export default (context, mode) => {
	return tpl({context, mode});
}
