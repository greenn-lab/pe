import React, {type ReactNode} from 'react';
import AdmonitionLayout from '@theme/Admonition/Layout';
import AdmonitionIconConcept from '@theme/Admonition/Icon/Concept';
import type {Props} from '@theme/Admonition';

export default function AdmonitionTypeConcept(props: Props): ReactNode {
  return (
    <AdmonitionLayout
      {...props}
      type="concept"
      icon={<AdmonitionIconConcept />}
    />
  );
}
