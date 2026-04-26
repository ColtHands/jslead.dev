import type { BlogPost } from '~~/utils/contentUtils'

export default function useBlogArticles() {
    return useAsyncData('articles', () =>
        queryContent<BlogPost>('/blog/articles')
            .where({ visible: true })
            .find()
            .then(articles => {
                return articles.sort((a, b) => {
                    const dateA = new Date(a.updatedAt || a.createdAt).getTime()
                    const dateB = new Date(b.updatedAt || b.createdAt).getTime()

                    return dateA > dateB ? -1 : 1
                })
            })
    )
}
