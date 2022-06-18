import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnChanges {
  // como não sabe quando será passada a info, utiliza OnChanges para funcoes assincronas

  @Input() // utilizado para receber informação de componente externo
  rating: number = 0;
  ratingWidth: number = 0;

  constructor() { }

  ngOnChanges(): void {
    this.ratingWidth = this.rating * 74 / 5;
  }

}
