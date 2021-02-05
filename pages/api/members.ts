import { NowRequest, NowResponse } from '@vercel/node'
import { Db, Collection } from 'mongodb'
import url from 'url'
import connectToDataBase from '../../utils/connectToDataBase'

let cacheDb: Db = null

export default async (req: NowRequest, res: NowResponse) => {

  const db: Db = await connectToDataBase(cacheDb)
  if (req.method === "GET") {

    const members = await db.collection('members').find({ authorID: { $ne: 0 } }).toArray()

    return res.status(200).json(members)

  } else {
    if (req.method === "POST") {

      const members = await db.collection('members').insertOne({
        name: req.body.name,
        ocupation: req.body.ocupation,
        description: req.body.description,
        avatar: `/${req.body.avatar}.jpg`,
        authorID: await getNextSequenceValue('authorID', db)
      })
      return res.status(200).json(members)
    }
  }

}

async function getNextSequenceValue(sequenceName, db: Db) {
  const sequenceDocument = await db.collection('counters').findOneAndUpdate({ _id: sequenceName }, { $inc: { sequence_value: 1 } }, { returnOriginal: false })
  return sequenceDocument.value.sequence_value;
}

