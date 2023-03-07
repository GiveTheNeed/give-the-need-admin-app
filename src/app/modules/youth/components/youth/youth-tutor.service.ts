import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from 'src/app/core/services';

import { environment } from 'src/environments/environment';
import { URLConstants } from 'src/app/core/constants/url-constants';

import { Youth } from 'src/app/shared/models/youth.model';
import { Tutor } from 'src/app/shared/models/tutor.model';

@Injectable({
    providedIn: 'root'
})
export class YouthTutorService {

    baseUrl: string = environment.baseUrl;

    constructor(
        private httpService: HttpService
    ) { }

    getYouths(): Observable<any> {
        const url = this.baseUrl + URLConstants.GET_YOUTHS_API;
        return this.httpService.get(url);
    }

    getYouthById(id: number) {
        const url = this.baseUrl + URLConstants.GET_YOUTH_BY_ID_API;
        return this.httpService.get(url);
    }

    createYouth(payload: Youth) {
        const url = this.baseUrl + URLConstants.CREATE_YOUTH_API;
        return this.httpService.post(url, payload);
    }

    updateYouth(payload: Youth) {
        const url = this.baseUrl + URLConstants.UPDATE_YOUTH_API;
        return this.httpService.put(url, payload);
    }

    deleteYouth(payload: Youth) {
        let id = payload._id;
        const url = this.baseUrl + URLConstants.DELETE_YOUTH_API + id;
        return this.httpService.delete(url);
    }

    getTutors() {
        const url = this.baseUrl + URLConstants.GET_TUTORS_API;
        return this.httpService.get(url);
    }

    getTutorById(id: number) {
        const url = this.baseUrl + URLConstants.GET_TUTOR_BY_ID_API;
        return this.httpService.get(url);
    }

    createTutor(payload: Tutor) {
        const url = this.baseUrl + URLConstants.CREATE_TUTOR_API;
        return this.httpService.post(url, payload);
    }

    updateTutor(payload: Tutor) {
        const url = this.baseUrl + URLConstants.UPDATE_TUTOR_API;
        return this.httpService.put(url, payload);
    }

    deleteTutor(payload: Tutor) {
        const id = payload._id;
        const url = this.baseUrl + URLConstants.DELETE_TUTOR_API + id;
        return this.httpService.delete(url);
    }
}
