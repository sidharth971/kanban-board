// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { ColumnModule } from "../column/column.module";


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
export class BoardModule {
  constructor(public name: string, public column: ColumnModule[]){}
}
