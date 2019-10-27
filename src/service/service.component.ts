import {Component, OnInit, Injectable} from '@angular/core';
import { Http, Headers, Response, HttpModule  } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Observable,of, Subject} from 'rxjs';
import  {UserService} from '../user.service'
import 'rxjs/add/operator/map';
import 'rxjs/Rx';    
import 'rxjs/add/operator/toPromise';  

@Component({
  selector: 'service',
  styleUrls: ['./service.component.css'],
  templateUrl: './service.component.html',
  providers:[UserService]
})

@Injectable()
export class ServiceComponent implements OnInit {

  livres=[];

  constructor(private _userService : UserService) {  }

  ngOnInit() {
    //this.data = this._userService.getUsers();
    this._userService.getUsers().subscribe(resUserData => this.livres = resUserData);
  }

  headers = new Headers({'Content-Type': 'application/json','Accept': 'application/json'});

}
