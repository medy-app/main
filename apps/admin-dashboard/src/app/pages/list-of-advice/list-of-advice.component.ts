import { ActiveComponent } from './../../components/modals/active/active.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser, faEdit, faTrash, faTimes, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { DeleteComponent } from 'src/app/components/modals/delete/delete.component';

export interface News {
  id: number;
  title: string;
  dataPublic: string;
  active: boolean;
  edit: boolean;
  delete: boolean;
}

const ELEMENT_DATA = [
  { id: '10', title: 'Tytuł wiadomości', dataPublic: '17/04/2020', active: false, edit: false, delete: false },
  { id: '12', title: 'Tytuł wiadomości', dataPublic: '16/04/2020', active: true, edit: false, delete: false },
  { id: '3', title: 'Tytuł wiadomości', dataPublic: '15/04/2020', active: true, edit: false, delete: false },
  { id: '4', title: 'Tytuł wiadomości', dataPublic: '14/04/2020', active: false, edit: false, delete: false },
  { id: '5', title: 'Tytuł wiadomości', dataPublic: '13/04/2020', active: true, edit: false, delete: false },
  { id: '16', title: 'Tytuł wiadomości', dataPublic: '16/04/2020', active: false, edit: false, delete: false },
  { id: '7', title: 'Tytuł wiadomości', dataPublic: '17/04/2020', active: false, edit: false, delete: false },
  { id: '8', title: 'Tytuł wiadomości', dataPublic: '16/04/2020', active: true, edit: false, delete: false },
  { id: '9', title: 'Tytuł wiadomości', dataPublic: '15/04/2020', active: true, edit: false, delete: false },
  { id: '1', title: 'Tytuł wiadomości', dataPublic: '14/04/2020', active: false, edit: false, delete: false },
  { id: '11', title: 'Tytuł wiadomości', dataPublic: '13/04/2020', active: true, edit: false, delete: false },
  { id: '2', title: 'Tytuł wiadomości', dataPublic: '16/04/2020', active: false, edit: false, delete: false },
  { id: '13', title: 'Tytuł wiadomości', dataPublic: '17/04/2020', active: false, edit: false, delete: false },
  { id: '14', title: 'Tytuł wiadomości', dataPublic: '16/04/2020', active: true, edit: false, delete: false },
  { id: '15', title: 'Tytuł wiadomości', dataPublic: '15/04/2020', active: true, edit: false, delete: false },
  { id: '6', title: 'Tytuł wiadomości', dataPublic: '14/04/2020', active: false, edit: false, delete: false },
  { id: '17', title: 'Tytuł wiadomości', dataPublic: '13/04/2020', active: true, edit: false, delete: false },
  { id: '18', title: 'Tytuł wiadomości', dataPublic: '16/04/2020', active: false, edit: false, delete: false },
];

@Component({
  selector: 'medy-main-list-of-advice',
  templateUrl: './list-of-advice.component.html',
  styleUrls: ['./list-of-advice.component.scss']
})
export class ListOfAdviceComponent implements AfterViewInit {

  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faInstagram = faInstagram;


  displayedColumns: string[] = ['Id', 'Title', 'DataPublication', 'Active', 'Edit', 'Delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private library: FaIconLibrary, public dialog: MatDialog) {
    this.library.addIcons(faUser, faEdit, faTrash, faTimes, faCheck, faPlus);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteAdvice(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '55rem',
      data: {
        data: 'advice'
      }
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     console.log('test)
    //   }
    // });
  }

  activeAdvice(): void {
    const dialogRef = this.dialog.open(ActiveComponent, {
      width: '55rem',
      data: {
        data: 'advice'
      }
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     console.log('test)
    //   }
    // });
  }

}
