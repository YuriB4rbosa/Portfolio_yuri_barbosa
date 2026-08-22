const HEADER_OFFSET = 80

function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

export function smoothScrollTo(id: string) {
  const target = document.querySelector(id)
  if (!target) return

  const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  const startY = window.scrollY
  const distance = top - startY
  const duration = 600
  let startTime: number | null = null

  function step(timestamp: number) {
    if (startTime === null) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + distance * easeInOutQuad(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
  history.pushState(null, '', id)
}

export function handleSmoothScrollClick(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute('href')
  if (!href || !href.startsWith('#') || href === '#') return
  e.preventDefault()
  smoothScrollTo(href)
}
