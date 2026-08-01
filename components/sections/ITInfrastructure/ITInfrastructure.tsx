'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { CSSProperties, ReactNode } from 'react';
import styles from './ITInfrastructure.module.css';

type PillarKey = 'it' | 'media' | 'data';

type Scene = {
  id: number;
  number: string;
  title: string;
  titleLines: ReactNode;
  tags: string[];
};

type MotionState = {
  from: number;
  to: number;
  key: number;
};

type PillarDefinition = {
  key: PillarKey;
  baseY: number;
  sceneY: readonly [number, number, number];
  centerX: number;
  zIndex: number;
  paths: {
    faceA: string;
    top: string;
    faceB: string;
  };
  activeGradient: {
    faceA: readonly [string, string];
    top: readonly [string, string];
    faceB: readonly [string, string];
  };
  holograms: readonly [string, string];
};

type PillarStyle = CSSProperties & {
  '--pillar-shift-y': string;
  '--pillar-z': number;
  '--pillar-center-x': string;
  '--pillar-cluster-top': string;
};

const AUTO_ROTATE_MS = 6000;
const MOTION_DURATION_MS = 1180;
const ASSET_ROOT = '/images/services/it-motion';

const SCENES: Scene[] = [
  {
    id: 0,
    number: '01',
    title: 'Information Technology Infrastructure',
    titleLines: (
      <>
        Information<br />Technology<br />Infrastructure
      </>
    ),
    tags: ['SOFTWARE DEVELOPMENT', 'CLOUD', 'INFRASTRUCTURE', 'More...'],
  },
  {
    id: 1,
    number: '02',
    title: 'Data Survey and Analytics',
    titleLines: (
      <>
        Data Survey<br />and Analytics
      </>
    ),
    tags: ['DATA ANALYTICS', 'COMMUNITY SURVEY', 'CAMPAIGN', 'More...'],
  },
  {
    id: 2,
    number: '03',
    title: 'Digital Media and Impact',
    titleLines: (
      <>
        Digital Media<br />and Impact
      </>
    ),
    tags: ['BRANDING', 'ADS/PROMOTION', 'CAMPAIGN MAKING', 'More...'],
  },
];

const ACTIVE_PILLAR: Record<number, PillarKey> = {
  0: 'it',
  1: 'data',
  2: 'media',
};

/**
 * These are the original V2 vector paths. The three faces stay mounted for the
 * lifetime of the component; only their parent transform and active color layer
 * are animated. This removes the missing-face frames caused by crossfading two
 * complete SVG files at different Y positions.
 */
