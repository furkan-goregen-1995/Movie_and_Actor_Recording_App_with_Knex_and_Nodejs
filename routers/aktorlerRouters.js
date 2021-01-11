const router = require("express").Router();
let data = require("../data.js");
router.get('/',(req,res)=>{
    res.status(200).json(data);
});

let next_id = 4;

router.post("/",(req,res,next)=>{
    let yeni_aktor = req.body;
    if(!yeni_aktor.isim){
        next({statuscode:400, errorMessage:"Lütfen isim girin"});
    }else if(yeni_aktor.isim && !yeni_aktor.filmler){
        next({statuscode:400, errorMessage:"Lütfen filmler girin"});
    }
    else{
        yeni_aktor.id = next_id;
        next_id++;
        data.push(yeni_aktor);
        res.status(201).json(yeni_aktor);
    }
    
})

router.delete("/:id",(req,res)=>{
    const silinecek_aktor_id =  req.params.id;
    const silinecek_aktor = data.find(aktor=>aktor.id === Number(silinecek_aktor_id));
    if(silinecek_aktor){
        data = data.filter(aktor => aktor.id !== Number(silinecek_aktor_id));
        res.status(204).end();
    }else{
        res.status(404).json({errorMessage: "Silmeye calistiginiz aktor sistemde yok."});
    }
})

router.get('/:id',(req,res)=>{
    //console.log("req.query",req.query); http://localhost:5000/aktorler/1?isim="Kemal"&soyisim="Sunal"&film_turu="komedi"
    //console.log("req.body",req.body); post isteği için tüm json body'yi çekmek için kullanılır.
    const {id}=req.params;
    const aktor=data.find(aktor=>aktor.id===parseInt(id));
    if(aktor){
        res.status(200).json(aktor);
    } else{
        res.status(404).send('Aradiginiz aktor bulunamadi...');
    }
});


module.exports = router;