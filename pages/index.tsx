import { dehydrate } from '@tanstack/react-query';
import { getOpenLayout } from '@/app/pub/get-open-layout';
import { setPageLayout } from '@/shared/lib/next';
import { queryClient } from '@/shared/api/query-client';
import { HomePage } from '@/pages/home';

export default setPageLayout(HomePage, getOpenLayout);

export async function getStaticProps() {
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 10,
  };
}

