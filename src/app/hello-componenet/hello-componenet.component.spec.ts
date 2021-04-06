import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponenetComponent } from './hello-componenet.component';

describe('HelloComponenetComponent', () => {
  let component: HelloComponenetComponent;
  let fixture: ComponentFixture<HelloComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloComponenetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
