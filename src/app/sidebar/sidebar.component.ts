import { Component, Input, OnInit } from '@angular/core';
import {
	faUserCircle,
	faTachometerAlt,
	faUser,
	faSignOutAlt,
	faStickyNote,
} from '@fortawesome/free-solid-svg-icons';
import { ISideBar } from '../modals/sidebar';
import { IUser } from '../modals/user';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
	faUserCircle = faUserCircle;
	sideBarItems: ISideBar[] = [
		{
			icon: faTachometerAlt,
			title: 'APP',
			isHeader: true,
			route: '',
		},
		{
			icon: faTachometerAlt,
			title: 'Dashboard',
			isHeader: false,
			route: 'dashboard',
		},
		{
			icon: faUser,
			title: 'User',
			isHeader: false,
			route: 'users',
		},
		{
			icon: faStickyNote,
			title: 'post',
			isHeader: false,
			route: 'posts',
		},
		{
			icon: faTachometerAlt,
			title: 'Account',
			isHeader: true,
			route: '',
		},
		{
			icon: faUser,
			title: 'My Account',
			isHeader: false,
			route: 'account',
		},
		{
			icon: faSignOutAlt,
			title: 'Logout',
			isHeader: false,
			route: '',
		},
	];

	@Input()
	user?: IUser;

	constructor() {}

	ngOnInit(): void {}
}
