import { dehydrate } from '@tanstack/react-query';
import { getOpenLayout } from '@/app/pub/get-open-layout';
import { setPageLayout } from '@/shared/lib/next';
import { queryClient } from '@/shared/api/query-client';
import { ClipsPage } from '@/pages/clips';

export default setPageLayout(ClipsPage, getOpenLayout);

export async function getStaticProps() {
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 10,
  };
}
