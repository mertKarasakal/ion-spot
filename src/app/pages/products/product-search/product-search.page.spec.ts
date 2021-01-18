import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductSearchPage } from './product-search.page';

describe('ProductSearchPage', () => {
  let component: ProductSearchPage;
  let fixture: ComponentFixture<ProductSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
