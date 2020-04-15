import { Component, OnInit } from '@angular/core';
import { faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faInstagram = faInstagram;

  form: FormGroup;
  submitted = false;
  error = false;
  loading: boolean = false;


  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(30)]],
      pass: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    });
  }

  get formStatus() {
    return this.form.controls;
  }

  ngOnInit() { }


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
