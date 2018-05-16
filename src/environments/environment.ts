// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAidjdBgrMYxLd4wyfaXPid4lUoXAMsrPw",
    authDomain: "angular4firebasesample.firebaseapp.com",
    databaseURL: "https://angular4firebasesample.firebaseio.com",
    projectId: "angular4firebasesample",
    storageBucket: "angular4firebasesample.appspot.com",
    messagingSenderId: "506850600415"
  }
};
