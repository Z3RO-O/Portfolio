import { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

function buildSpherePoints(skillsByCategory: SkillsByCategory): SkillNode[] {
  const entries = (
    Object.entries(skillsByCategory) as Array<
      [keyof SkillsByCategory, SkillItem[]]
    >
  ).flatMap(([category, items]) => items.map(item => ({ ...item, category })));

  const total = entries.length;
  const radius = total > 16 ? 2.8 : 2.4;

  return entries.map((entry, index) => {
    const phi = Math.acos(1 - (2 * (index + 0.5)) / total);
    const theta = Math.PI * (1 + Math.sqrt(5)) * (index + 0.5);

    return {
      name: entry.name,
      icon: entry.icon,
      color: entry.color,
      position: [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ],
    };
  });
}

function GlobeCore() {
  return (
    <mesh>
      <sphereGeometry args={[1.4, 20, 16]} />
      <meshBasicMaterial
        color='hsl(220 18% 7%)'
        transparent
        opacity={0.16}
        wireframe
      />
    </mesh>
  );
}

function SkillNodes({ nodes }: { nodes: SkillNode[] }) {
  return (
    <group>
      {nodes.map(node => (
        <group key={node.name} position={node.position}>
          <Html
            center
            distanceFactor={6}
            style={{
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            <div
              className='flex flex-col items-center gap-1'
              style={{
                color: node.color,
              }}
            >
              <div
                className='text-2xl'
                style={{ filter: 'drop-shadow(0 0 8px currentColor)' }}
              >
                {node.icon}
              </div>
              <span className='whitespace-nowrap text-[10px] font-medium opacity-90'>
                {node.name}
              </span>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

export default function SkillsGlobe({
  skillsByCategory,
}: {
  skillsByCategory: SkillsByCategory;
}) {
  const nodes = useMemo(
    () => buildSpherePoints(skillsByCategory),
    [skillsByCategory]
  );

  return (
    <div className='h-[340px] w-full sm:h-[420px] lg:h-[520px]'>
      <Canvas camera={{ position: [0, 0, 7.5], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <pointLight position={[4, 3, 5]} intensity={1.2} />
        <pointLight position={[-4, -3, -5]} intensity={0.8} />

        <group rotation={[0.35, 0.2, 0]}>
          <GlobeCore />
          <SkillNodes nodes={nodes} />
        </group>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
          rotateSpeed={0.65}
        />
      </Canvas>
    </div>
  );
}
