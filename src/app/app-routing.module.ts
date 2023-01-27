import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './pages/chats/chats.component';
import { CompanyComponent } from './pages/company/company.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { MembersComponent } from './pages/members/members.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { VaultsComponent } from './pages/vaults/vaults.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'knowledge', component: KnowledgeComponent },
  { path: 'members', component: MembersComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'vaults', component: VaultsComponent },
  { path: 'chats', component: ChatsComponent },
  {path:'settings', component:SettingsComponent},
  {path:'company', component:CompanyComponent},
  {path:'profile',component:MyProfileComponent},
  { path: '', redirectTo: 'knowledge', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
