import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('profile', tpl);

export default (page) => {
	return tpl({page});
}


Handlebars.registerHelper('isInfo', function (value) {
	return value === 'info';
  });

Handlebars.registerHelper('isChangePassword', function (value) {
	return value === 'changePassword';
});

Handlebars.registerHelper('isChangeInfo', function (value) {
	return value === 'changeInfo';
});