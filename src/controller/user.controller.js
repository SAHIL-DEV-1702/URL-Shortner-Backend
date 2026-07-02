import { getUserUrlsDao, deleteUserUrlById } from '../dao/user.dao.js'

export const userUrls = async (req, res) => {

    try {
        const { _id } = req.user
        const urls = await getUserUrlsDao(_id)
        return res.status(200).json({ urls: urls, message: "urls fetched successfully" })

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

export const deleteUserUrl = async (req, res) => {
    try {
        const { _id: userId } = req.user
        const { id } = req.params

        const deletedUrl = await deleteUserUrlById(userId, id)

        if (!deletedUrl) {
            return res.status(404).json({ error: "URL not found or unauthorized" })
        }

        return res.status(200).json({ message: "URL deleted successfully" })
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}