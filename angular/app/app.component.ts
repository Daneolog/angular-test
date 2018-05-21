import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { Data, DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    templateUrl: 'app.component.html'
})
export class AppComponent {
    data: any[] = [];

    thingy: Date = new Date();
    style1: any;
    style2: any;
    // pic: string = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    pic1: string = 'app/img/Oaki.JPG';
    pic2: string = 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_inbody_900x506%2Fpublic%2F1502824044%2Froyal-farms-best-gas-station-food-FT-SS0817.jpg%3Fitok%3Dig79fdSU&w=700&q=85';
    size: number = 500;
    percent: number = 100;

    checked: boolean;
    title: string = '';
    url: string = '';
    id: number = 5;
    item: number = 0;

    constructor(private dataService: DataService) {
        // this.data = [{text: 'numero uno', target: 'http://google.com'},
        //              {text: 'numero due', target: 'http://yahoo.com'},
        //              {text: 'numero tre', target: 'https://duckduckgo.com/'},
        //              {text: 'numero quattro', target: 'https://bing.com/'}];
        dataService.getData().subscribe((data: any[]) => this.data = data);

        this.style1 = {
            'filter': 'brightness(' + this.percent + '%)'
        };

        this.style2 = {
            'background-image': 'url(' + this.pic2 + ')',
            'height': '100%'
        };
    }
    
    click1() {
        this.thingy = new Date();
        this.item++;
    }

    click2(index: any) {
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
            this.data.push(new Data(this.id, this.title, this.url));
            // this.dataService.addData(this.id, this.title, this.url).subscribe(data => console.log(data));
            this.id++;
        }
    }

    check(event: any) {
        this.checked = event;
    }
}
