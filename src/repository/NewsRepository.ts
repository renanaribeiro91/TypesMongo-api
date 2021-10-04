import newSchema from '../models/newsModels'


const main = class newsRepository{

    get(){
        return newSchema.find({})
        
    }

    getById(_id){
        return newSchema.findById(_id)

    }

    create(news){
        return newSchema.create(news)

    }
    
    update(_id,news){
        return newSchema.findByIdAndUpdate(_id,news)

    }

    delete(_id){
        return newSchema.findByIdAndRemove(_id)

    }
}

export default new main()