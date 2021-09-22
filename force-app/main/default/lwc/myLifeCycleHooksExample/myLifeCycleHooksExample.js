import { LightningElement } from 'lwc';

export default class MyLifeCycleHooksExample extends LightningElement {

   // name;

    constructor(){
        super();
        console.log("Inside Constructor");
    }
    
    connectedCallback(){
        console.log("Inside Connected CallBack");
    }

    renderedCallback(){
        console.log("Inside Rendered CallBack");
    }

   /* changeHandler(event){
        this.name=event.target.value
    }*/
    
    errorCallback(error,stack){
        console.log(error.message)
        console.log(stack)
    }
}