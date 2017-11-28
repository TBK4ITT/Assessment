import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  surname:string;
  firstname:string;
  identitytype:string;
  identitynumber:number;
  dateofbirth:string;

  constructor() { 

    
    this.surname = 'Bloggs';
    this.firstname = 'Joe Peter';
    this.identitytype = 'Identity Document';
    this.identitynumber = 7202025074084;
    this.dateofbirth = '1972/02/02';
  }

  ngOnInit() {

    this.surname = 'Bloggs';
    this.firstname = 'Joe Peter';
    this.identitytype = 'Identity Document';
    this.identitynumber = 7202025074084;
    this.dateofbirth = '1972/02/02';

  }

}
