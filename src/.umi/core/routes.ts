// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/gavin/Documents/work/xenpie/xpAndDemo/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@ant-design/pro-layout/es/PageLoading';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'/Users/gavin/Documents/work/xenpie/xpAndDemo/src/.umi/plugin-layout/Layout.tsx'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/~demos/:uuid",
        "layout": false,
        "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout'), loading: LoadingComponent})],
        "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/gavin/Documents/work/xenpie/xpAndDemo/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
      },
      {
        "path": "/_demos/:uuid",
        "redirect": "/~demos/:uuid"
      },
      {
        "__dumiRoot": true,
        "layout": false,
        "path": "/~docs",
        "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout'), loading: LoadingComponent}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/gavin/Documents/work/xenpie/xpAndDemo/node_modules/dumi-theme-default/es/layout.js'), loading: LoadingComponent})],
        "routes": [
          {
            "path": "/~docs",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'README.md' */'/Users/gavin/Documents/work/xenpie/xpAndDemo/README.md'), loading: LoadingComponent}),
            "exact": true,
            "meta": {
              "locale": "en-US",
              "order": null,
              "filePath": "README.md",
              "updatedTime": 1653619509525,
              "slugs": [
                {
                  "depth": 1,
                  "value": "Ant Design Pro",
                  "heading": "ant-design-pro"
                },
                {
                  "depth": 2,
                  "value": "Environment Prepare",
                  "heading": "environment-prepare"
                },
                {
                  "depth": 2,
                  "value": "Provided Scripts",
                  "heading": "provided-scripts"
                },
                {
                  "depth": 3,
                  "value": "Start project",
                  "heading": "start-project"
                },
                {
                  "depth": 3,
                  "value": "Build project",
                  "heading": "build-project"
                },
                {
                  "depth": 3,
                  "value": "Check code style",
                  "heading": "check-code-style"
                },
                {
                  "depth": 3,
                  "value": "Test code",
                  "heading": "test-code"
                },
                {
                  "depth": 2,
                  "value": "More",
                  "heading": "more"
                }
              ],
              "title": "Ant Design Pro"
            },
            "title": "Ant Design Pro"
          },
          {
            "path": "/~docs/components",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__index.md' */'/Users/gavin/Documents/work/xenpie/xpAndDemo/src/components/index.md'), loading: LoadingComponent}),
            "exact": true,
            "meta": {
              "filePath": "src/components/index.md",
              "updatedTime": 1653619509489,
              "title": "业务组件",
              "sidemenu": false,
              "slugs": [
                {
                  "depth": 1,
                  "value": "业务组件",
                  "heading": "业务组件"
                },
                {
                  "depth": 2,
                  "value": "Footer 页脚组件",
                  "heading": "footer-页脚组件"
                },
                {
                  "depth": 2,
                  "value": "HeaderDropdown 头部下拉列表",
                  "heading": "headerdropdown-头部下拉列表"
                },
                {
                  "depth": 2,
                  "value": "HeaderSearch 头部搜索框",
                  "heading": "headersearch-头部搜索框"
                },
                {
                  "depth": 3,
                  "value": "API",
                  "heading": "api"
                },
                {
                  "depth": 2,
                  "value": "NoticeIcon 通知工具",
                  "heading": "noticeicon-通知工具"
                },
                {
                  "depth": 3,
                  "value": "NoticeIcon API",
                  "heading": "noticeicon-api"
                },
                {
                  "depth": 3,
                  "value": "NoticeIcon.Tab API",
                  "heading": "noticeicontab-api"
                },
                {
                  "depth": 3,
                  "value": "NoticeIconData",
                  "heading": "noticeicondata"
                },
                {
                  "depth": 2,
                  "value": "RightContent",
                  "heading": "rightcontent"
                }
              ],
              "hasPreviewer": true,
              "group": {
                "path": "/~docs/components",
                "title": "Components"
              }
            },
            "title": "业务组件 - ant-design-pro"
          },
          {
            "path": "/~docs/components/lowcode-engine/scenarios/basic-fusion-with-single-component",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__LowcodeEngine__scenarios__basic-fusion-with-single-component__README.md' */'/Users/gavin/Documents/work/xenpie/xpAndDemo/src/components/LowcodeEngine/scenarios/basic-fusion-with-single-component/README.md'), loading: LoadingComponent}),
            "exact": true,
            "meta": {
              "filePath": "src/components/LowcodeEngine/scenarios/basic-fusion-with-single-component/README.md",
              "updatedTime": 1653444821500,
              "slugs": [],
              "group": {
                "path": "/~docs/components/lowcode-engine/scenarios",
                "title": "Components"
              },
              "title": "README"
            },
            "title": "README - ant-design-pro"
          },
          {
            "path": "/~docs/components/lowcode-engine/scenarios",
            "meta": {},
            "exact": true,
            "redirect": "/~docs/components/lowcode-engine/scenarios/basic-fusion-with-single-component"
          }
        ],
        "title": "ant-design-pro",
        "component": (props) => props.children
      },
      {
        "path": "/user",
        "layout": false,
        "routes": [
          {
            "name": "login",
            "path": "/user/login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__Login' */'/Users/gavin/Documents/work/xenpie/xpAndDemo/src/pages/user/Login'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/gavin/Documents/work/xenpie/xpAndDemo/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/welcome",
        "name": "welcome",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/Users/gavin/Documents/work/xenpie/xpAndDemo/src/pages/Welcome'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/editor",
        "name": "editor",
        "icon": "LayoutOutlined",
        "layout": false,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Editor' */'/Users/gavin/Documents/work/xenpie/xpAndDemo/src/pages/Editor'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/preview",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Preview' */'/Users/gavin/Documents/work/xenpie/xpAndDemo/src/pages/Preview'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/admin",
        "name": "admin",
        "icon": "crown",
        "access": "canAdmin",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Admin' */'/Users/gavin/Documents/work/xenpie/xpAndDemo/src/pages/Admin'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/admin/sub-page",
            "name": "sub-page",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/Users/gavin/Documents/work/xenpie/xpAndDemo/src/pages/Welcome'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/gavin/Documents/work/xenpie/xpAndDemo/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "name": "list.table-list",
        "icon": "table",
        "path": "/list",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TableList' */'/Users/gavin/Documents/work/xenpie/xpAndDemo/src/pages/TableList'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/index.html",
        "redirect": "/welcome",
        "exact": true
      },
      {
        "path": "/",
        "redirect": "/welcome",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/gavin/Documents/work/xenpie/xpAndDemo/src/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