const PILLARS: readonly PillarDefinition[] = [
  {
    key: 'it',
    baseY: 306,
    sceneY: [306, 441, 411],
    centerX: 1061,
    zIndex: 2,
    paths: {
      faceA:
        'M1316 452.338L1315.28 673.989L1314.75 674.291L1072.73 814.947L1069.84 1500.05L1069.79 1500.08L1072.73 593.716L1315.38 452.705L1316 452.338Z',
      top:
        'M819.461 447.368L1062.74 306L1315.52 451.941L1072.25 593.319L819.461 447.368Z',
      faceB:
        'M1072.74 593.716L1069.79 1500.08L817 1354.14L819.945 447.764L1072.74 593.716Z',
    },
    activeGradient: {
      faceA: ['#668FFF', '#0629B6'],
      top: ['#A2BBFF', '#234AB3'],
      faceB: ['#2B64FF', '#051C5C'],
    },
    holograms: [
      `${ASSET_ROOT}/hologram-it-a.webp`,
      `${ASSET_ROOT}/hologram-it-b.webp`,
    ],
  },
  {
    key: 'media',
    baseY: 380,
    sceneY: [380, 326, 364],
    centerX: 1562,
    zIndex: 3,
    paths: {
      faceA:
        'M1811.61 525.941L1808.66 1578.19L1565.78 1719.35L1565.39 1719.57L1567.1 1111.26L1568.34 667.32L1811.61 525.941Z',
      top:
        'M1315.54 521.378L1558.82 380L1811.6 525.952L1568.33 667.319L1315.54 521.378Z',
      faceB:
        'M1568.33 667.319L1567.09 1111.26L1315.54 966.029L1314.82 966.45L1314.29 966.752L1314.91 745.165V744.442L1315.54 521.367L1568.33 667.319Z',
    },
    activeGradient: {
      faceA: ['#2B64FF', '#051C5C'],
      top: ['#A2BBFF', '#2B64FF'],
      faceB: ['#2B64FF', '#051C5C'],
    },
    holograms: [
      `${ASSET_ROOT}/hologram-media-a.webp`,
      `${ASSET_ROOT}/hologram-media-b.webp`,
    ],
  },
  {
    key: 'data',
    baseY: 620,
    sceneY: [620, 344, 701],
    centerX: 1318,
    zIndex: 4,
    paths: {
      faceA:
        'M1324.7 906.164L1567 765.365L1564.07 1461.39L1321.77 1602.2L1324.7 906.164Z',
      top:
        'M1072.93 760.81L1315.22 620L1567 765.365L1324.7 906.164L1072.93 760.81Z',
      faceB:
        'M1324.7 906.165L1321.76 1602.2L1070 1456.84L1072.93 760.811L1324.7 906.165Z',
    },
    activeGradient: {
      faceA: ['#2B64FF', '#051C5C'],
      top: ['#A2BBFF', '#2B64FF'],
      faceB: ['#051C5C', '#2B64FF'],
    },
    holograms: [
      `${ASSET_ROOT}/hologram-data-a.webp`,
      `${ASSET_ROOT}/hologram-data-b.webp`,
    ],
  },
];

const HOTSPOTS: Record<
  number,
  Array<{ target: number; label: string; style: CSSProperties }>
> = {
  0: [
    {
      target: 1,
      label: 'Show Data Survey and Analytics',
      style: { left: '55%', top: '55%', width: '17%', height: '43%' },
    },
    {
      target: 2,
      label: 'Show Digital Media and Impact',
      style: { left: '70%', top: '24%', width: '23%', height: '73%' },
    },
  ],
  1: [
    {
      target: 0,
      label: 'Show Information Technology Infrastructure',
      style: { left: '42%', top: '31%', width: '18%', height: '67%' },
    },
    {
      target: 2,
      label: 'Show Digital Media and Impact',
      style: { left: '72%', top: '24%', width: '21%', height: '73%' },
    },
  ],
  2: [
    {
      target: 0,
      label: 'Show Information Technology Infrastructure',
      style: { left: '42%', top: '34%', width: '18%', height: '64%' },
    },
    {
      target: 1,
      label: 'Show Data Survey and Analytics',
      style: { left: '55%', top: '59%', width: '18%', height: '39%' },
    },
  ],
};

const numberAsset = (scene: number) =>
  `${ASSET_ROOT}/number-${String(scene + 1).padStart(2, '0')}.svg`;

function stageShift(baseY: number, targetY: number): string {
  return `${((targetY - baseY) / 971) * 100}%`;
}

function stageX(value: number): string {
  return `${(value / 1920) * 100}%`;
}

function stageY(value: number): string {
  return `${(value / 971) * 100}%`;
}

function LayerImage({
  src,
  className,
  priority = false,
}: {
  src: string;
  className: string;
  priority?: boolean;
}) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={className}
      draggable={false}
      decoding="async"
      loading="eager"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  );
}

