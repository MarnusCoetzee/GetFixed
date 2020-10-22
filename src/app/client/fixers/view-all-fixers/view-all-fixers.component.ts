import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as geofirex from 'geofirex';
import * as firebase from 'firebase';
@Component({
  selector: 'app-view-all-fixers',
  templateUrl: './view-all-fixers.component.html',
  styleUrls: ['./view-all-fixers.component.scss']
})
export class ViewAllFixersComponent implements OnInit {

  geo = geofirex.init(firebase);

  validLocationString: string;
  validLocation: boolean;

  fixerCategory: string;

  latitude: number;
  longitude: number;

  defaultLatitude: number = -26.2041;
  defaultLongitude: number = 28.0473;
  defaultCenter: google.maps.LatLngLiteral;

  zoom = 15;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fixerCategory = this.activatedRoute.snapshot.paramMap.get('query');
    this.validLocationString = this.activatedRoute.snapshot.paramMap.get('validLocation');
  }

  

}
