import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authServices: AuthService
  ) { }

  async ngOnInit() {
    // var model = await this.authServices.Login({
    //   username: "ruben",
    //   password: "164352"
    // }).toPromise();
    // console.log(this.authServices.getSession());
    // this.authServices.Logout();
    console.log(this.authServices.getSession());
  }

}
