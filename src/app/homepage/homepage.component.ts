import { Component } from '@angular/core';
import { FootbarComponent } from "../footbar/footbar.component";

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [FootbarComponent]
})
export class HomepageComponent {

}
