import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_service/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;

  constructor(
    private sessionService: AuthService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.isCollapsed = true;

    if (this.sessionService.isExpire()) {
      this.Login();
    } else {
      this.reLogin();
    }
    this.sessionService.onLoginSuccess.subscribe(() => {
      this.reLogin();
    });
  }

  async Login() {
    this.sessionService.Logout();
    var login = this.modalService.open(LoginComponent, { backdrop: "static", size: "sm", keyboard: false });
    await login.result;
  }

  _reLogin;
  reLogin() {
    // this.userName = this.sessionServices.Current().scope.name;
    this._reLogin = setTimeout(() => {
      this.Login();
    }, this.sessionService.getSecondForExpire());
  }

  logout() {
    console.log("onClick logout");
    if(this._reLogin){
      clearTimeout(this._reLogin);
    }
    this.Login();
  }

}
