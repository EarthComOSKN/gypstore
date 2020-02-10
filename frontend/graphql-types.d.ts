type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  Long: any
}

type Address = {
  __typename?: 'Address'
  id: Scalars['ID']
  name: Scalars['String']
  Address: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  customer: User
  invoices?: Maybe<Array<Invoice>>
  shipping?: Maybe<Array<Shipping>>
}

type AddressInvoicesArgs = {
  where?: Maybe<InvoiceWhereInput>
  orderBy?: Maybe<InvoiceOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type AddressShippingArgs = {
  where?: Maybe<ShippingWhereInput>
  orderBy?: Maybe<ShippingOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type AddressConnection = {
  __typename?: 'AddressConnection'
  pageInfo: PageInfo
  edges: Array<Maybe<AddressEdge>>
  aggregate: AggregateAddress
}

type AddressCreateInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  Address: Scalars['String']
  customer: UserCreateOneWithoutAddressesInput
  invoices?: Maybe<InvoiceCreateManyWithoutAddressInput>
  shipping?: Maybe<ShippingCreateManyWithoutAddressInput>
}

type AddressCreateManyWithoutCustomerInput = {
  create?: Maybe<Array<AddressCreateWithoutCustomerInput>>
  connect?: Maybe<Array<AddressWhereUniqueInput>>
}

type AddressCreateOneWithoutInvoicesInput = {
  create?: Maybe<AddressCreateWithoutInvoicesInput>
  connect?: Maybe<AddressWhereUniqueInput>
}

type AddressCreateOneWithoutShippingInput = {
  create?: Maybe<AddressCreateWithoutShippingInput>
  connect?: Maybe<AddressWhereUniqueInput>
}

type AddressCreateWithoutCustomerInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  Address: Scalars['String']
  invoices?: Maybe<InvoiceCreateManyWithoutAddressInput>
  shipping?: Maybe<ShippingCreateManyWithoutAddressInput>
}

type AddressCreateWithoutInvoicesInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  Address: Scalars['String']
  customer: UserCreateOneWithoutAddressesInput
  shipping?: Maybe<ShippingCreateManyWithoutAddressInput>
}

type AddressCreateWithoutShippingInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  Address: Scalars['String']
  customer: UserCreateOneWithoutAddressesInput
  invoices?: Maybe<InvoiceCreateManyWithoutAddressInput>
}

type AddressEdge = {
  __typename?: 'AddressEdge'
  node: Address
  cursor: Scalars['String']
}

enum AddressOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  AddressAsc = 'Address_ASC',
  AddressDesc = 'Address_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

type AddressPreviousValues = {
  __typename?: 'AddressPreviousValues'
  id: Scalars['ID']
  name: Scalars['String']
  Address: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

type AddressScalarWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  Address?: Maybe<Scalars['String']>
  Address_not?: Maybe<Scalars['String']>
  Address_in?: Maybe<Array<Scalars['String']>>
  Address_not_in?: Maybe<Array<Scalars['String']>>
  Address_lt?: Maybe<Scalars['String']>
  Address_lte?: Maybe<Scalars['String']>
  Address_gt?: Maybe<Scalars['String']>
  Address_gte?: Maybe<Scalars['String']>
  Address_contains?: Maybe<Scalars['String']>
  Address_not_contains?: Maybe<Scalars['String']>
  Address_starts_with?: Maybe<Scalars['String']>
  Address_not_starts_with?: Maybe<Scalars['String']>
  Address_ends_with?: Maybe<Scalars['String']>
  Address_not_ends_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  AND?: Maybe<Array<AddressScalarWhereInput>>
  OR?: Maybe<Array<AddressScalarWhereInput>>
  NOT?: Maybe<Array<AddressScalarWhereInput>>
}

type AddressSubscriptionPayload = {
  __typename?: 'AddressSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<Address>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<AddressPreviousValues>
}

type AddressSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>
  updatedFields_contains?: Maybe<Scalars['String']>
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<AddressWhereInput>
  AND?: Maybe<Array<AddressSubscriptionWhereInput>>
  OR?: Maybe<Array<AddressSubscriptionWhereInput>>
  NOT?: Maybe<Array<AddressSubscriptionWhereInput>>
}

type AddressUpdateInput = {
  name?: Maybe<Scalars['String']>
  Address?: Maybe<Scalars['String']>
  customer?: Maybe<UserUpdateOneRequiredWithoutAddressesInput>
  invoices?: Maybe<InvoiceUpdateManyWithoutAddressInput>
  shipping?: Maybe<ShippingUpdateManyWithoutAddressInput>
}

type AddressUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>
  Address?: Maybe<Scalars['String']>
}

type AddressUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>
  Address?: Maybe<Scalars['String']>
}

type AddressUpdateManyWithoutCustomerInput = {
  create?: Maybe<Array<AddressCreateWithoutCustomerInput>>
  delete?: Maybe<Array<AddressWhereUniqueInput>>
  connect?: Maybe<Array<AddressWhereUniqueInput>>
  set?: Maybe<Array<AddressWhereUniqueInput>>
  disconnect?: Maybe<Array<AddressWhereUniqueInput>>
  update?: Maybe<Array<AddressUpdateWithWhereUniqueWithoutCustomerInput>>
  upsert?: Maybe<Array<AddressUpsertWithWhereUniqueWithoutCustomerInput>>
  deleteMany?: Maybe<Array<AddressScalarWhereInput>>
  updateMany?: Maybe<Array<AddressUpdateManyWithWhereNestedInput>>
}

type AddressUpdateManyWithWhereNestedInput = {
  where: AddressScalarWhereInput
  data: AddressUpdateManyDataInput
}

type AddressUpdateOneRequiredWithoutShippingInput = {
  create?: Maybe<AddressCreateWithoutShippingInput>
  update?: Maybe<AddressUpdateWithoutShippingDataInput>
  upsert?: Maybe<AddressUpsertWithoutShippingInput>
  connect?: Maybe<AddressWhereUniqueInput>
}

type AddressUpdateOneWithoutInvoicesInput = {
  create?: Maybe<AddressCreateWithoutInvoicesInput>
  update?: Maybe<AddressUpdateWithoutInvoicesDataInput>
  upsert?: Maybe<AddressUpsertWithoutInvoicesInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  connect?: Maybe<AddressWhereUniqueInput>
}

type AddressUpdateWithoutCustomerDataInput = {
  name?: Maybe<Scalars['String']>
  Address?: Maybe<Scalars['String']>
  invoices?: Maybe<InvoiceUpdateManyWithoutAddressInput>
  shipping?: Maybe<ShippingUpdateManyWithoutAddressInput>
}

type AddressUpdateWithoutInvoicesDataInput = {
  name?: Maybe<Scalars['String']>
  Address?: Maybe<Scalars['String']>
  customer?: Maybe<UserUpdateOneRequiredWithoutAddressesInput>
  shipping?: Maybe<ShippingUpdateManyWithoutAddressInput>
}

type AddressUpdateWithoutShippingDataInput = {
  name?: Maybe<Scalars['String']>
  Address?: Maybe<Scalars['String']>
  customer?: Maybe<UserUpdateOneRequiredWithoutAddressesInput>
  invoices?: Maybe<InvoiceUpdateManyWithoutAddressInput>
}

type AddressUpdateWithWhereUniqueWithoutCustomerInput = {
  where: AddressWhereUniqueInput
  data: AddressUpdateWithoutCustomerDataInput
}

type AddressUpsertWithoutInvoicesInput = {
  update: AddressUpdateWithoutInvoicesDataInput
  create: AddressCreateWithoutInvoicesInput
}

type AddressUpsertWithoutShippingInput = {
  update: AddressUpdateWithoutShippingDataInput
  create: AddressCreateWithoutShippingInput
}

type AddressUpsertWithWhereUniqueWithoutCustomerInput = {
  where: AddressWhereUniqueInput
  update: AddressUpdateWithoutCustomerDataInput
  create: AddressCreateWithoutCustomerInput
}

type AddressWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  Address?: Maybe<Scalars['String']>
  Address_not?: Maybe<Scalars['String']>
  Address_in?: Maybe<Array<Scalars['String']>>
  Address_not_in?: Maybe<Array<Scalars['String']>>
  Address_lt?: Maybe<Scalars['String']>
  Address_lte?: Maybe<Scalars['String']>
  Address_gt?: Maybe<Scalars['String']>
  Address_gte?: Maybe<Scalars['String']>
  Address_contains?: Maybe<Scalars['String']>
  Address_not_contains?: Maybe<Scalars['String']>
  Address_starts_with?: Maybe<Scalars['String']>
  Address_not_starts_with?: Maybe<Scalars['String']>
  Address_ends_with?: Maybe<Scalars['String']>
  Address_not_ends_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  customer?: Maybe<UserWhereInput>
  invoices_every?: Maybe<InvoiceWhereInput>
  invoices_some?: Maybe<InvoiceWhereInput>
  invoices_none?: Maybe<InvoiceWhereInput>
  shipping_every?: Maybe<ShippingWhereInput>
  shipping_some?: Maybe<ShippingWhereInput>
  shipping_none?: Maybe<ShippingWhereInput>
  AND?: Maybe<Array<AddressWhereInput>>
  OR?: Maybe<Array<AddressWhereInput>>
  NOT?: Maybe<Array<AddressWhereInput>>
}

type AddressWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

type AggregateAddress = {
  __typename?: 'AggregateAddress'
  count: Scalars['Int']
}

type AggregateCategory = {
  __typename?: 'AggregateCategory'
  count: Scalars['Int']
}

type AggregateInvoice = {
  __typename?: 'AggregateInvoice'
  count: Scalars['Int']
}

type AggregatePayment = {
  __typename?: 'AggregatePayment'
  count: Scalars['Int']
}

type AggregateProductItem = {
  __typename?: 'AggregateProductItem'
  count: Scalars['Int']
}

type AggregateQuotation = {
  __typename?: 'AggregateQuotation'
  count: Scalars['Int']
}

type AggregateSaleman = {
  __typename?: 'AggregateSaleman'
  count: Scalars['Int']
}

type AggregateShipping = {
  __typename?: 'AggregateShipping'
  count: Scalars['Int']
}

type AggregateShoppingCart = {
  __typename?: 'AggregateShoppingCart'
  count: Scalars['Int']
}

type AggregateShoppingCartItem = {
  __typename?: 'AggregateShoppingCartItem'
  count: Scalars['Int']
}

type AggregateUser = {
  __typename?: 'AggregateUser'
  count: Scalars['Int']
}

type BatchPayload = {
  __typename?: 'BatchPayload'
  count: Scalars['Long']
}

type Category = {
  __typename?: 'Category'
  id: Scalars['ID']
  name: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  productItem?: Maybe<Array<ProductItem>>
  category?: Maybe<Category>
}

type CategoryProductItemArgs = {
  where?: Maybe<ProductItemWhereInput>
  orderBy?: Maybe<ProductItemOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type CategoryConnection = {
  __typename?: 'CategoryConnection'
  pageInfo: PageInfo
  edges: Array<Maybe<CategoryEdge>>
  aggregate: AggregateCategory
}

type CategoryCreateInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  productItem?: Maybe<ProductItemCreateManyWithoutCategoryInput>
  category?: Maybe<CategoryCreateOneInput>
}

type CategoryCreateOneInput = {
  create?: Maybe<CategoryCreateInput>
  connect?: Maybe<CategoryWhereUniqueInput>
}

type CategoryCreateOneWithoutProductItemInput = {
  create?: Maybe<CategoryCreateWithoutProductItemInput>
  connect?: Maybe<CategoryWhereUniqueInput>
}

type CategoryCreateWithoutProductItemInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  category?: Maybe<CategoryCreateOneInput>
}

type CategoryEdge = {
  __typename?: 'CategoryEdge'
  node: Category
  cursor: Scalars['String']
}

enum CategoryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

type CategoryPreviousValues = {
  __typename?: 'CategoryPreviousValues'
  id: Scalars['ID']
  name: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

type CategorySubscriptionPayload = {
  __typename?: 'CategorySubscriptionPayload'
  mutation: MutationType
  node?: Maybe<Category>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<CategoryPreviousValues>
}

type CategorySubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>
  updatedFields_contains?: Maybe<Scalars['String']>
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<CategoryWhereInput>
  AND?: Maybe<Array<CategorySubscriptionWhereInput>>
  OR?: Maybe<Array<CategorySubscriptionWhereInput>>
  NOT?: Maybe<Array<CategorySubscriptionWhereInput>>
}

type CategoryUpdateDataInput = {
  name?: Maybe<Scalars['String']>
  productItem?: Maybe<ProductItemUpdateManyWithoutCategoryInput>
  category?: Maybe<CategoryUpdateOneInput>
}

type CategoryUpdateInput = {
  name?: Maybe<Scalars['String']>
  productItem?: Maybe<ProductItemUpdateManyWithoutCategoryInput>
  category?: Maybe<CategoryUpdateOneInput>
}

type CategoryUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>
}

type CategoryUpdateOneInput = {
  create?: Maybe<CategoryCreateInput>
  update?: Maybe<CategoryUpdateDataInput>
  upsert?: Maybe<CategoryUpsertNestedInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  connect?: Maybe<CategoryWhereUniqueInput>
}

type CategoryUpdateOneRequiredWithoutProductItemInput = {
  create?: Maybe<CategoryCreateWithoutProductItemInput>
  update?: Maybe<CategoryUpdateWithoutProductItemDataInput>
  upsert?: Maybe<CategoryUpsertWithoutProductItemInput>
  connect?: Maybe<CategoryWhereUniqueInput>
}

type CategoryUpdateWithoutProductItemDataInput = {
  name?: Maybe<Scalars['String']>
  category?: Maybe<CategoryUpdateOneInput>
}

type CategoryUpsertNestedInput = {
  update: CategoryUpdateDataInput
  create: CategoryCreateInput
}

type CategoryUpsertWithoutProductItemInput = {
  update: CategoryUpdateWithoutProductItemDataInput
  create: CategoryCreateWithoutProductItemInput
}

type CategoryWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  productItem_every?: Maybe<ProductItemWhereInput>
  productItem_some?: Maybe<ProductItemWhereInput>
  productItem_none?: Maybe<ProductItemWhereInput>
  category?: Maybe<CategoryWhereInput>
  AND?: Maybe<Array<CategoryWhereInput>>
  OR?: Maybe<Array<CategoryWhereInput>>
  NOT?: Maybe<Array<CategoryWhereInput>>
}

type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

type Invoice = {
  __typename?: 'Invoice'
  id: Scalars['ID']
  docId: Scalars['String']
  creditTerm: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  user: User
  quotation: Quotation
  saleman: Saleman
  address?: Maybe<Address>
  payment?: Maybe<Payment>
}

type InvoiceConnection = {
  __typename?: 'InvoiceConnection'
  pageInfo: PageInfo
  edges: Array<Maybe<InvoiceEdge>>
  aggregate: AggregateInvoice
}

type InvoiceCreateInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  creditTerm: Scalars['String']
  user: UserCreateOneInput
  quotation: QuotationCreateOneInput
  saleman: SalemanCreateOneWithoutInvoicesInput
  address?: Maybe<AddressCreateOneWithoutInvoicesInput>
  payment?: Maybe<PaymentCreateOneWithoutInvoiceInput>
}

type InvoiceCreateManyWithoutAddressInput = {
  create?: Maybe<Array<InvoiceCreateWithoutAddressInput>>
  connect?: Maybe<Array<InvoiceWhereUniqueInput>>
}

type InvoiceCreateManyWithoutSalemanInput = {
  create?: Maybe<Array<InvoiceCreateWithoutSalemanInput>>
  connect?: Maybe<Array<InvoiceWhereUniqueInput>>
}

type InvoiceCreateOneInput = {
  create?: Maybe<InvoiceCreateInput>
  connect?: Maybe<InvoiceWhereUniqueInput>
}

type InvoiceCreateOneWithoutPaymentInput = {
  create?: Maybe<InvoiceCreateWithoutPaymentInput>
  connect?: Maybe<InvoiceWhereUniqueInput>
}

type InvoiceCreateWithoutAddressInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  creditTerm: Scalars['String']
  user: UserCreateOneInput
  quotation: QuotationCreateOneInput
  saleman: SalemanCreateOneWithoutInvoicesInput
  payment?: Maybe<PaymentCreateOneWithoutInvoiceInput>
}

type InvoiceCreateWithoutPaymentInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  creditTerm: Scalars['String']
  user: UserCreateOneInput
  quotation: QuotationCreateOneInput
  saleman: SalemanCreateOneWithoutInvoicesInput
  address?: Maybe<AddressCreateOneWithoutInvoicesInput>
}

type InvoiceCreateWithoutSalemanInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  creditTerm: Scalars['String']
  user: UserCreateOneInput
  quotation: QuotationCreateOneInput
  address?: Maybe<AddressCreateOneWithoutInvoicesInput>
  payment?: Maybe<PaymentCreateOneWithoutInvoiceInput>
}

type InvoiceEdge = {
  __typename?: 'InvoiceEdge'
  node: Invoice
  cursor: Scalars['String']
}

enum InvoiceOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  DocIdAsc = 'docId_ASC',
  DocIdDesc = 'docId_DESC',
  CreditTermAsc = 'creditTerm_ASC',
  CreditTermDesc = 'creditTerm_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

