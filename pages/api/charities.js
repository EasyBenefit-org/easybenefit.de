// /api/charities -> GET Charities Data
const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getCharities(req, res);
        }
        /* case 'POST': {
            return addPartners(req, res);
        }
        case 'PUT': {
            return updatePartners(req, res);
        }
        case 'DELETE': {
            return deletePartners(req, res);
        } */
    }
}
// GET Function
async function getCharities(req,res){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let charities = await db
            .collection('Charities')
            .find({})
            .toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(charities)),
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