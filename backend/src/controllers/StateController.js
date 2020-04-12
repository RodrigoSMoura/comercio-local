const connection = require("../database/connection");
const https = require("https");

module.exports = {
    async index (request, response) {
        const states = await connection('state').select("*");

        return response.json(states);
    },

    async update (request, response){
        const estados = [];
        await https.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados", (res)=>{
            let data = '';
            res.on('data', (d) => {
                data += d;
            });
            res.on('end', async () => {
                JSON.parse(data).forEach(element => {
                    estados.push({
                        id: element.id,
                        name: element.nome,
                        sigla: element.sigla
                    });
                });
                await connection("state").insert(estados).then(function(result){});        
            });
        });
  
        return response.json("Ok");
    },
    
    async cidades (request, response){
        let { uf } = request.params;
        uf = uf.toUpperCase();
        const cidades = await connection('city').innerJoin("state","city.state_id","state.id")
                                .where("state.sigla", uf)
                                        .select("city.*");


        return response.json(cidades);
    }
};