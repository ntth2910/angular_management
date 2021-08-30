import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../../common/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  form!: FormGroup;
  submitted = false;



  currentUser: User={
    id: 1,
    fullname:'',
    email:'',
    password:'',
    isAdmin:1
  };
  message='';

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,

    // public actRoute : ActivatedRoute,

  ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params.id;
    this.retrieveUserById(id);

    console.log(id);

    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        isAdmin: [false, Validators.requiredTrue]
      }
    )

  }
  retrieveUserById(id: any): void {
    this.userService.getUserById(id)
      .subscribe(
        (data: any) => {
          this.currentUser = data;
          console.log(data);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  updateUser(): void {
    this.message = '';

    this.userService.update(this.currentUser.id, this.currentUser)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This user was updated successfully!';
          alert( this.message);
        },
        error => {
          console.log(error);
        });
  }

    onSubmit(): void {
      this.submitted = true;

      if (this.form.invalid) {
        return;
      }

    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
    this.router.navigate(['/users']);
  }

}
