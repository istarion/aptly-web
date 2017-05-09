import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotPageComponent } from './snapshot-page.component';

describe('SnapshotPageComponent', () => {
  let component: SnapshotPageComponent;
  let fixture: ComponentFixture<SnapshotPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapshotPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
