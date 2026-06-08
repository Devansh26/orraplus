import type { WaitlistEntry, WaitlistFormData } from '@/types';

const STORAGE_KEY = 'orra_waitlist_entries';

/**
 * Retrieve all waitlist entries from localStorage.
 */
export function getWaitlistEntries(): WaitlistEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as WaitlistEntry[]) : [];
  } catch {
    return [];
  }
}

/**
 * Add a new waitlist entry.
 * Returns the created entry.
 * NOTE: Replace submitToBackend() to integrate a real API.
 */
export async function submitWaitlistEntry(
  data: WaitlistFormData,
): Promise<WaitlistEntry> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const entry: WaitlistEntry = {
    id: crypto.randomUUID(),
    fullName: data.fullName.trim(),
    email: data.email.trim().toLowerCase(),
    mobile: data.mobile.trim(),
    createdAt: new Date().toISOString(),
  };

  // Check for duplicate email
  const existing = getWaitlistEntries();
  const isDuplicate = existing.some((e) => e.email === entry.email);
  if (isDuplicate) {
    throw new Error('This email is already on the waitlist.');
  }

  // Store locally
  const updated = [...existing, entry];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  // TODO: Replace this section with backend API call
  // await fetch('/api/waitlist', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(entry),
  // });

  return entry;
}

/**
 * Check if an email is already registered.
 */
export function isEmailRegistered(email: string): boolean {
  const entries = getWaitlistEntries();
  return entries.some(
    (e) => e.email === email.trim().toLowerCase(),
  );
}

/**
 * Get waitlist count.
 */
export function getWaitlistCount(): number {
  return getWaitlistEntries().length;
}
