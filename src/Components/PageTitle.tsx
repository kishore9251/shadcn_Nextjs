import React from 'react'
import { cn } from '@/lib/utils'

type Props = {
    title: string;
    className?: string;
}

const PageTitle = ({title, className}: Props) => {
  return (
   <h1 className={cn("text-2xl font-semibold", className)}>{title}</h1>
  )
}

export default PageTitle