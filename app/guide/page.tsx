import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "사용법 안내 | todo",
}

const STEPS = [
  {
    title: "할 일 추가",
    body: "입력창에 내용을 적고 Enter를 누르면 목록에 추가됩니다. 빈 내용은 추가되지 않습니다.",
  },
  {
    title: "완료 표시",
    body: "항목 왼쪽의 체크박스를 누르면 완료로 표시되고, 다시 누르면 진행중으로 돌아갑니다.",
  },
  {
    title: "수정과 삭제",
    body: "항목의 글자를 더블클릭하면 내용을 고칠 수 있고(Enter로 저장), 휴지통 버튼으로 항목을 지울 수 있습니다.",
  },
  {
    title: "필터로 보기",
    body: "상단의 전체 · 진행중 · 완료 탭으로 원하는 항목만 모아 볼 수 있습니다.",
  },
  {
    title: "완료 항목 정리",
    body: "완료한 항목이 있으면 오른쪽 아래 “완료한 일 지우기” 버튼으로 한 번에 지울 수 있습니다.",
  },
  {
    title: "저장",
    body: "할 일은 이 브라우저에만 저장됩니다. 다른 브라우저나 기기에서는 보이지 않습니다.",
  },
]

export default function GuidePage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-md flex-col gap-6 p-6 pt-16">
      <h1 className="text-3xl font-bold tracking-tight">사용법 안내</h1>
      <ol className="flex flex-col gap-4">
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              {i + 1}
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold">{step.title}</h2>
              <p className="text-sm text-muted-foreground">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <Link href="/" className="text-sm underline underline-offset-4">
        ← 내 할 일로 돌아가기
      </Link>
    </main>
  )
}
