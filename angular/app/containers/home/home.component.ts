import { Component } from '@angular/core'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { Data, DataService } from '../../services/data.service';

@Component({
    selector: 'app-home',
    styleUrls: ['home.component.scss'],
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    // temporary datastore
    data: any[] = [];

    // darkness style
    percent: number = 100;
    style1 = {
        'filter': 'brightness(' + this.percent + '%)'
    };

    // background style
    pic2: string = 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_inbody_900x506%2Fpublic%2F1502824044%2Froyal-farms-best-gas-station-food-FT-SS0817.jpg%3Fitok%3Dig79fdSU&w=700&q=85';
    style2 = {
        'background-image': 'url(' + this.pic2 + ')',
        'height': '100%'
    };

    // pics
    pic1: string = 'app/img/Oaki.JPG';
    size = 500;

    // temporary input variables
    id: number;
    title: string;
    url: string;
    now = new Date();
    counter = 0;
    checked = false;
    
    constructor(private dataService: DataService) {
        dataService.getData().subscribe((data: any[]) => {
            this.data = data;
            this.id = this.data.length;
        });


    }

    click1() {
        this.now = new Date();
        this.counter++;
    }

    edit(index: any) {
        console.log(index);

        if (this.title != '' && this.url != '') {
            this.dataService
                .setData(index, this.title, this.url)
                .subscribe(data => console.log(data));
            this.dataService.getData().subscribe(data => this.data = data);
        }
    }
    
    submit(event: any) {
        if (this.title != '' && this.url != '') {
            this.dataService
                .addData(this.id, this.title, this.url)
                .subscribe(data => console.log(data));
            this.dataService.getData().subscribe(data => this.data = data);
        }

        this.id++;
    }

    check(event: any) {
        this.checked = event;
    }
}