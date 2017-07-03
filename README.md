# Node library for Roadmap API

API version: v1.2.0
Library version: v1.2.0

## Summary

Official Node.js API client library for [Roadmap](https://roadmap.space)'s API.

## Installation

```shell
npm install roadmap --save
```

## Documentation

For a comprehensive list of examples, check out the [API documentation](http://api.roadmap.space).

Here is some examples:

### Get an item

```javascript
import { Init } from "roadmap-node";

let roadmap = new Init("email", "token");
roadmap.Items.getById("id", function(err, item) { console.log(item.title)});
```
