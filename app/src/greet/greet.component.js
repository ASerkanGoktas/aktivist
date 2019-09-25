import tpl from './greet.template.html'

class GreetController{


    constructor($mdMedia){
        this.greeting = "Hello my dear folks!";
        this.acts = [];

        this.selact = {
            img : "lasf",
            isim : "Not selected",
            aciklama : "nOt selected",
            tarih : "0/0/0"
        }

        for(let i = 0; i<10; i++){
            this.acts.push({
                isim : "Zengin olma etkinliği",
                tarih : "66/666/6666",
                img : "teo.jpg",
                aciklama : "Etkinlik açıklaması",
                ayrinti : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Venenatis tellus in metus vulputate. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Sed odio morbi quis commodo odio aenean. Mauris augue neque gravida in fermentum et sollicitudin ac. Vel orci porta non pulvinar. Dictum at tempor commodo ullamcorper a lacus vestibulum. Orci ac auctor augue mauris. Egestas fringilla phasellus faucibus scelerisque eleifend. Mauris a diam maecenas sed enim ut sem. Et malesuada fames ac turpis egestas. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Id diam vel quam elementum pulvinar etiam non quam."
            });
        }


        this.broaden = act => {
            this.selact = act;
        };

        this.isLarge = () => {
            return $mdMedia('lg');
        };
    }

}

GreetController.inject = ["mdMedia"];

export default {
    template : tpl,
    controller : GreetController
}