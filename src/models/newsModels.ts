import {Schema , model} from "mongoose"

const newsSchema = new Schema({
    hat:{
        type:String,
    },title:{
        type:String,
    },text:{
        type:String,
    },authror:{
        type:String,
    },img:{
        type:String,
    },publicsDate:{
        type:Date,
    },link:{
        type:String,
    },active:{
        type:Boolean,
    }
},{
    timestamps:true
})

export default model('news',newsSchema)