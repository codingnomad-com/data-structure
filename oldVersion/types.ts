/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeType } from '@mehrwerk/portal-components';
import { DefaultColor } from '@mehrwerk/portal-components/dist/types/DefaultColor';
import {
  GetOnlineCashbackProductDetailProps,
  GetOnlineCashbackProductListProps,
  GetOnlineCashbackShopDetailProps,
  GetOnlineCashbackShopListProps,
} from './componentsRequestTypes';

export type AllowedService =
  | 'cashbackShop'
  | 'cashbackOffer'
  | 'cashbackProduct'
  | 'cashbackTransactions'
  | 'travel'
  | 'tickets'
  | 'eventDetails'
  | 'contactInfo'
  | 'categoriesList'
  | 'eventBasketList';

type ComponentType =
  | 'ImageSlider'
  | 'CashbackHighlightsList'
  | 'categoriesList'
  | 'Paragraph'
  | 'TextTeaser'
  | 'InfoLinkBox'
  | 'OnlineCashbackHighlightList'
  | 'EventMetaInformation'
  | 'Text'
  | string;

type QueryType =
  | 'ConfiguratorBasketitemsGetBasketitemByIdQuery'
  | 'ConfiguratorBasketitemsGetBasketitemsListQuery'
  | 'ConfiguratorCategoriesGetCategoriesListQuery'
  | 'ConfiguratorDigitalDistributionsGetDigitalDistributionByIdQuery'
  | 'ConfiguratorOrdersGetOrderByIdQuery'
  | 'ConfiguratorOrdersGetOrderPaymentQuery'
  | 'ConfiguratorOrdersGetOrdersListQuery'
  | 'ConfiguratorPaymentMethodsGetPaymentMethodByIdQuery'
  | 'ConfiguratorPaymentMethodsGetPaymentMethodsListQuery'
  | 'ConfiguratorProductsGetDocumentByIdQuery'
  | 'ConfiguratorProductsGetDocumentsListQuery'
  | 'ConfiguratorProductsGetProductByIdQuery'
  | 'ConfiguratorProductsGetProductsListQuery'
  | 'ConfiguratorSubscriptionsGetPaymentByIdQuery'
  | 'ConfiguratorSubscriptionsGetPaymentsListQuery'
  | 'ConfiguratorSubscriptionsGetSubscriptionByIdQuery'
  | 'ConfiguratorSubscriptionsGetSubscriptionsListQuery'
  | 'ConfiguratorUsersGetCurrentUserDataQuery'
  | 'ConfiguratorUsersGetCurrentUserQuery'
  | 'OnlineCashbackCashoutsGetCashoutsListQuery'
  | 'OnlineCashbackCashoutsGetRecipientsListQuery'
  | 'OnlineCashbackClickoutsGetClickoutsListQuery'
  | 'OnlineCashbackComplaintsGetComplaintsListQuery'
  | 'OnlineCashbackProductsGetProductByIdQuery'
  | 'OnlineCashbackProductsGetProductsListQuery'
  | 'OnlineCashbackProfileGetStatementListQuery'
  | 'OnlineCashbackShopsGetShopByIdQuery'
  | 'OnlineCashbackShopsGetShopsListQuery'
  | 'OnlineCashbackSpecialsGetSpecialsListQuery'
  | 'OnlineCashbackTransactionsGetTransactionByIdQuery'
  | 'OnlineCashbackTransactionsGetTransactionsListQuery'
  | 'RegioCashbackCategoriesGetCategoriesListQuery'
  | 'RegioCashbackCategoriesGetCategoryByIdQuery'
  | 'RegioCashbackOffersGetConsumptionByIdQuery'
  | 'RegioCashbackOffersGetOfferByIdQuery'
  | 'RegioCashbackOffersGetOfferRateByIdQuery'
  | 'RegioCashbackOffersGetOfferRatesListQuery'
  | 'RegioCashbackOffersGetOffersListQuery'
  | 'RegioCashbackShopsGetShopByIdQuery'
  | 'RegioCashbackShopsGetShopOfferByIdQuery'
  | 'RegioCashbackShopsGetShopOfferRateByIdQuery'
  | 'RegioCashbackShopsGetShopOfferRatesListQuery'
  | 'RegioCashbackShopsGetShopOffersListQuery'
  | 'RegioCashbackShopsGetShopsListQuery'
  | 'VoucherVouchersCheckVoucherQuery';

