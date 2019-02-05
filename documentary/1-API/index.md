## API

The package is available by importing its default function:

```js
import resolveDependency from 'resolve-dependency'
```

%~%

```## async resolveDependency => { path: string, isDir: boolean }
[
  ["path", "string"],
  ["relativeFrom?", "string"]
]
```

For the path that is used to require a module from another module, find the destination of the actual file on the file system. This includes the index JS and JSX files of directories. The second `relativeFrom` argument is used to point to the file in which the path is required from.

%EXAMPLE: example/example.js, ../src => resolve-dependency%
%FORK example example/example%

%~%