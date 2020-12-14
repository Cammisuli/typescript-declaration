# Types in declaration files point to relative path

Building `proj-2` with `tsc -p ./proj-2/tsconfig.json` outputs files in the `dist` directory. The type definition will output the following:

```
export declare const wrappedFunction: (arg: import("../proj-1").Test) => void;
```

Building `proj-3` with `tsc -p ./proj-3/tsconfig.json` outputs files as well. The type definition will have this instead:

```
import { Test } from "@my-org/proj-1";
export declare const wrappedFunction: (arg: Test) => void;
```
