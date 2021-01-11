import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  arrname = [];
  constructor(
    private apiService: ApiServiceService
  ) {
    this.getData();
  }

  getData() {
    this.apiService.callAPI("get", '', "user/allusers").subscribe(data => {
      if (data.success === true) {
        this.arrname = data.data;
        console.log(data);
      } else {
        console.log('error in api', data);
      }
      console.log('DONE');
      // console.log('data save in array', this.arrname[1].age);

      // console.log('data is', addData.data.gender);

    })
  }

  delete(user) {
    this.apiService.callAPI("delete", '', 'user/allusers/' + user + '/delete').subscribe(data => {
      console.log('data:', data)

    })
  }
  edit(user) {
    this.apiService.callAPI("delete", '', 'user/allusers/' + user + '/delete').subscribe(data => {
      console.log('data:', data)

    })
  }

  ngOnInit(): void {
  };
}
