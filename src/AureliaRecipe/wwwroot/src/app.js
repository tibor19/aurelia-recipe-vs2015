export class App{
    constructor(){
        this.title = "The spaghetti code files";
        this.message = "Random recipes";
        
    }

    configureRouter(config, router) {

        config.title = 'Spaghetti code recipe in Aurelia';
        config.map([
            {route : ['', 'home'],  moduleId : 'home',        nav : true, title: 'Home'},
            {route : 'weekly-menu', moduleId : 'weekly-menu', nav : true, title: 'Weekly Menu' },
            {route : 'recipe',      moduleId : 'recipe',      nav : true, title: 'I Feel Lucky' },
            {route : 'recipe/:id',  moduleId : 'recipe'}
        ]);

        this.router = router;
    }
}