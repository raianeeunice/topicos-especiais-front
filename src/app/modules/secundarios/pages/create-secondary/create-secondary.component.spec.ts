import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSecondaryComponent } from './create-secondary.component';

describe('CreateSecondaryComponent', () => {
  let component: CreateSecondaryComponent;
  let fixture: ComponentFixture<CreateSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSecondaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
