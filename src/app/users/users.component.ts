import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users=[];
  constructor(private Data:DataService) {

    this.Data.getData().subscribe(result=>{
      console.log(result);
      this.users=result;
    })

   }

  ngOnInit() {
  }



}
