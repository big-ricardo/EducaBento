import { NowRequest, NowResponse } from '@vercel/node'
import { Db, Collection } from 'mongodb'
import connectToDataBase from '../../src/config/connectToDataBase'

let cacheDb: Db = null

export default async (req: NowRequest, res: NowResponse) => {

  if (req.method === "GET") {

    const members = await getMembers({}, {name: 1, authorID: 1, occupation: 1, _id: 0})

    return res.status(200).json(members)

  } else {
    if (req.method === "POST") {
        const db: Db = await connectToDataBase(cacheDb)
      const members = await db.collection('members').insertOne({
        name: req.body.name,
        ocupation: req.body.ocupation,
        description: req.body.description,
        avatar: `/${req.body.avatar}`,
        slug: `${req.body.slug}`,
        authorID: await getNextSequenceValue('authorID', db)
      })
      return res.status(200).json(members.result)
    }
  }

}

async function getNextSequenceValue(sequenceName, db: Db) {
  const sequenceDocument = await db.collection('counters').findOneAndUpdate({ _id: sequenceName }, { $inc: { sequence_value: 1 } }, { returnOriginal: false })
  return sequenceDocument.value.sequence_value;
}

export async function getMembers(query = {}, result = {}){
  const db: Db = await connectToDataBase(cacheDb)

  const members = await db.collection('members').find( query , {projection: result}).toArray()
  .then(response=> JSON.parse(JSON.stringify(response)))

  return members
}

