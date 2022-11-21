const  CATEGORIES = {
    1:{name: ' EDP '},
    2:{name: ' EDT '},
    3:{name: ' Parfum '},
    4:{name: '  Mascu '},
    5:{name: '  Femin '},
    6:{name: ' One Million Luck'},
    7:{name: ' CK BE'},
    8:{name: ' One Gold'},
    9:{name: ' CK Free Blue '},
    10:{name: ' Blue Chanel '},
    11:{name: ' Coco Chanel '},
    12:{name: ' Allure '},
}

class CategoryController{
    getCategories(params){
        return CATEGORIES;
    }

    getCategory(id){
        let result = CATEGORIES[id];
        if(result !== null && result !== undefined) {
            return result;
        }
        return {
            msg: "Não foi possível encontrar nenhuma categoria encontrado"
        }
}}

module.exports =  CategoryController;