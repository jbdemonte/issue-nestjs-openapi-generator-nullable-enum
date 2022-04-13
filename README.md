# Description

Repository to reproduce the issue.

Nullable enum are not generated as nullable using [NestJS](https://nestjs.com/) and [openapi-generator](https://openapi-generator.tech/) (latest version - 5.4)

## Installation

```bash
$ npm install
```

## Generate the OpenApi

```bash
# generate the openapi.json file and the angular client
npm run generate:angular-client
```

(you can also generate only the `openapi.json` file using `npm run generate:openapi-specs`)

## Bug description (Nest or OpenApi Generator ?)

Based on the [dto](./src/get-hello-response.dto.ts) :

```typescript
  @ApiProperty({ enum: FooBarEnum, enumName: 'FooBarEnum', nullable: true })
  value!: FooBarEnum | null;

  @ApiProperty({ oneOf: [{ type: 'enum', $ref: 'FooBarEnum', nullable: true }] })
  workaround!: FooBarEnum | null;
```

The [openapi.json](./openapi.json) generated file contains those properties:
````json
  "value": {
    "nullable": true,
    "$ref": "#/components/schemas/FooBarEnum"
  },
  "workaround": {
    "oneOf": [
      {
        "type": "enum",
        "$ref": "FooBarEnum",
        "nullable": true
      }
    ]
  },
````

And the [angular client](./angular-client/model/get-hello-response-dto.ts) models those:

```typescript
    value: FooBarEnum;
    workaround: FooBarEnum | null;
```