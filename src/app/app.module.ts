import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/authGuard/auth.service';

@NgModule({
	declarations: [AppComponent, SidebarComponent, HeaderComponent, DashboardComponent],
	imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
	providers: [AuthGuard],
	bootstrap: [AppComponent],
})
export class AppModule {}
