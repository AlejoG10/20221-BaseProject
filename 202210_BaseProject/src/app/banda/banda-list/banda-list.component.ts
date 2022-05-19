import { Component, OnInit } from '@angular/core';

import { Banda } from '../banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css'],
})
export class BandaListComponent implements OnInit {
  bandas: Array<Banda> = [];
  avg: number = 0;

  selectedBanda!: Banda;
  selected: Boolean = false;

  constructor(private bandaService: BandaService) {}

  getBandas() {
    this.bandaService.getBandas().subscribe((bandas) => {
      this.bandas = bandas;
      this.getAvg();
    });
  }

  getAvg() {
    let s = 0;
    this.bandas.forEach(banda => {
      s += banda.numberOfMembers;
    });
    this.avg = Math.ceil(s/this.bandas.length);
  }

  onSelected(banda: Banda): void {
    this.selected = true;
    this.selectedBanda = banda;
  }

  ngOnInit() {
    this.getBandas();
  }
}
