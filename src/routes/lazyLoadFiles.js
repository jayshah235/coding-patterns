import { lazy } from "react";

export const LazyMainLayout = lazy(() => import('../pages/main-layout'));
export const LazyForm = lazy(() => import('../pages/form-validation-functionality'));
export const LazyProductPage = lazy(() => import('../pages/product-page'));
export const LazyAddUsers = lazy(() => import('../pages/listing-page-crud'));
export const LazyAddCharts = lazy(() => import('../pages/charts-page'));
export const LazyScroll = lazy(() => import('../pages/infinite-scroll'));
