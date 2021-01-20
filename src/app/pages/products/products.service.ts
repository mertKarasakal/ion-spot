import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _products: Product[] = [
    new Product(
      1,
      'We & Homy Mario Koltuk',
      'Gürgen iskelet      Üründe silinebilir keten, ithal kumaş kullanılmaktadır      Plastik ayak      Anti-baktiyerel, keten kumaş      Anti-bakteriyel sünger',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
       999.90,
       true
    ),new Product(
      2,
      'Grundig GKNE 4800 A+ 475 lt No-Frost Buzdolabı',
      'Duo No Frost teknolojisine sahip Grundig GKNE 4800 A+ 475 Lt No-Frost Buzdolabı, gıdalarını ideal nem ve soğutma koşullarında saklamak isteyenlere teknolojik bir çözüm sunuyor. İki soğutma sistemi içeren ürün, meyve ve sebzelerinizin kurumadan ve bozulmadan uzun süre korunmasını sağlıyor. İki ayrı fan sistemi, buzdolabınızdaki hava dolaşımını dengeleyerek içerideki hava kalitesini artırıyor. A+ enerji sınıfındaki model, güçlü teknolojik bileşenleri sayesinde enerjiden tasarruf sağlamanız için size yardımcı oluyor. LED aydınlatma teknolojisi, az enerji harcanmasına katkıda bulunuyor. Oldukça dayanıklı yapıya sahip temperli cam raflar, soğuğu daha iyi muhafaza ediyor.',
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
       3399.90,
       true
    ),new Product(
      3,
      'Home Fonksiyonel Gelincik Çalışma Masası - Beyaz',
      'Birinci sınıf kalite 18 mmlik suntalamdan ve yonga levha plakalardan üretilmiştir. Suntalam, sunta malzemelerin lamine kaplanması ile daha sağlam ve kullanışlı hale getirilmiş bir çeşididir. Sunta malzemelere göre neme ve rutubete karşı çok daha dayanıklıdır. Ürünün tüm parçalarında 1. sınıf PVC bant kullanılmıştır. Dayanıklı yapısı ve kaliteli malzemeleri ile uzun süre gönül rahatlığı ile kullanabilirsiniz.',
      'https://productimages.hepsiburada.net/s/0/550/9469578149938.jpg/format:webp',
       13.45,
       false
    ),new Product(
      4,
      'Us. Sleepıng Ultra Super Bamboo Yaylı Yatak 160 X 200',
      'Bamboonun ve kadifenin muhteşem uyumu. Asyanın kahve tonları yatakta hayat buluyor.      Yatakta görselliğin yanı sıra dayanıklılığında, maximum oranda tutulduğu bir modelidir. 24 cm yüksekliğe sahiptir.      Yatağın üst katmanında kullanılan gizli ped ile ekstra konfor sağlanmaktadır.',
      'https://images.unsplash.com/flagged/photo-1570737143701-65c082fd72d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
       1990.90,
       true
    ),
    new Product(
      5,
      'Payidar Halı Gold Plus 2862A Gold/beyaz 80X150 cm',
      'Her zaman olduğu gibi, yine çok ses getiren ve sıradışı ürünler ile Payidar Halı evlerinize yeni bir dokunuş katacak. /*  */      Goldun zerafeti, Payidar Halı tasarım ekibinin desenleriyle buluştu, ortaya inanılmaz dekoratif modeller çıktı.',
      'https://productimages.hepsiburada.net/s/42/550/10740726169650.jpg/format:webp',
      451.82,
      false
    ),new Product(
      6,
      'Schafer Backofen Mini Fırın Gri',
      'Saygın elektronik eşya üreticisi Schafer tarafından tasarlanan Backofen Mini Fırın, kullanıcılar arasında yoğun ilgiyle karşılanıyor. Schafer Backofen Mini Fırın Gri modeli, öncelikle estetik tasarımı ile göze çarpıyor. Gri renk seçeneği ile kullanıcıların beğenisine sunulan Schafer fırın, isabetli renk tercihi sayesinde estetik bir görünüme kavuşuyor. Metal olarak tasarlanan düğme paneli de fırının şık görünümünü destekleyen bir başka özellik olarak öne çıkıyor.',
      'https://productimages.hepsiburada.net/s/20/550/9900233031730.jpg/format:webp',
       713.55,
       false
    )
  ];
  get products(){
    return [...this._products];
  }

  constructor(private http: HttpClient) { }

  getProduct(id: number){
    return {...this._products.find(p=>p.id === id)};
  }
}
