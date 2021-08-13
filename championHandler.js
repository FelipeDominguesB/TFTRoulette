class champions{
    
    
    constructor()
    {

        const origins = 
        {
            Abomination: "Abomination",
            Dawnbringer: "Dawnbringer",
            Draconic: "Draconic",
            Forgotten: "Forgotten",
            Hellion: "Hellion",
            Inanimate: "Inanimate",
            Ironclad: "Ironclad",
            Nightbringer: "Nightbringer",
            Redeemed: "Redeemed",
            Revenant: "Revenant",
            Sentinel: "Sentinel",
        };

        const classes = {
            Assassin: "Assassin",
            Brawler: "Brawler",
            Cannoneer: "Cannoneer",
            Caretaker: "Caretaker",
            Cavalier: "Cavalier",
            Cruel: "Cruel",
            Invoker: "Invoker",
            Knight: "Knight",
            Legionnaire: "Legionnaire",
            Mystic: "Mystic",
            Ranger: "Ranger",
            Renewer: "Renewer",
            Skirmisher: "Skirmisher",
            Spellweaver: "Spellweaver",
            Victorious: "Victorious",
        };

        this.championList = 
        [
            {
                championName: 'Aatrox',
                championCost: 1,
                championOrigin: origins.Redeemed,
                championClass: classes.Legionnaire
            },
            {
                championName: 'Gragas',
                championCost: 1,
                championOrigin: origins.Dawnbringer,
                championClass: classes.Brawler
            },
            {
                championName: 'Kalista',
                championCost: 1,
                championOrigin: origins.Abomination,
                championClass: classes.Legionnaire
            },
            {
                championName: 'Kha Zix',
                championCost: 1,
                championOrigin: origins.Abomination,
                championClass: classes.Legionnaire
            },
            {
                championName: 'Kled',
                championCost: 1,
                championOrigin: origins.Hellion,
                championClass: classes.Cavalier
            },
            {
                championName: 'Leona',
                championCost: 1,
                championOrigin: origins.Redeemed,
                championClass: classes.Knight
            },
            {
                championName: 'Olaf',
                championCost: 1,
                championOrigin: origins.Sentinel,
                championClass: classes.Skirmisher
            },
            {
                championName: 'Poppy',
                championCost: 1,
                championOrigin: origins.Hellion,
                championClass: classes.Knight
            },
            {
                championName: 'Senna',
                championCost: 1,
                championOrigin: origins.Sentinel,
                championClass: classes.Cannoneer
            },
            {
                championName: 'Udyr',
                championCost: 1,
                championOrigin: origins.Draconic,
                championClass: classes.Skirmisher
            },
            {
                championName: 'Vayne',
                championCost: 1,
                championOrigin: origins.Forgotten,
                championClass: classes.Ranger
            },
            {
                championName: 'Vladimir',
                championCost: 1,
                championOrigin: origins.Nightbringer,
                championClass: classes.Renewer
            },
            {
                championName: 'Ziggs',
                championCost: 1,
                championOrigin: origins.Hellion,
                championClass: classes.Spellweaver
            },
        
            {
                championName: 'Brand',
                championCost: 2,
                championOrigin: origins.Abomination,
                championClass: classes.Spellweaver
        
            },
            {
                championName: 'Hecarim',
                championCost: 2,
                championOrigin: origins.Forgotten,
                championClass: classes.Cavalier
            },
            {
                championName: 'Irelia',
                championCost: 2,
                championOrigin: origins.Sentinel,
                championClass: classes.Skirmisher,
                championClass2: classes.Legionnaire
            },
            {
                championName: 'Kennen',
                championCost: 2,
                championOrigin: origins.Hellion,
                championClass: classes.Skirmisher
            },
            {
                championName: 'Nautilus',
                championCost: 2,
                championOrigin: origins.Ironclad,
                championClass: classes.Knight
            },
            {
                championName: 'Pyke',
                championCost: 2,
                championOrigin: origins.Sentinel,
                championClass: classes.Assassin
            },
            {
                championName: 'Sejuani',
                championCost: 2,
                championOrigin: origins.Nightbringer,
                championClass: classes.Cavalier,
                championClass2: classes.Brawler
            },
            {
                championName: 'Sett',
                championCost: 2,
                championOrigin: origins.Draconic,
                championClass: classes.Brawler,
            },
            {
                championName: 'Soraka',
                championCost: 2,
                championOrigin: origins.Dawnbringer,
                championClass: classes.Renewer,
            },
            {
                championName: 'Syndra',
                championCost: 2,
                championOrigin: origins.Redeemed,
                championClass: classes.Invoker,
            },
            {
                championName: 'Thresh',
                championCost: 2,
                championOrigin: origins.Forgotten,
                championClass: classes.Knight,
            },
            {
                championName: 'Tristana',
                championCost: 2,
                championOrigin: origins.Hellion,
                championClass: classes.Cannoneer,
            },
            {
                championName: 'Varus',
                championCost: 2,
                championOrigin: origins.Redeemed,
                championClass: classes.Cannoneer,
            },
            {
                championName: 'Ashe',
                championCost: 3,
                championOrigin: origins.Draconic,
                championClass: classes.Ranger,
            },
            {
                championName: 'Lee Sin',
                championCost: 3,
                championOrigin: origins.Nightbringer,
                championClass: classes.Skirmisher,
            },
            {
                championName: 'Lulu',
                championCost: 3,
                championOrigin: origins.Hellion,
                championClass: classes.Mystic,
            },
            {
                championName: 'Lux',
                championCost: 3,
                championOrigin: origins.Redeemed,
                championClass: classes.Mystic,
            },
            {
                championName: 'Miss Fortune',
                championCost: 3,
                championOrigin: origins.Forgotten,
                championClass: classes.Cannoneer,
            },
            {
                championName: 'Nidalee',
                championCost: 3,
                championOrigin: origins.Dawnbringer,
                championClass: classes.Skirmisher,
            },
            {
                championName: 'Nocturne',
                championCost: 3,
                championOrigin: origins.Revenant,
                championClass: classes.Assassin,
            },
            {
                championName: 'Nunu',
                championCost: 3,
                championOrigin: origins.Abomination,
                championClass: classes.Brawler,
            },
            {
                championName: 'Rakan',
                championCost: 3,
                championOrigin: origins.Sentinel,
                championClass: classes.Renewer,
            },
            {
                championName: 'Riven',
                championCost: 3,
                championOrigin: origins.Dawnbringer,
                championClass: classes.Legionnaire,
            },
            {
                championName: 'Yasuo',
                championCost: 3,
                championOrigin: origins.Nightbringer,
                championClass: classes.Legionnaire,
            },
            {
                championName: 'Zyra',
                championCost: 3,
                championOrigin: origins.Draconic,
                championClass: classes.Spellweaver,
            },
            {
                championName: 'Aphelios',
                championCost: 4,
                championOrigin: origins.Nightbringer,
                championClass: classes.Ranger,
            },
            {
                championName: 'Diana',
                championCost: 4,
                championOrigin: origins.Nightbringer,
                championClass: classes.Assassin,
            },
            {
                championName: 'Draven',
                championCost: 4,
                championOrigin: origins.Forgotten,
                championClass: classes.Legionnaire,
            },
            {
                championName: 'Fiddlesticks',
                championCost: 4,
                championOrigin: origins.Abomination,
                championClass: origins.Revenant,
                championClass2: classes.Mystic,
            },
            {
                championName: 'Galio',
                championCost: 4,
                championOrigin: origins.Sentinel,
                championClass: origins.Draconic,
                championClass2: classes.Knight,
            },
            {
                championName: 'Ivern',
                championCost: 4,
                championOrigin: origins.Revenant,
                championClass: classes.Renewer,
                championClass2: classes.Invoker,
            },
            {
                championName: 'Jax',
                championCost: 4,
                championOrigin: origins.Ironclad,
                championClass: classes.Skirmisher,
            },
            {
                championName: 'Karma',
                championCost: 4,
                championOrigin: origins.Dawnbringer,
                championClass: classes.Invoker,
            },
            {
                championName: 'Lucian',
                championCost: 4,
                championOrigin: origins.Sentinel,
                championClass: classes.Cannoneer,
            },
            {
                championName: 'Rell',
                championCost: 4,
                championOrigin: origins.Redeemed,
                championClass: origins.Ironclad,
                championClass2: classes.Cavalier,
            },
            {
                championName: 'Velkoz',
                championCost: 4,
                championOrigin: origins.Redeemed,
                championClass: classes.Spellweaver,
            },
            {
                championName: 'Akshan',
                championCost: 5,
                championOrigin: origins.Sentinel,
                championClass: classes.Ranger,
            },
            {
                championName: 'Garen',
                championCost: 5,
                championOrigin: origins.Dawnbringer,
                championClass: classes.Victorious,
                championClass2: classes.Knight,
            },
            {
                championName: 'Gwen',
                championCost: 5,
                championOrigin: origins.Inanimate,
                championClass: classes.Mystic,
            },
            {
                championName: 'Heimerdinger',
                championCost: 5,
                championOrigin: origins.Draconic,
                championClass: classes.Renewer,
                championClass2: classes.Caretaker,
            },
            {
                championName: 'Kayle',
                championCost: 5,
                championOrigin: origins.Redeemed,
                championClass: classes.Legionnaire,
            },
            {
                championName: 'Teemo',
                championCost: 5,
                championOrigin: origins.Hellion,
                championClass: classes.Invoker,
                championClass2: classes.Cruel,
            },
            {
                championName: 'Viego',
                championCost: 5,
                championOrigin: origins.Forgotten,
                championClass: classes.Skirmisher,
                championClass2: classes.Assassin,
            },
            {
                championName: 'Volibear',
                championCost: 5,
                championOrigin: origins.Revenant,
                championClass: classes.Brawler,
            },
        
        ];
        
        
        this.championList.forEach((element) => {
            switch (element.championCost) {
                case 1:
                    element.championPool = 29;
                    break;
                case 2:
                    element.championPool = 22;
                    break;
                case 3:
                    element.championPool = 18;
                    break;
                case 4:
                    element.championPool = 12;
                    break;
                case 5:
                    element.championPool = 10;
                    break;
            }
        });
    }

    getChampionByCost(championCost, championList = this.championList)
    {
        return championList.filter((champion) =>{
            return champion.championCost == championCost;
        });
    }



    replaceChampion(championName)
    {
        let index = this.championList.findIndex((element) =>{
            return element.championName == championName;
        });

        this.championList[index].championPool++;
    }

    getChampionsByLevel(playerLevel, needsPool=false)
    {
        let filteredByLevel = [];
        
        if(playerLevel >= 1)
        {
            this.getChampionByCost(1).forEach((element) =>{
                filteredByLevel.push(element);
            });
        }

        if(playerLevel >= 3)
        {
            this.getChampionByCost(2).forEach((element) =>{
                filteredByLevel.push(element);
            });
        }

        if(playerLevel >= 4)
        {
            this.getChampionByCost(3).forEach((element) =>{
                filteredByLevel.push(element);
            });
        }

        if(playerLevel >= 5)
        {
            this.getChampionByCost(4).forEach((element) =>{
                filteredByLevel.push(element);
            });
        }

        if(playerLevel >= 7)
        {
            this.getChampionByCost(5).forEach((element) =>{
                filteredByLevel.push(element);
            });
        }

        if(needsPool)
        {
            filteredByLevel.forEach((element, index) =>{
                if(element.championPool == 0) filteredByLevel.slice(index);
            });
        }
        
        return filteredByLevel;
    }
    
    getProbabilites()
    {

        const rouletteProbabilities = [
            { cost: [100, 0, 0, 0, 0]      },
            { cost: [ 100,  0,  0,  0, 0]  },
            { cost: [ 75,  25,  0,  0, 0]  },
            { cost: [ 55,  30,  15,  0, 0] },
            { cost: [ 45,  33,  20,  2, 0] },
            { cost: [ 25,  40,  30,  5, 0] },
            { cost: [ 19,  30,  35,  15, 1]},
            { cost: [ 15,  20,  35,  25, 5]},
            { cost: [ 10,  15,  30,  30, 15]},
        ];
        return rouletteProbabilities;
    }
    getRandomChampion(playerLevel)
    {
        let counter = 0;
        let rouletteProbabilities = this.getProbabilites();
        let levelProbabilities = rouletteProbabilities[playerLevel-1];
        let rouletteChampions = [];
        let filteredArray = this.getChampionsByLevel(playerLevel, true);
        let randonMumber = Math.floor(Math.random() * (100 - 1));
        let starterValue = 0;
        let MinMax;

        while(levelProbabilities.cost[counter] != 0 && levelProbabilities.cost[counter])
        {       
            MinMax = [starterValue, starterValue + levelProbabilities.cost[counter]];
            if(randonMumber > MinMax[0] && randonMumber <= MinMax[1])
            {
                counter++;
                break;
            }
            starterValue += levelProbabilities.cost[counter];
            counter++;
        }

        let totalChampionPool = 0;

        let newFilteredarray = [];
        filteredArray.forEach(element =>{
            if(element.championCost == counter)
            {
                newFilteredarray.push(element);
                totalChampionPool += element.championPool;
            }
        });
        
        starterValue = 0, counter=0;
        randonMumber = Math.floor(Math.random() * (totalChampionPool - 1));
        let newChampionPool = 0;
        while(newFilteredarray[counter])
        {
            newChampionPool = starterValue + newFilteredarray[counter].championPool;
            MinMax = [starterValue, newChampionPool];

            if(randonMumber>= MinMax[0] && randonMumber <= MinMax[1])
            {
                rouletteChampions = newFilteredarray[counter];
                rouletteChampions.championPool--;
                
                break;
            }

            starterValue = newChampionPool;
            counter++;

        }

        return rouletteChampions;

    }

    getPlayerRoulette(playerLevel)
    {
        let counter = 0, championArray = [];
        while(counter < 5)
        {
            championArray.push(this.getRandomChampion(playerLevel));
            counter++;
        }

        return championArray;
    }
}

module.exports = new champions();