import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService, GetProjectQuery } from 'src/app/API.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  editMode: boolean;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private api: APIService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      clientID: new FormControl(null),
      title: new FormControl(null),
    });

    this.route.params.subscribe(params => {
      this.editMode = 'id' in params;
      if (this.editMode) {
        this.loadProject(params['id']);
      }
    });
  }

  loadProject(id: string) {
    this.api.GetProject(id).then((project: GetProjectQuery) => {
      this.form.patchValue({
        id: project.id,
        clientID: project.clientID,
        internalId: project.internalId,
        contactName: project.contactName,
        name: project.name,
      })
    });
  }

  add() {
    this.api.CreateProject(this.form.value).then(() => {
      this.router.navigate(['projects']);
    })
  }

  update() {
    this.api.UpdateProject(this.form.value).then(() => {
      this.router.navigate(['projects']);
    })
  }

  delete() {
    this.api.DeleteProject({ id: this.form.value['id'] }).then(() => {
      this.router.navigate(['projects']);
    })
  }
}
