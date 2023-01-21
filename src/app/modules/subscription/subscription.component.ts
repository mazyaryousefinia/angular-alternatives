import { Component } from "@angular/core";
import { UserService } from "src/app/core/http/user.service";


@Component({
    selector: 'app-subscription',
    template: `<div *ngFor="let user of users$ | async">{{user.name}}</div>`
})
export class SubscriptionComponent {
    readonly users$ = this.userService.getUsers();
    constructor(
        private readonly userService: UserService
    ) { }
}