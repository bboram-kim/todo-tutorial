# Todo Tutorial

[Claude Code Playbook](https://docs.claude-hunt.com) 강의에서 작은 할 일 앱을 직접 만들어 보며 Claude Code 쓰는 법을 배우는 연습용 저장소입니다.

## 관련 링크

- 강의 본문: https://docs.claude-hunt.com
- 수강생 결과물 공유: https://claude-hunt.com

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- shadcn/ui (radix-maia 스타일, taupe 베이스)
- TypeScript / ESLint / Prettier
- 패키지 매니저: bun 1.3.6

## 시작하기

### 1. 준비물

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) (LTS 권장). Next.js 개발 서버가 Node.js 위에서 돌아갑니다.
- [Bun](https://bun.sh) 1.3.6 이상. 이 저장소는 `bun.lock`을 쓰므로 npm이나 yarn 대신 bun으로 설치하세요.

각각 설치되어 있는지 확인합니다.

```bash
git --version
node -v
bun -v
```

### 2. 저장소 받고 의존성 설치

```bash
git clone <저장소 주소>
cd todo_tutorial
bun install
```

### 3. 개발 서버 실행

```bash
bun dev
```

터미널에 `Ready`가 표시되면 [http://localhost:3000](http://localhost:3000) 을 브라우저로 여세요. 3000번 포트를 이미 쓰고 있으면 Next.js가 다른 포트(3001 등)를 골라 터미널에 알려 줍니다. 서버는 `Ctrl + C`로 끝냅니다.

### 4. 제대로 설치됐는지 확인

개발 서버를 켜 둔 채 다른 터미널을 열거나, 서버를 끈 뒤 아래를 실행하세요. 모두 오류 없이 끝나야 합니다.

```bash
bun run typecheck
bun run lint
bun run test
```

### 자주 쓰는 스크립트

```bash
bun run build      # 프로덕션 빌드
bun run start      # 빌드 결과 실행 (먼저 build 필요)
bun run lint       # ESLint
bun run typecheck  # tsc --noEmit
bun run test       # 테스트 한 번 실행 (Vitest)
bun run test:watch # 테스트 감시 모드
bun run format     # Prettier 포맷팅
```

## 레슨별 시작 브랜치

레슨마다 시작 시점의 코드를 `lesson/<레슨 이름>` 브랜치로 제공합니다. 레슨 본문이 안내하는 브랜치로 바꾼 뒤 따라가세요.

```shell
git checkout lesson/claude-md
```

## 컴포넌트 추가

shadcn/ui 컴포넌트는 다음과 같이 추가합니다.

```bash
bunx --bun shadcn@latest add button
```

`components/ui` 디렉토리에 컴포넌트가 추가됩니다.

## 컴포넌트 사용

```tsx
import { Button } from "@/components/ui/button";
```
