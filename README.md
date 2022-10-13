## Pandaflag Node JS SDK

Node JS SDK to easily evaluate Flags in your Node project

## Installation

```
npm install pandaflag-node
```

## Initialise the client

```tsx
import PandaflagClient from 'pandaflag-node'

PandaflagClient.init(PROJECT_API_KEY, ENVIRONMENT)
```

**PROJECT_API_KEY** = Your projects api key found in Pandaflag app In **Projects** page
**ENVIRONMENT** = The environment name for which you initialize the client

## Evaluate flags

```tsx
// Get all flags
const flags = client.getFlags()

// Get specific flag
const flag = client.getFlag('maps_v2')
// {
//   name: 'maps_v2'
//   description: 'Updated UI version of maps feature'
//   enabled: true
// }
```
