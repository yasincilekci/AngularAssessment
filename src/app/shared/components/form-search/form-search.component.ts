import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `
    <input
      #inputSearch
      autofocus
      type="text"
      class="form-control"
      placeholder="Character Search..."
      (keyup)="onSearch(inputSearch.value)"
    />
  `,
  styleUrls: ['./form-search.component.scss'],
})
export class FormSearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(value: string) {
    this.router.navigate(['/character-list'], {
      queryParams: { ch: value },
    });
  }
}
