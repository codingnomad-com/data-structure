import { PageSchema } from './types';

export default {
  host: 'http://localhost:3000/',
  pages: [
    // Home
    {
      navigationLabel: 'Startseite',
      path: '/',
      meta: {
        title: 'Willkommen auf dem Kundenportal von irgendwem',
        description: 'Startseite',
        ogImage: '',
      },
      isSubNav: true,
      isPrivate: false,
      components: [
        {
          componentId: 'RootComponent_1638795743792',
          columns: 1,
          children: [
            {
              component: 'ImageSlider',
              config: {
                fullWidth: true,
              },
              props: {
                imageSliderHeight: '400px',
                autoplay: { delay: 4000 },
                imageSliderSlides: [
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        '1 Cashback in über 1.200 Shops',
                      imageSliderContentIntro: '1 Shops & Produkte',
                      imageSliderContentText:
                        '1 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'left',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        '2 Cashback in über 1.200 Shops',
                      imageSliderContentIntro: '2 Shops & Produkte',
                      imageSliderContentText:
                        '2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'right',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        '3Cashback in über 1.200 Shops',
                      imageSliderContentIntro: '3 Shops & Produkte',
                      imageSliderContentText:
                        '3 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'center',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                ],
              },
            },
            {
              component: 'Headline',
              props: {
                headlineLevel: 'h1',
                textColor: 'primary',
                fontWeight: 'normal',
                textAlign: 'left',
                uppercase: false,
                isLoading: false,
                children: 'Ihr Vorteilsportal',
              },
            },
            {
              component: 'Paragraph',
              props: {
                textColor: 'black',
                fontWeight: 'normal',
                textAlign: 'left',
                styleProps: 'width: 80%; padding: 20px;',
                children:
                  'Herzlich willkommen im Vorteilsportal für Ihren Bonus rund ums Konto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
              },
            },
            {
              componentId: 'ChildComponent_1638796343243242347',
              component: 'OnlineCashbackHighlightList',
              props: {
                headline: 'Cashback Highlights',
                containerItemsProps: {
                  itemsPerRowLg: 2,
                  itemsPerRowMd: 2,
                  itemsPerRowXl: 2,
                  itemsPerRowSm: 1,
                  itemsPerRowXs: 1,
                },
                list: {
                  showAllItems: true,
                  itemsPerPage: 2,
                },
                showMoreLink: {
                  url: '/cashback/highlight',
                  text: 'Alle Cashback-Highlights anzeigen',
                },
              },
              config: {
                queryKey: 'OnlineCashbackSpecialsGetSpecialsListQuery_homepage',
              },
            },
            {
              componentId: 'ChildComponent_155454',
              component: 'OnlineCashbackShopList',
              props: {
                headline: 'Die neuesten Cashback - Shops',
                containerItemsProps: {
                  itemsPerRowLg: 4,
                  itemsPerRowMd: 4,
                  itemsPerRowXl: 4,
                  itemsPerRowSm: 2,
                  itemsPerRowXs: 2,
                },
                showMoreLink: {
                  url: '/cashback/shop',
                  text: 'Alle Cashback-Shops anzeigen',
                },
                list: {
                  showAllItems: false,
                  itemsPerPage: 4,
                },
              },
              config: {
                queryKey: 'OnlineCashbackShopsGetShopsListQuery_homepage',
              },
            },
          ],
        },
      ],
      queries: [
        {
          query: 'OnlineCashbackSpecialsGetSpecialsListQuery',
          key: 'OnlineCashbackSpecialsGetSpecialsListQuery_homepage',
          queryVariables: {
            sort: 'ASC',
          },
        },
        {
          query: 'OnlineCashbackShopsGetShopsListQuery',
          key: 'OnlineCashbackShopsGetShopsListQuery_homepage',
          queryVariables: {
            direction: 'desc',
            orderBy: '',
            itemsPerPage: 8,
            page: 1,
          },
        },
      ],
    },
    // Online Cashback Highlights
    {
      navigationLabel: 'Highlights',
      path: '/cashback/highlights',
      meta: {
        title: 'Cashback Highlights',
        description: 'Cashback Highlights',
      },
      isSubNav: false,
      isPrivate: false,
      components: [
        {
          componentId: 'RootComponent_1638795743792',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              componentId: 'ChildComponent_1638796758947',
              component: 'OnlineCashbackHighlightList',
              props: {
                headline: 'Cashback Highlights',
                containerItemsProps: {
                  itemsPerRowLg: 2,
                  itemsPerRowMd: 2,
                  itemsPerRowXl: 2,
                  itemsPerRowSm: 1,
                  itemsPerRowXs: 1,
                },
                list: {
                  showAllItems: true,
                  itemsPerPage: 16,
                },
              },
              config: {
                queryKey: 'OnlineCashbackSpecialsGetSpecialsListQuery_3',
              },
            },
          ],
        },
      ],
      queries: [
        {
          query: 'OnlineCashbackSpecialsGetSpecialsListQuery',
          key: 'OnlineCashbackSpecialsGetSpecialsListQuery_3',
        },
      ],
    },
    // Online Cashback Create Complaint
    {
      navigationLabel: 'Nachbuchungsanfrage',
      path: '/cashback/create-complaint',
      meta: {
        title: 'Nachbuchungsanfrage erstellen',
        description: 'lalalala hier muss eine description hin',
      },
      isSubNav: true,
      isPrivate: false,
      components: [
        {
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'OnlineCashbackCreateComplaintForm',
              props: {
                headline: 'Nachbuchungsanfrage',
              },
              config: {
                queryKey: 'OnlineCashbackClickoutsGetClickoutsListQuery_1',
                callback: 'createComplaint',
              },
            },
          ],
        },
      ],
      queries: [
        {
          query: 'OnlineCashbackClickoutsGetClickoutsListQuery',
          key: 'OnlineCashbackClickoutsGetClickoutsListQuery_1',
          queryVariables: {
            sort: 'ASC',
          },
        },
      ],
    },
    // Online Cashback Shops List
    {
      path: '/cashback/shops',
      navigationLabel: 'Shops & Produkte',
      meta: {
        title: 'Shops',
        description: 'Cashback Shops',
        ogImage: '',
      },
      isSubNav: false,
      isPrivate: false,
      children: [
        {
          title: 'Shops',
          link: '/cashback/shops',
        },
        {
          title: 'Produkte',
          link: '/cashback/products',
        },
      ],
      components: [
        {
          componentId: 'RootComponent_1638795743792',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'ImageSlider',
              config: {
                fullWidth: true,
              },
              props: {
                imageSliderHeight: '400px',
                autoplay: { delay: 4000 },
                imageSliderSlides: [
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        '1 Cashback in über 1.200 Shops',
                      imageSliderContentIntro: '1 Shops & Produkte',
                      imageSliderContentText:
                        '1 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'left',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        '2 Cashback in über 1.200 Shops',
                      imageSliderContentIntro: '2 Shops & Produkte',
                      imageSliderContentText:
                        '2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'right',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        '3Cashback in über 1.200 Shops',
                      imageSliderContentIntro: '3 Shops & Produkte',
                      imageSliderContentText:
                        '3 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'center',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                ],
              },
            },
            {
              component: 'Tabs',
              props: {
                activeTab: '1',
                tabItems: [
                  {
                    label: 'Shops',
                    value: '1',
                    linkType: 'href',
                    href: '/cashback/shops',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Produkte',
                    value: '2',
                    linkType: 'href',
                    href: '/cashback/products',
                    targetBlank: '_self',
                  },
                ],
              },
            },
            {
              component: 'Filter',
              props: {
                completed: false,
                headlineProps: {
                  children: 'Produkt suchen',
                },
                filterRows: [
                  {
                    justifyContent: 'space-between',
                    items: [
                      {
                        type: 'searchField',
                        id: 'field2',
                        name: 'query',
                        value: '',
                        label: 'Shopname',
                        placeholder: 'Shopname',
                      },
                      {
                        type: 'sortSelect',
                        id: 'Sortierung',
                        labelText: 'Sortierung',
                        name: 'sort',
                        placeholder: 'bitte Sortierung wählen',
                        items: [
                          {
                            value: 'name:asc',
                            label: 'Alphabetisch',
                            selected: true,
                          },
                          {
                            value: 'createdAt:desc',
                            label: 'Aktuelle Einträge zu Beginn',
                            selected: false,
                          },
                          {
                            value: 'maximumCashback:asc',
                            label: 'Cashback aufsteigend',
                            selected: false,
                          },
                          {
                            value: 'maximumCashback:desc',
                            label: 'Cashback absteigend',
                            selected: false,
                          },
                          {
                            value: 'popularity:desc',
                            label: 'Beliebte zu Beginn',
                            selected: false,
                          },
                        ],
                      },
                      {
                        type: 'filterSelect',
                        id: 'category',
                        labelText: 'Kategorie',
                        name: 'category',
                        placeholder: 'bitte Kategorie wählen',
                        items: [],
                      },
                    ],
                  },
                  {
                    includeSearchButton: true,
                    items: [
                      {
                        type: 'quickFilter',
                        id: 'abc',
                        items: [
                          {
                            name: 'favorites',
                            value: 'true',
                            label: 'Favoriten',
                            selected: false,
                          },
                          {
                            name: 'highlight',
                            value: 'true',
                            label: 'Highlight',
                            selected: false,
                          },
                          {
                            name: 'vouchers',
                            value: 'true',
                            label: 'Mit Gutschein',
                            selected: false,
                          },
                          {
                            name: 'cashbackType',
                            value: 'perc',
                            label: 'Cashback in %',
                            selected: false,
                          },
                          {
                            name: 'cashbackType',
                            value: 'eur',
                            label: 'Cashback in €',
                            selected: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              config: {
                dataNormalizeForService: 'categoriesList',
                queryKeys: [
                  'OnlineCashbackShopsGetShopsListQuery_1',
                  'OnlineCashbackCategoriesGetCategoriesListQueryKey',
                ],
              },
            },
            {
              componentId: 'ChildComponent_16387967332234354',
              component: 'OnlineCashbackShopList',
              props: {
                headline: 'Cashback Shops',
                containerItemsProps: {
                  itemsPerRowLg: 4,
                  itemsPerRowMd: 4,
                  itemsPerRowXl: 4,
                  itemsPerRowSm: 2,
                  itemsPerRowXs: 2,
                },
                paginationProps: {
                  margin: '16px 0 32px',
                },
                list: {
                  showAllItems: false,
                  itemsPerPage: 16,
                },
              },
              config: {
                queryKey: 'OnlineCashbackShopsGetShopsListQuery_1',
              },
            },
          ],
        },
      ],
      queries: [
        {
          query: 'OnlineCashbackShopsGetShopsListQuery',
          key: 'OnlineCashbackShopsGetShopsListQuery_1',
          queryVariables: {
            direction: 'asc',
            orderBy: '',
            itemsPerPage: 16,
            page: 1,
          },
        },
        {
          query: 'OnlineCashbackCategoriesGetCategoriesListQuery',
          key: 'OnlineCashbackCategoriesGetCategoriesListQueryKey',
        },
      ],
    },
    // Online Cashback Shop Detail
    {
      path: '/cashback/shop/:id',
      meta: {
        title: 'Cashback Shops Details',
        description: 'Cashback Shops Details',
        ogImage: '',
      },
      isSubNav: true,
      isPrivate: false,
      components: [
        {
          componentId: 'RootComponent_786112348685',
          columns: 2,
          config: {
            fullWidth: false,
            columnsRatio: '3:1',
          },
          leftColumnChildren: [
            {
              componentId: 'TextTeaser_1654347',
              component: 'TextTeaser',
              config: {
                queryKey: 'OnlineCashbackShopsGetShopByIdQuery',
                dataNormalizeForService: 'cashbackShop',
              },
            },
            {
              componentId: 'ComplexTable_1654347',
              component: 'ComplexTable',
              config: {
                queryKey: 'OnlineCashbackShopsGetShopByIdQuery',
                dataNormalizeForService: 'cashbackShop',
              },
            },
          ],
          rightColumnChildren: [
            {
              componentId: 'InfoLinkBox_1654347',
              component: 'InfoLinkBox',
              config: {
                queryKey: 'OnlineCashbackShopsGetShopByIdQuery',
                dataNormalizeForService: 'cashbackShop',
              },
            },
            {
              componentId: 'InfoLinkBox_1654347',
              component: 'InfoBox',
              props: {
                headline: 'Allgemeine Infos',
                text: `<p>Bitte achten Sie darauf, dass <b>Gutscheine</b> meist nicht mit dem angegebenen Cashback kombiniert werden können. Dies gilt auch für käuflich erworbene Gutschein im Shop selbst oder von Groupon o.ä. Die Verwendung von Gutscheinen führt in den meisten Fällen zur Ablehnung des Bonus.</p> <br/> <p>Alle <b>prozentualen Rabatte</b> beziehen sich auf den Bruttoeinkaufswert (Versandkosten werden nicht mit in die Bonusberechnung einbezogen, der Bruttoeinkaufswert ist damit im Normalfall etwas geringer als der Rechnungsbetrag).</p><br/> <p>Reklamationen müssen spätestens 3 Monate nach Buchung versendet werden. Anfragen, die später eingehen werden nicht berücksichtigt.</p>`,
                boxProps: { margin: '16px 0' },
              },
            },
          ],
        },
      ],
      queries: [
        {
          query: 'OnlineCashbackShopsGetShopByIdQuery',
          key: 'OnlineCashbackShopsGetShopByIdQuery',
        },
      ],
    },
    // Online Cashback Products List
    {
      navigationLabel: 'Produkte',
      path: '/cashback/products',
      meta: {
        title: 'Produkte',
        description: 'Cashback Products',
        ogImage: '',
      },
      isSubNav: true,
      isPrivate: false,
      children: [
        {
          title: 'Shops',
          link: '/cashback/shops',
        },
        {
          title: 'Produkte',
          link: '/cashback/products',
        },
      ],
      components: [
        {
          componentId: 'RootComponent_1638795743792',
          columns: 1,
          children: [
            {
              component: 'ImageSlider',
              config: {
                fullWidth: true,
              },
              props: {
                imageSliderHeight: '400px',
                autoplay: { delay: 4000 },
                imageSliderSlides: [
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        '1 Cashback in über 1.200 Shops',
                      imageSliderContentIntro: '1 Shops & Produkte',
                      imageSliderContentText:
                        '1 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'left',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        '2 Cashback in über 1.200 Shops',
                      imageSliderContentIntro: '2 Shops & Produkte',
                      imageSliderContentText:
                        '2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'right',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        '3Cashback in über 1.200 Shops',
                      imageSliderContentIntro: '3 Shops & Produkte',
                      imageSliderContentText:
                        '3 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'center',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                ],
              },
            },
            {
              component: 'Tabs',
              props: {
                activeTab: '2',
                tabItems: [
                  {
                    label: 'Shops',
                    value: '1',
                    linkType: 'href',
                    href: '/cashback/shops',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Produkte',
                    value: '2',
                    linkType: 'href',
                    href: '/cashback/products',
                    targetBlank: '_self',
                  },
                ],
              },
            },
            {
              component: 'Filter',
              props: {
                headlineProps: {
                  children: 'Produkt suchen',
                },
                filterRows: [
                  {
                    justifyContent: 'space-between',
                    items: [
                      {
                        type: 'searchField',
                        id: 'field2',
                        name: 'query',
                        value: '',
                        label: 'Suche',
                        minLength: 3,
                        required: true,
                      },
                      {
                        type: 'sortSelect',
                        id: 'Sortierung',
                        labelText: 'Sortierung',
                        name: 'sort',
                        placeholder: 'bitte Sortierung wählen',
                        items: [
                          {
                            value: 'order:asc',
                            label: 'Preis aufsteigend',
                            selected: false,
                          },
                          {
                            value: 'order:desc',
                            label: 'Preis absteigend',
                            selected: false,
                          },
                          {
                            value: 'order:priority',
                            label: 'Relevanz',
                            selected: true,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    justifyContent: 'space-between',
                    items: [
                      {
                        type: 'rangeSlider',
                        name: 'priceRange',
                        id: 'priceRange',
                        minValue: 0,
                        maxValue: 100,
                      },
                    ],
                    includeResetButton: true,
                    includeSearchButton: true,
                  },
                ],
              },
              config: {
                queryKey: 'OnlineCashbackProductsGetProductsListQuery',
              },
            },
            {
              componentId: 'OnlineCashbackProductList_1638796758947',
              component: 'OnlineCashbackProductList',
              props: {
                headlineProps: {
                  children: 'All Produkte',
                  headlineLevel: 'h4',
                  headlineFontWeight: 'bold',
                },
                paginationProps: {
                  margin: '16px 0 32px',
                },
                containerItemsProps: {
                  itemsPerRowLg: 4,
                  itemsPerRowMd: 4,
                  itemsPerRowXl: 4,
                  itemsPerRowSm: 2,
                  itemsPerRowXs: 2,
                },
                list: {
                  showAllItems: false,
                },
              },
              config: {
                queryKey: 'OnlineCashbackProductsGetProductsListQuery',
              },
            },
          ],
        },
      ],
      queries: [
        {
          query: 'OnlineCashbackProductsGetProductsListQuery',
          key: 'OnlineCashbackProductsGetProductsListQuery',
          queryVariables: {
            sort: 'ASC',
            direction: 'asc',
            itemsPerPage: 12,
            page: 1,
            query: '',
          },
        },
      ],
    },
    // Online Cashback Product Detail
    {
      path: '/cashback/products/:id',
      meta: {
        title: 'Cashback Product Details',
        description: 'Cashback Product Details',
        ogImage: '',
      },
      isSubNav: true,
      isPrivate: false,
      components: [
        {
          componentId: 'RootComponent_786112348685',
          columns: 2,
          config: {
            fullWidth: false,
            columnsRatio: '3:1',
          },
          leftColumnChildren: [
            {
              componentId: 'TextTeaser_1654347',
              component: 'TextTeaser',
              config: {
                queryKey:
                  'OnlineCashbackProductsGetProductByIdQuery_productDetail',
                dataNormalizeForService: 'cashbackShop',
              },
            },
          ],
          rightColumnChildren: [
            {
              componentId: 'InfoLinkBox_1654347',
              component: 'InfoLinkBox',
              config: {
                queryKey:
                  'OnlineCashbackProductsGetProductByIdQuery_productDetail',
                dataNormalizeForService: 'cashbackProduct',
              },
            },
          ],
        },
        {
          componentId: 'RootComponent_37275276572',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              componentId: 'ComplexTable_16387967332234354',
              component: 'ComplexTable',
              config: {
                queryKey: 'OnlineCashbackGetProductOffersQueryKey',
                dataNormalizeForService: 'cashbackOffer',
              },
            },
          ],
        },
      ],
      queries: [
        {
          query: 'OnlineCashbackProductsGetProductByIdQuery',
          key: 'OnlineCashbackProductsGetProductByIdQuery_productDetail',
          queryVariables: {
            nextQuery: 'OnlineCashbackProductsGetOffersListQuery',
            nextKey: 'OnlineCashbackGetProductOffersQueryKey',
          },
        },
      ],
    },
    // Online Cashback Transactions
    {
      path: '/cashback/transactions',
      navigationLabel: 'Transaktionen',
      meta: {
        title: 'Gesamtübersicht',
        description: 'Meine Gesamtübersicht',
      },
      isSubNav: true,
      isPrivate: true,
      backlink: {
        link: '/cashback/dashboard',
        label: 'Zurück zur Übersicht',
      },
      children: [
        {
          title: 'Dashboard',
          link: '/cashback/dashboard',
        },
        {
          title: 'Gesamtübersicht',
          link: '/cashback/transactions',
        },
      ],
      components: [
        {
          componentId: 'RootComponent_12344',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              componentId: 'OnlineCashbackDashboardTiles_16387967332234354',
              component: 'OnlineCashbackDashboardTiles',
              config: {
                queryKey: 'OnlineCashbackCashoutsGetProfileQuery_transactions',
              },
            },
            {
              componentId: 'Headline_1',
              component: 'Headline',
              props: {
                headlineLevel: 'h2',
                headlineFontWeight: 'bold',
                headlineTextAlign: 'left',
                headlineUppercase: false,
                isLoading: false,
                children: 'Meine Gesamtübersicht',
                margin: '64px 0 32px;',
              },
            },
            {
              component: 'Filter',
              config: {
                dataNormalizeForService: 'cashbackTransactions',
                queryKey:
                  'OnlineCashbackProfileGetStatementListQuery_transactions',
              },
              props: {
                applyOnChange: true,
                completed: false,
                wrapperStyles: {
                  border: 'none',
                },
                filterRows: [
                  {
                    justifyContent: 'space-between',
                    items: [
                      {
                        type: 'filterSelect',
                        id: 'type',
                        labelText: 'Kategorie',
                        name: 'type',
                        placeholder: 'bitte Kategorie wählen',
                        items: [],
                      },
                      {
                        type: 'filterSelect',
                        labelText: 'Status',
                        id: 'status',
                        isMulti: true,
                        textColor: 'black',
                        placeholder: 'bitte auswählen',
                        labelColor: 'black',
                        placeholderColor: 'grey60',
                        name: 'status',
                        items: [
                          {
                            value: 'open',
                            label: 'open',
                            selected: false,
                          },
                          {
                            value: 'cancelled',
                            label: 'cancelled',
                            selected: false,
                          },
                          {
                            value: 'confirmed',
                            label: 'confirmed',
                            selected: false,
                          },
                        ],
                      },
                      {
                        type: 'dateFilter',
                        label: 'Start Date',
                        id: 'startDate',
                        textColor: 'black',
                        placeholder: '09/25/2021',
                        labelColor: 'black',
                        placeholderColor: 'grey60',
                        name: 'startDate',
                      },
                      {
                        type: 'dateFilter',
                        label: 'End Date',
                        id: 'endDate',
                        textColor: 'black',
                        placeholder: '09/30/2021',
                        labelColor: 'black',
                        placeholderColor: 'grey60',
                        name: 'endDate',
                      },
                      {
                        type: 'sortSelect',
                        id: 'Sortierung',
                        labelText: 'Sortierung',
                        name: 'sort',
                        placeholder: 'bitte Sortierung wählen',
                        items: [
                          {
                            value: 'name:asc',
                            label: 'nach Name (aufsteigend)',
                            selected: false,
                          },
                          {
                            value: 'name:desc',
                            label: 'nach Name (absteigend)',
                            selected: false,
                          },
                          {
                            value: 'createdAt:desc',
                            label: 'Neuheiten',
                            selected: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            {
              componentId: 'ComplexTable_21312',
              component: 'ComplexTable',
              config: {
                queryKey:
                  'OnlineCashbackProfileGetStatementListQuery_transactions',
                dataNormalizeForService: 'cashbackTransactions',
              },
              props: {
                tableProps: {
                  tableBackgroundColor: 'white',
                  tableFooterBackgroundColor: 'white',
                  tableFooterTextColor: 'primary',
                  tableHeaderBackgroundColor: 'grey20',
                  tableHeaderTextColor: 'primary',
                  showFooter: false,
                },
              },
            },
          ],
        },
      ],
      queries: [
        {
          query: 'OnlineCashbackCashoutsGetProfileQuery',
          key: 'OnlineCashbackCashoutsGetProfileQuery_transactions',
        },
        {
          query: 'OnlineCashbackProfileGetStatementListQuery',
          key: 'OnlineCashbackProfileGetStatementListQuery_transactions',
          queryVariables: {
            direction: 'asc',
            itemsPerPage: 20,
            page: 1,
          },
        },
      ],
    },
    // Login
    {
      path: '/login',
      meta: {
        title: 'Login',
        description: 'Login',
        ogImage: '',
      },
      isSubNav: true,
      isPrivate: false,
      components: [
        {
          componentId: 'RootComponent_1638795743792',
          columns: 1,
          children: [
            {
              component: 'ImageSlider',
              config: {
                fullWidth: true,
              },
              props: {
                imageSliderHeight: '400px',
                autoplay: { delay: 4000 },
                imageSliderSlides: [
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        '1 Cashback in über 1.200 Shops',
                      imageSliderContentIntro: '1 Shops & Produkte',
                      imageSliderContentText:
                        '1 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'left',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        '2 Cashback in über 1.200 Shops',
                      imageSliderContentIntro: '2 Shops & Produkte',
                      imageSliderContentText:
                        '2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'right',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        '3Cashback in über 1.200 Shops',
                      imageSliderContentIntro: '3 Shops & Produkte',
                      imageSliderContentText:
                        '3 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'center',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                ],
              },
            },
            {
              component: 'Headline',
              props: {
                headlineLevel: 'h1',
                textColor: 'primary',
                fontWeight: 'normal',
                textAlign: 'left',
                uppercase: false,
                isLoading: false,
                children: 'Willkommen im Vorteilsportal',
              },
            },
            {
              component: 'Paragraph',
              props: {
                textColor: 'black',
                fontWeight: 'normal',
                textAlign: 'left',
                styleProps: 'width: 80%; padding: 20px;',
                children:
                  'Herzlich willkommen im Vorteilsportal für Ihren Bonus rund ums Konto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
              },
            },
            {
              component: 'LoginForm',
              config: {
                callback: 'loginForm',
              },
              props: {
                passwordForgetProps: {
                  link: 'google.com',
                  label: 'Passwort vergessen?',
                  target: '_blank',
                },
                signupProps: {
                  link: '/signup',
                  label: 'Noch kein Zugang? Jetzt Registrieren',
                },
                submitProps: {
                  label: 'Login Vorteilswelt',
                  icon: 'lock',
                },
              },
            },
          ],
        },
      ],
      // TODO: Fix this
      queries: [
        {
          query: 'LoginQuery',
          key: 'LoginQueryKey',
        },
      ],
    },
    // Meine Daten
    {
      navigationLabel: 'Meine Daten',
      path: '/my-data',
      meta: {
        title: 'Mein Bereich',
        description: 'Mein Bereich',
        ogImage: '',
      },
      isSubNav: true,
      isPrivate: true,
      components: [
        {
          componentId: 'RootComponent_1638795743792',
          columns: 1,
          children: [
            {
              component: 'Headline',
              props: {
                headlineLevel: 'h2',
                textColor: 'primary',
                fontWeight: 'normal',
                textAlign: 'left',
                uppercase: false,
                children: 'Meine Daten',
              },
            },
            {
              component: 'MyDataForm',
              config: {
                queryKey: 'MyDataQueryKey',
              },
            },
          ],
        },
      ],
      // TODO: add proper queries
      queries: [
        {
          query: 'MyDataQuery',
          key: 'MyDataQueryKey',
        },
      ],
    },
    // Travel
    {
      navigationLabel: 'Reisen',
      path: '/travel',
      meta: {
        title: 'Reisen',
        description: 'Reisen mit Rückvergütung',
        ogImage: '',
      },
      isSubNav: false,
      isPrivate: false,
      components: [
        {
          componentId: 'RootComponent_1638795743792',
          columns: 1,
          children: [
            {
              component: 'ImageSlider',
              config: {
                fullWidth: true,
              },
              props: {
                imageSliderHeight: '400px',
                autoplay: { delay: 4000 },
                imageSliderSlides: [
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline: 'Reisen mit Rückvergütung',
                      imageSliderContentIntro: 'Reiserückvergütung',
                      imageSliderContentText:
                        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'right',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                ],
              },
            },
          ],
        },
        {
          componentId: 'RootComponent_2',
          columns: 2,
          config: {
            columnsRatio: '2:1',
          },
          props: {
            styleProps:
              'border: 1px solid #E4E4E4; padding: 32px; margin: 32px 0;',
          },
          leftColumnChildren: [
            {
              component: 'Headline',
              props: {
                headlineLevel: 'h3',
                textColor: 'primary',
                fontWeight: 'normal',
                textAlign: 'left',
                uppercase: false,
                children: 'Die Welt entdecken und sparen',
              },
            },
            {
              component: 'Paragraph',
              props: {
                textColor: 'black',
                fontWeight: 'normal',
                textAlign: 'left',
                styleProps: 'width: 80%;',
                children:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea eirmod tempor invidunt ut At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,',
              },
            },
          ],
          rightColumnChildren: [
            {
              component: 'ContactTile',
              props: {
                email: 'test@test.com',
                openingHours: [
                  {
                    dayString: 'Montag bis Freitag',
                    timeString: '8 bis 20 Uhr',
                  },
                  { dayString: 'Samstag', timeString: '8 bis 14 Uhr' },
                ],
                phoneNumber: {
                  countryCode: 'DE',
                  areaCode: '111',
                  number: '7000-200',
                },
              },
            },
          ],
        },
        {
          componentId: 'RootComponent_3',
          columns: 1,
          children: [
            {
              componentId: 'ChildComponent_155454',
              component: 'OnlineCashbackShopList',
              props: {
                headlineProps: {
                  children: 'Cashback auf Ihre Reise erhalten',
                  headlineLevel: 'h2',
                  headlineFontWeight: 'bold',
                  margin: '64px 0 32px',
                },
                containerItemsProps: {
                  itemsPerRowLg: 4,
                  itemsPerRowMd: 4,
                  itemsPerRowXl: 4,
                  itemsPerRowSm: 2,
                  itemsPerRowXs: 2,
                  alignItems: 'stretch',
                },
                list: {
                  showAllItems: true,
                  itemsPerPage: 4,
                },
              },
              config: {
                queryKey: 'OnlineCashbackShopsGetShopsListQuery_travel',
              },
            },
            {
              component: 'Headline',
              props: {
                headlineLevel: 'h3',
                textColor: 'primary',
                fontWeight: 'normal',
                textAlign: 'left',
                margin: '50px 0 6px',
                uppercase: false,
                children: 'Oder Sie stellen sich hier Ihre Traumreise zusammen',
              },
            },
            {
              component: 'Paragraph',
              props: {
                textColor: 'black',
                fontWeight: 'normal',
                textAlign: 'left',
                styleProps: 'width: 80%;',
                children:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea eirmod tempor invidunt ut At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,',
              },
            },
            {
              component: 'Iframe',
              config: {
                dataNormalizeForService: 'travel',
              },
              props: {
                src: 'https://ibe.traffics.de/1100001310000000',
                styleProps: 'min-height: 70vh; margin-top: 50px;',
              },
            },
          ],
        },
      ],
      queries: [
        {
          query: 'OnlineCashbackShopsGetShopsListQuery',
          key: 'OnlineCashbackShopsGetShopsListQuery_travel',
          queryVariables: {
            direction: 'asc',
            orderBy: '',
            itemsPerPage: 4,
            page: 1,
            favorites: true,
          },
        },
      ],
    },
    // Tickets
    {
      navigationLabel: 'Tickets',
      path: '/tickets',
      meta: {
        title: 'Tickets',
        description: 'Reisen mit Rückvergütung',
        ogImage: '',
      },
      isSubNav: false,
      isPrivate: false,
      components: [
        {
          componentId: 'RootComponent_1',
          columns: 1,
          children: [
            {
              component: 'ImageSlider',
              config: {
                fullWidth: true,
              },
              props: {
                imageSliderHeight: '400px',
                autoplay: { delay: 4000 },
                imageSliderSlides: [
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline: 'Reisen mit Rückvergütung',
                      imageSliderContentIntro: 'Reiserückvergütung',
                      imageSliderContentText:
                        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'right',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                ],
              },
            },
          ],
        },
        {
          componentId: 'RootComponent_2',
          columns: 2,
          config: {
            columnsRatio: '2:1',
          },
          props: {
            styleProps:
              'border: 1px solid #E4E4E4; padding: 32px; margin: 32px 0;',
          },
          leftColumnChildren: [
            {
              component: 'Headline',
              props: {
                headlineLevel: 'h3',
                textColor: 'primary',
                fontWeight: 'normal',
                textAlign: 'left',
                uppercase: false,
                children:
                  'Konzerte und Events buchen und Ihren Star live erleben',
              },
            },
            {
              component: 'Paragraph',
              props: {
                textColor: 'black',
                fontWeight: 'normal',
                textAlign: 'left',
                styleProps: 'width: 80%;',
                children:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea eirmod tempor invidunt ut At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,',
              },
            },
          ],
          rightColumnChildren: [
            {
              component: 'ContactTile',
              props: {
                email: 'test@test.com',
                openingHours: [
                  {
                    dayString: 'Montag bis Freitag',
                    timeString: '8 bis 20 Uhr',
                  },
                  { dayString: 'Samstag', timeString: '8 bis 14 Uhr' },
                ],
                phoneNumber: {
                  countryCode: 'DE',
                  areaCode: '111',
                  number: '7000-200',
                },
              },
            },
          ],
        },
        {
          componentId: 'RootComponent_3',
          columns: 1,
          children: [
            {
              component: 'Iframe',
              config: {
                dataNormalizeForService: 'tickets',
              },
              props: {
                src: 'https://www.eventim.de/noapp/?affiliate=GIR',
                styleProps: 'min-height: 70vh; margin-top: 50px;',
              },
            },
          ],
        },
      ],
    },
    // Events
    {
      navigationLabel: 'Events',
      path: '/events',
      meta: {
        title: 'Events',
        description: 'Events',
        ogImage: '',
      },
      isSubNav: false,
      isPrivate: false,
      components: [
        {
          componentId: 'RootComponent_1',
          columns: 1,
          children: [
            {
              component: 'ImageSlider',
              config: {
                fullWidth: true,
              },
              props: {
                imageSliderHeight: '400px',
                autoplay: { delay: 4000 },
                imageSliderSlides: [
                  {
                    imageSliderContent: {
                      imageSliderContentIntro: 'Magazin Leistungen',
                      imageSliderContentHeadline:
                        'Buchen Sie hier Ihre Veranstaltungen',
                      imageSliderContentText:
                        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'right',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                ],
              },
            },
            {
              component: 'Filter',
              config: {
                // TODO: get events queries in portal base
                queryKey: 'GetEventsQueryKey',
              },
              props: {
                headlineProps: {
                  children: 'Veranstaltungen suchen',
                },
                applyOnChange: true,
                filterRows: [
                  {
                    items: [
                      {
                        type: 'searchField',
                        id: 'field2',
                        name: 'query',
                        value: '',
                        label: 'Suche',
                      },
                    ],
                    includeSearchButton: true,
                  },
                  {
                    justifyContent: 'space-between',
                    items: [
                      {
                        type: 'filterSelect',
                        labelText: 'Kategorie',
                        id: 'category',
                        isMulti: true,
                        textColor: 'black',
                        placeholder: 'bitte auswählen',
                        labelColor: 'black',
                        placeholderColor: 'grey60',
                        name: 'category',
                        items: [
                          {
                            value: 'shopping',
                            label: 'Shopping',
                            selected: false,
                          },
                          { value: 'books', label: 'Bücher', selected: false },
                          {
                            value: 'stamps',
                            label: 'Briefmarken',
                            selected: false,
                          },
                        ],
                      },
                      {
                        type: 'filterSelect',
                        labelText: 'Ort',
                        id: 'city',
                        isMulti: true,
                        textColor: 'black',
                        placeholder: 'bitte auswählen',
                        labelColor: 'black',
                        placeholderColor: 'grey60',
                        name: 'category',
                        items: [
                          {
                            value: 'Berlin',
                            label: 'Berlin',
                            selected: false,
                          },
                          {
                            value: 'Bielefeld',
                            label: 'Bielefeld',
                            selected: false,
                          },
                          {
                            value: 'Hamburg',
                            label: 'Hamburg',
                            selected: false,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    justifyContent: 'space-between',
                    items: [
                      {
                        type: 'searchField',
                        id: 'startDate',
                        name: 'startDate',
                        value: '',
                        label: 'Veranstaltungsdatum',
                      },
                      {
                        type: 'searchField',
                        id: 'endDate',
                        name: 'endDate',
                        value: '',
                        label: 'bis Datum',
                      },
                      {
                        type: 'quickFilter',
                        name: 'quickFilters',
                        id: 'quickFilters',
                        items: [
                          {
                            name: 'favorites',
                            value: 'favorites',
                            label: 'meine Favoriten',
                            selected: false,
                          },
                          {
                            name: 'highlighted',
                            value: 'highlighted',
                            label: 'nur Highlights',
                            selected: false,
                          },
                          {
                            name: 'onWeekends',
                            value: 'onWeekends',
                            label: 'dieses Wochenende',
                            selected: false,
                          },
                        ],
                      },
                    ],
                    includeResetButton: true,
                    includeSearchButton: true,
                  },
                ],
              },
            },
            {
              component: 'EventsList',
              config: {
                queryKey: 'GetEventsQueryKey',
              },
              props: {
                headlineProps: {
                  children: 'Buchen Sie hier Ihre Veranstaltung',
                },
                containerItemsProps: {
                  itemsPerRowLg: 4,
                  itemsPerRowMd: 4,
                  itemsPerRowXl: 4,
                  itemsPerRowSm: 2,
                  itemsPerRowXs: 2,
                },
                paginationProps: {
                  margin: '16px 0 32px',
                },
              },
            },
          ],
        },
      ],
      queries: [
        {
          query: 'EventsEventsGetEventsListQuery',
          key: 'GetEventsQueryKey',
          queryVariables: {
            itemsPerPage: 16,
            page: 1,
          },
        },
      ],
    },
    // Events Detail
    {
      path: '/events/:id',
      meta: {
        title: 'Events Details',
        description: 'Events Details',
        ogImage: '',
      },
      backlink: {
        link: '/events',
        label: 'Zurück zur Events',
      },
      isSubNav: true,
      isPrivate: false,
      components: [
        {
          componentId: 'RootComponent_1',
          columns: 2,
          config: {
            fullWidth: false,
            columnsRatio: '3:1',
          },
          leftColumnChildren: [
            {
              componentId: 'TextTeaser_1',
              component: 'TextTeaser',
              config: {
                queryKey: 'GetEventByIdQueryKey',
                dataNormalizeForService: 'eventDetails',
              },
            },
          ],
          rightColumnChildren: [
            {
              componentId: 'EventMetaInformation_2',
              component: 'EventMetaInformation',
              config: {
                queryKey: 'GetEventByIdQueryKey',
                // dataNormalizeForService: 'eventDetails',
              },
              props: {
                headline: 'Wichtige Informationen',
                boxProps: { margin: '16px 0' },
              },
            },
          ],
        },
        {
          componentId: 'RootComponent_2',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'ImageSlider',
              config: {
                fullWidth: true,
              },
              props: {
                imageSliderHeight: '400px',
                autoplay: false,
                wrapperStyles: {
                  margin: '32px 0 0',
                },
                sliderOptions: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                imageSliderSlides: [
                  {
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                  },
                  {
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                  },
                  {
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                  },
                ],
              },
            },
            {
              componentId: 'Headline_1',
              component: 'Headline',
              props: {
                headlineLevel: 'h3',
                margin: '32px 0',
                children: 'Jetzt Vorteil sichern',
              },
            },
            {
              componentId: 'EventBooking_1',
              component: 'EventBooking',
              config: {
                queryKey: 'GetEventByIdQueryKey_EventDetail',
                // dataNormalizeForService: 'contactInfo',
              },
              props: {
                notificationText:
                  'Diese Veranstaltung ist nur über die Service Hotline buchbar.',
                voucherTitle: 'Jetzt Gutschein anfordern und Vorteil genießen!',
                voucherButtonLabel: 'Gutschein anfordern',
                voucherNotification:
                  'Sie haben diesen Gutschein bereits angefordert.',
                voucherSuccess:
                  'Sie haben diesen Gutschein erfolgreich angefordert. Bitte sehen Sie in Ihrem E-Mail-Postfach nach.',
              },
            },
          ],
        },
      ],
      queries: [
        {
          query: 'EventsEventsGetEventByIdQuery',
          key: 'GetEventByIdQueryKey_EventDetail',
        },
      ],
    },
    // Events Cart
    {
      path: '/shopping-cart',
      meta: {
        title: 'Warenkorb',
        description: 'Warenkorb',
        ogImage: '',
      },
      isSubNav: true,
      isPrivate: true,
      components: [
        {
          componentId: 'RootComponent_1',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'EventBasketListComponent',
              props: {
                title: 'Mein Warenkorb im Überblick',
              },
              config: {
                // dataNormalizeForService: 'eventBasketList',
                queryKey: 'GetEventsBasketListQueryKey',
              },
            },
          ],
        },
      ],
      // TODO: Add proper queries
      queries: [
        {
          query: 'GetEventsBasketListQuery',
          key: 'GetEventsBasketListQueryKey',
        },
      ],
    },
    // Events Checkout
    {
      path: '/checkout',
      meta: {
        title: 'Checkout',
        description: 'Checkout',
        ogImage: '',
      },
      isSubNav: true,
      isPrivate: true,
      components: [
        {
          componentId: 'RootComponent_1',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'CheckoutForm',
              props: {
                submitProps: { label: 'Kostenpflichtig bestellen' },
              },
            },
          ],
        },
      ],
    },
    // Registration
    {
      path: '/registration',
      meta: {
        title: 'Registrierung',
        description: 'Registrierung',
        ogImage: '',
      },
      isSubNav: true,
      isPrivate: false,
      components: [
        {
          componentId: 'RootComponent_1',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'RegistrationForm',
              props: {
                stepsProps: [
                  {
                    headlineProps: {
                      children: 'Legitimieren Sie sich',
                    },
                    submitLabel: 'Weiter zum nächstem Schritt',
                  },
                  {
                    headlineProps: {
                      children: 'Hallo, {{firstName}}',
                    },
                    submitLabel: 'Weiter zum nächstem Schritt',
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    // Configurator Tabs (Basis)
    {
      navigationLabel: 'Konfigurator',
      path: '/configurator/basis',
      meta: {
        title: 'Konfigurator',
        description: 'Konfigurieren Sie Ihre Leistungen',
        ogImage: '',
      },
      isSubNav: false,
      isPrivate: false,
      components: [
        {
          componentId: 'RootComponent_1',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'ImageSlider',
              config: {
                fullWidth: true,
              },
              props: {
                imageSliderHeight: '400px',
                autoplay: { delay: 4000 },
                imageSliderSlides: [
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        'Konfigurieren Sie Ihre Leistungen',
                      imageSliderContentIntro: 'Konfigurator',
                      imageSliderContentText:
                        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'right',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                ],
              },
            },
            {
              component: 'Tabs',
              props: {
                activeTab: '1',
                tabItems: [
                  {
                    label: 'Basis',
                    value: '1',
                    linkType: 'href',
                    href: '/configurator/basis',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Pakete',
                    value: '2',
                    linkType: 'href',
                    href: '/configurator/package',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Zuhause',
                    value: '3',
                    linkType: 'href',
                    href: '/configurator/home',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Elektronik',
                    value: '4',
                    linkType: 'href',
                    href: '/configurator/electronic',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Finanzen',
                    value: '5',
                    linkType: 'href',
                    href: '/configurator/finance',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Ihre Konfiguration',
                    value: '6',
                    linkType: 'href',
                    href: '/configurator/config',
                    targetBlank: '_self',
                  },
                ],
              },
            },
            {
              component: 'Headline',
              props: {
                headlineLevel: 'h3',
                headlineFontWeight: 'bold',
                headlineTextAlign: 'left',
                headlineUppercase: false,
                isLoading: false,
                children: 'Ihre Basisleistungen',
                margin: '32px 0',
              },
            },
            {
              component: 'Paragraph',
              props: {
                textColor: 'black',
                fontWeight: 'normal',
                textAlign: 'left',
                styleProps: 'width: 60%; margin: 0 0 64px;',
                children:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea eirmod tempor invidunt ut At vero eos et accusam et justo duo dolores et ea rebum.',
              },
            },
          ],
        },
        {
          componentId: 'RootComponent_2',
          columns: 2,
          config: {
            fullWidth: false,
          },
          leftColumnChildren: [
            {
              component: 'ConfiguratorProductList',
              props: {
                headline: '',
                items: [
                  {
                    productName: 'Garantieverlängerung',
                    productShortDescription:
                      'Garantieverlängerung für Elektrogeräte bis zu 10.000 € pro Jahr.',
                    productDescription:
                      'Der DSG Portmonee-Schutz ist Ihr weltweit rettender Helfer bei Verlust Ihrer Brieftasche.',
                    price: '4,95 €',
                    paymentPeriod: 'Monat',
                    imageUrl:
                      'https://via.placeholder.com/500x300.png?text=Placeholder',
                    options: {
                      headlineTextColor: 'primary',
                      descriptionTextColor: 'black',
                      priceInfoTextColor: 'black',
                      priceTextColor: 'primary',
                    },
                  },
                  {
                    productName: 'Portmonee-Schutz',
                    productShortDescription:
                      'Garantieverlängerung für Elektrogeräte bis zu 10.000 € pro Jahr.',
                    productDescription:
                      'Der DSG Portmonee-Schutz ist Ihr weltweit rettender Helfer bei Verlust Ihrer Brieftasche.',
                    price: '4,95 €',
                    paymentPeriod: 'Monat',
                    imageUrl:
                      'https://via.placeholder.com/500x300.png?text=Placeholder',
                    options: {
                      headlineTextColor: 'primary',
                      descriptionTextColor: 'black',
                      priceInfoTextColor: 'black',
                      priceTextColor: 'primary',
                    },
                  },
                ],
              },
            },
          ],
          rightColumnChildren: [
            {
              component: 'ConfiguratorMembershipSummary',
              props: {
                priceColumnTitle: 'Kosten',
                productColumnTitle: 'Produkt',
                options: {
                  headlineTextColor: 'black',
                  columnTitleTextColor: 'primary',
                  textColor: 'black',
                },
                items: [
                  {
                    name: 'Reise Center mit 5% RRV',
                    status: 'booked',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Ticketservice',
                    status: 'bookable',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Haushaltsschutz',
                    status: 'booked',
                    price: '12,95 €',
                    paymentPeriod: 'Monat',
                  },
                ],
              },
            },
            {
              component: 'ConfiguratorMembershipSummary',
              props: {
                headline: 'Ihre Konfiguration',
                priceColumnTitle: 'Kosten',
                productColumnTitle: 'Produkt',
                options: {
                  headlineTextColor: 'black',
                  columnTitleTextColor: 'primary',
                  textColor: 'black',
                },
                items: [
                  {
                    name: 'Reise Center mit 5% RRV',
                    status: 'booked',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Ticketservice',
                    status: 'bookable',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Haushaltsschutz',
                    status: 'booked',
                    price: '12,95 €',
                    paymentPeriod: 'Monat',
                  },
                ],
              },
            },
          ],
        },
        {
          componentId: 'RootComponent_3',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'SimpleContainer',
              props: {
                styles: 'margin: 32px auto;',
                children: [
                  {
                    component: 'Button',
                    props: {
                      buttonHref: '/configurator/package',
                      buttonLabel: 'weiter zu den Paketen',
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    // Configurator Tabs (Pakete)
    {
      path: '/configurator/package',
      meta: {
        title: 'Konfigurator Pakete',
        description: 'Konfigurieren Sie Ihre Leistungen',
        ogImage: '',
      },
      isSubNav: true,
      isPrivate: false,
      components: [
        {
          componentId: 'RootComponent_1',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'ImageSlider',
              config: {
                fullWidth: true,
              },
              props: {
                imageSliderHeight: '400px',
                autoplay: { delay: 4000 },
                imageSliderSlides: [
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        'Konfigurieren Sie Ihre Leistungen',
                      imageSliderContentIntro: 'Konfigurator',
                      imageSliderContentText:
                        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'right',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                ],
              },
            },
            {
              component: 'Tabs',
              props: {
                activeTab: '2',
                tabItems: [
                  {
                    label: 'Basis',
                    value: '1',
                    linkType: 'href',
                    href: '/configurator/basis',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Pakete',
                    value: '2',
                    linkType: 'href',
                    href: '/configurator/package',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Zuhause',
                    value: '3',
                    linkType: 'href',
                    href: '/configurator/home',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Elektronik',
                    value: '4',
                    linkType: 'href',
                    href: '/configurator/electronic',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Finanzen',
                    value: '5',
                    linkType: 'href',
                    href: '/configurator/finance',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Ihre Konfiguration',
                    value: '6',
                    linkType: 'href',
                    href: '/configurator/config',
                    targetBlank: '_self',
                  },
                ],
              },
            },
            {
              component: 'Headline',
              props: {
                headlineLevel: 'h3',
                headlineFontWeight: 'bold',
                headlineTextAlign: 'left',
                headlineUppercase: false,
                isLoading: false,
                children: 'Leistungen im Paket buchen',
                margin: '32px 0',
              },
            },
            {
              component: 'Paragraph',
              props: {
                textColor: 'black',
                fontWeight: 'normal',
                textAlign: 'left',
                styleProps: 'width: 60%; margin: 0 0 64px;',
                children:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea eirmod tempor invidunt ut At vero eos et accusam et justo duo dolores et ea rebum.',
              },
            },
          ],
        },
        {
          componentId: 'RootComponent_2',
          columns: 2,
          config: {
            fullWidth: false,
          },
          leftColumnChildren: [
            {
              component: 'ConfiguratorPackageList',
              props: {
                headline: '',
                items: [
                  {
                    packageName: 'Portmonee-Schutz',
                    packageDescription:
                      'Der DSG Portmonee-Schutz ist Ihr weltweit rettender Helfer bei Verlust Ihrer Brieftasche.',
                    price: '4,95 €',
                    paymentPeriod: 'Monat',
                    // status: 'booked',
                    status: 'bookable',
                    imageUrl:
                      'https://via.placeholder.com/500x500.png?text=Placeholder',
                    showMoreLink: 'Mehr Informationen',
                    options: {
                      headlineTextColor: 'primary',
                      descriptionTextColor: 'black',
                      linkTextColor: 'primary',
                      priceInfoTextColor: 'black',
                      priceTextColor: 'primary',
                      cartLinkTextColor: 'secondary',
                    },
                  },
                  {
                    packageName: 'Türöffnungsservice',
                    packageDescription:
                      'Türöffnungsservice Beschreibungstext. Türöffnungsservice Beschreibungstext. Türöffnungsservice Beschreibungstext.',
                    price: '17,95 €',
                    paymentPeriod: 'Jahr',
                    // status: 'booked',
                    status: 'bookable',
                    imageUrl:
                      'https://via.placeholder.com/500x500.png?text=Placeholder',
                    showMoreLink: 'Mehr Informationen',
                    options: {
                      headlineTextColor: 'primary',
                      descriptionTextColor: 'black',
                      linkTextColor: 'primary',
                      priceInfoTextColor: 'black',
                      priceTextColor: 'primary',
                      cartLinkTextColor: 'secondary',
                    },
                  },
                  {
                    packageName: 'Noch ein Paket',
                    packageDescription: 'Weitere Paketbeschreibung.',
                    price: '12,00 €',
                    paymentPeriod: 'Monat',
                    // status: 'booked',
                    status: 'bookable',
                    imageUrl:
                      'https://via.placeholder.com/500x500.png?text=Placeholder',
                    showMoreLink: 'Mehr Informationen',
                    options: {
                      headlineTextColor: 'primary',
                      descriptionTextColor: 'black',
                      linkTextColor: 'primary',
                      priceInfoTextColor: 'black',
                      priceTextColor: 'primary',
                      cartLinkTextColor: 'secondary',
                    },
                  },
                ],
              },
            },
          ],
          rightColumnChildren: [
            {
              component: 'ConfiguratorMembershipSummary',
              props: {
                priceColumnTitle: 'Kosten',
                productColumnTitle: 'Produkt',
                options: {
                  headlineTextColor: 'black',
                  columnTitleTextColor: 'primary',
                  textColor: 'black',
                },
                items: [
                  {
                    name: 'Reise Center mit 5% RRV',
                    status: 'booked',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Ticketservice',
                    status: 'bookable',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Haushaltsschutz',
                    status: 'booked',
                    price: '12,95 €',
                    paymentPeriod: 'Monat',
                  },
                ],
              },
            },
            {
              component: 'ConfiguratorMembershipSummary',
              props: {
                headline: 'Ihre Konfiguration',
                priceColumnTitle: 'Kosten',
                productColumnTitle: 'Produkt',
                options: {
                  headlineTextColor: 'black',
                  columnTitleTextColor: 'primary',
                  textColor: 'black',
                },
                items: [
                  {
                    name: 'Reise Center mit 5% RRV',
                    status: 'booked',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Ticketservice',
                    status: 'bookable',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Haushaltsschutz',
                    status: 'booked',
                    price: '12,95 €',
                    paymentPeriod: 'Monat',
                  },
                ],
              },
            },
          ],
        },
        {
          componentId: 'RootComponent_3',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'SimpleContainer',
              props: {
                styles: 'margin: 32px auto;',
                children: [
                  {
                    component: 'Button',
                    props: {
                      buttonHref: '/configurator/home',
                      buttonLabel: 'weiter: Zuhause-Leistungen',
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    // Configurator Tabs (Home)
    {
      path: '/configurator/home',
      meta: {
        title: 'Alle Leistungen für Ihr Zuhause',
        description: 'Alle Leistungen für Ihr Zuhause',
        ogImage: '',
      },
      isSubNav: true,
      isPrivate: false,
      components: [
        {
          componentId: 'RootComponent_1',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'ImageSlider',
              config: {
                fullWidth: true,
              },
              props: {
                imageSliderHeight: '400px',
                autoplay: { delay: 4000 },
                imageSliderSlides: [
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        'Konfigurieren Sie Ihre Leistungen',
                      imageSliderContentIntro: 'Konfigurator',
                      imageSliderContentText:
                        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'right',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                ],
              },
            },
            {
              component: 'Tabs',
              props: {
                activeTab: '3',
                tabItems: [
                  {
                    label: 'Basis',
                    value: '1',
                    linkType: 'href',
                    href: '/configurator/basis',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Pakete',
                    value: '2',
                    linkType: 'href',
                    href: '/configurator/package',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Zuhause',
                    value: '3',
                    linkType: 'href',
                    href: '/configurator/home',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Elektronik',
                    value: '4',
                    linkType: 'href',
                    href: '/configurator/electronic',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Finanzen',
                    value: '5',
                    linkType: 'href',
                    href: '/configurator/finance',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Ihre Konfiguration',
                    value: '6',
                    linkType: 'href',
                    href: '/configurator/config',
                    targetBlank: '_self',
                  },
                ],
              },
            },
            {
              component: 'Headline',
              props: {
                headlineLevel: 'h3',
                headlineFontWeight: 'bold',
                headlineTextAlign: 'left',
                headlineUppercase: false,
                isLoading: false,
                children: 'Alle Leistungen für Ihr Zuhause',
                margin: '32px 0',
              },
            },
            {
              component: 'Paragraph',
              props: {
                textColor: 'black',
                fontWeight: 'normal',
                textAlign: 'left',
                styleProps: 'width: 60%; margin: 0 0 64px;',
                children:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea eirmod tempor invidunt ut At vero eos et accusam et justo duo dolores et ea rebum.',
              },
            },
          ],
        },
        {
          componentId: 'RootComponent_2',
          columns: 2,
          config: {
            fullWidth: false,
          },
          leftColumnChildren: [
            {
              component: 'ConfiguratorPackageList',
              props: {
                headline: '',
                items: [
                  {
                    packageName: 'Portmonee-Schutz',
                    packageDescription:
                      'Der DSG Portmonee-Schutz ist Ihr weltweit rettender Helfer bei Verlust Ihrer Brieftasche.',
                    price: '4,95 €',
                    paymentPeriod: 'Monat',
                    // status: 'booked',
                    status: 'bookable',
                    imageUrl:
                      'https://via.placeholder.com/500x500.png?text=Placeholder',
                    showMoreLink: 'Mehr Informationen',
                    options: {
                      headlineTextColor: 'primary',
                      descriptionTextColor: 'black',
                      linkTextColor: 'primary',
                      priceInfoTextColor: 'black',
                      priceTextColor: 'primary',
                      cartLinkTextColor: 'secondary',
                    },
                  },
                  {
                    packageName: 'Türöffnungsservice',
                    packageDescription:
                      'Türöffnungsservice Beschreibungstext. Türöffnungsservice Beschreibungstext. Türöffnungsservice Beschreibungstext.',
                    price: '17,95 €',
                    paymentPeriod: 'Jahr',
                    // status: 'booked',
                    status: 'bookable',
                    imageUrl:
                      'https://via.placeholder.com/500x500.png?text=Placeholder',
                    showMoreLink: 'Mehr Informationen',
                    options: {
                      headlineTextColor: 'primary',
                      descriptionTextColor: 'black',
                      linkTextColor: 'primary',
                      priceInfoTextColor: 'black',
                      priceTextColor: 'primary',
                      cartLinkTextColor: 'secondary',
                    },
                  },
                  {
                    packageName: 'Noch ein Paket',
                    packageDescription: 'Weitere Paketbeschreibung.',
                    price: '12,00 €',
                    paymentPeriod: 'Monat',
                    // status: 'booked',
                    status: 'bookable',
                    imageUrl:
                      'https://via.placeholder.com/500x500.png?text=Placeholder',
                    showMoreLink: 'Mehr Informationen',
                    options: {
                      headlineTextColor: 'primary',
                      descriptionTextColor: 'black',
                      linkTextColor: 'primary',
                      priceInfoTextColor: 'black',
                      priceTextColor: 'primary',
                      cartLinkTextColor: 'secondary',
                    },
                  },
                ],
              },
            },
          ],
          rightColumnChildren: [
            {
              component: 'ConfiguratorMembershipSummary',
              props: {
                priceColumnTitle: 'Kosten',
                productColumnTitle: 'Produkt',
                options: {
                  headlineTextColor: 'black',
                  columnTitleTextColor: 'primary',
                  textColor: 'black',
                },
                items: [
                  {
                    name: 'Reise Center mit 5% RRV',
                    status: 'booked',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Ticketservice',
                    status: 'bookable',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Haushaltsschutz',
                    status: 'booked',
                    price: '12,95 €',
                    paymentPeriod: 'Monat',
                  },
                ],
              },
            },
            {
              component: 'ConfiguratorMembershipSummary',
              props: {
                headline: 'Ihre Konfiguration',
                priceColumnTitle: 'Kosten',
                productColumnTitle: 'Produkt',
                options: {
                  headlineTextColor: 'black',
                  columnTitleTextColor: 'primary',
                  textColor: 'black',
                },
                items: [
                  {
                    name: 'Reise Center mit 5% RRV',
                    status: 'booked',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Ticketservice',
                    status: 'bookable',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Haushaltsschutz',
                    status: 'booked',
                    price: '12,95 €',
                    paymentPeriod: 'Monat',
                  },
                ],
              },
            },
          ],
        },
        {
          componentId: 'RootComponent_3',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'SimpleContainer',
              props: {
                styles: 'margin: 32px auto;',
                children: [
                  {
                    component: 'Button',
                    props: {
                      buttonHref: '/configurator/electronic',
                      buttonLabel: 'weiter: Elektro-Leistungen',
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    // Configurator Tabs (Elektronik)
    {
      path: '/configurator/electronic',
      meta: {
        title: 'Elektronik',
        description: 'Alle Leistungen für Ihr Zuhause',
        ogImage: '',
      },
      isSubNav: true,
      isPrivate: false,
      components: [
        {
          componentId: 'RootComponent_1',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'ImageSlider',
              config: {
                fullWidth: true,
              },
              props: {
                imageSliderHeight: '400px',
                autoplay: { delay: 4000 },
                imageSliderSlides: [
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        'Konfigurieren Sie Ihre Leistungen',
                      imageSliderContentIntro: 'Konfigurator',
                      imageSliderContentText:
                        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'right',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                ],
              },
            },
            {
              component: 'Tabs',
              props: {
                activeTab: '4',
                tabItems: [
                  {
                    label: 'Basis',
                    value: '1',
                    linkType: 'href',
                    href: '/configurator/basis',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Pakete',
                    value: '2',
                    linkType: 'href',
                    href: '/configurator/package',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Zuhause',
                    value: '3',
                    linkType: 'href',
                    href: '/configurator/home',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Elektronik',
                    value: '4',
                    linkType: 'href',
                    href: '/configurator/electronic',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Finanzen',
                    value: '5',
                    linkType: 'href',
                    href: '/configurator/finance',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Ihre Konfiguration',
                    value: '6',
                    linkType: 'href',
                    href: '/configurator/config',
                    targetBlank: '_self',
                  },
                ],
              },
            },
            {
              component: 'Headline',
              props: {
                headlineLevel: 'h3',
                headlineFontWeight: 'bold',
                headlineTextAlign: 'left',
                headlineUppercase: false,
                isLoading: false,
                children: 'Alle Leistungen für Ihr Zuhause',
                margin: '32px 0',
              },
            },
            {
              component: 'Paragraph',
              props: {
                textColor: 'black',
                fontWeight: 'normal',
                textAlign: 'left',
                styleProps: 'width: 60%; margin: 0 0 64px;',
                children:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea eirmod tempor invidunt ut At vero eos et accusam et justo duo dolores et ea rebum.',
              },
            },
          ],
        },
        {
          componentId: 'RootComponent_2',
          columns: 2,
          config: {
            fullWidth: false,
          },
          leftColumnChildren: [
            {
              component: 'ConfiguratorPackageList',
              props: {
                headline: '',
                items: [
                  {
                    packageName: 'Portmonee-Schutz',
                    packageDescription:
                      'Der DSG Portmonee-Schutz ist Ihr weltweit rettender Helfer bei Verlust Ihrer Brieftasche.',
                    price: '4,95 €',
                    paymentPeriod: 'Monat',
                    // status: 'booked',
                    status: 'bookable',
                    imageUrl:
                      'https://via.placeholder.com/500x500.png?text=Placeholder',
                    showMoreLink: 'Mehr Informationen',
                    options: {
                      headlineTextColor: 'primary',
                      descriptionTextColor: 'black',
                      linkTextColor: 'primary',
                      priceInfoTextColor: 'black',
                      priceTextColor: 'primary',
                      cartLinkTextColor: 'secondary',
                    },
                  },
                  {
                    packageName: 'Türöffnungsservice',
                    packageDescription:
                      'Türöffnungsservice Beschreibungstext. Türöffnungsservice Beschreibungstext. Türöffnungsservice Beschreibungstext.',
                    price: '17,95 €',
                    paymentPeriod: 'Jahr',
                    // status: 'booked',
                    status: 'bookable',
                    imageUrl:
                      'https://via.placeholder.com/500x500.png?text=Placeholder',
                    showMoreLink: 'Mehr Informationen',
                    options: {
                      headlineTextColor: 'primary',
                      descriptionTextColor: 'black',
                      linkTextColor: 'primary',
                      priceInfoTextColor: 'black',
                      priceTextColor: 'primary',
                      cartLinkTextColor: 'secondary',
                    },
                  },
                  {
                    packageName: 'Noch ein Paket',
                    packageDescription: 'Weitere Paketbeschreibung.',
                    price: '12,00 €',
                    paymentPeriod: 'Monat',
                    // status: 'booked',
                    status: 'bookable',
                    imageUrl:
                      'https://via.placeholder.com/500x500.png?text=Placeholder',
                    showMoreLink: 'Mehr Informationen',
                    options: {
                      headlineTextColor: 'primary',
                      descriptionTextColor: 'black',
                      linkTextColor: 'primary',
                      priceInfoTextColor: 'black',
                      priceTextColor: 'primary',
                      cartLinkTextColor: 'secondary',
                    },
                  },
                ],
              },
            },
          ],
          rightColumnChildren: [
            {
              component: 'ConfiguratorMembershipSummary',
              props: {
                priceColumnTitle: 'Kosten',
                productColumnTitle: 'Produkt',
                options: {
                  headlineTextColor: 'black',
                  columnTitleTextColor: 'primary',
                  textColor: 'black',
                },
                items: [
                  {
                    name: 'Reise Center mit 5% RRV',
                    status: 'booked',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Ticketservice',
                    status: 'bookable',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Haushaltsschutz',
                    status: 'booked',
                    price: '12,95 €',
                    paymentPeriod: 'Monat',
                  },
                ],
              },
            },
            {
              component: 'ConfiguratorMembershipSummary',
              props: {
                headline: 'Ihre Konfiguration',
                priceColumnTitle: 'Kosten',
                productColumnTitle: 'Produkt',
                options: {
                  headlineTextColor: 'black',
                  columnTitleTextColor: 'primary',
                  textColor: 'black',
                },
                items: [
                  {
                    name: 'Reise Center mit 5% RRV',
                    status: 'booked',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Ticketservice',
                    status: 'bookable',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Haushaltsschutz',
                    status: 'booked',
                    price: '12,95 €',
                    paymentPeriod: 'Monat',
                  },
                ],
              },
            },
          ],
        },
        {
          componentId: 'RootComponent_3',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'SimpleContainer',
              props: {
                styles: 'margin: 32px auto;',
                children: [
                  {
                    component: 'Button',
                    props: {
                      buttonHref: '/configurator/finance',
                      buttonLabel: 'weiter: Finanzen',
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    // Configurator Tabs (Finanzen)
    {
      path: '/configurator/finance',
      meta: {
        title: 'Finanzen',
        description: 'Alle Leistungen für Ihr Zuhause',
        ogImage: '',
      },
      isSubNav: true,
      isPrivate: false,
      components: [
        {
          componentId: 'RootComponent_1',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'ImageSlider',
              config: {
                fullWidth: true,
              },
              props: {
                imageSliderHeight: '400px',
                autoplay: { delay: 4000 },
                imageSliderSlides: [
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        'Konfigurieren Sie Ihre Leistungen',
                      imageSliderContentIntro: 'Konfigurator',
                      imageSliderContentText:
                        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'right',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                ],
              },
            },
            {
              component: 'Tabs',
              props: {
                activeTab: '5',
                tabItems: [
                  {
                    label: 'Basis',
                    value: '1',
                    linkType: 'href',
                    href: '/configurator/basis',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Pakete',
                    value: '2',
                    linkType: 'href',
                    href: '/configurator/package',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Zuhause',
                    value: '3',
                    linkType: 'href',
                    href: '/configurator/home',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Elektronik',
                    value: '4',
                    linkType: 'href',
                    href: '/configurator/electronic',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Finanzen',
                    value: '5',
                    linkType: 'href',
                    href: '/configurator/finance',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Ihre Konfiguration',
                    value: '6',
                    linkType: 'href',
                    href: '/configurator/config',
                    targetBlank: '_self',
                  },
                ],
              },
            },
            {
              component: 'Headline',
              props: {
                headlineLevel: 'h3',
                headlineFontWeight: 'bold',
                headlineTextAlign: 'left',
                headlineUppercase: false,
                isLoading: false,
                children: 'Alle Leistungen für Ihr Zuhause',
                margin: '32px 0',
              },
            },
            {
              component: 'Paragraph',
              props: {
                textColor: 'black',
                fontWeight: 'normal',
                textAlign: 'left',
                styleProps: 'width: 60%; margin: 0 0 64px;',
                children:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea eirmod tempor invidunt ut At vero eos et accusam et justo duo dolores et ea rebum.',
              },
            },
          ],
        },
        {
          componentId: 'RootComponent_2',
          columns: 2,
          config: {
            fullWidth: false,
          },
          leftColumnChildren: [
            {
              component: 'ConfiguratorPackageList',
              props: {
                headline: '',
                items: [
                  {
                    packageName: 'Portmonee-Schutz',
                    packageDescription:
                      'Der DSG Portmonee-Schutz ist Ihr weltweit rettender Helfer bei Verlust Ihrer Brieftasche.',
                    price: '4,95 €',
                    paymentPeriod: 'Monat',
                    // status: 'booked',
                    status: 'bookable',
                    imageUrl:
                      'https://via.placeholder.com/500x500.png?text=Placeholder',
                    showMoreLink: 'Mehr Informationen',
                    options: {
                      headlineTextColor: 'primary',
                      descriptionTextColor: 'black',
                      linkTextColor: 'primary',
                      priceInfoTextColor: 'black',
                      priceTextColor: 'primary',
                      cartLinkTextColor: 'secondary',
                    },
                  },
                  {
                    packageName: 'Türöffnungsservice',
                    packageDescription:
                      'Türöffnungsservice Beschreibungstext. Türöffnungsservice Beschreibungstext. Türöffnungsservice Beschreibungstext.',
                    price: '17,95 €',
                    paymentPeriod: 'Jahr',
                    // status: 'booked',
                    status: 'bookable',
                    imageUrl:
                      'https://via.placeholder.com/500x500.png?text=Placeholder',
                    showMoreLink: 'Mehr Informationen',
                    options: {
                      headlineTextColor: 'primary',
                      descriptionTextColor: 'black',
                      linkTextColor: 'primary',
                      priceInfoTextColor: 'black',
                      priceTextColor: 'primary',
                      cartLinkTextColor: 'secondary',
                    },
                  },
                  {
                    packageName: 'Noch ein Paket',
                    packageDescription: 'Weitere Paketbeschreibung.',
                    price: '12,00 €',
                    paymentPeriod: 'Monat',
                    // status: 'booked',
                    status: 'bookable',
                    imageUrl:
                      'https://via.placeholder.com/500x500.png?text=Placeholder',
                    showMoreLink: 'Mehr Informationen',
                    options: {
                      headlineTextColor: 'primary',
                      descriptionTextColor: 'black',
                      linkTextColor: 'primary',
                      priceInfoTextColor: 'black',
                      priceTextColor: 'primary',
                      cartLinkTextColor: 'secondary',
                    },
                  },
                ],
              },
            },
          ],
          rightColumnChildren: [
            {
              component: 'ConfiguratorMembershipSummary',
              props: {
                priceColumnTitle: 'Kosten',
                productColumnTitle: 'Produkt',
                options: {
                  headlineTextColor: 'black',
                  columnTitleTextColor: 'primary',
                  textColor: 'black',
                },
                items: [
                  {
                    name: 'Reise Center mit 5% RRV',
                    status: 'booked',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Ticketservice',
                    status: 'bookable',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Haushaltsschutz',
                    status: 'booked',
                    price: '12,95 €',
                    paymentPeriod: 'Monat',
                  },
                ],
              },
            },
            {
              component: 'ConfiguratorMembershipSummary',
              props: {
                headline: 'Ihre Konfiguration',
                priceColumnTitle: 'Kosten',
                productColumnTitle: 'Produkt',
                options: {
                  headlineTextColor: 'black',
                  columnTitleTextColor: 'primary',
                  textColor: 'black',
                },
                items: [
                  {
                    name: 'Reise Center mit 5% RRV',
                    status: 'booked',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Ticketservice',
                    status: 'bookable',
                    price: 'kostenlos',
                  },
                  {
                    name: 'Haushaltsschutz',
                    status: 'booked',
                    price: '12,95 €',
                    paymentPeriod: 'Monat',
                  },
                ],
              },
            },
          ],
        },
        {
          componentId: 'RootComponent_3',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'SimpleContainer',
              props: {
                styles: 'margin: 32px auto;',
                children: [
                  {
                    component: 'Button',
                    props: {
                      buttonHref: '/configurator/config',
                      buttonLabel: 'weiter: Konfiguration',
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    // Configurator Tabs (Konfiguration)
    {
      path: '/configurator/config',
      meta: {
        title: 'Ihre Konfiguration',
        description: 'Ihre Konfiguration',
        ogImage: '',
      },
      isSubNav: true,
      isPrivate: false,
      components: [
        {
          componentId: 'RootComponent_1',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'ImageSlider',
              config: {
                fullWidth: true,
              },
              props: {
                imageSliderHeight: '400px',
                autoplay: { delay: 4000 },
                imageSliderSlides: [
                  {
                    imageSliderContent: {
                      imageSliderContentHeadline:
                        'Konfigurieren Sie Ihre Leistungen',
                      imageSliderContentIntro: 'Konfigurator',
                      imageSliderContentText:
                        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
                    },
                    imageSliderImageUrl:
                      'https://portal-base.s3.eu-central-1.amazonaws.com/cms/content/boil/716/Online.jpg',
                    imageSliderContentPosition: 'right',
                    imageSliderContentBackgroundColor: '#f5f5f5',
                  },
                ],
              },
            },
            {
              component: 'Tabs',
              props: {
                activeTab: '6',
                tabItems: [
                  {
                    label: 'Basis',
                    value: '1',
                    linkType: 'href',
                    href: '/configurator/basis',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Pakete',
                    value: '2',
                    linkType: 'href',
                    href: '/configurator/package',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Zuhause',
                    value: '3',
                    linkType: 'href',
                    href: '/configurator/home',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Elektronik',
                    value: '4',
                    linkType: 'href',
                    href: '/configurator/electronic',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Finanzen',
                    value: '5',
                    linkType: 'href',
                    href: '/configurator/finance',
                    targetBlank: '_self',
                  },
                  {
                    label: 'Ihre Konfiguration',
                    value: '6',
                    linkType: 'href',
                    href: '/configurator/config',
                    targetBlank: '_self',
                  },
                ],
              },
            },
            {
              component: 'Headline',
              props: {
                headlineLevel: 'h3',
                headlineFontWeight: 'bold',
                headlineTextAlign: 'left',
                headlineUppercase: false,
                isLoading: false,
                children: 'Alle Leistungen für Ihr Zuhause',
                margin: '32px 0',
              },
            },
            {
              component: 'Paragraph',
              props: {
                textColor: 'black',
                fontWeight: 'normal',
                textAlign: 'left',
                styleProps: 'width: 60%; margin: 0 0 64px;',
                children:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea eirmod tempor invidunt ut At vero eos et accusam et justo duo dolores et ea rebum.',
              },
            },
            // {
            //   component: 'ConfiguratorBasketList',
            //   props: {
            //     headline: 'Warenkorb',
            //     items: [
            //       {
            //         id: '6107a8292c2e5f448f224732',
            //         productTitle: 'Identitäts-Schutz',
            //         price: '7,00 €',
            //       },
            //       {
            //         id: '6107a8292c2e5f448f224732',
            //         productTitle: 'Garantie+',
            //         price: '17,00 €',
            //       },
            //       {
            //         id: '6107a8292c2e5f448f224732',
            //         productTitle: 'Portmonee-Schutz',
            //         price: '2,95 €',
            //       },
            //     ],
            //   },
            // },
            {
              component: 'ConfiguratorSubmitForm',
              props: {
                configuratorBasketListProps: {
                  headline: 'Warenkorb',
                  items: [
                    {
                      id: '6107a8292c2e5f448f224732',
                      productTitle: 'Identitäts-Schutz',
                      price: '7,00 €',
                    },
                    {
                      id: '6107a8292c2e5f448f224732',
                      productTitle: 'Garantie+',
                      price: '17,00 €',
                    },
                    {
                      id: '6107a8292c2e5f448f224732',
                      productTitle: 'Portmonee-Schutz',
                      price: '2,95 €',
                    },
                  ],
                },
                configuratorBillingPeriodSelectionProps: {
                  headline: 'Wählen Sie einen Abrechnungszeitraum',
                  items: [
                    {
                      title: 'Abrechnung pro Monat (Brutto)',
                      price: '7,00 €',
                      value: 'monthly',
                      selected: false,
                    },
                    {
                      title: 'Abrechnung pro Jahr (Brutto)',
                      price: '84,00 €',
                      value: 'yearly',
                      selected: false,
                    },
                  ],
                },
                configuratorContractDetailsProps: {
                  headline: 'Vertragsdetails',
                  items: [
                    {
                      title: 'Erstvertragslaufzeit',
                      value: '12 Monate',
                    },
                    {
                      title: 'Verlängerung der Vertragslaufzeit',
                      value: '12 Monate',
                    },
                    {
                      title: 'Kündigungsfrist',
                      value: '4 Wochen zum Ende der Vertragslaufzeit',
                    },
                  ],
                },
                configuratorPaymentOptionSelectionProps: {
                  headline: 'Zahlungsart',
                  items: [
                    {
                      imageUrl:
                        'https://einzelhandel.de/images/zahlungssysteme/lastschriftlogo-qf_rgb.png',
                      selected: false,
                      title: 'Lastschrift',
                      price: '',
                      value: 'debitCharge',
                    },
                    {
                      imageUrl:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeffgzNv2H3GTzm4jv0IuhQ6JLIybHl6Tdg&usqp=CAU',
                      selected: false,
                      title: 'Kreditkarte',
                      value: 'creditCard',
                    },
                    {
                      imageUrl:
                        'https://logosmarken.com/wp-content/uploads/2020/04/PayPal-Logo.png',
                      selected: false,
                      title: 'PayPal',
                      value: 'paypal',
                    },
                  ],
                },
                confirmationProps: {
                  headline: 'Bestellhinweis',
                  submitButtonLabel: 'Kostenpflichtig bestellen',
                },
              },
            },
            // {
            //   component: 'ConfiguratorContractDetailsComponent',
            //   props: {
            //     headline: 'Vertragsdetails',
            //     contractDetails: [
            //       {
            //         title: 'Erstvertragslaufzeit',
            //         value: '12 Monate',
            //       },
            //       {
            //         title: 'Verlängerung der Vertragslaufzeit',
            //         value: '12 Monate',
            //       },
            //       {
            //         title: 'Kündigungsfrist',
            //         value: '4 Wochen zum Ende der Vertragslaufzeit',
            //       },
            //     ],
            //   },
            // },
            // {
            //   component: 'ConfiguratorPaymentOptionSelection',
            //   props: {
            //     headline: 'Zahlungsart',
            //     paymentOptions: [
            //       {
            //         imageUrl:
            //           'https://einzelhandel.de/images/zahlungssysteme/lastschriftlogo-qf_rgb.png',
            //         selected: false,
            //         title: 'Lastschrift',
            //         value: 'debitCharge',
            //       },
            //       {
            //         imageUrl:
            //           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeffgzNv2H3GTzm4jv0IuhQ6JLIybHl6Tdg&usqp=CAU',
            //         selected: false,
            //         title: 'Kreditkarte',
            //         value: 'creditCard',
            //       },
            //       {
            //         imageUrl:
            //           'https://logosmarken.com/wp-content/uploads/2020/04/PayPal-Logo.png',
            //         selected: false,
            //         title: 'PayPal',
            //         value: 'paypal',
            //       },
            //     ],
            //   },
            // },
            // {
            //   component: 'ConfiguratorLegalConfirmations',
            //   props: {
            //     headline: 'Bestellhinweis',
            //     legalConfirmations: [
            //       {
            //         errorMessage: 'Pfilchtfeld',
            //         title:
            //           'Ich habe die <a href="/agb">Allgemeinen Geschäftsbedingungen</a> gelesen und akzeptiere diese',
            //         value: 'agb',
            //         selected: false,
            //         mandatory: true,
            //       },
            //       {
            //         errorMessage: 'Pfilchtfeld',
            //         title:
            //           'Ich habe die <a href="/widerruf">Widerrufsbelehrung</a> gelesen und akzeptiere diese',
            //         value: 'widerruf',
            //         selected: false,
            //         mandatory: true,
            //       },
            //       {
            //         title: 'Werbe Opt-In',
            //         value: 'commercials',
            //         selected: false,
            //       },
            //     ],
            //   },
            // },
          ],
        },
      ],
    },
    // Dashboard
    {
      navigationLabel: 'Mein Bereich',
      path: '/cashback/dashboard',
      meta: {
        title: 'Mein Bereich',
        description: 'Cashback Dashboard',
      },
      isSubNav: false,
      isPrivate: true,
      children: [
        {
          title: 'Dashboard',
          link: '/cashback/dashboard',
        },
        {
          title: 'Gesamtübersicht',
          link: '/cashback/transactions',
        },
        {
          title: 'Nachbuchungsanfrage',
          link: '/cashback/create-complaint',
        },
      ],
      components: [
        {
          componentId: 'RootComponent_12344',
          columns: 1,
          config: {
            fullWidth: false,
          },
          children: [
            {
              component: 'Headline',
              props: {
                headlineLevel: 'h1',
                headlineFontWeight: 'bold',
                headlineTextAlign: 'left',
                headlineUppercase: false,
                isLoading: false,
                children: 'Ihre Übersicht',
                margin: '54px 0 32px;',
              },
            },
            {
              componentId: 'OnlineCashbackDashboardTiles_16387967332234354',
              component: 'OnlineCashbackDashboardTiles',
              config: {
                queryKey: 'OnlineCashbackCashoutsGetProfileQuery_dashboard',
              },
              props: {
                dashboardTileTitleMapping: {
                  balance: 'Gesamtguthaben',
                  payouts: 'Auszahlungen',
                  byStatus: 'Cashback nach Status',
                },
                dashboardTileItemLabelMapping: {
                  bankBalance: 'Gesamt verfügbar',
                  paidOutCashBalance: 'Gesamt ausgezahlt',
                  paidOutCash: 'Ausgezahlt',
                  externalPaidOutCash: 'Ausgezahlt (extern)',
                  collectedCash: 'Gesammelt',
                  openCash: 'Offen',
                  cancelledCash: 'Storniert',
                },
              },
            },
            {
              componentId: 'ChildComponent_155454',
              component: 'OnlineCashbackShopList',
              props: {
                headlineProps: {
                  children: 'Die neuesten Cashback - Shops',
                  headlineLevel: 'h2',
                  headlineFontWeight: 'bold',
                  margin: '64px 0 32px',
                },
                containerItemsProps: {
                  itemsPerRowLg: 4,
                  itemsPerRowMd: 4,
                  itemsPerRowXl: 4,
                  itemsPerRowSm: 2,
                  itemsPerRowXs: 2,
                  alignItems: 'stretch',
                },
                list: {
                  showAllItems: false,
                  itemsPerPage: 4,
                },
              },
              config: {
                queryKey:
                  'OnlineCashbackShopsGetShopsListQuery_dashboardFavorites',
              },
            },
          ],
        },
      ],
      queries: [
        {
          query: 'OnlineCashbackCashoutsGetProfileQuery',
          key: 'OnlineCashbackCashoutsGetProfileQuery_dashboard',
        },
        {
          query: 'OnlineCashbackShopsGetShopsListQuery',
          key: 'OnlineCashbackShopsGetShopsListQuery_dashboardFavorites',
          queryVariables: {
            direction: 'asc',
            orderBy: '',
            itemsPerPage: 4,
            page: 1,
            favorites: true,
          },
        },
      ],
    },
  ],
  projectConfig: {
    meta: {
      titlePrefix: 'Test MoinGiro ',
      titleSuffix: ' | Mehrwerk GmbH',
    },
    generalConfig: {
      loginIconSpacing: '',
    },
    contact: {
      clientName: 'Mehrwerk GmbH',
      projectName: 'Mehrwerk ShapeShifter',
      portalName: 'Mehrwerk ShapeShifter Portal',
      appName: 'Mehrwerk ShapeShifter App',
      phoneNumbers: {
        serviceCenter: {
          countryCode: 'DE',
          areaCode: '0521',
          number: '7000-200',
        },
        client: {
          countryCode: 'DE',
          areaCode: '0521',
          number: '7000-200',
        },
      },
      openingHours: [
        {
          day: 'monday',
          hours: [
            {
              from: '09:30',
              to: '20:00',
            },
          ],
        },
        {
          day: 'tuesday',
          hours: [
            {
              from: '09:30',
              to: '20:00',
            },
          ],
        },
        {
          day: 'wednesday',
          hours: [
            {
              from: '09:30',
              to: '19:00',
            },
          ],
        },
        {
          day: 'thursday',
          hours: [
            {
              from: '09:30',
              to: '20:00',
            },
          ],
        },
        {
          day: 'friday',
          hours: [
            {
              from: '09:30',
              to: '20:00',
            },
          ],
        },
        {
          day: 'saturday',
          hours: [
            {
              from: '09:30',
              to: '20:00',
            },
          ],
        },
        {
          day: 'sunday',
          hours: [],
        },
      ],
      mailAddresses: {
        serviceCenter: 'servicecenter@mehrwerk.de',
        client: 'info@mehrwerk.de',
      },
      address: {
        street: 'Am Lenkwerk',
        streetNumber: '5',
        zip: '33609',
        city: 'Bielefeld',
      },
      website: 'https://www.mehrwerk.de',
    },
    footer: {
      footerLogo: {
        url: 'https://via.placeholder.com/200x100.png?text=Footer+Logo',
        alternativeText: 'Footer Logo',
      },
      text: 'Eine Leistung der Mehrwerk GmbH<br/>(kein Vertragsschluss mit der Oldenburgischen Landesbank AG)',
    },
    mappings: {
      status: {
        canceled: 'storniert',
        cancelled: 'storniert',
        collected: 'gesammelt',
        confirmed: 'bestätigt',
        open: 'offen',
      },
      statementType: {
        cashOut: 'Auszahlung',
        online: 'Online Cashback',
        regio: 'Regio Cashback',
        thirdparty: 'Extern',
        ticket: 'Ticketrückvergütung',
        travel: 'Reiserückvergütung',
        voucher: 'Gutschein',
      },
    },
    externalTools: {
      ids: {
        ibe: undefined,
        eventim: undefined,
        googleAnalytics: undefined,
        userCentrics: undefined,
      },
      apiKeys: {
        googleMaps: undefined,
      },
    },
    theme: {
      colors: {
        primary: '#0038A2',
        secondary: '#00A7FF',
        primaryBackground: '#F9F9F9',
        secondaryBackground: '#FBFBFB',
        highlight: 'rgba(68, 157, 68, 0.7)',
        white: '#fff',
        black: '#000000',
        gray: '#707070',
        darkGray: '#333333',
        success: '#449D44',
        warning: '#FFDD69',
        error: '#B91D0F',
        border: '#fff',
        link: '#01549B',
        transparent: 'rgba(0,0,0,0)',
        linearGradient:
          'linear-gradient(180deg, #418FFA 0%, #3D86F3 23%, #13399C 70%, #092368 100%) 0% 0% no-repeat padding-box',
      },
      fontFamily: {
        standard: '"Segoe UI", "Helvetica", "Arial", sans-serif',
        bold: '"Segoe UI Bold", "Helvetica", "Arial", sans-serif',
        thin: '"Segoe UI Light", "Helvetica", "Arial", sans-serif',
      },
      fontSize: {
        xs: '14px',
        sm: '18px',
        md: '20px',
        lg: '25px',
        xl: '30px',
        xxl: '50px',
      },
      lineHeight: {
        xs: '19px',
        sm: '23px',
        md: '25px',
        lg: '30px',
        xl: '35px',
        xxl: '55px',
      },
      breakpoint: { sm: '378px', md: '838px' },
      pageMargin: { sm: '15px', md: '50px' },
      borderWidth: { sm: '1px', md: '3px' },
      margin: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
      },
      padding: { sm: '8px', md: '16px', lg: '32px' },
      maxContentWidth: '1518px',
      highlightOpacity: '0.7',
      boxShadow: '0px 3px 3px #00000029',
      borderRadius: '10px',
      components: {
        paragraph: {},
        textlink: {},
        headline: {},
        fontawesome: {},
      },
    },
  },
} as PageSchema;
