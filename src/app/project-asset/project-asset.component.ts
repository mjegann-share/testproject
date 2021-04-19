import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService, GetProjectAssetQuery } from 'src/app/API.service';

@Component({
  selector: 'app-project-asset',
  templateUrl: './project-asset.component.html',
  styleUrls: ['./project-asset.component.css']
})
export class ProjectAssetComponent implements OnInit {

  editMode: boolean;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private api: APIService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      customerID: new FormControl(null),
      title: new FormControl(null),
    });

    this.route.params.subscribe(params => {
      this.editMode = 'id' in params;
      if (this.editMode) {
        this.loadProjectAsset(params['id']);
      }
    });
  }

  loadProjectAsset(id: string) {
    this.api.GetProjectAsset(id).then((projectAsset: GetProjectAssetQuery) => {
      this.form.patchValue({
        id: projectAsset.id,
        internalId: projectAsset.internalId,
        type: projectAsset.type,
        name: projectAsset.name,
        projectID: projectAsset.projectID,
      })
    });
  }

  add() {
    this.api.CreateProjectAsset(this.form.value).then(() => {
      this.router.navigate(['project-assets']);
    })
  }

  update() {
    this.api.UpdateProjectAsset(this.form.value).then(() => {
      this.router.navigate(['project-assets']);
    })
  }

  delete() {
    this.api.DeleteProjectAsset({ id: this.form.value['id'] }).then(() => {
      this.router.navigate(['project-assets']);
    })
  }
}
