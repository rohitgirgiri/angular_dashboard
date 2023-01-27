import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContentComponent } from './components/content/content.component';
import { MembersComponent } from './pages/members/members.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { TeamsComponent } from './pages/teams/teams.component';

//material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { VaultsComponent } from './pages/vaults/vaults.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatCardModule } from '@angular/material/card';
import { SettingsComponent } from './pages/settings/settings.component';
import { CompanyComponent } from './pages/company/company.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    DashboardComponent,
    KnowledgeComponent,
    MembersComponent,
    TeamsComponent,
    VaultsComponent,
    ChatsComponent,
    SettingsComponent,
    CompanyComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // material
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
