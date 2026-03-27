import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';
import fs from 'fs';
import path from 'path';

function parseNetscapeCookies(filePath: string) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const cookies: any[] = [];
    
    for (const line of content.split('\n')) {
      const trimmedLine = line.trim();
      if (trimmedLine === '' || trimmedLine.startsWith('#')) continue;
      
      const parts = trimmedLine.split('\t');
      if (parts.length >= 7) {
        cookies.push({
          domain: parts[0],
          path: parts[2],
          secure: parts[3] === 'TRUE',
          expires: Math.floor(parseFloat(parts[4])) || -1,
          name: parts[5],
          value: parts[6],
          sameSite: 'Lax'
        });
      }
    }
    return { cookies, origins: [] };
  } catch (err) {
    console.warn(`⚠️ Could not load cookie file at ${filePath}. Tests may fail against Cloudflare.`);
    return undefined;
  }
}

const testHost = process.env.ZENDESK_TEST_HOST || '';
const storageState = parseNetscapeCookies(path.join(__dirname, 'cookies-zendesk-com.txt'));

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 60 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     */
    timeout: 30000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    actionTimeout: 0,
    baseURL: 'https://justserve.zendesk.com/hc',
    trace: 'on-first-retry',
    /* Run browser non-headless to allow manual login if necessary */
    headless: false,
    viewport: { width: 1280, height: 720 },
    storageState,
    ignoreHTTPSErrors: true,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    launchOptions: {
      // Bypasses the strict "Private Network Access" restrictions preventing Zendesk from pinging your localhost:4567
      args: [
        '--disable-web-security',
        '--disable-features=BlockInsecurePrivateNetworkRequests',
        '--allow-insecure-localhost'
      ]
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Mozilla Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Apple Safari',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  // Note: webServer block is removed so you can manually run `yarn start` in a separate terminal.
  // This helps prevent background Playwright processes from hiding/hanging on ZCLI prompts!
});
