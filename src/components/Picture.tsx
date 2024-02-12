import React from "react";
import { getImageProps } from 'next/image'

export function Picture() {
  const common = { alt: 'Logo', width: 800, height: 400, className: "mx-auto" }
  const { props: { srcSet: dark } } = getImageProps({ ...common, src: '/logo/dark.png' })
  const { props: { srcSet: light, ...rest } } = getImageProps({ ...common, src: '/logo/light.png' })
 
  return (
  <picture>
    <source media="(prefers-color-scheme: dark)" srcSet={dark} />
    <source media="(prefers-color-scheme: light)" srcSet={light} />
    <img {...rest} />
  </picture>
)
}
