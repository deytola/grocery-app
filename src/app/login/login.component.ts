import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";

import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
    providers: [UserService]
})
export class LoginComponent implements OnInit {
    user : User;
    processing = false;
    isLoggingIn = true;
    
    constructor(private router: Router, private userService: UserService, private page: Page) {
        // Use the component constructor to inject providers.
        this.user = new User;
        this.user.email = "admin@grocery.com";
        this.user.password = "admin";
    }
    submit() {
        if (this.isLoggingIn) {
          this.login();
        } else {
          this.signUp();
        }
      }
      
      login() {
          console.log("test!"); 
        this.processing = true;
        this.userService.login(this.user)
          .subscribe(
            () => this.router.navigate(["/list"]),
            (error) => alert("Unfortunately we could not find your account.")
          );
      }
      
      signUp() {
        this.processing = true;
        this.userService.register(this.user)
          .subscribe(
            () => {
              alert("Your account was successfully created.");
              this.toggleDisplay();
            },
            () => alert("Unfortunately we were unable to create your account.")
          );
      }
      toggleDisplay(){
        this.isLoggingIn = !this.isLoggingIn;
      }
    ngOnInit(): void {
      this.page.actionBarHidden = true;

    }

}
