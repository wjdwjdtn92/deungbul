import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import * as esbuild from "esbuild";

async function bundle() {
  try {
    await esbuild.build({
      entryPoints: ["src/index.ts"], // 엔트리 파일 설정
      bundle: true, // 번들링 활성화
      outdir: "dist", // 출력 디렉토리 설정
      plugins: [vanillaExtractPlugin()], // vanilla-extract 플러그인 적용
      format: "esm", // ESM 포맷으로 출력
      sourcemap: true, // 소스맵 생성
      target: ["esnext"], // 최신 환경에 맞게 트랜스파일
    });

    console.log("Build completed successfully");
  } catch (error) {
    console.error("Build failed:", error);
  }
}

bundle();
