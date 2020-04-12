const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
    async index (request, response){
        const { page = 1, offset = 5 } = request.query;

        const [count] = await connection("comercio").count();

        const comercios = await connection("comercio")
                .limit(offset)
                .offset((page - 1) * offset)
                .select("*");

        response.header("X-Total-Count", count['count(*)']);
        return response.json(comercios);
    },

    async create (request, response){
        const { name, description, email, whatsapp, phone, city_id } = request.body;

        if (!whatsapp && !phone){
            return response.status("400").json({ error: "You need to inform a whatsapp or an phone number." });
        }
        if ( !city_id || !connection("city").where("id", city_id).first()){
            return response.status("400").json({ error: "This city is not in our base." });
        }
        let access_code = 0; 
        while (access_code == 0) {
            access_code = (Math.random() * (99999 - 10000) + 10000).toFixed(0);
            let comercio = await connection("comercio").where("access_code", access_code).select("*").first();
            if (comercio)
            {
                access_code = 0;
            }
        }
        const id = crypto.randomBytes(5).toString("HEX");

        await connection("comercio").insert({
            id, access_code, name, description, email, phone, whatsapp, city_id
        });

        return response.json({ access_code });
    },

    async change_status (request, response){
        const { status } = request.body;
        const id = request.headers.authorization;

        const comercio = await connection("comercio").where("id", id).select("id").first();
        if (!comercio){ 
            return response.status(400).json({error: "No Comercio found."});
        }
        await connection("comercio").where("id", id).update("status", status);

        return response.json(status);
    }
}