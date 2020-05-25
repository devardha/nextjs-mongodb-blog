export default (req, res)=> {
    res.status(200).send({ auth: false, token: null });
}