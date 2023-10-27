import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFileManagementComponent } from './project-file-management.component';

describe('ProjectFileManagementComponent', () => {
  let component: ProjectFileManagementComponent;
  let fixture: ComponentFixture<ProjectFileManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectFileManagementComponent]
    });
    fixture = TestBed.createComponent(ProjectFileManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
