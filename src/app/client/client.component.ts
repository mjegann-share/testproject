import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService, GetClientQuery, CreateClientMutation } from 'src/app/API.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  editMode: boolean;
  form: FormGroup;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private api: APIService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      internalId: new FormControl(null),
      name: new FormControl(null),
      street: new FormControl(null),
      city: new FormControl(null),
      zip: new FormControl(null),
      country: new FormControl(null),
    });

    this.route.params.subscribe(params => {
      this.editMode = 'id' in params;
      if (this.editMode) {
       this.loadClient(params['id']);
      }
    })
  }

  loadClient(id: string) {
    this.api.GetClient(id).then((client: GetClientQuery) => {
      this.form.patchValue({
        id: client.id,
        internalId: client.internalId,
        name: client.name,
        street: client.street,
        city: client.city,
        zip: client.zip,
        country: client.country,
      })
    });
  }
  
  add() {
    this.api.CreateClient(this.form.value).then(() => {
      this.router.navigate(['clients']);
    })
  }

  update() {
    this.api.UpdateClient(this.form.value).then(() => {
      this.router.navigate(['clients']);
    })
  }

  delete() {
    this.api.DeleteClient({ id: this.form.value['id']}).then(() => {
      this.router.navigate(['clients']);
    })
  }

}
