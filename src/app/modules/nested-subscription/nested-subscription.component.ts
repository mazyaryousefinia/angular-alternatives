import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs";
import { UserService } from "src/app/core/http/user.service";


@Component({
    selector: 'app-nested-subscription',
    template: `<div>{{(user$ | async) | json}}</div>`
})
export class NestedSubscriptionComponent {
    readonly user$ = this.route.params.pipe(switchMap((params: any) => this.userService.getSingleUser(params.user_id)))
    constructor(
        private readonly userService: UserService,
        private readonly route: ActivatedRoute
    ) { }
}