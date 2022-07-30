import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('popup', tpl);

export default (title, typeOfValue, value, button_title, button_id, errorText) => {
	return tpl({ title, typeOfValue, value, button_title, button_id, errorText });
}


Handlebars.registerHelper('isInput', function (value) {
	return value === 'input';
  });

Handlebars.registerHelper('isText', function (value) {
	return value === 'text';
});

Handlebars.registerHelper('isButton', function (value) {
	return value === 'button';
});