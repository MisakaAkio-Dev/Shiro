import { getWebUrl } from '~/atoms'
import { allowedBangumiTypes } from '~/lib/bangumi'

import { isClientSide, isDev } from './env'

export const getTweetId = (url: URL) => url.pathname.split('/').pop()!

const GITHUB_HOST = 'github.com'
export const isLeetCodeUrl = (url: URL) => {
  return url.hostname === 'leetcode.cn' || url.hostname === 'leetcode.com'
}

export const isQQMusicSongUrl = (url: URL) => {
  return url.hostname === 'y.qq.com' && url.pathname.includes('/songDetail/')
}

export const isNeteaseMusicSongUrl = (url: URL) => {
  return (
    url.hostname === 'music.163.com' &&
    (url.pathname.includes('/song') || url.hash.includes('/song'))
  )
}
export const isGithubRepoUrl = (url: URL) =>
  url.hostname === GITHUB_HOST &&
  url.pathname.startsWith('/') &&
  url.pathname.split('/').length === 3

const ARXIV_HOST = 'arxiv.org'

export const isArxivUrl = (url: URL) =>
  url.hostname === ARXIV_HOST &&
  url.pathname.startsWith('/') &&
  /(abs|pdf)\/\d{4}\.\d+(?:v\d+)?/i.test(url.pathname)

export const isXiaoHongShuUrl = (url: URL) =>
  url.hostname.includes('xiaohongshu.com')

export const isGithubPrUrl = (url: URL) =>
  url.hostname === GITHUB_HOST && url.pathname.includes('/pull/')

export const isYoutubeUrl = (url: URL) =>
  url.hostname === 'www.youtube.com' && url.pathname.startsWith('/watch')

export const isGistUrl = (url: URL) => url.hostname === 'gist.github.com'

export const isGithubCommitUrl = (url: URL) => {
  const [_, , , type] = url.pathname.split('/')
  return url.hostname === GITHUB_HOST && type === 'commit'
}

export const isGithubProfileUrl = (url: URL) =>
  url.hostname === GITHUB_HOST && url.pathname.split('/').length === 2

export const isGithubFilePreviewUrl = (url: URL) => {
  // https://github.com/Innei/sprightly/blob/14234594f44956e6f56f1f92952ce82db37ef4df/src/socket/handler.ts
  const [_, , , type] = url.pathname.split('/')
  return url.hostname === GITHUB_HOST && type === 'blob'
}

export const isTweetUrl = (url: URL) =>
  isTwitterUrl(url) && url.pathname.startsWith('/')

export const isTwitterProfileUrl = (url: URL) =>
  isTwitterUrl(url) && url.pathname.split('/').length === 2

export const isGithubUrl = (url: URL) => url.hostname === GITHUB_HOST

export const isTwitterUrl = (url: URL) =>
  url.hostname === 'twitter.com' || url.hostname === 'x.com'

export const isTelegramUrl = (url: URL) => url.hostname === 't.me'

export const isCodesandboxUrl = (url: URL) =>
  // https://codesandbox.io/s/framer-motion-layoutroot-prop-forked-p39g96
  url.hostname === 'codesandbox.io' && url.pathname.split('/').length === 3

export const isBilibiliUrl = (url: URL) => url.hostname.includes('bilibili.com')

export const isBilibiliVideoUrl = (url: URL) =>
  isBilibiliUrl(url) && url.pathname.startsWith('/video/BV')

export const isSelfArticleUrl = (url: URL) => {
  if (!isClientSide) return false

  const webUrl = getWebUrl()
  const webHost = webUrl ? new URL(webUrl).hostname : ''

  return (
    ((isDev && url.hostname === 'innei.in') ||
      url.hostname === location.hostname ||
      webHost === url.hostname) &&
    ['/posts/', '/notes/'].some((path) => url.pathname.startsWith(path))
  )
}

export const isSelfThinkingUrl = (url: URL) => {
  if (!isClientSide) return false

  const webUrl = getWebUrl()
  const webHost = webUrl ? new URL(webUrl).hostname : ''

  return (
    ((isDev && url.hostname === 'innei.in') ||
      url.hostname === location.hostname ||
      webHost === url.hostname) &&
    // /thinking/66166aa7f7410b48581cb36f
    url.pathname.startsWith('/thinking/')
  )
}

export const isZhihuUrl = (url: URL) => url.hostname === 'www.zhihu.com'

export const isZhihuProfileUrl = (url: URL) =>
  isZhihuUrl(url) && url.pathname.startsWith('/people/')

export const isWikipediaUrl = (url: URL) =>
  url.hostname.includes('wikipedia.org')

export const isTMDBUrl = (url: URL) => url.hostname.includes('themoviedb.org')
export const isBangumiUrl = (url: URL) => {
  const pathname = url.pathname.split('/').slice(1)
  return (
    (url.hostname === 'bgm.tv' || url.hostname === 'bangumi.tv') &&
    allowedBangumiTypes.includes(pathname[0])
  )
}

export const isFigmaUrl = (url: URL) => {
  return url.hostname.includes('figma.com')
}

export const isNpmUrl = (url: URL) => {
  return url.hostname.includes('npmjs.com')
}

export const isMozillaUrl = (url: URL) => url.hostname.includes('mozilla.org')

export const parseSelfArticleUrl = (url: URL) => {
  const [_, type, ...rest] = url.pathname.split('/')
  switch (type) {
    case 'posts': {
      return {
        type,
        slug: rest.join('/'),
      }
    }
    case 'notes': {
      return {
        type,
        nid: +rest[0],
      }
    }
  }
}

export const parseGithubRepoUrl = (url: URL) => {
  const [_, owner, repo] = url.pathname.split('/')
  return {
    owner,
    repo,
  }
}

export const parseGithubGistUrl = (url: URL) => {
  const [_, owner, id] = url.pathname.split('/')
  return {
    owner,
    id,
  }
}

export const parseGithubTypedUrl = (url: URL) => {
  // https://github.com/Innei/sprightly/blob/14234594f44956e6f56f1f92952ce82db37ef4df/src/socket/handler.ts
  // https://github.com/mx-space/core/commit/e1b4d881cf18e1cb66294d2620eada35937d9a12
  const split = url.pathname.split('/')
  const [_, owner, repo, type, id] = split

  const afterTypeString = split.slice(4).join('/')
  return {
    owner,
    repo,
    type,
    id,
    afterTypeString,
  }
}

export const parseZhihuProfileUrl = (url: URL) => {
  const [_, type, id] = url.pathname.split('/')
  return {
    type,
    id,
  }
}

export const parseGithubPrUrl = (url: URL) => {
  const [_, owner, repo, type, pr] = url.pathname.split('/')
  return {
    owner,
    repo,
    type,
    pr,
  }
}

export const parseTMDBUrl = (url: URL) => {
  const [_, type, id] = url.pathname.split('/')
  return {
    type,
    id,
  }
}

export const parseBilibiliVideoUrl = (url: URL) => {
  // https://www.bilibili.com/video/BV1tj42197hU
  const [_, type, id] = url.pathname.split('/')
  return {
    type,
    id,
  }
}
