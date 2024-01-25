import type { BlogPost } from '~~/utils/contentUtils'

export default function useBlogArticles() {
    return queryContent<BlogPost>('/blog/articles')
        .where({ visible: true })
        .find()
        .then(articles => articles.sort((a, b) =>
            new Date(a.date) > new Date(b.date) ? -1 : 1
        ))
}

