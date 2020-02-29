import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Address } from '../../models/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Input() address:Address;
  @Output() contactEvent: EventEmitter<Address> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  contact(){
    this.contactEvent.emit(this.address);
  }

}
