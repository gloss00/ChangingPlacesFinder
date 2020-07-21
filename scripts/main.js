var button = document.querySelector(".button");
button.addEventListener('click', updateTable);


function updateTable() {
    var tableHeader = ["ID", "Name", "La", "Lo", "Address", "City", "Postcode"];
    var table = document.querySelector(".dataTable");
    var newHeadRow = document.createElement("tr");
    newHeadRow.classList.add("header");
    table.appendChild(newHeadRow);

    for (i = 0; i < tableHeader.length; i++) {
        var newHead = document.createElement("th")
        newHead.textContent = tableHeader[i];
        newHeadRow.appendChild(newHead);
    }

    for (i = 0; i < cpArray.length; i++) {
        var newRow = document.createElement("tr");
        newRow.classList.add('row');
        table.appendChild(newRow)

        var newDataId = document.createElement("td")
        newDataId.textContent = cpArray[i].id;
        newRow.appendChild(newDataId);

        var newDataName = document.createElement("td")
        newDataName.textContent = cpArray[i].n;
        newRow.appendChild(newDataName);

        var newDataLa = document.createElement("td")
        newDataLa.textContent = cpArray[i].la;
        newRow.appendChild(newDataLa);

        var newDataLo = document.createElement("td")
        newDataLo.textContent = cpArray[i].lo;
        newRow.appendChild(newDataLo);

        var newDataAddress = document.createElement("td")
        newDataAddress.textContent = cpArray[i].a1;
        newRow.appendChild(newDataAddress);

        var newDataCity = document.createElement("td")
        newDataCity.textContent = cpArray[i].c;
        newRow.appendChild(newDataCity);

        var newDataPostcode = document.createElement("td")
        newDataPostcode.textContent = cpArray[i].p;
        newRow.appendChild(newDataPostcode);
        }
}


