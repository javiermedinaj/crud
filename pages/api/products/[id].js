import { pool } from '../../../config/db';

export default async function handler(req, res) {

    switch (req.method) {
        case 'GET':
            return await getProduct(req, res);
        case 'DELETE':
            return await deleteProduct(req, res);
        case 'PUT':
            return await updateProduct(req, res);
    }

}

const getProduct = async (req, res) => {
    try {
        const { id } = req.query

        const [result] = await pool.query('SELECT * FROM product WHERE id = ?', [id])

        return res.status(200).json(result[0]);

    } catch (error) {
        return res.status(500).json({ error });
    }
    //es req query no reqparam
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.query

        await pool.query('DELETE FROM product WHERE id = ?', [id])

        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ error });
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.query
    try {
        const [result] = await pool.query('UPDATE product SET name = ?, description = ?, price = ? WHERE id = ?', [req.body.name, req.body.description, req.body.price, id])

        return res.status(204).json();
    } catch (error) {
        re
    }

}