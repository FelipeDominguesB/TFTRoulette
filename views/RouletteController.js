class RouletteController{
    constructor()
    {
        this.championArray = [];
        this.lastSearch = "";
        this.btnRequestByCost = document.querySelectorAll('.btn-requestByCost');
        this.btnRequestByPlayerLevel = document.querySelectorAll('.btn-requestByPlayerLevel');
        this.championList = document.querySelector('.championListFlex');
        this.createEvents();
    }

    createEvents()
    {
       
        this.btnRequestByCost.forEach((element) =>{
            element.addEventListener('click', () =>{
                this.getChampionList(`cost/${element.id}`);
            });
        });

        this.btnRequestByPlayerLevel.forEach((element) =>{
            element.addEventListener('click', () =>{
                this.getChampionList(`level/${element.id}/roulette`);
            });
        });
    }

    getChampionList(searchParams = "")
    {

        if(this.championArray.length > 0 && this.lastSearch.includes('level')) this.reroll();
        
        let path = `http://localhost:3000/champions/${searchParams}`;

        fetch(path).then(res =>{
            res.json().then((championList) =>{
                this.lastSearch = searchParams;
                this.championArray = championList;
                this.makeList(this.championArray);
            });
        });
    }

    buyChampion(championName)
    {
        let result = this.championArray.findIndex((element) =>{
            return element.championName == championName;
        });
        this.championArray.splice(result, 1);
        this.makeList(this.championArray);
    }

    reroll()
    {
        this.championArray.forEach(element =>{
            fetch(`http://localhost:3000/champions/${element.championName}/roulette`, {method: 'POST'}).then(res =>{     
            });
        });
        
    }

    makeList(championArray)
    {
        this.championList.innerHTML = '';
       
        championArray.forEach((element) =>{
            const mainDiv = document.createElement('div');
            const championPhotoDiv = document.createElement('div');
            const championText = document.createElement('div');
            const textoUm = document.createElement('div');
            const textoDois = document.createElement('div');
            


            const backgroundImage = document.createElement('img');
            const iconImage = document.createElement('img');
            const iconImage2 = document.createElement('img');

            const lblOrigin = document.createElement('label');
            const lblClass = document.createElement('label');
            const lblNome = document.createElement('label');
            const lblCost = document.createElement('label');

            mainDiv.className = `altChampionBox cost${element.championCost}`;
            championPhotoDiv.className = `altChampionPhoto`;
            championText.className = `altChampionText`;
            textoUm.className = `TextoUm`;
            textoDois.className = `TextoDois`;
            

            backgroundImage.src = `./imagens/${element.championName.replace(/ /g, '')}.jpg`;
            iconImage.src = `./imagens/icon.png`;
            iconImage2.src = `./imagens/icon.png`;
            
            lblNome.textContent = element.championName;
            lblOrigin.textContent = element.championOrigin;
            lblClass.textContent = element.championClass;
            lblCost.textContent = element.championCost;
            lblCost.style.textAlign = 'end';
            
            mainDiv.addEventListener('click', (event) =>{
                event.preventDefault();
                this.buyChampion(element.championName);
            }, false);

            mainDiv.appendChild(championPhotoDiv);
                championPhotoDiv.appendChild(backgroundImage);
                championPhotoDiv.appendChild(textoUm);
                    textoUm.appendChild(iconImage);
                    textoUm.appendChild(lblOrigin);
                championPhotoDiv.appendChild(textoDois);
                    textoDois.appendChild(iconImage2);
                    textoDois.appendChild(lblClass);
                    
                    textoUm.style.top = "60%";
                    textoDois.style.top = "80%";

                    if(element.championClass2)
                    {
                        const textoTres = document.createElement('div');
                        const lblClass2 = document.createElement('label');
                        const iconImage3 = document.createElement('img');

                        textoUm.style.top = "40%";
                        textoDois.style.top = "60%";
                        textoTres.style.top = "80%";

                        textoTres.className = `TextoTres`;
                        iconImage3.src = `./imagens/icon.png`;
                        lblClass2.textContent = element.championClass2;

                        championPhotoDiv.appendChild(textoTres);
                            textoTres.appendChild(iconImage3);
                            textoTres.appendChild(lblClass2);
                    }
            mainDiv.appendChild(championText);
                championText.appendChild(lblNome);
                championText.appendChild(lblCost);

            this.championList.appendChild(mainDiv);
        });
    }
}