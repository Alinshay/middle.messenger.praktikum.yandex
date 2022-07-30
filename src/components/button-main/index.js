import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('buttonMain', tpl);

export default (title, id) => {
	return tpl({ title, id });
}
