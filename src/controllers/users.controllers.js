import { pool } from '../db.js';

export const getRouteMain = (req, res) => {
    res.send("Hello World")
};

export const getListUsers = async (req, res) => {
    const {rows} = await pool.query('SELECT * FROM users');
    res.json(rows);
};


export const getUser =  async(req, res) => {
    const {id} = req.params;
    const {rows} = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    
    if(rows.length===0){
        res.status(404).json({message : "No se encontro usuario con id = $id"})
    }

    res.json(rows[0])
};

export const addUser = async(req, res) => {
    try{
        const data = req.body
        const {rows} = await pool.query('INSERT INTO users (name, email) VALUES($1,$2) RETURNING *',[data.name,data.email]);

        /** if(rowCount===0){
            return res.status(404).json({message : data.name + " No se pudo guardar (X-X) "});
        }**/
    
        return res.json({message : rows[0].name + " Se guardo con exito!!"})

    }catch(error){
        console.log(error)

        if(error?.code === '23505'){
            return res.status(409).json({message : "El email ya existe"})
        }

        return res.status(500).json({message : "internal Server..."})

    }   

};

export const deleteUser = async (req, res) => {
    const {id} = req.params;
    const {rowCount} = await pool.query('DELETE  FROM users WHERE id = $1  RETURNING *', [id]);
    
    if(rowCount===0){
        return res.status(404).json({message : "No se encontro usuario con id = " + id });
    }

    return res.sendStatus(204)
};

export const updateUser = async(req, res) => {
    const {id} = req.params;
    const data = req.body;

    const {rows} = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",[data.name, data.email,id]);
    
   return res.json({message : " Se Actualizó  a "+ rows[0].name });
};