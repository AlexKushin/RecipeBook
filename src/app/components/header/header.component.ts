import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared-models/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  collapsed = true;

  ngOnInit(): void {

  }

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
