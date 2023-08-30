import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  imagePreview: any;
  messageErrorTel: string;
  messageErrorEmail: string;
  SignUp = "SignUp";
  y = "ali bensalah";
  signupForm: FormGroup;
  myPath;
  constructor(
    private formBuilder: FormBuilder,
    private userservice: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.myPath = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12),
        ],
      ],
      tel: [
        "",
        [Validators.required, Validators.pattern(/^\+216 \d{3} \d{3} \d{3}$/)],
      ],
      img: [""],
    });
  }
  signup(): void {
    this.signupForm.value.role = this.myPath == "/signup" ? "user" : "admin";
    this.userservice
      .signup(this.signupForm.value, this.signupForm.value.img)
      .subscribe((data) => {
        console.log(this.signupForm.value);
        console.log("here data after signup", data.msg);
        if (data.msg == "0") {
          this.messageErrorEmail = "Email Exists";
          this.messageErrorTel = "";
        } else if (data.msg == "1") {
          this.messageErrorTel = "Tel Exists";
          this.messageErrorEmail = "";
        } else if (data.msg == "2") {
          this.messageErrorEmail = "Email Exists";
          this.messageErrorTel = "Tel Exists";
        } else {
          this.router.navigate(["login"]);
        }
      });
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
