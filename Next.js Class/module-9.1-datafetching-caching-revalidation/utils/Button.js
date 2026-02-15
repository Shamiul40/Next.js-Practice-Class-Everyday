"use client";
import { useFormStatus } from "react-dom";

export default function Button() {
  const { pending } = useFormStatus() ;

  return (
    <div>
      <button disabled={pending} type="submit">
        {pending ? "submitting" : "submit"}
      </button>
    </div>
  );
}
