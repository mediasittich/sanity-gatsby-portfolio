export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc879972d0eee93ef453c5e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zgfhk6hr',
                  apiId: 'aba3fcfc-7f7c-4244-aee5-f784d42847fb'
                },
                {
                  buildHookId: '5fc87997a4fdfa931d2b4d44',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-b4b2xfy4',
                  apiId: '786948c2-bf2d-45f0-abdc-3c9b6ca592ad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mediasittich/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-b4b2xfy4.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
