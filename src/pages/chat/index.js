import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('chat', tpl);

export default (mode, activeChat) => {
	return tpl({ mode, activeChat });
}
