import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ISideBar {
	icon: IconDefinition;
	title: string;
	isHeader: boolean;
	route: string;
}
