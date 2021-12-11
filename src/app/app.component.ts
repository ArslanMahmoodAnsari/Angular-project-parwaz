import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from './modals/user';
import { UserService } from './services/user/user-service.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
	title = 'Angular-project-parwaz';
	user?: IUser;
	mySubscriptions: Subscription = new Subscription();
	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.mySubscriptions = this.userService.getUser().subscribe((user) => {
			this.user = user;
		});
	}

	ngOnDestroy(): void {
		this.mySubscriptions.unsubscribe();
	}
}
