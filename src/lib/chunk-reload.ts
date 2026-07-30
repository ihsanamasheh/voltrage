const RELOAD_KEY = "voltrage:chunk-reloaded";

const CHUNK_ERROR_PATTERNS = [
  "Importing a module script failed",
  "Failed to fetch dynamically imported module",
  "error loading dynamically imported module",
  "Unable to preload CSS",
  "ChunkLoadError",
];

function isChunkError(value: unknown): boolean {
  const message =
    typeof value === "string"
      ? value
      : value instanceof Error
        ? `${value.name} ${value.message}`
        : "";
  return CHUNK_ERROR_PATTERNS.some((pattern) =>
    message.toLowerCase().includes(pattern.toLowerCase()),
  );
}

/**
 * A stale browser tab holding a previous build's asset hashes fails to import
 * route chunks after a redeploy, producing a blank screen. Reload once (guarded
 * by sessionStorage so we can never loop) to pick up the fresh manifest.
 */
export function installChunkReloadRecovery(): () => void {
  if (typeof window === "undefined") return () => {};

  const recover = (value: unknown) => {
    if (!isChunkError(value)) return;
    if (sessionStorage.getItem(RELOAD_KEY)) return;
    sessionStorage.setItem(RELOAD_KEY, "1");
    window.location.reload();
  };

  const onError = (event: ErrorEvent) => recover(event.error ?? event.message);
  const onRejection = (event: PromiseRejectionEvent) => recover(event.reason);

  window.addEventListener("error", onError);
  window.addEventListener("unhandledrejection", onRejection);

  // Successful load — clear the guard so a future stale build can recover too.
  window.setTimeout(() => sessionStorage.removeItem(RELOAD_KEY), 5000);

  return () => {
    window.removeEventListener("error", onError);
    window.removeEventListener("unhandledrejection", onRejection);
  };
}
