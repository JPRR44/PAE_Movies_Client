import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
        validators: this.compararPasswords.bind(this)
      });
  }

  createUser() {
    if (this.form.valid) {
      console.log("Crear usuario...")
    } else {
      console.log("Te faltan datos...");
    }
  }

  //Methot to compare passwords in order to confirm validators
  compararPasswords() {
    //If there is no form at all, do nothing
    if(!this.form) { return; } 
    //Compare both passwords
    const values = this.form.getRawValue();
    if (values.password === values.confirmPassword) {
      return null;
    }
    else {
      return { mismatch: true }
    }
  }
}
