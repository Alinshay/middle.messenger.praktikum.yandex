import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('avatarLg', tpl);

export default (imgSrc) => {
	return tpl({ imgSrc });
}
