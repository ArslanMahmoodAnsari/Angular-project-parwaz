import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/modals/user';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	userSubject?: BehaviorSubject<IUser>;
	user$: Observable<IUser>;
	loggedIn: boolean = false;
	constructor() {
		this.userSubject = new BehaviorSubject<IUser>({
			name: '',
			role: '',
		});
		this.user$ = this.userSubject.asObservable();
	}

	login() {
		this.userSubject?.next({
			name: 'Alina',
			role: 'Admin',
		});
		this.loggedIn = true;
	}

	logout() {
		this.userSubject?.next({
			name: '',
			role: '',
		});
		this.loggedIn = false;
	}

	getUser(): Observable<IUser> {
		return this.user$;
	}

	isAuthenticated(): boolean {
		return this.loggedIn;
	}
}
