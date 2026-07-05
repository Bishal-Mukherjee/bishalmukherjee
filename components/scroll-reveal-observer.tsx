"use client"

import * as React from "react"

export function ScrollRevealObserver() {
  React.useEffect(() => {
    // Mark that JS is running — enables CSS reveal animations (progressive enhancement)
    document.documentElement.classList.add("js-loaded")

    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }

    const revealObserver = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    })

    const observeElements = () => {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => revealObserver.observe(el))
    }

    // Run initially
    observeElements()

    // Also observe dynamically loaded contents if any
    const mutationObserver = new MutationObserver(() => {
      observeElements()
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      revealObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return null
}
