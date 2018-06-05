import { Observable } from 'rxjs';
export interface CrudInterface {
    getAll<T>(page?: string) : Observable<T>;
    save<T>(object: any) : Observable<T>;
    update<T>(object: any) : Observable<T>;
    delete<T>(object: any) : Observable<T>;
    show<T>(id?: number): Observable<T>;
}