var cpArray = [
{"id":1,"n":"@Worle","1":"\/toilet-images\/577fab93-d3f9-4e52-8a7f-ba469b265097","2":"worle1.JPG","3":"1","d":null,"la":"51.3570140","lo":"-2.9288128","a1":"58 New Bristol Road","a2":null,"c":"Weston-Super-Mare","p":"BS22 6AQ","co":null,"cn":"GB","m":true,"f":false,"u":false,"ia":false},{"id":2,"n":"No 1 Staffordshire Place, Staffordshire County Council","1":"\/toilet-images\/e1766163-e1df-44dd-a4f1-6eda75d6d797*\/toilet-images\/e1766163-e1df-44dd-a4f1-6eda75d6d797*\/toilet-images\/e1766163-e1df-44dd-a4f1-6eda75d6d797","2":"1Staff1.JPG*1Staff2.JPG*1Staff3.JPG","3":"1,1,1,1","d":null,"la":"52.8057348","lo":"-2.1149929","a1":"No 1 Staffordshire Place","a2":null,"c":"Stafford","p":"ST16 2DH","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":4,"n":"360 Beach and Watersports","1":null,"2":null,"3":"1","d":null,"la":"51.6114132","lo":"-3.9654000","a1":"360 Beach and Watersports Centre","a2":"Mumbles Road","c":"Swansea","p":"SA2 0AY","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":5,"n":"Abbey Lane","1":null,"2":null,"3":"1","d":null,"la":"53.3218789","lo":"-1.4727322","a1":"Chesterfield Road","a2":null,"c":"Sheffield","p":"S8 0BR","co":null,"cn":"United Kingdom","m":true,"f":true,"u":true,"ia":true},{"id":6,"n":"Aberdeen Community Health and Care Village","1":"\/toilet-images\/6cadd58c-ed87-4039-afd6-a36e1a15ba01*\/toilet-images\/6cadd58c-ed87-4039-afd6-a36e1a15ba01*\/toilet-images\/6cadd58c-ed87-4039-afd6-a36e1a15ba01","2":"Map 1.jpg*photo2.JPG*photo3.JPG","3":"1,1,1,1","d":null,"la":"57.1501863","lo":"-2.0916757","a1":"50 Frederick Street","a2":null,"c":"Aberdeen","p":"AB24 5HY","co":"Aberdeen City","cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":7,"n":"Aberdeen Royal Infirmary","1":"\/toilet-images\/f88f4c62-ff3c-404e-a78d-130deb9b444b*\/toilet-images\/f88f4c62-ff3c-404e-a78d-130deb9b444b*\/toilet-images\/f88f4c62-ff3c-404e-a78d-130deb9b444b","2":"Aberdeen Royal Infirmary entrance.jpg*ARI changing place 1.JPG*ARI changing place 2.JPG","3":"1,1,1,1","d":null,"la":"57.1547411","lo":"-2.1384518","a1":"Ground Floor, Phase 2","a2":"Foresterhill Road","c":"Aberdeen","p":"AB25 2ZN","co":"Aberdeen City","cn":"GB","m":false,"f":false,"u":true,"ia":true},{"id":8,"n":"Acomb Explore Library","1":null,"2":null,"3":"1","d":null,"la":"53.9537094","lo":"-1.1293038","a1":"Front Street","a2":null,"c":"York","p":"YO24 3BZ","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":9,"n":"Addenbrooke\u0027s Hospital","1":"\/toilet-images\/de611add-c3cf-4818-a542-3c8cd6f1b29d*\/toilet-images\/de611add-c3cf-4818-a542-3c8cd6f1b29d*\/toilet-images\/de611add-c3cf-4818-a542-3c8cd6f1b29d","2":"Addenbrookes1.JPG*Addenbrookes2.JPG*Addenbrookes3.JPG","3":"1,1,1","d":null,"la":"52.1747049","lo":"0.1414055","a1":"Outpatient Department","a2":"Hills Road","c":"Cambridge","p":"CB2 0QQ","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":10,"n":"Adult Community Learning Chelmsford","1":"\/toilet-images\/2b266a3d-677d-462f-8f62-0c2f1a54c099*\/toilet-images\/2b266a3d-677d-462f-8f62-0c2f1a54c099*\/toilet-images\/2b266a3d-677d-462f-8f62-0c2f1a54c099","2":"ChelmsfordCommunity1.JPG*ChelmsfordCommunity2.JPG*ChelmsfordCommunity3.JPG","3":"1,1,1","d":null,"la":"51.7351675","lo":"0.4517395","a1":"Beeches Close","a2":null,"c":"Chelmsford","p":"CM1 2SB","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":11,"n":"Airdrie Locality Support Centre","1":"\/toilet-images\/3241a5da-3605-4e95-ad28-347590e64e34*\/toilet-images\/3241a5da-3605-4e95-ad28-347590e64e34*\/toilet-images\/3241a5da-3605-4e95-ad28-347590e64e34","2":"Toilet Map Photo Bench.jpg*Toilet Map Photo Hoist.jpg*Toilet Map Photo Sink.jpg","3":"1,1,1,1,1","d":null,"la":"55.8677307","lo":"-3.9757623","a1":"92 Hallcraig Street","a2":null,"c":"Airdrie","p":"ML6 6AW","co":"North Lanarkshire","cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":12,"n":"Alice Holt Forest","1":"\/toilet-images\/071daecd-862e-41a6-8a76-38c0f94da247","2":"Alice1.JPG","3":"1","d":null,"la":"51.1652940","lo":"-0.8479240","a1":"Bucks Horn Oak","a2":null,"c":"Farnham","p":"GU10 4LS","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":13,"n":"Andover and District Mencap","1":"\/toilet-images\/110b674e-b7ac-479c-a9be-563f110122db","2":"Andover1.JPG","3":"1","d":null,"la":"51.2032633","lo":"-1.4786505","a1":"The Wellington Centre","a2":"Winchester Road","c":"Andover","p":"SP10 2EG","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":14,"n":"Anglers Country Park - Wintersett","1":"\/toilet-images\/22c7a179-e110-4d16-8f52-c994d6c2b4e0*\/toilet-images\/22c7a179-e110-4d16-8f52-c994d6c2b4e0","2":"Anglers1.JPG*Anglers2.JPG","3":"1,1","d":null,"la":"53.6338506","lo":"-1.4312723","a1":"Haw Park Lane","a2":"Wintersett","c":"Wakefield","p":"WF4 2EB","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":15,"n":"Apex House","1":"\/toilet-images\/116ddd6a-3172-4284-a21f-f4ab73db6f73","2":"Apex1.JPG","3":"1","d":null,"la":"52.6354286","lo":"-1.1295547","a1":"74-76 Charles Street","a2":null,"c":"Leicester","p":"LE1 1FB","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":16,"n":"Aqualibrium","1":"\/toilet-images\/d91a6227-06ff-48ad-a3d3-73758df3c05d*\/toilet-images\/d91a6227-06ff-48ad-a3d3-73758df3c05d*\/toilet-images\/d91a6227-06ff-48ad-a3d3-73758df3c05d","2":"outside.jpg*Disabled change toilets 001.jpg*Disabled change toilets 002.jpg","3":"1,1,1","d":null,"la":"55.4266339","lo":"-5.6049941","a1":"Aqualibrium Kinloch Road","a2":"Campbeltown","c":"Argyll","p":"PA28 6EG","co":"Argyll","cn":"GB","m":false,"f":false,"u":true,"ia":true},{"id":17,"n":"Arc Leisure Matlock","1":null,"2":null,"3":"1","d":null,"la":"53.1432757","lo":"-1.5704922","a1":"Bakewell Road","a2":null,"c":"Matlock","p":"DE4 3AZ","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":18,"n":"Armley Leisure Centre","1":"\/toilet-images\/75ca62f5-eaaf-4376-a16b-cc3c5a341e24*\/toilet-images\/75ca62f5-eaaf-4376-a16b-cc3c5a341e24","2":"Armley Leisure Ext - compressed.JPG*Armley Leisure Int - compressed.JPG","3":"1,1","d":null,"la":"53.7888452","lo":"-1.5955475","a1":"Carr Croft","a2":"Armley","c":"Leeds","p":"LS12 3HB","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":19,"n":"Arsenal FC Emirates Stadium","1":"\/toilet-images\/df14fd9d-457b-44ee-948f-a20bf8de63b9*\/toilet-images\/df14fd9d-457b-44ee-948f-a20bf8de63b9*\/toilet-images\/df14fd9d-457b-44ee-948f-a20bf8de63b9","2":"arsenal1.JPG*arsenal2.JPG*arsenal4.JPG","3":"1,1,1","d":"Football Stadium","la":"51.5550743","lo":"-0.1084170","a1":"Islington","a2":null,"c":"London","p":"N7 7AJ","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":20,"n":"Asda Superstore Chaucer Sheffield","1":null,"2":null,"3":"1","d":null,"la":"53.4289457","lo":"-1.4871887","a1":"Asda Superstore","a2":"Chaucer Road","c":"Sheffield","p":"S5 8NH","co":null,"cn":"United Kingdom","m":true,"f":true,"u":true,"ia":true},{"id":21,"n":"Ashbourne Library","1":"\/toilet-images\/6330f026-be01-4304-b8e5-d3a800b81f3f","2":"ashbourne library.JPG","3":"1","d":null,"la":"53.0147089","lo":"-1.7315412","a1":"Compton","a2":null,"c":"Ashbourne","p":"DE6 1DA","co":"Derbyshire","cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":22,"n":"Ashford Gateway Plus","1":"\/toilet-images\/26d0f33f-cebe-4e47-b49d-6fe1f665aca3*\/toilet-images\/26d0f33f-cebe-4e47-b49d-6fe1f665aca3","2":"Ashford Gateway1.JPG*Ashford Gateway2.JPG","3":"1,1","d":null,"la":"51.1471787","lo":"0.8728770","a1":"Church Road","a2":null,"c":"Ashford","p":"TN23 1AS","co":"Kent","cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":23,"n":"Aspects ROC","1":"\/toilet-images\/895f5786-2ed1-4eb4-b9ea-be9667df49ac","2":"Aspects1.JPG","3":"1","d":null,"la":"50.4367520","lo":"-3.5653652","a1":"35\/37 Hyde Road","a2":null,"c":"Paignton","p":"TQ4 5BP","co":"South Devon","cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":24,"n":"Assisted Living Leeds","1":"\/toilet-images\/6b979b94-cc73-4dad-bf6c-bf619dca8db2*\/toilet-images\/6b979b94-cc73-4dad-bf6c-bf619dca8db2*\/toilet-images\/6b979b94-cc73-4dad-bf6c-bf619dca8db2","2":"assistedlivingleeds2.JPG*assistedlivingleeds3.JPG*assitedlivingleeds1.JPG","3":"1,1,1","d":null,"la":"53.7896273","lo":"-1.5294528","a1":"81 Clarence Road","a2":null,"c":"Leeds","p":"LS10 1LZ","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":25,"n":"Aviary Cafe","1":"\/toilet-images\/f94740a1-4f06-4b9b-ac4c-83065a63dd5a*\/toilet-images\/f94740a1-4f06-4b9b-ac4c-83065a63dd5a","2":"Aviary1.JPG*Aviary2.JPG","3":"1,1","d":null,"la":"53.3819158","lo":"-2.9393185","a1":"Liverpool","a2":null,"c":"Merseyside","p":"L17 1AP","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":26,"n":"Aviemore Primary School and Community Centre","1":"\/toilet-images\/0f6e79e7-cbd9-4776-88ca-3c2d5c766829*\/toilet-images\/0f6e79e7-cbd9-4776-88ca-3c2d5c766829*\/toilet-images\/0f6e79e7-cbd9-4776-88ca-3c2d5c766829","2":"Map Picture Toilet.jpg*Map Photo Shower.jpg*Map Photo oist.jpg","3":"1,1,1,1","d":null,"la":"57.1968614","lo":"-3.8272782","a1":"Milton Park","a2":null,"c":"Aviemore","p":"PH22 1RR","co":"Highlands","cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":27,"n":"Ayrshire Athletics Arena","1":"\/toilet-images\/7b9564c3-ba96-42af-a6a1-bd8e5c4c3cd7*\/toilet-images\/7b9564c3-ba96-42af-a6a1-bd8e5c4c3cd7*\/toilet-images\/7b9564c3-ba96-42af-a6a1-bd8e5c4c3cd7","2":"ayrshire athletics arena.jpg*Ayrshire Athletics Arena inside.png*Ayrshire Athletics Arena inside 2.png","3":"1,1,1","d":null,"la":"55.5990763","lo":"-4.4815818","a1":"Queens Drive","a2":null,"c":"Kilmarnock","p":"KA1 3XF","co":"East Ayrshire","cn":"GB","m":false,"f":false,"u":true,"ia":true},{"id":28,"n":"Baird Centre (The)","1":"\/toilet-images\/ab176fad-42ae-4aea-8ed4-cde9981a4c1e*\/toilet-images\/ab176fad-42ae-4aea-8ed4-cde9981a4c1e*\/toilet-images\/ab176fad-42ae-4aea-8ed4-cde9981a4c1e","2":"Hoist and Sink.jpg*Hoist.jpg*Shower and Bench.jpg","3":"1,1,1,1","d":null,"la":"55.5432305","lo":"-4.5644116","a1":"Hansel","a2":"Broadmeadows","c":"Symington","p":"KA1 5PU","co":"South Ayrshire","cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":29,"n":"Bakers Lane Public Conveniences","1":null,"2":null,"3":"1","d":null,"la":"51.7011335","lo":"0.1098520","a1":"Bakers Lane","a2":null,"c":"Epping","p":"CM16 5DQ","co":null,"cn":"United Kingdom","m":true,"f":true,"u":true,"ia":true},{"id":30,"n":"Barbican Centre Beech Street Cinemas","1":"\/toilet-images\/6dcf39f9-1918-4b65-b716-0e72dd74f510*\/toilet-images\/6dcf39f9-1918-4b65-b716-0e72dd74f510*\/toilet-images\/6dcf39f9-1918-4b65-b716-0e72dd74f510","2":"barbican outside.JPG*barbican toilet.JPG*barbican hoist.JPG","3":"1,1,1,1","d":null,"la":"51.5209975","lo":"-0.0929778","a1":"Beech Street","a2":null,"c":"London","p":"EC2Y 8D","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":31,"n":"Barnes Park","1":"\/toilet-images\/cf9b66a9-6095-46a8-a447-e4706b379eca*\/toilet-images\/cf9b66a9-6095-46a8-a447-e4706b379eca*\/toilet-images\/cf9b66a9-6095-46a8-a447-e4706b379eca","2":"Barnes Park2.JPG*Barnes Park3.JPG*Barnes Park4.JPG","3":"1,1,1,1,1,1","d":null,"la":"54.8940780","lo":"-1.4034607","a1":"Barnes Park Road","a2":null,"c":"Sunderland","p":"SR4 7PE","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":32,"n":"Barnsley Town Hall","1":null,"2":null,"3":"1","d":null,"la":"53.5550694","lo":"-1.4822414","a1":"Church Street","a2":null,"c":"Barnsley","p":"S70 1QX","co":null,"cn":"United Kingdom","m":true,"f":true,"u":true,"ia":true},{"id":33,"n":"Barrhead Resource Centre","1":"\/toilet-images\/4dfa5c03-8d92-4fd9-9caa-4ef5329353e4*\/toilet-images\/4dfa5c03-8d92-4fd9-9caa-4ef5329353e4*\/toilet-images\/4dfa5c03-8d92-4fd9-9caa-4ef5329353e4","2":"BarrheadCentre1.JPG*BarrheadCentre3.JPG*BarrheadCentre4.JPG","3":"1,1,1","d":null,"la":"55.8038419","lo":"-4.3969150","a1":"8 Carlibar Road","a2":null,"c":"Barrhead","p":"G78 1AA","co":"East Renfrewshire","cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":34,"n":"Barrhead Health and Care Centre","1":"\/toilet-images\/c5a074c2-eae5-4ece-b253-e0f15927bdad*\/toilet-images\/c5a074c2-eae5-4ece-b253-e0f15927bdad*\/toilet-images\/c5a074c2-eae5-4ece-b253-e0f15927bdad","2":"BarrheadHealth1.JPG*BarrheadHealth2.JPG*BarrheadHealth3.JPG","3":"1,1,1,1","d":null,"la":"55.8022936","lo":"-4.3867865","a1":"213 Main Street","a2":null,"c":"Barrhead","p":"G78 1SW","co":"East Renfrewshire","cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":35,"n":"Basingstoke Discovery Centre","1":"\/toilet-images\/3604c473-b1e5-4ecb-9bdc-079400e1a620","2":"BasingstokeDiscovery.JPG","3":"1","d":null,"la":"51.2644749","lo":"-1.0855060","a1":"Festival Place","a2":null,"c":"Basingstoke","p":"RG21 7LS","co":"Hampshire","cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":36,"n":"Batley Town Hall","1":null,"2":null,"3":"1","d":null,"la":"53.7142464","lo":"-1.6338403","a1":"Market Place","a2":null,"c":"Batley","p":"WF17 5DA","co":null,"cn":"United Kingdom","m":true,"f":true,"u":true,"ia":true},{"id":37,"n":"Becontree Heath Leisure Centre","1":null,"2":null,"3":"1","d":null,"la":"51.5608949","lo":"0.1490069","a1":"Althome way","a2":null,"c":"Dagenham","p":"RM10 7AY","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":38,"n":"Beechwood Leisure Centre","1":"\/toilet-images\/52d424d5-6428-485d-8dda-1ef615e2c2a1","2":"beechwood1 (1).JPG","3":"1","d":null,"la":"53.3951171","lo":"-3.0829732","a1":"18 Beechwood Drive","a2":"Greenfields","c":"Wirral","p":"CH43 7ZU","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":39,"n":"Beehive (The)","1":null,"2":null,"3":"1","d":null,"la":"50.8002443","lo":"-3.1952394","a1":"Dowell Street","a2":null,"c":"Honiton","p":"EX14 1LZ","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":40,"n":"Bell\u0027s Sports Centre","1":"\/toilet-images\/c749dd92-ad91-4b48-ac20-ac52ee032db0*\/toilet-images\/c749dd92-ad91-4b48-ac20-ac52ee032db0*\/toilet-images\/c749dd92-ad91-4b48-ac20-ac52ee032db0","2":"Map 1.jpg*Map 2.jpg*Map 3.jpg","3":"1,1,1","d":null,"la":"56.4029009","lo":"-3.4353318","a1":"Hay Street","a2":null,"c":"Perth","p":"PH1 5HS","co":"Perth and Kinross","cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":41,"n":"Bellshill Locality Support Services","1":"\/toilet-images\/37cc6a1a-9cb3-40fe-a64b-260e4ce15fa1*\/toilet-images\/37cc6a1a-9cb3-40fe-a64b-260e4ce15fa1*\/toilet-images\/37cc6a1a-9cb3-40fe-a64b-260e4ce15fa1","2":"Toilet Map Photo Bench.jpg*Toilet Map Photo Sink.jpg*Toilet Map Photo Toilet.jpg","3":"1,1,1","d":null,"la":"55.8191774","lo":"-4.0307901","a1":"95 Main Street","a2":null,"c":"Bellshill","p":"ML4 3DZ","co":"North Lanarkshire","cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":42,"n":"Bernard Weatherill House","1":null,"2":null,"3":"1","d":null,"la":"51.3716736","lo":"-0.1000049","a1":"8 Mint Walk","a2":null,"c":"Croydon","p":"CR0 1EA","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":43,"n":"Beverley Leisure Centre","1":"\/toilet-images\/fc7f19c1-93d4-4bb5-8f05-80f4fd6fa25c*\/toilet-images\/fc7f19c1-93d4-4bb5-8f05-80f4fd6fa25c","2":"BeverleyLeisure.JPG*BeverleyLesure2.JPG","3":"1,1","d":null,"la":"53.8379181","lo":"-0.4213655","a1":"Flemingate","a2":null,"c":"Beverley","p":"HU17 0LT","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":44,"n":"Birmingham Airport","1":"\/toilet-images\/fde9a596-16e3-4bb0-ac12-45e413858c46*\/toilet-images\/fde9a596-16e3-4bb0-ac12-45e413858c46*\/toilet-images\/fde9a596-16e3-4bb0-ac12-45e413858c46","2":"Birmingham Airport1.JPG*Birmingham Airport2.JPG*Birmingham Airport3.JPG","3":"1,1,1","d":null,"la":"52.4523821","lo":"-1.7435071","a1":"Birmingham Airport","a2":null,"c":"Birmingham","p":"B26 3QJ","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":45,"n":"Bishop House Day Service (Facility 1)","1":"\/toilet-images\/a5ea2b40-3745-4927-aa4d-3715bd898e30*\/toilet-images\/a5ea2b40-3745-4927-aa4d-3715bd898e30","2":"BishopsHouse1.JPG*BishopsHouse11.JPG","3":"1,1","d":null,"la":"51.8679747","lo":"0.1515444","a1":"Windhill","a2":null,"c":"Bishops Stortford","p":"CM23 2NF","co":null,"cn":"GB","m":true,"f":true,"u":true,"ia":true},{"id":46,"n":"Bishops House Day Service (Facility 2)","1":null,"2":null,"3":"1","d":null,"la":"51.8679747","lo":"0.1515444","a1":"Windhill","a2":null,"c":"Bishops Stortford","p":"CM23 2NF","co":null,"cn":"United Kingdom","m":true,"f":true,"u":true,"ia":true},{"id":47,"n":"Blackburn Market","1":"\/toilet-images\/d0559d96-2a84-4070-85b1-c66191235bc0","2":"BlackburnMarket.JPG","3":"1","d":null,"la":"53.7481451","lo":"-2.4826586","a1":"Shop Mobility","a2":null,"c":"Church Street","p":"BB1 5AF","co":"Lancs","cn":"GB","m":true,"f":true,"u":true,"ia":true}
];