export default function handler(req, res) {
    return res.status(200).json('obteniendo el producto de id numero' + req.query.id);
    //es req query no reqparams
}