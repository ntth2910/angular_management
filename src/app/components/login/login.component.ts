import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  isSubmit = false;
  constructor(private authService: AuthServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  get formData(){
    return this.formGroup.controls;
  }

  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6),Validators.maxLength(40)])
    });
  }

  loginProces() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value)
        .subscribe(result => {


          if (result) {
            console.log(result);
            this.router.navigate(['/users']);
            alert("Login successfully!");
          }
        }, error => {
          console.log(error);
alert("login failed");
        })

    }

  }
  disableButton = ()=>{
    return Boolean(this.formData.email.errors || this.formData.password.errors)
  }

}
