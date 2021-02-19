import connectToDataBase from '@/src/config/connectToDataBase'
import { NowRequest, NowResponse } from '@vercel/node'
import { Db } from 'mongodb'

let cacheDb: Db = null

export default async (req: NowRequest, res: NowResponse) => {

  const slugID = req.query.id;

  if (!slugID) return res.json("Página não encontrada!")

  const db: Db = await connectToDataBase(cacheDb)

  if (!Db) {
    return res.status(500).json({ error: 'client DB is not connected' })
  }
  const pageViewBySlugID = await db
    .collection("pageviews")
    .findOne({ slugID })

  let total = 0;
  if (pageViewBySlugID) {
    total = pageViewBySlugID.total + 1;
    await db.collection('pageviews').updateOne({ slugID }, { $set: { total } })
  } else {
    total = 1;
    await db.collection('pageviews').insertOne({ slugID, total })
  }

  return res.status(200).json({ views: total })
}


export async function getPostViews(slugID: string) {
  const db: Db = await connectToDataBase(cacheDb)

  const pageViewBySlugID = await db
    .collection("pageviews")
    .findOne({ slugID })

  let total = 0;
  if (pageViewBySlugID) {
    total = pageViewBySlugID.total;
  }

  return total
}
