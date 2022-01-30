import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const response = await fetch('https://prsc.yomo.dev/api/v1/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          app_id: process.env.PRESENCE_APP_ID,
          app_secret: process.env.PRESENCE_APP_SECRET,
        }),
      })
      const data = await response.json()
      res.status(200).json(data.data)
    } catch (error) {
      if (typeof error === 'string') {
        res.status(500).json({ msg: error })
      } else if (error instanceof Error) {
        res.status(500).json({ msg: error.message })
      }
    }
  } else {
    // Handle any other HTTP method
    res.status(405).json({})
  }
}
