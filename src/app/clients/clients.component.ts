import { Component, OnInit } from '@angular/core';
import { APIService, ListClientsQuery, OnCreateClientSubscription } from 'src/app/API.service';
import { API } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: any[];
  constructor(   private router: Router,
    private api: APIService) { }

  ngOnInit(): void {
    this.api.ListClients().then((list: ListClientsQuery) => {
      if (list.items.length == 0) {
        this.router.navigate(['newclient']);
        return;
      }
      this.clients = list.items.sort(this.byName);
    });
  }

  // Sort by name alphabetically
  byName(a, b) {
    return a.name < b.name ? -1 : 1;
  }
}
