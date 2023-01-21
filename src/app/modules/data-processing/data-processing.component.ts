import { Component } from "@angular/core";
import { map } from "rxjs";
import { UserService } from "src/app/core/http/user.service";


@Component({
    selector: 'app-data-processing',
    template: `<div *ngFor="let user of users$ | async">{{user.name}}</div>`
})
export class DataProcessingComponent {
    readonly users$ = this.userService.getUsers().pipe(map((response) => {
        return response
    }))
    constructor(
        private readonly userService: UserService
    ) { }
}