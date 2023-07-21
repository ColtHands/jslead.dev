import { sortBlogPostsByDate, type BlogPost } from '../contentUtils'

describe('sortBlogPostsByDate', () => {
    it('should sort posts by date', () => {
        const posts = ['01.01.2019', '01.02.2019', '02.03.2023'].map(e => ({ date: e })) as BlogPost[]

        const sortedPosts = sortBlogPostsByDate(posts)

        expect(sortedPosts[0].date).toEqual('02.03.2023')
    })
})