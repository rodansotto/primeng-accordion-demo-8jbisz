import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface Tab {
  name: string;
  index: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
})
export class AppComponent {
  activeState: boolean[] = [true, false, false];

  tabs: Tab[];
  selectedTab: number;
  doneTabs = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  constructor(private messageService: MessageService) {
    this.tabs = [
      { name: 'Tracking', index: 0 },
      { name: 'Electrical Defects', index: 1 },
      { name: 'Details', index: 2 },
      { name: 'Process Info', index: 3 },
      { name: 'Tools', index: 4 },
      { name: 'Abnormality Analysis', index: 5 },
      { name: 'Root Causes', index: 6 },
      { name: 'Containment', index: 7 },
      { name: 'Permanent Countermeasures', index: 8 },
      { name: 'Re-Open Comments', index: 9 },
      { name: 'Close Comments', index: 10 },
    ];
    this.selectedTab = 0;
  }

  onTabClose(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Tab Closed',
      detail: 'Index: ' + event.index,
    });
  }

  onTabOpen(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Tab Expanded',
      detail: 'Index: ' + event.index,
    });
  }

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }

  previousTab(): void {
    this.selectedTab--;
  }

  nextTab(): void {
    this.doneTabs[this.selectedTab] = true;
    if (this.selectedTab < 10) this.selectedTab++;
  }
}
