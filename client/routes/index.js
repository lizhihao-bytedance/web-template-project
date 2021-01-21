// Copyright 2018 caicloud authors. All rights reserved.

import Loadable from 'react-loadable';
import { Spin } from 'antd';

const ClusterListPage = Loadable({
  loader: () => import('../components/ClusterList'),
  loading: Spin,
});

const ClusterDetailPage = Loadable({
  loader: () => import('../components/ClusterDetail'),
  loading: Spin,
});

const ClusterCreatePage = Loadable({
  loader: () => import('../components/ClusterCreate'),
  loading: Spin
})

export default [{
  path: '/clusters',
  name: 'Cluster Management',
  component: ClusterListPage,
}, {
  path: '/clusters/create',
  name: 'Cluster Create',
  component: ClusterCreatePage
}, {
  path: '/clusters/:name',
  name: 'Cluster Detail',
  component: ClusterDetailPage,
}];
