import { AfterViewInit, Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { BoardModule } from '../models/board/board.module';
import { ColumnModule } from '../models/column/column.module';

@Component({
  selector: 'app-kan-ban-view',
  templateUrl: './kan-ban-view.component.html',
  styleUrls: ['./kan-ban-view.component.css']
})
export class KanBanViewComponent implements OnInit, AfterViewInit {

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  board: BoardModule = new BoardModule('Test Board', [
    new ColumnModule('Back log', [
      'Show random ideas',
      'This is testing purpose',
      'Laga kaia'
    ]), new ColumnModule('Analysis', [
      'lorem Impul',
      'Analisis',
      'purporly analysis'
    ]), new ColumnModule('To do', [
      'Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'
    ]), new ColumnModule('Done', [
      'Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'
    ])
  ])

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.container.id)
    console.log(event.previousContainer.id)
    console.log(event)
    if (event.previousContainer === event.container) {

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.previousContainer.id !== 'cdk-drop-list-3') {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      console.log('movement not possible')
    }
  }
  ngAfterViewInit(): void {
      console.log(this.board.column)
  }

}
