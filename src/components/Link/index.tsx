import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'

import type { Page } from '@/payload-types'

type CMSLinkType = {
  variant?: 'inline' | ButtonProps['variant']
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages'
    value: Page | string | number
  } | null
  size?: ButtonProps['size']
  type?: 'custom' | 'reference' | null
  url?: string | null
  appearance?: ButtonProps['appearance']
  icon?: ButtonProps['icon']
  iconPosition?: ButtonProps['iconPosition']
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    variant = 'inline',
    children,
    className,
    label,
    newTab,
    reference,
    appearance,
    size: sizeFromProps,
    url,
    icon,
    iconPosition,
  } = props

  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  if (!href) return null

  const size = variant === 'link' ? 'clear' : sizeFromProps

  if (variant === 'inline') {
    return (
      <Link
        href={href || url || ''}
        className={cn(
          'text-primary underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          className,
        )}
        {...(newTab && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        <span>
          {label && label}
          {children && children}
        </span>
      </Link>
    )
  } else {
    return (
      <Button
        asChild={false}
        className={className}
        newTab={newTab}
        size={size}
        variant={variant}
        appearance={appearance}
        icon={icon}
        iconPosition={iconPosition}
        href={href || url || ''}
      >
        <span>
          {label && label}
          {children && children}
        </span>
      </Button>
    )
  }
}
