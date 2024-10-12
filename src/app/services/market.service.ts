import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketService
{
  markets = [
    {
      placeName: 'Clarewood',
      hasHospital: true,
      hasPoliceStation: true,
      hasBankBranch: true,
      provice: 'Western Cape'
    },
    {
      placeName: 'Glenwood',
      hasHospital: true,
      hasPoliceStation: true,
      hasBankBranch: true,
      provice: 'Gauteng'
    },
    {
      placeName: 'Clarewood',
      hasHospital: true,
      hasPoliceStation: true,
      hasBankBranch: true,
    },
    {
      placeName: 'Clarewood',
      hasHospital: true,
      hasPoliceStation: true,
      hasBankBranch: true,
    },
    {
      placeName: 'Clarewood',
      hasHospital: true,
      hasPoliceStation: true,
      hasBankBranch: true,
    }];

  constructor() { }
}
