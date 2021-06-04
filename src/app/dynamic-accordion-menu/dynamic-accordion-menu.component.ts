import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-dynamic-accordion-menu',
	templateUrl: './dynamic-accordion-menu.component.html',
	styleUrls: ['./dynamic-accordion-menu.component.scss']
})
export class DynamicAccordionMenuComponent implements OnInit {
	@ViewChild(MatAccordion) accordionMenu: MatAccordion;

	menu = [
		{
			"level": 1,
			"label": "Inicio",
			"link": "/",
			"icon": "home",
			"children": null
		},
		{
			"level": 1,
			"label": "Biblioteca de Tableros",
			"link": "",
			"icon": "leaderboard",
			"children": [
				{
					"level": 2,
					"label": "Libreria 2 update",
					"link": "",
					"children": [
						{
							"level": 3,
							"label": "Caso dde Uso 2",
							"children": [
								{
									"tablero": "Tablero Testito 2",
									"etiquetas": [
										{
											"etiqueta": "Etiqueta 2",
											"posittion": "0",
											"consulta": "0",
											"cia": "0",
											"url": "https://ww.google.com/PARAM_FECHA"
										}
									],
									"link": "biblioteca-tableros/tablero-testito-2",
									"level": 4,
									"label": "Tablero Testito 2"
								},
								{
									"tablero": "tablero nuevow",
									"etiquetas": [
										{
											"etiqueta": "etiqueta_",
											"posittion": "0",
											"consulta": "1",
											"cia": "0",
											"url": "https://www.karlabarvosa.com/PARAM_FECHAPARAM_COMPANIA"
										}
									],
									"link": "biblioteca-tableros/tablero-nuevow",
									"level": 4,
									"label": "tablero nuevow"
								}
							]
						}
					]
				},
				{
					"level": 2,
					"label": "libreria ejemplo tablero",
					"link": "",
					"children": [
						{
							"level": 3,
							"label": "tablero",
							"children": [
								{
									"tablero": "Tabbbbbbbb",
									"etiquetas": [
										{
											"etiqueta": "Etiquetilla",
											"posittion": "0",
											"consulta": "1",
											"cia": "0",
											"url": "http://localhost:4200/configuracion/tableros/PARAM_FECHAPARAM_COMPANIA"
										}
									],
									"link": "biblioteca-tableros/tabbbbbbbb",
									"level": 4,
									"label": "Tabbbbbbbb"
								},
								{
									"tablero": "ejemplo",
									"etiquetas": [
										{
											"etiqueta": "etiqueta",
											"posittion": "0",
											"consulta": "0",
											"cia": "0",
											"url": "https://www.google.comPARAM_FECHA"
										}
									],
									"link": "biblioteca-tableros/ejemplo",
									"level": 4,
									"label": "ejemplo"
								},
								{
									"tablero": "name",
									"etiquetas": [
										{
											"etiqueta": "etiqueta",
											"posittion": "0",
											"consulta": "0",
											"cia": "0",
											"url": "https://www.google.comPARAM_FECHA"
										}
									],
									"link": "biblioteca-tableros/name",
									"level": 4,
									"label": "name"
								},
								{
									"tablero": "treretert",
									"etiquetas": [
										{
											"etiqueta": "werwe",
											"posittion": "0",
											"consulta": "0",
											"cia": "0",
											"url": "http://localhost:4200/configuracion/tableros/PARAM_FECHA"
										}
									],
									"link": "biblioteca-tableros/treretert",
									"level": 4,
									"label": "treretert"
								}
							]
						}
					]
				}
			]
		},
		{
			"level": 1,
			"label": "Biblioteca de Reportes",
			"link": "biblioteca-reportes",
			"icon": "pie_chart",
			"children": null
		},
		{
			"level": 1,
			"label": "Administración",
			"link": "",
			"icon": "text_snippet",
			"children": [
				{
					"level": 2,
					"label": "Usuarios",
					"link": "administracion/usuarios",
					"children": null
				}
			]
		},
		{
			"level": 1,
			"label": "Configuración",
			"link": "",
			"icon": "settings",
			"children": [
				{
					"level": 2,
					"label": "Librerías",
					"link": "configuracion/librerias",
					"children": null
				},
				{
					"level": 2,
					"label": "Casos de Uso",
					"link": "configuracion/casos-uso",
					"children": null
				},
				{
					"level": 2,
					"label": "Permisos en reportes",
					"link": "configuracion/permisos-reportes",
					"children": null
				},
				{
					"level": 2,
					"label": "Tableros",
					"link": "configuracion/tableros",
					"children": null
				},
				{
					"level": 2,
					"label": "Reportes",
					"link": "configuracion/reportes",
					"children": null
				}
			]
		}
	]

	icons: any = {
		"Inicio": 'home',
		"Usuarios": 'person',
		"Configuración": 'settings',
		"Administración": 'text_snippet',
		"Biblioteca de Tableros": 'leaderboard',
		"Biblioteca de Reportes": 'pie_chart'
	}

	modulos: any = []
	padreSeleccionado = '';

	level1: string;
	level2: string;
	level3: string;
	level4: string;
	level5: string;


	constructor(
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	/**
	 * @description Funcion para seleccionar el modulo de acuerdo a la ruta
	 */
	setSelectedModule(): void {
		let url = this.route.snapshot["_routerState"].url;
		let paths = url
			.split("?")[0]
			.replace("/", "")
			.split("/");
		if (paths[0]) {
			this.padreSeleccionado = paths[0].toUpperCase();
		}
	}

	selectModulo(modulo): void {
		this.padreSeleccionado = modulo;
	}

	selectLevel(item: { level: number, label: string }): void {
		this['level' + item.level] = item.label;

		if (item.level === 1) {
			this.level2 = '';
			this.level3 = '';
			this.level4 = '';
		}
		if (item.level === 2) {
			this.level3 = '';
			this.level4 = '';
		}
		if (item.level === 3) {
			this.level4 = '';
		}
	}

	levelSelected(label: string): boolean {
		return this.level1 === label || this.level2 === label || this.level3 === label;
	}

	navigateInicio(): void {
		this.router.navigate(['/']);
	}

	createMenu(): void {
		// this.modulos = this.acces_service.menu;
		// this.menu = this.modulos.map(modulo => (
		// 	{
		// 		level: 1,
		// 		label: modulo.modulo,
		// 		link: modulo.link ? modulo.link : modulo.modulo === 'Inicio' ? '/' : '',
		// 		icon: this.icons[modulo.modulo],
		// 		children: modulo.permisos?.length > 0 ? modulo.permisos.map(permiso => (
		// 			{
		// 				level: 2,
		// 				label: permiso.libreria || permiso.permiso,
		// 				link: permiso.link || '',
		// 				children: permiso.caso_usos?.length > 0 ? permiso.caso_usos.map(caso_uso => (
		// 					{
		// 						level: 3,
		// 						label: caso_uso.caso_uso,
		// 						children: caso_uso.tableros?.length > 0 ? caso_uso.tableros.map(tablero => (
		// 							{
		// 								...tablero,
		// 								level: 4,
		// 								label: tablero.tablero,
		// 								link: tablero.link
		// 							}
		// 						)) : null
		// 					}
		// 				)) : null
		// 			}
		// 		)) : null
		// 	}
		// ));
	}

}
