import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StotrakoshToolbarComponent } from './stotrakosh-toolbar.component';

describe('StotrakoshToolbarComponent', () => {
  let component: StotrakoshToolbarComponent;
  let fixture: ComponentFixture<StotrakoshToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StotrakoshToolbarComponent]
    });
    fixture = TestBed.createComponent(StotrakoshToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
