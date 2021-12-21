## Micro Frontends with Webpack's Module Federation

This repo contains a React based demo bank application which is built using micro frontend architecture. Also it uses the Webpack's Module Federation Feature.

https://dev.to/pahanperera/react-micro-frontends-with-webpacks-module-federation-32ii


This mono repo contains...

- `accounts-summary-app` - Micro frontend that provides the summary of all the accounts
- `account-details-app` - Micro frontend that provides details of a selected account
- `main-app` - App that hosts above two components. Also acts as a medium to communicate with each other.

### Local Setup

1. Navigate to each project
2. Install dependencies

```
$ yarn install
```

3. Run in local

```
$ yarn start
```

Each application will run on its configured ports.

- `accounts-summary-app` - http://localhost:9001/
- `account-details-app` - http://localhost:9002/
- `main-app` - http://localhost:9000/

## You can find the full React Template used in this sample bank application [here](https://pahanperera.gumroad.com/l/GDJBq). 
