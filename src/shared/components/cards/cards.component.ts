import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() color?: string;
  @Input() description?: string;
  @Input() icon: string = '';
  @Input() isLoading = false;
  @Input() title: any;
}
