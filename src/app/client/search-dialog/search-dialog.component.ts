import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { _filter,  StateGroup, stateGroups } from '../../data';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnInit {

  searchForm: FormGroup;
  searchString: any;

  stateGroups = stateGroups;

  validLocation: boolean;

  stateForm: FormGroup = this.fb.group({
    stateGroup: ['', Validators.required]
  });

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SearchDialogComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );
    this.requestLocation();
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      this.searchString = value;
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }
    return this.stateGroups;
  }

  clearTextField() {
    this.stateForm.reset();
  }

  onClickNavigateCategories() {
    const query = this.searchString;
    console.log(query);
    this.dialogRef.close();
    console.log(query, this.validLocation);
    // this.router.navigate(['catalogue/filtered-artists', query]);
  }

  private requestLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.validLocation = true;
      }, error => {
        if (error.PERMISSION_DENIED) {
          console.log('location denied');
          this.validLocation = false;
        }
      });
    }
  }

}
