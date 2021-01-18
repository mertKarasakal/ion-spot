import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductFavoritesPage } from './product-favorites.page';

describe('ProductFavoritesPage', () => {
  let component: ProductFavoritesPage;
  let fixture: ComponentFixture<ProductFavoritesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFavoritesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFavoritesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
