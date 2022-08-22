import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';

const characterComponent = [CharacterDetailsComponent, CharacterListComponent];

@NgModule({
  declarations: [...characterComponent],
  imports: [CommonModule, RouterModule],
  exports: [...characterComponent],
})
export class CharactersModule {}
