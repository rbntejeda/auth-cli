import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_service/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {
    username: "",
    password: ""
  };

  constructor(
    private session: AuthService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.session.Login(this.model)
      .subscribe(
        (c) => {
          this.toastr.success(c.scope.name, 'Bienvenido');
          this.activeModal.close(c);
        },
        () => {
          this.toastr.warning('Usuario o contraseña invalida.', 'Atención');
        }
      );
  }
}
