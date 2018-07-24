import { Component} from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html'
})
export class CatalogoComponent {

  constructor ( private _ps:PeliculasService
                //private modalService: NgbModal
  ) {

  }
  // public ver (detalle:any, detalleModal) {
  //   //this.results = results;
  //   this.modalService.open(detalleModal);
  // }

}
