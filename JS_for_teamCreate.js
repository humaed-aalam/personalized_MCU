        var heroDictionary={"iron man":35.6,"thor":39.1,"captain america":32.75,"hulk":30.45,"black widow":29.75,"hawk eye":9.45,"wanda":48.45,"vision":48.05,"black panther":29.9,"falcon":22.7,"bucky":21,"gamora":32.2,"captain marvel":61.95,"ant man":35.45,"spider man":34.25,"star lord":30.5,"doctor strange":43.05,"rocket":7.1,"drax":7.85,"groot":9.45}
        var villainDictionary={"thanos":84.55,"hela":62.1,"galactus":57,"dormammu":45,"doctor doom":44.95,"apocalypse":43.7,"ego":42.5,"loki":38.8,"magneto":37.3,"ultron":35.55,"ronnan":34.05,"task master":33.85,"mysterio":26.95,"kill monger":20.95,"zola":20.9,"iron monger":17.35,"red skull":14.85,"whiplash":9.05,"zemo":6.75,"ross":6.4}

        var heroimg1 = document.createElement("img");
        var heroimg2 = document.createElement("img");
        var villainimg1 = document.createElement("img");
        var villainimg2 = document.createElement("img");

        var heroname1=prompt("Enter name of first hero of your team : ");
        var heroname2=prompt("Enter name of second hero of your team : ");

        var villainname1=prompt("Enter name of first villain of your team : ");
        var villainname2=prompt("Enter name of second villain of your team : ");
 
        var text1=document.getElementById("p1");
        var text3=document.getElementById("p3");
        var text2=document.getElementById("p2");
        var text4=document.getElementById("p4");
        var text5=document.getElementById("p5");
       
        var heroScore1,heroScore2;
        var villainScore1,villainScore2;

        for(key in heroDictionary){
            if(key==heroname1.toLowerCase())
                heroScore1=heroDictionary[key];
            if(key==heroname2.toLowerCase())
                heroScore2=heroDictionary[key];
        }
        for(key in villainDictionary){
            if(key==villainname1.toLowerCase())
                villainScore1=villainDictionary[key];
            if(key==villainname2.toLowerCase())
                villainScore2=villainDictionary[key];
        }

        //checking name of first hero for displaying his/her image    
        if(heroname1.toLowerCase()=="thor")
            heroimg1.src="images/thor-full-body-1-removebg-preview.png";
        else if(heroname1.toLowerCase()=="iron man")
            heroimg1.src="images/ironman-full-body-1.png-removebg-preview.png";
        else if(heroname1.toLowerCase()=="captain america")
            heroimg1.src="images/captainamerica-full-body-3-removebg-preview.png";  
        else if(heroname1.toLowerCase()=="hulk")
            heroimg1.src="images/hulk-full-body-1-removebg-preview.png";  
        else if(heroname1.toLowerCase()=="black widow")
            heroimg1.src="images/blackwidow-full-body-1-removebg-preview.png"; 
        else if(heroname1.toLowerCase()=="hawk eye")
            heroimg1.src="images/hawkeye-full-body-2-removebg-preview.png"; 
        else if(heroname1.toLowerCase()=="black panther")
            heroimg1.src="images/blackpanther-full-body-2-removebg-preview.png"; 
        else if(heroname1.toLowerCase()=="wanda")
            heroimg1.src="images/wanda-full-body-2-removebg-preview.png";    
        else if(heroname1.toLowerCase()=="vision")
            heroimg1.src="images/vision-full-body-2-removebg-preview.png";  
        else if(heroname1.toLowerCase()=="ant man")
            heroimg1.src="images/antman-full-body-2-removebg-preview.png";    
        else if(heroname1.toLowerCase()=="star lord")
            heroimg1.src="images/starlord-full-body-1-removebg-preview.png"; 
        else if(heroname1.toLowerCase()=="gamora")
            heroimg1.src="images/gamora-full-body-2-removebg-preview.png";
        else if(heroname1.toLowerCase()=="groot")
            heroimg1.src="images/groot-full-body-1-removebg-preview.png";            
        else if(heroname1.toLowerCase()=="rocket")
            heroimg1.src="images/rocket-full-body-image-2-removebg-preview.png";
        else if(heroname1.toLowerCase()=="drax")
            heroimg1.src="images/drax-full-body-2-removebg-preview.png";
        else if(heroname1.toLowerCase()=="captain marvel")
            heroimg1.src="images/captain-marvel-full-body-2-removebg-preview.png";
        else if(heroname1.toLowerCase()=="bucky")
            heroimg1.src="images/bucky-full-body-2-removebg-preview.png";
        else if(heroname1.toLowerCase()=="falcon")
            heroimg1.src="images/falcon-full-body-1-removebg-preview.png";
        else if(heroname1.toLowerCase()=="doctor strange")
            heroimg1.src="images/doctorStrange-full-body-2-removebg-preview.png";
        else if(heroname1.toLowerCase()=="spider man")
            heroimg1.src="images/spiderman--full-body-2-removebg-preview.png";

        //checking name of second hero for displaying his/her image
        if(heroname2.toLowerCase()=="thor")
            heroimg2.src="images/thor-full-body-1-removebg-preview.png";
        else if(heroname2.toLowerCase()=="iron man")
            heroimg2.src="images/ironman-full-body-1.png-removebg-preview.png";
        else if(heroname2.toLowerCase()=="captain america")
            heroimg2.src="images/captainamerica-full-body-3-removebg-preview.png";  
        else if(heroname2.toLowerCase()=="hulk")
            heroimg2.src="images/hulk-full-body-1-removebg-preview.png";  
        else if(heroname2.toLowerCase()=="black widow")
            heroimg2.src="images/blackwidow-full-body-1-removebg-preview.png"; 
        else if(heroname2.toLowerCase()=="hawk eye")
            heroimg2.src="images/hawkeye-full-body-2-removebg-preview.png"; 
        else if(heroname2.toLowerCase()=="black panther")
            heroimg2.src="images/blackpanther-full-body-2-removebg-preview.png"; 
        else if(heroname2.toLowerCase()=="wanda")
            heroimg2.src="images/wanda-full-body-2-removebg-preview.png";    
        else if(heroname2.toLowerCase()=="vision")
            heroimg2.src="images/vision-full-body-2-removebg-preview.png";  
        else if(heroname2.toLowerCase()=="ant man")
            heroimg2.src="images/antman-full-body-2-removebg-preview.png";    
        else if(heroname2.toLowerCase()=="star lord")
            heroimg2.src="images/starlord-full-body-1-removebg-preview.png"; 
        else if(heroname2.toLowerCase()=="gamora")
            heroimg2.src="images/gamora-full-body-2-removebg-preview.png";
        else if(heroname2.toLowerCase()=="groot")
            heroimg2.src="images/groot-full-body-1-removebg-preview.png";            
        else if(heroname2.toLowerCase()=="rocket")
            heroimg2.src="images/rocket-full-body-image-2-removebg-preview.png";
        else if(heroname2.toLowerCase()=="drax")
            heroimg2.src="images/drax-full-body-2-removebg-preview.png";
        else if(heroname2.toLowerCase()=="captain marvel")
            heroimg2.src="images/captain-marvel-full-body-2-removebg-preview.png";
        else if(heroname2.toLowerCase()=="bucky")
            heroimg2.src="images/bucky-full-body-2-removebg-preview.png";
        else if(heroname2.toLowerCase()=="falcon")
            heroimg2.src="images/falcon-full-body-1-removebg-preview.png";
        else if(heroname2.toLowerCase()=="doctor strange")
            heroimg2.src="images/doctorStrange-full-body-2-removebg-preview.png";
        else if(heroname2.toLowerCase()=="spider man")
            heroimg2.src="images/spiderman--full-body-2-removebg-preview.png";    

        //checking name of first villain to display his/her image
        if(villainname1.toLowerCase()=="thanos")
            villainimg1.src="images/thanos-full-body-2-removebg-preview.png";
        else if(villainname1.toLowerCase()=="loki")
            villainimg1.src="images/loki-full-body-2-removebg-preview.png";
        else if(villainname1.toLowerCase()=="hela")
            villainimg1.src="images/hela-full-body-1-removebg-preview.png";
        else if(villainname1.toLowerCase()=="galactus")
            villainimg1.src="images/galactus-full-body-1-removebg-preview.png";
        else if(villainname1.toLowerCase()=="dormammu")
            villainimg1.src="images/dormammu-full-body-2-removebg-preview.png";
        else if(villainname1.toLowerCase()=="doctor doom")
            villainimg1.src="images/doctordoom-full-body-2-removebg-preview.png";
        else if(villainname1.toLowerCase()=="apocalypse")
            villainimg1.src="images/apocalypse-full-body-1-removebg-preview.png";
        else if(villainname1.toLowerCase()=="ego")
            villainimg1.src="images/ego-full-body-1-removebg-preview.png";
        else if(villainname1.toLowerCase()=="magneto")
            villainimg1.src="images/magneto-full-body-2-removebg-preview.png";
        else if(villainname1.toLowerCase()=="ultron")
            villainimg1.src="images/ultron-full-body-1-removebg-preview.png";
        else if(villainname1.toLowerCase()=="ronnan")
            villainimg1.src="images/ronnan-full-body-2-removebg-preview.png";
        else if(villainname1.toLowerCase()=="task master")
            villainimg1.src="images/taskmaster-full-body-2-removebg-preview.png";
        else if(villainname1.toLowerCase()=="mysterio")
            villainimg1.src="images/mysterio-full-body-2-removebg-preview.png";
        else if(villainname1.toLowerCase()=="kill monger")
            villainimg1.src="images/killmonger-full-body-1-removebg-preview.png";
        else if(villainname1.toLowerCase()=="zola")
            villainimg1.src="images/zola-full-body-1.jpg";
        else if(villainname1.toLowerCase()=="iron monger")
            villainimg1.src="images/IronMan_Monger-full-body-1-removebg-preview.png";
        else if(villainname1.toLowerCase()=="red skull")
            villainimg1.src="images/redskull-full-body-1-removebg-preview.png";
        else if(villainname1.toLowerCase()=="whiplash")
            villainimg1.src="images/whiplash-full-body-2-removebg-preview.png";
        else if(villainname1.toLowerCase()=="zemo")
            villainimg1.src="images/zemo-full-body-2-removebg-preview.png";
        else if(villainname1.toLowerCase()=="ross")
            villainimg1.src="images/ross-full-body-1-removebg-preview.png";    

        //checking name of second villain to display his/her image
        if(villainname2.toLowerCase()=="thanos")
            villainimg2.src="images/thanos-full-body-2-removebg-preview.png";
        else if(villainname2.toLowerCase()=="loki")
            villainimg2.src="images/loki-full-body-2-removebg-preview.png";
        else if(villainname2.toLowerCase()=="hela")
            villainimg2.src="images/hela-full-body-1-removebg-preview.png";
        else if(villainname2.toLowerCase()=="galactus")
            villainimg2.src="images/galactus-full-body-1-removebg-preview.png";
        else if(villainname2.toLowerCase()=="dormammu")
            villainimg2.src="images/dormammu-full-body-2-removebg-preview.png";
        else if(villainname2.toLowerCase()=="doctor doom")
            villainimg2.src="images/doctordoom-full-body-2-removebg-preview.png";
        else if(villainname2.toLowerCase()=="apocalypse")
            villainimg2.src="images/apocalypse-full-body-1-removebg-preview.png";
        else if(villainname2.toLowerCase()=="ego")
            villainimg2.src="images/ego-full-body-1-removebg-preview.png";
        else if(villainname2.toLowerCase()=="magneto")
            villainimg2.src="images/magneto-full-body-2-removebg-preview.png";
        else if(villainname2.toLowerCase()=="ultron")
            villainimg2.src="images/ultron-full-body-1-removebg-preview.png";
        else if(villainname2.toLowerCase()=="ronnan")
            villainimg2.src="images/ronnan-full-body-2-removebg-preview.png";
        else if(villainname2.toLowerCase()=="task master")
            villainimg2.src="images/taskmaster-full-body-2-removebg-preview.png";
        else if(villainname2.toLowerCase()=="mysterio")
            villainimg2.src="images/mysterio-full-body-1-removebg-preview.png";
        else if(villainname2.toLowerCase()=="kill monger")
            villainimg2.src="images/killmonger-full-body-1-removebg-preview.png";
        else if(villainname2.toLowerCase()=="zola")
            villainimg2.src="images/zola-full-body-1.jpg";
        else if(villainname2.toLowerCase()=="iron monger")
            villainimg2.src="images/IronMan_Monger-full-body-1-removebg-preview.png";
        else if(villainname2.toLowerCase()=="red skull")
            villainimg2.src="images/redskull-full-body-1-removebg-preview.png";
        else if(villainname2.toLowerCase()=="whiplash")
            villainimg2.src="images/whiplash-full-body-2-removebg-preview.png";
        else if(villainname2.toLowerCase()=="zemo")
            villainimg2.src="images/zemo-full-body-2-removebg-preview.png";
        else if(villainname2.toLowerCase()=="ross")
            villainimg2.src="images/ross-full-body-1-removebg-preview.png"; 

        text1.innerText+=heroname1.toUpperCase()+", "+heroname2.toUpperCase();
        text3.innerText+=villainname1.toUpperCase()+", "+villainname2.toUpperCase();
        text2.innerText=heroScore1+heroScore2;
        text4.innerText=villainScore1+villainScore2;
        if((heroScore1+heroScore2)>=(villainScore1+villainScore2))
            text5.innerText="Team of heroes is stronger";
        else if((heroScore1+heroScore2)<(villainScore1+villainScore2))
            text5.innerText="Team of villains is stronger";
        else
            text5.innerText="You probably made a mistake ! Reload the page and try again.";
            
        var block1 = document.getElementById("img1");
        block1.appendChild(heroimg1);
        var block2 = document.getElementById("img2");
        block2.appendChild(heroimg2);
        var block3 = document.getElementById("img3");
        block3.appendChild(villainimg1);
        var block4 = document.getElementById("img4");
        block4.appendChild(villainimg2);