// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'auto-cuidado-cma',
    appId: '1:503285298351:web:518e5175b25cae96b7105a',
    storageBucket: 'auto-cuidado-cma.appspot.com',
    apiKey: 'AIzaSyC8cACMNksT_BiBiNx8Jvh2V1vycuqSbyM',
    authDomain: 'auto-cuidado-cma.firebaseapp.com',
    messagingSenderId: '503285298351',
    measurementId: 'G-7QX7MCWZQT',
  },
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyC8cACMNksT_BiBiNx8Jvh2V1vycuqSbyM",
    authDomain: "auto-cuidado-cma.firebaseapp.com",
    projectId: "auto-cuidado-cma",
    storageBucket: "auto-cuidado-cma.appspot.com",
    messagingSenderId: "503285298351",
    appId: "1:503285298351:web:518e5175b25cae96b7105a",
    measurementId: "${config.measurementId}"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
