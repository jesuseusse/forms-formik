import { lazy } from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy'

const LazyLayout = lazy(
  () =>
    import(
      /** webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'
    )
)

type JSXComponent = () => JSX.Element

interface Route {
  to: string
  path: string
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload',
    Component: LazyLayout,
    name: 'LazyLayout'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No-lazy'
  }
]
