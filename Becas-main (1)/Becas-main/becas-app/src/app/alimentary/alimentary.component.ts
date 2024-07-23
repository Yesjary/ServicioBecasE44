import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import jspdf from 'jspdf';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-alimentary',
  standalone: true,
  templateUrl: './alimentary.component.html',
  styleUrls: ['./alimentary.component.css'],
  imports: [FormsModule, RouterLink]
})
export class AlimentaryComponent {
  startDate = ''; 
  endDate = '';

  authService = inject(AuthService);

  logOut() {
    return this.authService.logout();
  }

  getDatesInRange(startDate: string, endDate: string): string[] {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let dateArray = [];
    let currentDate = start;
    
    while (currentDate <= end) {
      dateArray.push(new Date(currentDate).toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return dateArray;
  }

  getNumberOfDays(startDate: string, endDate: string): number {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let timeDiff = end.getTime() - start.getTime();
    let dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; // Including both start and end dates
    return dayDiff;
  }

  generateTickets(): void {
    let doc = new jspdf();
    doc.addFileToVFS("MyFont.ttf", "BASE64_ENCODED_FONT");
    doc.addFont("MyFont.ttf", "MyFont", "normal");
    doc.setFont("MyFont");

    let folioBase = 1000;
    let xPos = 10;
    let yPos = 10;
    let pageHeight = doc.internal.pageSize.height;

    // Obtener todas las fechas en el rango
    let dateArray = this.getDatesInRange(this.startDate, this.endDate);
    let numTickets = dateArray.length; // Usar la cantidad de fechas como el número de boletos

    for (let i = 0; i < numTickets; i++) {
      let contenido = `Boleto ${i + 1}\nFolio: ${folioBase + i}`;
      let fecha = `Fecha: ${dateArray[i]}`;
      if (yPos > pageHeight - 20) {
        doc.addPage();
        yPos = 10;
      }
      doc.rect(xPos, yPos, 100, 40); 
      doc.text(contenido, xPos, yPos + 32);
      doc.text(fecha, xPos, yPos + 16);
      yPos += 50; 
    }

    let pdfData = doc.output();
    let blob = new Blob([pdfData], { type: 'application/pdf' });
    let url = URL.createObjectURL(blob);
    window.open(url);
    URL.revokeObjectURL(url);
  }

  openModal() {
    document.getElementById('dateModal')!.style.display = 'block';
  }

  closeModal() {
    document.getElementById('dateModal')!.style.display = 'none';
  }

  saveDates() {
    console.log('Fecha de Inicio:', this.startDate);
    console.log('Fecha de término:', this.endDate);
    this.generateTickets();
  }
}
