import { NextApiRequest, NextApiResponse } from "next";
import DB from '@database';
 const allAvo = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB();
  const { id } = request.query;
  const avo= await db.getById(id as string );
  if (!avo) {
   response.status(404).json({ message: 'Product not found' });
  } else {
    response.status(200).json({ data: avo });
  }
};
 export default allAvo;