import type { SubmissionResult } from "@conform-to/react";

export type ConformAction = (
  prev: SubmissionResult<string[]> | null | undefined,
  formData: FormData,
) => Promise<SubmissionResult<string[]> | null>;
