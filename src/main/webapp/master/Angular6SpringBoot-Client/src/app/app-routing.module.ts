import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateApplicationComponent } from './create-application/create-application.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';

const routes: Routes = [
    { path: '', redirectTo: 'customer', pathMatch: 'full' },
    { path: 'customer', component: CustomersListComponent },
    { path: 'add', component: CreateCustomerComponent },
    { path: 'findbyage', component: SearchCustomersComponent },
  { path: 'application', component: ApplicationsListComponent },
  { path: 'addApplication', component: CreateApplicationComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
