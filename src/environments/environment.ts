// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  episodesUrl: "https://rickandmortyapi.com/api/episode",
  charactersUrl: "https://rickandmortyapi.com/api/character",
  auth: {
    domain:"dev-oanb8k0r.us.auth0.com",
    clientId:"iuAIGA1cUji3CDjzwwqA25j1JA3BxfJ9",
    redirectUrl: window.location.origin,
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.