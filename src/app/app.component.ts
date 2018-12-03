import { Component } from "@angular/core";

import { User } from "./shared/user/user.model";
import { UserService } from "./shared/user/user.service";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html",
    providers: [UserService]
})
export class AppComponent {
    user : User;
    isLoggingIn = true;
    constructor(private userService: UserService){
      this.user = new User();
    }
    submit() {
      if (this.isLoggingIn) {
        this.login();
      } else {
        this.signUp();
      }
    }
    
    login() {
      // TODO: Define
    }
    
    signUp() {
      this.userService.register(this.user);
    }
    toggleDisplay(){
      this.isLoggingIn = !this.isLoggingIn;
    }
  }