type PageMeta = {
  title: string;
  description: string;
  ogImage: string;
};

export type PageComponentConfig = {
  queryKey?: string; // same value as Query.key, uses queryKey to read data from redux store
  queryKeys?: string[]; // array of same values as Query.key, uses queryKey to read data from redux store
  dataNormalizeForService?: AllowedService;
  dataFromAPI?: string;
  callback?: string;
};

export type PageComponent = {
  componentId: string;
  component: ComponentType;
  // TODO: Set proper types
  props?: any;
  config?: PageComponentConfig;
};

export type QueryVariables =
  | GetOnlineCashbackProductDetailProps
  | GetOnlineCashbackProductListProps
  | GetOnlineCashbackShopDetailProps
  | GetOnlineCashbackShopListProps;

export type Query = {
  query: QueryType;
  key: string; // Uses key to save data to redux store
  queryVariables?: QueryVariables;
};

export type SubNavItem = {
  title: string;
  link: string;
};

export type SingleColumnConfig = {
  fullWidth: boolean;
};

export type SingleColumnProps = {
  columns: number;
  componentId?: string;
  config: SingleColumnConfig;
  children?: PageComponent[];
  props?: any;
};

export type TwoColumnsConfig = {
  columnsRatio: ColumnsRatio;
  fullWidth: boolean;
};

export type TwoColumnsProps = {
  columns: number;
  componentId?: string;
  config: TwoColumnsConfig;
  props?: any;
  leftColumnChildren?: PageComponent[];
  rightColumnChildren?: PageComponent[];
};

export type ColumnsRatio = '3:1' | '2:1' | '1:1' | '1:2' | '1:3';

export type PageConfig = {
  navigationLabel?: string;
  path: string;
  meta: PageMeta;
  isSubNav: boolean;
  isPrivate: boolean;
  backlink?: {
    link: string;
    label: string;
  };
  children?: SubNavItem[];
  components: SingleColumnProps[] | TwoColumnsProps[];
  queries: Query[];
};

type PhoneNumber = {
  countryCode: string;
  areaCode: string;
  number: string;
};

type PhoneNumbers = {
  serviceCenter: PhoneNumber;
  client: PhoneNumber;
};

type MailAddresses = {
  serviceCenter?: string;
  client?: string;
};

type Address = {
  street?: string;
  streetNumber?: string;
  zip: string;
  city: string;
};

export type OpeningHours = {
  day: string;
  hours: { from: string; to: string }[];
};

export type Contact = {
  clientName: string;
  projectName: string;
  portalName?: string;
  appName?: string;
  phoneNumbers: PhoneNumbers;
  mailAddresses: MailAddresses;
  openingHours: OpeningHours[];
  address: Address;
  website: string;
};

export type SiteMeta = {
  titlePrefix?: string;
  titleSuffix?: string;
};

export type Footer = {
  footerLogo: {
    url: string;
    alternativeText: string;
  };
  text: string | DefaultColor;
};

export type GeneralConfig = {
  loginIconSpacing: string;
};

// TODO: Import proper types (maybe from seperate types package)

export type ThemeSize = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
  xxxxl: string;
};

export type ProjectConfig = {
  generalConfig: GeneralConfig;
  meta: SiteMeta;
  contact: Contact;
  footer: Footer;
  externalTools: {
    ids: {
      ibe?: string;
      eventim?: string;
      googleAnalytics?: string;
      userCentrics?: string;
    };
    apiKeys: {
      googleMaps?: string;
    };
  };
  theme: ThemeType;
  mappings: {
    status: {
      [key: string]: any;
    };
    statementType: {
      [key: string]: any;
    };
  };
};

export type PageSchema = {
  host: string;
  projectConfig: ProjectConfig;
  pages: PageConfig[];
};
