import ArticleService from "../services/Article/ArticleService"

class ArticleController {
    static async createArticle(req, res) {
        try {
            const { title, text, hashtag } = req.body

            const article = await ArticleService.createArticle(title, text, hashtag)

            res.send({ article: article }).status(200)

        } catch (ex) {
            console.log(ex)
            res.status(500).send("Article create error")
        }
    }

}



module.exports = new ArticleController()