import { Component, OnInit } from '@angular/core';
import { APIService, ListProjectAssetsQuery, OnUpdateProjectAssetSubscription } from 'src/app/API.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { API, graphqlOperation, Auth } from 'aws-amplify';

@Component({
  selector: 'app-project-assets',
  templateUrl: './project-assets.component.html',
  styleUrls: ['./project-assets.component.css']
})
export class ProjectAssetsComponent implements OnInit {


  projectAssets: any[];
  subscription: Subscription;

  constructor(
    private router: Router,
    private api: APIService) { }

  ngOnInit(): void {
    //this.listenChanges();
    this.listProjectAssets();
  }

  listProjectAssets() {
    this.api.ListProjectAssets().then((list: ListProjectAssetsQuery) => {
      if (list.items.length == 0) {
        this.router.navigate(['newbill']);
        return;
      }
      this.projectAssets = list.items.sort(this.byCreatedAt);
    });
  }

/*
  // listen changes on bills
  listenChanges() {
    Auth.currentAuthenticatedUser().then(user => {
      const OnUpdateProjectAssetListener: Observable<any> = API.graphql(
        graphqlOperation(
          `subscription OnUpdateProjectAsset($owner: String!) {
            onUpdateProjectAsset(owner: $owner) {
              __typename
              id
              serialnum
              title
              customerID
              customer {
                __typename
                id
                name
                address
                siret
                projectAssets {
                  __typename
                  nextToken
                }
                createdAt
                updatedAt
                owner
              }
              lines {
                __typename
                items {
                  __typename
                  id
                  billID
                  title
                  quantity
                  cost
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              createdAt
              owner
              updatedAt
            }
          }`, { owner: user.username }
        )
      ) as any;
      this.subscription = OnUpdateProjectAssetListener.subscribe(() => {
        this.listProjectAssets();
      });
    });
  }
*/
  // sort by createdAt, newest first
  byCreatedAt(a, b) {
    return a.createdAt < b.createdAt ? 1 : -1;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
