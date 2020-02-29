import { Component, OnInit } from '@angular/core';
import { Address } from './../../shared/models/address';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 mainOffice:Address = undefined;//it can be null
  contactLikes =2000;
  headOffice:Address = {
    city:'BLR',
    state: 'KA',
    pincode: 560001
  }
  branchOffice:Address = {
    city:'Noida',
    state: 'UP',
    pincode: 110096
  }
  constructor() { }

  ngOnInit() {
  }
  contactHandler(address:Address){
    alert(JSON.stringify(address))
  }

}
