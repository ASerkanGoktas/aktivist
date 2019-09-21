import tpl from './greet.template.html'

class GreetController{


    constructor(){
        this.greeting = "Hello my dear folks!";
    }
}

export default {
    template : tpl,
    controller : GreetController
}