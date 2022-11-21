import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilegridComponent } from './filegrid.component';

describe('FilegridComponent', () => {
  let component: FilegridComponent;
  let fixture: ComponentFixture<FilegridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilegridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
