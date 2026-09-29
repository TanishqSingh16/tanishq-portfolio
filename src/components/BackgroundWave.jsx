import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

function WavePoints({ columns, rows, reducedMotion }) {
  const points = useRef()
  const elapsed = useRef(0)
  const pointer = useRef(new THREE.Vector2())
  const { invalidate } = useThree()
  const positions = useMemo(() => {
    const coords = new Float32Array(columns * rows * 3)
    let index = 0
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        coords[index * 3] = (column / (columns - 1) - 0.5) * 25
        coords[index * 3 + 2] = (row / (rows - 1) - 0.5) * 12
        coords[index * 3 + 1] = Math.sin(coords[index * 3] * 0.48) * 0.52 + Math.cos(coords[index * 3 + 2] * 0.7) * 0.24
        index += 1
      }
    }
    return coords
  }, [columns, rows])

  useEffect(() => {
    const onPointerMove = (event) => {
      pointer.current.set((event.clientX / window.innerWidth - 0.5) * 2, (event.clientY / window.innerHeight - 0.5) * 2)
      invalidate()
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [invalidate])

  useFrame((_, delta) => {
    if (!points.current || reducedMotion) return
    const attr = points.current.geometry.attributes.position
    elapsed.current += delta
    const time = elapsed.current * 0.4
    for (let index = 0; index < columns * rows; index += 1) {
      const x = positions[index * 3]
      const z = positions[index * 3 + 2]
      const wave = Math.sin(x * 0.48 + time) * 0.52 + Math.cos(z * 0.7 - time * 0.8) * 0.24
      const centerLift = Math.exp(-((x - pointer.current.x * 3) ** 2 + (z + pointer.current.y * 1.5) ** 2) * 0.025) * 0.28
      attr.array[index * 3 + 1] = wave + centerLift
    }
    attr.needsUpdate = true
    points.current.rotation.y = pointer.current.x * 0.018
  })

  return (
    <points ref={points} position={[0, -0.9, -6]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} usage={THREE.DynamicDrawUsage} />
      </bufferGeometry>
      <pointsMaterial color="#7462b4" size={0.027} transparent opacity={0.48} sizeAttenuation />
    </points>
  )
}

export default function BackgroundWave() {
  const [mobile, setMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 700px)')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      setMobile(mobileQuery.matches)
      setReducedMotion(motionQuery.matches)
    }
    update()
    mobileQuery.addEventListener('change', update)
    motionQuery.addEventListener('change', update)
    return () => {
      mobileQuery.removeEventListener('change', update)
      motionQuery.removeEventListener('change', update)
    }
  }, [])

  const columns = mobile ? 32 : 58
  const rows = mobile ? 23 : 36

  return (
    <div className="wave-canvas" aria-hidden="true">
      <Canvas frameloop={reducedMotion ? 'demand' : 'always'} dpr={[1, 1.25]} camera={{ position: [0, 2.2, 12], fov: 55 }} gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}>
        <WavePoints columns={columns} rows={rows} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}