const connection = require("../database/connection");

module.exports = {
    async create (request, response){
        const { access_code, email, phone, whatsapp } = request.body;
        console.log(access_code);
        const comercio = await connection("comercio")
                            .where("access_code", access_code)
                            .andWhere("status", true)
                            .andWhere((builder) =>{
                                if (email){
                                    builder.where("email", email);
                                } else if (phone) {
                                    builder.where("phone", phone);
                                } else if(whatsapp){
                                    console.log(whatsapp);
                                    builder.where("whatsapp", whatsapp);
                                }
                            })
                            .select("id")
                            .first();
        if (!comercio){
            return response.status(400).json({ error: 'No Comercio found.' })
        }

        return response.json(comercio);
    }
}