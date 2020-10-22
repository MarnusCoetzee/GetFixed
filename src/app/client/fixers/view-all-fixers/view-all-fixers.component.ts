import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  isLoading: boolean;

  filteredUsers: Array<any>;
  allFixers: Array<any>;
  featuredFixers: Array<any>;
  notFeaturedFixers: Array<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fixerCategory = this.activatedRoute.snapshot.paramMap.get('query');
    this.validLocationString = this.activatedRoute.snapshot.paramMap.get('validLocation');
    if (this.validLocationString === 'true') {
      this.isLoading = true;
    }
    this.getValidLocationBoolean(this.validLocationString);
  }

  getUserCoordinates() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
  }

  getValidLocationBoolean(value: string) {
    if (value === 'true') {
      this.validLocation = true;
      this.getUserCoordinates();
      setTimeout(() => {
        this.beginQuery(this.fixerCategory, this.latitude, this.longitude);
      }, 200);
      console.log('Boolean true');
    } else {
      this.validLocation = false;
      // choose location on map before query
      this.defaultCenter = {
        lat: this.defaultLatitude,
        lng: this.defaultLongitude
      }
    }
  }

  beginQuery(category: string, latitude: number, longitude: number) {
    const center = this.geo.point(latitude, longitude);
    const radius = 50;
    const field = 'position';
    // @ts-ignore
    this.geo.query('users').within(center, radius, field).subscribe(userResults => {
      this.allFixers = userResults;
      this.filteredUsers = this.allFixers.filter((fixerResult) => {
        this.isLoading = false;
        return fixerResult.skills.includes(category);
      });
      this.featuredFixers = this.filteredUsers.filter((fixerResult) => {
        return fixerResult.boostStatus === true;
      }).slice(0, 9);
      this.notFeaturedFixers = this.filteredUsers.filter((fixerResult) => {
        return fixerResult.boostStatus === false;
      });
      console.log(this.notFeaturedFixers);
    });
    console.log('searching the database for ' + category + ' in ' + latitude + longitude);
  }

  onClickNavigateBack() {
    this.router.navigate(['client']);
  }

}
