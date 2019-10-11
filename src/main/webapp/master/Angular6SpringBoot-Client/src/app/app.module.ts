import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateApplicationComponent } from './create-application/create-application.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CreateApplicationComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    ApplicationDetailsComponent,
    ApplicationsListComponent,
    SearchCustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
