import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../modals/user';
import { UserService } from '../services/user/user-service.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
	@Input()
	user?: IUser;
	constructor(private userService: UserService) {}

	ngOnInit(): void {}

	signIn() {
		this.userService.login();
	}

	signOut() {
		this.userService.logout();
	}
}
