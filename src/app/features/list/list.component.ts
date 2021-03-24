import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdditiveService } from '../../services/additives.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list$: Observable<any[]>;

  // get ListFromService$(){
  //   return this._service.list$;
  // }

  constructor(private _service:AdditiveService) { }

  ngOnInit(): void{
    // this._service.load();
    this.list$ = this._service.getAll();
  }

}
