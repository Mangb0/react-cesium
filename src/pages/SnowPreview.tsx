import { Viewer, useCesium, CameraFlyTo, ParticleSystem } from "resium";
import {
  Cartesian3,
  Cartesian2,
  SphereEmitter,
  Matrix4,
  Color,
  createWorldTerrainAsync,
  Math as CesiumMath,
  Particle,
} from "cesium";
import { useMemo, useRef, useCallback } from "react";

const pos = new Cartesian3(
  277096.634865404,
  5647834.481964232,
  2985563.7039122293
);
// 눈 alpha값
const snowAlpha = 1.0;
// 눈 반지름
const snowRadius = 100000.0;

const SnowParticle = () => {
  const scene = useCesium().scene;
  // 눈 중력
  const snowGravityScratch = useRef(new Cartesian3());
  // 눈 크기
  const snowParticleSize = scene ? scene.drawingBufferWidth / 100.0 : 0;
  // 눈 최소 크기
  const minimumSnowImageSize = useMemo(
    () => new Cartesian2(snowParticleSize, snowParticleSize),
    [snowParticleSize]
  );
  // 눈 최대 크기
  const maximumSnowImageSize = useMemo(
    () => new Cartesian2(snowParticleSize * 2.0, snowParticleSize * 2.0),
    [snowParticleSize]
  );
  const emitter = useMemo(() => new SphereEmitter(snowRadius), []); // 눈 생성기

  // 눈 생성기
  const onUpdate = useCallback(
    (particle: Particle) => {
      if (!scene) return;

      // 눈 중력
      snowGravityScratch.current = Cartesian3.normalize(
        particle.position,
        snowGravityScratch.current
      );
      // 눈 중력 크기
      Cartesian3.multiplyByScalar(
        snowGravityScratch.current,
        CesiumMath.randomBetween(-30.0, -300.0),
        snowGravityScratch.current
      );
      // 눈 중력 적용
      particle.velocity = Cartesian3.add(
        particle.velocity,
        snowGravityScratch.current,
        particle.velocity
      );

      // 카메라와 눈 거리
      const distance = Cartesian3.distance(
        scene.camera.position,
        particle.position
      );

      // 눈 alpha값
      if (distance > snowRadius) {
        particle.endColor.alpha = 0.0;
      } else {
        particle.endColor.alpha = snowAlpha / (distance / snowRadius + 0.1);
      }
    },
    [scene]
  );

  return (
    /**
     * 눈 생성기
     * @param {Matrix4} modelMatrix 눈 위치
     * @param {Number} minimumSpeed 눈 최소 속도
     * @param {Number} maximumSpeed 눈 최대 속도
     * @param {Number} lifetime 눈 수명
     * @param {SphereEmitter} emitter 눈 생성기
     * @param {Number} startScale 눈 시작 크기
     * @param {Number} endScale 눈 끝 크기
     * @param {String} image 눈 이미지
     * @param {Number} emissionRate 눈 생성 속도
     * @param {Color} startColor 눈 시작 색
     * @param {Color} endColor 눈 끝 색
     * @param {Cartesian2} minimumImageSize 눈 최소 크기
     * @param {Cartesian2} maximumImageSize 눈 최대 크기
     * @param {Function} onUpdate 눈 생성기
     */
    <ParticleSystem
      modelMatrix={Matrix4.fromTranslation(pos)}
      minimumSpeed={-1.0}
      maximumSpeed={0.0}
      lifetime={15.0}
      emitter={emitter}
      startScale={0.5}
      endScale={1.0}
      image="circular_particle.png"
      emissionRate={7000.0}
      startColor={Color.WHITE.withAlpha(0.0)}
      endColor={Color.WHITE.withAlpha(snowAlpha)}
      minimumImageSize={minimumSnowImageSize}
      maximumImageSize={maximumSnowImageSize}
      onUpdate={onUpdate}
    />
  );
};
const SnowPreview = () => {
  return (
    <Viewer
      className="viewer-container"
      shouldAnimate
      terrainProvider={createWorldTerrainAsync()}
    >
      <CameraFlyTo
        duration={0}
        destination={pos}
        orientation={{
          heading: 4.731089976107251,
          pitch: -0.32003481981370063,
        }}
      />
      <SnowParticle />
    </Viewer>
  );
};

export default SnowPreview;
