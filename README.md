# Astryx Hosting

Marketing site and price posters for Astryx Hosting, a Philippines Minecraft host. The motto is fast, reliable, and affordable.

## Site

The site lists both hardware lines and links to the panel at [panel.astryxhosting.fun](https://panel.astryxhosting.fun).

**Intel Xeon Gold** — Pig ₱249, Wolf ₱349, Zombie ₱549, Skeleton ₱799, Ender Dragon ₱1,099

**Ryzen 9** — Core ₱399, Boost ₱549, Power ₱749, Performance ₱999, Ultra ₱1,399

### Run with Docker

```bash
docker compose up --build
```

Open http://localhost:3847

### Run locally without Docker

```bash
npm install
npm run dev -- --port 3847
```

## Posters

Exported images:

- `posters/export/astryx-intel-xeon-gold.png`
- `posters/export/astryx-ryzen-9.png`
- `posters/export/astryx-spec-update.png`

Open `posters/xeon.html` or `posters/ryzen.html` in a browser. Each poster is 1080×1060. Prices are monthly, in Philippine pesos.
