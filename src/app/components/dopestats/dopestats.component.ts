import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { dopeStat } from '../../models/dopeStat.model';
import { TradingService } from '../../services/trading.service';
import { ExpanderComponent } from "../expander/expander.component";

@Component({
  selector: 'app-dopestats',
  standalone: true,
  imports: [ExpanderComponent],
  templateUrl: './dopestats.component.html',
  styleUrl: './dopestats.component.css'
})
export class DopeStatsComponent implements OnInit
{
  tradingService = inject(TradingService);

  dopeStat!: dopeStat|null;

  ngOnInit(): void
  {
    
    this.dopeStat = this.tradingService.tradingSheet();
  }
  
  

}
