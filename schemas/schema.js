import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import singletonHome from './singletonHome'
import singletonAbout from './singletonAbout'
import singletonContact from './singletonContact'

import work from './work'
import categories from './categories'

import seo from './common/seo'
import service from './common/service'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    singletonHome,
    singletonAbout,
    singletonContact,
    work,
    categories,
    seo,
    service
  ]),
})
