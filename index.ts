///<reference path="node_modules/angular2/typings/browser.d.ts"/>

import 'core-js';
import 'rxjs/Rx';
import 'zone.js/dist/zone';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component({
    selector: 'hello-world',
    template: `
        <h1>Hello world!</h1>
    `
})
class HelloWorldComponent {
}

@Component({
    selector: 'my-app',
    template: `
        <hello-world></hello-world>
    `,
    directives: [HelloWorldComponent]
})
class MyAppComponent {
}

bootstrap(MyAppComponent);