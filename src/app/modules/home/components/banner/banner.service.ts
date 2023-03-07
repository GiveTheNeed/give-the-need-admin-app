import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from 'src/app/core/services';

import { environment } from 'src/environments/environment';
import { URLConstants } from 'src/app/core/constants/url-constants';

import { Banner } from 'src/app/shared/models/banner.model';

@Injectable({
    providedIn: 'root'
})
export class BannerService {

    baseUrl: string = environment.baseUrl;
    
    constructor(
        private httpService: HttpService
    ) { }

    getBanners(): Observable<any> {
        const url = this.baseUrl + URLConstants.GET_BANNERS_API;
        return this.httpService.get(url);
    }

    getBannerById(id: number) {
        const url = this.baseUrl + URLConstants.GET_BANNER_BY_ID_API;
        return this.httpService.get(url);
    }

    createBanner(payload: Banner) {
        const url = this.baseUrl + URLConstants.CREATE_BANNER_API;
        return this.httpService.post(url, payload);
    }

    updateBanner(payload: Banner) {
        const url = this.baseUrl + URLConstants.UPDATE_BANNER_API;
        return this.httpService.put(url, payload);
    }

    deleteBanner(payload: Banner) {
        let id = payload._id;
        const url = this.baseUrl + URLConstants.DELETE_BANNER_API + id;
        return this.httpService.delete(url);
    }
}
