import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { EventEmitter } from '@angular/core';

import { Nonconformity } from './nonconformity.model';

@Injectable()
export class NonconformityService {
    nonconformitiesChanged = new EventEmitter<Nonconformity[]>();

    private   nonconformities: Nonconformity[] = [
        new Nonconformity('1657774A','While','Assembly',20,'','', 'description'),
        new Nonconformity('1657774A','While','Assembly',20,'','', 'description'),
      ];

    getNonconformities() {
        return this.nonconformities.slice();
    }

    addNonconformities(nonconformity: Nonconformity) {
        this.nonconformities.push(nonconformity);
        this.nonconformitiesChanged.emit(this.nonconformities.slice())
    }

    postNonconformity() {
        console.log()
    }

    // Observable string sources
    private emitPositionNonconformity = new Subject<any>();
    private emitDispositionNonconformity = new Subject<any>();
    private emitDocumentationNonconformity = new Subject<any>();
    private emitIdentificationNonconformity = new Subject<any>();

    // Observable string streams
    positionEmitted$ = this.emitPositionNonconformity.asObservable();
    dispositionEmitted$ = this.emitDispositionNonconformity.asObservable();
    documentationEmitted$ = this.emitDocumentationNonconformity.asObservable();
    identificationEmitted$ = this.emitIdentificationNonconformity.asObservable();

    // Service message commands
    positionNonconformity(position: any) {
        this.emitPositionNonconformity.next(position);
    }

    dispositionNonconformity(disposition: any[]) {
        this.emitDispositionNonconformity.next(disposition);
    }

    documentationNonconformity(documentation: Nonconformity) {
        this.emitDocumentationNonconformity.next(documentation);
    }

    identificationNonconformity(identification: Nonconformity) {
        this.emitIdentificationNonconformity.next(identification);
    }
}