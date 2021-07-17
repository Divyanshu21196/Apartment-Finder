import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SortSearchComponent } from './component/sort-search/sort-search.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SortSearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    Ng2SmartTableModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
