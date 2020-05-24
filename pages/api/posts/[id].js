import dbConnect from '../../../services/dbConnect'
import Posts from '../../../models/Posts'

dbConnect();

export default async(req, res)=> {
    const {
        query: { id },
        method
    } = req;

    switch(method){
        // GET POST BY ID
        case 'GET':
            try {
                const posts = await Posts.findOne({_id: id});

                if(!posts){
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: posts });
                
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        // EDIT POST BY ID
        case 'PUT':
            try {
                const posts = await Posts.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidator:true
                })
                
                if(!posts){
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: posts })

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        // DELETE POST BY ID
        case 'DELETE':
            try {
                const deletedPost = await Posts.deleteOne({ _id: id })

                if(!deletedPost){
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: deletedPost });

            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false });
    }
}