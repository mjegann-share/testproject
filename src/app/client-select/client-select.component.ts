import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { APIService, ListClientsQuery } from 'src/app/API.service';

@Component({
  selector: 'app-client-select',
  templateUrl: './client-select.component.html',
  styleUrls: ['./client-select.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ClientSelectComponent),
      multi: true
    }
  ]
})
export class ClientSelectComponent implements OnInit, ControlValueAccessor {

  clientID: string;

  clients: any[];

  propagateChange = (_: any) => { };
  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListClients().then((list: ListClientsQuery) => {
      this.clients = list.items;
    });
  }

  writeValue(value: any) {
    this.clientID = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(_: any): void {}

  change(value: any) {
    this.propagateChange(value);
  }
}
