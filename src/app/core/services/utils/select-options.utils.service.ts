import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SelectOptionsUtilsService {
//   private readonly baseUrl = `${environment.tmsServerUrl}/utils`

  constructor(private httpClient: HttpClient) {}

//   auditoria(tabela: string, idRegistro: number) {
//     const url = `${this.baseUrl}/auditoria?tabela=${tabela}&idRegistro=${idRegistro}`;

//     return this.httpClient.get<Auditoria>(url);
//   }

//   buscaCEP(cep: string): Observable<any> {
//     const url = `${this.baseUrl}/cep/`;

//     return this.httpClient.post<any>(url, { cep: cep });
//   }

//   buscaCNPJ(cnpj: string): Observable<any> {
//     const url = `${this.baseUrl}/cnpj?Cnpj=${cnpj}`;

//     return this.httpClient.get<BuscarCNPJRetorno>(url);
//   }

//   calcularImposto(model: RequestImposto): Observable<any> {
//     const url = `${this.baseUrl}/imposto`;

//     return this.httpClient.post<ResponseImposto>(url, model);
//   }

//   listarCondicaoIcms(): Observable<any> {
//     const url = `${this.baseUrl}/listar/condicaoIcms`;

//     return this.httpClient.get<BuscarCondicaoIcmsRetorno[]>(url);
//   }

//   listarEnderecosCpfCnpj(cpfCnpj: string): Observable<PessoaEndereco> {
//     const url = `${this.baseUrl}/endercocpfcnpj?cpfcnpj=${cpfCnpj}`;

//     return this.httpClient.get<PessoaEndereco>(url);
//   }

//   listarLocalidades(idUF: number): Observable<any> {
//     const url = `${environment.tmsServerUrl}/localidades/listar/${idUF}`;

//     return this.httpClient.get<BuscarLocalidadeRetorno[]>(url);
//   }

//   listarPaises(): Observable<any> {
//     const url = `${this.baseUrl}/listar/paises`;

//     return this.httpClient.get<BuscarPaisRetorno[]>(url);
//   }

//   listarTipoEmbalagem(
//     idEstabelecimento: number,
//     mostrarInativos: boolean = false
//   ): Observable<any> {
//     const url = `${environment.tmsServerUrl}/tipoembalagem/listar?IdEstabelecimento=${idEstabelecimento}&MostraInativos=${mostrarInativos}`;

//     return this.httpClient.get<TipoEmbalagem[]>(url);
//   }

//   listarUFs(idPais: number = environment.IdPaisBrasil): Observable<any> {
//     const url = `${this.baseUrl}/listar/ufs/${idPais}`;

//     return this.httpClient.get<BuscarUFRetorno[]>(url);
//   }

//   upload(model: Upload): Observable<any> {
//     const url = `${this.baseUrl}/upload/documentos`;

//     return this.httpClient.post<any>(url, model);
//   }
}