import { Component, OnInit } from '@angular/core';
import readXlsxFile from 'read-excel-file';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loading: boolean;
  constructor() { }

  ngOnInit() {
    this.loading = false;
  }
  uploadFile(input) {
    if (input.files.length) {
      if (input.files[0].type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        readXlsxFile(input.files[0]).then((rows) => {
          this.loading = true;
          const keys = rows.shift();
          // tslint:disable-next-line: one-variable-per-declaration
          let i = 0, k = 0, obj = null;
          const output = [];
          for (i = 0; i < rows.length; i++) {
          obj = {};
          for (k = 0; k < keys.length; k++) {
              obj[keys[k]] = rows[i][k];
          }
          output.push(obj);
        }
          this.loading = false;
          console.log(output);
        });
      }
    }
  }
}
