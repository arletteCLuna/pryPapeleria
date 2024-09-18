import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papeleria',
  templateUrl: './papeleria.component.html',
  styleUrls: ['./papeleria.component.css']
})
export class PapeleriaComponent implements OnInit {
  searchTerm: string = '';
  selectedCategory: string = '';
  items: any[] = [
    { name: 'Cuadernos', description: 'Gran variedad de cuadernos para tus notas y tareas.', category: 'cuadernos', image: 'https://www.lareynademesones.com.mx/11794-large_default/cuaderno-college-norma-color-cosido-cuadro-chico-100-hojas.jpg' },
    { name: 'Bolígrafos', description: 'Bolígrafos de alta calidad para escribir con comodidad.', category: 'boligrafos', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/4_Bic_Cristal_pens_and_caps.jpg/1200px-4_Bic_Cristal_pens_and_caps.jpg' },
    { name: 'Marcadores', description: 'Marcadores en varios colores para destacar tus notas.', category: 'marcadores', image: 'https://st2.depositphotos.com/1785730/6300/i/450/depositphotos_63004285-stock-photo-colored-markers.jpg' },
    { name: 'Carpetas', description: 'Organiza tus documentos con nuestras carpetas duraderas.', category: 'carpetas', image: 'https://vernazacorporativo.com/wp-content/uploads/2018/08/carpetas01.jpg' },
    { name: 'Post-it', description: 'Notas adhesivas en varios tamaños y colores para tus recordatorios.', category: 'postit', image: 'https://ofiplace.com.pe/wp-content/uploads/2021/01/653-neon-3m.jpg' },
    { name: 'Correctores', description: 'Correctores líquidos y en cinta para tus errores de escritura.', category: 'correctores', image: 'https://static.wixstatic.com/media/f3ca0b_a60d0acbba4b468a9fab9e6b365828c9.jpg/v1/fill/w_480,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f3ca0b_a60d0acbba4b468a9fab9e6b365828c9.jpg' },
    { name: 'Papel bond', description: 'Gran variedad de cuadernos para tus notas y tareas.', category: 'cuadernos', image: 'https://www.lareynademesones.com.mx/11794-large_default/cuaderno-college-norma-color-cosido-cuadro-chico-100-hojas.jpg' },
    { name: 'Hojas blancas', description: 'Bolígrafos de alta calidad para escribir con comodidad.', category: 'boligrafos', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/4_Bic_Cristal_pens_and_caps.jpg/1200px-4_Bic_Cristal_pens_and_caps.jpg' },
    { name: 'Hojas de colores', description: 'Marcadores en varios colores para destacar tus notas.', category: 'marcadores', image: 'https://st2.depositphotos.com/1785730/6300/i/450/depositphotos_63004285-stock-photo-colored-markers.jpg' },
    { name: 'Pintura', description: 'Organiza tus documentos con nuestras carpetas duraderas.', category: 'carpetas', image: 'https://vernazacorporativo.com/wp-content/uploads/2018/08/carpetas01.jpg' },
    { name: 'Cinta adhesiva', description: 'Notas adhesivas en varios tamaños y colores para tus recordatorios.', category: 'postit', image: 'https://ofiplace.com.pe/wp-content/uploads/2021/01/653-neon-3m.jpg' },
    { name: 'Cartulina', description: 'Correctores líquidos y en cinta para tus errores de escritura.', category: 'correctores', image: 'https://static.wixstatic.com/media/f3ca0b_a60d0acbba4b468a9fab9e6b365828c9.jpg/v1/fill/w_480,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f3ca0b_a60d0acbba4b468a9fab9e6b365828c9.jpg' }
  ];
  filteredItems: any[] = [];
  suggestions: string[] = [];

  ngOnInit(): void {
    this.filteredItems = this.items;
    this.updateSuggestions();
  }

  filterItems(): void {
    this.filteredItems = this.items.filter(item => 
      (item.name.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
      (this.selectedCategory ? item.category === this.selectedCategory : true)
    );
    this.updateSuggestions();
  }

  updateSuggestions(): void {
    if (this.searchTerm.length > 0) {
      this.suggestions = this.items
        .map(item => item.name)
        .filter(name => name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    } else {
      this.suggestions = [];
    }
  }

  selectSuggestion(suggestion: string): void {
    this.searchTerm = suggestion;
    this.filterItems();
    this.suggestions = [];
  }
}
