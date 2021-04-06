import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, ListClientsQuery } from './API.service';
import { Client } from '../types/client';
import { Project } from '../types/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'irc41-app1';
  public createForm: FormGroup;

  /* declare clients variable */
  clients: any[];
  /* declare projects variable */
  projects: Array<Project>;

  constructor(private api: APIService, private fb: FormBuilder) { }

  async ngOnInit() {
    this.createForm = this.fb.group({
      'name': ['', Validators.required],
      'street': ['', Validators.required],
      'city': ['', Validators.required],
      'zip': ['', Validators.required],
      'country': ['', Validators.required],
      'state': ['', Validators.required]
    });

    /* fetch clients when app loads 
    this.api.ListClients().then(event => {
      this.clients = event.items;
    });*/
    /* fetch clients when app loads */
    this.api.ListClients().then((list: ListClientsQuery) => {
      this.clients = list.items;
    });

  /* subscribe to new clients being created */
  this.api.OnCreateClientListener.subscribe( (event: any) => {
    const newClient = event.value.data.onCreateClient;
    this.clients = [newClient, ...this.clients];
  });
 }

  public onCreate(client: Client) {
    this.api.CreateClient(client).then(event => {
      console.log('item created!');
      this.createForm.reset();
    })
    .catch(e => {
      console.log('error creating client...', e);
    });
  }
}
