import tpl from './index.hbs';
import './style.css';

import signIn from './pages/sing-in';
import signUp from './pages/sign-up';
import errorPage from './pages/error-page'
import profile from './pages/profile';
import chat from './pages/chat';
import chatWithPopup from './pages/chat-with-popup'; //для демонстрации
import profileWithPopup from './pages/profile-with-popup' //для демонстрации

import buttonMain from './components/button-main';
import textWithLink from './components/text-with-link';
import searchPanel from './components/search-panel';
import messageInput from './components/message-input';
import buttonFullScreen from './components/button-full-screen';
import leftMenu from './components/left-menu';
import avatarLg from './components/avatar-lg';
import avatarSm from './components/avatar-sm';
import buttonLink from './components/button-link';
import input from './components/input';

import title from './components/title';
import chatMenu from './components/chat-navbar';
import messageList from './components/message-list';
import popup from './components/popup';
import chatList from './components/chat-list';
import table from './components/table';
import messages from './stub/message-list';
import chats from './stub/chat-list';

const profileInfo = {
	rows: [
	{
		title: 'Email',
		value: 'profile@email.ru',
		name: 'email'
	},
	{
		title: 'Login',
		value: 'Lexxxx',
		name: 'login'
	},
	{
		title: 'First name',
		value: 'Lex',
		name: 'first_name'
	},
	{
		title: 'Last name',
		value: 'Ivanov',
		name: 'second_name'
	},
	{
		title: 'Display name',
		value: 'Lexxxx',
		name: 'display_name'
	},
	{
		title: 'Phone number',
		value: '+79011234567',
		name: 'phone'
	}
]}

const profilePasswordData = {
	rows: [{
		title: 'Old password',
		value: '',
		name: 'oldPassword'
	},
	{
		title: 'New password',
		value: '',
		name: 'newPassword'
	},
	{
		title: 'Repeat new password',
		value: '',
		name: 'repeatNewPassword'
	}]
}


document.getElementById('root').innerHTML = tpl({
	//chat
	chatMenu: chatMenu('Lex'),
	chatList: chatList(chats),
	chatListSearch: chatList(chats, 'search'),
	messageList: messageList(messages),

	//profile
	profileInfoTable: table(profileInfo),
	profileChangePasswordTable: table(profilePasswordData, 'edit'),
	profileChangeInfoTable: table(profileInfo, 'edit'),
	profileTitleName: title('Lex'),

	//popup
	popupAddChat: popup('Add chat','input', 'Login', 'Add', 'add'),
	popupDeleteChat: popup('Delete chat','input', 'DeleteLogin', 'delete', 'delete'),
	popupUploadTheFile: popup('UPLOAD THE FILE', 'button', 'Chose on computer', 'Change', 'change', 'Choose a file')
});

