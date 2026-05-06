import { getUserUrlsDao } from '../dao/user.dao.js'

export const userUrls = async (req, res) => {

    try {
        const { _id } = req.user
        const urls = await getUserUrlsDao(_id)
        return res.status(200).json({ urls: urls, message: "urls fetched successfully" })

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}