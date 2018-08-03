import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnNgSearchComponent } from './bn-ng-search.component';

describe('BnNgSearchComponent', () => {
  let component: BnNgSearchComponent;
  let fixture: ComponentFixture<BnNgSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnNgSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnNgSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
