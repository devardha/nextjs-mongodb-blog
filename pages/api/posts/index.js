import dbConnect from '../../../services/dbConnect';
import Posts from '../../../models/Posts'

dbConnect();

export default async (req, res)=> {
    
    const { method } = req;

    switch(method){
        // GET ALL POST
        case 'GET':
            try{
                const posts = await Posts.find({});

                res.status(200).json({ success: true, data: posts })
                
            } catch(error){
                res.status(400).json({ success: false, error });
            }
            break;

        // CREATE A POST
        case 'POST':
            try{
                const posts = await Posts.create(req.body);

                res.status(201).json({ success: true, data: posts })
                
            } catch(error){
                res.status(400).json({ success: false, error });
            }
            break;
            
        default:
            res.status(400).json({ success: false });
            break;
    }

}