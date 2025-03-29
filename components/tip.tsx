"use client"

const isMacOS = navigator.userAgent.indexOf("Mac OS X")

export default function Tip() {
  return (
    <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
      You can pass <code>{isMacOS ? "Option" : "Alt"}</code> and{" "}
      <code>Click/RightClick</code> a component in this website to experience
      features.
    </p>
  )
}
