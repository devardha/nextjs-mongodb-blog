import dbConnect from '../../../../services/dbConnect'
import Posts from '../../../../models/Posts'

dbConnect();

export default async(req, res)=> {
    const {
        query: { slug },
        method
    } = req;

    switch(method){
        // GET POST BY ID
        case 'GET':
            try {
                const posts = await Posts.findOne({'slug': slug});

                if(!posts){
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: posts });
                
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
    }
}