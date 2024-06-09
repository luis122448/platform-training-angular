import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { DialogErrorAlertComponent } from '@shared-component/dialog-error-alert/dialog-error-alert.component';
import { MatsnackbarMessageComponent } from '@shared-component/matsnackbar-message/matsnackbar-message.component';
import { MatsnackbarSuccessComponent } from '@shared-component/matsnackbar-success/matsnackbar-success.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { MatSnackBarSuccessConfig } from 'src/app/utils/constants';
import { GlobalStatusService } from 'src/app/modules/platform/services/global-status.service';
import { faAddressCard, faPen } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { DefaultValuesService } from '@auth-service/default-values.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  fromAuthLogin!: FormGroup;
  formVerifyCode!: FormGroup;
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faAddressCard = faAddressCard;
  showPassword = false;
  LoginIn = true;
  // Verrify Code
  verificationCode: string[] = new Array(6);

  private buildForm() {
    this.fromAuthLogin = this.formBuilder.group({
      company: ['0000000001', [Validators.required]],
      coduser: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  private buildFormVerify() {
    this.formVerifyCode = this.formBuilder.group({
      company: [
        { value: '0000000001', disabled: true },
        ,
        [Validators.required],
      ],
      coduser: [{ value: '', disabled: true }, [Validators.required]],
      verifyCode: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private defaultValueService: DefaultValuesService,
    private globalStatusService: GlobalStatusService,
    private dialog: Dialog,
    private matSnackBar: MatSnackBar
  ) // Default-Values
  {
    this.buildForm();
    this.buildFormVerify();
  }

  isInputInvalid(fieldName: string): boolean {
    const field = this.fromAuthLogin.get(fieldName);
    return field ? field.invalid && field.touched : true;
  }

  isInputInvalidVerify(fieldName: string): boolean {
    const field = this.formVerifyCode.get(fieldName);
    return field ? field.invalid && field.touched : true;
  }

  doLogin() {
    if (this.fromAuthLogin.invalid) {
      this.fromAuthLogin.markAllAsTouched();
      this.dialog.open(DialogErrorAlertComponent, {
        width: '400px',
        data: { no_required_fields: 'Y' },
      })
      return;
    }
    this.globalStatusService.setLoading(true);
    this.authService
      .postLogin(
        this.company?.value,
        this.coduser?.value,
        this.password?.value
      )
      .subscribe({
        next: async (data) => {
          if (data.status <= 0) {
            this.dialog.open(DialogErrorAlertComponent, {
              width: '400px',
              data: data,
            });
          }
          else if (data.status === 0) {
            this.verifyCoduser?.setValue(data.object.coduser);
            this.LoginIn = false;
            this.matSnackBar.openFromComponent(MatsnackbarMessageComponent, {
              data: `Codigo de Verificacion : ${data.object.verifyCode}`,
              duration: 75000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
          }
          else {
            await this.onUploadDefaultValues()
            this.router.navigate(['/platform']);
            this.matSnackBar.openFromComponent(
              MatsnackbarSuccessComponent,
              MatSnackBarSuccessConfig
            );
          }
        },
        error: (err) => {
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: err.error,
          });
          this.globalStatusService.setLoading(false);
        },
        complete: () => {
          this.globalStatusService.setLoading(false);
        }
      });
  }

  doVerifyCode() {
    this.verifyCode?.setValue(this.verificationCode.join(''));
    if (this.formVerifyCode.invalid) {
      this.formVerifyCode.markAllAsTouched();
      this.dialog.open(DialogErrorAlertComponent, {
        width: '400px',
        data: { no_required_fields: 'Y' },
      });
      return;
    }
    this.globalStatusService.setLoading(true);
    this.authService
      .postVerifyCode(
        this.company?.value,
        this.coduser?.value,
        this.password?.value,
        this.verifyCode?.value
      )
      .subscribe({
        next: async (data) => {
          if (data.status <= 0) {
            this.dialog.open(DialogErrorAlertComponent, {
              width: '400px',
              data: { status: data.status, message: data.message },
            });
          }
          if (data.status === 1) {
            await this.onUploadDefaultValues()
            this.router.navigate(['/platform']);
            this.matSnackBar.openFromComponent(
              MatsnackbarSuccessComponent,
              MatSnackBarSuccessConfig
            );
          }
        },
        error: (err) => {
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: err.error
          });
          this.globalStatusService.setLoading(false);
        },
        complete: () => {
          this.globalStatusService.setLoading(false);
        },
      });
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

  public onBackspace(index: number, event: any){
    const value = event.target.value;
    if (!value && index > 0) {
      const previousInput = event.target.previousElementSibling as HTMLInputElement;
      if (previousInput) {
        previousInput.focus();
      }
    }
  }

  async onUploadDefaultValues() {
    await null;
  }

  get company() {
    return this.fromAuthLogin.get('company');
  }
  get coduser() {
    return this.fromAuthLogin.get('coduser');
  }
  get password() {
    return this.fromAuthLogin.get('password');
  }
  get verifyCompany() {
    return this.formVerifyCode.get('company');
  }
  get verifyCoduser() {
    return this.formVerifyCode.get('coduser');
  }
  get verifyCode() {
    return this.formVerifyCode.get('verifyCode');
  }
}
