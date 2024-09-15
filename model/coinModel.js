const { default: mongoose } = require("mongoose");

const Schema=mongoose.Schema;

const CoinSchema=Schema({
    name:String,
    last:Number,
    buy:Number,
    sell:Number,
    volume:Number,
    base_unit:String,
});

const Coin=mongoose.model('Coin',CoinSchema);
module.exports=Coin;