### enquire-js

避免服务端渲染报错。

### enquireScreen(cb, query): object(handler);

| name       |type            |default  |description     |
|------------|----------------|---------|----------------|
| cb  | func     | null    | 回调接口, cb(bool),  bool 为 true 为 mobile  |
| query | string | `only screen and (max-width: 767.99px)` | css 的场景判断 |

### unenquireScreen(handler, query);

| name       |type            |default  |description     |
|------------|----------------|---------|----------------|
| handler  | object     | null    | 需要卸载的 `enquireScreen` 返回 handler;  |
| query | string | `only screen and (max-width: 767.99px)` | css 的场景判断 |
