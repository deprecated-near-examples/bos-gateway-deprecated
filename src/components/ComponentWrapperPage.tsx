import { useEffect } from 'react';

import { VmComponent } from '@/components/vm/VmComponent';
import { useCurrentComponentStore } from '@/stores/current-component';
import { MetaTags } from './MetaTags';
import styled from 'styled-components';

type Props = {
  componentProps?: Record<string, unknown>;
  src: string;
  meta?: {
    title: string;
    description: string;
  };
};

const Wrapper = styled.div`
  padding: 1rem;
`;

export function ComponentWrapperPage(props: Props) {
  return (
    <>
      {props.meta && <MetaTags {...props.meta} />}

      <Wrapper>
        <VmComponent src={props.src} props={props.componentProps} />
      </Wrapper>
    </>
  );
}
