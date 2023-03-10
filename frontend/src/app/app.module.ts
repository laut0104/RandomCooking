import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListComponent } from './pages/menu-list/menu-list.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MenuDetailComponent } from './pages/menu-detail/menu-detail.component';
import { MenuAddComponent } from './pages/menu-add/menu-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuEditComponent } from './pages/menu-edit/menu-edit.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { LiffInitComponent } from './pages/liff-init/liff-init.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    HeaderComponent,
    MenuDetailComponent,
    MenuAddComponent,
    MenuEditComponent,
    DeleteDialogComponent,
    LiffInitComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: ApiErrorInterceptor, multi: true },
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
