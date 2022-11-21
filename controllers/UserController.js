class UseController{
    getUser(id){
        return {
            id:1,
            name:"Arrax",
        };
}

    getUsers(){
        return [
            {
                id:1,
                name:"Arrax",
            },
            {
                id:2,
                name:"Caraxes",
            },
            {
                id:3,
                name:"Syrax",
            },
            {
                id:4,
                name:"Drogon",
            },
        ];
    }
}

module.exports = UseController;