import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('buttonLink', tpl);

export default (title, id, mode) => {
	return tpl({ title, id, mode });
}
