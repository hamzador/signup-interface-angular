import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../service/user.service";
import {User} from "../models/user";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
   userForm!: FormGroup;

  constructor(private form: FormBuilder, private userService: UserService) {
    this.buildForm();
   };

  createUser(userForm: any) {
    console.log('form', this.userForm.value);
    let user :  User = this.userForm.value;
    this.userService.createUser(user).subscribe(data => {
      console.log("l'utilisateur avec l'email %s est bien sauvgarder", user.email);
    });
  }

  public buildForm() {
    this.userForm = this.form.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      conformPassword: ["", [Validators.required]],
    });
  }



}
