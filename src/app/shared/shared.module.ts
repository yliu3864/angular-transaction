import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatInputModule,
  MatGridListModule,
  MatRadioModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatTabsModule,
  MatTableModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatTabsModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule
  ],
  entryComponents: []
})
export class SharedModule {}
