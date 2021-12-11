import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{
		path: 'users',
		loadChildren: () => import('./features/user/user.module').then((mod) => mod.UserModule),
	},
	{
		path: 'posts',
		loadChildren: () => import('./features/post/post.module').then((mod) => mod.PostModule),
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
