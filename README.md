<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# srotm

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a modified Givens plane rotation.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base-srotm
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var srotm = require( '@stdlib/blas-base-srotm' );
```

#### srotm( N, x, strideX, y, strideY, param )

Applies a modified Givens plane rotation.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
var param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

srotm( 2, x, 2, y, 1, param );
// x => <Float32Array>[ ~-17.0, 2.0, ~-18.0, 4.0, 5.0 ]
// y => <Float32Array>[ ~8.0, ~13.0, 8.0, 9.0, 10.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Float32Array`][mdn-float32array].
-   **strideX**: index increment for `x`.
-   **y**: second input [`Float32Array`][mdn-float32array].
-   **strideY**: index increment for `y`.
-   **param**: parameters for the modified Givens transformation.

The `N` and stride parameters determine how values in the strided arrays are accessed at runtime. For example, to apply a modified Givens plane rotation to every other element,

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

srotm( 3, x, 2, y, 2, param );
// x => <Float32Array>[ ~-20.0, 2.0, ~-24.0, 4.0, ~-28.0, 6.0 ]
// y => <Float32Array>[ ~9.0, 8.0, ~15.0, 10.0, ~21.0, 12.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array-float32' );

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y0 = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
var param = new Float32Array( [ 1.0, 0.0, 2.0, 3.0, 0.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

srotm( 2, x1, 1, y1, 1, param );
// x0 => <Float32Array>[ 1.0, ~9.0, ~10.0, 4.0, 5.0 ]
// y0 => <Float32Array>[ 6.0, 7.0, 8.0, ~-2.0, ~-3.0 ]
```

#### srotm.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, param )

Applies a modified Givens plane rotation using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
var param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

srotm.ndarray( 2, x, 1, 0, y, 2, 1, param );
// x => <Float32Array>[ ~-20.0, ~-25.0, 3.0, 4.0, 5.0 ]
// y => <Float32Array>[ 6.0, ~9.0, 8.0, ~13.0, 10.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a modified Givens plane rotation to every other element starting from the second element,

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

srotm.ndarray( 3, x, 2, 1, y, 2, 1, param );
// x => <Float32Array>[ 1.0, ~-22.0, 3.0, ~-26.0, 5.0, ~-30.0 ]
// y => <Float32Array>[ 7.0, ~12.0, 9.0, ~18.0, 11.0, ~24.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave `x` and `y` unchanged.
-   `srotm()` corresponds to the [BLAS][blas] level 1 function [`srotm`][srotm].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var srotm = require( '@stdlib/blas-base-srotm' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 10, 0, 500, opts );
console.log( x );

var y = discreteUniform( x.length, 0, 255, opts );
console.log( y );

var param = discreteUniform( 5, -5, 5, opts );
console.log( param );

// Apply a plane rotation:
srotm( x.length, x, 1, y, 1, param );
console.log( x );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/base/srotm.h"
```

#### c_srotm( N, \*X, strideX, \*Y, strideY, param )

Applies a modified Givens plane rotation.

```c
float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f };
float y[] = { 6.0f, 7.0f, 8.0f, 9.0f, 10.0f };
const float param[5] = { 0.0f, 0.0f, 2.0f, -3.0f, 0.0f };

c_srotm( 5, x, 1, y, 1, param );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[inout] float*` first input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **Y**: `[inout] float*` second input array.
-   **strideY**: `[in] CBLAS_INT` index increment for `Y`.
-   **param**: `[in] float` parameters for the modified Givens transformation.

```c
void c_srotm( const CBLAS_INT N, float *X, const CBLAS_INT strideX, float *Y, const CBLAS_INT strideY, const float *param );
```

#### c_srotm_ndarray( N, \*X, strideX, offsetX, \*Y, strideY, offsetY, param )

Applies a modified Givens plane rotation using alternative indexing semantics.

```c
float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f };
float y[] = { 6.0f, 7.0f, 8.0f, 9.0f, 10.0f };
const float param[5] = { 0.0f, 0.0f, 2.0f, -3.0f, 0.0f };

c_srotm_ndarray( 5, x, 1, 0, y, 1, 0, param );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[inout] float*` first input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[inout] float*` second input array.
-   **strideY**: `[in] CBLAS_INT` index increment for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.
-   **param**: `[in] float` parameters for the modified Givens transformation.

```c
void c_srotm_ndarray( const CBLAS_INT N, float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, const float *param );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/base/srotm.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f };
    float y[] = { 6.0f, 7.0f, 8.0f, 9.0f, 10.0f };

    // Specify the number of elements:
    const int N = 5;

    // Specify stride lengths:
    const int strideX = 1;
    const int strideY = 1;

    // Specify parameters for the modified Givens transformation:
    const float param[5] = { 0.0f, 0.0f, 2.0f, -3.0f, 0.0f };

    // Apply plane rotation:
    c_srotm( N, x, strideX, y, strideY, param );

    // Print the result:
    for ( int i = 0; i < 5; i++ ) {
        printf( "x[ %i ] = %f, y[ %i ] = %f\n", i, x[ i ], i, y[ i ] );
    }

    // Apply plane rotation:
    c_srotm_ndarray( N, x, -strideX, N-1, y, -strideY, N-1, param );

    // Print the result:
    for ( int i = 0; i < 5; i++ ) {
        printf( "x[ %i ] = %f, y[ %i ] = %f\n", i, x[ i ], i, y[ i ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-srotm.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-srotm

[test-image]: https://github.com/stdlib-js/blas-base-srotm/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-srotm/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-srotm/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-srotm?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-srotm.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-srotm/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-srotm/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-srotm/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-srotm/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-srotm/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-srotm/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-srotm/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-srotm/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-srotm/main/LICENSE

[blas]: http://www.netlib.org/blas

[srotm]: https://www.netlib.org/lapack/explore-html/d1/d45/group__rot_gae48ef017306866ac2d5a8c5a52617858.html#gae48ef017306866ac2d5a8c5a5261785

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
