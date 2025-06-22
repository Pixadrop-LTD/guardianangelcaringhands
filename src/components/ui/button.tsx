import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import Link from 'next/link'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-8px text-sm font-medium ring-offset-background transition-colors transition-opacity duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-subtle neumorphic hover:opacity-70 hover:scale-[1.02] transition-transform',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
      appearance: 'plain',
    },
    variants: {
      size: {
        clear: '',
        default: 'h-10 px-4 py-2',
        icon: 'h-10 w-10',
        lg: 'h-12 rounded-8px px-8',
        sm: 'h-9 rounded-8px px-3',
        xl: 'h-14 rounded-8px px-10',
      },
      variant: {
        default: 'bg-primary text-primary-100',
        destructive: 'bg-destructive text-destructive-foreground',
        ghost: 'hover:bg-card hover:text-accent-foreground',
        link: 'text-primary items-start justify-start underline-offset-4',
        outline: 'border border-border bg-background hover:bg-card',
        secondary: 'bg-secondary text-secondary-100',
      },
      appearance: {
        plain: '',
        gradient: '',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        appearance: 'gradient',
        className: 'bg-gradient-to-r from-primary-500 to-primary-700 text-primary-200',
      },
      {
        variant: 'secondary',
        appearance: 'gradient',
        className: 'bg-gradient-to-r from-secondary-500 to-secondary-700 text-secondary-200',
      },
    ],
  },
)

export type ButtonProps = (
  | (Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      | 'type'
      | 'onClick'
      | 'onMouseDown'
      | 'onMouseUp'
      | 'onKeyPress'
      | 'onKeyDown'
      | 'onKeyUp'
      | 'onAbort'
    > & {
      href?: never
      type?: 'button' | 'submit' | 'reset'
    })
  | (Omit<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      | 'type'
      | 'onClick'
      | 'onMouseDown'
      | 'onMouseUp'
      | 'onKeyPress'
      | 'onKeyDown'
      | 'onKeyUp'
      | 'onAbort'
    > & {
      href: string
      type?: React.AnchorHTMLAttributes<HTMLAnchorElement>['type']
    })
) &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    ref?: React.Ref<HTMLButtonElement | HTMLAnchorElement>
    icon?: React.ReactNode
    appearance?: 'plain' | 'gradient'
    iconPosition?: 'start' | 'end'
    size?: 'default' | 'sm' | 'lg' | 'icon' | 'clear' | 'xl'
    children?: React.ReactNode
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    onMouseDown?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    onMouseUp?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    onKeyPress?: React.KeyboardEventHandler<HTMLButtonElement | HTMLAnchorElement>
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement | HTMLAnchorElement>
    onKeyUp?: React.KeyboardEventHandler<HTMLButtonElement | HTMLAnchorElement>
    onAbort?: React.EventHandler<React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>>
    newTab?: boolean | null
  }

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  size,
  variant,
  newTab,
  appearance = 'plain',
  ref,
  icon,
  iconPosition = 'start',
  children,
  href,
  onClick,
  onMouseDown,
  onMouseUp,
  onKeyPress,
  onKeyDown,
  onKeyUp,
  onAbort,
  ...props
}) => {
  const classes = cn(buttonVariants({ className, size, variant, appearance }))

  const innerContent = (
    <>
      {iconPosition === 'start' && icon && <span className="mr-2">{icon}</span>}
      {children}
      {iconPosition === 'end' && icon && <span className="ml-2">{icon}</span>}
    </>
  )

  const commonProps = {
    ...props,
    className: classes,
    ref: ref as React.Ref<any>,
    onClick,
    onMouseDown,
    onMouseUp,
    onKeyPress,
    onKeyDown,
    onKeyUp,
    onAbort,
  }

  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  if (href && !asChild) {
    return (
      <Link
        href={href}
        {...(commonProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        className={cn(buttonVariants({ className, size, variant, appearance }))}
        {...newTabProps}
      >
        {innerContent}
      </Link>
    )
  } else if (asChild) {
    return (
      <Slot {...commonProps} ref={ref as React.Ref<HTMLElement>}>
        {children}
      </Slot>
    )
  } else {
    return (
      <button {...(commonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
        {innerContent}
      </button>
    )
  }
}

export { Button, buttonVariants }
