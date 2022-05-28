// @ts-nocheck
import {
  createIntl,
  IntlShape,
  MessageDescriptor,
} from '/Users/gavin/Documents/work/xenpie/xpAndDemo/node_modules/react-intl';
import { ApplyPluginsType } from 'umi';
import { event, LANG_CHANGE_EVENT } from './locale';
// @ts-ignore
import warning from '/Users/gavin/Documents/work/xenpie/xpAndDemo/node_modules/warning/warning.js';

import { plugin } from '../core/plugin';

export {
  createIntl,
};
export {
  FormattedDate,
  FormattedDateParts,
  FormattedDisplayName,
  FormattedHTMLMessage,
  FormattedList,
  FormattedMessage,
  FormattedNumber,
  FormattedNumberParts,
  FormattedPlural,
  FormattedRelativeTime,
  FormattedTime,
  FormattedTimeParts,
  IntlContext,
  IntlProvider,
  RawIntlProvider,
  createIntlCache,
  defineMessages,
  injectIntl,
  useIntl,
} from '/Users/gavin/Documents/work/xenpie/xpAndDemo/node_modules/react-intl';

let g_intl: IntlShape;

const useLocalStorage = true;

import bnBD0 from 'antd/es/locale/bn_BD';
import lang_bnBD0 from "/Users/gavin/Documents/work/xenpie/xpAndDemo/src/locales/bn-BD.ts";
import enUS0 from 'antd/es/locale/en_US';
import lang_enUS0 from "/Users/gavin/Documents/work/xenpie/xpAndDemo/src/locales/en-US.ts";
import faIR0 from 'antd/es/locale/fa_IR';
import lang_faIR0 from "/Users/gavin/Documents/work/xenpie/xpAndDemo/src/locales/fa-IR.ts";
import idID0 from 'antd/es/locale/id_ID';
import lang_idID0 from "/Users/gavin/Documents/work/xenpie/xpAndDemo/src/locales/id-ID.ts";
import jaJP0 from 'antd/es/locale/ja_JP';
import lang_jaJP0 from "/Users/gavin/Documents/work/xenpie/xpAndDemo/src/locales/ja-JP.ts";
import ptBR0 from 'antd/es/locale/pt_BR';
import lang_ptBR0 from "/Users/gavin/Documents/work/xenpie/xpAndDemo/src/locales/pt-BR.ts";
import zhCN0 from 'antd/es/locale/zh_CN';
import lang_zhCN0 from "/Users/gavin/Documents/work/xenpie/xpAndDemo/src/locales/zh-CN.ts";
import zhTW0 from 'antd/es/locale/zh_TW';
import lang_zhTW0 from "/Users/gavin/Documents/work/xenpie/xpAndDemo/src/locales/zh-TW.ts";

export const localeInfo: {[key: string]: any} = {
  'bn-BD': {
    messages: {
      ...lang_bnBD0,
    },
    locale: 'bn-BD',
    antd: {
      ...bnBD0,
    },
    momentLocale: 'bn-bd',
  },
  'en-US': {
    messages: {
      ...lang_enUS0,
    },
    locale: 'en-US',
    antd: {
      ...enUS0,
    },
    momentLocale: '',
  },
  'fa-IR': {
    messages: {
      ...lang_faIR0,
    },
    locale: 'fa-IR',
    antd: {
      ...faIR0,
    },
    momentLocale: 'fa',
  },
  'id-ID': {
    messages: {
      ...lang_idID0,
    },
    locale: 'id-ID',
    antd: {
      ...idID0,
    },
    momentLocale: 'id',
  },
  'ja-JP': {
    messages: {
      ...lang_jaJP0,
    },
    locale: 'ja-JP',
    antd: {
      ...jaJP0,
    },
    momentLocale: 'ja',
  },
  'pt-BR': {
    messages: {
      ...lang_ptBR0,
    },
    locale: 'pt-BR',
    antd: {
      ...ptBR0,
    },
    momentLocale: 'pt-br',
  },
  'zh-CN': {
    messages: {
      ...lang_zhCN0,
    },
    locale: 'zh-CN',
    antd: {
      ...zhCN0,
    },
    momentLocale: 'zh-cn',
  },
  'zh-TW': {
    messages: {
      ...lang_zhTW0,
    },
    locale: 'zh-TW',
    antd: {
      ...zhTW0,
    },
    momentLocale: 'zh-tw',
  },
};

/**
 * 增加一个新的国际化语言
 * @param name 语言的 key
 * @param messages 对应的枚举对象
 * @param extraLocale momentLocale, antd 国际化
 */
