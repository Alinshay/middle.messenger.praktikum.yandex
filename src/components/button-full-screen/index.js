import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('buttonFullScreen', tpl);

export default (id) => {
	return tpl({ id });
}
