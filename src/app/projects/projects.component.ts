import { Component, OnInit, OnDestroy } from '@angular/core';
import { APIService, ListProjectsQuery, OnUpdateProjectSubscription } from 'src/app/API.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { API, graphqlOperation, Auth } from 'aws-amplify';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[];
  subscription: Subscription;

  constructor(private router: Router,
    private api: APIService) { }

  ngOnInit(): void {
    //this.listenChanges();
    this.listProjects();
  }

  listProjects() {
    this.api.ListProjects().then((list: ListProjectsQuery) => {
      if (list.items.length == 0) {
        this.router.navigate(['newproject']);
        return;
      }
      this.projects = list.items.sort(this.byCreatedAt);
    });
  }

/*******
  // listen changes on bills
  listenChanges() {
    Auth.currentAuthenticatedUser().then(user => {
      const OnUpdateProjectListener: Observable<any> = API.graphql(
        graphqlOperation(
          `subscription OnUpdateProject($owner: String!) {
            onUpdateProject(owner: $owner) {
              __typename
              id
              serialnum
              internalId
              name 
              contactName
              clientID
              }
              projectassets {
                __typename
                items {
                  __typename
                  id
                  internalId
                  type
                  name
                  projectID
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              TaxCreditNotes {
                __typename
                items {
                  __typename
                  id
                  internalId
                  irc41Category
                  notes
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
      this.subscription = OnUpdateBillListener.subscribe(() => {
        this.listProjects();
      });
    });
  }
*********/
/*********

// listen changes on bills
  listenChanges() {
    Auth.currentAuthenticatedUser().then(user => {
      const OnUpdateBillListener: Observable<any> = API.graphql(
        graphqlOperation(
          `subscription OnUpdateBill($owner: String!) {
            onUpdateBill(owner: $owner) {
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
                bills {
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
      this.subscription = OnUpdateBillListener.subscribe(() => {
        this.listBills();
      });
    });
  }

*********/
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
