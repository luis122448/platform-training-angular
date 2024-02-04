import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { DialogErrorAlertComponent } from '@shared-component/dialog-error-alert/dialog-error-alert.component';
import { MatsnackbarMessageComponent } from '@shared-component/matsnackbar-message/matsnackbar-message.component';
import { MatsnackbarSuccessComponent } from '@shared-component/matsnackbar-success/matsnackbar-success.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { DefaultValueService } from '../../services/default-values.service';
import { MatSnackBarSuccessConfig } from 'src/app/utils/constants';
import { GlobalStatusService } from 'src/app/modules/platform/services/global-status.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  fromAuthLogin! : FormGroup
  formVerifyCode! : FormGroup
  faPen = faPen
  faEye = faEye
  faEyeSlash = faEyeSlash
  showPassword = false
  LoginIn = true
  // Verrify Code
  verificationCode: string[] = new Array(6);

  private buildForm(){
    this.fromAuthLogin = this.formBuilder.group({
      company : ['',[Validators.required]],
      username : ['',[Validators.required]],
      password : ['',[Validators.required]],
    })
    // this.fromAuthLogin.markAsUntouched();
    // this.fromAuthLogin.get('username')?.updateValueAndValidity();
  }

  private buildFormVerify(){
    this.formVerifyCode = this.formBuilder.group({
      verifyCode : ['',[Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    })
  }

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private authService:AuthService,
    private defaultValueService: DefaultValueService,
    private globalStatusService: GlobalStatusService,
    private dialog: Dialog,
    private matSnackBar: MatSnackBar,
    // Default-Values
  ){
    this.buildForm()
    this.buildFormVerify()
  }

  isInputInvalid(fieldName: string): boolean{
    const field = this.fromAuthLogin.get(fieldName)
    return field ? field.invalid && field.touched : true
  }

  isInputInvalidVerify(fieldName: string): boolean{
    const field = this.formVerifyCode.get(fieldName)
    return field ? field.invalid && field.touched : true
  }

  doLogin() {
    if (this.fromAuthLogin.invalid) {
      this.fromAuthLogin.markAllAsTouched()
      return
    }
    this.globalStatusService.setLoading(true)
    this.authService.postLogin(this.company?.value,this.username?.value,this.password?.value)
    .subscribe({
      next:data => {
        if(data.status<=0){
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: {status: data.status, message: data.message}
          })
        }
        if(data.status === 1){
          // await this.onUploadDefaultValues()
          this.router.navigate(['/platform'])
          this.matSnackBar.openFromComponent(MatsnackbarSuccessComponent, MatSnackBarSuccessConfig);
        }
        if(data.status === 0){
          this.LoginIn = false
          this.matSnackBar.openFromComponent(MatsnackbarMessageComponent,{
          data: `Codigo de Verificacion : ${data.object.verifyCode}`,
          duration: 7500,
          horizontalPosition: 'center',
          verticalPosition: 'top'})
        }
        this.globalStatusService.setLoading(false)
      },
      error:error =>{
        this.dialog.open(DialogErrorAlertComponent, {
          width: '400px',
          data: {status: -3, message: error.mensaje}
        })
        this.globalStatusService.setLoading(false)
      }
    })
  }

  doVerifyCode() {
    this.verifyCode?.setValue(this.verificationCode.join(''))
    if (this.formVerifyCode.invalid) {
      this.formVerifyCode.markAllAsTouched()
      return
    }
    this.globalStatusService.setLoading(true)
    this.authService.postVerifyCode(this.company?.value,this.username?.value,this.password?.value,this.verifyCode?.value)
    .subscribe({
      next:data =>{
        if(data.status<=0){
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: {status: data.status, message: data.message}
          })
        }
        if(data.status === 1){
          // await this.onUploadDefaultValues()
          this.router.navigate(['/platform'])
          this.matSnackBar.openFromComponent(MatsnackbarSuccessComponent, MatSnackBarSuccessConfig);
        }
        this.globalStatusService.setLoading(false)
      },
      error:error =>{
        this.dialog.open(DialogErrorAlertComponent, {
          width: '400px',
          data: {status: -3, message: error.mensaje}
        })
        this.globalStatusService.setLoading(false)
      }
    })
  }

  public onCodeInputChange(index: number, event: any): void {
    const value = event.target.value;
    // Si se ingresó un valor y no es el último campo de entrada, pasa automáticamente al siguiente campo
    if (value && index < this.verificationCode.length - 1) {
      // const nextInput = document.getElementById(`code-${index + 1}`) as HTMLInputElement;
      const nextInput = event.target.nextElementSibling as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  async onUploadDefaultValues(){
    await null
  }

  get company() {
    return this.fromAuthLogin.get('company')
  }
  get username (){
    return this.fromAuthLogin.get('username')
  }
  get password (){
    return this.fromAuthLogin.get('password')
  }
  get verifyCode() {
    return this.formVerifyCode.get('verifyCode')
  }

}
