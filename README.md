# Node library for Roadmap API

API version: v1.2.0
Library version: v1.3.0

## Summary

Official Node.js API client library for [Roadmap](https://roadmap.space)'s API.

## Installation

```shell
npm install roadmap-node --save
```

## Documentation

For a comprehensive list of examples, check out the [API documentation](http://api.roadmap.space).

Here is some examples:

### Get an item

```javascript
import { Init } from "roadmap-node";

const roadmap = new Init("email", "token");
const itemId = "id";

roadmap.Items.getById(itemId, function(err, item) {
  console.log(item.title);
});
```
