import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListOfAdviceComponent } from './list-of-advice.component';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [{
    path: '',
    component: ListOfAdviceComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatDialogModule
  ],
  declarations: [
    ListOfAdviceComponent,

  ],
  entryComponents: []
})
export class ListOfAdviceModule {}
