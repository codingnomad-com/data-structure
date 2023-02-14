export default {
  category: {
    id: 'randomId1',
    title: 'Corporate Website',
    slug: 'corporate-website',
    pages: [
      {
        id: 'randomId2',
        title: 'Typography',
        slug: 'typography',
        sections: [
          {
            id: 'randomId3',
            headline: 'Headlines',
            slug: 'headlines',
            rows: [
              {
                id: 'randomId4',
                columns: [
                  // results in 1 column since it has only 1 object in columns
                  {
                    id: 'randomId5',
                    colWidth: 12,
                    components: [
                      {
                        id: 'randomId6',
                        component: 'Headline',
                        props: {
                          children: 'Headline h1',
                          fontWeight: 'bold',
                          headlineLevel: 'h1',
                          textAlign: 'left',
                          textColor: 'primary',
                          textTransform: 'uppercase',
                        },
                      },
                      {
                        id: 'randomId7',
                        component: 'Headline',
                        props: {
                          children: 'Headline h2',
                          fontSize: '25px',
                          fontWeight: 'normal',
                          headlineLevel: 'h2',
                          textAlign: 'left',
                          textColor: 'secondary',
                          textTransform: 'uppercase',
                        },
                      },
                      {
                        id: 'randomId7',
                        component: 'Headline',
                        props: {
                          children: 'Headline h2',
                          fontSize: '20px',
                          fontWeight: 'normal',
                          headlineLevel: 'h3',
                          textAlign: 'center',
                          textColor: 'secondaryInactive',
                          textTransform: 'uppercase',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 'randomId8',
            headline: 'Paragraphs',
            slug: 'paragraphs',
            rows: [
              {
                id: 'randomId9',
                columns: [
                  // results in 2 column since it has 2 objects in columns
                  {
                    id: 'randomId10',
                    colWidth: 4,
                    components: [
                      {
                        id: 'randomId11',
                        component: 'Paragraph',
                        props: {
                          fontSize: '20px',
                          lineHeight: 1.5,
                        },
                        children: 'Lorem ipsum dolor sit amet.',
                      },
                    ],
                  },
                  {
                    id: 'randomId12',
                    colWidth: 6,
                    components: [
                      {
                        id: 'randomId13',
                        component: 'Paragraph',
                        props: {
                          fontSize: '22px',
                          lineHeight: 1.6,
                        },
                        children: 'Lorem ipsum dolor sit amet.',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
