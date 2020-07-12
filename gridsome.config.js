// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Łukasz Zapolski - Frontend Developer',
  siteDescription: 'Portfolio of Łukasz Zapolski - developer specialized in creating web and mobile applications.',
  transformers: {
    remark: {
      
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/*.md',
        typeName: 'Post',
        route: '/blog/:title',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ],
  templates: {
    Post: '/blog/:title',
    Tag: '/tag/:id'
  }
}
