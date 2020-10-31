import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitUser } from '../models/gitUser.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GitUserService {

    constructor(public http: HttpClient){
    }

    findByName(name: string): Observable<GitUser>{
        return this.http.get<GitUser>(`https://api.github.com/users/${name}`);
    }

}