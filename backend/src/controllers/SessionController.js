const connection = require('../database/connection'); 

module.exports = {
    //CRIAR SESSÃO
    async create(request, response){
        const { id } = request.body;

        const ong_id = request.headers.authorization;

        const ong = await connection('ongs')
        .where('id', id)
        .select('nome')
        .first(); 

        if(!ong){
            return response.status(400).json({ error: 'No ONG found with this ID!'});
        }
        return response.json(ong);
    }
}