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

  /*
   * https://github.com/zjffun/click-to-component.zjffun.com/blob/main/app/docs/[[...slug]]/page.tsx#L28 will 404,
   * so encode [[...slug]] to open in GitHub
   */
  const encodedResult = encodeURI(result)

  return encodedResult
}
