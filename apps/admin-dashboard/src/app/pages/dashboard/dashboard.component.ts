import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Information {
  title: string;
  date: string;
  link: string;
  content: string;
}

const DATA: Information[] = [
  {
    title: 'Wiadomość o wirusie 1',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 2',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 3',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 4',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 5',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 6',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 7',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 8',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 9',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 10',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 10',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 10',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 11',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 12',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 13',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 14',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 15',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Wiadomość o wirusie 16',
    date: '01.04.2020',
    link: 'www.adresstrony.pl',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  error = false;
  loading: boolean = false;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Information> = new MatTableDataSource<Information>(DATA);


  constructor(fb: FormBuilder, private changeDetectorRef: ChangeDetectorRef) {
    this.form = fb.group({
      title: ['', [Validators.required, Validators.maxLength(64)]],
      link: ['', [Validators.required, Validators.maxLength(64)]],
      date: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  get formStatus() {
    return this.form.controls;
  }


  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  async onSubmit() {
    this.submitted = true;
    this.error = null;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    const data = {
      email: this.form.value.email,
      password: this.form.value.pass
    };

    this.form.reset();
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).setErrors(null);
    });
  }


}
