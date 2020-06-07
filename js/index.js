const express = require('express')
const mongoose = require('mongoose')
const dataModel = require('./model/dataModel')

mongoose.connect('mongodb://127.0.0.1:27017/iwpdatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
})
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/Json',async (req,res)=>{
    try{
        const indiaData=await dataModel.findOne({State: 'India'})
        const Punjabdata=await dataModel.findOne({State: 'Punjab'})
        const gujratdata=await dataModel.findOne({State: 'Gujrat'})
        const assamdata=await dataModel.findOne({State: 'Assam'})
        const goadata=await dataModel.findOne({State: 'Goa'})
        const sikkimData=await dataModel.findOne({State: 'Sikkim'})


        res.status(200).send({
            India: {
                Cases: indiaData.Cases,
                Deaths: indiaData.Deaths,
                DeathRate: indiaData.DeathRate,
                Recoveries: indiaData.Recoveries,
                RecoveredRate: indiaData.RecoveredRate
            },
            Punjab: {
                Cases: Punjabdata.Cases,
                Deaths: Punjabdata.Deaths,
                DeathRate: Punjabdata.DeathRate,
                Recoveries: Punjabdata.Recoveries,
                RecoveredRate: Punjabdata.RecoveredRate
            },
            Gujrat: {
                Cases: gujratdata.Cases,
                Deaths: gujratdata.Deaths,
                DeathRate: gujratdata.DeathRate,
                Recoveries: gujratdata.Recoveries,
                RecoveredRate: gujratdata.RecoveredRate
            },
            Assam: {
                Cases: assamdata.Cases,
                Deaths: assamdata.Deaths,
                DeathRate: assamdata.DeathRate,
                Recoveries: assamdata.Recoveries,
                RecoveredRate: assamdata.RecoveredRate
            }, Sikkim: {
                Cases: sikkimData.Cases,
                Deaths: sikkimData.Deaths,
                DeathRate: sikkimData.DeathRate,
                Recoveries: sikkimData.Recoveries,
                RecoveredRate: sikkimData.RecoveredRate
            }, Goa: {
                Cases: goadata.Cases,
                Deaths: goadata.Deaths,
                DeathRate: goadata.DeathRate,
                Recoveries: goadata.Recoveries,
                RecoveredRate: goadata.RecoveredRate
            }
        })
    }
    catch (e) {
        res.sta
    }
})

app.post('/Update', async (req, res) => {
    try {
        const updateKeys = Object.keys(req.body)
        console.log(req.body)
        console.log(updateKeys)
        const allowedUpdates = ['State', 'Cases', 'Deaths', 'DeathRate', 'Recoveries', 'RecoveredRate']
        const isValidOperation = updateKeys.every((update) => {
            return allowedUpdates.includes(update)
        })
        if (!isValidOperation) {
            console.log('test')
            return res.status(400).send({
                error: "wrong update param"
            })
        }
        const data = await dataModel.findOne({
            State: req.body.State
        })
        updateKeys.forEach((update) => {
            data[update] = req.body[update]
        })
        await data.save()
        res.status(200).send()
    }
    catch (e) {
        res.status(400).send(e)
    }
})

app.listen(port,()=>{

    console.log('Server is up on port ',port)
})