type InvoicePreviousValues = {
  __typename?: 'InvoicePreviousValues'
  id: Scalars['ID']
  docId: Scalars['String']
  creditTerm: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

type InvoiceScalarWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  docId?: Maybe<Scalars['String']>
  docId_not?: Maybe<Scalars['String']>
  docId_in?: Maybe<Array<Scalars['String']>>
  docId_not_in?: Maybe<Array<Scalars['String']>>
  docId_lt?: Maybe<Scalars['String']>
  docId_lte?: Maybe<Scalars['String']>
  docId_gt?: Maybe<Scalars['String']>
  docId_gte?: Maybe<Scalars['String']>
  docId_contains?: Maybe<Scalars['String']>
  docId_not_contains?: Maybe<Scalars['String']>
  docId_starts_with?: Maybe<Scalars['String']>
  docId_not_starts_with?: Maybe<Scalars['String']>
  docId_ends_with?: Maybe<Scalars['String']>
  docId_not_ends_with?: Maybe<Scalars['String']>
  creditTerm?: Maybe<Scalars['String']>
  creditTerm_not?: Maybe<Scalars['String']>
  creditTerm_in?: Maybe<Array<Scalars['String']>>
  creditTerm_not_in?: Maybe<Array<Scalars['String']>>
  creditTerm_lt?: Maybe<Scalars['String']>
  creditTerm_lte?: Maybe<Scalars['String']>
  creditTerm_gt?: Maybe<Scalars['String']>
  creditTerm_gte?: Maybe<Scalars['String']>
  creditTerm_contains?: Maybe<Scalars['String']>
  creditTerm_not_contains?: Maybe<Scalars['String']>
  creditTerm_starts_with?: Maybe<Scalars['String']>
  creditTerm_not_starts_with?: Maybe<Scalars['String']>
  creditTerm_ends_with?: Maybe<Scalars['String']>
  creditTerm_not_ends_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  AND?: Maybe<Array<InvoiceScalarWhereInput>>
  OR?: Maybe<Array<InvoiceScalarWhereInput>>
  NOT?: Maybe<Array<InvoiceScalarWhereInput>>
}

type InvoiceSubscriptionPayload = {
  __typename?: 'InvoiceSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<Invoice>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<InvoicePreviousValues>
}

type InvoiceSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>
  updatedFields_contains?: Maybe<Scalars['String']>
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<InvoiceWhereInput>
  AND?: Maybe<Array<InvoiceSubscriptionWhereInput>>
  OR?: Maybe<Array<InvoiceSubscriptionWhereInput>>
  NOT?: Maybe<Array<InvoiceSubscriptionWhereInput>>
}

type InvoiceUpdateDataInput = {
  docId?: Maybe<Scalars['String']>
  creditTerm?: Maybe<Scalars['String']>
  user?: Maybe<UserUpdateOneRequiredInput>
  quotation?: Maybe<QuotationUpdateOneRequiredInput>
  saleman?: Maybe<SalemanUpdateOneRequiredWithoutInvoicesInput>
  address?: Maybe<AddressUpdateOneWithoutInvoicesInput>
  payment?: Maybe<PaymentUpdateOneWithoutInvoiceInput>
}

type InvoiceUpdateInput = {
  docId?: Maybe<Scalars['String']>
  creditTerm?: Maybe<Scalars['String']>
  user?: Maybe<UserUpdateOneRequiredInput>
  quotation?: Maybe<QuotationUpdateOneRequiredInput>
  saleman?: Maybe<SalemanUpdateOneRequiredWithoutInvoicesInput>
  address?: Maybe<AddressUpdateOneWithoutInvoicesInput>
  payment?: Maybe<PaymentUpdateOneWithoutInvoiceInput>
}

type InvoiceUpdateManyDataInput = {
  docId?: Maybe<Scalars['String']>
  creditTerm?: Maybe<Scalars['String']>
}

type InvoiceUpdateManyMutationInput = {
  docId?: Maybe<Scalars['String']>
  creditTerm?: Maybe<Scalars['String']>
}

type InvoiceUpdateManyWithoutAddressInput = {
  create?: Maybe<Array<InvoiceCreateWithoutAddressInput>>
  delete?: Maybe<Array<InvoiceWhereUniqueInput>>
  connect?: Maybe<Array<InvoiceWhereUniqueInput>>
  set?: Maybe<Array<InvoiceWhereUniqueInput>>
  disconnect?: Maybe<Array<InvoiceWhereUniqueInput>>
  update?: Maybe<Array<InvoiceUpdateWithWhereUniqueWithoutAddressInput>>
  upsert?: Maybe<Array<InvoiceUpsertWithWhereUniqueWithoutAddressInput>>
  deleteMany?: Maybe<Array<InvoiceScalarWhereInput>>
  updateMany?: Maybe<Array<InvoiceUpdateManyWithWhereNestedInput>>
}

type InvoiceUpdateManyWithoutSalemanInput = {
  create?: Maybe<Array<InvoiceCreateWithoutSalemanInput>>
  delete?: Maybe<Array<InvoiceWhereUniqueInput>>
  connect?: Maybe<Array<InvoiceWhereUniqueInput>>
  set?: Maybe<Array<InvoiceWhereUniqueInput>>
  disconnect?: Maybe<Array<InvoiceWhereUniqueInput>>
  update?: Maybe<Array<InvoiceUpdateWithWhereUniqueWithoutSalemanInput>>
  upsert?: Maybe<Array<InvoiceUpsertWithWhereUniqueWithoutSalemanInput>>
  deleteMany?: Maybe<Array<InvoiceScalarWhereInput>>
  updateMany?: Maybe<Array<InvoiceUpdateManyWithWhereNestedInput>>
}

type InvoiceUpdateManyWithWhereNestedInput = {
  where: InvoiceScalarWhereInput
  data: InvoiceUpdateManyDataInput
}

type InvoiceUpdateOneRequiredInput = {
  create?: Maybe<InvoiceCreateInput>
  update?: Maybe<InvoiceUpdateDataInput>
  upsert?: Maybe<InvoiceUpsertNestedInput>
  connect?: Maybe<InvoiceWhereUniqueInput>
}

type InvoiceUpdateOneWithoutPaymentInput = {
  create?: Maybe<InvoiceCreateWithoutPaymentInput>
  update?: Maybe<InvoiceUpdateWithoutPaymentDataInput>
  upsert?: Maybe<InvoiceUpsertWithoutPaymentInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  connect?: Maybe<InvoiceWhereUniqueInput>
}

type InvoiceUpdateWithoutAddressDataInput = {
  docId?: Maybe<Scalars['String']>
  creditTerm?: Maybe<Scalars['String']>
  user?: Maybe<UserUpdateOneRequiredInput>
  quotation?: Maybe<QuotationUpdateOneRequiredInput>
  saleman?: Maybe<SalemanUpdateOneRequiredWithoutInvoicesInput>
  payment?: Maybe<PaymentUpdateOneWithoutInvoiceInput>
}

type InvoiceUpdateWithoutPaymentDataInput = {
  docId?: Maybe<Scalars['String']>
  creditTerm?: Maybe<Scalars['String']>
  user?: Maybe<UserUpdateOneRequiredInput>
  quotation?: Maybe<QuotationUpdateOneRequiredInput>
  saleman?: Maybe<SalemanUpdateOneRequiredWithoutInvoicesInput>
  address?: Maybe<AddressUpdateOneWithoutInvoicesInput>
}

type InvoiceUpdateWithoutSalemanDataInput = {
  docId?: Maybe<Scalars['String']>
  creditTerm?: Maybe<Scalars['String']>
  user?: Maybe<UserUpdateOneRequiredInput>
  quotation?: Maybe<QuotationUpdateOneRequiredInput>
  address?: Maybe<AddressUpdateOneWithoutInvoicesInput>
  payment?: Maybe<PaymentUpdateOneWithoutInvoiceInput>
}

type InvoiceUpdateWithWhereUniqueWithoutAddressInput = {
  where: InvoiceWhereUniqueInput
  data: InvoiceUpdateWithoutAddressDataInput
}

type InvoiceUpdateWithWhereUniqueWithoutSalemanInput = {
  where: InvoiceWhereUniqueInput
  data: InvoiceUpdateWithoutSalemanDataInput
}

type InvoiceUpsertNestedInput = {
  update: InvoiceUpdateDataInput
  create: InvoiceCreateInput
}

type InvoiceUpsertWithoutPaymentInput = {
  update: InvoiceUpdateWithoutPaymentDataInput
  create: InvoiceCreateWithoutPaymentInput
}

type InvoiceUpsertWithWhereUniqueWithoutAddressInput = {
  where: InvoiceWhereUniqueInput
  update: InvoiceUpdateWithoutAddressDataInput
  create: InvoiceCreateWithoutAddressInput
}

type InvoiceUpsertWithWhereUniqueWithoutSalemanInput = {
  where: InvoiceWhereUniqueInput
  update: InvoiceUpdateWithoutSalemanDataInput
  create: InvoiceCreateWithoutSalemanInput
}

type InvoiceWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  docId?: Maybe<Scalars['String']>
  docId_not?: Maybe<Scalars['String']>
  docId_in?: Maybe<Array<Scalars['String']>>
  docId_not_in?: Maybe<Array<Scalars['String']>>
  docId_lt?: Maybe<Scalars['String']>
  docId_lte?: Maybe<Scalars['String']>
  docId_gt?: Maybe<Scalars['String']>
  docId_gte?: Maybe<Scalars['String']>
  docId_contains?: Maybe<Scalars['String']>
  docId_not_contains?: Maybe<Scalars['String']>
  docId_starts_with?: Maybe<Scalars['String']>
  docId_not_starts_with?: Maybe<Scalars['String']>
  docId_ends_with?: Maybe<Scalars['String']>
  docId_not_ends_with?: Maybe<Scalars['String']>
  creditTerm?: Maybe<Scalars['String']>
  creditTerm_not?: Maybe<Scalars['String']>
  creditTerm_in?: Maybe<Array<Scalars['String']>>
  creditTerm_not_in?: Maybe<Array<Scalars['String']>>
  creditTerm_lt?: Maybe<Scalars['String']>
  creditTerm_lte?: Maybe<Scalars['String']>
  creditTerm_gt?: Maybe<Scalars['String']>
  creditTerm_gte?: Maybe<Scalars['String']>
  creditTerm_contains?: Maybe<Scalars['String']>
  creditTerm_not_contains?: Maybe<Scalars['String']>
  creditTerm_starts_with?: Maybe<Scalars['String']>
  creditTerm_not_starts_with?: Maybe<Scalars['String']>
  creditTerm_ends_with?: Maybe<Scalars['String']>
  creditTerm_not_ends_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  user?: Maybe<UserWhereInput>
  quotation?: Maybe<QuotationWhereInput>
  saleman?: Maybe<SalemanWhereInput>
  address?: Maybe<AddressWhereInput>
  payment?: Maybe<PaymentWhereInput>
  AND?: Maybe<Array<InvoiceWhereInput>>
  OR?: Maybe<Array<InvoiceWhereInput>>
  NOT?: Maybe<Array<InvoiceWhereInput>>
}

type InvoiceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

type Mutation = {
  __typename?: 'Mutation'
  createAddress: Address
  updateAddress?: Maybe<Address>
  updateManyAddresses: BatchPayload
  upsertAddress: Address
  deleteAddress?: Maybe<Address>
  deleteManyAddresses: BatchPayload
  createCategory: Category
  updateCategory?: Maybe<Category>
  updateManyCategories: BatchPayload
  upsertCategory: Category
  deleteCategory?: Maybe<Category>
  deleteManyCategories: BatchPayload
  createInvoice: Invoice
  updateInvoice?: Maybe<Invoice>
  updateManyInvoices: BatchPayload
  upsertInvoice: Invoice
  deleteInvoice?: Maybe<Invoice>
  deleteManyInvoices: BatchPayload
  createPayment: Payment
  updatePayment?: Maybe<Payment>
  updateManyPayments: BatchPayload
  upsertPayment: Payment
  deletePayment?: Maybe<Payment>
  deleteManyPayments: BatchPayload
  createProductItem: ProductItem
  updateProductItem?: Maybe<ProductItem>
  updateManyProductItems: BatchPayload
  upsertProductItem: ProductItem
  deleteProductItem?: Maybe<ProductItem>
  deleteManyProductItems: BatchPayload
  createQuotation: Quotation
  updateQuotation?: Maybe<Quotation>
  updateManyQuotations: BatchPayload
  upsertQuotation: Quotation
  deleteQuotation?: Maybe<Quotation>
  deleteManyQuotations: BatchPayload
  createSaleman: Saleman
  updateSaleman?: Maybe<Saleman>
  upsertSaleman: Saleman
  deleteSaleman?: Maybe<Saleman>
  deleteManySalemen: BatchPayload
  createShipping: Shipping
  updateShipping?: Maybe<Shipping>
  updateManyShippings: BatchPayload
  upsertShipping: Shipping
  deleteShipping?: Maybe<Shipping>
  deleteManyShippings: BatchPayload
  createShoppingCart: ShoppingCart
  updateShoppingCart?: Maybe<ShoppingCart>
  updateManyShoppingCarts: BatchPayload
  upsertShoppingCart: ShoppingCart
  deleteShoppingCart?: Maybe<ShoppingCart>
  deleteManyShoppingCarts: BatchPayload
  createShoppingCartItem: ShoppingCartItem
  updateShoppingCartItem?: Maybe<ShoppingCartItem>
  updateManyShoppingCartItems: BatchPayload
  upsertShoppingCartItem: ShoppingCartItem
  deleteShoppingCartItem?: Maybe<ShoppingCartItem>
  deleteManyShoppingCartItems: BatchPayload
  createUser: User
  updateUser?: Maybe<User>
  updateManyUsers: BatchPayload
  upsertUser: User
  deleteUser?: Maybe<User>
  deleteManyUsers: BatchPayload
}

type MutationCreateAddressArgs = {
  data: AddressCreateInput
}

type MutationUpdateAddressArgs = {
  data: AddressUpdateInput
  where: AddressWhereUniqueInput
}

type MutationUpdateManyAddressesArgs = {
  data: AddressUpdateManyMutationInput
  where?: Maybe<AddressWhereInput>
}

type MutationUpsertAddressArgs = {
  where: AddressWhereUniqueInput
  create: AddressCreateInput
  update: AddressUpdateInput
}

type MutationDeleteAddressArgs = {
  where: AddressWhereUniqueInput
}

type MutationDeleteManyAddressesArgs = {
  where?: Maybe<AddressWhereInput>
}

type MutationCreateCategoryArgs = {
  data: CategoryCreateInput
}

type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput
  where: CategoryWhereUniqueInput
}

type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateManyMutationInput
  where?: Maybe<CategoryWhereInput>
}

type MutationUpsertCategoryArgs = {
  where: CategoryWhereUniqueInput
  create: CategoryCreateInput
  update: CategoryUpdateInput
}

type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput
}

type MutationDeleteManyCategoriesArgs = {
  where?: Maybe<CategoryWhereInput>
}

type MutationCreateInvoiceArgs = {
  data: InvoiceCreateInput
}

type MutationUpdateInvoiceArgs = {
  data: InvoiceUpdateInput
  where: InvoiceWhereUniqueInput
}

type MutationUpdateManyInvoicesArgs = {
  data: InvoiceUpdateManyMutationInput
  where?: Maybe<InvoiceWhereInput>
}

type MutationUpsertInvoiceArgs = {
  where: InvoiceWhereUniqueInput
  create: InvoiceCreateInput
  update: InvoiceUpdateInput
}

type MutationDeleteInvoiceArgs = {
  where: InvoiceWhereUniqueInput
}

type MutationDeleteManyInvoicesArgs = {
  where?: Maybe<InvoiceWhereInput>
}

type MutationCreatePaymentArgs = {
  data: PaymentCreateInput
}

type MutationUpdatePaymentArgs = {
  data: PaymentUpdateInput
  where: PaymentWhereUniqueInput
}

type MutationUpdateManyPaymentsArgs = {
  data: PaymentUpdateManyMutationInput
  where?: Maybe<PaymentWhereInput>
}

type MutationUpsertPaymentArgs = {
  where: PaymentWhereUniqueInput
  create: PaymentCreateInput
  update: PaymentUpdateInput
}

type MutationDeletePaymentArgs = {
  where: PaymentWhereUniqueInput
}

type MutationDeleteManyPaymentsArgs = {
  where?: Maybe<PaymentWhereInput>
}

type MutationCreateProductItemArgs = {
  data: ProductItemCreateInput
}

type MutationUpdateProductItemArgs = {
  data: ProductItemUpdateInput
  where: ProductItemWhereUniqueInput
}

type MutationUpdateManyProductItemsArgs = {
  data: ProductItemUpdateManyMutationInput
  where?: Maybe<ProductItemWhereInput>
}

type MutationUpsertProductItemArgs = {
  where: ProductItemWhereUniqueInput
  create: ProductItemCreateInput
  update: ProductItemUpdateInput
}

type MutationDeleteProductItemArgs = {
  where: ProductItemWhereUniqueInput
}

type MutationDeleteManyProductItemsArgs = {
  where?: Maybe<ProductItemWhereInput>
}

type MutationCreateQuotationArgs = {
  data: QuotationCreateInput
}

type MutationUpdateQuotationArgs = {
  data: QuotationUpdateInput
  where: QuotationWhereUniqueInput
}

type MutationUpdateManyQuotationsArgs = {
  data: QuotationUpdateManyMutationInput
  where?: Maybe<QuotationWhereInput>
}

type MutationUpsertQuotationArgs = {
  where: QuotationWhereUniqueInput
  create: QuotationCreateInput
  update: QuotationUpdateInput
}

type MutationDeleteQuotationArgs = {
  where: QuotationWhereUniqueInput
}

type MutationDeleteManyQuotationsArgs = {
  where?: Maybe<QuotationWhereInput>
}

type MutationCreateSalemanArgs = {
  data: SalemanCreateInput
}

type MutationUpdateSalemanArgs = {
  data: SalemanUpdateInput
  where: SalemanWhereUniqueInput
}

type MutationUpsertSalemanArgs = {
  where: SalemanWhereUniqueInput
  create: SalemanCreateInput
  update: SalemanUpdateInput
}

type MutationDeleteSalemanArgs = {
  where: SalemanWhereUniqueInput
}

type MutationDeleteManySalemenArgs = {
  where?: Maybe<SalemanWhereInput>
}

type MutationCreateShippingArgs = {
  data: ShippingCreateInput
}

type MutationUpdateShippingArgs = {
  data: ShippingUpdateInput
  where: ShippingWhereUniqueInput
}

type MutationUpdateManyShippingsArgs = {
  data: ShippingUpdateManyMutationInput
  where?: Maybe<ShippingWhereInput>
}

type MutationUpsertShippingArgs = {
  where: ShippingWhereUniqueInput
  create: ShippingCreateInput
  update: ShippingUpdateInput
}

type MutationDeleteShippingArgs = {
  where: ShippingWhereUniqueInput
}

