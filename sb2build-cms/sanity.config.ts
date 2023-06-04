import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'Sb2build CMS',
  basePath: '/',
  projectId: '1cqzrjog',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool({
      defaultApiVersion: 'v2021-10-21',
      defaultDataset: 'production',
    }),
    media(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})