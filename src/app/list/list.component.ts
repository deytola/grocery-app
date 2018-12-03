import { Component, OnInit } from "@angular/core";




@Component({
    selector: "List",
    moduleId: module.id,
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
    
    groceryList: Array<Object> = [];

    constructor() {
        // Use the component constructor to inject providers.
        
    }
    
    ngOnInit(): void {
        this.groceryList.push({ name: "Apples" });
        this.groceryList.push({ name: "Bananas" });
        this.groceryList.push({ name: "Oranges" });

    }

}
