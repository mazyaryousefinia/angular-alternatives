import { Component } from "@angular/core";
import { combineLatest, map } from "rxjs";
import { CommentService } from "src/app/core/http/comment.service";
import { TodoService } from "src/app/core/http/todo.service";
import { UserService } from "src/app/core/http/user.service";


@Component({
    selector: 'app-view-model',
    template: `
    <ng-container *ngIf="vm$ | async as vm">
        <h4>Users</h4>
        <ul *ngFor="let user of vm.user">
            <li>{{user.name}}</li>
        </ul>

        <h4>Todos</h4>
        <ul *ngFor="let todo of vm.todo | slice:0:5">
            <li>{{todo.title}}</li>
        </ul>


        <h4>Comments</h4>
        <ul *ngFor="let comment of vm.comment">
            <li>{{comment.body}}</li>
        </ul>
    </ng-container>
    `
})
export class ViewModelComponent {
    readonly vm$ = combineLatest([
        this.userService.getUsers(),
        this.todoService.getTodos(),
        this.commentService.getComments()
    ]).pipe(map(([user, todo, comment]) => {
        return {
            user,
            todo,
            comment
        }
    })
    )
    constructor(
        private readonly userService: UserService,
        private readonly todoService: TodoService,
        private readonly commentService: CommentService
    ) { }
}