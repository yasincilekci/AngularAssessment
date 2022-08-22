import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-filter',
  template: ` <select
    #filterStatuss
    class="form-select inline"
    (change)="filterStatus(filterStatuss.value)"
  >
    <option value="Seçiniz"></option>
    <option value="alive">Alive</option>
    <option value="dead">Dead</option>
    <option value="unknown">Unknown</option>
  </select>`,
  styleUrls: ['./form-filter.component.scss'],
})
export class FormFilterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  filterStatus(value: string) {
    console.log(value);
    this.router.navigate(['/character-list'], {
      queryParams: { status: value },
    });
  }
}
