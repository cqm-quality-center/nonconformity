//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { ChartsModule } from 'ng2-charts';

//components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { EmployeeComponent } from './employee/employee.component';

import { ReportComponent } from './employee/report/report.component';
import { PositionComponent } from './employee/report/position/position.component';
import { IdentificationComponent } from './employee/report/identification/identification.component';
import { ReviewComponent } from './employee/review/review.component';
import { CommunicationComponent } from './employee/communication/communication.component';
import { DocumentationComponent } from './employee/report/documentation/documentation.component';
import { DispositionComponent } from './employee/report/disposition/disposition.component';

import { StatisticsComponent } from './employee/statistics/statistics.component';
import { ProcessOwnerComponent } from './process-owner/process-owner.component';

//services
import { UserService } from './shared/user.service';
import { BarcodeService } from './shared/barcode.service';
import { NonconformityService } from './shared/nonconformity.service';
import { PusherService } from './shared/pusher.service';

//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.intercepter';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    EmployeeComponent,
    ProcessOwnerComponent,
    SignInComponent,
    PositionComponent,
    IdentificationComponent,
    DocumentationComponent,
    DispositionComponent,
    ReportComponent,
    ReviewComponent,
    CommunicationComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BarecodeScannerLivestreamModule,
    ChartsModule
  ],
  providers: [{
                provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptor,
                multi: true
              }, 
              AuthGuard, 
              UserService,
              BarcodeService,
              NonconformityService,
              PusherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
