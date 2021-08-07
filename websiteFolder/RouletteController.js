class RouletteController{
    constructor()
    {
        this.btnFetchApi = document.querySelectorAll('.btn-request');
        this.championList = document.querySelector('.championListFlex');
        this.createEvents();
    }

    createEvents()
    {
        this.btnFetchApi.forEach((element, index, array) =>{
            element.addEventListener('click', () =>{
                fetch(`http://localhost:3000/${element.id}`).then(res =>
                {
                    res.json().then((allChampions) => 
                    {
                        this.makeList(allChampions);
                    });
                })
            })

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
            
            lblNome.textContent = element.championName;
            lblOrigin.textContent = element.championOrigin;
            lblClass.textContent = element.championClass;
            lblCost.textContent = `Cost: ${element.championCost}`;

            championCardTitle.appendChild(lblNome);
            championCardTitle.appendChild(lblCost);


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