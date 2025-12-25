/**
 * Partial information about Github repository
 */
export interface Repo {
	[key: string]: unknown;
	topics: string[];
	/**
	 * user/repo
	 */
	full_name: string;
	html_url: string;
}

/**
 * Informations about project stored in the .forprotfolio file
 */
export interface ProjectInfo {
	name: string;
	url?: string;
	images: Image[];
	interactions: InteractionButton[];
	enabled: boolean;
}

/**
 * Interaction with project (technology, framework, homepage)
 */
export interface InteractionButton {
	name: string;
	icon: string;
	url: string;
}

/**
 * Image featured in a project information
 */
export interface Image {
	alt: string;
	src: string;
	full?: string;
}
