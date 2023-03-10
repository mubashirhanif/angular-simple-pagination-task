import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FetchdataService } from './fetchdata.service';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxPaginationModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [FetchdataService],
})
export class AppModule {}