export const addLocale = (
  name: string,
  messages: Object,
  extraLocales?: {
    momentLocale: string;
    antd: string;
  },
) => {
  if (!name) {
    return;
  }
  // 可以合并
  const mergeMessages = localeInfo[name]?.messages
    ? Object.assign({}, localeInfo[name].messages, messages)
    : messages;


  const { momentLocale, antd } = extraLocales || {};
  const locale = name.split('-')?.join('-')
  localeInfo[name] = {
    messages: mergeMessages,
    locale,
    momentLocale: momentLocale,
    antd,
  };
   // 如果这是的 name 和当前的locale 相同需要重新设置一下，不然更新不了
  if (locale === getLocale()) {
    event.emit(LANG_CHANGE_EVENT, locale);
  }
};

/**
 * 获取当前的 intl 对象，可以在 node 中使用
 * @param locale 需要切换的语言类型
 * @param changeIntl 是否不使用 g_intl
 * @returns IntlShape
 */
export const getIntl = (locale?: string, changeIntl?: boolean) => {
  // 如果全局的 g_intl 存在，且不是 setIntl 调用
  if (g_intl && !changeIntl && !locale) {
    return g_intl;
  }
  // 如果存在于 localeInfo 中
  if (locale&&localeInfo[locale]) {
    return createIntl(localeInfo[locale]);
  }
  // 不存在需要一个报错提醒
  warning(
    !locale||!!localeInfo[locale],
    `The current popular language does not exist, please check the locales folder!`,
  );
  // 使用 zh-CN
  if (localeInfo["zh-CN"]) return createIntl(localeInfo["zh-CN"]);

  // 如果还没有，返回一个空的
  return createIntl({
    locale: "zh-CN",
    messages: {},
  });
};

/**
 * 切换全局的 intl 的设置
 * @param locale 语言的key
 */
export const setIntl = (locale: string) => {
  g_intl = getIntl(locale, true);
};

/**
 * 获取当前选择的语言
 * @returns string
 */
export const getLocale = () => {
  const runtimeLocale = plugin.applyPlugins({
    key: 'locale',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  // runtime getLocale for user define
  if (typeof runtimeLocale?.getLocale === 'function') {
    return runtimeLocale.getLocale();
  }
  // please clear localStorage if you change the baseSeparator config
  // because changing will break the app
  const lang =
    navigator.cookieEnabled && typeof localStorage !== 'undefined' && useLocalStorage
      ? window.localStorage.getItem('umi_locale')
      : '';
  // support baseNavigator, default true
  let browserLang;
  const isNavigatorLanguageValid =
    typeof navigator !== 'undefined' && typeof navigator.language === 'string';
  browserLang = isNavigatorLanguageValid
    ? navigator.language.split('-').join('-')
    : '';
  return lang || browserLang || "zh-CN";
};


/**
 * 获取当前选择的方向
 * @returns string
 */
export const getDirection = () => {
  const lang = getLocale();
  // array with all prefixs for rtl langueges ex: ar-EG , he-IL
  const rtlLangs = ['he', 'ar', 'fa', 'ku']
  const direction =  rtlLangs.filter(lng => lang.startsWith(lng)).length ? 'rtl' : 'ltr';
  return direction;
};

/**
 * 切换语言
 * @param lang 语言的 key
 * @param realReload 是否刷新页面，默认刷新
 * @returns string
 */
export const setLocale = (lang: string, realReload: boolean = true) => {
  const runtimeLocale = plugin.applyPlugins({
    key: 'locale',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });

  const updater = () => {
    if (getLocale() !== lang) {
      if (navigator.cookieEnabled && typeof window.localStorage !== 'undefined' && useLocalStorage) {
        window.localStorage.setItem('umi_locale', lang || '');
      }
      setIntl(lang);
      if (realReload) {
        window.location.reload();
      } else {
        event.emit(LANG_CHANGE_EVENT, lang);
        // chrome 不支持这个事件。所以人肉触发一下
        if (window.dispatchEvent) {
          const event = new Event('languagechange');
          window.dispatchEvent(event);
        }
      }
    }
  }

  if (typeof runtimeLocale?.setLocale === 'function') {
    runtimeLocale.setLocale({
      lang,
      realReload,
      updater: updater,
    });
    return;
  }

  updater();
};

let firstWaring = true;

/**
 * intl.formatMessage 的语法糖
 * @deprecated 使用此 api 会造成切换语言的时候无法自动刷新，请使用 useIntl 或 injectIntl
 * @param descriptor { id : string, defaultMessage : string }
 * @param values { [key:string] : string }
 * @returns string
 */
export const formatMessage: IntlShape['formatMessage'] = (
  descriptor: MessageDescriptor,
  values: any,
) => {
  if (firstWaring) {
    warning(
      false,
      `Using this API will cause automatic refresh when switching languages, please use useIntl or injectIntl.

使用此 api 会造成切换语言的时候无法自动刷新，请使用 useIntl 或 injectIntl。

http://j.mp/37Fkd5Q
      `,
    );
    firstWaring = false;
  }
  return g_intl.formatMessage(descriptor, values);
};

/**
 * 获取语言列表
 * @returns string[]
 */
export const getAllLocales = () => Object.keys(localeInfo);
