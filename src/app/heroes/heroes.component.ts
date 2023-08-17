import { Component, OnInit } from '@angular/core';
import { Stotra } from '../stotra';
import { HEROES } from '../mock-heroes';
import { StotraService } from '../stotra.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  selectedHero?: Stotra;
  isSelected = false;

  stotras?: Stotra[];

    constructor(private stotraService: StotraService) {
    }

    ngOnInit() {
      this.stotraService.findAll().subscribe((data: any) => {
//         this.stotras = data;
        this.stotras = data.map((obj: any) => ({...obj, description: obj.description.replace(/\n/g, '<br />')}));
      });
    }

  onSelect(hero: Stotra): void {
    this.selectedHero = hero;
    this.isSelected = true;
  }

  onClickBack(): void {
    this.isSelected = false;
  }
}
