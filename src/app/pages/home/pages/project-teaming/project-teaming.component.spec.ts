import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTeamingComponent } from './project-teaming.component';

describe('ProjectTeamingComponent', () => {
  let component: ProjectTeamingComponent;
  let fixture: ComponentFixture<ProjectTeamingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectTeamingComponent]
    });
    fixture = TestBed.createComponent(ProjectTeamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
