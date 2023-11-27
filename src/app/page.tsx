import {Fragment, useEffect, useState} from 'react'
import {compile, run} from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import {resolve} from 'import-meta-resolve'

async function getContent() {
  const code = String(await compile(`
  import Button from '@/components/button';

  Hello World !
  
  <Button />
  `, {
    outputFormat: 'function-body',
    development: false,
    // providerImportSource: import.meta.resolve('../../../../mdx-components.ts')
    providerImportSource: resolve('../../../../mdx-components.ts', import.meta.url)
  }))

  const mdxModule = await run(code, {...runtime, baseUrl: import.meta.url, Fragment: Fragment})

  return {
    MDXContent: mdxModule.default,
  }
  
}

export default async function PrivacyNextPage() {
  const { MDXContent } = await getContent()
  return (
    <article className='prose mx-auto'>
      <MDXContent />
    </article>
  );
}
