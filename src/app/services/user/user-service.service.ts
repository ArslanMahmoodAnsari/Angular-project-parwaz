import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/modals/user';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	userSubject?: BehaviorSubject<IUser>;
	user$: Observable<IUser>;

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
	}

	logout() {
		this.userSubject?.next({
			name: '',
			role: '',
		});
	}

	getUser(): Observable<IUser> {
		return this.user$;
	}
}
