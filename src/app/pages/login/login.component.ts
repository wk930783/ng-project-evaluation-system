import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  titleForBar = '專題評分管理系統';
  paramsForLogin = {
    account: '',
    pwd: ''
  }
  formGroupForLogin!: FormGroup<{
    account: FormControl<string | null>;
    pwd: FormControl<string | null>;
}>;
  accountFormControl!: FormControl<string | null>;
  pwdFormControl!: FormControl<string | null>;
  constructor(
    private userService: UserService
  ){

  }

  ngOnInit() {
    this.formGroupForLogin = new FormGroup({
      account: new FormControl('', Validators.required),
      pwd: new FormControl('', Validators.required),
    })
    this.accountFormControl = this.formGroupForLogin.controls.account;
    this.pwdFormControl = this.formGroupForLogin.controls.pwd;
  }
  login(): void{
    if(this.formGroupForLogin.invalid){
      this.formGroupForLogin.markAllAsTouched();
      return;
    }
    const loginInfo = this.formGroupForLogin.getRawValue();
    this.userService.login(loginInfo.account ?? '', loginInfo.pwd ?? '');
  }
}
