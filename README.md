# ava-earl

A CLI replacement for [AVA](https://github.com/sindresorhus/ava) that works for AVA tests written in [Earl Grey](https://breuleux.github.io/earl-grey)

## Install
```
npm i -D ava-earl
```

## Usage
Add a test file:
```earl-grey
require-macros: ava-earl -> {test, serial-test}

serial-test .baz:
   @false(1 == 2)
   @not("hello", "world")

test .foo:
   @pass()
   @end()

test .bar:
   @plan(2)

   set-timeout(fn, 100) where fn = ->
      @equals(.bar, .bar)
      @same({.a, .b}, {.a, .b})
```
Add `ava-earl` to your `package.json` scripts:
```js
{
  "scripts": {
    "test": "agave"
  }
}
```
> `ava-earl`'s executable is called `agave` because it's memorable and has all the letters of `ava` and the initials of Earl Grey.

Then run it:
```sh
$ npm test
```
## Differences
The executable will only search for `.eg` files.  If you want to use `ava` with JavaScript files then use `ava` directly.  Currently `ava-earl` does not support running some tests in Earl Grey and others in JavaScript.

The macro allows you to write tests using the `@` symbol to represent `t` and it fills out the function details behind the scenes.  It also aliases several functions that are builtins for Earl Grey:

in `ava`  | in `ava-earl`
----------|-----------
`is`      | `equals`
`not`     | `nequals`
`true`    | `is-true`
`false`   | `is-false`
`pass`    | `passes`

Currently it only supports named tests and the minimal amount of boilerplate already here makes me feel that it's really unnecessary to go any further.  Not to mention, there might be some added complexity with supporting the named function format.

Also, the `serial-test` macro is currently non-working.  In the process of debugging that right now.

## Documentation
To learn more about `ava` check out their [documentation](https://github.com/sindresorhus/ava#documentation).

## License

MIT © Jacob Russo
