import { useEffect } from 'react'

import { SITE_URL } from '../config/constants'

interface PageMeta {
  title: string
  description?: string
  path?: string
  noIndex?: boolean
}

function upsertHeadTag(
  selector: string,
  create: () => HTMLElement,
  attribute: string,
  value: string,
) {
  let element = document.head.querySelector<HTMLElement>(selector)

  if (!element) {
    element = create()
    document.head.appendChild(element)
  }

  element.setAttribute(attribute, value)
}

function setMeta(attribute: 'name' | 'property', key: string, value: string) {
  upsertHeadTag(
    `meta[${attribute}="${key}"]`,
    () => {
      const meta = document.createElement('meta')
      meta.setAttribute(attribute, key)
      return meta
    },
    'content',
    value,
  )
}

export function usePageMeta({ title, description, path, noIndex }: PageMeta) {
  useEffect(() => {
    document.title = title
    setMeta('property', 'og:title', title)
    setMeta('name', 'twitter:title', title)

    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }

    if (path) {
      const url = new URL(path, SITE_URL).href

      upsertHeadTag(
        'link[rel="canonical"]',
        () => {
          const link = document.createElement('link')
          link.rel = 'canonical'
          return link
        },
        'href',
        url,
      )
      setMeta('property', 'og:url', url)
    }

    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
  }, [title, description, path, noIndex])
}
