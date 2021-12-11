import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/authGuard/auth.service';

const routes: Routes = [
	{
		path: 'users',
		canActivate: [AuthGuard],
		loadChildren: () => import('./features/user/user.module').then((mod) => mod.UserModule),
	},
	{
		path: 'posts',
		canActivate: [AuthGuard],
		loadChildren: () => import('./features/post/post.module').then((mod) => mod.PostModule),
	},
	{
		path: 'dashboard',
		canActivate: [AuthGuard],
		component: DashboardComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
