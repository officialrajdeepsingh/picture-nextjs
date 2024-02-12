"use client"
import { useMediaQuery } from 'usehooks-ts'

export  function ShowPrefersColorTheme() {

  let themeDark = useMediaQuery("(prefers-color-scheme: dark)")
  let themeLight = useMediaQuery("(prefers-color-scheme: light)")

  return (
    <div  className='w-8/12 mx-auto flex justify-center my-12'>
    <button  className='mx-auto'> Your default theme(prefers-color-scheme) is {themeLight? "Light": themeDark ? "Dark" : "No theme Find." } </button>
    </div>
  );
}
