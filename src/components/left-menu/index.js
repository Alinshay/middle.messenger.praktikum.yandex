import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('leftMenu', tpl);

export default (mode) => {
	return tpl({ mode });
}
