import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface Tab {
  name: string;
  index: number;
  disabled: boolean;
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
      { name: 'Tracking', index: 0, disabled: false },
      { name: 'Electrical Defects', index: 1, disabled: true },
      { name: 'Details', index: 2, disabled: true },
      { name: 'Process Info', index: 3, disabled: true },
      { name: 'Tools', index: 4, disabled: true },
      { name: 'Abnormality Analysis', index: 5, disabled: true },
      { name: 'Root Causes', index: 6, disabled: true },
      { name: 'Containment', index: 7, disabled: true },
      { name: 'Permanent Countermeasures', index: 8, disabled: true },
      { name: 'Re-Open Comments', index: 9, disabled: true },
      { name: 'Close Comments', index: 10, disabled: true },
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
    if (this.selectedTab < 10) {
        this.selectedTab++;
        this.tabs[this.selectedTab].disabled = false;
    }
  }
}