type MutationDeleteManyShippingsArgs = {
  where?: Maybe<ShippingWhereInput>
}

type MutationCreateShoppingCartArgs = {
  data: ShoppingCartCreateInput
}

type MutationUpdateShoppingCartArgs = {
  data: ShoppingCartUpdateInput
  where: ShoppingCartWhereUniqueInput
}

type MutationUpdateManyShoppingCartsArgs = {
  data: ShoppingCartUpdateManyMutationInput
  where?: Maybe<ShoppingCartWhereInput>
}

type MutationUpsertShoppingCartArgs = {
  where: ShoppingCartWhereUniqueInput
  create: ShoppingCartCreateInput
  update: ShoppingCartUpdateInput
}

type MutationDeleteShoppingCartArgs = {
  where: ShoppingCartWhereUniqueInput
}

type MutationDeleteManyShoppingCartsArgs = {
  where?: Maybe<ShoppingCartWhereInput>
}

type MutationCreateShoppingCartItemArgs = {
  data: ShoppingCartItemCreateInput
}

type MutationUpdateShoppingCartItemArgs = {
  data: ShoppingCartItemUpdateInput
  where: ShoppingCartItemWhereUniqueInput
}

type MutationUpdateManyShoppingCartItemsArgs = {
  data: ShoppingCartItemUpdateManyMutationInput
  where?: Maybe<ShoppingCartItemWhereInput>
}

type MutationUpsertShoppingCartItemArgs = {
  where: ShoppingCartItemWhereUniqueInput
  create: ShoppingCartItemCreateInput
  update: ShoppingCartItemUpdateInput
}

type MutationDeleteShoppingCartItemArgs = {
  where: ShoppingCartItemWhereUniqueInput
}

type MutationDeleteManyShoppingCartItemsArgs = {
  where?: Maybe<ShoppingCartItemWhereInput>
}

type MutationCreateUserArgs = {
  data: UserCreateInput
}

type MutationUpdateUserArgs = {
  data: UserUpdateInput
  where: UserWhereUniqueInput
}

type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput
  where?: Maybe<UserWhereInput>
}

type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput
  create: UserCreateInput
  update: UserUpdateInput
}

type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
}

type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
}

enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED',
}

type Node = {
  id: Scalars['ID']
}

type PageInfo = {
  __typename?: 'PageInfo'
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
  endCursor?: Maybe<Scalars['String']>
}

type Payment = {
  __typename?: 'Payment'
  id: Scalars['ID']
  docId: Scalars['String']
  amount: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  customer: User
  saleman: Saleman
  quotation: Quotation
  Invoice?: Maybe<Invoice>
}

type PaymentConnection = {
  __typename?: 'PaymentConnection'
  pageInfo: PageInfo
  edges: Array<Maybe<PaymentEdge>>
  aggregate: AggregatePayment
}

type PaymentCreateInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  amount: Scalars['String']
  customer: UserCreateOneWithoutPaymentsInput
  saleman: SalemanCreateOneWithoutPaymentsInput
  quotation: QuotationCreateOneWithoutPaymentInput
  Invoice?: Maybe<InvoiceCreateOneWithoutPaymentInput>
}

type PaymentCreateManyWithoutCustomerInput = {
  create?: Maybe<Array<PaymentCreateWithoutCustomerInput>>
  connect?: Maybe<Array<PaymentWhereUniqueInput>>
}

type PaymentCreateManyWithoutSalemanInput = {
  create?: Maybe<Array<PaymentCreateWithoutSalemanInput>>
  connect?: Maybe<Array<PaymentWhereUniqueInput>>
}

type PaymentCreateOneWithoutInvoiceInput = {
  create?: Maybe<PaymentCreateWithoutInvoiceInput>
  connect?: Maybe<PaymentWhereUniqueInput>
}

type PaymentCreateOneWithoutQuotationInput = {
  create?: Maybe<PaymentCreateWithoutQuotationInput>
  connect?: Maybe<PaymentWhereUniqueInput>
}

type PaymentCreateWithoutCustomerInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  amount: Scalars['String']
  saleman: SalemanCreateOneWithoutPaymentsInput
  quotation: QuotationCreateOneWithoutPaymentInput
  Invoice?: Maybe<InvoiceCreateOneWithoutPaymentInput>
}

type PaymentCreateWithoutInvoiceInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  amount: Scalars['String']
  customer: UserCreateOneWithoutPaymentsInput
  saleman: SalemanCreateOneWithoutPaymentsInput
  quotation: QuotationCreateOneWithoutPaymentInput
}

type PaymentCreateWithoutQuotationInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  amount: Scalars['String']
  customer: UserCreateOneWithoutPaymentsInput
  saleman: SalemanCreateOneWithoutPaymentsInput
  Invoice?: Maybe<InvoiceCreateOneWithoutPaymentInput>
}

type PaymentCreateWithoutSalemanInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  amount: Scalars['String']
  customer: UserCreateOneWithoutPaymentsInput
  quotation: QuotationCreateOneWithoutPaymentInput
  Invoice?: Maybe<InvoiceCreateOneWithoutPaymentInput>
}

type PaymentEdge = {
  __typename?: 'PaymentEdge'
  node: Payment
  cursor: Scalars['String']
}

enum PaymentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  DocIdAsc = 'docId_ASC',
  DocIdDesc = 'docId_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

type PaymentPreviousValues = {
  __typename?: 'PaymentPreviousValues'
  id: Scalars['ID']
  docId: Scalars['String']
  amount: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

type PaymentScalarWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  docId?: Maybe<Scalars['String']>
  docId_not?: Maybe<Scalars['String']>
  docId_in?: Maybe<Array<Scalars['String']>>
  docId_not_in?: Maybe<Array<Scalars['String']>>
  docId_lt?: Maybe<Scalars['String']>
  docId_lte?: Maybe<Scalars['String']>
  docId_gt?: Maybe<Scalars['String']>
  docId_gte?: Maybe<Scalars['String']>
  docId_contains?: Maybe<Scalars['String']>
  docId_not_contains?: Maybe<Scalars['String']>
  docId_starts_with?: Maybe<Scalars['String']>
  docId_not_starts_with?: Maybe<Scalars['String']>
  docId_ends_with?: Maybe<Scalars['String']>
  docId_not_ends_with?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['String']>
  amount_not?: Maybe<Scalars['String']>
  amount_in?: Maybe<Array<Scalars['String']>>
  amount_not_in?: Maybe<Array<Scalars['String']>>
  amount_lt?: Maybe<Scalars['String']>
  amount_lte?: Maybe<Scalars['String']>
  amount_gt?: Maybe<Scalars['String']>
  amount_gte?: Maybe<Scalars['String']>
  amount_contains?: Maybe<Scalars['String']>
  amount_not_contains?: Maybe<Scalars['String']>
  amount_starts_with?: Maybe<Scalars['String']>
  amount_not_starts_with?: Maybe<Scalars['String']>
  amount_ends_with?: Maybe<Scalars['String']>
  amount_not_ends_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  AND?: Maybe<Array<PaymentScalarWhereInput>>
  OR?: Maybe<Array<PaymentScalarWhereInput>>
  NOT?: Maybe<Array<PaymentScalarWhereInput>>
}

type PaymentSubscriptionPayload = {
  __typename?: 'PaymentSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<Payment>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<PaymentPreviousValues>
}

type PaymentSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>
  updatedFields_contains?: Maybe<Scalars['String']>
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<PaymentWhereInput>
  AND?: Maybe<Array<PaymentSubscriptionWhereInput>>
  OR?: Maybe<Array<PaymentSubscriptionWhereInput>>
  NOT?: Maybe<Array<PaymentSubscriptionWhereInput>>
}

type PaymentUpdateInput = {
  docId?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['String']>
  customer?: Maybe<UserUpdateOneRequiredWithoutPaymentsInput>
  saleman?: Maybe<SalemanUpdateOneRequiredWithoutPaymentsInput>
  quotation?: Maybe<QuotationUpdateOneRequiredWithoutPaymentInput>
  Invoice?: Maybe<InvoiceUpdateOneWithoutPaymentInput>
}

type PaymentUpdateManyDataInput = {
  docId?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['String']>
}

type PaymentUpdateManyMutationInput = {
  docId?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['String']>
}

type PaymentUpdateManyWithoutCustomerInput = {
  create?: Maybe<Array<PaymentCreateWithoutCustomerInput>>
  delete?: Maybe<Array<PaymentWhereUniqueInput>>
  connect?: Maybe<Array<PaymentWhereUniqueInput>>
  set?: Maybe<Array<PaymentWhereUniqueInput>>
  disconnect?: Maybe<Array<PaymentWhereUniqueInput>>
  update?: Maybe<Array<PaymentUpdateWithWhereUniqueWithoutCustomerInput>>
  upsert?: Maybe<Array<PaymentUpsertWithWhereUniqueWithoutCustomerInput>>
  deleteMany?: Maybe<Array<PaymentScalarWhereInput>>
  updateMany?: Maybe<Array<PaymentUpdateManyWithWhereNestedInput>>
}

type PaymentUpdateManyWithoutSalemanInput = {
  create?: Maybe<Array<PaymentCreateWithoutSalemanInput>>
  delete?: Maybe<Array<PaymentWhereUniqueInput>>
  connect?: Maybe<Array<PaymentWhereUniqueInput>>
  set?: Maybe<Array<PaymentWhereUniqueInput>>
  disconnect?: Maybe<Array<PaymentWhereUniqueInput>>
  update?: Maybe<Array<PaymentUpdateWithWhereUniqueWithoutSalemanInput>>
  upsert?: Maybe<Array<PaymentUpsertWithWhereUniqueWithoutSalemanInput>>
  deleteMany?: Maybe<Array<PaymentScalarWhereInput>>
  updateMany?: Maybe<Array<PaymentUpdateManyWithWhereNestedInput>>
}

type PaymentUpdateManyWithWhereNestedInput = {
  where: PaymentScalarWhereInput
  data: PaymentUpdateManyDataInput
}

type PaymentUpdateOneWithoutInvoiceInput = {
  create?: Maybe<PaymentCreateWithoutInvoiceInput>
  update?: Maybe<PaymentUpdateWithoutInvoiceDataInput>
  upsert?: Maybe<PaymentUpsertWithoutInvoiceInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  connect?: Maybe<PaymentWhereUniqueInput>
}

type PaymentUpdateOneWithoutQuotationInput = {
  create?: Maybe<PaymentCreateWithoutQuotationInput>
  update?: Maybe<PaymentUpdateWithoutQuotationDataInput>
  upsert?: Maybe<PaymentUpsertWithoutQuotationInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  connect?: Maybe<PaymentWhereUniqueInput>
}

type PaymentUpdateWithoutCustomerDataInput = {
  docId?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['String']>
  saleman?: Maybe<SalemanUpdateOneRequiredWithoutPaymentsInput>
  quotation?: Maybe<QuotationUpdateOneRequiredWithoutPaymentInput>
  Invoice?: Maybe<InvoiceUpdateOneWithoutPaymentInput>
}

type PaymentUpdateWithoutInvoiceDataInput = {
  docId?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['String']>
  customer?: Maybe<UserUpdateOneRequiredWithoutPaymentsInput>
  saleman?: Maybe<SalemanUpdateOneRequiredWithoutPaymentsInput>
  quotation?: Maybe<QuotationUpdateOneRequiredWithoutPaymentInput>
}

type PaymentUpdateWithoutQuotationDataInput = {
  docId?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['String']>
  customer?: Maybe<UserUpdateOneRequiredWithoutPaymentsInput>
  saleman?: Maybe<SalemanUpdateOneRequiredWithoutPaymentsInput>
  Invoice?: Maybe<InvoiceUpdateOneWithoutPaymentInput>
}

type PaymentUpdateWithoutSalemanDataInput = {
  docId?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['String']>
  customer?: Maybe<UserUpdateOneRequiredWithoutPaymentsInput>
  quotation?: Maybe<QuotationUpdateOneRequiredWithoutPaymentInput>
  Invoice?: Maybe<InvoiceUpdateOneWithoutPaymentInput>
}

type PaymentUpdateWithWhereUniqueWithoutCustomerInput = {
  where: PaymentWhereUniqueInput
  data: PaymentUpdateWithoutCustomerDataInput
}

type PaymentUpdateWithWhereUniqueWithoutSalemanInput = {
  where: PaymentWhereUniqueInput
  data: PaymentUpdateWithoutSalemanDataInput
}

type PaymentUpsertWithoutInvoiceInput = {
  update: PaymentUpdateWithoutInvoiceDataInput
  create: PaymentCreateWithoutInvoiceInput
}

type PaymentUpsertWithoutQuotationInput = {
  update: PaymentUpdateWithoutQuotationDataInput
  create: PaymentCreateWithoutQuotationInput
}

type PaymentUpsertWithWhereUniqueWithoutCustomerInput = {
  where: PaymentWhereUniqueInput
  update: PaymentUpdateWithoutCustomerDataInput
  create: PaymentCreateWithoutCustomerInput
}

type PaymentUpsertWithWhereUniqueWithoutSalemanInput = {
  where: PaymentWhereUniqueInput
  update: PaymentUpdateWithoutSalemanDataInput
  create: PaymentCreateWithoutSalemanInput
}

type PaymentWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  docId?: Maybe<Scalars['String']>
  docId_not?: Maybe<Scalars['String']>
  docId_in?: Maybe<Array<Scalars['String']>>
  docId_not_in?: Maybe<Array<Scalars['String']>>
  docId_lt?: Maybe<Scalars['String']>
  docId_lte?: Maybe<Scalars['String']>
  docId_gt?: Maybe<Scalars['String']>
  docId_gte?: Maybe<Scalars['String']>
  docId_contains?: Maybe<Scalars['String']>
  docId_not_contains?: Maybe<Scalars['String']>
  docId_starts_with?: Maybe<Scalars['String']>
  docId_not_starts_with?: Maybe<Scalars['String']>
  docId_ends_with?: Maybe<Scalars['String']>
  docId_not_ends_with?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['String']>
  amount_not?: Maybe<Scalars['String']>
  amount_in?: Maybe<Array<Scalars['String']>>
  amount_not_in?: Maybe<Array<Scalars['String']>>
  amount_lt?: Maybe<Scalars['String']>
  amount_lte?: Maybe<Scalars['String']>
  amount_gt?: Maybe<Scalars['String']>
  amount_gte?: Maybe<Scalars['String']>
  amount_contains?: Maybe<Scalars['String']>
  amount_not_contains?: Maybe<Scalars['String']>
  amount_starts_with?: Maybe<Scalars['String']>
  amount_not_starts_with?: Maybe<Scalars['String']>
  amount_ends_with?: Maybe<Scalars['String']>
  amount_not_ends_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  customer?: Maybe<UserWhereInput>
  saleman?: Maybe<SalemanWhereInput>
  quotation?: Maybe<QuotationWhereInput>
  Invoice?: Maybe<InvoiceWhereInput>
  AND?: Maybe<Array<PaymentWhereInput>>
  OR?: Maybe<Array<PaymentWhereInput>>
  NOT?: Maybe<Array<PaymentWhereInput>>
}

type PaymentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

type ProductItem = {
  __typename?: 'ProductItem'
  id: Scalars['ID']
  name: Scalars['String']
  price: Scalars['String']
  salePrice: Scalars['String']
  brand: Scalars['String']
  unitType: Scalars['String']
  description?: Maybe<Scalars['String']>
  MenuDetail: Scalars['String']
  TermDetail: Scalars['String']
  amount: Scalars['Int']
  isPublished: Scalars['Boolean']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  category: Category
  shoppingCart?: Maybe<ShoppingCart>
  quotation?: Maybe<Quotation>
  image?: Maybe<Scalars['String']>
  relatedProduct?: Maybe<Array<ProductItem>>
}

type ProductItemRelatedProductArgs = {
  where?: Maybe<ProductItemWhereInput>
  orderBy?: Maybe<ProductItemOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type ProductItemConnection = {
  __typename?: 'ProductItemConnection'
  pageInfo: PageInfo
  edges: Array<Maybe<ProductItemEdge>>
  aggregate: AggregateProductItem
}

type ProductItemCreateInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  price: Scalars['String']
  salePrice: Scalars['String']
  brand: Scalars['String']
  unitType: Scalars['String']
  description?: Maybe<Scalars['String']>
  MenuDetail: Scalars['String']
  TermDetail: Scalars['String']
  amount: Scalars['Int']
  isPublished?: Maybe<Scalars['Boolean']>
  category: CategoryCreateOneWithoutProductItemInput
  shoppingCart?: Maybe<ShoppingCartCreateOneInput>
  quotation?: Maybe<QuotationCreateOneWithoutProductItemsInput>
  image?: Maybe<Scalars['String']>
  relatedProduct?: Maybe<ProductItemCreateManyInput>
}

type ProductItemCreateManyInput = {
  create?: Maybe<Array<ProductItemCreateInput>>
  connect?: Maybe<Array<ProductItemWhereUniqueInput>>
}

type ProductItemCreateManyWithoutCategoryInput = {
  create?: Maybe<Array<ProductItemCreateWithoutCategoryInput>>
  connect?: Maybe<Array<ProductItemWhereUniqueInput>>
}

type ProductItemCreateManyWithoutQuotationInput = {
  create?: Maybe<Array<ProductItemCreateWithoutQuotationInput>>
  connect?: Maybe<Array<ProductItemWhereUniqueInput>>
}

type ProductItemCreateOneInput = {
  create?: Maybe<ProductItemCreateInput>
  connect?: Maybe<ProductItemWhereUniqueInput>
}

type ProductItemCreateWithoutCategoryInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  price: Scalars['String']
  salePrice: Scalars['String']
  brand: Scalars['String']
  unitType: Scalars['String']
  description?: Maybe<Scalars['String']>
  MenuDetail: Scalars['String']
  TermDetail: Scalars['String']
  amount: Scalars['Int']
  isPublished?: Maybe<Scalars['Boolean']>
  shoppingCart?: Maybe<ShoppingCartCreateOneInput>
  quotation?: Maybe<QuotationCreateOneWithoutProductItemsInput>
  image?: Maybe<Scalars['String']>
  relatedProduct?: Maybe<ProductItemCreateManyInput>
}

type ProductItemCreateWithoutQuotationInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  price: Scalars['String']
  salePrice: Scalars['String']
  brand: Scalars['String']
  unitType: Scalars['String']
  description?: Maybe<Scalars['String']>
  MenuDetail: Scalars['String']
  TermDetail: Scalars['String']
  amount: Scalars['Int']
  isPublished?: Maybe<Scalars['Boolean']>
  category: CategoryCreateOneWithoutProductItemInput
  shoppingCart?: Maybe<ShoppingCartCreateOneInput>
  image?: Maybe<Scalars['String']>
  relatedProduct?: Maybe<ProductItemCreateManyInput>
}

type ProductItemEdge = {
  __typename?: 'ProductItemEdge'
  node: ProductItem
  cursor: Scalars['String']
}

enum ProductItemOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SalePriceAsc = 'salePrice_ASC',
  SalePriceDesc = 'salePrice_DESC',
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  UnitTypeAsc = 'unitType_ASC',
  UnitTypeDesc = 'unitType_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MenuDetailAsc = 'MenuDetail_ASC',
  MenuDetailDesc = 'MenuDetail_DESC',
  TermDetailAsc = 'TermDetail_ASC',
  TermDetailDesc = 'TermDetail_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  IsPublishedAsc = 'isPublished_ASC',
  IsPublishedDesc = 'isPublished_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
}

type ProductItemPreviousValues = {
  __typename?: 'ProductItemPreviousValues'
  id: Scalars['ID']
  name: Scalars['String']
  price: Scalars['String']
  salePrice: Scalars['String']
  brand: Scalars['String']
  unitType: Scalars['String']
  description?: Maybe<Scalars['String']>
  MenuDetail: Scalars['String']
  TermDetail: Scalars['String']
  amount: Scalars['Int']
  isPublished: Scalars['Boolean']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  image?: Maybe<Scalars['String']>
}

type ProductItemScalarWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['String']>
  price_not?: Maybe<Scalars['String']>
  price_in?: Maybe<Array<Scalars['String']>>
  price_not_in?: Maybe<Array<Scalars['String']>>
  price_lt?: Maybe<Scalars['String']>
  price_lte?: Maybe<Scalars['String']>
  price_gt?: Maybe<Scalars['String']>
  price_gte?: Maybe<Scalars['String']>
  price_contains?: Maybe<Scalars['String']>
  price_not_contains?: Maybe<Scalars['String']>
  price_starts_with?: Maybe<Scalars['String']>
  price_not_starts_with?: Maybe<Scalars['String']>
  price_ends_with?: Maybe<Scalars['String']>
  price_not_ends_with?: Maybe<Scalars['String']>
  salePrice?: Maybe<Scalars['String']>
  salePrice_not?: Maybe<Scalars['String']>
  salePrice_in?: Maybe<Array<Scalars['String']>>
  salePrice_not_in?: Maybe<Array<Scalars['String']>>
  salePrice_lt?: Maybe<Scalars['String']>
  salePrice_lte?: Maybe<Scalars['String']>
  salePrice_gt?: Maybe<Scalars['String']>
  salePrice_gte?: Maybe<Scalars['String']>
  salePrice_contains?: Maybe<Scalars['String']>
  salePrice_not_contains?: Maybe<Scalars['String']>
  salePrice_starts_with?: Maybe<Scalars['String']>
  salePrice_not_starts_with?: Maybe<Scalars['String']>
  salePrice_ends_with?: Maybe<Scalars['String']>
  salePrice_not_ends_with?: Maybe<Scalars['String']>
  brand?: Maybe<Scalars['String']>
  brand_not?: Maybe<Scalars['String']>
  brand_in?: Maybe<Array<Scalars['String']>>
  brand_not_in?: Maybe<Array<Scalars['String']>>
  brand_lt?: Maybe<Scalars['String']>
  brand_lte?: Maybe<Scalars['String']>
  brand_gt?: Maybe<Scalars['String']>
  brand_gte?: Maybe<Scalars['String']>
  brand_contains?: Maybe<Scalars['String']>
  brand_not_contains?: Maybe<Scalars['String']>
  brand_starts_with?: Maybe<Scalars['String']>
  brand_not_starts_with?: Maybe<Scalars['String']>
  brand_ends_with?: Maybe<Scalars['String']>
  brand_not_ends_with?: Maybe<Scalars['String']>
  unitType?: Maybe<Scalars['String']>
  unitType_not?: Maybe<Scalars['String']>
  unitType_in?: Maybe<Array<Scalars['String']>>
  unitType_not_in?: Maybe<Array<Scalars['String']>>
  unitType_lt?: Maybe<Scalars['String']>
  unitType_lte?: Maybe<Scalars['String']>
  unitType_gt?: Maybe<Scalars['String']>
  unitType_gte?: Maybe<Scalars['String']>
  unitType_contains?: Maybe<Scalars['String']>
  unitType_not_contains?: Maybe<Scalars['String']>
  unitType_starts_with?: Maybe<Scalars['String']>
  unitType_not_starts_with?: Maybe<Scalars['String']>
  unitType_ends_with?: Maybe<Scalars['String']>
  unitType_not_ends_with?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  description_not?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Scalars['String']>>
  description_not_in?: Maybe<Array<Scalars['String']>>
  description_lt?: Maybe<Scalars['String']>
  description_lte?: Maybe<Scalars['String']>
  description_gt?: Maybe<Scalars['String']>
  description_gte?: Maybe<Scalars['String']>
  description_contains?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  description_starts_with?: Maybe<Scalars['String']>
  description_not_starts_with?: Maybe<Scalars['String']>
  description_ends_with?: Maybe<Scalars['String']>
  description_not_ends_with?: Maybe<Scalars['String']>
  MenuDetail?: Maybe<Scalars['String']>
  MenuDetail_not?: Maybe<Scalars['String']>
  MenuDetail_in?: Maybe<Array<Scalars['String']>>
  MenuDetail_not_in?: Maybe<Array<Scalars['String']>>
  MenuDetail_lt?: Maybe<Scalars['String']>
  MenuDetail_lte?: Maybe<Scalars['String']>
  MenuDetail_gt?: Maybe<Scalars['String']>
  MenuDetail_gte?: Maybe<Scalars['String']>
  MenuDetail_contains?: Maybe<Scalars['String']>
  MenuDetail_not_contains?: Maybe<Scalars['String']>
  MenuDetail_starts_with?: Maybe<Scalars['String']>
  MenuDetail_not_starts_with?: Maybe<Scalars['String']>
  MenuDetail_ends_with?: Maybe<Scalars['String']>
  MenuDetail_not_ends_with?: Maybe<Scalars['String']>
  TermDetail?: Maybe<Scalars['String']>
  TermDetail_not?: Maybe<Scalars['String']>
  TermDetail_in?: Maybe<Array<Scalars['String']>>
  TermDetail_not_in?: Maybe<Array<Scalars['String']>>
  TermDetail_lt?: Maybe<Scalars['String']>
  TermDetail_lte?: Maybe<Scalars['String']>
  TermDetail_gt?: Maybe<Scalars['String']>
  TermDetail_gte?: Maybe<Scalars['String']>
  TermDetail_contains?: Maybe<Scalars['String']>
  TermDetail_not_contains?: Maybe<Scalars['String']>
  TermDetail_starts_with?: Maybe<Scalars['String']>
  TermDetail_not_starts_with?: Maybe<Scalars['String']>
  TermDetail_ends_with?: Maybe<Scalars['String']>
  TermDetail_not_ends_with?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  amount_not?: Maybe<Scalars['Int']>
  amount_in?: Maybe<Array<Scalars['Int']>>
  amount_not_in?: Maybe<Array<Scalars['Int']>>
  amount_lt?: Maybe<Scalars['Int']>
  amount_lte?: Maybe<Scalars['Int']>
  amount_gt?: Maybe<Scalars['Int']>
  amount_gte?: Maybe<Scalars['Int']>
  isPublished?: Maybe<Scalars['Boolean']>
  isPublished_not?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  image?: Maybe<Scalars['String']>
  image_not?: Maybe<Scalars['String']>
  image_in?: Maybe<Array<Scalars['String']>>
  image_not_in?: Maybe<Array<Scalars['String']>>
  image_lt?: Maybe<Scalars['String']>
  image_lte?: Maybe<Scalars['String']>
  image_gt?: Maybe<Scalars['String']>
  image_gte?: Maybe<Scalars['String']>
  image_contains?: Maybe<Scalars['String']>
  image_not_contains?: Maybe<Scalars['String']>
  image_starts_with?: Maybe<Scalars['String']>
  image_not_starts_with?: Maybe<Scalars['String']>
  image_ends_with?: Maybe<Scalars['String']>
  image_not_ends_with?: Maybe<Scalars['String']>
  AND?: Maybe<Array<ProductItemScalarWhereInput>>
  OR?: Maybe<Array<ProductItemScalarWhereInput>>
  NOT?: Maybe<Array<ProductItemScalarWhereInput>>
}

type ProductItemSubscriptionPayload = {
  __typename?: 'ProductItemSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<ProductItem>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<ProductItemPreviousValues>
}

type ProductItemSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>
  updatedFields_contains?: Maybe<Scalars['String']>
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<ProductItemWhereInput>
  AND?: Maybe<Array<ProductItemSubscriptionWhereInput>>
  OR?: Maybe<Array<ProductItemSubscriptionWhereInput>>
  NOT?: Maybe<Array<ProductItemSubscriptionWhereInput>>
}

type ProductItemUpdateDataInput = {
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['String']>
  salePrice?: Maybe<Scalars['String']>
  brand?: Maybe<Scalars['String']>
  unitType?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  MenuDetail?: Maybe<Scalars['String']>
  TermDetail?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  isPublished?: Maybe<Scalars['Boolean']>
  category?: Maybe<CategoryUpdateOneRequiredWithoutProductItemInput>
  shoppingCart?: Maybe<ShoppingCartUpdateOneInput>
  quotation?: Maybe<QuotationUpdateOneWithoutProductItemsInput>
  image?: Maybe<Scalars['String']>
  relatedProduct?: Maybe<ProductItemUpdateManyInput>
}

type ProductItemUpdateInput = {
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['String']>
  salePrice?: Maybe<Scalars['String']>
  brand?: Maybe<Scalars['String']>
  unitType?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  MenuDetail?: Maybe<Scalars['String']>
  TermDetail?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  isPublished?: Maybe<Scalars['Boolean']>
  category?: Maybe<CategoryUpdateOneRequiredWithoutProductItemInput>
  shoppingCart?: Maybe<ShoppingCartUpdateOneInput>
  quotation?: Maybe<QuotationUpdateOneWithoutProductItemsInput>
  image?: Maybe<Scalars['String']>
  relatedProduct?: Maybe<ProductItemUpdateManyInput>
}

type ProductItemUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['String']>
  salePrice?: Maybe<Scalars['String']>
  brand?: Maybe<Scalars['String']>
  unitType?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  MenuDetail?: Maybe<Scalars['String']>
  TermDetail?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  isPublished?: Maybe<Scalars['Boolean']>
  image?: Maybe<Scalars['String']>
}

type ProductItemUpdateManyInput = {
  create?: Maybe<Array<ProductItemCreateInput>>
  update?: Maybe<Array<ProductItemUpdateWithWhereUniqueNestedInput>>
  upsert?: Maybe<Array<ProductItemUpsertWithWhereUniqueNestedInput>>
  delete?: Maybe<Array<ProductItemWhereUniqueInput>>
  connect?: Maybe<Array<ProductItemWhereUniqueInput>>
  set?: Maybe<Array<ProductItemWhereUniqueInput>>
  disconnect?: Maybe<Array<ProductItemWhereUniqueInput>>
  deleteMany?: Maybe<Array<ProductItemScalarWhereInput>>
  updateMany?: Maybe<Array<ProductItemUpdateManyWithWhereNestedInput>>
}

type ProductItemUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['String']>
  salePrice?: Maybe<Scalars['String']>
  brand?: Maybe<Scalars['String']>
  unitType?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  MenuDetail?: Maybe<Scalars['String']>
  TermDetail?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  isPublished?: Maybe<Scalars['Boolean']>
  image?: Maybe<Scalars['String']>
}

type ProductItemUpdateManyWithoutCategoryInput = {
  create?: Maybe<Array<ProductItemCreateWithoutCategoryInput>>
  delete?: Maybe<Array<ProductItemWhereUniqueInput>>
  connect?: Maybe<Array<ProductItemWhereUniqueInput>>
  set?: Maybe<Array<ProductItemWhereUniqueInput>>
  disconnect?: Maybe<Array<ProductItemWhereUniqueInput>>
  update?: Maybe<Array<ProductItemUpdateWithWhereUniqueWithoutCategoryInput>>
  upsert?: Maybe<Array<ProductItemUpsertWithWhereUniqueWithoutCategoryInput>>
  deleteMany?: Maybe<Array<ProductItemScalarWhereInput>>
  updateMany?: Maybe<Array<ProductItemUpdateManyWithWhereNestedInput>>
}

type ProductItemUpdateManyWithoutQuotationInput = {
  create?: Maybe<Array<ProductItemCreateWithoutQuotationInput>>
  delete?: Maybe<Array<ProductItemWhereUniqueInput>>
  connect?: Maybe<Array<ProductItemWhereUniqueInput>>
  set?: Maybe<Array<ProductItemWhereUniqueInput>>
  disconnect?: Maybe<Array<ProductItemWhereUniqueInput>>
  update?: Maybe<Array<ProductItemUpdateWithWhereUniqueWithoutQuotationInput>>
  upsert?: Maybe<Array<ProductItemUpsertWithWhereUniqueWithoutQuotationInput>>
  deleteMany?: Maybe<Array<ProductItemScalarWhereInput>>
  updateMany?: Maybe<Array<ProductItemUpdateManyWithWhereNestedInput>>
}

type ProductItemUpdateManyWithWhereNestedInput = {
  where: ProductItemScalarWhereInput
  data: ProductItemUpdateManyDataInput
}

type ProductItemUpdateOneRequiredInput = {
  create?: Maybe<ProductItemCreateInput>
  update?: Maybe<ProductItemUpdateDataInput>
  upsert?: Maybe<ProductItemUpsertNestedInput>
  connect?: Maybe<ProductItemWhereUniqueInput>
}

type ProductItemUpdateWithoutCategoryDataInput = {
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['String']>
  salePrice?: Maybe<Scalars['String']>
  brand?: Maybe<Scalars['String']>
  unitType?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  MenuDetail?: Maybe<Scalars['String']>
  TermDetail?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  isPublished?: Maybe<Scalars['Boolean']>
  shoppingCart?: Maybe<ShoppingCartUpdateOneInput>
  quotation?: Maybe<QuotationUpdateOneWithoutProductItemsInput>
  image?: Maybe<Scalars['String']>
  relatedProduct?: Maybe<ProductItemUpdateManyInput>
}

type ProductItemUpdateWithoutQuotationDataInput = {
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['String']>
  salePrice?: Maybe<Scalars['String']>
  brand?: Maybe<Scalars['String']>
  unitType?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  MenuDetail?: Maybe<Scalars['String']>
  TermDetail?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  isPublished?: Maybe<Scalars['Boolean']>
  category?: Maybe<CategoryUpdateOneRequiredWithoutProductItemInput>
  shoppingCart?: Maybe<ShoppingCartUpdateOneInput>
  image?: Maybe<Scalars['String']>
  relatedProduct?: Maybe<ProductItemUpdateManyInput>
}

type ProductItemUpdateWithWhereUniqueNestedInput = {
  where: ProductItemWhereUniqueInput
  data: ProductItemUpdateDataInput
}

type ProductItemUpdateWithWhereUniqueWithoutCategoryInput = {
  where: ProductItemWhereUniqueInput
  data: ProductItemUpdateWithoutCategoryDataInput
}

type ProductItemUpdateWithWhereUniqueWithoutQuotationInput = {
  where: ProductItemWhereUniqueInput
  data: ProductItemUpdateWithoutQuotationDataInput
}

type ProductItemUpsertNestedInput = {
  update: ProductItemUpdateDataInput
  create: ProductItemCreateInput
}

type ProductItemUpsertWithWhereUniqueNestedInput = {
  where: ProductItemWhereUniqueInput
  update: ProductItemUpdateDataInput
  create: ProductItemCreateInput
}

type ProductItemUpsertWithWhereUniqueWithoutCategoryInput = {
  where: ProductItemWhereUniqueInput
  update: ProductItemUpdateWithoutCategoryDataInput
  create: ProductItemCreateWithoutCategoryInput
}

type ProductItemUpsertWithWhereUniqueWithoutQuotationInput = {
  where: ProductItemWhereUniqueInput
  update: ProductItemUpdateWithoutQuotationDataInput
  create: ProductItemCreateWithoutQuotationInput
}

type ProductItemWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['String']>
  price_not?: Maybe<Scalars['String']>
  price_in?: Maybe<Array<Scalars['String']>>
  price_not_in?: Maybe<Array<Scalars['String']>>
  price_lt?: Maybe<Scalars['String']>
  price_lte?: Maybe<Scalars['String']>
  price_gt?: Maybe<Scalars['String']>
  price_gte?: Maybe<Scalars['String']>
  price_contains?: Maybe<Scalars['String']>
  price_not_contains?: Maybe<Scalars['String']>
  price_starts_with?: Maybe<Scalars['String']>
  price_not_starts_with?: Maybe<Scalars['String']>
  price_ends_with?: Maybe<Scalars['String']>
  price_not_ends_with?: Maybe<Scalars['String']>
  salePrice?: Maybe<Scalars['String']>
  salePrice_not?: Maybe<Scalars['String']>
  salePrice_in?: Maybe<Array<Scalars['String']>>
  salePrice_not_in?: Maybe<Array<Scalars['String']>>
  salePrice_lt?: Maybe<Scalars['String']>
  salePrice_lte?: Maybe<Scalars['String']>
  salePrice_gt?: Maybe<Scalars['String']>
  salePrice_gte?: Maybe<Scalars['String']>
  salePrice_contains?: Maybe<Scalars['String']>
  salePrice_not_contains?: Maybe<Scalars['String']>
  salePrice_starts_with?: Maybe<Scalars['String']>
  salePrice_not_starts_with?: Maybe<Scalars['String']>
  salePrice_ends_with?: Maybe<Scalars['String']>
  salePrice_not_ends_with?: Maybe<Scalars['String']>
  brand?: Maybe<Scalars['String']>
  brand_not?: Maybe<Scalars['String']>
  brand_in?: Maybe<Array<Scalars['String']>>
  brand_not_in?: Maybe<Array<Scalars['String']>>
  brand_lt?: Maybe<Scalars['String']>
  brand_lte?: Maybe<Scalars['String']>
  brand_gt?: Maybe<Scalars['String']>
  brand_gte?: Maybe<Scalars['String']>
  brand_contains?: Maybe<Scalars['String']>
  brand_not_contains?: Maybe<Scalars['String']>
  brand_starts_with?: Maybe<Scalars['String']>
  brand_not_starts_with?: Maybe<Scalars['String']>
  brand_ends_with?: Maybe<Scalars['String']>
  brand_not_ends_with?: Maybe<Scalars['String']>
  unitType?: Maybe<Scalars['String']>
  unitType_not?: Maybe<Scalars['String']>
  unitType_in?: Maybe<Array<Scalars['String']>>
  unitType_not_in?: Maybe<Array<Scalars['String']>>
  unitType_lt?: Maybe<Scalars['String']>
  unitType_lte?: Maybe<Scalars['String']>
  unitType_gt?: Maybe<Scalars['String']>
  unitType_gte?: Maybe<Scalars['String']>
  unitType_contains?: Maybe<Scalars['String']>
  unitType_not_contains?: Maybe<Scalars['String']>
  unitType_starts_with?: Maybe<Scalars['String']>
  unitType_not_starts_with?: Maybe<Scalars['String']>
  unitType_ends_with?: Maybe<Scalars['String']>
  unitType_not_ends_with?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  description_not?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Scalars['String']>>
  description_not_in?: Maybe<Array<Scalars['String']>>
  description_lt?: Maybe<Scalars['String']>
  description_lte?: Maybe<Scalars['String']>
  description_gt?: Maybe<Scalars['String']>
  description_gte?: Maybe<Scalars['String']>
  description_contains?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  description_starts_with?: Maybe<Scalars['String']>
  description_not_starts_with?: Maybe<Scalars['String']>
  description_ends_with?: Maybe<Scalars['String']>
  description_not_ends_with?: Maybe<Scalars['String']>
  MenuDetail?: Maybe<Scalars['String']>
  MenuDetail_not?: Maybe<Scalars['String']>
  MenuDetail_in?: Maybe<Array<Scalars['String']>>
  MenuDetail_not_in?: Maybe<Array<Scalars['String']>>
  MenuDetail_lt?: Maybe<Scalars['String']>
  MenuDetail_lte?: Maybe<Scalars['String']>
  MenuDetail_gt?: Maybe<Scalars['String']>
  MenuDetail_gte?: Maybe<Scalars['String']>
  MenuDetail_contains?: Maybe<Scalars['String']>
  MenuDetail_not_contains?: Maybe<Scalars['String']>
  MenuDetail_starts_with?: Maybe<Scalars['String']>
  MenuDetail_not_starts_with?: Maybe<Scalars['String']>
  MenuDetail_ends_with?: Maybe<Scalars['String']>
  MenuDetail_not_ends_with?: Maybe<Scalars['String']>
  TermDetail?: Maybe<Scalars['String']>
  TermDetail_not?: Maybe<Scalars['String']>
  TermDetail_in?: Maybe<Array<Scalars['String']>>
  TermDetail_not_in?: Maybe<Array<Scalars['String']>>
  TermDetail_lt?: Maybe<Scalars['String']>
  TermDetail_lte?: Maybe<Scalars['String']>
  TermDetail_gt?: Maybe<Scalars['String']>
  TermDetail_gte?: Maybe<Scalars['String']>
  TermDetail_contains?: Maybe<Scalars['String']>
  TermDetail_not_contains?: Maybe<Scalars['String']>
  TermDetail_starts_with?: Maybe<Scalars['String']>
  TermDetail_not_starts_with?: Maybe<Scalars['String']>
  TermDetail_ends_with?: Maybe<Scalars['String']>
  TermDetail_not_ends_with?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  amount_not?: Maybe<Scalars['Int']>
  amount_in?: Maybe<Array<Scalars['Int']>>
  amount_not_in?: Maybe<Array<Scalars['Int']>>
  amount_lt?: Maybe<Scalars['Int']>
  amount_lte?: Maybe<Scalars['Int']>
  amount_gt?: Maybe<Scalars['Int']>
  amount_gte?: Maybe<Scalars['Int']>
  isPublished?: Maybe<Scalars['Boolean']>
  isPublished_not?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  category?: Maybe<CategoryWhereInput>
  shoppingCart?: Maybe<ShoppingCartWhereInput>
  quotation?: Maybe<QuotationWhereInput>
  image?: Maybe<Scalars['String']>
  image_not?: Maybe<Scalars['String']>
  image_in?: Maybe<Array<Scalars['String']>>
  image_not_in?: Maybe<Array<Scalars['String']>>
  image_lt?: Maybe<Scalars['String']>
  image_lte?: Maybe<Scalars['String']>
  image_gt?: Maybe<Scalars['String']>
  image_gte?: Maybe<Scalars['String']>
  image_contains?: Maybe<Scalars['String']>
  image_not_contains?: Maybe<Scalars['String']>
  image_starts_with?: Maybe<Scalars['String']>
  image_not_starts_with?: Maybe<Scalars['String']>
  image_ends_with?: Maybe<Scalars['String']>
  image_not_ends_with?: Maybe<Scalars['String']>
  relatedProduct_every?: Maybe<ProductItemWhereInput>
  relatedProduct_some?: Maybe<ProductItemWhereInput>
  relatedProduct_none?: Maybe<ProductItemWhereInput>
  AND?: Maybe<Array<ProductItemWhereInput>>
  OR?: Maybe<Array<ProductItemWhereInput>>
  NOT?: Maybe<Array<ProductItemWhereInput>>
}

type ProductItemWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

type Query = {
  __typename?: 'Query'
  address?: Maybe<Address>
  addresses: Array<Maybe<Address>>
  addressesConnection: AddressConnection
  category?: Maybe<Category>
  categories: Array<Maybe<Category>>
  categoriesConnection: CategoryConnection
  invoice?: Maybe<Invoice>
  invoices: Array<Maybe<Invoice>>
  invoicesConnection: InvoiceConnection
  payment?: Maybe<Payment>
  payments: Array<Maybe<Payment>>
  paymentsConnection: PaymentConnection
  productItem?: Maybe<ProductItem>
  productItems: Array<Maybe<ProductItem>>
  productItemsConnection: ProductItemConnection
  quotation?: Maybe<Quotation>
  quotations: Array<Maybe<Quotation>>
  quotationsConnection: QuotationConnection
  saleman?: Maybe<Saleman>
  salemen: Array<Maybe<Saleman>>
  salemenConnection: SalemanConnection
  shipping?: Maybe<Shipping>
  shippings: Array<Maybe<Shipping>>
  shippingsConnection: ShippingConnection
  shoppingCart?: Maybe<ShoppingCart>
  shoppingCarts: Array<Maybe<ShoppingCart>>
  shoppingCartsConnection: ShoppingCartConnection
  shoppingCartItem?: Maybe<ShoppingCartItem>
  shoppingCartItems: Array<Maybe<ShoppingCartItem>>
  shoppingCartItemsConnection: ShoppingCartItemConnection
  user?: Maybe<User>
  users: Array<Maybe<User>>
  usersConnection: UserConnection
  node?: Maybe<Node>
}

type QueryAddressArgs = {
  where: AddressWhereUniqueInput
}

