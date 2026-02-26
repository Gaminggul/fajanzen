import { permanentRedirect } from "next/navigation";

export default function DatenschutzRedirect() {
  permanentRedirect("/en/datenschutz");
}
