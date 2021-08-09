class RouletteController{
    constructor()
    {
        this.btnFetchAll = document.querySelector('.btn-requestAll');
        this.btnRequestByCost = document.querySelectorAll('.btn-requestByCost');
        this.btnRequestByPlayerLevel = document.querySelectorAll('.btn-requestByPlayerLevel');
        this.championList = document.querySelector('.championListFlex');
        this.createEvents();
    }

    createEvents()
    {
        this.btnFetchAll.addEventListener('click', () =>
        {
            this.getChampionList();
        });

        this.btnRequestByCost.forEach((element) =>{
            element.addEventListener('click', () =>{
                this.getChampionList(`cost/${element.id}`);
            });
        });

        this.btnRequestByPlayerLevel.forEach((element) =>{
            element.addEventListener('click', () =>{
                this.getChampionList(`level/${element.id}`);
            });
        });
    }

    getChampionList(searchParams = "")
    {
        let path = `http://localhost:3000/champions/${searchParams}`;

        fetch(path).then(res =>{
            res.json().then((championList) =>{
                this.makeList(championList);
            });
        });
    }

    makeList(championArray)
    {
        this.championList.innerHTML = '';
        championArray.forEach((element) =>{
            const mainDiv = document.createElement('div');
            const championCardTitle = document.createElement('div');
            const championTraitsDiv = document.createElement('div');

            mainDiv.className = `championBox cost${element.championCost}`;
            championTraitsDiv.className = `championTraits cost${element.championCost}`;
            championCardTitle.className = `championCardTitle cost${element.championCost}`

            const lblNome = document.createElement('label');
            const lblOrigin = document.createElement('label');
            const lblClass = document.createElement('label');
            const lblClass2 = document.createElement('label');
            const lblCost = document.createElement('label');
            const lblChampionPool = document.createElement('label');
            
            lblNome.textContent = element.championName;
            lblOrigin.textContent = element.championOrigin;
            lblClass.textContent = element.championClass;
            lblCost.textContent = `Cost: ${element.championCost}`;
            lblChampionPool.textContent = `Pool: ${element.championPool}`;


            championCardTitle.appendChild(lblNome);
            championCardTitle.appendChild(lblCost);
            championCardTitle.appendChild(lblChampionPool);
            

            championTraitsDiv.appendChild(lblOrigin);
            championTraitsDiv.appendChild(lblClass);
            
            if(element.championClass2) 
            {
                lblClass2.textContent = element.championClass2;
                championTraitsDiv.appendChild(lblClass2);
            }

            mainDiv.appendChild(championCardTitle)
            mainDiv.appendChild(championTraitsDiv);
            this.championList.appendChild(mainDiv);
        });
    }
}