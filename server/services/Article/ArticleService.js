import Article from "../../models/ArticleModel"

class ArticleService {
    static async createArticle(title, text, hashtag = '') {
        return await Article.create({ title, text, hashtag })
    }
}


module.exports = new ArticleService()