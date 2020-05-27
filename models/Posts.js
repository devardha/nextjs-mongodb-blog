const mongoose = require('mongoose')
const mongooseSlugPlugin = require('mongoose-slug-plugin');

const PostsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tags: [{
        type: String
    }],
    img: {
        type: String
    },
    author: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    body: {
        type: String
    }
})

PostsSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=title%>' });

// const Posts = mongoose.model.Posts || mongoose.model('Posts', PostsSchema);

function modelAreadyDeclared() {
    try {
        module.exports = mongoose.model('Posts')  // it throws an error if the model is still not defined
        return true
    } catch (e) {
        return false
    }
}

if (!modelAreadyDeclared()) {
    const Posts = mongoose.model('Posts', PostsSchema);
    module.exports = Posts;
}