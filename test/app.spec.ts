import { describe, expect, test } from "vitest";
import { setup, createPage } from "@nuxt/test-utils/e2e";

describe("App", async () => {
  await setup({
    host: process.env.CI ? undefined : "http://localhost:3000",
  });

  test("contains the title 'Welcome to Nuxt!'", async () => {
    const page = await createPage("/");

    expect(await page.innerHTML("h1")).toBe("Welcome to Nuxt!");
  });
});
