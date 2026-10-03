import { type ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
	providers: [
		provideRouter([]),
		provideServerRendering(withRoutes(serverRoutes)),
	],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
