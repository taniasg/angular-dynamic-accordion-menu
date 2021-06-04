import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { DynamicAccordionMenuComponent } from './dynamic-accordion-menu.component';

// Modules
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [
		DynamicAccordionMenuComponent
	],
	imports: [
		CommonModule,
		MatExpansionModule,
		MatMenuModule,
		MatButtonModule,
		MatIconModule
	],
	exports: [
		DynamicAccordionMenuComponent
	]
})
export class DynamicAccordionMenuModule { }
