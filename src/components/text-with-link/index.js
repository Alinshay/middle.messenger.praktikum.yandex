import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('textWithLink', tpl);

export default (text, linkText, linkRef) => {
	return tpl({ text, linkText, linkRef });
}
