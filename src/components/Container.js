import {cn} from "@/lib/utils";

export default function Container({ children, className, ...props }) {
  return (
    <div {...props} className={cn('max-w-sm sm:max-w-4xl mx-auto px-5', className)}>
      {children}
    </div>
  )
}