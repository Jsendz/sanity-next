import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { pageType } from './pageType'
import { pageBuilderType } from './pageBuilderType'
import { faqType } from './documents/faqType'
import { featuresType } from './blocks/featureType'
import { splitImageType } from './blocks/splitImageType'
import { faqsType } from './blocks/faqsType'
import { siteSettingsType } from './siteSettings'
import { heroType } from './blocks/heroType'
import { heroSection} from './blocks/hero-2Type'







export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, pageType, pageBuilderType, faqType, featuresType, splitImageType, faqsType, siteSettingsType, heroType, heroSection ],
}
