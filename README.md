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

## Environment variables

This project uses [dotenv](https://www.npmjs.com/package/dotenv) to load environment variables from a `.env` file.
