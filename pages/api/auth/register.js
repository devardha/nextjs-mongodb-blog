import User from '../../../models/User'
import bcrypt from 'bcrypt'
import dbConnect from '../../../services/dbConnect'
import jwt from 'jsonwebtoken'

dbConnect();

export default async(req, res)=>{

    const { method } = req;

    switch(method){
        case 'POST':
            try {
                const saltRounds = 10;
                const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);

                const user = await User.create({
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPassword
                });

                const userID = user._id;

                const token = jwt.sign({ id: userID}, process.env.SECRET, {
                    expiresIn: 86400 // expires in 24 hours
                });

                res.status(200).send({ auth: true, token: token });

            } catch (err) {
                res.status(500).send({message: "There was a problem registering the user.", error: err})
            }
            break;
        default:
            res.status(400).json({success: false});
    }

}