"use client"

import "click-to-component-browser"

window.__CLICK_TO_COMPONENT_URL_FUNCTION__ = function (
  sourceCodeLocationStr: string
) {
  const result = sourceCodeLocationStr
    .replace("/opt/buildhome/repo", "")
    .replace(
      new RegExp("^(.*):(.*):(.*)$"),
      "https://github.com/zjffun/click-to-component.zjffun.com/blob/main$1#L$2"
    )

  return result
}
