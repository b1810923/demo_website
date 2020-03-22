import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    //routes
    mode: "history",
    //base: __dirname,
    routes: [
      {
        path: "/",
        name: "Index",
        component: () => import('@/components/pages/Landing')
      },
      {
        path: "/landing",
        name: "Landing",
        component: () => import('@/components/pages/Landing')
      },
      {
        path: "/about",
        name: "About",
        component: () => import('@/components/pages/About')
      },
      {
        path: "/consultant/:name",
        component: () => import('@/components/pages/Consultant')
      },
      {
        path: "/product",
        name: "Product",
        component: () => import('@/components/pages/Product'),
        children: [
          {
            path: "/IQA",
            name: "IQA",
            component: () => import('@/components/product/IQA')
          },
          {
            path: "/WMS",
            name: "WMS",
            component: () => import('@/components/product/WMS')
          },
          {
            path: "/QC",
            name: "QC",
            component: () => import('@/components/product/QC')
          },
          {
            path: "/Mold",
            name: "Mold",
            component: () => import('@/components/product/Mold')
          },
          {
            path: "/Collection",
            name: "Collection",
            component: () => import('@/components/product/Collection')
          }
        ]
      },
      {
        path: "/news/:date",
        name: "News",
        component: () => import('@/components/pages/News')
      },
      {
        path: "/contact",
        name: "Contact",
        component: () => import('@/components/pages/Contact')
      }
    ],
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {x:0,y:0}
      }
    }
  });

  export default router