const express=require('express');
const router=express.Router();
const axios=require('axios');
const Coin = require('./model/coinModel');

router.get('/index', async(req,res)=>{
    try{
    const response = await axios.get(process.env.API);
    const data = response.data;
    const top10Keys = Object.keys(data).slice(0, 10);

    const data10 = top10Keys.map(key => data[key]);
 
    for (const coinKey in data10) {
        const coinData = data10[coinKey];
        const { name, last, buy, sell, volume, base_unit } = coinData;

        await Coin.updateOne(
            { base_unit },
            {
                name,
                last: parseFloat(last),
                buy: parseFloat(buy),
                sell: parseFloat(sell),
                volume: parseFloat(volume),
                base_unit
            },
            { upsert: true } 
        );
    };
    const coins= await Coin.find();
   
    
    res.render('body',{coins,coin:coins[0]});
    }catch(err){
        console.log(err);
        res.status(500).send(err)
    }
})

router.get('/index/:id',async(req,res)=>{
    try{
    const id=req.params.id;
    console.log(req.params);
    const coin=await Coin.findById(id);
    console.log('coin',coin);
    const coins=await Coin.find();
    console.log('fetcehd');
    
    res.render('show.ejs',{coin, coins});
    }catch(err){
        console.log(err);
        res.status(500).send(err)
    }
})
module.exports=router;


