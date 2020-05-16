# turnip-report

A Rails + React app for selling/buying turnips on the Stock Exchange in Animal Crossing: New Horizons.

*From [Lisa Ciaccio](https://github.com/lisabobisa) and [Cory McDonald](https://github.com/corymcdonald).*

----------

## Development

### Prerequisites

1) Ruby 2.6.3
2) Bundler 2.1.4
3) Node 10.15.3
3) Yarn 1.22.4

### Running the App

Install all dependencies and build the db using the `setup` binstub.

```
bin/setup
```

The Foreman gem is used to run both the Rails server and Webpacker. Start both servers using 

```
bin/server
```

and navigate to http://localhost:5000/.

-------

## Tech Specs

|Uses|Version|For|
|--|--|--|
|Rails|6|Back end (ish)|
|React|16.13.1|UI|
|Webpacker|5.1.1|Serving JS assets|
|Devise|1.22.4|User management|
