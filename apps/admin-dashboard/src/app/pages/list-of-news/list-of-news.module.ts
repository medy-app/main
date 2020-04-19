import { ActiveComponent } from './../../components/modals/active/active.component';
import { DeleteComponent } from './../../components/modals/delete/delete.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListOfNewsComponent } from './list-of-news.component';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [{
    path: '',
    component: ListOfNewsComponent
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
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    ListOfNewsComponent,
    DeleteComponent,
    ActiveComponent
  ],
  entryComponents: [DeleteComponent, ActiveComponent]
})
export class ListOfNewsModule {}
