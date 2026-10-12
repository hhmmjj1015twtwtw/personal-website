"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"

function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (!copied) {
      return
    }

    const timeout = window.setTimeout(() => setCopied(false), 2000)

    return () => window.clearTimeout(timeout)
  }, [copied])

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch {
      // Clipboard access can be blocked; the mailto link still works.
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onCopy}
      className="font-mono tracking-wide uppercase"
    >
      <span aria-live="polite">{copied ? "Copied" : "Copy address"}</span>
    </Button>
  )
}

export { CopyEmail }
