const express = require('express');
const router = express.Router();
const champions = require('../championHandler');

router.get('/', (req, res)=>{
    res.json(champions.championList);
});

router.get('/level/:playerLevel/roulette', (req, res, next)=>{
    let playerLevel = req.params.playerLevel.replace(/\D/g, "");
    res.json(champions.getPlayerRoulette(playerLevel, next));
});

router.get('/level/:playerLevel', (req, res, next) =>{

    let playerLevel = req.params.playerLevel.replace(/\D/g, "");  
    res.json(champions.getChampionsByLevel(playerLevel, next));
});


router.get('/cost/:championCost', (req, res, next) =>{

    let championCost = req.params.championCost.replace(/\D/g, "");
    res.json(champions.getChampionByCost(championCost, next));
});

router.post('/champions/:championName/roulette', (req, res, next) =>{
    champions.replaceChampion(req.params.championName, next);
    res.json({message: 'Funcionou'})
});
module.exports = router;