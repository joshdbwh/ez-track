import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentShellComponent } from './content-shell.component';

describe('ContentShellComponent', () => {
  let component: ContentShellComponent;
  let fixture: ComponentFixture<ContentShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContentShellComponent]
    });
    fixture = TestBed.createComponent(ContentShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
