import { useEffect, useState } from 'react'
import type { TerminalLine } from '../types'

interface TerminalProps {
  lines: TerminalLine[]
}

interface RenderedLine extends TerminalLine {
  visibleChars: number
  started: boolean
}

export default function Terminal({ lines }: TerminalProps) {
  const [rendered, setRendered] = useState<RenderedLine[]>(
    lines.map((l) => ({ ...l, visibleChars: 0, started: false })),
  )
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = []
    const intervals: ReturnType<typeof setInterval>[] = []
    let delay = 200

    lines.forEach((line, idx) => {
      const speed = line.kind === 'prompt' ? 42 : 14

      const startTimeout = setTimeout(() => {
        setRendered((prev) => {
          const next = [...prev]
          next[idx] = { ...next[idx], started: true }
          return next
        })

        let i = 0
        const interval = setInterval(() => {
          i++
          setRendered((prev) => {
            const next = [...prev]
            next[idx] = { ...next[idx], visibleChars: i }
            return next
          })
          if (i >= line.text.length) clearInterval(interval)
        }, speed)
        intervals.push(interval)
      }, delay)

      timeouts.push(startTimeout)
      delay += line.text.length * speed + (line.kind === 'prompt' ? 220 : 260)
    })

    const cursorTimeout = setTimeout(() => setShowCursor(true), delay)
    timeouts.push(cursorTimeout)

    return () => {
      timeouts.forEach(clearTimeout)
      intervals.forEach(clearInterval)
    }
  }, [lines])

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="terminal-title">bash — yuri</div>
      </div>
      <div className="terminal-body">
        {rendered.map((line, idx) => (
          <div className="type-line" key={idx} style={{ opacity: line.started ? 1 : 0 }}>
            <span className={line.kind}>{line.text.slice(0, line.visibleChars)}</span>
          </div>
        ))}
        {showCursor && <span className="cursor" />}
      </div>
    </div>
  )
}
