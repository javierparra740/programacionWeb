import { Component, OnInit } from '@angular/core';
import { RickYmortyService } from 'src/app/services/rickYmorty.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  personajes: any
  constructor(public rickYmortyService: RickYmortyService) { }

  ngOnInit(): void {
    this.rickYmortyService.getPersonajes().subscribe(data =>{
      this.personajes = data;
      console.log(this.personajes);
    });
  }

}
