import { useCallback, useEffect, useRef, useState } from "react"
import mapNodes from "../../data/mapNodes.json"
import MapPage from "./MapPage.jsx"
import MissionPopup from "./MissionPopup.jsx"
import "./map.css"

export default function MapSpread({ world, active, text, progress, onPlay, language }) {
  const [popup, setPopup] = useState(null)
  const [shaking, setShaking] = useState(null)
  const [effect, setEffect] = useState(null)
  const [mascot, setMascot] = useState(null)
  const timer = useRef(null)
  const pathRef = useRef(null)
  const data = mapNodes[world]
  const resolveNode = (node) =>
    node.missionId === "rover" && progress.passport
      ? { ...node, state: "completed" }
      : node
  const nodes = data.nodes.map(resolveNode)
  const count = Object.values(mapNodes)
    .flatMap((page) => page.nodes)
    .map(resolveNode)
    .filter((node) => node.state === "completed").length
  const dismiss = useCallback(() => setPopup(null), [])

  useEffect(() => {
    if (!active) {
      setPopup(null)
      setShaking(null)
      setEffect(null)
    }
  }, [active])
  useEffect(() => () => clearTimeout(timer.current), [])

  function onTap(node, event) {
    clearTimeout(timer.current)
    if (node.state === "locked") {
      setShaking(node.id)
      timer.current = setTimeout(() => setShaking(null), 1800)
      return
    }
    setShaking(null)
    setMascot({ x: node.x, y: node.y, nodeId: node.id })
    setEffect({
      x: node.x,
      y: node.y,
      clientX: event.clientX,
      clientY: event.clientY,
      key: Date.now(),
    })
    setPopup(node)
  }

  return (
    <>
      <MapPage
        world={world}
        data={data}
        text={text}
        count={count}
        nodes={nodes}
        onTap={onTap}
        mascot={mascot || nodes.find((node) => node.state !== "locked")}
        jumping={false}
        pathRef={pathRef}
        shaking={shaking}
        effect={effect}
      />
      {popup && (
        <MissionPopup
          node={popup}
          text={text}
          language={language}
          onClose={dismiss}
          onPlay={onPlay}
        />
      )}
    </>
  )
}
