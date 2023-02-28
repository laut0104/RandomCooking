import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuRepoService } from '../../repositories/menu-repo.service';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss']
})
export class MenuAddComponent implements OnInit {

  public menuForm = this.fb.group({
    menuname: ['', Validators.required],
    recipes: this.fb.array([
      this.fb.control('', [
        Validators.required,
        Validators.pattern('[^/]+')
      ])
    ])
  });
  public recipe: string = '{'

  constructor(
    private fb: FormBuilder,
    private menuRepoSvc: MenuRepoService,
    public router: Router,
  ) { }

  ngOnInit(): void {}

  get recipes() {
    return this.menuForm.get('recipes') as FormArray;
  }

  addRecipes() {
    this.recipes.push(this.fb.control('', [
      Validators.required,
      Validators.pattern('[^/]+')
    ]));
  }
  removeRecipes() {
    if(this.recipes.length-1 >0) this.recipes.removeAt(this.recipes.length-1);
  }

  createMenu() {
    this.menuForm.value.recipes?.map((recipe) => {
      this.recipe = this.recipe + recipe + '/,'
    })
    this.recipe = this.recipe.slice(0,-1) + '}'
    const body = {
      'menuname': this.menuForm.value.menuname,
      'recipes': this.recipe,
    }
    this.menuRepoSvc.createMenu(1, body).subscribe(() => {
      this.router.navigate([`/menu-list`]);
    })
  }

}