type QueryAddressesArgs = {
  where?: Maybe<AddressWhereInput>
  orderBy?: Maybe<AddressOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryAddressesConnectionArgs = {
  where?: Maybe<AddressWhereInput>
  orderBy?: Maybe<AddressOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput
}

type QueryCategoriesArgs = {
  where?: Maybe<CategoryWhereInput>
  orderBy?: Maybe<CategoryOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryCategoriesConnectionArgs = {
  where?: Maybe<CategoryWhereInput>
  orderBy?: Maybe<CategoryOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryInvoiceArgs = {
  where: InvoiceWhereUniqueInput
}

type QueryInvoicesArgs = {
  where?: Maybe<InvoiceWhereInput>
  orderBy?: Maybe<InvoiceOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryInvoicesConnectionArgs = {
  where?: Maybe<InvoiceWhereInput>
  orderBy?: Maybe<InvoiceOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryPaymentArgs = {
  where: PaymentWhereUniqueInput
}

type QueryPaymentsArgs = {
  where?: Maybe<PaymentWhereInput>
  orderBy?: Maybe<PaymentOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryPaymentsConnectionArgs = {
  where?: Maybe<PaymentWhereInput>
  orderBy?: Maybe<PaymentOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryProductItemArgs = {
  where: ProductItemWhereUniqueInput
}

type QueryProductItemsArgs = {
  where?: Maybe<ProductItemWhereInput>
  orderBy?: Maybe<ProductItemOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryProductItemsConnectionArgs = {
  where?: Maybe<ProductItemWhereInput>
  orderBy?: Maybe<ProductItemOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryQuotationArgs = {
  where: QuotationWhereUniqueInput
}

type QueryQuotationsArgs = {
  where?: Maybe<QuotationWhereInput>
  orderBy?: Maybe<QuotationOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryQuotationsConnectionArgs = {
  where?: Maybe<QuotationWhereInput>
  orderBy?: Maybe<QuotationOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QuerySalemanArgs = {
  where: SalemanWhereUniqueInput
}

type QuerySalemenArgs = {
  where?: Maybe<SalemanWhereInput>
  orderBy?: Maybe<SalemanOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QuerySalemenConnectionArgs = {
  where?: Maybe<SalemanWhereInput>
  orderBy?: Maybe<SalemanOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryShippingArgs = {
  where: ShippingWhereUniqueInput
}

type QueryShippingsArgs = {
  where?: Maybe<ShippingWhereInput>
  orderBy?: Maybe<ShippingOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryShippingsConnectionArgs = {
  where?: Maybe<ShippingWhereInput>
  orderBy?: Maybe<ShippingOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryShoppingCartArgs = {
  where: ShoppingCartWhereUniqueInput
}

type QueryShoppingCartsArgs = {
  where?: Maybe<ShoppingCartWhereInput>
  orderBy?: Maybe<ShoppingCartOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryShoppingCartsConnectionArgs = {
  where?: Maybe<ShoppingCartWhereInput>
  orderBy?: Maybe<ShoppingCartOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryShoppingCartItemArgs = {
  where: ShoppingCartItemWhereUniqueInput
}

type QueryShoppingCartItemsArgs = {
  where?: Maybe<ShoppingCartItemWhereInput>
  orderBy?: Maybe<ShoppingCartItemOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryShoppingCartItemsConnectionArgs = {
  where?: Maybe<ShoppingCartItemWhereInput>
  orderBy?: Maybe<ShoppingCartItemOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryUserArgs = {
  where: UserWhereUniqueInput
}

type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>
  orderBy?: Maybe<UserOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>
  orderBy?: Maybe<UserOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QueryNodeArgs = {
  id: Scalars['ID']
}

type Quotation = {
  __typename?: 'Quotation'
  id: Scalars['ID']
  docId: Scalars['String']
  productItems?: Maybe<Array<ProductItem>>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  saleman: Saleman
  payment?: Maybe<Payment>
  shipping?: Maybe<Shipping>
  customer: User
}

type QuotationProductItemsArgs = {
  where?: Maybe<ProductItemWhereInput>
  orderBy?: Maybe<ProductItemOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type QuotationConnection = {
  __typename?: 'QuotationConnection'
  pageInfo: PageInfo
  edges: Array<Maybe<QuotationEdge>>
  aggregate: AggregateQuotation
}

type QuotationCreateInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  productItems?: Maybe<ProductItemCreateManyWithoutQuotationInput>
  saleman: SalemanCreateOneWithoutQuotationsInput
  payment?: Maybe<PaymentCreateOneWithoutQuotationInput>
  shipping?: Maybe<ShippingCreateOneWithoutQuotationInput>
  customer: UserCreateOneWithoutQuotationsInput
}

type QuotationCreateManyWithoutCustomerInput = {
  create?: Maybe<Array<QuotationCreateWithoutCustomerInput>>
  connect?: Maybe<Array<QuotationWhereUniqueInput>>
}

type QuotationCreateManyWithoutSalemanInput = {
  create?: Maybe<Array<QuotationCreateWithoutSalemanInput>>
  connect?: Maybe<Array<QuotationWhereUniqueInput>>
}

type QuotationCreateOneInput = {
  create?: Maybe<QuotationCreateInput>
  connect?: Maybe<QuotationWhereUniqueInput>
}

type QuotationCreateOneWithoutPaymentInput = {
  create?: Maybe<QuotationCreateWithoutPaymentInput>
  connect?: Maybe<QuotationWhereUniqueInput>
}

type QuotationCreateOneWithoutProductItemsInput = {
  create?: Maybe<QuotationCreateWithoutProductItemsInput>
  connect?: Maybe<QuotationWhereUniqueInput>
}

type QuotationCreateOneWithoutShippingInput = {
  create?: Maybe<QuotationCreateWithoutShippingInput>
  connect?: Maybe<QuotationWhereUniqueInput>
}

type QuotationCreateWithoutCustomerInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  productItems?: Maybe<ProductItemCreateManyWithoutQuotationInput>
  saleman: SalemanCreateOneWithoutQuotationsInput
  payment?: Maybe<PaymentCreateOneWithoutQuotationInput>
  shipping?: Maybe<ShippingCreateOneWithoutQuotationInput>
}

type QuotationCreateWithoutPaymentInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  productItems?: Maybe<ProductItemCreateManyWithoutQuotationInput>
  saleman: SalemanCreateOneWithoutQuotationsInput
  shipping?: Maybe<ShippingCreateOneWithoutQuotationInput>
  customer: UserCreateOneWithoutQuotationsInput
}

type QuotationCreateWithoutProductItemsInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  saleman: SalemanCreateOneWithoutQuotationsInput
  payment?: Maybe<PaymentCreateOneWithoutQuotationInput>
  shipping?: Maybe<ShippingCreateOneWithoutQuotationInput>
  customer: UserCreateOneWithoutQuotationsInput
}

type QuotationCreateWithoutSalemanInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  productItems?: Maybe<ProductItemCreateManyWithoutQuotationInput>
  payment?: Maybe<PaymentCreateOneWithoutQuotationInput>
  shipping?: Maybe<ShippingCreateOneWithoutQuotationInput>
  customer: UserCreateOneWithoutQuotationsInput
}

type QuotationCreateWithoutShippingInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  productItems?: Maybe<ProductItemCreateManyWithoutQuotationInput>
  saleman: SalemanCreateOneWithoutQuotationsInput
  payment?: Maybe<PaymentCreateOneWithoutQuotationInput>
  customer: UserCreateOneWithoutQuotationsInput
}

type QuotationEdge = {
  __typename?: 'QuotationEdge'
  node: Quotation
  cursor: Scalars['String']
}

enum QuotationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  DocIdAsc = 'docId_ASC',
  DocIdDesc = 'docId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

type QuotationPreviousValues = {
  __typename?: 'QuotationPreviousValues'
  id: Scalars['ID']
  docId: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

type QuotationScalarWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  docId?: Maybe<Scalars['String']>
  docId_not?: Maybe<Scalars['String']>
  docId_in?: Maybe<Array<Scalars['String']>>
  docId_not_in?: Maybe<Array<Scalars['String']>>
  docId_lt?: Maybe<Scalars['String']>
  docId_lte?: Maybe<Scalars['String']>
  docId_gt?: Maybe<Scalars['String']>
  docId_gte?: Maybe<Scalars['String']>
  docId_contains?: Maybe<Scalars['String']>
  docId_not_contains?: Maybe<Scalars['String']>
  docId_starts_with?: Maybe<Scalars['String']>
  docId_not_starts_with?: Maybe<Scalars['String']>
  docId_ends_with?: Maybe<Scalars['String']>
  docId_not_ends_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  AND?: Maybe<Array<QuotationScalarWhereInput>>
  OR?: Maybe<Array<QuotationScalarWhereInput>>
  NOT?: Maybe<Array<QuotationScalarWhereInput>>
}

type QuotationSubscriptionPayload = {
  __typename?: 'QuotationSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<Quotation>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<QuotationPreviousValues>
}

type QuotationSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>
  updatedFields_contains?: Maybe<Scalars['String']>
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<QuotationWhereInput>
  AND?: Maybe<Array<QuotationSubscriptionWhereInput>>
  OR?: Maybe<Array<QuotationSubscriptionWhereInput>>
  NOT?: Maybe<Array<QuotationSubscriptionWhereInput>>
}

type QuotationUpdateDataInput = {
  docId?: Maybe<Scalars['String']>
  productItems?: Maybe<ProductItemUpdateManyWithoutQuotationInput>
  saleman?: Maybe<SalemanUpdateOneRequiredWithoutQuotationsInput>
  payment?: Maybe<PaymentUpdateOneWithoutQuotationInput>
  shipping?: Maybe<ShippingUpdateOneWithoutQuotationInput>
  customer?: Maybe<UserUpdateOneRequiredWithoutQuotationsInput>
}

type QuotationUpdateInput = {
  docId?: Maybe<Scalars['String']>
  productItems?: Maybe<ProductItemUpdateManyWithoutQuotationInput>
  saleman?: Maybe<SalemanUpdateOneRequiredWithoutQuotationsInput>
  payment?: Maybe<PaymentUpdateOneWithoutQuotationInput>
  shipping?: Maybe<ShippingUpdateOneWithoutQuotationInput>
  customer?: Maybe<UserUpdateOneRequiredWithoutQuotationsInput>
}

type QuotationUpdateManyDataInput = {
  docId?: Maybe<Scalars['String']>
}

type QuotationUpdateManyMutationInput = {
  docId?: Maybe<Scalars['String']>
}

type QuotationUpdateManyWithoutCustomerInput = {
  create?: Maybe<Array<QuotationCreateWithoutCustomerInput>>
  delete?: Maybe<Array<QuotationWhereUniqueInput>>
  connect?: Maybe<Array<QuotationWhereUniqueInput>>
  set?: Maybe<Array<QuotationWhereUniqueInput>>
  disconnect?: Maybe<Array<QuotationWhereUniqueInput>>
  update?: Maybe<Array<QuotationUpdateWithWhereUniqueWithoutCustomerInput>>
  upsert?: Maybe<Array<QuotationUpsertWithWhereUniqueWithoutCustomerInput>>
  deleteMany?: Maybe<Array<QuotationScalarWhereInput>>
  updateMany?: Maybe<Array<QuotationUpdateManyWithWhereNestedInput>>
}

type QuotationUpdateManyWithoutSalemanInput = {
  create?: Maybe<Array<QuotationCreateWithoutSalemanInput>>
  delete?: Maybe<Array<QuotationWhereUniqueInput>>
  connect?: Maybe<Array<QuotationWhereUniqueInput>>
  set?: Maybe<Array<QuotationWhereUniqueInput>>
  disconnect?: Maybe<Array<QuotationWhereUniqueInput>>
  update?: Maybe<Array<QuotationUpdateWithWhereUniqueWithoutSalemanInput>>
  upsert?: Maybe<Array<QuotationUpsertWithWhereUniqueWithoutSalemanInput>>
  deleteMany?: Maybe<Array<QuotationScalarWhereInput>>
  updateMany?: Maybe<Array<QuotationUpdateManyWithWhereNestedInput>>
}

type QuotationUpdateManyWithWhereNestedInput = {
  where: QuotationScalarWhereInput
  data: QuotationUpdateManyDataInput
}

type QuotationUpdateOneRequiredInput = {
  create?: Maybe<QuotationCreateInput>
  update?: Maybe<QuotationUpdateDataInput>
  upsert?: Maybe<QuotationUpsertNestedInput>
  connect?: Maybe<QuotationWhereUniqueInput>
}

type QuotationUpdateOneRequiredWithoutPaymentInput = {
  create?: Maybe<QuotationCreateWithoutPaymentInput>
  update?: Maybe<QuotationUpdateWithoutPaymentDataInput>
  upsert?: Maybe<QuotationUpsertWithoutPaymentInput>
  connect?: Maybe<QuotationWhereUniqueInput>
}

type QuotationUpdateOneRequiredWithoutShippingInput = {
  create?: Maybe<QuotationCreateWithoutShippingInput>
  update?: Maybe<QuotationUpdateWithoutShippingDataInput>
  upsert?: Maybe<QuotationUpsertWithoutShippingInput>
  connect?: Maybe<QuotationWhereUniqueInput>
}

type QuotationUpdateOneWithoutProductItemsInput = {
  create?: Maybe<QuotationCreateWithoutProductItemsInput>
  update?: Maybe<QuotationUpdateWithoutProductItemsDataInput>
  upsert?: Maybe<QuotationUpsertWithoutProductItemsInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  connect?: Maybe<QuotationWhereUniqueInput>
}

type QuotationUpdateWithoutCustomerDataInput = {
  docId?: Maybe<Scalars['String']>
  productItems?: Maybe<ProductItemUpdateManyWithoutQuotationInput>
  saleman?: Maybe<SalemanUpdateOneRequiredWithoutQuotationsInput>
  payment?: Maybe<PaymentUpdateOneWithoutQuotationInput>
  shipping?: Maybe<ShippingUpdateOneWithoutQuotationInput>
}

type QuotationUpdateWithoutPaymentDataInput = {
  docId?: Maybe<Scalars['String']>
  productItems?: Maybe<ProductItemUpdateManyWithoutQuotationInput>
  saleman?: Maybe<SalemanUpdateOneRequiredWithoutQuotationsInput>
  shipping?: Maybe<ShippingUpdateOneWithoutQuotationInput>
  customer?: Maybe<UserUpdateOneRequiredWithoutQuotationsInput>
}

type QuotationUpdateWithoutProductItemsDataInput = {
  docId?: Maybe<Scalars['String']>
  saleman?: Maybe<SalemanUpdateOneRequiredWithoutQuotationsInput>
  payment?: Maybe<PaymentUpdateOneWithoutQuotationInput>
  shipping?: Maybe<ShippingUpdateOneWithoutQuotationInput>
  customer?: Maybe<UserUpdateOneRequiredWithoutQuotationsInput>
}

type QuotationUpdateWithoutSalemanDataInput = {
  docId?: Maybe<Scalars['String']>
  productItems?: Maybe<ProductItemUpdateManyWithoutQuotationInput>
  payment?: Maybe<PaymentUpdateOneWithoutQuotationInput>
  shipping?: Maybe<ShippingUpdateOneWithoutQuotationInput>
  customer?: Maybe<UserUpdateOneRequiredWithoutQuotationsInput>
}

type QuotationUpdateWithoutShippingDataInput = {
  docId?: Maybe<Scalars['String']>
  productItems?: Maybe<ProductItemUpdateManyWithoutQuotationInput>
  saleman?: Maybe<SalemanUpdateOneRequiredWithoutQuotationsInput>
  payment?: Maybe<PaymentUpdateOneWithoutQuotationInput>
  customer?: Maybe<UserUpdateOneRequiredWithoutQuotationsInput>
}

type QuotationUpdateWithWhereUniqueWithoutCustomerInput = {
  where: QuotationWhereUniqueInput
  data: QuotationUpdateWithoutCustomerDataInput
}

type QuotationUpdateWithWhereUniqueWithoutSalemanInput = {
  where: QuotationWhereUniqueInput
  data: QuotationUpdateWithoutSalemanDataInput
}

type QuotationUpsertNestedInput = {
  update: QuotationUpdateDataInput
  create: QuotationCreateInput
}

type QuotationUpsertWithoutPaymentInput = {
  update: QuotationUpdateWithoutPaymentDataInput
  create: QuotationCreateWithoutPaymentInput
}

type QuotationUpsertWithoutProductItemsInput = {
  update: QuotationUpdateWithoutProductItemsDataInput
  create: QuotationCreateWithoutProductItemsInput
}

type QuotationUpsertWithoutShippingInput = {
  update: QuotationUpdateWithoutShippingDataInput
  create: QuotationCreateWithoutShippingInput
}

type QuotationUpsertWithWhereUniqueWithoutCustomerInput = {
  where: QuotationWhereUniqueInput
  update: QuotationUpdateWithoutCustomerDataInput
  create: QuotationCreateWithoutCustomerInput
}

type QuotationUpsertWithWhereUniqueWithoutSalemanInput = {
  where: QuotationWhereUniqueInput
  update: QuotationUpdateWithoutSalemanDataInput
  create: QuotationCreateWithoutSalemanInput
}

type QuotationWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  docId?: Maybe<Scalars['String']>
  docId_not?: Maybe<Scalars['String']>
  docId_in?: Maybe<Array<Scalars['String']>>
  docId_not_in?: Maybe<Array<Scalars['String']>>
  docId_lt?: Maybe<Scalars['String']>
  docId_lte?: Maybe<Scalars['String']>
  docId_gt?: Maybe<Scalars['String']>
  docId_gte?: Maybe<Scalars['String']>
  docId_contains?: Maybe<Scalars['String']>
  docId_not_contains?: Maybe<Scalars['String']>
  docId_starts_with?: Maybe<Scalars['String']>
  docId_not_starts_with?: Maybe<Scalars['String']>
  docId_ends_with?: Maybe<Scalars['String']>
  docId_not_ends_with?: Maybe<Scalars['String']>
  productItems_every?: Maybe<ProductItemWhereInput>
  productItems_some?: Maybe<ProductItemWhereInput>
  productItems_none?: Maybe<ProductItemWhereInput>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  saleman?: Maybe<SalemanWhereInput>
  payment?: Maybe<PaymentWhereInput>
  shipping?: Maybe<ShippingWhereInput>
  customer?: Maybe<UserWhereInput>
  AND?: Maybe<Array<QuotationWhereInput>>
  OR?: Maybe<Array<QuotationWhereInput>>
  NOT?: Maybe<Array<QuotationWhereInput>>
}

type QuotationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

type Saleman = {
  __typename?: 'Saleman'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  payments?: Maybe<Array<Payment>>
  invoices?: Maybe<Array<Invoice>>
  quotations?: Maybe<Array<Quotation>>
}

type SalemanPaymentsArgs = {
  where?: Maybe<PaymentWhereInput>
  orderBy?: Maybe<PaymentOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type SalemanInvoicesArgs = {
  where?: Maybe<InvoiceWhereInput>
  orderBy?: Maybe<InvoiceOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type SalemanQuotationsArgs = {
  where?: Maybe<QuotationWhereInput>
  orderBy?: Maybe<QuotationOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type SalemanConnection = {
  __typename?: 'SalemanConnection'
  pageInfo: PageInfo
  edges: Array<Maybe<SalemanEdge>>
  aggregate: AggregateSaleman
}

type SalemanCreateInput = {
  id?: Maybe<Scalars['ID']>
  payments?: Maybe<PaymentCreateManyWithoutSalemanInput>
  invoices?: Maybe<InvoiceCreateManyWithoutSalemanInput>
  quotations?: Maybe<QuotationCreateManyWithoutSalemanInput>
}

type SalemanCreateOneWithoutInvoicesInput = {
  create?: Maybe<SalemanCreateWithoutInvoicesInput>
  connect?: Maybe<SalemanWhereUniqueInput>
}

type SalemanCreateOneWithoutPaymentsInput = {
  create?: Maybe<SalemanCreateWithoutPaymentsInput>
  connect?: Maybe<SalemanWhereUniqueInput>
}

type SalemanCreateOneWithoutQuotationsInput = {
  create?: Maybe<SalemanCreateWithoutQuotationsInput>
  connect?: Maybe<SalemanWhereUniqueInput>
}

type SalemanCreateWithoutInvoicesInput = {
  id?: Maybe<Scalars['ID']>
  payments?: Maybe<PaymentCreateManyWithoutSalemanInput>
  quotations?: Maybe<QuotationCreateManyWithoutSalemanInput>
}

type SalemanCreateWithoutPaymentsInput = {
  id?: Maybe<Scalars['ID']>
  invoices?: Maybe<InvoiceCreateManyWithoutSalemanInput>
  quotations?: Maybe<QuotationCreateManyWithoutSalemanInput>
}

type SalemanCreateWithoutQuotationsInput = {
  id?: Maybe<Scalars['ID']>
  payments?: Maybe<PaymentCreateManyWithoutSalemanInput>
  invoices?: Maybe<InvoiceCreateManyWithoutSalemanInput>
}

type SalemanEdge = {
  __typename?: 'SalemanEdge'
  node: Saleman
  cursor: Scalars['String']
}

enum SalemanOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

type SalemanPreviousValues = {
  __typename?: 'SalemanPreviousValues'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

type SalemanSubscriptionPayload = {
  __typename?: 'SalemanSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<Saleman>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<SalemanPreviousValues>
}

type SalemanSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>
  updatedFields_contains?: Maybe<Scalars['String']>
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<SalemanWhereInput>
  AND?: Maybe<Array<SalemanSubscriptionWhereInput>>
  OR?: Maybe<Array<SalemanSubscriptionWhereInput>>
  NOT?: Maybe<Array<SalemanSubscriptionWhereInput>>
}

type SalemanUpdateInput = {
  payments?: Maybe<PaymentUpdateManyWithoutSalemanInput>
  invoices?: Maybe<InvoiceUpdateManyWithoutSalemanInput>
  quotations?: Maybe<QuotationUpdateManyWithoutSalemanInput>
}

type SalemanUpdateOneRequiredWithoutInvoicesInput = {
  create?: Maybe<SalemanCreateWithoutInvoicesInput>
  update?: Maybe<SalemanUpdateWithoutInvoicesDataInput>
  upsert?: Maybe<SalemanUpsertWithoutInvoicesInput>
  connect?: Maybe<SalemanWhereUniqueInput>
}

type SalemanUpdateOneRequiredWithoutPaymentsInput = {
  create?: Maybe<SalemanCreateWithoutPaymentsInput>
  update?: Maybe<SalemanUpdateWithoutPaymentsDataInput>
  upsert?: Maybe<SalemanUpsertWithoutPaymentsInput>
  connect?: Maybe<SalemanWhereUniqueInput>
}

type SalemanUpdateOneRequiredWithoutQuotationsInput = {
  create?: Maybe<SalemanCreateWithoutQuotationsInput>
  update?: Maybe<SalemanUpdateWithoutQuotationsDataInput>
  upsert?: Maybe<SalemanUpsertWithoutQuotationsInput>
  connect?: Maybe<SalemanWhereUniqueInput>
}

type SalemanUpdateWithoutInvoicesDataInput = {
  payments?: Maybe<PaymentUpdateManyWithoutSalemanInput>
  quotations?: Maybe<QuotationUpdateManyWithoutSalemanInput>
}

type SalemanUpdateWithoutPaymentsDataInput = {
  invoices?: Maybe<InvoiceUpdateManyWithoutSalemanInput>
  quotations?: Maybe<QuotationUpdateManyWithoutSalemanInput>
}

type SalemanUpdateWithoutQuotationsDataInput = {
  payments?: Maybe<PaymentUpdateManyWithoutSalemanInput>
  invoices?: Maybe<InvoiceUpdateManyWithoutSalemanInput>
}

type SalemanUpsertWithoutInvoicesInput = {
  update: SalemanUpdateWithoutInvoicesDataInput
  create: SalemanCreateWithoutInvoicesInput
}

type SalemanUpsertWithoutPaymentsInput = {
  update: SalemanUpdateWithoutPaymentsDataInput
  create: SalemanCreateWithoutPaymentsInput
}

type SalemanUpsertWithoutQuotationsInput = {
  update: SalemanUpdateWithoutQuotationsDataInput
  create: SalemanCreateWithoutQuotationsInput
}

type SalemanWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  payments_every?: Maybe<PaymentWhereInput>
  payments_some?: Maybe<PaymentWhereInput>
  payments_none?: Maybe<PaymentWhereInput>
  invoices_every?: Maybe<InvoiceWhereInput>
  invoices_some?: Maybe<InvoiceWhereInput>
  invoices_none?: Maybe<InvoiceWhereInput>
  quotations_every?: Maybe<QuotationWhereInput>
  quotations_some?: Maybe<QuotationWhereInput>
  quotations_none?: Maybe<QuotationWhereInput>
  AND?: Maybe<Array<SalemanWhereInput>>
  OR?: Maybe<Array<SalemanWhereInput>>
  NOT?: Maybe<Array<SalemanWhereInput>>
}

type SalemanWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

type Shipping = {
  __typename?: 'Shipping'
  id: Scalars['ID']
  docId: Scalars['String']
  dueDate: Scalars['DateTime']
  status: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  invoce: Invoice
  address: Address
  quotation: Quotation
}

type ShippingConnection = {
  __typename?: 'ShippingConnection'
  pageInfo: PageInfo
  edges: Array<Maybe<ShippingEdge>>
  aggregate: AggregateShipping
}

type ShippingCreateInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  dueDate: Scalars['DateTime']
  status: Scalars['String']
  invoce: InvoiceCreateOneInput
  address: AddressCreateOneWithoutShippingInput
  quotation: QuotationCreateOneWithoutShippingInput
}

type ShippingCreateManyWithoutAddressInput = {
  create?: Maybe<Array<ShippingCreateWithoutAddressInput>>
  connect?: Maybe<Array<ShippingWhereUniqueInput>>
}

type ShippingCreateOneWithoutQuotationInput = {
  create?: Maybe<ShippingCreateWithoutQuotationInput>
  connect?: Maybe<ShippingWhereUniqueInput>
}

type ShippingCreateWithoutAddressInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  dueDate: Scalars['DateTime']
  status: Scalars['String']
  invoce: InvoiceCreateOneInput
  quotation: QuotationCreateOneWithoutShippingInput
}

type ShippingCreateWithoutQuotationInput = {
  id?: Maybe<Scalars['ID']>
  docId: Scalars['String']
  dueDate: Scalars['DateTime']
  status: Scalars['String']
  invoce: InvoiceCreateOneInput
  address: AddressCreateOneWithoutShippingInput
}

type ShippingEdge = {
  __typename?: 'ShippingEdge'
  node: Shipping
  cursor: Scalars['String']
}

enum ShippingOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  DocIdAsc = 'docId_ASC',
  DocIdDesc = 'docId_DESC',
  DueDateAsc = 'dueDate_ASC',
  DueDateDesc = 'dueDate_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

type ShippingPreviousValues = {
  __typename?: 'ShippingPreviousValues'
  id: Scalars['ID']
  docId: Scalars['String']
  dueDate: Scalars['DateTime']
  status: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

type ShippingScalarWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  docId?: Maybe<Scalars['String']>
  docId_not?: Maybe<Scalars['String']>
  docId_in?: Maybe<Array<Scalars['String']>>
  docId_not_in?: Maybe<Array<Scalars['String']>>
  docId_lt?: Maybe<Scalars['String']>
  docId_lte?: Maybe<Scalars['String']>
  docId_gt?: Maybe<Scalars['String']>
  docId_gte?: Maybe<Scalars['String']>
  docId_contains?: Maybe<Scalars['String']>
  docId_not_contains?: Maybe<Scalars['String']>
  docId_starts_with?: Maybe<Scalars['String']>
  docId_not_starts_with?: Maybe<Scalars['String']>
  docId_ends_with?: Maybe<Scalars['String']>
  docId_not_ends_with?: Maybe<Scalars['String']>
  dueDate?: Maybe<Scalars['DateTime']>
  dueDate_not?: Maybe<Scalars['DateTime']>
  dueDate_in?: Maybe<Array<Scalars['DateTime']>>
  dueDate_not_in?: Maybe<Array<Scalars['DateTime']>>
  dueDate_lt?: Maybe<Scalars['DateTime']>
  dueDate_lte?: Maybe<Scalars['DateTime']>
  dueDate_gt?: Maybe<Scalars['DateTime']>
  dueDate_gte?: Maybe<Scalars['DateTime']>
  status?: Maybe<Scalars['String']>
  status_not?: Maybe<Scalars['String']>
  status_in?: Maybe<Array<Scalars['String']>>
  status_not_in?: Maybe<Array<Scalars['String']>>
  status_lt?: Maybe<Scalars['String']>
  status_lte?: Maybe<Scalars['String']>
  status_gt?: Maybe<Scalars['String']>
  status_gte?: Maybe<Scalars['String']>
  status_contains?: Maybe<Scalars['String']>
  status_not_contains?: Maybe<Scalars['String']>
  status_starts_with?: Maybe<Scalars['String']>
  status_not_starts_with?: Maybe<Scalars['String']>
  status_ends_with?: Maybe<Scalars['String']>
  status_not_ends_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  AND?: Maybe<Array<ShippingScalarWhereInput>>
  OR?: Maybe<Array<ShippingScalarWhereInput>>
  NOT?: Maybe<Array<ShippingScalarWhereInput>>
}

type ShippingSubscriptionPayload = {
  __typename?: 'ShippingSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<Shipping>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<ShippingPreviousValues>
}

type ShippingSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>
  updatedFields_contains?: Maybe<Scalars['String']>
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<ShippingWhereInput>
  AND?: Maybe<Array<ShippingSubscriptionWhereInput>>
  OR?: Maybe<Array<ShippingSubscriptionWhereInput>>
  NOT?: Maybe<Array<ShippingSubscriptionWhereInput>>
}

type ShippingUpdateInput = {
  docId?: Maybe<Scalars['String']>
  dueDate?: Maybe<Scalars['DateTime']>
  status?: Maybe<Scalars['String']>
  invoce?: Maybe<InvoiceUpdateOneRequiredInput>
  address?: Maybe<AddressUpdateOneRequiredWithoutShippingInput>
  quotation?: Maybe<QuotationUpdateOneRequiredWithoutShippingInput>
}

type ShippingUpdateManyDataInput = {
  docId?: Maybe<Scalars['String']>
  dueDate?: Maybe<Scalars['DateTime']>
  status?: Maybe<Scalars['String']>
}

type ShippingUpdateManyMutationInput = {
  docId?: Maybe<Scalars['String']>
  dueDate?: Maybe<Scalars['DateTime']>
  status?: Maybe<Scalars['String']>
}

type ShippingUpdateManyWithoutAddressInput = {
  create?: Maybe<Array<ShippingCreateWithoutAddressInput>>
  delete?: Maybe<Array<ShippingWhereUniqueInput>>
  connect?: Maybe<Array<ShippingWhereUniqueInput>>
  set?: Maybe<Array<ShippingWhereUniqueInput>>
  disconnect?: Maybe<Array<ShippingWhereUniqueInput>>
  update?: Maybe<Array<ShippingUpdateWithWhereUniqueWithoutAddressInput>>
  upsert?: Maybe<Array<ShippingUpsertWithWhereUniqueWithoutAddressInput>>
  deleteMany?: Maybe<Array<ShippingScalarWhereInput>>
  updateMany?: Maybe<Array<ShippingUpdateManyWithWhereNestedInput>>
}

type ShippingUpdateManyWithWhereNestedInput = {
  where: ShippingScalarWhereInput
  data: ShippingUpdateManyDataInput
}

type ShippingUpdateOneWithoutQuotationInput = {
  create?: Maybe<ShippingCreateWithoutQuotationInput>
  update?: Maybe<ShippingUpdateWithoutQuotationDataInput>
  upsert?: Maybe<ShippingUpsertWithoutQuotationInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  connect?: Maybe<ShippingWhereUniqueInput>
}

type ShippingUpdateWithoutAddressDataInput = {
  docId?: Maybe<Scalars['String']>
  dueDate?: Maybe<Scalars['DateTime']>
  status?: Maybe<Scalars['String']>
  invoce?: Maybe<InvoiceUpdateOneRequiredInput>
  quotation?: Maybe<QuotationUpdateOneRequiredWithoutShippingInput>
}

type ShippingUpdateWithoutQuotationDataInput = {
  docId?: Maybe<Scalars['String']>
  dueDate?: Maybe<Scalars['DateTime']>
  status?: Maybe<Scalars['String']>
  invoce?: Maybe<InvoiceUpdateOneRequiredInput>
  address?: Maybe<AddressUpdateOneRequiredWithoutShippingInput>
}

type ShippingUpdateWithWhereUniqueWithoutAddressInput = {
  where: ShippingWhereUniqueInput
  data: ShippingUpdateWithoutAddressDataInput
}

type ShippingUpsertWithoutQuotationInput = {
  update: ShippingUpdateWithoutQuotationDataInput
  create: ShippingCreateWithoutQuotationInput
}

type ShippingUpsertWithWhereUniqueWithoutAddressInput = {
  where: ShippingWhereUniqueInput
  update: ShippingUpdateWithoutAddressDataInput
  create: ShippingCreateWithoutAddressInput
}

type ShippingWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  docId?: Maybe<Scalars['String']>
  docId_not?: Maybe<Scalars['String']>
  docId_in?: Maybe<Array<Scalars['String']>>
  docId_not_in?: Maybe<Array<Scalars['String']>>
  docId_lt?: Maybe<Scalars['String']>
  docId_lte?: Maybe<Scalars['String']>
  docId_gt?: Maybe<Scalars['String']>
  docId_gte?: Maybe<Scalars['String']>
  docId_contains?: Maybe<Scalars['String']>
  docId_not_contains?: Maybe<Scalars['String']>
  docId_starts_with?: Maybe<Scalars['String']>
  docId_not_starts_with?: Maybe<Scalars['String']>
  docId_ends_with?: Maybe<Scalars['String']>
  docId_not_ends_with?: Maybe<Scalars['String']>
  dueDate?: Maybe<Scalars['DateTime']>
  dueDate_not?: Maybe<Scalars['DateTime']>
  dueDate_in?: Maybe<Array<Scalars['DateTime']>>
  dueDate_not_in?: Maybe<Array<Scalars['DateTime']>>
  dueDate_lt?: Maybe<Scalars['DateTime']>
  dueDate_lte?: Maybe<Scalars['DateTime']>
  dueDate_gt?: Maybe<Scalars['DateTime']>
  dueDate_gte?: Maybe<Scalars['DateTime']>
  status?: Maybe<Scalars['String']>
  status_not?: Maybe<Scalars['String']>
  status_in?: Maybe<Array<Scalars['String']>>
  status_not_in?: Maybe<Array<Scalars['String']>>
  status_lt?: Maybe<Scalars['String']>
  status_lte?: Maybe<Scalars['String']>
  status_gt?: Maybe<Scalars['String']>
  status_gte?: Maybe<Scalars['String']>
  status_contains?: Maybe<Scalars['String']>
  status_not_contains?: Maybe<Scalars['String']>
  status_starts_with?: Maybe<Scalars['String']>
  status_not_starts_with?: Maybe<Scalars['String']>
  status_ends_with?: Maybe<Scalars['String']>
  status_not_ends_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  invoce?: Maybe<InvoiceWhereInput>
  address?: Maybe<AddressWhereInput>
  quotation?: Maybe<QuotationWhereInput>
  AND?: Maybe<Array<ShippingWhereInput>>
  OR?: Maybe<Array<ShippingWhereInput>>
  NOT?: Maybe<Array<ShippingWhereInput>>
}

type ShippingWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

type ShoppingCart = {
  __typename?: 'ShoppingCart'
  id: Scalars['ID']
  total_cost: Scalars['Float']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  productItems?: Maybe<Array<ShoppingCartItem>>
  customer: User
}

type ShoppingCartProductItemsArgs = {
  where?: Maybe<ShoppingCartItemWhereInput>
  orderBy?: Maybe<ShoppingCartItemOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type ShoppingCartConnection = {
  __typename?: 'ShoppingCartConnection'
  pageInfo: PageInfo
  edges: Array<Maybe<ShoppingCartEdge>>
  aggregate: AggregateShoppingCart
}

type ShoppingCartCreateInput = {
  id?: Maybe<Scalars['ID']>
  total_cost: Scalars['Float']
  productItems?: Maybe<ShoppingCartItemCreateManyWithoutShoppingCartInput>
  customer: UserCreateOneWithoutShoppingCartInput
}

type ShoppingCartCreateOneInput = {
  create?: Maybe<ShoppingCartCreateInput>
  connect?: Maybe<ShoppingCartWhereUniqueInput>
}

type ShoppingCartCreateOneWithoutCustomerInput = {
  create?: Maybe<ShoppingCartCreateWithoutCustomerInput>
  connect?: Maybe<ShoppingCartWhereUniqueInput>
}

type ShoppingCartCreateOneWithoutProductItemsInput = {
  create?: Maybe<ShoppingCartCreateWithoutProductItemsInput>
  connect?: Maybe<ShoppingCartWhereUniqueInput>
}

type ShoppingCartCreateWithoutCustomerInput = {
  id?: Maybe<Scalars['ID']>
  total_cost: Scalars['Float']
  productItems?: Maybe<ShoppingCartItemCreateManyWithoutShoppingCartInput>
}

type ShoppingCartCreateWithoutProductItemsInput = {
  id?: Maybe<Scalars['ID']>
  total_cost: Scalars['Float']
  customer: UserCreateOneWithoutShoppingCartInput
}

type ShoppingCartEdge = {
  __typename?: 'ShoppingCartEdge'
  node: ShoppingCart
  cursor: Scalars['String']
}

type ShoppingCartItem = {
  __typename?: 'ShoppingCartItem'
  id: Scalars['ID']
  key: Scalars['String']
  product: ProductItem
  amount: Scalars['Int']
  ShoppingCart?: Maybe<ShoppingCart>
}

type ShoppingCartItemConnection = {
  __typename?: 'ShoppingCartItemConnection'
  pageInfo: PageInfo
  edges: Array<Maybe<ShoppingCartItemEdge>>
  aggregate: AggregateShoppingCartItem
}

type ShoppingCartItemCreateInput = {
  id?: Maybe<Scalars['ID']>
  key: Scalars['String']
  product: ProductItemCreateOneInput
  amount: Scalars['Int']
  ShoppingCart?: Maybe<ShoppingCartCreateOneWithoutProductItemsInput>
}

type ShoppingCartItemCreateManyWithoutShoppingCartInput = {
  create?: Maybe<Array<ShoppingCartItemCreateWithoutShoppingCartInput>>
  connect?: Maybe<Array<ShoppingCartItemWhereUniqueInput>>
}

type ShoppingCartItemCreateWithoutShoppingCartInput = {
  id?: Maybe<Scalars['ID']>
  key: Scalars['String']
  product: ProductItemCreateOneInput
  amount: Scalars['Int']
}

type ShoppingCartItemEdge = {
  __typename?: 'ShoppingCartItemEdge'
  node: ShoppingCartItem
  cursor: Scalars['String']
}

enum ShoppingCartItemOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
}

type ShoppingCartItemPreviousValues = {
  __typename?: 'ShoppingCartItemPreviousValues'
  id: Scalars['ID']
  key: Scalars['String']
  amount: Scalars['Int']
}

type ShoppingCartItemScalarWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  key?: Maybe<Scalars['String']>
  key_not?: Maybe<Scalars['String']>
  key_in?: Maybe<Array<Scalars['String']>>
  key_not_in?: Maybe<Array<Scalars['String']>>
  key_lt?: Maybe<Scalars['String']>
  key_lte?: Maybe<Scalars['String']>
  key_gt?: Maybe<Scalars['String']>
  key_gte?: Maybe<Scalars['String']>
  key_contains?: Maybe<Scalars['String']>
  key_not_contains?: Maybe<Scalars['String']>
  key_starts_with?: Maybe<Scalars['String']>
  key_not_starts_with?: Maybe<Scalars['String']>
  key_ends_with?: Maybe<Scalars['String']>
  key_not_ends_with?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  amount_not?: Maybe<Scalars['Int']>
  amount_in?: Maybe<Array<Scalars['Int']>>
  amount_not_in?: Maybe<Array<Scalars['Int']>>
  amount_lt?: Maybe<Scalars['Int']>
  amount_lte?: Maybe<Scalars['Int']>
  amount_gt?: Maybe<Scalars['Int']>
  amount_gte?: Maybe<Scalars['Int']>
  AND?: Maybe<Array<ShoppingCartItemScalarWhereInput>>
  OR?: Maybe<Array<ShoppingCartItemScalarWhereInput>>
  NOT?: Maybe<Array<ShoppingCartItemScalarWhereInput>>
}

type ShoppingCartItemSubscriptionPayload = {
  __typename?: 'ShoppingCartItemSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<ShoppingCartItem>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<ShoppingCartItemPreviousValues>
}

type ShoppingCartItemSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>
  updatedFields_contains?: Maybe<Scalars['String']>
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<ShoppingCartItemWhereInput>
  AND?: Maybe<Array<ShoppingCartItemSubscriptionWhereInput>>
  OR?: Maybe<Array<ShoppingCartItemSubscriptionWhereInput>>
  NOT?: Maybe<Array<ShoppingCartItemSubscriptionWhereInput>>
}

type ShoppingCartItemUpdateInput = {
  key?: Maybe<Scalars['String']>
  product?: Maybe<ProductItemUpdateOneRequiredInput>
  amount?: Maybe<Scalars['Int']>
  ShoppingCart?: Maybe<ShoppingCartUpdateOneWithoutProductItemsInput>
}

type ShoppingCartItemUpdateManyDataInput = {
  key?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
}

type ShoppingCartItemUpdateManyMutationInput = {
  key?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
}

type ShoppingCartItemUpdateManyWithoutShoppingCartInput = {
  create?: Maybe<Array<ShoppingCartItemCreateWithoutShoppingCartInput>>
  delete?: Maybe<Array<ShoppingCartItemWhereUniqueInput>>
  connect?: Maybe<Array<ShoppingCartItemWhereUniqueInput>>
  set?: Maybe<Array<ShoppingCartItemWhereUniqueInput>>
  disconnect?: Maybe<Array<ShoppingCartItemWhereUniqueInput>>
  update?: Maybe<
    Array<ShoppingCartItemUpdateWithWhereUniqueWithoutShoppingCartInput>
  >
  upsert?: Maybe<
    Array<ShoppingCartItemUpsertWithWhereUniqueWithoutShoppingCartInput>
  >
  deleteMany?: Maybe<Array<ShoppingCartItemScalarWhereInput>>
  updateMany?: Maybe<Array<ShoppingCartItemUpdateManyWithWhereNestedInput>>
}

type ShoppingCartItemUpdateManyWithWhereNestedInput = {
  where: ShoppingCartItemScalarWhereInput
  data: ShoppingCartItemUpdateManyDataInput
}

type ShoppingCartItemUpdateWithoutShoppingCartDataInput = {
  key?: Maybe<Scalars['String']>
  product?: Maybe<ProductItemUpdateOneRequiredInput>
  amount?: Maybe<Scalars['Int']>
}

type ShoppingCartItemUpdateWithWhereUniqueWithoutShoppingCartInput = {
  where: ShoppingCartItemWhereUniqueInput
  data: ShoppingCartItemUpdateWithoutShoppingCartDataInput
}

type ShoppingCartItemUpsertWithWhereUniqueWithoutShoppingCartInput = {
  where: ShoppingCartItemWhereUniqueInput
  update: ShoppingCartItemUpdateWithoutShoppingCartDataInput
  create: ShoppingCartItemCreateWithoutShoppingCartInput
}

type ShoppingCartItemWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  key?: Maybe<Scalars['String']>
  key_not?: Maybe<Scalars['String']>
  key_in?: Maybe<Array<Scalars['String']>>
  key_not_in?: Maybe<Array<Scalars['String']>>
  key_lt?: Maybe<Scalars['String']>
  key_lte?: Maybe<Scalars['String']>
  key_gt?: Maybe<Scalars['String']>
  key_gte?: Maybe<Scalars['String']>
  key_contains?: Maybe<Scalars['String']>
  key_not_contains?: Maybe<Scalars['String']>
  key_starts_with?: Maybe<Scalars['String']>
  key_not_starts_with?: Maybe<Scalars['String']>
  key_ends_with?: Maybe<Scalars['String']>
  key_not_ends_with?: Maybe<Scalars['String']>
  product?: Maybe<ProductItemWhereInput>
  amount?: Maybe<Scalars['Int']>
  amount_not?: Maybe<Scalars['Int']>
  amount_in?: Maybe<Array<Scalars['Int']>>
  amount_not_in?: Maybe<Array<Scalars['Int']>>
  amount_lt?: Maybe<Scalars['Int']>
  amount_lte?: Maybe<Scalars['Int']>
  amount_gt?: Maybe<Scalars['Int']>
  amount_gte?: Maybe<Scalars['Int']>
  ShoppingCart?: Maybe<ShoppingCartWhereInput>
  AND?: Maybe<Array<ShoppingCartItemWhereInput>>
  OR?: Maybe<Array<ShoppingCartItemWhereInput>>
  NOT?: Maybe<Array<ShoppingCartItemWhereInput>>
}

type ShoppingCartItemWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
  key?: Maybe<Scalars['String']>
}

enum ShoppingCartOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TotalCostAsc = 'total_cost_ASC',
  TotalCostDesc = 'total_cost_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

type ShoppingCartPreviousValues = {
  __typename?: 'ShoppingCartPreviousValues'
  id: Scalars['ID']
  total_cost: Scalars['Float']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

type ShoppingCartSubscriptionPayload = {
  __typename?: 'ShoppingCartSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<ShoppingCart>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<ShoppingCartPreviousValues>
}

type ShoppingCartSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>
  updatedFields_contains?: Maybe<Scalars['String']>
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<ShoppingCartWhereInput>
  AND?: Maybe<Array<ShoppingCartSubscriptionWhereInput>>
  OR?: Maybe<Array<ShoppingCartSubscriptionWhereInput>>
  NOT?: Maybe<Array<ShoppingCartSubscriptionWhereInput>>
}

type ShoppingCartUpdateDataInput = {
  total_cost?: Maybe<Scalars['Float']>
  productItems?: Maybe<ShoppingCartItemUpdateManyWithoutShoppingCartInput>
  customer?: Maybe<UserUpdateOneRequiredWithoutShoppingCartInput>
}

type ShoppingCartUpdateInput = {
  total_cost?: Maybe<Scalars['Float']>
  productItems?: Maybe<ShoppingCartItemUpdateManyWithoutShoppingCartInput>
  customer?: Maybe<UserUpdateOneRequiredWithoutShoppingCartInput>
}

type ShoppingCartUpdateManyMutationInput = {
  total_cost?: Maybe<Scalars['Float']>
}

type ShoppingCartUpdateOneInput = {
  create?: Maybe<ShoppingCartCreateInput>
  update?: Maybe<ShoppingCartUpdateDataInput>
  upsert?: Maybe<ShoppingCartUpsertNestedInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  connect?: Maybe<ShoppingCartWhereUniqueInput>
}

type ShoppingCartUpdateOneRequiredWithoutCustomerInput = {
  create?: Maybe<ShoppingCartCreateWithoutCustomerInput>
  update?: Maybe<ShoppingCartUpdateWithoutCustomerDataInput>
  upsert?: Maybe<ShoppingCartUpsertWithoutCustomerInput>
  connect?: Maybe<ShoppingCartWhereUniqueInput>
}

type ShoppingCartUpdateOneWithoutProductItemsInput = {
  create?: Maybe<ShoppingCartCreateWithoutProductItemsInput>
  update?: Maybe<ShoppingCartUpdateWithoutProductItemsDataInput>
  upsert?: Maybe<ShoppingCartUpsertWithoutProductItemsInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  connect?: Maybe<ShoppingCartWhereUniqueInput>
}

type ShoppingCartUpdateWithoutCustomerDataInput = {
  total_cost?: Maybe<Scalars['Float']>
  productItems?: Maybe<ShoppingCartItemUpdateManyWithoutShoppingCartInput>
}

type ShoppingCartUpdateWithoutProductItemsDataInput = {
  total_cost?: Maybe<Scalars['Float']>
  customer?: Maybe<UserUpdateOneRequiredWithoutShoppingCartInput>
}

type ShoppingCartUpsertNestedInput = {
  update: ShoppingCartUpdateDataInput
  create: ShoppingCartCreateInput
}

type ShoppingCartUpsertWithoutCustomerInput = {
  update: ShoppingCartUpdateWithoutCustomerDataInput
  create: ShoppingCartCreateWithoutCustomerInput
}

type ShoppingCartUpsertWithoutProductItemsInput = {
  update: ShoppingCartUpdateWithoutProductItemsDataInput
  create: ShoppingCartCreateWithoutProductItemsInput
}

type ShoppingCartWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  total_cost?: Maybe<Scalars['Float']>
  total_cost_not?: Maybe<Scalars['Float']>
  total_cost_in?: Maybe<Array<Scalars['Float']>>
  total_cost_not_in?: Maybe<Array<Scalars['Float']>>
  total_cost_lt?: Maybe<Scalars['Float']>
  total_cost_lte?: Maybe<Scalars['Float']>
  total_cost_gt?: Maybe<Scalars['Float']>
  total_cost_gte?: Maybe<Scalars['Float']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  productItems_every?: Maybe<ShoppingCartItemWhereInput>
  productItems_some?: Maybe<ShoppingCartItemWhereInput>
  productItems_none?: Maybe<ShoppingCartItemWhereInput>
  customer?: Maybe<UserWhereInput>
  AND?: Maybe<Array<ShoppingCartWhereInput>>
  OR?: Maybe<Array<ShoppingCartWhereInput>>
  NOT?: Maybe<Array<ShoppingCartWhereInput>>
}

type ShoppingCartWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

type Subscription = {
  __typename?: 'Subscription'
  address?: Maybe<AddressSubscriptionPayload>
  category?: Maybe<CategorySubscriptionPayload>
  invoice?: Maybe<InvoiceSubscriptionPayload>
  payment?: Maybe<PaymentSubscriptionPayload>
  productItem?: Maybe<ProductItemSubscriptionPayload>
  quotation?: Maybe<QuotationSubscriptionPayload>
  saleman?: Maybe<SalemanSubscriptionPayload>
  shipping?: Maybe<ShippingSubscriptionPayload>
  shoppingCart?: Maybe<ShoppingCartSubscriptionPayload>
  shoppingCartItem?: Maybe<ShoppingCartItemSubscriptionPayload>
  user?: Maybe<UserSubscriptionPayload>
}

type SubscriptionAddressArgs = {
  where?: Maybe<AddressSubscriptionWhereInput>
}

type SubscriptionCategoryArgs = {
  where?: Maybe<CategorySubscriptionWhereInput>
}

type SubscriptionInvoiceArgs = {
  where?: Maybe<InvoiceSubscriptionWhereInput>
}

type SubscriptionPaymentArgs = {
  where?: Maybe<PaymentSubscriptionWhereInput>
}

type SubscriptionProductItemArgs = {
  where?: Maybe<ProductItemSubscriptionWhereInput>
}

type SubscriptionQuotationArgs = {
  where?: Maybe<QuotationSubscriptionWhereInput>
}

type SubscriptionSalemanArgs = {
  where?: Maybe<SalemanSubscriptionWhereInput>
}

type SubscriptionShippingArgs = {
  where?: Maybe<ShippingSubscriptionWhereInput>
}

type SubscriptionShoppingCartArgs = {
  where?: Maybe<ShoppingCartSubscriptionWhereInput>
}

type SubscriptionShoppingCartItemArgs = {
  where?: Maybe<ShoppingCartItemSubscriptionWhereInput>
}

type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>
}

type User = {
  __typename?: 'User'
  id: Scalars['ID']
  type?: Maybe<Scalars['String']>
  name: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  phone: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  shoppingCart: ShoppingCart
  quotations?: Maybe<Array<Quotation>>
  payments?: Maybe<Array<Payment>>
  addresses?: Maybe<Array<Address>>
}

type UserQuotationsArgs = {
  where?: Maybe<QuotationWhereInput>
  orderBy?: Maybe<QuotationOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type UserPaymentsArgs = {
  where?: Maybe<PaymentWhereInput>
  orderBy?: Maybe<PaymentOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type UserAddressesArgs = {
  where?: Maybe<AddressWhereInput>
  orderBy?: Maybe<AddressOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

type UserConnection = {
  __typename?: 'UserConnection'
  pageInfo: PageInfo
  edges: Array<Maybe<UserEdge>>
  aggregate: AggregateUser
}

type UserCreateInput = {
  id?: Maybe<Scalars['ID']>
  type?: Maybe<Scalars['String']>
  name: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  phone: Scalars['String']
  shoppingCart: ShoppingCartCreateOneWithoutCustomerInput
  quotations?: Maybe<QuotationCreateManyWithoutCustomerInput>
  payments?: Maybe<PaymentCreateManyWithoutCustomerInput>
  addresses?: Maybe<AddressCreateManyWithoutCustomerInput>
}

type UserCreateOneInput = {
  create?: Maybe<UserCreateInput>
  connect?: Maybe<UserWhereUniqueInput>
}

type UserCreateOneWithoutAddressesInput = {
  create?: Maybe<UserCreateWithoutAddressesInput>
  connect?: Maybe<UserWhereUniqueInput>
}

type UserCreateOneWithoutPaymentsInput = {
  create?: Maybe<UserCreateWithoutPaymentsInput>
  connect?: Maybe<UserWhereUniqueInput>
}

type UserCreateOneWithoutQuotationsInput = {
  create?: Maybe<UserCreateWithoutQuotationsInput>
  connect?: Maybe<UserWhereUniqueInput>
}

type UserCreateOneWithoutShoppingCartInput = {
  create?: Maybe<UserCreateWithoutShoppingCartInput>
  connect?: Maybe<UserWhereUniqueInput>
}

type UserCreateWithoutAddressesInput = {
  id?: Maybe<Scalars['ID']>
  type?: Maybe<Scalars['String']>
  name: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  phone: Scalars['String']
  shoppingCart: ShoppingCartCreateOneWithoutCustomerInput
  quotations?: Maybe<QuotationCreateManyWithoutCustomerInput>
  payments?: Maybe<PaymentCreateManyWithoutCustomerInput>
}

type UserCreateWithoutPaymentsInput = {
  id?: Maybe<Scalars['ID']>
  type?: Maybe<Scalars['String']>
  name: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  phone: Scalars['String']
  shoppingCart: ShoppingCartCreateOneWithoutCustomerInput
  quotations?: Maybe<QuotationCreateManyWithoutCustomerInput>
  addresses?: Maybe<AddressCreateManyWithoutCustomerInput>
}

type UserCreateWithoutQuotationsInput = {
  id?: Maybe<Scalars['ID']>
  type?: Maybe<Scalars['String']>
  name: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  phone: Scalars['String']
  shoppingCart: ShoppingCartCreateOneWithoutCustomerInput
  payments?: Maybe<PaymentCreateManyWithoutCustomerInput>
  addresses?: Maybe<AddressCreateManyWithoutCustomerInput>
}

type UserCreateWithoutShoppingCartInput = {
  id?: Maybe<Scalars['ID']>
  type?: Maybe<Scalars['String']>
  name: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  phone: Scalars['String']
  quotations?: Maybe<QuotationCreateManyWithoutCustomerInput>
  payments?: Maybe<PaymentCreateManyWithoutCustomerInput>
  addresses?: Maybe<AddressCreateManyWithoutCustomerInput>
}

type UserEdge = {
  __typename?: 'UserEdge'
  node: User
  cursor: Scalars['String']
}

enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

type UserPreviousValues = {
  __typename?: 'UserPreviousValues'
  id: Scalars['ID']
  type?: Maybe<Scalars['String']>
  name: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  phone: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

type UserSubscriptionPayload = {
  __typename?: 'UserSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<User>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<UserPreviousValues>
}

type UserSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>
  updatedFields_contains?: Maybe<Scalars['String']>
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<UserWhereInput>
  AND?: Maybe<Array<UserSubscriptionWhereInput>>
  OR?: Maybe<Array<UserSubscriptionWhereInput>>
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>
}

type UserUpdateDataInput = {
  type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  shoppingCart?: Maybe<ShoppingCartUpdateOneRequiredWithoutCustomerInput>
  quotations?: Maybe<QuotationUpdateManyWithoutCustomerInput>
  payments?: Maybe<PaymentUpdateManyWithoutCustomerInput>
  addresses?: Maybe<AddressUpdateManyWithoutCustomerInput>
}

type UserUpdateInput = {
  type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  shoppingCart?: Maybe<ShoppingCartUpdateOneRequiredWithoutCustomerInput>
  quotations?: Maybe<QuotationUpdateManyWithoutCustomerInput>
  payments?: Maybe<PaymentUpdateManyWithoutCustomerInput>
  addresses?: Maybe<AddressUpdateManyWithoutCustomerInput>
}

type UserUpdateManyMutationInput = {
  type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
}

type UserUpdateOneRequiredInput = {
  create?: Maybe<UserCreateInput>
  update?: Maybe<UserUpdateDataInput>
  upsert?: Maybe<UserUpsertNestedInput>
  connect?: Maybe<UserWhereUniqueInput>
}

type UserUpdateOneRequiredWithoutAddressesInput = {
  create?: Maybe<UserCreateWithoutAddressesInput>
  update?: Maybe<UserUpdateWithoutAddressesDataInput>
  upsert?: Maybe<UserUpsertWithoutAddressesInput>
  connect?: Maybe<UserWhereUniqueInput>
}

type UserUpdateOneRequiredWithoutPaymentsInput = {
  create?: Maybe<UserCreateWithoutPaymentsInput>
  update?: Maybe<UserUpdateWithoutPaymentsDataInput>
  upsert?: Maybe<UserUpsertWithoutPaymentsInput>
  connect?: Maybe<UserWhereUniqueInput>
}

type UserUpdateOneRequiredWithoutQuotationsInput = {
  create?: Maybe<UserCreateWithoutQuotationsInput>
  update?: Maybe<UserUpdateWithoutQuotationsDataInput>
  upsert?: Maybe<UserUpsertWithoutQuotationsInput>
  connect?: Maybe<UserWhereUniqueInput>
}

type UserUpdateOneRequiredWithoutShoppingCartInput = {
  create?: Maybe<UserCreateWithoutShoppingCartInput>
  update?: Maybe<UserUpdateWithoutShoppingCartDataInput>
  upsert?: Maybe<UserUpsertWithoutShoppingCartInput>
  connect?: Maybe<UserWhereUniqueInput>
}

type UserUpdateWithoutAddressesDataInput = {
  type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  shoppingCart?: Maybe<ShoppingCartUpdateOneRequiredWithoutCustomerInput>
  quotations?: Maybe<QuotationUpdateManyWithoutCustomerInput>
  payments?: Maybe<PaymentUpdateManyWithoutCustomerInput>
}

type UserUpdateWithoutPaymentsDataInput = {
  type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  shoppingCart?: Maybe<ShoppingCartUpdateOneRequiredWithoutCustomerInput>
  quotations?: Maybe<QuotationUpdateManyWithoutCustomerInput>
  addresses?: Maybe<AddressUpdateManyWithoutCustomerInput>
}

type UserUpdateWithoutQuotationsDataInput = {
  type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  shoppingCart?: Maybe<ShoppingCartUpdateOneRequiredWithoutCustomerInput>
  payments?: Maybe<PaymentUpdateManyWithoutCustomerInput>
  addresses?: Maybe<AddressUpdateManyWithoutCustomerInput>
}

type UserUpdateWithoutShoppingCartDataInput = {
  type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  quotations?: Maybe<QuotationUpdateManyWithoutCustomerInput>
  payments?: Maybe<PaymentUpdateManyWithoutCustomerInput>
  addresses?: Maybe<AddressUpdateManyWithoutCustomerInput>
}

type UserUpsertNestedInput = {
  update: UserUpdateDataInput
  create: UserCreateInput
}

type UserUpsertWithoutAddressesInput = {
  update: UserUpdateWithoutAddressesDataInput
  create: UserCreateWithoutAddressesInput
}

type UserUpsertWithoutPaymentsInput = {
  update: UserUpdateWithoutPaymentsDataInput
  create: UserCreateWithoutPaymentsInput
}

type UserUpsertWithoutQuotationsInput = {
  update: UserUpdateWithoutQuotationsDataInput
  create: UserCreateWithoutQuotationsInput
}

type UserUpsertWithoutShoppingCartInput = {
  update: UserUpdateWithoutShoppingCartDataInput
  create: UserCreateWithoutShoppingCartInput
}

type UserWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  type?: Maybe<Scalars['String']>
  type_not?: Maybe<Scalars['String']>
  type_in?: Maybe<Array<Scalars['String']>>
  type_not_in?: Maybe<Array<Scalars['String']>>
  type_lt?: Maybe<Scalars['String']>
  type_lte?: Maybe<Scalars['String']>
  type_gt?: Maybe<Scalars['String']>
  type_gte?: Maybe<Scalars['String']>
  type_contains?: Maybe<Scalars['String']>
  type_not_contains?: Maybe<Scalars['String']>
  type_starts_with?: Maybe<Scalars['String']>
  type_not_starts_with?: Maybe<Scalars['String']>
  type_ends_with?: Maybe<Scalars['String']>
  type_not_ends_with?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  email_not?: Maybe<Scalars['String']>
  email_in?: Maybe<Array<Scalars['String']>>
  email_not_in?: Maybe<Array<Scalars['String']>>
  email_lt?: Maybe<Scalars['String']>
  email_lte?: Maybe<Scalars['String']>
  email_gt?: Maybe<Scalars['String']>
  email_gte?: Maybe<Scalars['String']>
  email_contains?: Maybe<Scalars['String']>
  email_not_contains?: Maybe<Scalars['String']>
  email_starts_with?: Maybe<Scalars['String']>
  email_not_starts_with?: Maybe<Scalars['String']>
  email_ends_with?: Maybe<Scalars['String']>
  email_not_ends_with?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  password_not?: Maybe<Scalars['String']>
  password_in?: Maybe<Array<Scalars['String']>>
  password_not_in?: Maybe<Array<Scalars['String']>>
  password_lt?: Maybe<Scalars['String']>
  password_lte?: Maybe<Scalars['String']>
  password_gt?: Maybe<Scalars['String']>
  password_gte?: Maybe<Scalars['String']>
  password_contains?: Maybe<Scalars['String']>
  password_not_contains?: Maybe<Scalars['String']>
  password_starts_with?: Maybe<Scalars['String']>
  password_not_starts_with?: Maybe<Scalars['String']>
  password_ends_with?: Maybe<Scalars['String']>
  password_not_ends_with?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  phone_not?: Maybe<Scalars['String']>
  phone_in?: Maybe<Array<Scalars['String']>>
  phone_not_in?: Maybe<Array<Scalars['String']>>
  phone_lt?: Maybe<Scalars['String']>
  phone_lte?: Maybe<Scalars['String']>
  phone_gt?: Maybe<Scalars['String']>
  phone_gte?: Maybe<Scalars['String']>
  phone_contains?: Maybe<Scalars['String']>
  phone_not_contains?: Maybe<Scalars['String']>
  phone_starts_with?: Maybe<Scalars['String']>
  phone_not_starts_with?: Maybe<Scalars['String']>
  phone_ends_with?: Maybe<Scalars['String']>
  phone_not_ends_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  shoppingCart?: Maybe<ShoppingCartWhereInput>
  quotations_every?: Maybe<QuotationWhereInput>
  quotations_some?: Maybe<QuotationWhereInput>
  quotations_none?: Maybe<QuotationWhereInput>
  payments_every?: Maybe<PaymentWhereInput>
  payments_some?: Maybe<PaymentWhereInput>
  payments_none?: Maybe<PaymentWhereInput>
  addresses_every?: Maybe<AddressWhereInput>
  addresses_some?: Maybe<AddressWhereInput>
  addresses_none?: Maybe<AddressWhereInput>
  AND?: Maybe<Array<UserWhereInput>>
  OR?: Maybe<Array<UserWhereInput>>
  NOT?: Maybe<Array<UserWhereInput>>
}

type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
  email?: Maybe<Scalars['String']>
}
