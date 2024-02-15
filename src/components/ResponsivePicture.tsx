import React from "react";
import { getImageProps } from 'next/image'
import road from "../media/road_1280.jpg";
import tree from "../media/tree_724.jpg";

export function ResponsivePicture() {

  // Common option
  const common = { alt: 'Logo', width: 1224, height: 624, className: "mx-auto" }

  // Pass common as an argument with src in getImageProps and destructure the output.
  const { props: { srcSet: dark } } = getImageProps({ ...common, src: tree })
  const { props: { srcSet: light, ...rest } } = getImageProps({ ...common, src: road })
 
  return (
  <picture>
    <source media="(min-width: 1280px)" srcSet={dark} />
    <source media="(min-width: 1536px)" srcSet={light} />
    <img {...rest} />
  </picture>
)
}
