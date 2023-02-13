import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css'],
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  @ViewChild('myinput', { static: true })
  public element: ElementRef<HTMLInputElement>;

  public changeValue(event: KeyboardEvent) {
    this.valeur = this.element.nativeElement.value;
    //console.log( this.valeur);
  }
  // Je ne suis pas certaine du pourquoi j'ai dû faire une passation d'event... que je n'utilise pas ici.

  constructor() {}

  ngOnInit() {}
}
