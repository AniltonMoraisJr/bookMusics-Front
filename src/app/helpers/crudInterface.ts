import { Observable } from 'rxjs';
export interface CrudInterface {
    getAll<T>(page?: string) : Observable<T>;
    store<T>(object?: any) : Observable<T>;
    update<T>(object?: any, id?: number) : Observable<T>;
    delete(id?: number) : Observable<any>;
    show<T>(id?: number): Observable<T>;
}