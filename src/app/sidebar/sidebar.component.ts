import { Component, OnInit } from '@angular/core';
import {
	faUserCircle,
	faTachometerAlt,
	faUser,
	faSignOutAlt,
	faStickyNote,
} from '@fortawesome/free-solid-svg-icons';
import { ISideBar } from '../modals/sidebar';

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
		},
		{
			icon: faTachometerAlt,
			title: 'Dashboard',
			isHeader: false,
		},
		{
			icon: faUser,
			title: 'User',
			isHeader: false,
		},
		{
			icon: faStickyNote,
			title: 'post',
			isHeader: false,
		},
		{
			icon: faTachometerAlt,
			title: 'Account',
			isHeader: true,
		},
		{
			icon: faUser,
			title: 'My Account',
			isHeader: false,
		},
		{
			icon: faSignOutAlt,
			title: 'Logout',
			isHeader: false,
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
