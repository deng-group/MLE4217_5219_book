# Course Helper Widget

The chat widget on the course pages now comes from [Wendao](https://github.com/deng-group/wendao).
`make web` builds the book and then adds the widget to every page:

```bash
uvx --from "wendao>=0.3" wendao widget install _build/html
```

(If Wendao is already installed, `wendao widget install _build/html` does the same.)

The widget files are copied into `_build/html/_wendao/`. Running the command again updates them and
never adds a second copy. `wendao widget remove _build/html` takes the widget out.

## Backend

The widget talks to a Wendao widget API. On `localhost` it uses `http://127.0.0.1:5055`; on the
published site it uses the same address under `/api`. To use another server:

```bash
wendao widget install _build/html --api https://your-server.example.edu
```

To try it locally, from the Wendao course workspace:

```bash
wendao serve --widget --site ../MLE4217_5219_book/_build/html
```

This repository holds no API keys, prompts, or course data for the AI. Those stay on the Wendao server.

## Sharing a preview

`share_gateway.py` serves the built book and forwards `/api/...` to the backend on the same address,
behind an access code. It works with the Wendao widget unchanged.
