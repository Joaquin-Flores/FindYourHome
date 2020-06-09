import { Component, OnInit, ɵConsole } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpUploadProgressEvent } from '@angular/common/http';


@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.css']
})
export class SubirImagenComponent implements OnInit {
  private urlBase = "http://localhost:8080/api";

  constructor( private dataRoute: ActivatedRoute,private httpClient: HttpClient) {}
  message: string;

  codigoVivienda:number;

  ngOnInit(): void {
    this.codigoVivienda = parseInt(this.dataRoute.snapshot.paramMap.get('id'))
    console.log(this.codigoVivienda)
  }



//DROPZONE----------------------------
  files: File[] = [];

  filesDiseno: File[] = [];

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
  }
  
  onSelectDiseno(event) {
		console.log(event);
		this.filesDiseno.push(...event.addedFiles);
	}

	onRemoveDiseno(event) {
		console.log(event);
		this.filesDiseno.splice(this.filesDiseno.indexOf(event), 1);
	}

  agregarImagenes()
  {
    console.log("bien");
    for (var plano of this.files){
      this.onUpload(plano)
    } 
    for (var diseno of this.filesDiseno){
      this.onUploadDiseno(diseno)
    }  
  }

  /*agregarImagenesDiseno()
  {
    console.log("bien");
    for (var diseno of this.filesDiseno){
      this.onUploadDiseno(diseno)
    }   
  }*/
//---------------------------------


  /*public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }*/

  onUpload(plano:File) {
    
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', plano, plano.name);
    console.log("PLANO")
    this.httpClient.post(this.urlBase + '/uploadplano/' + this.codigoVivienda , uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
    );
  }

  onUploadDiseno(diseno:File) {
    
    const uploadDisenoData = new FormData();
    uploadDisenoData.append('imageFile', diseno, diseno.name);
    console.log("DISENO")
    this.httpClient.post(this.urlBase + '/uploaddiseno/' + this.codigoVivienda , uploadDisenoData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
    );
  }
}
