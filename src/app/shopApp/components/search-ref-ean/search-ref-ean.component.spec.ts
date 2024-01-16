import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRefEanComponent } from './search-ref-ean.component';

describe('SearchRefEanComponent', () => {
  let component: SearchRefEanComponent;
  let fixture: ComponentFixture<SearchRefEanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchRefEanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchRefEanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
