import fs from "node:fs"
import path from "node:path"

const IMAGE_EXTENSIONS = ["jpg", "png", "jpeg", "webp"] as const

export type CaseGalleryLayout = "case1" | "case2" | "case3" | "case4" | "case5"

export type CaseGalleryData =
  | {
      layout: "case1"
      title: string
      images: { main: string | null; detail1: string | null; detail2: string | null }
    }
  | {
      layout: "case2"
      title: string
      images: { main: string | null; detail1: string | null }
    }
  | {
      layout: "case3"
      title: string
      images: {
        main: string | null
        cert1: string | null
        cert2: string | null
        cert3: string | null
      }
    }
  | {
      layout: "case4"
      title: string
      images: { main: string | null; detail1: string | null }
    }
  | {
      layout: "case5"
      title: string
      images: {
        cert1: string | null
        cert2: string | null
        cert3: string | null
        cert4: string | null
        cert5: string | null
        cert6: string | null
      }
    }

function publicFileUrl(...parts: string[]): string | null {
  const filePath = path.join(process.cwd(), "public", ...parts)
  return fs.existsSync(filePath) ? `/${parts.join("/")}` : null
}

export function resolveReferenceImage(caseFolder: string, basename: string): string | null {
  const stem = basename.replace(/\.(jpe?g|png|webp)$/i, "")
  for (const ext of IMAGE_EXTENSIONS) {
    const url = publicFileUrl("images", "reference", caseFolder, `${stem}.${ext}`)
    if (url) return url
  }
  return null
}

export function buildCaseGallery(
  caseFolder: string,
  layout: CaseGalleryLayout,
  title: string
): CaseGalleryData {
  switch (layout) {
    case "case1":
      return {
        layout: "case1",
        title,
        images: {
          main: resolveReferenceImage(caseFolder, "main"),
          detail1: resolveReferenceImage(caseFolder, "detail1"),
          detail2: resolveReferenceImage(caseFolder, "detail2"),
        },
      }
    case "case2":
      return {
        layout: "case2",
        title,
        images: {
          main: resolveReferenceImage(caseFolder, "main"),
          detail1: resolveReferenceImage(caseFolder, "detail1"),
        },
      }
    case "case3":
      return {
        layout: "case3",
        title,
        images: {
          main: resolveReferenceImage(caseFolder, "main"),
          cert1: resolveReferenceImage(caseFolder, "cert1"),
          cert2: resolveReferenceImage(caseFolder, "cert2"),
          cert3: resolveReferenceImage(caseFolder, "cert3"),
        },
      }
    case "case4":
      return {
        layout: "case4",
        title,
        images: {
          main: resolveReferenceImage(caseFolder, "main"),
          detail1: resolveReferenceImage(caseFolder, "detail1"),
        },
      }
    case "case5":
      return {
        layout: "case5",
        title,
        images: {
          cert1: resolveReferenceImage(caseFolder, "cert1"),
          cert2: resolveReferenceImage(caseFolder, "cert2"),
          cert3: resolveReferenceImage(caseFolder, "cert3"),
          cert4: resolveReferenceImage(caseFolder, "cert4"),
          cert5: resolveReferenceImage(caseFolder, "cert5"),
          cert6: resolveReferenceImage(caseFolder, "cert6"),
        },
      }
  }
}

export const CASE_GALLERY_LAYOUT: Record<string, CaseGalleryLayout> = {
  case1: "case1",
  case2: "case2",
  case3: "case3",
  case4: "case4",
  case5: "case5",
}
