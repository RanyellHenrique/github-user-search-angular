import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { GitUser} from 'src/app/models/gitUser.model';
import { GitUserService } from 'src/app/services/gitUser.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  gitUser$: Observable<GitUser>; 

  formGroup = new FormGroup({
    username: new FormControl('')
  });


  constructor(public gitUserService: GitUserService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.gitUser$ = this.gitUserService.findByName(this.formGroup.value.username);
  }

}
