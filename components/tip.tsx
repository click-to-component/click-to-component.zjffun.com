"use client"

import { useEffect, useState } from "react"

import Note from "./markdown/note"

export default function Tip() {
  const [isMacOS, setIsMacOS] = useState(false)

  useEffect(() => {
    // Check if window is defined to avoid errors in server-side rendering
    if (typeof window !== "undefined") {
      setIsMacOS(window.navigator.userAgent.indexOf("Mac OS X") !== -1)
    }
  }, [])

  return (
    <Note type="success" title="" className="md:px-4 px-2">
      <p className="p-3 text-foreground sm:text-base">
        You can pass <code>{isMacOS ? "Option" : "Alt"}</code> and{" "}
        <code>Click/RightClick</code> a component in this website to try click a
        component and open code in GitHub.
      </p>
    </Note>
  )
}
