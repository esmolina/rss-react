export interface ProductCategories {
  categories: Array<string>;
  supplements: string;
  snacks: string;
  cosmetic: string;
}

export interface Contacts {
  address: string;
  open: string;
  phone: string;
  mail: string;
}

export interface AboutProps {
  companyName: string;
  aboutHeader: string;
  productCategories: ProductCategories;
  ourContacts: Contacts;
  handleGoAnotherChange: (pageName: string) => void;
}
