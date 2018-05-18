import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TextButtonComponent } from "./textbutton/textbutton.component";
import { MyListComponent } from "./mylist/mylist.component";
import { MyTextfieldComponent } from "./textfield/textfield.component";
import { CheckTextComponent } from "./checktext/checktext.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        TextButtonComponent,
        MyListComponent,
        MyTextfieldComponent,
        CheckTextComponent
    ],
    exports: [
        TextButtonComponent,
        MyListComponent,
        MyTextfieldComponent,
        CheckTextComponent
    ]
})
export class ComponentModule {}
