'use client'

import { Warp } from '@paper-design/shaders-react'
import { cn } from '@/lib/utils'

type BackgroundShadersProps = {
  className?: string
}

export default function BackgroundShaders({
  className,
}: BackgroundShadersProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0', className)}>
      <Warp
        style={{ width: '100%', height: '100%' }}
        proportion={0.38}
        softness={1.18}
        distortion={0.28}
        swirl={0.82}
        swirlIterations={11}
        shape="checks"
        shapeScale={0.18}
        scale={1.35}
        rotation={-9}
        speed={0.95}
        colors={[
          'hsl(0, 0%, 3%)',
          'hsl(220, 8%, 13%)',
          'hsl(0, 0%, 28%)',
          'hsl(210, 7%, 9%)',
        ]}
      />
    </div>
  )
}
