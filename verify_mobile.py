import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # Mobile viewport (iPhone 12 Pro)
        context = await browser.new_context(viewport={'width': 390, 'height': 844})
        page = await context.new_page()

        print("Navigating to http://localhost:3000...")
        await page.goto("http://localhost:3000")

        # Wait for animations
        await asyncio.sleep(3)

        print("Taking mobile_hero.png...")
        await page.screenshot(path="mobile_hero.png")

        print("Scrolling to Projects...")
        await page.evaluate("window.scrollTo(0, window.innerHeight)")
        await asyncio.sleep(2)
        print("Taking mobile_projects.png...")
        await page.screenshot(path="mobile_projects.png")

        print("Scrolling to Skills...")
        # Since projects horizontal scroll is complex, just scroll far down
        await page.evaluate("window.scrollTo(0, window.innerHeight * 5)")
        await asyncio.sleep(2)
        print("Taking mobile_skills.png...")
        await page.screenshot(path="mobile_skills.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
