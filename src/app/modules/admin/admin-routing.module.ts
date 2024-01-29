import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NewdashboardComponent } from './components/newdashboard/newdashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HelpsComponent } from './components/helps/helps.component';
import { RtHistoryComponent } from './components/rt-history/rt-history.component';
import { ReportComponent } from './components/report/report.component';
import { ListComponent } from './components/list/list.component';
import { HistoryComponent } from './components/history/history.component';
import { SummaryComponent } from './components/summary/summary.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { AddClientComponent } from './components/add-client/add-client.component';

const routes: Routes = [
  {
    path: '',
    component: NewdashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      // {path: 'customertable', component: CustomertableComponent },
      // {path: 'dashboard', component: DashboardComponent },
      {path: 'profile ', component: ProfileComponent },
      // {path: 'header', component: HeaderComponent },
          {path:'helps', component: HelpsComponent},
          {path:'rt_history', component:RtHistoryComponent},
          {path:'report', component:ReportComponent},
          {path:'list', component:ListComponent},
          {path:'enquiry', component:EnquiryComponent},
          {path:'history', component:HistoryComponent},
          {path:'summary', component:SummaryComponent},
          { path:'add_client', component:AddClientComponent},
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
