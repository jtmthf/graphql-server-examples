import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    articles: <T = Article[]>(args: { where?: ArticleWhereInput, orderBy?: ArticleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Comment[]>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tags: <T = Tag[]>(args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    article: <T = Article | null>(args: { where: ArticleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    articlesConnection: <T = ArticleConnection>(args: { where?: ArticleWhereInput, orderBy?: ArticleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tagsConnection: <T = TagConnection>(args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createArticle: <T = Article>(args: { data: ArticleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTag: <T = Tag>(args: { data: TagCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateArticle: <T = Article | null>(args: { data: ArticleUpdateInput, where: ArticleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateComment: <T = Comment | null>(args: { data: CommentUpdateInput, where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTag: <T = Tag | null>(args: { data: TagUpdateInput, where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteArticle: <T = Article | null>(args: { where: ArticleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteComment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertArticle: <T = Article>(args: { where: ArticleWhereUniqueInput, create: ArticleCreateInput, update: ArticleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertComment: <T = Comment>(args: { where: CommentWhereUniqueInput, create: CommentCreateInput, update: CommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTag: <T = Tag>(args: { where: TagWhereUniqueInput, create: TagCreateInput, update: TagUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyArticles: <T = BatchPayload>(args: { data: ArticleUpdateInput, where?: ArticleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateInput, where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTags: <T = BatchPayload>(args: { data: TagUpdateInput, where?: TagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyArticles: <T = BatchPayload>(args: { where?: ArticleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTags: <T = BatchPayload>(args: { where?: TagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    article: <T = ArticleSubscriptionPayload | null>(args: { where?: ArticleSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    tag: <T = TagSubscriptionPayload | null>(args: { where?: TagSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Article: (where?: ArticleWhereInput) => Promise<boolean>
  Comment: (where?: CommentWhereInput) => Promise<boolean>
  Tag: (where?: TagWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateArticle {
  count: Int!
}

type AggregateComment {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Article implements Node {
  id: ID!
  slug: String!
  title: String!
  description: String!
  body: String!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  createdAt: DateTime!
  updatedAt: DateTime!
  favoritedBy(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  author(where: UserWhereInput): User!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
}

"""A connection to a list of items."""
type ArticleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ArticleEdge]!
  aggregate: AggregateArticle!
}

input ArticleCreateInput {
  slug: String!
  title: String!
  description: String!
  body: String!
  tags: TagCreateManyInput
  favoritedBy: UserCreateManyWithoutFavoritedArticleInput
  author: UserCreateOneWithoutArticlesInput!
  comments: CommentCreateManyInput
}

input ArticleCreateManyWithoutAuthorInput {
  create: [ArticleCreateWithoutAuthorInput!]
  connect: [ArticleWhereUniqueInput!]
}

input ArticleCreateManyWithoutFavoritedByInput {
  create: [ArticleCreateWithoutFavoritedByInput!]
  connect: [ArticleWhereUniqueInput!]
}

input ArticleCreateWithoutAuthorInput {
  slug: String!
  title: String!
  description: String!
  body: String!
  tags: TagCreateManyInput
  favoritedBy: UserCreateManyWithoutFavoritedArticleInput
  comments: CommentCreateManyInput
}

input ArticleCreateWithoutFavoritedByInput {
  slug: String!
  title: String!
  description: String!
  body: String!
  tags: TagCreateManyInput
  author: UserCreateOneWithoutArticlesInput!
  comments: CommentCreateManyInput
}

"""An edge in a connection."""
type ArticleEdge {
  """The item at the end of the edge."""
  node: Article!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ArticleOrderByInput {
  id_ASC
  id_DESC
  slug_ASC
  slug_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  body_ASC
  body_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ArticlePreviousValues {
  id: ID!
  slug: String!
  title: String!
  description: String!
  body: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ArticleSubscriptionPayload {
  mutation: MutationType!
  node: Article
  updatedFields: [String!]
  previousValues: ArticlePreviousValues
}

input ArticleSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ArticleSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ArticleSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ArticleSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ArticleWhereInput
}

input ArticleUpdateInput {
  slug: String
  title: String
  description: String
  body: String
  tags: TagUpdateManyInput
  favoritedBy: UserUpdateManyWithoutFavoritedArticleInput
  author: UserUpdateOneWithoutArticlesInput
  comments: CommentUpdateManyInput
}

input ArticleUpdateManyWithoutAuthorInput {
  create: [ArticleCreateWithoutAuthorInput!]
  connect: [ArticleWhereUniqueInput!]
  disconnect: [ArticleWhereUniqueInput!]
  delete: [ArticleWhereUniqueInput!]
  update: [ArticleUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [ArticleUpsertWithWhereUniqueWithoutAuthorInput!]
}

input ArticleUpdateManyWithoutFavoritedByInput {
  create: [ArticleCreateWithoutFavoritedByInput!]
  connect: [ArticleWhereUniqueInput!]
  disconnect: [ArticleWhereUniqueInput!]
  delete: [ArticleWhereUniqueInput!]
  update: [ArticleUpdateWithWhereUniqueWithoutFavoritedByInput!]
  upsert: [ArticleUpsertWithWhereUniqueWithoutFavoritedByInput!]
}

input ArticleUpdateWithoutAuthorDataInput {
  slug: String
  title: String
  description: String
  body: String
  tags: TagUpdateManyInput
  favoritedBy: UserUpdateManyWithoutFavoritedArticleInput
  comments: CommentUpdateManyInput
}

input ArticleUpdateWithoutFavoritedByDataInput {
  slug: String
  title: String
  description: String
  body: String
  tags: TagUpdateManyInput
  author: UserUpdateOneWithoutArticlesInput
  comments: CommentUpdateManyInput
}

input ArticleUpdateWithWhereUniqueWithoutAuthorInput {
  where: ArticleWhereUniqueInput!
  data: ArticleUpdateWithoutAuthorDataInput!
}

input ArticleUpdateWithWhereUniqueWithoutFavoritedByInput {
  where: ArticleWhereUniqueInput!
  data: ArticleUpdateWithoutFavoritedByDataInput!
}

input ArticleUpsertWithWhereUniqueWithoutAuthorInput {
  where: ArticleWhereUniqueInput!
  update: ArticleUpdateWithoutAuthorDataInput!
  create: ArticleCreateWithoutAuthorInput!
}

input ArticleUpsertWithWhereUniqueWithoutFavoritedByInput {
  where: ArticleWhereUniqueInput!
  update: ArticleUpdateWithoutFavoritedByDataInput!
  create: ArticleCreateWithoutFavoritedByInput!
}

input ArticleWhereInput {
  """Logical AND on all given filters."""
  AND: [ArticleWhereInput!]

  """Logical OR on all given filters."""
  OR: [ArticleWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ArticleWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  body: String

  """All values that are not equal to given value."""
  body_not: String

  """All values that are contained in given list."""
  body_in: [String!]

  """All values that are not contained in given list."""
  body_not_in: [String!]

  """All values less than the given value."""
  body_lt: String

  """All values less than or equal the given value."""
  body_lte: String

  """All values greater than the given value."""
  body_gt: String

  """All values greater than or equal the given value."""
  body_gte: String

  """All values containing the given string."""
  body_contains: String

  """All values not containing the given string."""
  body_not_contains: String

  """All values starting with the given string."""
  body_starts_with: String

  """All values not starting with the given string."""
  body_not_starts_with: String

  """All values ending with the given string."""
  body_ends_with: String

  """All values not ending with the given string."""
  body_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  favoritedBy_every: UserWhereInput
  favoritedBy_some: UserWhereInput
  favoritedBy_none: UserWhereInput
  author: UserWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
}

input ArticleWhereUniqueInput {
  id: ID
  slug: String
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Comment implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  body: String!
  author(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type CommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  body: String!
  author: UserCreateOneInput!
}

input CommentCreateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
}

"""An edge in a connection."""
type CommentEdge {
  """The item at the end of the edge."""
  node: Comment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  body_ASC
  body_DESC
}

type CommentPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  body: String!
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
}

input CommentUpdateDataInput {
  body: String
  author: UserUpdateOneInput
}

input CommentUpdateInput {
  body: String
  author: UserUpdateOneInput
}

input CommentUpdateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  delete: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueNestedInput!]
  upsert: [CommentUpsertWithWhereUniqueNestedInput!]
}

input CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateDataInput!
}

input CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateDataInput!
  create: CommentCreateInput!
}

input CommentWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  body: String

  """All values that are not equal to given value."""
  body_not: String

  """All values that are contained in given list."""
  body_in: [String!]

  """All values that are not contained in given list."""
  body_not_in: [String!]

  """All values less than the given value."""
  body_lt: String

  """All values less than or equal the given value."""
  body_lte: String

  """All values greater than the given value."""
  body_gt: String

  """All values greater than or equal the given value."""
  body_gte: String

  """All values containing the given string."""
  body_contains: String

  """All values not containing the given string."""
  body_not_contains: String

  """All values starting with the given string."""
  body_starts_with: String

  """All values not starting with the given string."""
  body_not_starts_with: String

  """All values ending with the given string."""
  body_ends_with: String

  """All values not ending with the given string."""
  body_not_ends_with: String
  author: UserWhereInput
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createArticle(data: ArticleCreateInput!): Article!
  createComment(data: CommentCreateInput!): Comment!
  createTag(data: TagCreateInput!): Tag!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateArticle(data: ArticleUpdateInput!, where: ArticleWhereUniqueInput!): Article
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  deleteUser(where: UserWhereUniqueInput!): User
  deleteArticle(where: ArticleWhereUniqueInput!): Article
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteTag(where: TagWhereUniqueInput!): Tag
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertArticle(where: ArticleWhereUniqueInput!, create: ArticleCreateInput!, update: ArticleUpdateInput!): Article!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyArticles(data: ArticleUpdateInput!, where: ArticleWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateInput!, where: CommentWhereInput): BatchPayload!
  updateManyTags(data: TagUpdateInput!, where: TagWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyArticles(where: ArticleWhereInput): BatchPayload!
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  deleteManyTags(where: TagWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  articles(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Article]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  user(where: UserWhereUniqueInput!): User
  article(where: ArticleWhereUniqueInput!): Article
  comment(where: CommentWhereUniqueInput!): Comment
  tag(where: TagWhereUniqueInput!): Tag
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  articlesConnection(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArticleConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  article(where: ArticleSubscriptionWhereInput): ArticleSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
}

type Tag implements Node {
  id: ID!
  name: String!
}

"""A connection to a list of items."""
type TagConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  name: String!
}

input TagCreateManyInput {
  create: [TagCreateInput!]
  connect: [TagWhereUniqueInput!]
}

"""An edge in a connection."""
type TagEdge {
  """The item at the end of the edge."""
  node: Tag!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TagPreviousValues {
  id: ID!
  name: String!
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TagSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TagWhereInput
}

input TagUpdateDataInput {
  name: String
}

input TagUpdateInput {
  name: String
}

input TagUpdateManyInput {
  create: [TagCreateInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  delete: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueNestedInput!]
  upsert: [TagUpsertWithWhereUniqueNestedInput!]
}

input TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput!
  data: TagUpdateDataInput!
}

input TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput!
  update: TagUpdateDataInput!
  create: TagCreateInput!
}

input TagWhereInput {
  """Logical AND on all given filters."""
  AND: [TagWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input TagWhereUniqueInput {
  id: ID
  name: String
}

type User implements Node {
  id: ID!
  email: String!
  username: String!
  bio: String
  image: String
  following(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  followers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  favoritedArticle(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Article!]
  articles(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Article!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  username: String!
  bio: String
  image: String
  following: UserCreateManyWithoutFollowersInput
  followers: UserCreateManyWithoutFollowingInput
  favoritedArticle: ArticleCreateManyWithoutFavoritedByInput
  articles: ArticleCreateManyWithoutAuthorInput
}

input UserCreateManyWithoutFavoritedArticleInput {
  create: [UserCreateWithoutFavoritedArticleInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutFollowersInput {
  create: [UserCreateWithoutFollowersInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutFollowingInput {
  create: [UserCreateWithoutFollowingInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutArticlesInput {
  create: UserCreateWithoutArticlesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutArticlesInput {
  email: String!
  username: String!
  bio: String
  image: String
  following: UserCreateManyWithoutFollowersInput
  followers: UserCreateManyWithoutFollowingInput
  favoritedArticle: ArticleCreateManyWithoutFavoritedByInput
}

input UserCreateWithoutFavoritedArticleInput {
  email: String!
  username: String!
  bio: String
  image: String
  following: UserCreateManyWithoutFollowersInput
  followers: UserCreateManyWithoutFollowingInput
  articles: ArticleCreateManyWithoutAuthorInput
}

input UserCreateWithoutFollowersInput {
  email: String!
  username: String!
  bio: String
  image: String
  following: UserCreateManyWithoutFollowersInput
  favoritedArticle: ArticleCreateManyWithoutFavoritedByInput
  articles: ArticleCreateManyWithoutAuthorInput
}

input UserCreateWithoutFollowingInput {
  email: String!
  username: String!
  bio: String
  image: String
  followers: UserCreateManyWithoutFollowingInput
  favoritedArticle: ArticleCreateManyWithoutFavoritedByInput
  articles: ArticleCreateManyWithoutAuthorInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  bio_ASC
  bio_DESC
  image_ASC
  image_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  username: String!
  bio: String
  image: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  username: String
  bio: String
  image: String
  following: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFollowingInput
  favoritedArticle: ArticleUpdateManyWithoutFavoritedByInput
  articles: ArticleUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  email: String
  username: String
  bio: String
  image: String
  following: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFollowingInput
  favoritedArticle: ArticleUpdateManyWithoutFavoritedByInput
  articles: ArticleUpdateManyWithoutAuthorInput
}

input UserUpdateManyWithoutFavoritedArticleInput {
  create: [UserCreateWithoutFavoritedArticleInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFavoritedArticleInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFavoritedArticleInput!]
}

input UserUpdateManyWithoutFollowersInput {
  create: [UserCreateWithoutFollowersInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFollowersInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFollowersInput!]
}

input UserUpdateManyWithoutFollowingInput {
  create: [UserCreateWithoutFollowingInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFollowingInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFollowingInput!]
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutArticlesInput {
  create: UserCreateWithoutArticlesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutArticlesDataInput
  upsert: UserUpsertWithoutArticlesInput
}

input UserUpdateWithoutArticlesDataInput {
  email: String
  username: String
  bio: String
  image: String
  following: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFollowingInput
  favoritedArticle: ArticleUpdateManyWithoutFavoritedByInput
}

input UserUpdateWithoutFavoritedArticleDataInput {
  email: String
  username: String
  bio: String
  image: String
  following: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFollowingInput
  articles: ArticleUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutFollowersDataInput {
  email: String
  username: String
  bio: String
  image: String
  following: UserUpdateManyWithoutFollowersInput
  favoritedArticle: ArticleUpdateManyWithoutFavoritedByInput
  articles: ArticleUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutFollowingDataInput {
  email: String
  username: String
  bio: String
  image: String
  followers: UserUpdateManyWithoutFollowingInput
  favoritedArticle: ArticleUpdateManyWithoutFavoritedByInput
  articles: ArticleUpdateManyWithoutAuthorInput
}

input UserUpdateWithWhereUniqueWithoutFavoritedArticleInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFavoritedArticleDataInput!
}

input UserUpdateWithWhereUniqueWithoutFollowersInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFollowersDataInput!
}

input UserUpdateWithWhereUniqueWithoutFollowingInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFollowingDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutArticlesInput {
  update: UserUpdateWithoutArticlesDataInput!
  create: UserCreateWithoutArticlesInput!
}

input UserUpsertWithWhereUniqueWithoutFavoritedArticleInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFavoritedArticleDataInput!
  create: UserCreateWithoutFavoritedArticleInput!
}

input UserUpsertWithWhereUniqueWithoutFollowersInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFollowersDataInput!
  create: UserCreateWithoutFollowersInput!
}

input UserUpsertWithWhereUniqueWithoutFollowingInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFollowingDataInput!
  create: UserCreateWithoutFollowingInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  bio: String

  """All values that are not equal to given value."""
  bio_not: String

  """All values that are contained in given list."""
  bio_in: [String!]

  """All values that are not contained in given list."""
  bio_not_in: [String!]

  """All values less than the given value."""
  bio_lt: String

  """All values less than or equal the given value."""
  bio_lte: String

  """All values greater than the given value."""
  bio_gt: String

  """All values greater than or equal the given value."""
  bio_gte: String

  """All values containing the given string."""
  bio_contains: String

  """All values not containing the given string."""
  bio_not_contains: String

  """All values starting with the given string."""
  bio_starts_with: String

  """All values not starting with the given string."""
  bio_not_starts_with: String

  """All values ending with the given string."""
  bio_ends_with: String

  """All values not ending with the given string."""
  bio_not_ends_with: String
  image: String

  """All values that are not equal to given value."""
  image_not: String

  """All values that are contained in given list."""
  image_in: [String!]

  """All values that are not contained in given list."""
  image_not_in: [String!]

  """All values less than the given value."""
  image_lt: String

  """All values less than or equal the given value."""
  image_lte: String

  """All values greater than the given value."""
  image_gt: String

  """All values greater than or equal the given value."""
  image_gte: String

  """All values containing the given string."""
  image_contains: String

  """All values not containing the given string."""
  image_not_contains: String

  """All values starting with the given string."""
  image_starts_with: String

  """All values not starting with the given string."""
  image_not_starts_with: String

  """All values ending with the given string."""
  image_ends_with: String

  """All values not ending with the given string."""
  image_not_ends_with: String
  following_every: UserWhereInput
  following_some: UserWhereInput
  following_none: UserWhereInput
  followers_every: UserWhereInput
  followers_some: UserWhereInput
  followers_none: UserWhereInput
  favoritedArticle_every: ArticleWhereInput
  favoritedArticle_some: ArticleWhereInput
  favoritedArticle_none: ArticleWhereInput
  articles_every: ArticleWhereInput
  articles_some: ArticleWhereInput
  articles_none: ArticleWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'username_ASC' |
  'username_DESC' |
  'bio_ASC' |
  'bio_DESC' |
  'image_ASC' |
  'image_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ArticleOrderByInput =   'id_ASC' |
  'id_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC' |
  'body_ASC' |
  'body_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type TagOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'body_ASC' |
  'body_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface ArticleCreateInput {
  slug: String
  title: String
  description: String
  body: String
  tags?: TagCreateManyInput
  favoritedBy?: UserCreateManyWithoutFavoritedArticleInput
  author: UserCreateOneWithoutArticlesInput
  comments?: CommentCreateManyInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  username?: String
  username_not?: String
  username_in?: String[] | String
  username_not_in?: String[] | String
  username_lt?: String
  username_lte?: String
  username_gt?: String
  username_gte?: String
  username_contains?: String
  username_not_contains?: String
  username_starts_with?: String
  username_not_starts_with?: String
  username_ends_with?: String
  username_not_ends_with?: String
  bio?: String
  bio_not?: String
  bio_in?: String[] | String
  bio_not_in?: String[] | String
  bio_lt?: String
  bio_lte?: String
  bio_gt?: String
  bio_gte?: String
  bio_contains?: String
  bio_not_contains?: String
  bio_starts_with?: String
  bio_not_starts_with?: String
  bio_ends_with?: String
  bio_not_ends_with?: String
  image?: String
  image_not?: String
  image_in?: String[] | String
  image_not_in?: String[] | String
  image_lt?: String
  image_lte?: String
  image_gt?: String
  image_gte?: String
  image_contains?: String
  image_not_contains?: String
  image_starts_with?: String
  image_not_starts_with?: String
  image_ends_with?: String
  image_not_ends_with?: String
  following_every?: UserWhereInput
  following_some?: UserWhereInput
  following_none?: UserWhereInput
  followers_every?: UserWhereInput
  followers_some?: UserWhereInput
  followers_none?: UserWhereInput
  favoritedArticle_every?: ArticleWhereInput
  favoritedArticle_some?: ArticleWhereInput
  favoritedArticle_none?: ArticleWhereInput
  articles_every?: ArticleWhereInput
  articles_some?: ArticleWhereInput
  articles_none?: ArticleWhereInput
}

export interface UserUpdateWithoutFollowersDataInput {
  email?: String
  username?: String
  bio?: String
  image?: String
  following?: UserUpdateManyWithoutFollowersInput
  favoritedArticle?: ArticleUpdateManyWithoutFavoritedByInput
  articles?: ArticleUpdateManyWithoutAuthorInput
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | CommentWhereInput
  OR?: CommentWhereInput[] | CommentWhereInput
  NOT?: CommentWhereInput[] | CommentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  body?: String
  body_not?: String
  body_in?: String[] | String
  body_not_in?: String[] | String
  body_lt?: String
  body_lte?: String
  body_gt?: String
  body_gte?: String
  body_contains?: String
  body_not_contains?: String
  body_starts_with?: String
  body_not_starts_with?: String
  body_ends_with?: String
  body_not_ends_with?: String
  author?: UserWhereInput
}

export interface UserCreateWithoutArticlesInput {
  email: String
  username: String
  bio?: String
  image?: String
  following?: UserCreateManyWithoutFollowersInput
  followers?: UserCreateManyWithoutFollowingInput
  favoritedArticle?: ArticleCreateManyWithoutFavoritedByInput
}

export interface UserUpdateWithoutFavoritedArticleDataInput {
  email?: String
  username?: String
  bio?: String
  image?: String
  following?: UserUpdateManyWithoutFollowersInput
  followers?: UserUpdateManyWithoutFollowingInput
  articles?: ArticleUpdateManyWithoutAuthorInput
}

export interface UserCreateManyWithoutFollowingInput {
  create?: UserCreateWithoutFollowingInput[] | UserCreateWithoutFollowingInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ArticleUpdateManyWithoutFavoritedByInput {
  create?: ArticleCreateWithoutFavoritedByInput[] | ArticleCreateWithoutFavoritedByInput
  connect?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
  disconnect?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
  delete?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
  update?: ArticleUpdateWithWhereUniqueWithoutFavoritedByInput[] | ArticleUpdateWithWhereUniqueWithoutFavoritedByInput
  upsert?: ArticleUpsertWithWhereUniqueWithoutFavoritedByInput[] | ArticleUpsertWithWhereUniqueWithoutFavoritedByInput
}

export interface UserCreateWithoutFollowingInput {
  email: String
  username: String
  bio?: String
  image?: String
  followers?: UserCreateManyWithoutFollowingInput
  favoritedArticle?: ArticleCreateManyWithoutFavoritedByInput
  articles?: ArticleCreateManyWithoutAuthorInput
}

export interface TagSubscriptionWhereInput {
  AND?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  OR?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  NOT?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TagWhereInput
}

export interface ArticleCreateManyWithoutAuthorInput {
  create?: ArticleCreateWithoutAuthorInput[] | ArticleCreateWithoutAuthorInput
  connect?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
}

export interface ArticleSubscriptionWhereInput {
  AND?: ArticleSubscriptionWhereInput[] | ArticleSubscriptionWhereInput
  OR?: ArticleSubscriptionWhereInput[] | ArticleSubscriptionWhereInput
  NOT?: ArticleSubscriptionWhereInput[] | ArticleSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ArticleWhereInput
}

export interface ArticleCreateWithoutAuthorInput {
  slug: String
  title: String
  description: String
  body: String
  tags?: TagCreateManyInput
  favoritedBy?: UserCreateManyWithoutFavoritedArticleInput
  comments?: CommentCreateManyInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserCreateManyWithoutFavoritedArticleInput {
  create?: UserCreateWithoutFavoritedArticleInput[] | UserCreateWithoutFavoritedArticleInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ArticleWhereUniqueInput {
  id?: ID_Input
  slug?: String
}

export interface UserCreateWithoutFavoritedArticleInput {
  email: String
  username: String
  bio?: String
  image?: String
  following?: UserCreateManyWithoutFollowersInput
  followers?: UserCreateManyWithoutFollowingInput
  articles?: ArticleCreateManyWithoutAuthorInput
}

export interface TagWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface CommentCreateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface CommentUpdateInput {
  body?: String
  author?: UserUpdateOneInput
}

export interface CommentCreateInput {
  body: String
  author: UserCreateOneInput
}

export interface UserUpsertWithWhereUniqueWithoutFollowersInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutFollowersDataInput
  create: UserCreateWithoutFollowersInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface UserUpsertWithoutArticlesInput {
  update: UserUpdateWithoutArticlesDataInput
  create: UserCreateWithoutArticlesInput
}

export interface CommentUpdateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueNestedInput[] | CommentUpdateWithWhereUniqueNestedInput
  upsert?: CommentUpsertWithWhereUniqueNestedInput[] | CommentUpsertWithWhereUniqueNestedInput
}

export interface ArticleUpsertWithWhereUniqueWithoutAuthorInput {
  where: ArticleWhereUniqueInput
  update: ArticleUpdateWithoutAuthorDataInput
  create: ArticleCreateWithoutAuthorInput
}

export interface UserUpdateInput {
  email?: String
  username?: String
  bio?: String
  image?: String
  following?: UserUpdateManyWithoutFollowersInput
  followers?: UserUpdateManyWithoutFollowingInput
  favoritedArticle?: ArticleUpdateManyWithoutFavoritedByInput
  articles?: ArticleUpdateManyWithoutAuthorInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpdateManyWithoutFollowersInput {
  create?: UserCreateWithoutFollowersInput[] | UserCreateWithoutFollowersInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutFollowersInput[] | UserUpdateWithWhereUniqueWithoutFollowersInput
  upsert?: UserUpsertWithWhereUniqueWithoutFollowersInput[] | UserUpsertWithWhereUniqueWithoutFollowersInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface UserUpdateWithWhereUniqueWithoutFollowersInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutFollowersDataInput
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateDataInput
}

export interface UserUpsertWithWhereUniqueWithoutFavoritedArticleInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutFavoritedArticleDataInput
  create: UserCreateWithoutFavoritedArticleInput
}

export interface UserCreateManyWithoutFollowersInput {
  create?: UserCreateWithoutFollowersInput[] | UserCreateWithoutFollowersInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ArticleCreateManyWithoutFavoritedByInput {
  create?: ArticleCreateWithoutFavoritedByInput[] | ArticleCreateWithoutFavoritedByInput
  connect?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
}

export interface TagCreateManyInput {
  create?: TagCreateInput[] | TagCreateInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
}

export interface ArticleUpdateWithWhereUniqueWithoutFavoritedByInput {
  where: ArticleWhereUniqueInput
  data: ArticleUpdateWithoutFavoritedByDataInput
}

export interface UserCreateOneWithoutArticlesInput {
  create?: UserCreateWithoutArticlesInput
  connect?: UserWhereUniqueInput
}

export interface ArticleUpdateWithoutFavoritedByDataInput {
  slug?: String
  title?: String
  description?: String
  body?: String
  tags?: TagUpdateManyInput
  author?: UserUpdateOneWithoutArticlesInput
  comments?: CommentUpdateManyInput
}

export interface CommentSubscriptionWhereInput {
  AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  NOT?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CommentWhereInput
}

export interface TagUpdateManyInput {
  create?: TagCreateInput[] | TagCreateInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
  disconnect?: TagWhereUniqueInput[] | TagWhereUniqueInput
  delete?: TagWhereUniqueInput[] | TagWhereUniqueInput
  update?: TagUpdateWithWhereUniqueNestedInput[] | TagUpdateWithWhereUniqueNestedInput
  upsert?: TagUpsertWithWhereUniqueNestedInput[] | TagUpsertWithWhereUniqueNestedInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
  username?: String
}

export interface TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  data: TagUpdateDataInput
}

export interface TagUpdateInput {
  name?: String
}

export interface TagUpdateDataInput {
  name?: String
}

export interface ArticleUpsertWithWhereUniqueWithoutFavoritedByInput {
  where: ArticleWhereUniqueInput
  update: ArticleUpdateWithoutFavoritedByDataInput
  create: ArticleCreateWithoutFavoritedByInput
}

export interface TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  update: TagUpdateDataInput
  create: TagCreateInput
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface UserUpdateOneWithoutArticlesInput {
  create?: UserCreateWithoutArticlesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutArticlesDataInput
  upsert?: UserUpsertWithoutArticlesInput
}

export interface CommentUpdateDataInput {
  body?: String
  author?: UserUpdateOneInput
}

export interface UserUpdateWithoutArticlesDataInput {
  email?: String
  username?: String
  bio?: String
  image?: String
  following?: UserUpdateManyWithoutFollowersInput
  followers?: UserUpdateManyWithoutFollowingInput
  favoritedArticle?: ArticleUpdateManyWithoutFavoritedByInput
}

export interface UserCreateWithoutFollowersInput {
  email: String
  username: String
  bio?: String
  image?: String
  following?: UserCreateManyWithoutFollowersInput
  favoritedArticle?: ArticleCreateManyWithoutFavoritedByInput
  articles?: ArticleCreateManyWithoutAuthorInput
}

export interface UserUpdateManyWithoutFollowingInput {
  create?: UserCreateWithoutFollowingInput[] | UserCreateWithoutFollowingInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutFollowingInput[] | UserUpdateWithWhereUniqueWithoutFollowingInput
  upsert?: UserUpsertWithWhereUniqueWithoutFollowingInput[] | UserUpsertWithWhereUniqueWithoutFollowingInput
}

export interface TagCreateInput {
  name: String
}

export interface UserUpdateWithWhereUniqueWithoutFollowingInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutFollowingDataInput
}

export interface ArticleWhereInput {
  AND?: ArticleWhereInput[] | ArticleWhereInput
  OR?: ArticleWhereInput[] | ArticleWhereInput
  NOT?: ArticleWhereInput[] | ArticleWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  body?: String
  body_not?: String
  body_in?: String[] | String
  body_not_in?: String[] | String
  body_lt?: String
  body_lte?: String
  body_gt?: String
  body_gte?: String
  body_contains?: String
  body_not_contains?: String
  body_starts_with?: String
  body_not_starts_with?: String
  body_ends_with?: String
  body_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  tags_every?: TagWhereInput
  tags_some?: TagWhereInput
  tags_none?: TagWhereInput
  favoritedBy_every?: UserWhereInput
  favoritedBy_some?: UserWhereInput
  favoritedBy_none?: UserWhereInput
  author?: UserWhereInput
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
}

export interface UserUpdateWithoutFollowingDataInput {
  email?: String
  username?: String
  bio?: String
  image?: String
  followers?: UserUpdateManyWithoutFollowingInput
  favoritedArticle?: ArticleUpdateManyWithoutFavoritedByInput
  articles?: ArticleUpdateManyWithoutAuthorInput
}

export interface ArticleUpdateInput {
  slug?: String
  title?: String
  description?: String
  body?: String
  tags?: TagUpdateManyInput
  favoritedBy?: UserUpdateManyWithoutFavoritedArticleInput
  author?: UserUpdateOneWithoutArticlesInput
  comments?: CommentUpdateManyInput
}

export interface ArticleUpdateManyWithoutAuthorInput {
  create?: ArticleCreateWithoutAuthorInput[] | ArticleCreateWithoutAuthorInput
  connect?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
  disconnect?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
  delete?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
  update?: ArticleUpdateWithWhereUniqueWithoutAuthorInput[] | ArticleUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: ArticleUpsertWithWhereUniqueWithoutAuthorInput[] | ArticleUpsertWithWhereUniqueWithoutAuthorInput
}

export interface UserUpdateDataInput {
  email?: String
  username?: String
  bio?: String
  image?: String
  following?: UserUpdateManyWithoutFollowersInput
  followers?: UserUpdateManyWithoutFollowingInput
  favoritedArticle?: ArticleUpdateManyWithoutFavoritedByInput
  articles?: ArticleUpdateManyWithoutAuthorInput
}

export interface UserUpdateWithWhereUniqueWithoutFavoritedArticleInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutFavoritedArticleDataInput
}

export interface UserUpdateManyWithoutFavoritedArticleInput {
  create?: UserCreateWithoutFavoritedArticleInput[] | UserCreateWithoutFavoritedArticleInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutFavoritedArticleInput[] | UserUpdateWithWhereUniqueWithoutFavoritedArticleInput
  upsert?: UserUpsertWithWhereUniqueWithoutFavoritedArticleInput[] | UserUpsertWithWhereUniqueWithoutFavoritedArticleInput
}

export interface ArticleUpdateWithoutAuthorDataInput {
  slug?: String
  title?: String
  description?: String
  body?: String
  tags?: TagUpdateManyInput
  favoritedBy?: UserUpdateManyWithoutFavoritedArticleInput
  comments?: CommentUpdateManyInput
}

export interface ArticleUpdateWithWhereUniqueWithoutAuthorInput {
  where: ArticleWhereUniqueInput
  data: ArticleUpdateWithoutAuthorDataInput
}

export interface UserCreateInput {
  email: String
  username: String
  bio?: String
  image?: String
  following?: UserCreateManyWithoutFollowersInput
  followers?: UserCreateManyWithoutFollowingInput
  favoritedArticle?: ArticleCreateManyWithoutFavoritedByInput
  articles?: ArticleCreateManyWithoutAuthorInput
}

export interface UserUpsertWithWhereUniqueWithoutFollowingInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutFollowingDataInput
  create: UserCreateWithoutFollowingInput
}

export interface CommentWhereUniqueInput {
  id?: ID_Input
}

export interface TagWhereInput {
  AND?: TagWhereInput[] | TagWhereInput
  OR?: TagWhereInput[] | TagWhereInput
  NOT?: TagWhereInput[] | TagWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
}

export interface ArticleCreateWithoutFavoritedByInput {
  slug: String
  title: String
  description: String
  body: String
  tags?: TagCreateManyInput
  author: UserCreateOneWithoutArticlesInput
  comments?: CommentCreateManyInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface TagPreviousValues {
  id: ID_Output
  name: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface User extends Node {
  id: ID_Output
  email: String
  username: String
  bio?: String
  image?: String
  following?: User[]
  followers?: User[]
  favoritedArticle?: Article[]
  articles?: Article[]
}

export interface BatchPayload {
  count: Long
}

export interface AggregateTag {
  count: Int
}

export interface Article extends Node {
  id: ID_Output
  slug: String
  title: String
  description: String
  body: String
  tags?: Tag[]
  createdAt: DateTime
  updatedAt: DateTime
  favoritedBy?: User[]
  author: User
  comments?: Comment[]
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment
  updatedFields?: String[]
  previousValues?: CommentPreviousValues
}

/*
 * An edge in a connection.

 */
export interface TagEdge {
  node: Tag
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface TagConnection {
  pageInfo: PageInfo
  edges: TagEdge[]
  aggregate: AggregateTag
}

export interface AggregateComment {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: CommentEdge[]
  aggregate: AggregateComment
}

export interface Comment extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  body: String
  author: User
}

/*
 * An edge in a connection.

 */
export interface ArticleEdge {
  node: Article
  cursor: String
}

export interface CommentPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  body: String
}

export interface AggregateUser {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface TagSubscriptionPayload {
  mutation: MutationType
  node?: Tag
  updatedFields?: String[]
  previousValues?: TagPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
  cursor: String
}

export interface ArticlePreviousValues {
  id: ID_Output
  slug: String
  title: String
  description: String
  body: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface ArticleSubscriptionPayload {
  mutation: MutationType
  node?: Article
  updatedFields?: String[]
  previousValues?: ArticlePreviousValues
}

export interface Tag extends Node {
  id: ID_Output
  name: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  username: String
  bio?: String
  image?: String
}

export interface AggregateArticle {
  count: Int
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface ArticleConnection {
  pageInfo: PageInfo
  edges: ArticleEdge[]
  aggregate: AggregateArticle
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string