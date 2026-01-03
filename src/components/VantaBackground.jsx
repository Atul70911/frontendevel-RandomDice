import { useEffect, useRef } from "react"

export default function VantaBackground({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const effect = window.VANTA?.FOG?.({
      el: ref.current,
        mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xf7bf00,
  midtoneColor: 0xff1600,
  lowlightColor: 0x2c00ff,
  baseColor: 0xffdcdc
    })

    return () => effect?.destroy?.()
  }, [])

  return (
    <div style={{ minHeight: "100vh" }}>
      <div ref={ref} style={{ position: "fixed", inset: 0, zIndex: -1 }} />
      {children}
    </div>
  )
}