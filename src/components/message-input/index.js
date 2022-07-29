import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('messageInput', tpl);

export default () => {
	return tpl();
}
