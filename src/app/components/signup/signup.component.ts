import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
  }
  data = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    age: '',
    gender: ''
  }
  doSubmitForm() {
    // console.log("try to submit form");
    console.log("DATA ", this.data);
    this.apiService.callAPI("post", this.data, "user/signup").subscribe(addData => {
      if (addData.success === true) {
        console.log(addData);

      } else {
        console.log('error in api', addData);
      }
      console.log('DONE');

    })
  }
}
