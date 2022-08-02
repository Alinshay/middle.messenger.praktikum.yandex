import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('messageList', tpl);

export default (context) => {
	return tpl(context);
}
