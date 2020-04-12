const connection = require("../database/connection");
const https = require("https");

module.exports ={
    async index(request, response){
        const cities = await connection("city").select("*");

        return response.json(cities);    
    },
    async update(request, response){
        const cidades = [];
        await https.get("https://servicodados.ibge.gov.br/api/v1/localidades/municipios", (res) => {
            let data = '';
            res.on('data', (d)=>{
                data += d;
            });
            res.on('end', async ()=>{
                JSON.parse(data).forEach(element => {
                    cidades.push({
                        id: element.id,
                        name: element.nome,
                        state_id: element.microrregiao.mesorregiao.UF.id
                    });
                });
                console.log("Iniciando");
                // console.log(cidades);
                
                await connection.batchInsert("city", cidades, 30).then((result)=>{ console.log(result); }).catch((error)=>{console.log(error)});
                console.log("Finalizando");
            });
        });

        return response.json("Ok");
    }
}