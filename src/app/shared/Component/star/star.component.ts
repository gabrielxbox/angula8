
import { style } from '@angular/animations';
import { templateJitUrl } from '@angular/compiler';
import { Component, Input, OnChanges } from '@angular/core';


@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

   // utilizado para deichar vizivel para outro componete que irar reseber outro valor @Input()
  @Input()
  rating: number = 0;
  starwidth: number;

  ngOnChanges(): void {
    this.starwidth = this.rating * 50 /  5;

  }



}
