import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuration } from './app.constants';
import { OidcSecurityService } from 'angular-auth-oidc-client';

import './app.component.scss';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

    constructor(public securityService: OidcSecurityService) {
    }

    ngOnInit() {
        if (window.location.hash) {
            this.securityService.authorizedCallback();
        }
    }
}