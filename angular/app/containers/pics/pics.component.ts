import { Component } from '@angular/core'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { Data, DataService } from '../../services/data.service';

@Component({
    selector: 'app-home',
    styleUrls: ['pics.component.scss'],
    templateUrl: 'pics.component.html'
})
export class PicsComponent {
    // background style
    bkg: string = 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_inbody_900x506%2Fpublic%2F1502824044%2Froyal-farms-best-gas-station-food-FT-SS0817.jpg%3Fitok%3Dig79fdSU&w=700&q=85';
    style2 = {
        'background': 'url(' + this.bkg + ')',
        'background-attachment': 'fixed',
        'height': '100%'
    };

    // pics
    pic: string[] = [
        'app/img/Oaki.JPG',
        'app/img/Oaki2.JPG',
        'app/img/SAM_3942.JPG',
        'app/img/SAM_3953.JPG',
        'app/img/SAM_3961.JPG',
        'app/img/SAM_3963.JPG',
        'app/img/SAM_3982.JPG',
        'app/img/SAM_3999.JPG'
    ];
    size = 500;
}