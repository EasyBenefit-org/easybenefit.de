const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getPartners(req, res);
        }

        case 'POST': {
            return addPartners(req, res);
        }

        /* case 'PUT': {
            return updatePartners(req, res);
        }
        case 'DELETE': {
            return deletePartners(req, res);
        } */
    }
}

// GET Function
async function getPartners(req,res){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let partners = await db
            .collection('Partners')
            .find({})
            .sort({ published: -1 })
            .toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(partners)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
// POST Function
async function addPartners(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // add the post
        await db.collection('Partners').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Partner added successfully',
            success: true,
        });
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

/* // UPDATE Function
async function updatePartners(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();

        // update the published status of the post
        await db.collection('Partners').updateOne(
            {
                _id: new ObjectId(req.body),
            },
            { $set: { published: true } }
        );

        // return a message
        return res.json({
            message: 'Partner updated successfully',
            success: true,
        });
    } catch (error) {

        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
// DELETE Function
async function deletePartners(req, res) {
    try {
        // Connecting to the database
        let { db } = await connectToDatabase();

        // Deleting the post
        await db.collection('Partners').deleteOne({
            _id: new ObjectId(req.body),
        });

        // returning a message
        return res.json({
            message: 'Partner deleted successfully',
            success: true,
        });
    } catch (error) {

        // returning an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
} */