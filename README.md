# David Davydov's Portfolio Site

## Getting Started:

Note: This assumes that you've run `npm install` on all package.json files in the project.


| Step | Production Instructions                                            | Development Instructions                                                                  |
|------|--------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| 1    | Generate a `prod.cert` file and a `prod.key` file in `./_secrets`. |                                                                                           |
| 2    | Run `npm run start` in the console.                                | Run `npm run start:dev` in the console.                                                   |
| 3    | Map port `8443` to port `443` in your console.                     | _Optional_: Map `*.<domain>.<tld>` to `localhost:8443` in your hosts file for convinence. |

## Setting up automatic SSL certificate renewal

_Todo_

## Todo

 - [ ] Add files to set up SSL certificate CRON jobs.
 - [ ] Add command to automatically re-run NPM install on all subdirectories in `./sites`.
 - [ ] Create a section describing how this portfolio router/site combo works.