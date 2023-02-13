import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  public i: number = 0;
  @Output() incI = new EventEmitter<number>();
  @Output() decI = new EventEmitter<number>();
  @Input() compteur: number;

  // Après avoir regarder notre autre projet j'ai pu plus ou moins réussir les
  // Output & Input, mais je n'ai pas cette sensation d'avoir acquis et maîtrisé le concept du tout...
  // c'est assez frustrant pour le coup.

  constructor() {}

  ngOnInit() {}

  public increment() {
    this.incI.emit(this.i);
  }

  public decrement() {
    this.decI.emit(this.i);
  }
}
