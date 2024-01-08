import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundarioFormComponent } from './secundario-form.component';

describe('SecundarioFormComponent', () => {
  let component: SecundarioFormComponent;
  let fixture: ComponentFixture<SecundarioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecundarioFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecundarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
