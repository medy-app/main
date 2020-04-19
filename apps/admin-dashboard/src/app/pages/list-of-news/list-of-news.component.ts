import { ActiveComponent } from './../../components/modals/active/active.component';
import { DeleteComponent } from './../../components/modals/delete/delete.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser, faEdit, faTrash, faTimes, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

export interface News {
  id: string;
  title: string;
  dataPublic: string;
  active: boolean;
  edit: boolean;
  delete: boolean;
}

const ELEMENT_DATA: News[] = [
  { id: '1', title: 'Tytuł wiadomości', dataPublic: '17/04/2020', active: false, edit: false, delete: false },
  { id: '2', title: 'Tytuł wiadomości', dataPublic: '16/04/2020', active: true, edit: false, delete: false },
  { id: '3', title: 'Tytuł wiadomości', dataPublic: '15/04/2020', active: true, edit: false, delete: false },
  { id: '4', title: 'Tytuł wiadomości', dataPublic: '14/04/2020', active: false, edit: false, delete: false },
  { id: '5', title: 'Tytuł wiadomości', dataPublic: '13/04/2020', active: true, edit: false, delete: false },
  { id: '6', title: 'Tytuł wiadomości', dataPublic: '16/04/2020', active: false, edit: false, delete: false },
  { id: '7', title: 'Tytuł wiadomości', dataPublic: '17/04/2020', active: false, edit: false, delete: false },
  { id: '8', title: 'Tytuł wiadomości', dataPublic: '16/04/2020', active: true, edit: false, delete: false },
  { id: '9', title: 'Tytuł wiadomości', dataPublic: '15/04/2020', active: true, edit: false, delete: false },
  { id: '10', title: 'Tytuł wiadomości', dataPublic: '14/04/2020', active: false, edit: false, delete: false },
  { id: '11', title: 'Tytuł wiadomości', dataPublic: '13/04/2020', active: true, edit: false, delete: false },
  { id: '12', title: 'Tytuł wiadomości', dataPublic: '16/04/2020', active: false, edit: false, delete: false },
  { id: '13', title: 'Tytuł wiadomości', dataPublic: '17/04/2020', active: false, edit: false, delete: false },
  { id: '14', title: 'Tytuł wiadomości', dataPublic: '16/04/2020', active: true, edit: false, delete: false },
  { id: '15', title: 'Tytuł wiadomości', dataPublic: '15/04/2020', active: true, edit: false, delete: false },
  { id: '16', title: 'Tytuł wiadomości', dataPublic: '14/04/2020', active: false, edit: false, delete: false },
  { id: '17', title: 'Tytuł wiadomości', dataPublic: '13/04/2020', active: true, edit: false, delete: false },
  { id: '18', title: 'Tytuł wiadomości', dataPublic: '16/04/2020', active: false, edit: false, delete: false },
];

@Component({
  selector: 'medy-main-list-of-news',
  templateUrl: './list-of-news.component.html',
  styleUrls: ['./list-of-news.component.scss']
})
export class ListOfNewsComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Title', 'DataPublication', 'Active', 'Edit', 'Delete'];
  dataSource: MatTableDataSource<News>;

  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faInstagram = faInstagram;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private library: FaIconLibrary, public dialog: MatDialog) {
    this.library.addIcons(faUser, faEdit, faTrash, faTimes, faCheck, faPlus);
  }

  ngOnInit () {
    this.dataSource = new MatTableDataSource();
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  deleteNew(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '55rem',
      data: {
        data: 'news'
      }
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     console.log('test)
    //   }
    // });
  }

  activeNew(): void {
    const dialogRef = this.dialog.open(ActiveComponent, {
      width: '55rem',
      data: {
        data: 'news'
      }
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     console.log('test)
    //   }
    // });
  }

}
