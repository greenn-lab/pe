import React, {type ReactNode} from 'react';
import {DocProvider} from '@docusaurus/plugin-content-docs/client';
import type {Props} from '@theme/DocItem';
import {HtmlClassNameProvider} from "@docusaurus/theme-common";
import DocItemMetadata from "@theme/DocItem/Metadata";
import DocItemLayout from "@theme/DocItem/Layout";

export default function DocItem(props: Props): ReactNode {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
  const MDXComponent = props.content;
  return (
      <DocProvider content={props.content} children={<>
        <HtmlClassNameProvider className={docHtmlClassName} children={<>
          <DocItemMetadata/>
          <DocItemLayout children={<MDXComponent/>}/>
        </>}/>
      </>}/>
  );
}