function Pillar({
  definition,
  targetScene,
  moving,
}: {
  definition: PillarDefinition;
  targetScene: number;
  moving: boolean;
}) {
  const active = ACTIVE_PILLAR[targetScene] === definition.key;
  const targetY = definition.sceneY[targetScene];
  const id = `service-pillar-${definition.key}`;

  const style: PillarStyle = {
    '--pillar-shift-y': stageShift(definition.baseY, targetY),
    '--pillar-z': definition.zIndex,
    '--pillar-center-x': stageX(definition.centerX),
    '--pillar-cluster-top': stageY(definition.baseY - 196),
  };

  return (
    <div
      className={styles.pillar}
      data-pillar={definition.key}
      data-active={active}
      data-moving={moving}
      style={style}
      aria-hidden="true"
    >
      <svg
        className={styles.pillarVector}
        viewBox="0 0 1920 971"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`${id}-gray-a`} x1="1" y1="0" x2="0" y2="1">
            <stop stopColor="#868686" />
            <stop offset="1" stopColor="#3B3B3B" />
          </linearGradient>
          <linearGradient id={`${id}-gray-top`} x1="0.5" y1="1" x2="0.5" y2="0">
            <stop stopColor="#767676" />
            <stop offset="1" stopColor="#3C3C3C" />
          </linearGradient>
          <linearGradient id={`${id}-gray-b`} x1="1" y1="0" x2="0" y2="1">
            <stop stopColor="#868686" />
            <stop offset="1" stopColor="#3B3B3B" />
          </linearGradient>

          <linearGradient id={`${id}-blue-a`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor={definition.activeGradient.faceA[0]} />
            <stop offset="1" stopColor={definition.activeGradient.faceA[1]} />
          </linearGradient>
          <linearGradient id={`${id}-blue-top`} x1="0.5" y1="0" x2="0.5" y2="1">
            <stop stopColor={definition.activeGradient.top[0]} />
            <stop offset="1" stopColor={definition.activeGradient.top[1]} />
          </linearGradient>
          <linearGradient id={`${id}-blue-b`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor={definition.activeGradient.faceB[0]} />
            <stop offset="1" stopColor={definition.activeGradient.faceB[1]} />
          </linearGradient>

          <linearGradient id={`${id}-sheen`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="0.47" stopColor="#FFFFFF" stopOpacity="0.56" />
            <stop offset="0.62" stopColor="#7FA2FF" stopOpacity="0.14" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g className={styles.pillarBaseFaces}>
          <path d={definition.paths.faceA} fill={`url(#${id}-gray-a)`} />
          <path d={definition.paths.top} fill={`url(#${id}-gray-top)`} />
          <path d={definition.paths.faceB} fill={`url(#${id}-gray-b)`} />
        </g>

        <g className={styles.pillarActiveFaces}>
          <path d={definition.paths.faceA} fill={`url(#${id}-blue-a)`} />
          <path d={definition.paths.top} fill={`url(#${id}-blue-top)`} />
          <path d={definition.paths.faceB} fill={`url(#${id}-blue-b)`} />
        </g>

        <g className={styles.pillarSheenFaces}>
          <path d={definition.paths.faceA} fill={`url(#${id}-sheen)`} />
          <path d={definition.paths.top} fill={`url(#${id}-sheen)`} />
          <path d={definition.paths.faceB} fill={`url(#${id}-sheen)`} />
        </g>

        <g className={styles.pillarEdges}>
          <path d={definition.paths.faceA} />
          <path d={definition.paths.top} />
          <path d={definition.paths.faceB} />
        </g>
      </svg>

      <div className={styles.indicatorCluster}>
        <div className={styles.indicatorAura} />
        <div className={styles.indicatorShape} />

        <div className={styles.hologramCardA}>
          <img src={definition.holograms[0]} alt="" draggable={false} />
        </div>
        <div className={styles.hologramCardB}>
          <img src={definition.holograms[1]} alt="" draggable={false} />
        </div>

        <div className={styles.pillarShadow} />
        <div className={styles.pillarGlow} />
      </div>
    </div>
  );
}

function Artwork({
  targetScene,
  moving,
  mobile = false,
}: {
  targetScene: number;
  moving: boolean;
  mobile?: boolean;
}) {
  const layer = mobile ? styles.mobileArtworkLayer : styles.artworkLayer;

  return (
    <>
      <LayerImage
        src={`${ASSET_ROOT}/globe.svg`}
        className={`${layer} ${styles.globeLayer}`}
        priority={!mobile}
      />

      {SCENES.map((scene) => (
        <LayerImage
          key={scene.id}
          src={numberAsset(scene.id)}
          className={`${layer} ${styles.numberLayer} ${styles[`number_${scene.id}`]}`}
          priority={scene.id === 0 && !mobile}
        />
      ))}


      <div className={mobile ? styles.mobilePillarCanvas : styles.pillarCanvas}>
        {PILLARS.map((definition) => (
          <Pillar
            key={definition.key}
            definition={definition}
            targetScene={targetScene}
            moving={moving}
          />
        ))}
      </div>
    </>
  );
}

export default function ITInfrastructure() {
  const [settledScene, setSettledScene] = useState(0);
  const [motion, setMotion] = useState<MotionState | null>(null);

  const settledRef = useRef(0);
  const motionRef = useRef<MotionState | null>(null);
  const queuedSceneRef = useRef<number | null>(null);
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finishTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const motionKeyRef = useRef(0);

  const clearAutoTimer = useCallback(() => {
    if (autoTimerRef.current) {
      clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  }, []);

  const clearFinishTimer = useCallback(() => {
    if (finishTimerRef.current) {
      clearTimeout(finishTimerRef.current);
      finishTimerRef.current = null;
    }
  }, []);

  const beginTransitionRef = useRef<(nextScene: number) => void>(() => undefined);

  const scheduleAutoRotate = useCallback(() => {
    clearAutoTimer();
    autoTimerRef.current = setTimeout(() => {
      beginTransitionRef.current((settledRef.current + 1) % SCENES.length);
    }, AUTO_ROTATE_MS);
  }, [clearAutoTimer]);

  const finishTransition = useCallback(
    (finishedMotion: MotionState) => {
      settledRef.current = finishedMotion.to;
      motionRef.current = null;
      setSettledScene(finishedMotion.to);
      setMotion(null);

      const queued = queuedSceneRef.current;
      queuedSceneRef.current = null;

      if (queued !== null && queued !== finishedMotion.to) {
        requestAnimationFrame(() => beginTransitionRef.current(queued));
      } else {
        scheduleAutoRotate();
      }
    },
    [scheduleAutoRotate],
  );

  const beginTransition = useCallback(
    (nextScene: number) => {
      const normalized = ((nextScene % SCENES.length) + SCENES.length) % SCENES.length;

      if (motionRef.current) {
        queuedSceneRef.current = normalized;
        return;
      }

      const from = settledRef.current;
      if (normalized === from) {
        scheduleAutoRotate();
        return;
      }

      clearAutoTimer();
      clearFinishTimer();

      const nextMotion: MotionState = {
        from,
        to: normalized,
        key: ++motionKeyRef.current,
      };

      motionRef.current = nextMotion;
      setMotion(nextMotion);

      finishTimerRef.current = setTimeout(
        () => finishTransition(nextMotion),
        MOTION_DURATION_MS + 80,
      );
    },
    [clearAutoTimer, clearFinishTimer, finishTransition, scheduleAutoRotate],
  );

  beginTransitionRef.current = beginTransition;

  useEffect(() => {
    scheduleAutoRotate();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearAutoTimer();
      } else if (!motionRef.current) {
        scheduleAutoRotate();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearAutoTimer();
      clearFinishTimer();
    };
  }, [clearAutoTimer, clearFinishTimer, scheduleAutoRotate]);

  const targetScene = motion?.to ?? settledScene;
  const currentScene = SCENES[targetScene];
  const hotspotScene = targetScene;

  const preload = useMemo(
    () => [
      `${ASSET_ROOT}/globe.svg`,
      ...SCENES.map((scene) => numberAsset(scene.id)),
      ...PILLARS.flatMap((pillar) => [...pillar.holograms]),
    ],
    [],
  );

  return (
    <section
      id="services"
      className={styles.section}
      aria-label="One ecosystem, three pillars"
    >
      <div
        className={styles.desktopStage}
        data-scene={targetScene}
        data-moving={Boolean(motion)}
      >
        <Artwork targetScene={targetScene} moving={Boolean(motion)} />

        <div className={styles.desktopCopyArea}>
          <div className={styles.desktopLabel}>
            <span aria-hidden="true" />
            ONE ECOSYSTEM, THREE PILLARS
          </div>

          <div className={styles.desktopCopyViewport}>
            {!motion ? (
              <SceneCopy scene={SCENES[settledScene]} />
            ) : (
              <>
                <SceneCopy
                  key={`${motion.key}-copy-out`}
                  scene={SCENES[motion.from]}
                  className={styles.copyOutgoing}
                />
                <SceneCopy
                  key={`${motion.key}-copy-in`}
                  scene={SCENES[motion.to]}
                  className={styles.copyIncoming}
                />
              </>
            )}
          </div>
        </div>

        <a
          href="#portfolio"
          className={styles.desktopLearnMore}
          aria-label={`Learn more about ${currentScene.title}`}
        >
          LEARN MORE
        </a>

        <div
          className={styles.hotspotLayer}
          data-disabled={Boolean(motion)}
          aria-label="Choose service pillar"
        >
          {HOTSPOTS[hotspotScene].map((hotspot) => (
            <button
              key={`${hotspotScene}-${hotspot.target}`}
              type="button"
              aria-label={hotspot.label}
              className={styles.hotspot}
              style={hotspot.style}
              disabled={Boolean(motion)}
              onClick={() => beginTransition(hotspot.target)}
            />
          ))}
        </div>
      </div>

      <div
        className={styles.mobileStage}
        data-scene={targetScene}
        data-moving={Boolean(motion)}
      >
        <div className={styles.mobileCopyArea}>
          <div className={styles.mobileLabel}>
            <span aria-hidden="true" />
            ONE ECOSYSTEM, THREE PILLARS
          </div>

          <div className={styles.mobileCopyViewport}>
            {!motion ? (
              <SceneCopy scene={SCENES[settledScene]} mobile />
            ) : (
              <>
                <SceneCopy
                  key={`${motion.key}-mobile-copy-out`}
                  scene={SCENES[motion.from]}
                  className={styles.mobileCopyOutgoing}
                  mobile
                />
                <SceneCopy
                  key={`${motion.key}-mobile-copy-in`}
                  scene={SCENES[motion.to]}
                  className={styles.mobileCopyIncoming}
                  mobile
                />
              </>
            )}
          </div>

          <a href="#portfolio" className={styles.mobileLearnMore}>
            LEARN MORE
          </a>
        </div>

        <div className={styles.mobileVisual} aria-hidden="true">
          <div className={styles.mobileVisualCanvas}>
            <Artwork targetScene={targetScene} moving={Boolean(motion)} mobile />
          </div>
        </div>

        <div className={styles.mobileControls} aria-label="Choose service pillar">
          {SCENES.map((scene) => (
            <button
              key={scene.id}
              type="button"
              className={styles.mobileControl}
              data-active={targetScene === scene.id}
              disabled={Boolean(motion)}
              onClick={() => beginTransition(scene.id)}
              aria-label={`Show ${scene.title}`}
              aria-current={targetScene === scene.id ? 'true' : undefined}
            >
              {scene.number}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.assetPreloader} aria-hidden="true">
        {preload.map((src) => (
          <img key={src} src={src} alt="" loading="eager" decoding="async" />
        ))}
      </div>

      <p className={styles.srOnly} aria-live="polite">
        Showing {currentScene.title}
      </p>
    </section>
  );
}

function SceneCopy({
  scene,
  className = '',
  mobile = false,
}: {
  scene: Scene;
  className?: string;
  mobile?: boolean;
}) {
  return (
    <div
      className={`${mobile ? styles.mobileCopy : styles.desktopCopy} ${className}`}
    >
      <h2 className={mobile ? styles.mobileTitle : styles.desktopTitle}>
        {scene.titleLines}
      </h2>

      <div className={mobile ? styles.mobileTags : styles.desktopTags}>
        {scene.tags.map((tag, index) => (
          <span
            key={`${scene.id}-${tag}`}
            className={mobile ? styles.mobileTag : styles.desktopTag}
          >
            {tag}
            {index < scene.tags.length - 1 && <i aria-hidden="true" />}
          </span>
        ))}
      </div>
    </div>
  );
}
