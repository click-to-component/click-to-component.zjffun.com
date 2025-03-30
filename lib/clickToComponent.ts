"use client"

import "click-to-component-browser"

window.__CLICK_TO_COMPONENT_CONFIG__ = {
  replacements: [
    {
      isRegExp: false,
      pattern: "/vercel/path0",
      replacement: "",
    },
    {
      isRegExp: true,
      pattern: new RegExp("^(.*):(.*):(.*)$"),
      replacement:
        "https://github.com/zjffun/click-to-component.zjffun.com/blob/main$1#L$2",
    },
  ],
}
