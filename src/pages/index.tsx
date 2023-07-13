import { useBosComponents } from '@/hooks/useBosComponents';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';
import { ComponentWrapperPage } from '@/components/ComponentWrapperPage';

const HomePage: NextPageWithLayout = () => {
  const components = useBosComponents();
  return <ComponentWrapperPage src={components.home} />;
};

HomePage.getLayout = useDefaultLayout;

export default HomePage;
