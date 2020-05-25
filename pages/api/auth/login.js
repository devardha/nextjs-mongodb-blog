import dbConnect from '../../../services/dbConnect'
import bcrypt from 'bcrypt'
import User from '../../../models/User'
import jwt from 'jsonwebtoken'

dbConnect();

export default async (req, res)=>{

    const {method} = req;

    switch(method){
        case 'POST':
            try {
                const user = await User.findOne({email: req.body.email}, function(err, user){
                    if (err) return res.status(500).send('Error on the server.');
                    if (!user) return res.status(404).send('No user found.');
                })

                var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
                if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
                
                var token = jwt.sign({ id: user._id }, process.env.SECRET, {
                expiresIn: 86400 // expires in 24 hours
                });
                
                res.status(200).send({ auth: true, token: token });

            } catch (error) {
                res.status(500).send({message: "There was a problem authenticating the user.", error: err})
            }
            break;
        default:
            res.status(400).json({success: false});
    }

}