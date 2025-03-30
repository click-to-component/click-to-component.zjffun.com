"use client"

import { useEffect, useState } from "react"

export default function Tip() {
  const [isMacOS, setIsMacOS] = useState(false)

  useEffect(() => {
    // Check if window is defined to avoid errors in server-side rendering
    if (typeof window !== "undefined") {
      setIsMacOS(window.navigator.userAgent.indexOf("Mac OS X") !== -1)
    }
  }, [])

  return (
    <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
      You can pass <code>{isMacOS ? "Option" : "Alt"}</code> and{" "}
      <code>Click/RightClick</code> a component in this website to try click a
      component and open code in GitHub.
    </p>
  )
}
