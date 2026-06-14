# Sample Chart Pull

Request:

```text
Chart Toronto vs Calgary average price since January 2022.
```

PNG:

```text
https://crea-stats-explorer.vercel.app/api/chart?view=compare&g=toronto,calgary&m=ap&base=202201
```

Interactive:

```text
https://crea-stats-explorer.vercel.app/compare?g=toronto,calgary&m=ap&base=202201
```

Shell:

```bash
curl -L "https://crea-stats-explorer.vercel.app/api/chart?view=compare&g=toronto,calgary&m=ap&base=202201" -o toronto-calgary-average-price.png
```

Verified sample image in this repo:

```text
examples/toronto-calgary-average-price.png
```

Royal LePage palette:

```text
https://crea-stats-explorer.vercel.app/api/chart?view=compare&g=toronto,calgary&m=ap&base=202201&pal=royal-lepage
```

Verified Royal LePage sample image:

```text
examples/toronto-calgary-average-price-royal-lepage.png
```
