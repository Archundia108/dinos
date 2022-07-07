import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DinoService {

  baseUri: string = "https://dyno-api-ds02.herokuapp.com/api";

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }


  //Método para agregar un nuevo empleado
  agregarEmpleado(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data).pipe(catchError(this.errorManagement))
  }

  //Método para obtener a todos los empleados
  getEmpleados() {
    let url = `${this.baseUri}/empleados`;
    return this.http.get(url);
  }

  //Método para obtener un solo empleado por su id
  getEmpleado(id): Observable<any> {
    let url = `${this.baseUri}/empleado/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => { return res || {}; }),
      catchError(this.errorManagement)
    )
  }

  //Método para actualizar su empleado
  updateEmpleado(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorManagement)
    );
  }

  //Método para eliminar un empleado
  deleteEmpleado(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorManagement)
    );
  }

  errorManagement(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //Obetenemos el error del lado del cliente
      errorMessage = error.error.message;
    } else {
      //Obtenemos el error del lado del servidor
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => { return errorMessage });
  }
}
