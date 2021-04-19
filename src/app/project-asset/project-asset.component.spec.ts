import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAssetComponent } from './project-asset.component';

describe('ProjectAssetComponent', () => {
  let component: ProjectAssetComponent;
  let fixture: ComponentFixture<ProjectAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
