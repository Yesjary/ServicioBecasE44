import { Component, OnInit } from '@angular/core';
import { BecasExternasService } from '../../service/becas-externas.service';

@Component({
  selector: 'app-list-becas-externas',
  templateUrl: './list-becas-externas.component.html',
  styleUrls: ['./list-becas-externas.component.css']
})
export class ListBecasExternasComponent implements OnInit {
  becas: any[] = [];

  constructor(private becasService: BecasExternasService) {}

  ngOnInit(): void {
    this.becasService.obtenerBecas().subscribe(data => {
      this.becas = data;
    });
  }

  eliminarBeca(id: string): void {
    this.becasService.eliminarBeca(id).subscribe(() => {
      this.becas = this.becas.filter(beca => beca._id !== id);
    });
  }
}
