# Prenota Online

## Overview

This is a simple web application that allows users to get notified when there are available appointments for the Italian passport renewal in the Italian Consulate of Barcelona.

## How to use it

1. Clone the repository
2. Install the requirements with `npm install`
3. Configure the desired job in `./src/jobs/{jobName}.ts`
4. Schedule the task name, job and interval in `./src/index.ts`
5. Run the script with `npm run dev`

## How to build it

1. Run `npm run build` (this will create a `dist` folder with the compiled code)
2. Run `npm run start` to run the compiled code

## Environment variables and secrets

### Retrieving values

To safely access environment variables, you can use the `configuration` object located in `./src/environments/env.config.ts`.

```typescript
import { configuration } from "./environments/env.config";

console.log(configuration.secrets.password);
```

### Adding new environment variables

1. Add the new value in `./config/{environment}.json` (where `{environment}` is the desired environment).
2. Update the validation schema in `./src/environments/env.schema.ts`

> NOTE: If you need the value to be added to every environment, you can add it to `./config/default.json`.

### Adding new secrets

1. Add new value on the corresponding key vault or secret manager.
2. Map the new value in `./config/custom-environment-variables.json`
3. Update the validation schema in `./src/environments/env.schema.ts`
