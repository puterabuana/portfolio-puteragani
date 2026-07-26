const INTRO_KEY = 'pbg-intro-seen';

/** True once the loader intro has played in this browser session. */
export function introSeen(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return sessionStorage.getItem(INTRO_KEY) === '1';
  } catch {
    return false;
  }
}

export function markIntroSeen(): void {
  try {
    sessionStorage.setItem(INTRO_KEY, '1');
  } catch {
    /* storage unavailable — intro will simply replay */
  }
}

/**
 * Hero entrance delays are authored against the 1.4s loader. When the loader
 * is skipped (repeat visit in the same session), pull every delay forward.
 */
export function introDelay(delay: number): number {
  return introSeen() ? Math.max(0, delay - 1.4) : delay;
}
