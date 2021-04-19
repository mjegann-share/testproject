import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';

/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

/* new form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientsComponent } from './clients/clients.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { ProjectComponent } from './project/project.component';
import { ClientSelectComponent } from './client-select/client-select.component';
import { ProjectsComponent } from './projects/projects.component';
import { NoteComponent } from './note/note.component';
import { ModuleComponent } from './module/module.component';
import { ProjectAssetComponent } from './project-asset/project-asset.component';
import { ProjectAssetsComponent } from './project-assets/project-assets.component';
import { TaxCreditNoteComponent } from './tax-credit-note/tax-credit-note.component';
import { TaxCreditNotesComponent } from './tax-credit-notes/tax-credit-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientsComponent,
    ProjectComponent,
    ClientSelectComponent,
    ProjectsComponent,
    NoteComponent,
    ModuleComponent,
    ProjectAssetComponent,
    ProjectAssetsComponent,
    TaxCreditNoteComponent,
    TaxCreditNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* configure app with AmplifyUIAngularModule */
    AmplifyUIAngularModule,
    /* configuring form modules */
    FormsModule,
    ReactiveFormsModule,
    // Material
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
