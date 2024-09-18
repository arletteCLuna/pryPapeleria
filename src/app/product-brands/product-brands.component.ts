import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-brands',
  templateUrl: './product-brands.component.html',
  styleUrls: ['./product-brands.component.css']
})
export class ProductBrandsComponent implements OnInit {
  productType: string = '';
  brands: any[] = [];
  filteredBrands: any[] = [];
  searchTerm: string = '';
  suggestions: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener el tipo de producto de la ruta
    this.productType = this.route.snapshot.paramMap.get('type') || '';

    // Configurar las marcas basadas en el tipo de producto
    this.loadBrands();
    this.filterBrands();
  }

  loadBrands(): void {
    // Aquí puedes definir las marcas para cada producto
    const brandsData: any = {
      cuadernos: [
        { name: 'Scribe - Doble espiral', image: 'https://colmenero.shop/cdn/shop/products/scribeplastificado_4f1353ab-2b95-407b-84b4-3a2512cb8a8d.jpg?v=1704910989&width=1619' },
        { name: 'Scribe', image: 'https://comprayvendetumarca.com.mx/wp-content/uploads/2022/08/CUADERNOS-SCRIBE.jpg' },
        { name: 'Libreta Norma', image: 'https://cdn1.totalcommerce.cloud/normamx/product-image/es/cuaderno-cosido-profesional-cuadro-grande-100-hojas-norma-color-1.webp' },
        { name: 'Cuaderno Norma', image: 'https://cdn1.totalcommerce.cloud/normamx/product-image/es/cuaderno-cosido-italiano-blanco-100-hojas-norma-color-1.webp' },
        { name: 'Cuaderno Profesional Norma Doble Resorte', image: 'https://clipspapeleria.com.mx/wp-content/uploads/2020/10/NORMA.jpg' },
        
        { name: 'Monky', image: 'https://http2.mlstatic.com/D_NQ_NP_645879-MLM70251345863_072023-O.webp' },
        { name: 'Monky', image: 'https://www.sajor.mx/wp-content/uploads/CUADERNOS-MONKY.jpg' },
      ],
      boligrafos: [
        { name: 'Bic Cristal', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/4_Bic_Cristal_pens_and_caps.jpg/1200px-4_Bic_Cristal_pens_and_caps.jpg' },
        { name: 'Pilot G2', image: 'https://images-na.ssl-images-amazon.com/images/I/71ENyk6L5ZL._AC_SL1500_.jpg' }
      ],
      // Agrega más categorías y marcas según sea necesario
    };

    this.brands = brandsData[this.productType] || [];
  }

  filterBrands(): void {
    this.filteredBrands = this.brands.filter(brand =>
      brand.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.updateSuggestions();
  }

  updateSuggestions(): void {
    if (this.searchTerm.length > 0) {
      this.suggestions = this.brands
        .map(brand => brand.name)
        .filter(name => name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    } else {
      this.suggestions = [];
    }
  }

  selectSuggestion(suggestion: string): void {
    this.searchTerm = suggestion;
    this.filterBrands();
    this.suggestions = [];
  }
}
