import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://api-sa-east-1.hygraph.com/v2/clb51rq9n0qd301uk6u1x4x8e/master',
  documents: 'src/graphql/queries.ts',
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: []
    }
  }
};

export default config;
