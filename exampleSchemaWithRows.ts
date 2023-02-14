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
                    colWidth: {
                      desktop: 12,
                      tablet: 12,
                      phone: 12,
                    },
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
                    colWidth: {
                      desktop: 6,
                      tablet: 6,
                      phone: 12,
                    },
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
                    colWidth: {
                      desktop: 6,
                      tablet: 6,
                      phone: 12,
                    },
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
              {
                id: 'randomId14',
                columns: [
                  // results in 3 column since it has 3 objects in columns
                  {
                    id: 'randomId15',
                    colWidth: {
                      desktop: 6,
                      tablet: 12,
                      phone: 12,
                    },
                    components: [
                      {
                        id: 'randomId16',
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
                    id: 'randomId17',
                    colWidth: {
                      desktop: 3,
                      tablet: 6,
                      phone: 12,
                    },
                    components: [
                      {
                        id: 'randomId18',
                        component: 'Paragraph',
                        props: {
                          fontSize: '22px',
                          lineHeight: 1.6,
                        },
                        children: 'Lorem ipsum dolor sit amet.',
                      },
                      {
                        id: 'randomId19',
                        component: 'Paragraph',
                        props: {
                          fontSize: '20px',
                          lineHeight: 1.2,
                        },
                        children: 'Lorem ipsum dolor sit amet.',
                      },
                    ],
                  },
                  {
                    id: 'randomId20',
                    colWidth: {
                      desktop: 3,
                      tablet: 6,
                      phone: 12,
                    },
                    components: [
                      {
                        id: 'randomId21',
                        component: 'Paragraph',
                        props: {
                          fontSize: '26px',
                          lineHeight: 1.0,
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
