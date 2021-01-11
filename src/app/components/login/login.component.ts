import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
  }
  data = {
    email: '',
    password: '',
  }
  doSubmitForm() {
    // console.log("try to submit form");
    console.log("DATA ", this.data);
    this.apiService.callAPI("post", this.data, "user/login").subscribe(addData => {
      if (addData.success === true) {
        console.log(addData);
        console.log('data is', addData.data.gender);

      } else {
        console.log('error in api', addData);
      }
      console.log('DONE');
      // console.log('data is', addData.data.gender);

    })
  }

}
