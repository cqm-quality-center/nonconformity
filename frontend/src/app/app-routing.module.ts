import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { EmployeeComponent } from './employee/employee.component';

import { ReportComponent } from './employee/report/report.component';
import { PositionComponent } from './employee/report/position/position.component';
import { IdentificationComponent } from './employee/report/identification/identification.component';
import { DocumentationComponent } from './employee/report/documentation/documentation.component';
import { DispositionComponent } from './employee/report/disposition/disposition.component';

import { ReviewComponent } from './employee/review/review.component';

import { CommunicationComponent } from './employee/communication/communication.component';

import { StatisticsComponent } from './employee/statistics/statistics.component';

import { ProcessOwnerComponent } from './process-owner/process-owner.component';

import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { 
    path: 'signup', component: UserComponent, 
    children: [{path: '', component: SignUpComponent }]
  },
  { 
    path: 'login', component: UserComponent, 
    children: [{path: '', component: SignInComponent }]
  },
  { 
    path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard],
    children: 
    [
      {path:'report', component: ReportComponent, 
      children: 
        [
        {path:'onPosition', component: PositionComponent},
        {path:'onIdentification', component: IdentificationComponent},
        {path:'onDocumentation', component: DocumentationComponent},
        {path:'onDisposition', component: DispositionComponent},   
        ]
      },
      {path:'review', component: ReviewComponent },
      {path:'statistics', component: StatisticsComponent},
      {path:'communication', component: CommunicationComponent },
    ]
  },
  { 
    path: 'processowner', component: ProcessOwnerComponent, canActivate: [AuthGuard]
  }, 
  { 
    path: '', redirectTo: '/login', pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
