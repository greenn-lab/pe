import React, {type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition';
import AdmonitionLayout from '@theme/Admonition/Layout';
import IconConcept from '../Icon/Concept';

const defaultProps = {
  type: 'concept',
  icon: <IconConcept/>,
  title: (
      <Translate
          id="theme.admonition.concept"
          description="The default label used for the Concept admonition (:::concept)">
        concept
      </Translate>
  ),
};

export default function AdmonitionTypeConcept({children, ...props}: Props): ReactNode {
  return (
      <AdmonitionLayout
          {...defaultProps}
          {...props}
          type="concept"
          children={children}
      />
  );
}
