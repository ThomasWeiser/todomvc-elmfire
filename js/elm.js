var Elm = Elm || { Native: {} };
Elm.Array = Elm.Array || {};
Elm.Array.make = function (_elm) {
   "use strict";
   _elm.Array = _elm.Array || {};
   if (_elm.Array.values)
   return _elm.Array.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Array",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Array = Elm.Native.Array.make(_elm);
   var append = $Native$Array.append;
   var length = $Native$Array.length;
   var isEmpty = function (array) {
      return _U.eq(length(array),
      0);
   };
   var slice = $Native$Array.slice;
   var set = $Native$Array.set;
   var get = F2(function (i,
   array) {
      return _U.cmp(0,
      i) < 1 && _U.cmp(i,
      $Native$Array.length(array)) < 0 ? $Maybe.Just(A2($Native$Array.get,
      i,
      array)) : $Maybe.Nothing;
   });
   var push = $Native$Array.push;
   var empty = $Native$Array.empty;
   var filter = F2(function (isOkay,
   arr) {
      return function () {
         var update = F2(function (x,
         xs) {
            return isOkay(x) ? A2($Native$Array.push,
            x,
            xs) : xs;
         });
         return A3($Native$Array.foldl,
         update,
         $Native$Array.empty,
         arr);
      }();
   });
   var foldr = $Native$Array.foldr;
   var foldl = $Native$Array.foldl;
   var indexedMap = $Native$Array.indexedMap;
   var map = $Native$Array.map;
   var toIndexedList = function (array) {
      return A3($List.map2,
      F2(function (v0,v1) {
         return {ctor: "_Tuple2"
                ,_0: v0
                ,_1: v1};
      }),
      _L.range(0,
      $Native$Array.length(array) - 1),
      $Native$Array.toList(array));
   };
   var toList = $Native$Array.toList;
   var fromList = $Native$Array.fromList;
   var initialize = $Native$Array.initialize;
   var repeat = F2(function (n,e) {
      return A2(initialize,
      n,
      $Basics.always(e));
   });
   var Array = {ctor: "Array"};
   _elm.Array.values = {_op: _op
                       ,empty: empty
                       ,repeat: repeat
                       ,initialize: initialize
                       ,fromList: fromList
                       ,isEmpty: isEmpty
                       ,length: length
                       ,push: push
                       ,append: append
                       ,get: get
                       ,set: set
                       ,slice: slice
                       ,toList: toList
                       ,toIndexedList: toIndexedList
                       ,map: map
                       ,indexedMap: indexedMap
                       ,filter: filter
                       ,foldl: foldl
                       ,foldr: foldr};
   return _elm.Array.values;
};
Elm.Basics = Elm.Basics || {};
Elm.Basics.make = function (_elm) {
   "use strict";
   _elm.Basics = _elm.Basics || {};
   if (_elm.Basics.values)
   return _elm.Basics.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Basics",
   $Native$Basics = Elm.Native.Basics.make(_elm),
   $Native$Show = Elm.Native.Show.make(_elm),
   $Native$Utils = Elm.Native.Utils.make(_elm);
   var uncurry = F2(function (f,
   _v0) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2": return A2(f,
              _v0._0,
              _v0._1);}
         _U.badCase($moduleName,
         "on line 595, column 3 to 8");
      }();
   });
   var curry = F3(function (f,
   a,
   b) {
      return f({ctor: "_Tuple2"
               ,_0: a
               ,_1: b});
   });
   var flip = F3(function (f,b,a) {
      return A2(f,a,b);
   });
   var snd = function (_v4) {
      return function () {
         switch (_v4.ctor)
         {case "_Tuple2": return _v4._1;}
         _U.badCase($moduleName,
         "on line 573, column 3 to 4");
      }();
   };
   var fst = function (_v8) {
      return function () {
         switch (_v8.ctor)
         {case "_Tuple2": return _v8._0;}
         _U.badCase($moduleName,
         "on line 567, column 3 to 4");
      }();
   };
   var always = F2(function (a,
   _v12) {
      return function () {
         return a;
      }();
   });
   var identity = function (x) {
      return x;
   };
   _op["<|"] = F2(function (f,x) {
      return f(x);
   });
   _op["|>"] = F2(function (x,f) {
      return f(x);
   });
   _op[">>"] = F3(function (f,
   g,
   x) {
      return g(f(x));
   });
   _op["<<"] = F3(function (g,
   f,
   x) {
      return g(f(x));
   });
   _op["++"] = $Native$Utils.append;
   var toString = $Native$Show.toString;
   var isInfinite = $Native$Basics.isInfinite;
   var isNaN = $Native$Basics.isNaN;
   var toFloat = $Native$Basics.toFloat;
   var ceiling = $Native$Basics.ceiling;
   var floor = $Native$Basics.floor;
   var truncate = $Native$Basics.truncate;
   var round = $Native$Basics.round;
   var otherwise = true;
   var not = $Native$Basics.not;
   var xor = $Native$Basics.xor;
   _op["||"] = $Native$Basics.or;
   _op["&&"] = $Native$Basics.and;
   var max = $Native$Basics.max;
   var min = $Native$Basics.min;
   var GT = {ctor: "GT"};
   var EQ = {ctor: "EQ"};
   var LT = {ctor: "LT"};
   var compare = $Native$Basics.compare;
   _op[">="] = $Native$Basics.ge;
   _op["<="] = $Native$Basics.le;
   _op[">"] = $Native$Basics.gt;
   _op["<"] = $Native$Basics.lt;
   _op["/="] = $Native$Basics.neq;
   _op["=="] = $Native$Basics.eq;
   var e = $Native$Basics.e;
   var pi = $Native$Basics.pi;
   var clamp = $Native$Basics.clamp;
   var logBase = $Native$Basics.logBase;
   var abs = $Native$Basics.abs;
   var negate = $Native$Basics.negate;
   var sqrt = $Native$Basics.sqrt;
   var atan2 = $Native$Basics.atan2;
   var atan = $Native$Basics.atan;
   var asin = $Native$Basics.asin;
   var acos = $Native$Basics.acos;
   var tan = $Native$Basics.tan;
   var sin = $Native$Basics.sin;
   var cos = $Native$Basics.cos;
   _op["^"] = $Native$Basics.exp;
   _op["%"] = $Native$Basics.mod;
   var rem = $Native$Basics.rem;
   _op["//"] = $Native$Basics.div;
   _op["/"] = $Native$Basics.floatDiv;
   _op["*"] = $Native$Basics.mul;
   _op["-"] = $Native$Basics.sub;
   _op["+"] = $Native$Basics.add;
   var toPolar = $Native$Basics.toPolar;
   var fromPolar = $Native$Basics.fromPolar;
   var turns = $Native$Basics.turns;
   var degrees = $Native$Basics.degrees;
   var radians = function (t) {
      return t;
   };
   _elm.Basics.values = {_op: _op
                        ,max: max
                        ,min: min
                        ,compare: compare
                        ,not: not
                        ,xor: xor
                        ,otherwise: otherwise
                        ,rem: rem
                        ,negate: negate
                        ,abs: abs
                        ,sqrt: sqrt
                        ,clamp: clamp
                        ,logBase: logBase
                        ,e: e
                        ,pi: pi
                        ,cos: cos
                        ,sin: sin
                        ,tan: tan
                        ,acos: acos
                        ,asin: asin
                        ,atan: atan
                        ,atan2: atan2
                        ,round: round
                        ,floor: floor
                        ,ceiling: ceiling
                        ,truncate: truncate
                        ,toFloat: toFloat
                        ,degrees: degrees
                        ,radians: radians
                        ,turns: turns
                        ,toPolar: toPolar
                        ,fromPolar: fromPolar
                        ,isNaN: isNaN
                        ,isInfinite: isInfinite
                        ,toString: toString
                        ,fst: fst
                        ,snd: snd
                        ,identity: identity
                        ,always: always
                        ,flip: flip
                        ,curry: curry
                        ,uncurry: uncurry
                        ,LT: LT
                        ,EQ: EQ
                        ,GT: GT};
   return _elm.Basics.values;
};
Elm.Char = Elm.Char || {};
Elm.Char.make = function (_elm) {
   "use strict";
   _elm.Char = _elm.Char || {};
   if (_elm.Char.values)
   return _elm.Char.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Char",
   $Basics = Elm.Basics.make(_elm),
   $Native$Char = Elm.Native.Char.make(_elm);
   var fromCode = $Native$Char.fromCode;
   var toCode = $Native$Char.toCode;
   var toLocaleLower = $Native$Char.toLocaleLower;
   var toLocaleUpper = $Native$Char.toLocaleUpper;
   var toLower = $Native$Char.toLower;
   var toUpper = $Native$Char.toUpper;
   var isBetween = F3(function (low,
   high,
   $char) {
      return function () {
         var code = toCode($char);
         return _U.cmp(code,
         toCode(low)) > -1 && _U.cmp(code,
         toCode(high)) < 1;
      }();
   });
   var isUpper = A2(isBetween,
   _U.chr("A"),
   _U.chr("Z"));
   var isLower = A2(isBetween,
   _U.chr("a"),
   _U.chr("z"));
   var isDigit = A2(isBetween,
   _U.chr("0"),
   _U.chr("9"));
   var isOctDigit = A2(isBetween,
   _U.chr("0"),
   _U.chr("7"));
   var isHexDigit = function ($char) {
      return isDigit($char) || (A3(isBetween,
      _U.chr("a"),
      _U.chr("f"),
      $char) || A3(isBetween,
      _U.chr("A"),
      _U.chr("F"),
      $char));
   };
   _elm.Char.values = {_op: _op
                      ,isUpper: isUpper
                      ,isLower: isLower
                      ,isDigit: isDigit
                      ,isOctDigit: isOctDigit
                      ,isHexDigit: isHexDigit
                      ,toUpper: toUpper
                      ,toLower: toLower
                      ,toLocaleUpper: toLocaleUpper
                      ,toLocaleLower: toLocaleLower
                      ,toCode: toCode
                      ,fromCode: fromCode};
   return _elm.Char.values;
};
Elm.Color = Elm.Color || {};
Elm.Color.make = function (_elm) {
   "use strict";
   _elm.Color = _elm.Color || {};
   if (_elm.Color.values)
   return _elm.Color.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Color",
   $Basics = Elm.Basics.make(_elm);
   var Radial = F5(function (a,
   b,
   c,
   d,
   e) {
      return {ctor: "Radial"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d
             ,_4: e};
   });
   var radial = Radial;
   var Linear = F3(function (a,
   b,
   c) {
      return {ctor: "Linear"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var linear = Linear;
   var fmod = F2(function (f,n) {
      return function () {
         var integer = $Basics.floor(f);
         return $Basics.toFloat(A2($Basics._op["%"],
         integer,
         n)) + f - $Basics.toFloat(integer);
      }();
   });
   var rgbToHsl = F3(function (red,
   green,
   blue) {
      return function () {
         var b = $Basics.toFloat(blue) / 255;
         var g = $Basics.toFloat(green) / 255;
         var r = $Basics.toFloat(red) / 255;
         var cMax = A2($Basics.max,
         A2($Basics.max,r,g),
         b);
         var cMin = A2($Basics.min,
         A2($Basics.min,r,g),
         b);
         var c = cMax - cMin;
         var lightness = (cMax + cMin) / 2;
         var saturation = _U.eq(lightness,
         0) ? 0 : c / (1 - $Basics.abs(2 * lightness - 1));
         var hue = $Basics.degrees(60) * (_U.eq(cMax,
         r) ? A2(fmod,
         (g - b) / c,
         6) : _U.eq(cMax,
         g) ? (b - r) / c + 2 : _U.eq(cMax,
         b) ? (r - g) / c + 4 : _U.badIf($moduleName,
         "between lines 150 and 152"));
         return {ctor: "_Tuple3"
                ,_0: hue
                ,_1: saturation
                ,_2: lightness};
      }();
   });
   var hslToRgb = F3(function (hue,
   saturation,
   lightness) {
      return function () {
         var hue$ = hue / $Basics.degrees(60);
         var chroma = (1 - $Basics.abs(2 * lightness - 1)) * saturation;
         var x = chroma * (1 - $Basics.abs(A2(fmod,
         hue$,
         2) - 1));
         var $ = _U.cmp(hue$,
         0) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: 0
                  ,_2: 0} : _U.cmp(hue$,
         1) < 0 ? {ctor: "_Tuple3"
                  ,_0: chroma
                  ,_1: x
                  ,_2: 0} : _U.cmp(hue$,
         2) < 0 ? {ctor: "_Tuple3"
                  ,_0: x
                  ,_1: chroma
                  ,_2: 0} : _U.cmp(hue$,
         3) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: chroma
                  ,_2: x} : _U.cmp(hue$,
         4) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: x
                  ,_2: chroma} : _U.cmp(hue$,
         5) < 0 ? {ctor: "_Tuple3"
                  ,_0: x
                  ,_1: 0
                  ,_2: chroma} : _U.cmp(hue$,
         6) < 0 ? {ctor: "_Tuple3"
                  ,_0: chroma
                  ,_1: 0
                  ,_2: x} : {ctor: "_Tuple3"
                            ,_0: 0
                            ,_1: 0
                            ,_2: 0},
         r = $._0,
         g = $._1,
         b = $._2;
         var m = lightness - chroma / 2;
         return {ctor: "_Tuple3"
                ,_0: r + m
                ,_1: g + m
                ,_2: b + m};
      }();
   });
   var toRgb = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA":
            return function () {
                 var $ = A3(hslToRgb,
                 color._0,
                 color._1,
                 color._2),
                 r = $._0,
                 g = $._1,
                 b = $._2;
                 return {_: {}
                        ,alpha: color._3
                        ,blue: $Basics.round(255 * b)
                        ,green: $Basics.round(255 * g)
                        ,red: $Basics.round(255 * r)};
              }();
            case "RGBA": return {_: {}
                                ,alpha: color._3
                                ,blue: color._2
                                ,green: color._1
                                ,red: color._0};}
         _U.badCase($moduleName,
         "between lines 124 and 132");
      }();
   };
   var toHsl = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA": return {_: {}
                              ,alpha: color._3
                              ,hue: color._0
                              ,lightness: color._2
                              ,saturation: color._1};
            case "RGBA":
            return function () {
                 var $ = A3(rgbToHsl,
                 color._0,
                 color._1,
                 color._2),
                 h = $._0,
                 s = $._1,
                 l = $._2;
                 return {_: {}
                        ,alpha: color._3
                        ,hue: h
                        ,lightness: l
                        ,saturation: s};
              }();}
         _U.badCase($moduleName,
         "between lines 114 and 118");
      }();
   };
   var HSLA = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "HSLA"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var hsla = F4(function (hue,
   saturation,
   lightness,
   alpha) {
      return A4(HSLA,
      hue - $Basics.turns($Basics.toFloat($Basics.floor(hue / (2 * $Basics.pi)))),
      saturation,
      lightness,
      alpha);
   });
   var hsl = F3(function (hue,
   saturation,
   lightness) {
      return A4(hsla,
      hue,
      saturation,
      lightness,
      1);
   });
   var complement = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA": return A4(hsla,
              color._0 + $Basics.degrees(180),
              color._1,
              color._2,
              color._3);
            case "RGBA":
            return function () {
                 var $ = A3(rgbToHsl,
                 color._0,
                 color._1,
                 color._2),
                 h = $._0,
                 s = $._1,
                 l = $._2;
                 return A4(hsla,
                 h + $Basics.degrees(180),
                 s,
                 l,
                 color._3);
              }();}
         _U.badCase($moduleName,
         "between lines 105 and 108");
      }();
   };
   var grayscale = function (p) {
      return A4(HSLA,0,0,1 - p,1);
   };
   var greyscale = function (p) {
      return A4(HSLA,0,0,1 - p,1);
   };
   var RGBA = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "RGBA"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var rgba = RGBA;
   var rgb = F3(function (r,g,b) {
      return A4(RGBA,r,g,b,1);
   });
   var lightRed = A4(RGBA,
   239,
   41,
   41,
   1);
   var red = A4(RGBA,204,0,0,1);
   var darkRed = A4(RGBA,
   164,
   0,
   0,
   1);
   var lightOrange = A4(RGBA,
   252,
   175,
   62,
   1);
   var orange = A4(RGBA,
   245,
   121,
   0,
   1);
   var darkOrange = A4(RGBA,
   206,
   92,
   0,
   1);
   var lightYellow = A4(RGBA,
   255,
   233,
   79,
   1);
   var yellow = A4(RGBA,
   237,
   212,
   0,
   1);
   var darkYellow = A4(RGBA,
   196,
   160,
   0,
   1);
   var lightGreen = A4(RGBA,
   138,
   226,
   52,
   1);
   var green = A4(RGBA,
   115,
   210,
   22,
   1);
   var darkGreen = A4(RGBA,
   78,
   154,
   6,
   1);
   var lightBlue = A4(RGBA,
   114,
   159,
   207,
   1);
   var blue = A4(RGBA,
   52,
   101,
   164,
   1);
   var darkBlue = A4(RGBA,
   32,
   74,
   135,
   1);
   var lightPurple = A4(RGBA,
   173,
   127,
   168,
   1);
   var purple = A4(RGBA,
   117,
   80,
   123,
   1);
   var darkPurple = A4(RGBA,
   92,
   53,
   102,
   1);
   var lightBrown = A4(RGBA,
   233,
   185,
   110,
   1);
   var brown = A4(RGBA,
   193,
   125,
   17,
   1);
   var darkBrown = A4(RGBA,
   143,
   89,
   2,
   1);
   var black = A4(RGBA,0,0,0,1);
   var white = A4(RGBA,
   255,
   255,
   255,
   1);
   var lightGrey = A4(RGBA,
   238,
   238,
   236,
   1);
   var grey = A4(RGBA,
   211,
   215,
   207,
   1);
   var darkGrey = A4(RGBA,
   186,
   189,
   182,
   1);
   var lightGray = A4(RGBA,
   238,
   238,
   236,
   1);
   var gray = A4(RGBA,
   211,
   215,
   207,
   1);
   var darkGray = A4(RGBA,
   186,
   189,
   182,
   1);
   var lightCharcoal = A4(RGBA,
   136,
   138,
   133,
   1);
   var charcoal = A4(RGBA,
   85,
   87,
   83,
   1);
   var darkCharcoal = A4(RGBA,
   46,
   52,
   54,
   1);
   _elm.Color.values = {_op: _op
                       ,rgb: rgb
                       ,rgba: rgba
                       ,hsl: hsl
                       ,hsla: hsla
                       ,greyscale: greyscale
                       ,grayscale: grayscale
                       ,complement: complement
                       ,linear: linear
                       ,radial: radial
                       ,toRgb: toRgb
                       ,toHsl: toHsl
                       ,red: red
                       ,orange: orange
                       ,yellow: yellow
                       ,green: green
                       ,blue: blue
                       ,purple: purple
                       ,brown: brown
                       ,lightRed: lightRed
                       ,lightOrange: lightOrange
                       ,lightYellow: lightYellow
                       ,lightGreen: lightGreen
                       ,lightBlue: lightBlue
                       ,lightPurple: lightPurple
                       ,lightBrown: lightBrown
                       ,darkRed: darkRed
                       ,darkOrange: darkOrange
                       ,darkYellow: darkYellow
                       ,darkGreen: darkGreen
                       ,darkBlue: darkBlue
                       ,darkPurple: darkPurple
                       ,darkBrown: darkBrown
                       ,white: white
                       ,lightGrey: lightGrey
                       ,grey: grey
                       ,darkGrey: darkGrey
                       ,lightCharcoal: lightCharcoal
                       ,charcoal: charcoal
                       ,darkCharcoal: darkCharcoal
                       ,black: black
                       ,lightGray: lightGray
                       ,gray: gray
                       ,darkGray: darkGray};
   return _elm.Color.values;
};
Elm.Debug = Elm.Debug || {};
Elm.Debug.make = function (_elm) {
   "use strict";
   _elm.Debug = _elm.Debug || {};
   if (_elm.Debug.values)
   return _elm.Debug.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Debug",
   $Graphics$Collage = Elm.Graphics.Collage.make(_elm),
   $Native$Debug = Elm.Native.Debug.make(_elm);
   var trace = $Native$Debug.tracePath;
   var watchSummary = $Native$Debug.watchSummary;
   var watch = $Native$Debug.watch;
   var crash = $Native$Debug.crash;
   var log = $Native$Debug.log;
   _elm.Debug.values = {_op: _op
                       ,log: log
                       ,crash: crash
                       ,watch: watch
                       ,watchSummary: watchSummary
                       ,trace: trace};
   return _elm.Debug.values;
};
Elm.Dict = Elm.Dict || {};
Elm.Dict.make = function (_elm) {
   "use strict";
   _elm.Dict = _elm.Dict || {};
   if (_elm.Dict.values)
   return _elm.Dict.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Dict",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Debug = Elm.Native.Debug.make(_elm),
   $String = Elm.String.make(_elm);
   var foldr = F3(function (f,
   acc,
   t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty":
            switch (t._0.ctor)
              {case "LBlack": return acc;}
              break;
            case "RBNode": return A3(foldr,
              f,
              A3(f,
              t._1,
              t._2,
              A3(foldr,f,acc,t._4)),
              t._3);}
         _U.badCase($moduleName,
         "between lines 417 and 421");
      }();
   });
   var keys = function (dict) {
      return A3(foldr,
      F3(function (key,
      value,
      keyList) {
         return A2($List._op["::"],
         key,
         keyList);
      }),
      _L.fromArray([]),
      dict);
   };
   var values = function (dict) {
      return A3(foldr,
      F3(function (key,
      value,
      valueList) {
         return A2($List._op["::"],
         value,
         valueList);
      }),
      _L.fromArray([]),
      dict);
   };
   var toList = function (dict) {
      return A3(foldr,
      F3(function (key,value,list) {
         return A2($List._op["::"],
         {ctor: "_Tuple2"
         ,_0: key
         ,_1: value},
         list);
      }),
      _L.fromArray([]),
      dict);
   };
   var foldl = F3(function (f,
   acc,
   dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack": return acc;}
              break;
            case "RBNode": return A3(foldl,
              f,
              A3(f,
              dict._1,
              dict._2,
              A3(foldl,f,acc,dict._3)),
              dict._4);}
         _U.badCase($moduleName,
         "between lines 406 and 410");
      }();
   });
   var isBBlack = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBBlack": return true;}
              break;
            case "RBNode":
            switch (dict._0.ctor)
              {case "BBlack": return true;}
              break;}
         return false;
      }();
   };
   var showFlag = function (f) {
      return function () {
         switch (f.ctor)
         {case "Insert": return "Insert";
            case "Remove": return "Remove";
            case "Same": return "Same";}
         _U.badCase($moduleName,
         "between lines 182 and 185");
      }();
   };
   var Same = {ctor: "Same"};
   var Remove = {ctor: "Remove"};
   var Insert = {ctor: "Insert"};
   var get = F2(function (targetKey,
   dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack":
                 return $Maybe.Nothing;}
              break;
            case "RBNode":
            return function () {
                 var _v29 = A2($Basics.compare,
                 targetKey,
                 dict._1);
                 switch (_v29.ctor)
                 {case "EQ":
                    return $Maybe.Just(dict._2);
                    case "GT": return A2(get,
                      targetKey,
                      dict._4);
                    case "LT": return A2(get,
                      targetKey,
                      dict._3);}
                 _U.badCase($moduleName,
                 "between lines 129 and 132");
              }();}
         _U.badCase($moduleName,
         "between lines 124 and 132");
      }();
   });
   var member = F2(function (key,
   dict) {
      return function () {
         var _v30 = A2(get,key,dict);
         switch (_v30.ctor)
         {case "Just": return true;
            case "Nothing": return false;}
         _U.badCase($moduleName,
         "between lines 138 and 140");
      }();
   });
   var max = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            return $Native$Debug.crash("(max Empty) is not defined");
            case "RBNode":
            switch (dict._4.ctor)
              {case "RBEmpty":
                 return {ctor: "_Tuple2"
                        ,_0: dict._1
                        ,_1: dict._2};}
              return max(dict._4);}
         _U.badCase($moduleName,
         "between lines 100 and 108");
      }();
   };
   var min = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack":
                 return $Native$Debug.crash("(min Empty) is not defined");}
              break;
            case "RBNode":
            switch (dict._3.ctor)
              {case "RBEmpty":
                 switch (dict._3._0.ctor)
                   {case "LBlack":
                      return {ctor: "_Tuple2"
                             ,_0: dict._1
                             ,_1: dict._2};}
                   break;}
              return min(dict._3);}
         _U.badCase($moduleName,
         "between lines 87 and 95");
      }();
   };
   var RBEmpty = function (a) {
      return {ctor: "RBEmpty"
             ,_0: a};
   };
   var RBNode = F5(function (a,
   b,
   c,
   d,
   e) {
      return {ctor: "RBNode"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d
             ,_4: e};
   });
   var showLColor = function (color) {
      return function () {
         switch (color.ctor)
         {case "LBBlack":
            return "LBBlack";
            case "LBlack": return "LBlack";}
         _U.badCase($moduleName,
         "between lines 70 and 72");
      }();
   };
   var LBBlack = {ctor: "LBBlack"};
   var LBlack = {ctor: "LBlack"};
   var empty = RBEmpty(LBlack);
   var isEmpty = function (dict) {
      return _U.eq(dict,empty);
   };
   var map = F2(function (f,dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack":
                 return RBEmpty(LBlack);}
              break;
            case "RBNode": return A5(RBNode,
              dict._0,
              dict._1,
              A2(f,dict._1,dict._2),
              A2(map,f,dict._3),
              A2(map,f,dict._4));}
         _U.badCase($moduleName,
         "between lines 394 and 399");
      }();
   });
   var showNColor = function (c) {
      return function () {
         switch (c.ctor)
         {case "BBlack": return "BBlack";
            case "Black": return "Black";
            case "NBlack": return "NBlack";
            case "Red": return "Red";}
         _U.badCase($moduleName,
         "between lines 56 and 60");
      }();
   };
   var reportRemBug = F4(function (msg,
   c,
   lgot,
   rgot) {
      return $Native$Debug.crash($String.concat(_L.fromArray(["Internal red-black tree invariant violated, expected "
                                                             ,msg
                                                             ," and got "
                                                             ,showNColor(c)
                                                             ,"/"
                                                             ,lgot
                                                             ,"/"
                                                             ,rgot
                                                             ,"\nPlease report this bug to <https://github.com/elm-lang/Elm/issues>"])));
   });
   var NBlack = {ctor: "NBlack"};
   var BBlack = {ctor: "BBlack"};
   var Black = {ctor: "Black"};
   var ensureBlackRoot = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack": return dict;}
              break;
            case "RBNode":
            switch (dict._0.ctor)
              {case "Black": return dict;
                 case "Red": return A5(RBNode,
                   Black,
                   dict._1,
                   dict._2,
                   dict._3,
                   dict._4);}
              break;}
         _U.badCase($moduleName,
         "between lines 154 and 162");
      }();
   };
   var blackish = function (t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty": return true;
            case "RBNode":
            return _U.eq(t._0,
              Black) || _U.eq(t._0,BBlack);}
         _U.badCase($moduleName,
         "between lines 339 and 341");
      }();
   };
   var blacken = function (t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty":
            return RBEmpty(LBlack);
            case "RBNode": return A5(RBNode,
              Black,
              t._1,
              t._2,
              t._3,
              t._4);}
         _U.badCase($moduleName,
         "between lines 378 and 380");
      }();
   };
   var Red = {ctor: "Red"};
   var moreBlack = function (color) {
      return function () {
         switch (color.ctor)
         {case "BBlack":
            return $Native$Debug.crash("Can\'t make a double black node more black!");
            case "Black": return BBlack;
            case "NBlack": return Red;
            case "Red": return Black;}
         _U.badCase($moduleName,
         "between lines 244 and 248");
      }();
   };
   var lessBlack = function (color) {
      return function () {
         switch (color.ctor)
         {case "BBlack": return Black;
            case "Black": return Red;
            case "NBlack":
            return $Native$Debug.crash("Can\'t make a negative black node less black!");
            case "Red": return NBlack;}
         _U.badCase($moduleName,
         "between lines 253 and 257");
      }();
   };
   var lessBlackTree = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBBlack":
                 return RBEmpty(LBlack);}
              break;
            case "RBNode": return A5(RBNode,
              lessBlack(dict._0),
              dict._1,
              dict._2,
              dict._3,
              dict._4);}
         _U.badCase($moduleName,
         "between lines 262 and 264");
      }();
   };
   var redden = function (t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty":
            return $Native$Debug.crash("can\'t make a Leaf red");
            case "RBNode": return A5(RBNode,
              Red,
              t._1,
              t._2,
              t._3,
              t._4);}
         _U.badCase($moduleName,
         "between lines 386 and 388");
      }();
   };
   var balance_node = function (t) {
      return function () {
         var assemble = function (col) {
            return function (xk) {
               return function (xv) {
                  return function (yk) {
                     return function (yv) {
                        return function (zk) {
                           return function (zv) {
                              return function (a) {
                                 return function (b) {
                                    return function (c) {
                                       return function (d) {
                                          return A5(RBNode,
                                          lessBlack(col),
                                          yk,
                                          yv,
                                          A5(RBNode,Black,xk,xv,a,b),
                                          A5(RBNode,Black,zk,zv,c,d));
                                       };
                                    };
                                 };
                              };
                           };
                        };
                     };
                  };
               };
            };
         };
         return blackish(t) ? function () {
            switch (t.ctor)
            {case "RBNode":
               switch (t._3.ctor)
                 {case "RBNode":
                    switch (t._3._0.ctor)
                      {case "Red":
                         switch (t._3._3.ctor)
                           {case "RBNode":
                              switch (t._3._3._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._3._3._1)(t._3._3._2)(t._3._1)(t._3._2)(t._1)(t._2)(t._3._3._3)(t._3._3._4)(t._3._4)(t._4);}
                                break;}
                           switch (t._3._4.ctor)
                           {case "RBNode":
                              switch (t._3._4._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._3._1)(t._3._2)(t._3._4._1)(t._3._4._2)(t._1)(t._2)(t._3._3)(t._3._4._3)(t._3._4._4)(t._4);}
                                break;}
                           break;}
                      break;}
                 switch (t._4.ctor)
                 {case "RBNode":
                    switch (t._4._0.ctor)
                      {case "Red":
                         switch (t._4._3.ctor)
                           {case "RBNode":
                              switch (t._4._3._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._1)(t._2)(t._4._3._1)(t._4._3._2)(t._4._1)(t._4._2)(t._3)(t._4._3._3)(t._4._3._4)(t._4._4);}
                                break;}
                           switch (t._4._4.ctor)
                           {case "RBNode":
                              switch (t._4._4._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._1)(t._2)(t._4._1)(t._4._2)(t._4._4._1)(t._4._4._2)(t._3)(t._4._3)(t._4._4._3)(t._4._4._4);}
                                break;}
                           break;}
                      break;}
                 switch (t._0.ctor)
                 {case "BBlack":
                    switch (t._4.ctor)
                      {case "RBNode":
                         switch (t._4._0.ctor)
                           {case "NBlack":
                              switch (t._4._3.ctor)
                                {case "RBNode":
                                   switch (t._4._3._0.ctor)
                                     {case "Black":
                                        return function () {
                                             switch (t._4._4.ctor)
                                             {case "RBNode":
                                                switch (t._4._4._0.ctor)
                                                  {case "Black":
                                                     return A5(RBNode,
                                                       Black,
                                                       t._4._3._1,
                                                       t._4._3._2,
                                                       A5(RBNode,
                                                       Black,
                                                       t._1,
                                                       t._2,
                                                       t._3,
                                                       t._4._3._3),
                                                       A5(balance,
                                                       Black,
                                                       t._4._1,
                                                       t._4._2,
                                                       t._4._3._4,
                                                       redden(t._4._4)));}
                                                  break;}
                                             return t;
                                          }();}
                                     break;}
                                break;}
                           break;}
                      switch (t._3.ctor)
                      {case "RBNode":
                         switch (t._3._0.ctor)
                           {case "NBlack":
                              switch (t._3._4.ctor)
                                {case "RBNode":
                                   switch (t._3._4._0.ctor)
                                     {case "Black":
                                        return function () {
                                             switch (t._3._3.ctor)
                                             {case "RBNode":
                                                switch (t._3._3._0.ctor)
                                                  {case "Black":
                                                     return A5(RBNode,
                                                       Black,
                                                       t._3._4._1,
                                                       t._3._4._2,
                                                       A5(balance,
                                                       Black,
                                                       t._3._1,
                                                       t._3._2,
                                                       redden(t._3._3),
                                                       t._3._4._3),
                                                       A5(RBNode,
                                                       Black,
                                                       t._1,
                                                       t._2,
                                                       t._3._4._4,
                                                       t._4));}
                                                  break;}
                                             return t;
                                          }();}
                                     break;}
                                break;}
                           break;}
                      break;}
                 break;}
            return t;
         }() : t;
      }();
   };
   var balance = F5(function (c,
   k,
   v,
   l,
   r) {
      return balance_node(A5(RBNode,
      c,
      k,
      v,
      l,
      r));
   });
   var bubble = F5(function (c,
   k,
   v,
   l,
   r) {
      return isBBlack(l) || isBBlack(r) ? A5(balance,
      moreBlack(c),
      k,
      v,
      lessBlackTree(l),
      lessBlackTree(r)) : A5(RBNode,
      c,
      k,
      v,
      l,
      r);
   });
   var remove_max = F5(function (c,
   k,
   v,
   l,
   r) {
      return function () {
         switch (r.ctor)
         {case "RBEmpty": return A3(rem,
              c,
              l,
              r);
            case "RBNode": return A5(bubble,
              c,
              k,
              v,
              l,
              A5(remove_max,
              r._0,
              r._1,
              r._2,
              r._3,
              r._4));}
         _U.badCase($moduleName,
         "between lines 323 and 328");
      }();
   });
   var rem = F3(function (c,l,r) {
      return function () {
         var _v169 = {ctor: "_Tuple2"
                     ,_0: l
                     ,_1: r};
         switch (_v169.ctor)
         {case "_Tuple2":
            switch (_v169._0.ctor)
              {case "RBEmpty":
                 switch (_v169._1.ctor)
                   {case "RBEmpty":
                      return function () {
                           switch (c.ctor)
                           {case "Black":
                              return RBEmpty(LBBlack);
                              case "Red":
                              return RBEmpty(LBlack);}
                           _U.badCase($moduleName,
                           "between lines 282 and 286");
                        }();
                      case "RBNode":
                      return function () {
                           var _v191 = {ctor: "_Tuple3"
                                       ,_0: c
                                       ,_1: _v169._0._0
                                       ,_2: _v169._1._0};
                           switch (_v191.ctor)
                           {case "_Tuple3":
                              switch (_v191._0.ctor)
                                {case "Black":
                                   switch (_v191._1.ctor)
                                     {case "LBlack":
                                        switch (_v191._2.ctor)
                                          {case "Red": return A5(RBNode,
                                               Black,
                                               _v169._1._1,
                                               _v169._1._2,
                                               _v169._1._3,
                                               _v169._1._4);}
                                          break;}
                                     break;}
                                break;}
                           return A4(reportRemBug,
                           "Black/LBlack/Red",
                           c,
                           showLColor(_v169._0._0),
                           showNColor(_v169._1._0));
                        }();}
                   break;
                 case "RBNode":
                 switch (_v169._1.ctor)
                   {case "RBEmpty":
                      return function () {
                           var _v195 = {ctor: "_Tuple3"
                                       ,_0: c
                                       ,_1: _v169._0._0
                                       ,_2: _v169._1._0};
                           switch (_v195.ctor)
                           {case "_Tuple3":
                              switch (_v195._0.ctor)
                                {case "Black":
                                   switch (_v195._1.ctor)
                                     {case "Red":
                                        switch (_v195._2.ctor)
                                          {case "LBlack":
                                             return A5(RBNode,
                                               Black,
                                               _v169._0._1,
                                               _v169._0._2,
                                               _v169._0._3,
                                               _v169._0._4);}
                                          break;}
                                     break;}
                                break;}
                           return A4(reportRemBug,
                           "Black/Red/LBlack",
                           c,
                           showNColor(_v169._0._0),
                           showLColor(_v169._1._0));
                        }();
                      case "RBNode":
                      return function () {
                           var l$ = A5(remove_max,
                           _v169._0._0,
                           _v169._0._1,
                           _v169._0._2,
                           _v169._0._3,
                           _v169._0._4);
                           var r = A5(RBNode,
                           _v169._1._0,
                           _v169._1._1,
                           _v169._1._2,
                           _v169._1._3,
                           _v169._1._4);
                           var l = A5(RBNode,
                           _v169._0._0,
                           _v169._0._1,
                           _v169._0._2,
                           _v169._0._3,
                           _v169._0._4);
                           var $ = max(l),
                           k = $._0,
                           v = $._1;
                           return A5(bubble,c,k,v,l$,r);
                        }();}
                   break;}
              break;}
         _U.badCase($moduleName,
         "between lines 280 and 309");
      }();
   });
   var update = F3(function (k,
   alter,
   dict) {
      return function () {
         var up = function (dict) {
            return function () {
               switch (dict.ctor)
               {case "RBEmpty":
                  switch (dict._0.ctor)
                    {case "LBlack":
                       return function () {
                            var _v206 = alter($Maybe.Nothing);
                            switch (_v206.ctor)
                            {case "Just":
                               return {ctor: "_Tuple2"
                                      ,_0: Insert
                                      ,_1: A5(RBNode,
                                      Red,
                                      k,
                                      _v206._0,
                                      empty,
                                      empty)};
                               case "Nothing":
                               return {ctor: "_Tuple2"
                                      ,_0: Same
                                      ,_1: empty};}
                            _U.badCase($moduleName,
                            "between lines 194 and 198");
                         }();}
                    break;
                  case "RBNode":
                  return function () {
                       var _v208 = A2($Basics.compare,
                       k,
                       dict._1);
                       switch (_v208.ctor)
                       {case "EQ": return function () {
                               var _v209 = alter($Maybe.Just(dict._2));
                               switch (_v209.ctor)
                               {case "Just":
                                  return {ctor: "_Tuple2"
                                         ,_0: Same
                                         ,_1: A5(RBNode,
                                         dict._0,
                                         dict._1,
                                         _v209._0,
                                         dict._3,
                                         dict._4)};
                                  case "Nothing":
                                  return {ctor: "_Tuple2"
                                         ,_0: Remove
                                         ,_1: A3(rem,
                                         dict._0,
                                         dict._3,
                                         dict._4)};}
                               _U.badCase($moduleName,
                               "between lines 201 and 206");
                            }();
                          case "GT": return function () {
                               var $ = up(dict._4),
                               flag = $._0,
                               newRight = $._1;
                               return function () {
                                  switch (flag.ctor)
                                  {case "Insert":
                                     return {ctor: "_Tuple2"
                                            ,_0: Insert
                                            ,_1: A5(balance,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            dict._3,
                                            newRight)};
                                     case "Remove":
                                     return {ctor: "_Tuple2"
                                            ,_0: Remove
                                            ,_1: A5(bubble,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            dict._3,
                                            newRight)};
                                     case "Same":
                                     return {ctor: "_Tuple2"
                                            ,_0: Same
                                            ,_1: A5(RBNode,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            dict._3,
                                            newRight)};}
                                  _U.badCase($moduleName,
                                  "between lines 215 and 220");
                               }();
                            }();
                          case "LT": return function () {
                               var $ = up(dict._3),
                               flag = $._0,
                               newLeft = $._1;
                               return function () {
                                  switch (flag.ctor)
                                  {case "Insert":
                                     return {ctor: "_Tuple2"
                                            ,_0: Insert
                                            ,_1: A5(balance,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            newLeft,
                                            dict._4)};
                                     case "Remove":
                                     return {ctor: "_Tuple2"
                                            ,_0: Remove
                                            ,_1: A5(bubble,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            newLeft,
                                            dict._4)};
                                     case "Same":
                                     return {ctor: "_Tuple2"
                                            ,_0: Same
                                            ,_1: A5(RBNode,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            newLeft,
                                            dict._4)};}
                                  _U.badCase($moduleName,
                                  "between lines 208 and 213");
                               }();
                            }();}
                       _U.badCase($moduleName,
                       "between lines 199 and 220");
                    }();}
               _U.badCase($moduleName,
               "between lines 192 and 220");
            }();
         };
         var $ = up(dict),
         flag = $._0,
         updatedDict = $._1;
         return function () {
            switch (flag.ctor)
            {case "Insert":
               return ensureBlackRoot(updatedDict);
               case "Remove":
               return blacken(updatedDict);
               case "Same":
               return updatedDict;}
            _U.badCase($moduleName,
            "between lines 222 and 225");
         }();
      }();
   });
   var insert = F3(function (key,
   value,
   dict) {
      return A3(update,
      key,
      $Basics.always($Maybe.Just(value)),
      dict);
   });
   var singleton = F2(function (key,
   value) {
      return A3(insert,
      key,
      value,
      empty);
   });
   var union = F2(function (t1,
   t2) {
      return A3(foldl,
      insert,
      t2,
      t1);
   });
   var fromList = function (assocs) {
      return A3($List.foldl,
      F2(function (_v214,dict) {
         return function () {
            switch (_v214.ctor)
            {case "_Tuple2":
               return A3(insert,
                 _v214._0,
                 _v214._1,
                 dict);}
            _U.badCase($moduleName,
            "on line 466, column 38 to 59");
         }();
      }),
      empty,
      assocs);
   };
   var filter = F2(function (predicate,
   dictionary) {
      return function () {
         var add = F3(function (key,
         value,
         dict) {
            return A2(predicate,
            key,
            value) ? A3(insert,
            key,
            value,
            dict) : dict;
         });
         return A3(foldl,
         add,
         empty,
         dictionary);
      }();
   });
   var intersect = F2(function (t1,
   t2) {
      return A2(filter,
      F2(function (k,_v218) {
         return function () {
            return A2(member,k,t2);
         }();
      }),
      t1);
   });
   var partition = F2(function (predicate,
   dict) {
      return function () {
         var add = F3(function (key,
         value,
         _v220) {
            return function () {
               switch (_v220.ctor)
               {case "_Tuple2":
                  return A2(predicate,
                    key,
                    value) ? {ctor: "_Tuple2"
                             ,_0: A3(insert,
                             key,
                             value,
                             _v220._0)
                             ,_1: _v220._1} : {ctor: "_Tuple2"
                                              ,_0: _v220._0
                                              ,_1: A3(insert,
                                              key,
                                              value,
                                              _v220._1)};}
               _U.badCase($moduleName,
               "between lines 487 and 489");
            }();
         });
         return A3(foldl,
         add,
         {ctor: "_Tuple2"
         ,_0: empty
         ,_1: empty},
         dict);
      }();
   });
   var remove = F2(function (key,
   dict) {
      return A3(update,
      key,
      $Basics.always($Maybe.Nothing),
      dict);
   });
   var diff = F2(function (t1,t2) {
      return A3(foldl,
      F3(function (k,v,t) {
         return A2(remove,k,t);
      }),
      t1,
      t2);
   });
   _elm.Dict.values = {_op: _op
                      ,empty: empty
                      ,singleton: singleton
                      ,insert: insert
                      ,update: update
                      ,isEmpty: isEmpty
                      ,get: get
                      ,remove: remove
                      ,member: member
                      ,filter: filter
                      ,partition: partition
                      ,foldl: foldl
                      ,foldr: foldr
                      ,map: map
                      ,union: union
                      ,intersect: intersect
                      ,diff: diff
                      ,keys: keys
                      ,values: values
                      ,toList: toList
                      ,fromList: fromList};
   return _elm.Dict.values;
};
Elm.Effects = Elm.Effects || {};
Elm.Effects.make = function (_elm) {
   "use strict";
   _elm.Effects = _elm.Effects || {};
   if (_elm.Effects.values)
   return _elm.Effects.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Effects",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Effects = Elm.Native.Effects.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Task = Elm.Task.make(_elm),
   $Time = Elm.Time.make(_elm);
   var ignore = function (task) {
      return A2($Task.map,
      $Basics.always({ctor: "_Tuple0"}),
      task);
   };
   var requestTickSending = $Native$Effects.requestTickSending;
   var toTaskHelp = F3(function (address,
   effect,
   _v0) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2":
            return function () {
                 switch (effect.ctor)
                 {case "Batch":
                    return A3($List.foldl,
                      toTaskHelp(address),
                      _v0,
                      effect._0);
                    case "None": return _v0;
                    case "Task":
                    return function () {
                         var reporter = A2($Task.andThen,
                         effect._0,
                         function (answer) {
                            return A2($Signal.send,
                            address,
                            _L.fromArray([answer]));
                         });
                         return {ctor: "_Tuple2"
                                ,_0: A2($Task.andThen,
                                _v0._0,
                                $Basics.always(ignore($Task.spawn(reporter))))
                                ,_1: _v0._1};
                      }();
                    case "Tick":
                    return {ctor: "_Tuple2"
                           ,_0: _v0._0
                           ,_1: A2($List._op["::"],
                           effect._0,
                           _v0._1)};}
                 _U.badCase($moduleName,
                 "between lines 181 and 200");
              }();}
         _U.badCase($moduleName,
         "between lines 181 and 200");
      }();
   });
   var toTask = F2(function (address,
   effect) {
      return function () {
         var $ = A3(toTaskHelp,
         address,
         effect,
         {ctor: "_Tuple2"
         ,_0: $Task.succeed({ctor: "_Tuple0"})
         ,_1: _L.fromArray([])}),
         combinedTask = $._0,
         tickMessages = $._1;
         return $List.isEmpty(tickMessages) ? combinedTask : A2($Task.andThen,
         combinedTask,
         $Basics.always(A2(requestTickSending,
         address,
         tickMessages)));
      }();
   });
   var Never = function (a) {
      return {ctor: "Never",_0: a};
   };
   var Batch = function (a) {
      return {ctor: "Batch",_0: a};
   };
   var batch = Batch;
   var None = {ctor: "None"};
   var none = None;
   var Tick = function (a) {
      return {ctor: "Tick",_0: a};
   };
   var tick = Tick;
   var Task = function (a) {
      return {ctor: "Task",_0: a};
   };
   var task = Task;
   var map = F2(function (func,
   effect) {
      return function () {
         switch (effect.ctor)
         {case "Batch":
            return Batch(A2($List.map,
              map(func),
              effect._0));
            case "None": return None;
            case "Task":
            return Task(A2($Task.map,
              func,
              effect._0));
            case "Tick":
            return Tick(function ($) {
                 return func(effect._0($));
              });}
         _U.badCase($moduleName,
         "between lines 136 and 147");
      }();
   });
   _elm.Effects.values = {_op: _op
                         ,none: none
                         ,task: task
                         ,tick: tick
                         ,map: map
                         ,batch: batch
                         ,toTask: toTask};
   return _elm.Effects.values;
};
Elm.ElmFire = Elm.ElmFire || {};
Elm.ElmFire.make = function (_elm) {
   "use strict";
   _elm.ElmFire = _elm.ElmFire || {};
   if (_elm.ElmFire.values)
   return _elm.ElmFire.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "ElmFire",
   $Basics = Elm.Basics.make(_elm),
   $Json$Decode = Elm.Json.Decode.make(_elm),
   $Json$Encode = Elm.Json.Encode.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$ElmFire = Elm.Native.ElmFire.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Task = Elm.Task.make(_elm),
   $Time = Elm.Time.make(_elm);
   var serverTimeStamp = $Native$ElmFire.serverTimeStamp;
   var goOnline = $Native$ElmFire.setOffline(false);
   var goOffline = $Native$ElmFire.setOffline(true);
   var exportValue = $Native$ElmFire.exportValue;
   var toPairList = $Native$ElmFire.toPairList;
   var toKeyList = $Native$ElmFire.toKeyList;
   var toValueList = $Native$ElmFire.toValueList;
   var toSnapshotList = $Native$ElmFire.toSnapshotList;
   var LimitToLast = function (a) {
      return {ctor: "LimitToLast"
             ,_0: a};
   };
   var limitToLast = LimitToLast;
   var LimitToFirst = function (a) {
      return {ctor: "LimitToFirst"
             ,_0: a};
   };
   var limitToFirst = LimitToFirst;
   var NoLimit = {ctor: "NoLimit"};
   var noLimit = NoLimit;
   var EqualTo = function (a) {
      return {ctor: "EqualTo"
             ,_0: a};
   };
   var equalTo = EqualTo;
   var Range = F2(function (a,b) {
      return {ctor: "Range"
             ,_0: a
             ,_1: b};
   });
   var range = Range;
   var EndAt = function (a) {
      return {ctor: "EndAt",_0: a};
   };
   var endAt = EndAt;
   var StartAt = function (a) {
      return {ctor: "StartAt"
             ,_0: a};
   };
   var startAt = StartAt;
   var NoRange = {ctor: "NoRange"};
   var noRange = NoRange;
   var OrderByPriority = F2(function (a,
   b) {
      return {ctor: "OrderByPriority"
             ,_0: a
             ,_1: b};
   });
   var orderByPriority = OrderByPriority;
   var OrderByKey = F2(function (a,
   b) {
      return {ctor: "OrderByKey"
             ,_0: a
             ,_1: b};
   });
   var orderByKey = OrderByKey;
   var OrderByValue = F2(function (a,
   b) {
      return {ctor: "OrderByValue"
             ,_0: a
             ,_1: b};
   });
   var orderByValue = OrderByValue;
   var OrderByChild = F3(function (a,
   b,
   c) {
      return {ctor: "OrderByChild"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var orderByChild = OrderByChild;
   var NoOrder = {ctor: "NoOrder"};
   var noOrder = NoOrder;
   var ChildMoved = function (a) {
      return {ctor: "ChildMoved"
             ,_0: a};
   };
   var childMoved = ChildMoved;
   var ChildRemoved = function (a) {
      return {ctor: "ChildRemoved"
             ,_0: a};
   };
   var childRemoved = ChildRemoved;
   var ChildChanged = function (a) {
      return {ctor: "ChildChanged"
             ,_0: a};
   };
   var childChanged = ChildChanged;
   var ChildAdded = function (a) {
      return {ctor: "ChildAdded"
             ,_0: a};
   };
   var childAdded = ChildAdded;
   var ValueChanged = function (a) {
      return {ctor: "ValueChanged"
             ,_0: a};
   };
   var valueChanged = ValueChanged;
   var once = $Native$ElmFire.once;
   var unsubscribe = $Native$ElmFire.unsubscribe;
   var subscribeConditional = $Native$ElmFire.subscribeConditional;
   var subscribe = function (createResponseTask) {
      return subscribeConditional(function ($) {
         return $Maybe.Just(createResponseTask($));
      });
   };
   var onDisconnectCancel = $Native$ElmFire.onDisconnectCancel;
   var onDisconnectRemove = $Native$ElmFire.remove(true);
   var onDisconnectUpdate = $Native$ElmFire.update(true);
   var onDisconnectSetWithPriority = $Native$ElmFire.setWithPriority(true);
   var onDisconnectSet = $Native$ElmFire.set(true);
   var transaction = $Native$ElmFire.transaction;
   var remove = $Native$ElmFire.remove(false);
   var update = $Native$ElmFire.update(false);
   var setPriority = $Native$ElmFire.setPriority;
   var setWithPriority = $Native$ElmFire.setWithPriority(false);
   var set = $Native$ElmFire.set(false);
   var open = $Native$ElmFire.open;
   var key = $Native$ElmFire.key;
   var toUrl = $Native$ElmFire.toUrl;
   var Set = function (a) {
      return {ctor: "Set",_0: a};
   };
   var Remove = {ctor: "Remove"};
   var Abort = {ctor: "Abort"};
   var SnapshotFB = {ctor: "SnapshotFB"};
   var Snapshot = F8(function (a,
   b,
   c,
   d,
   e,
   f,
   g,
   h) {
      return {_: {}
             ,existing: d
             ,intern_: h
             ,key: b
             ,prevKey: f
             ,priority: g
             ,reference: c
             ,subscription: a
             ,value: e};
   });
   var QueryError = F2(function (a,
   b) {
      return {ctor: "QueryError"
             ,_0: a
             ,_1: b};
   });
   var Unsubscribed = function (a) {
      return {ctor: "Unsubscribed"
             ,_0: a};
   };
   var Subscription = {ctor: "Subscription"};
   var StringPriority = function (a) {
      return {ctor: "StringPriority"
             ,_0: a};
   };
   var NumberPriority = function (a) {
      return {ctor: "NumberPriority"
             ,_0: a};
   };
   var NoPriority = {ctor: "NoPriority"};
   var Reference = {ctor: "Reference"};
   var RefLocation = function (a) {
      return {ctor: "RefLocation"
             ,_0: a};
   };
   var location = RefLocation;
   var PushLocation = function (a) {
      return {ctor: "PushLocation"
             ,_0: a};
   };
   var push = PushLocation;
   var RootLocation = function (a) {
      return {ctor: "RootLocation"
             ,_0: a};
   };
   var root = RootLocation;
   var ParentLocation = function (a) {
      return {ctor: "ParentLocation"
             ,_0: a};
   };
   var parent = ParentLocation;
   var SubLocation = F2(function (a,
   b) {
      return {ctor: "SubLocation"
             ,_0: a
             ,_1: b};
   });
   var sub = SubLocation;
   var subscribeConnected = F2(function (createResponseTask,
   location) {
      return A4(subscribeConditional,
      function (snapshot) {
         return function () {
            var _v0 = A2($Json$Decode.decodeValue,
            $Json$Decode.bool,
            snapshot.value);
            switch (_v0.ctor)
            {case "Err":
               return $Maybe.Nothing;
               case "Ok":
               return $Maybe.Just(createResponseTask(_v0._0));}
            _U.badCase($moduleName,
            "between lines 579 and 582");
         }();
      },
      $Basics.always($Task.succeed({ctor: "_Tuple0"})),
      valueChanged(noOrder),
      sub(".info/connected")(root(location)));
   });
   var subscribeServerTimeOffset = F2(function (createResponseTask,
   location) {
      return A4(subscribeConditional,
      function (snapshot) {
         return function () {
            var _v3 = A2($Json$Decode.decodeValue,
            $Json$Decode.$float,
            snapshot.value);
            switch (_v3.ctor)
            {case "Err":
               return $Maybe.Nothing;
               case "Ok":
               return $Maybe.Just(createResponseTask(_v3._0 * $Time.millisecond));}
            _U.badCase($moduleName,
            "between lines 593 and 596");
         }();
      },
      $Basics.always($Task.succeed({ctor: "_Tuple0"})),
      valueChanged(noOrder),
      sub(".info/serverTimeOffset")(root(location)));
   });
   var UrlLocation = function (a) {
      return {ctor: "UrlLocation"
             ,_0: a};
   };
   var fromUrl = UrlLocation;
   var OtherAuthenticationError = {ctor: "OtherAuthenticationError"};
   var UserDenied = {ctor: "UserDenied"};
   var UserCancelled = {ctor: "UserCancelled"};
   var UnknownError = {ctor: "UnknownError"};
   var TransportUnavailable = {ctor: "TransportUnavailable"};
   var ProviderError = {ctor: "ProviderError"};
   var NetworkError = {ctor: "NetworkError"};
   var InvalidUser = {ctor: "InvalidUser"};
   var InvalidToken = {ctor: "InvalidToken"};
   var InvalidProvider = {ctor: "InvalidProvider"};
   var InvalidPassword = {ctor: "InvalidPassword"};
   var InvalidOrigin = {ctor: "InvalidOrigin"};
   var InvalidEmail = {ctor: "InvalidEmail"};
   var InvalidCredentials = {ctor: "InvalidCredentials"};
   var InvalidConfiguration = {ctor: "InvalidConfiguration"};
   var InvalidArguments = {ctor: "InvalidArguments"};
   var EmailTaken = {ctor: "EmailTaken"};
   var AuthenticationDisabled = {ctor: "AuthenticationDisabled"};
   var UnknownSubscription = {ctor: "UnknownSubscription"};
   var AuthError = function (a) {
      return {ctor: "AuthError"
             ,_0: a};
   };
   var OtherFirebaseError = {ctor: "OtherFirebaseError"};
   var TooBigError = {ctor: "TooBigError"};
   var UnavailableError = {ctor: "UnavailableError"};
   var PermissionError = {ctor: "PermissionError"};
   var LocationError = {ctor: "LocationError"};
   var Error = F2(function (a,b) {
      return {_: {}
             ,description: b
             ,tag: a};
   });
   _elm.ElmFire.values = {_op: _op
                         ,fromUrl: fromUrl
                         ,sub: sub
                         ,parent: parent
                         ,root: root
                         ,push: push
                         ,open: open
                         ,key: key
                         ,toUrl: toUrl
                         ,location: location
                         ,set: set
                         ,setWithPriority: setWithPriority
                         ,setPriority: setPriority
                         ,update: update
                         ,remove: remove
                         ,transaction: transaction
                         ,subscribe: subscribe
                         ,unsubscribe: unsubscribe
                         ,once: once
                         ,valueChanged: valueChanged
                         ,childAdded: childAdded
                         ,childChanged: childChanged
                         ,childRemoved: childRemoved
                         ,childMoved: childMoved
                         ,noOrder: noOrder
                         ,orderByChild: orderByChild
                         ,orderByValue: orderByValue
                         ,orderByKey: orderByKey
                         ,orderByPriority: orderByPriority
                         ,noRange: noRange
                         ,startAt: startAt
                         ,endAt: endAt
                         ,range: range
                         ,equalTo: equalTo
                         ,noLimit: noLimit
                         ,limitToFirst: limitToFirst
                         ,limitToLast: limitToLast
                         ,toSnapshotList: toSnapshotList
                         ,toValueList: toValueList
                         ,toKeyList: toKeyList
                         ,toPairList: toPairList
                         ,exportValue: exportValue
                         ,goOffline: goOffline
                         ,goOnline: goOnline
                         ,subscribeConnected: subscribeConnected
                         ,onDisconnectSet: onDisconnectSet
                         ,onDisconnectSetWithPriority: onDisconnectSetWithPriority
                         ,onDisconnectUpdate: onDisconnectUpdate
                         ,onDisconnectRemove: onDisconnectRemove
                         ,onDisconnectCancel: onDisconnectCancel
                         ,serverTimeStamp: serverTimeStamp
                         ,subscribeServerTimeOffset: subscribeServerTimeOffset
                         ,Snapshot: Snapshot
                         ,Error: Error
                         ,NoPriority: NoPriority
                         ,NumberPriority: NumberPriority
                         ,StringPriority: StringPriority
                         ,Abort: Abort
                         ,Remove: Remove
                         ,Set: Set
                         ,Unsubscribed: Unsubscribed
                         ,QueryError: QueryError
                         ,LocationError: LocationError
                         ,PermissionError: PermissionError
                         ,UnavailableError: UnavailableError
                         ,TooBigError: TooBigError
                         ,OtherFirebaseError: OtherFirebaseError
                         ,AuthError: AuthError
                         ,UnknownSubscription: UnknownSubscription
                         ,AuthenticationDisabled: AuthenticationDisabled
                         ,EmailTaken: EmailTaken
                         ,InvalidArguments: InvalidArguments
                         ,InvalidConfiguration: InvalidConfiguration
                         ,InvalidCredentials: InvalidCredentials
                         ,InvalidEmail: InvalidEmail
                         ,InvalidOrigin: InvalidOrigin
                         ,InvalidPassword: InvalidPassword
                         ,InvalidProvider: InvalidProvider
                         ,InvalidToken: InvalidToken
                         ,InvalidUser: InvalidUser
                         ,NetworkError: NetworkError
                         ,ProviderError: ProviderError
                         ,TransportUnavailable: TransportUnavailable
                         ,UnknownError: UnknownError
                         ,UserCancelled: UserCancelled
                         ,UserDenied: UserDenied
                         ,OtherAuthenticationError: OtherAuthenticationError};
   return _elm.ElmFire.values;
};
Elm.Graphics = Elm.Graphics || {};
Elm.Graphics.Collage = Elm.Graphics.Collage || {};
Elm.Graphics.Collage.make = function (_elm) {
   "use strict";
   _elm.Graphics = _elm.Graphics || {};
   _elm.Graphics.Collage = _elm.Graphics.Collage || {};
   if (_elm.Graphics.Collage.values)
   return _elm.Graphics.Collage.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Graphics.Collage",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $Native$Graphics$Collage = Elm.Native.Graphics.Collage.make(_elm),
   $Text = Elm.Text.make(_elm),
   $Transform2D = Elm.Transform2D.make(_elm);
   var ngon = F2(function (n,r) {
      return function () {
         var m = $Basics.toFloat(n);
         var t = 2 * $Basics.pi / m;
         var f = function (i) {
            return {ctor: "_Tuple2"
                   ,_0: r * $Basics.cos(t * i)
                   ,_1: r * $Basics.sin(t * i)};
         };
         return A2($List.map,
         f,
         _L.range(0,m - 1));
      }();
   });
   var oval = F2(function (w,h) {
      return function () {
         var hh = h / 2;
         var hw = w / 2;
         var n = 50;
         var t = 2 * $Basics.pi / n;
         var f = function (i) {
            return {ctor: "_Tuple2"
                   ,_0: hw * $Basics.cos(t * i)
                   ,_1: hh * $Basics.sin(t * i)};
         };
         return A2($List.map,
         f,
         _L.range(0,n - 1));
      }();
   });
   var circle = function (r) {
      return A2(oval,2 * r,2 * r);
   };
   var rect = F2(function (w,h) {
      return function () {
         var hh = h / 2;
         var hw = w / 2;
         return _L.fromArray([{ctor: "_Tuple2"
                              ,_0: 0 - hw
                              ,_1: 0 - hh}
                             ,{ctor: "_Tuple2"
                              ,_0: 0 - hw
                              ,_1: hh}
                             ,{ctor: "_Tuple2",_0: hw,_1: hh}
                             ,{ctor: "_Tuple2"
                              ,_0: hw
                              ,_1: 0 - hh}]);
      }();
   });
   var square = function (n) {
      return A2(rect,n,n);
   };
   var polygon = function (points) {
      return points;
   };
   var segment = F2(function (p1,
   p2) {
      return _L.fromArray([p1,p2]);
   });
   var path = function (ps) {
      return ps;
   };
   var collage = $Native$Graphics$Collage.collage;
   var alpha = F2(function (a,f) {
      return _U.replace([["alpha"
                         ,a]],
      f);
   });
   var rotate = F2(function (t,f) {
      return _U.replace([["theta"
                         ,f.theta + t]],
      f);
   });
   var scale = F2(function (s,f) {
      return _U.replace([["scale"
                         ,f.scale * s]],
      f);
   });
   var moveY = F2(function (y,f) {
      return _U.replace([["y"
                         ,f.y + y]],
      f);
   });
   var moveX = F2(function (x,f) {
      return _U.replace([["x"
                         ,f.x + x]],
      f);
   });
   var move = F2(function (_v0,f) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2":
            return _U.replace([["x"
                               ,f.x + _v0._0]
                              ,["y",f.y + _v0._1]],
              f);}
         _U.badCase($moduleName,
         "on line 226, column 3 to 37");
      }();
   });
   var form = function (f) {
      return {_: {}
             ,alpha: 1
             ,form: f
             ,scale: 1
             ,theta: 0
             ,x: 0
             ,y: 0};
   };
   var Fill = function (a) {
      return {ctor: "Fill",_0: a};
   };
   var Line = function (a) {
      return {ctor: "Line",_0: a};
   };
   var FGroup = F2(function (a,b) {
      return {ctor: "FGroup"
             ,_0: a
             ,_1: b};
   });
   var group = function (fs) {
      return form(A2(FGroup,
      $Transform2D.identity,
      fs));
   };
   var groupTransform = F2(function (matrix,
   fs) {
      return form(A2(FGroup,
      matrix,
      fs));
   });
   var FElement = function (a) {
      return {ctor: "FElement"
             ,_0: a};
   };
   var toForm = function (e) {
      return form(FElement(e));
   };
   var FImage = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "FImage"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var sprite = F4(function (w,
   h,
   pos,
   src) {
      return form(A4(FImage,
      w,
      h,
      pos,
      src));
   });
   var FText = function (a) {
      return {ctor: "FText",_0: a};
   };
   var text = function (t) {
      return form(FText(t));
   };
   var FOutlinedText = F2(function (a,
   b) {
      return {ctor: "FOutlinedText"
             ,_0: a
             ,_1: b};
   });
   var outlinedText = F2(function (ls,
   t) {
      return form(A2(FOutlinedText,
      ls,
      t));
   });
   var FShape = F2(function (a,b) {
      return {ctor: "FShape"
             ,_0: a
             ,_1: b};
   });
   var fill = F2(function (style,
   shape) {
      return form(A2(FShape,
      Fill(style),
      shape));
   });
   var outlined = F2(function (style,
   shape) {
      return form(A2(FShape,
      Line(style),
      shape));
   });
   var FPath = F2(function (a,b) {
      return {ctor: "FPath"
             ,_0: a
             ,_1: b};
   });
   var traced = F2(function (style,
   path) {
      return form(A2(FPath,
      style,
      path));
   });
   var LineStyle = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,cap: c
             ,color: a
             ,dashOffset: f
             ,dashing: e
             ,join: d
             ,width: b};
   });
   var Clipped = {ctor: "Clipped"};
   var Sharp = function (a) {
      return {ctor: "Sharp",_0: a};
   };
   var Smooth = {ctor: "Smooth"};
   var Padded = {ctor: "Padded"};
   var Round = {ctor: "Round"};
   var Flat = {ctor: "Flat"};
   var defaultLine = {_: {}
                     ,cap: Flat
                     ,color: $Color.black
                     ,dashOffset: 0
                     ,dashing: _L.fromArray([])
                     ,join: Sharp(10)
                     ,width: 1};
   var solid = function (clr) {
      return _U.replace([["color"
                         ,clr]],
      defaultLine);
   };
   var dashed = function (clr) {
      return _U.replace([["color"
                         ,clr]
                        ,["dashing"
                         ,_L.fromArray([8,4])]],
      defaultLine);
   };
   var dotted = function (clr) {
      return _U.replace([["color"
                         ,clr]
                        ,["dashing"
                         ,_L.fromArray([3,3])]],
      defaultLine);
   };
   var Grad = function (a) {
      return {ctor: "Grad",_0: a};
   };
   var gradient = F2(function (grad,
   shape) {
      return A2(fill,
      Grad(grad),
      shape);
   });
   var Texture = function (a) {
      return {ctor: "Texture"
             ,_0: a};
   };
   var textured = F2(function (src,
   shape) {
      return A2(fill,
      Texture(src),
      shape);
   });
   var Solid = function (a) {
      return {ctor: "Solid",_0: a};
   };
   var filled = F2(function (color,
   shape) {
      return A2(fill,
      Solid(color),
      shape);
   });
   var Form = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,alpha: e
             ,form: f
             ,scale: b
             ,theta: a
             ,x: c
             ,y: d};
   });
   _elm.Graphics.Collage.values = {_op: _op
                                  ,collage: collage
                                  ,toForm: toForm
                                  ,filled: filled
                                  ,textured: textured
                                  ,gradient: gradient
                                  ,outlined: outlined
                                  ,traced: traced
                                  ,text: text
                                  ,outlinedText: outlinedText
                                  ,move: move
                                  ,moveX: moveX
                                  ,moveY: moveY
                                  ,scale: scale
                                  ,rotate: rotate
                                  ,alpha: alpha
                                  ,group: group
                                  ,groupTransform: groupTransform
                                  ,rect: rect
                                  ,oval: oval
                                  ,square: square
                                  ,circle: circle
                                  ,ngon: ngon
                                  ,polygon: polygon
                                  ,segment: segment
                                  ,path: path
                                  ,solid: solid
                                  ,dashed: dashed
                                  ,dotted: dotted
                                  ,defaultLine: defaultLine
                                  ,Form: Form
                                  ,LineStyle: LineStyle
                                  ,Flat: Flat
                                  ,Round: Round
                                  ,Padded: Padded
                                  ,Smooth: Smooth
                                  ,Sharp: Sharp
                                  ,Clipped: Clipped};
   return _elm.Graphics.Collage.values;
};
Elm.Graphics = Elm.Graphics || {};
Elm.Graphics.Element = Elm.Graphics.Element || {};
Elm.Graphics.Element.make = function (_elm) {
   "use strict";
   _elm.Graphics = _elm.Graphics || {};
   _elm.Graphics.Element = _elm.Graphics.Element || {};
   if (_elm.Graphics.Element.values)
   return _elm.Graphics.Element.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Graphics.Element",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Graphics$Element = Elm.Native.Graphics.Element.make(_elm),
   $Text = Elm.Text.make(_elm);
   var DOut = {ctor: "DOut"};
   var outward = DOut;
   var DIn = {ctor: "DIn"};
   var inward = DIn;
   var DRight = {ctor: "DRight"};
   var right = DRight;
   var DLeft = {ctor: "DLeft"};
   var left = DLeft;
   var DDown = {ctor: "DDown"};
   var down = DDown;
   var DUp = {ctor: "DUp"};
   var up = DUp;
   var Position = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,horizontal: a
             ,vertical: b
             ,x: c
             ,y: d};
   });
   var Relative = function (a) {
      return {ctor: "Relative"
             ,_0: a};
   };
   var relative = Relative;
   var Absolute = function (a) {
      return {ctor: "Absolute"
             ,_0: a};
   };
   var absolute = Absolute;
   var N = {ctor: "N"};
   var bottomLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var Z = {ctor: "Z"};
   var middle = {_: {}
                ,horizontal: Z
                ,vertical: Z
                ,x: Relative(0.5)
                ,y: Relative(0.5)};
   var midLeft = _U.replace([["horizontal"
                             ,N]
                            ,["x",Absolute(0)]],
   middle);
   var middleAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midBottomAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var P = {ctor: "P"};
   var topLeft = {_: {}
                 ,horizontal: N
                 ,vertical: P
                 ,x: Absolute(0)
                 ,y: Absolute(0)};
   var bottomLeft = _U.replace([["vertical"
                                ,N]],
   topLeft);
   var topRight = _U.replace([["horizontal"
                              ,P]],
   topLeft);
   var bottomRight = _U.replace([["horizontal"
                                 ,P]],
   bottomLeft);
   var midRight = _U.replace([["horizontal"
                              ,P]],
   midLeft);
   var midTop = _U.replace([["vertical"
                            ,P]
                           ,["y",Absolute(0)]],
   middle);
   var midBottom = _U.replace([["vertical"
                               ,N]],
   midTop);
   var topLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var topRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var bottomRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var midRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midTopAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var justified = $Native$Graphics$Element.block("justify");
   var centered = $Native$Graphics$Element.block("center");
   var rightAligned = $Native$Graphics$Element.block("right");
   var leftAligned = $Native$Graphics$Element.block("left");
   var show = function (value) {
      return leftAligned($Text.monospace($Text.fromString($Basics.toString(value))));
   };
   var Tiled = {ctor: "Tiled"};
   var Cropped = function (a) {
      return {ctor: "Cropped"
             ,_0: a};
   };
   var Fitted = {ctor: "Fitted"};
   var Plain = {ctor: "Plain"};
   var Custom = {ctor: "Custom"};
   var RawHtml = {ctor: "RawHtml"};
   var Spacer = {ctor: "Spacer"};
   var Flow = F2(function (a,b) {
      return {ctor: "Flow"
             ,_0: a
             ,_1: b};
   });
   var Container = F2(function (a,
   b) {
      return {ctor: "Container"
             ,_0: a
             ,_1: b};
   });
   var Image = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "Image"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var newElement = $Native$Graphics$Element.newElement;
   var image = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Plain,w,h,src));
   });
   var fittedImage = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Fitted,w,h,src));
   });
   var croppedImage = F4(function (pos,
   w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Cropped(pos),w,h,src));
   });
   var tiledImage = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Tiled,w,h,src));
   });
   var container = F4(function (w,
   h,
   pos,
   e) {
      return A3(newElement,
      w,
      h,
      A2(Container,pos,e));
   });
   var spacer = F2(function (w,h) {
      return A3(newElement,
      w,
      h,
      Spacer);
   });
   var link = F2(function (href,
   e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["href"
                                    ,href]],
                p)};
      }();
   });
   var tag = F2(function (name,e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["tag"
                                    ,name]],
                p)};
      }();
   });
   var color = F2(function (c,e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["color"
                                    ,$Maybe.Just(c)]],
                p)};
      }();
   });
   var opacity = F2(function (o,
   e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["opacity"
                                    ,o]],
                p)};
      }();
   });
   var height = F2(function (nh,
   e) {
      return function () {
         var p = e.props;
         var props = function () {
            var _v0 = e.element;
            switch (_v0.ctor)
            {case "Image":
               return _U.replace([["width"
                                  ,$Basics.round($Basics.toFloat(_v0._1) / $Basics.toFloat(_v0._2) * $Basics.toFloat(nh))]],
                 p);}
            return p;
         }();
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["height"
                                    ,nh]],
                p)};
      }();
   });
   var width = F2(function (nw,e) {
      return function () {
         var p = e.props;
         var props = function () {
            var _v5 = e.element;
            switch (_v5.ctor)
            {case "Image":
               return _U.replace([["height"
                                  ,$Basics.round($Basics.toFloat(_v5._2) / $Basics.toFloat(_v5._1) * $Basics.toFloat(nw))]],
                 p);
               case "RawHtml":
               return _U.replace([["height"
                                  ,$Basics.snd(A2($Native$Graphics$Element.htmlHeight,
                                  nw,
                                  e.element))]],
                 p);}
            return p;
         }();
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["width"
                                    ,nw]],
                props)};
      }();
   });
   var size = F3(function (w,h,e) {
      return A2(height,
      h,
      A2(width,w,e));
   });
   var sizeOf = function (e) {
      return {ctor: "_Tuple2"
             ,_0: e.props.width
             ,_1: e.props.height};
   };
   var heightOf = function (e) {
      return e.props.height;
   };
   var widthOf = function (e) {
      return e.props.width;
   };
   var above = F2(function (hi,
   lo) {
      return A3(newElement,
      A2($Basics.max,
      widthOf(hi),
      widthOf(lo)),
      heightOf(hi) + heightOf(lo),
      A2(Flow,
      DDown,
      _L.fromArray([hi,lo])));
   });
   var below = F2(function (lo,
   hi) {
      return A3(newElement,
      A2($Basics.max,
      widthOf(hi),
      widthOf(lo)),
      heightOf(hi) + heightOf(lo),
      A2(Flow,
      DDown,
      _L.fromArray([hi,lo])));
   });
   var beside = F2(function (lft,
   rht) {
      return A3(newElement,
      widthOf(lft) + widthOf(rht),
      A2($Basics.max,
      heightOf(lft),
      heightOf(rht)),
      A2(Flow,
      right,
      _L.fromArray([lft,rht])));
   });
   var layers = function (es) {
      return function () {
         var hs = A2($List.map,
         heightOf,
         es);
         var ws = A2($List.map,
         widthOf,
         es);
         return A3(newElement,
         A2($Maybe.withDefault,
         0,
         $List.maximum(ws)),
         A2($Maybe.withDefault,
         0,
         $List.maximum(hs)),
         A2(Flow,DOut,es));
      }();
   };
   var empty = A2(spacer,0,0);
   var flow = F2(function (dir,
   es) {
      return function () {
         var newFlow = F2(function (w,
         h) {
            return A3(newElement,
            w,
            h,
            A2(Flow,dir,es));
         });
         var maxOrZero = function (list) {
            return A2($Maybe.withDefault,
            0,
            $List.maximum(list));
         };
         var hs = A2($List.map,
         heightOf,
         es);
         var ws = A2($List.map,
         widthOf,
         es);
         return _U.eq(es,
         _L.fromArray([])) ? empty : function () {
            switch (dir.ctor)
            {case "DDown":
               return A2(newFlow,
                 maxOrZero(ws),
                 $List.sum(hs));
               case "DIn": return A2(newFlow,
                 maxOrZero(ws),
                 maxOrZero(hs));
               case "DLeft": return A2(newFlow,
                 $List.sum(ws),
                 maxOrZero(hs));
               case "DOut": return A2(newFlow,
                 maxOrZero(ws),
                 maxOrZero(hs));
               case "DRight":
               return A2(newFlow,
                 $List.sum(ws),
                 maxOrZero(hs));
               case "DUp": return A2(newFlow,
                 maxOrZero(ws),
                 $List.sum(hs));}
            _U.badCase($moduleName,
            "between lines 362 and 368");
         }();
      }();
   });
   var Properties = F9(function (a,
   b,
   c,
   d,
   e,
   f,
   g,
   h,
   i) {
      return {_: {}
             ,click: i
             ,color: e
             ,height: c
             ,hover: h
             ,href: f
             ,id: a
             ,opacity: d
             ,tag: g
             ,width: b};
   });
   var Element = F2(function (a,
   b) {
      return {_: {}
             ,element: b
             ,props: a};
   });
   _elm.Graphics.Element.values = {_op: _op
                                  ,image: image
                                  ,fittedImage: fittedImage
                                  ,croppedImage: croppedImage
                                  ,tiledImage: tiledImage
                                  ,leftAligned: leftAligned
                                  ,rightAligned: rightAligned
                                  ,centered: centered
                                  ,justified: justified
                                  ,show: show
                                  ,width: width
                                  ,height: height
                                  ,size: size
                                  ,color: color
                                  ,opacity: opacity
                                  ,link: link
                                  ,tag: tag
                                  ,widthOf: widthOf
                                  ,heightOf: heightOf
                                  ,sizeOf: sizeOf
                                  ,flow: flow
                                  ,up: up
                                  ,down: down
                                  ,left: left
                                  ,right: right
                                  ,inward: inward
                                  ,outward: outward
                                  ,layers: layers
                                  ,above: above
                                  ,below: below
                                  ,beside: beside
                                  ,empty: empty
                                  ,spacer: spacer
                                  ,container: container
                                  ,middle: middle
                                  ,midTop: midTop
                                  ,midBottom: midBottom
                                  ,midLeft: midLeft
                                  ,midRight: midRight
                                  ,topLeft: topLeft
                                  ,topRight: topRight
                                  ,bottomLeft: bottomLeft
                                  ,bottomRight: bottomRight
                                  ,absolute: absolute
                                  ,relative: relative
                                  ,middleAt: middleAt
                                  ,midTopAt: midTopAt
                                  ,midBottomAt: midBottomAt
                                  ,midLeftAt: midLeftAt
                                  ,midRightAt: midRightAt
                                  ,topLeftAt: topLeftAt
                                  ,topRightAt: topRightAt
                                  ,bottomLeftAt: bottomLeftAt
                                  ,bottomRightAt: bottomRightAt
                                  ,Element: Element
                                  ,Position: Position};
   return _elm.Graphics.Element.values;
};
Elm.Html = Elm.Html || {};
Elm.Html.make = function (_elm) {
   "use strict";
   _elm.Html = _elm.Html || {};
   if (_elm.Html.values)
   return _elm.Html.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Html",
   $Basics = Elm.Basics.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $VirtualDom = Elm.VirtualDom.make(_elm);
   var fromElement = $VirtualDom.fromElement;
   var toElement = $VirtualDom.toElement;
   var text = $VirtualDom.text;
   var node = $VirtualDom.node;
   var body = node("body");
   var section = node("section");
   var nav = node("nav");
   var article = node("article");
   var aside = node("aside");
   var h1 = node("h1");
   var h2 = node("h2");
   var h3 = node("h3");
   var h4 = node("h4");
   var h5 = node("h5");
   var h6 = node("h6");
   var header = node("header");
   var footer = node("footer");
   var address = node("address");
   var main$ = node("main");
   var p = node("p");
   var hr = node("hr");
   var pre = node("pre");
   var blockquote = node("blockquote");
   var ol = node("ol");
   var ul = node("ul");
   var li = node("li");
   var dl = node("dl");
   var dt = node("dt");
   var dd = node("dd");
   var figure = node("figure");
   var figcaption = node("figcaption");
   var div = node("div");
   var a = node("a");
   var em = node("em");
   var strong = node("strong");
   var small = node("small");
   var s = node("s");
   var cite = node("cite");
   var q = node("q");
   var dfn = node("dfn");
   var abbr = node("abbr");
   var time = node("time");
   var code = node("code");
   var $var = node("var");
   var samp = node("samp");
   var kbd = node("kbd");
   var sub = node("sub");
   var sup = node("sup");
   var i = node("i");
   var b = node("b");
   var u = node("u");
   var mark = node("mark");
   var ruby = node("ruby");
   var rt = node("rt");
   var rp = node("rp");
   var bdi = node("bdi");
   var bdo = node("bdo");
   var span = node("span");
   var br = node("br");
   var wbr = node("wbr");
   var ins = node("ins");
   var del = node("del");
   var img = node("img");
   var iframe = node("iframe");
   var embed = node("embed");
   var object = node("object");
   var param = node("param");
   var video = node("video");
   var audio = node("audio");
   var source = node("source");
   var track = node("track");
   var canvas = node("canvas");
   var svg = node("svg");
   var math = node("math");
   var table = node("table");
   var caption = node("caption");
   var colgroup = node("colgroup");
   var col = node("col");
   var tbody = node("tbody");
   var thead = node("thead");
   var tfoot = node("tfoot");
   var tr = node("tr");
   var td = node("td");
   var th = node("th");
   var form = node("form");
   var fieldset = node("fieldset");
   var legend = node("legend");
   var label = node("label");
   var input = node("input");
   var button = node("button");
   var select = node("select");
   var datalist = node("datalist");
   var optgroup = node("optgroup");
   var option = node("option");
   var textarea = node("textarea");
   var keygen = node("keygen");
   var output = node("output");
   var progress = node("progress");
   var meter = node("meter");
   var details = node("details");
   var summary = node("summary");
   var menuitem = node("menuitem");
   var menu = node("menu");
   _elm.Html.values = {_op: _op
                      ,node: node
                      ,text: text
                      ,toElement: toElement
                      ,fromElement: fromElement
                      ,body: body
                      ,section: section
                      ,nav: nav
                      ,article: article
                      ,aside: aside
                      ,h1: h1
                      ,h2: h2
                      ,h3: h3
                      ,h4: h4
                      ,h5: h5
                      ,h6: h6
                      ,header: header
                      ,footer: footer
                      ,address: address
                      ,main$: main$
                      ,p: p
                      ,hr: hr
                      ,pre: pre
                      ,blockquote: blockquote
                      ,ol: ol
                      ,ul: ul
                      ,li: li
                      ,dl: dl
                      ,dt: dt
                      ,dd: dd
                      ,figure: figure
                      ,figcaption: figcaption
                      ,div: div
                      ,a: a
                      ,em: em
                      ,strong: strong
                      ,small: small
                      ,s: s
                      ,cite: cite
                      ,q: q
                      ,dfn: dfn
                      ,abbr: abbr
                      ,time: time
                      ,code: code
                      ,$var: $var
                      ,samp: samp
                      ,kbd: kbd
                      ,sub: sub
                      ,sup: sup
                      ,i: i
                      ,b: b
                      ,u: u
                      ,mark: mark
                      ,ruby: ruby
                      ,rt: rt
                      ,rp: rp
                      ,bdi: bdi
                      ,bdo: bdo
                      ,span: span
                      ,br: br
                      ,wbr: wbr
                      ,ins: ins
                      ,del: del
                      ,img: img
                      ,iframe: iframe
                      ,embed: embed
                      ,object: object
                      ,param: param
                      ,video: video
                      ,audio: audio
                      ,source: source
                      ,track: track
                      ,canvas: canvas
                      ,svg: svg
                      ,math: math
                      ,table: table
                      ,caption: caption
                      ,colgroup: colgroup
                      ,col: col
                      ,tbody: tbody
                      ,thead: thead
                      ,tfoot: tfoot
                      ,tr: tr
                      ,td: td
                      ,th: th
                      ,form: form
                      ,fieldset: fieldset
                      ,legend: legend
                      ,label: label
                      ,input: input
                      ,button: button
                      ,select: select
                      ,datalist: datalist
                      ,optgroup: optgroup
                      ,option: option
                      ,textarea: textarea
                      ,keygen: keygen
                      ,output: output
                      ,progress: progress
                      ,meter: meter
                      ,details: details
                      ,summary: summary
                      ,menuitem: menuitem
                      ,menu: menu};
   return _elm.Html.values;
};
Elm.Html = Elm.Html || {};
Elm.Html.Attributes = Elm.Html.Attributes || {};
Elm.Html.Attributes.make = function (_elm) {
   "use strict";
   _elm.Html = _elm.Html || {};
   _elm.Html.Attributes = _elm.Html.Attributes || {};
   if (_elm.Html.Attributes.values)
   return _elm.Html.Attributes.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Html.Attributes",
   $Basics = Elm.Basics.make(_elm),
   $Html = Elm.Html.make(_elm),
   $Json$Encode = Elm.Json.Encode.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $String = Elm.String.make(_elm),
   $VirtualDom = Elm.VirtualDom.make(_elm);
   var attribute = $VirtualDom.attribute;
   var property = $VirtualDom.property;
   var stringProperty = F2(function (name,
   string) {
      return A2(property,
      name,
      $Json$Encode.string(string));
   });
   var $class = function (name) {
      return A2(stringProperty,
      "className",
      name);
   };
   var id = function (name) {
      return A2(stringProperty,
      "id",
      name);
   };
   var title = function (name) {
      return A2(stringProperty,
      "title",
      name);
   };
   var accesskey = function ($char) {
      return A2(stringProperty,
      "accesskey",
      $String.fromList(_L.fromArray([$char])));
   };
   var contextmenu = function (value) {
      return A2(stringProperty,
      "contextmenu",
      value);
   };
   var dir = function (value) {
      return A2(stringProperty,
      "dir",
      value);
   };
   var draggable = function (value) {
      return A2(stringProperty,
      "draggable",
      value);
   };
   var dropzone = function (value) {
      return A2(stringProperty,
      "dropzone",
      value);
   };
   var itemprop = function (value) {
      return A2(stringProperty,
      "itemprop",
      value);
   };
   var lang = function (value) {
      return A2(stringProperty,
      "lang",
      value);
   };
   var tabindex = function (n) {
      return A2(stringProperty,
      "tabIndex",
      $Basics.toString(n));
   };
   var charset = function (value) {
      return A2(stringProperty,
      "charset",
      value);
   };
   var content = function (value) {
      return A2(stringProperty,
      "content",
      value);
   };
   var httpEquiv = function (value) {
      return A2(stringProperty,
      "httpEquiv",
      value);
   };
   var language = function (value) {
      return A2(stringProperty,
      "language",
      value);
   };
   var src = function (value) {
      return A2(stringProperty,
      "src",
      value);
   };
   var height = function (value) {
      return A2(stringProperty,
      "height",
      $Basics.toString(value));
   };
   var width = function (value) {
      return A2(stringProperty,
      "width",
      $Basics.toString(value));
   };
   var alt = function (value) {
      return A2(stringProperty,
      "alt",
      value);
   };
   var preload = function (value) {
      return A2(stringProperty,
      "preload",
      value);
   };
   var poster = function (value) {
      return A2(stringProperty,
      "poster",
      value);
   };
   var kind = function (value) {
      return A2(stringProperty,
      "kind",
      value);
   };
   var srclang = function (value) {
      return A2(stringProperty,
      "srclang",
      value);
   };
   var sandbox = function (value) {
      return A2(stringProperty,
      "sandbox",
      value);
   };
   var srcdoc = function (value) {
      return A2(stringProperty,
      "srcdoc",
      value);
   };
   var type$ = function (value) {
      return A2(stringProperty,
      "type",
      value);
   };
   var value = function (value) {
      return A2(stringProperty,
      "value",
      value);
   };
   var placeholder = function (value) {
      return A2(stringProperty,
      "placeholder",
      value);
   };
   var accept = function (value) {
      return A2(stringProperty,
      "accept",
      value);
   };
   var acceptCharset = function (value) {
      return A2(stringProperty,
      "acceptCharset",
      value);
   };
   var action = function (value) {
      return A2(stringProperty,
      "action",
      value);
   };
   var autocomplete = function (bool) {
      return A2(stringProperty,
      "autocomplete",
      bool ? "on" : "off");
   };
   var autosave = function (value) {
      return A2(stringProperty,
      "autosave",
      value);
   };
   var enctype = function (value) {
      return A2(stringProperty,
      "enctype",
      value);
   };
   var formaction = function (value) {
      return A2(stringProperty,
      "formaction",
      value);
   };
   var list = function (value) {
      return A2(stringProperty,
      "list",
      value);
   };
   var minlength = function (n) {
      return A2(stringProperty,
      "minLength",
      $Basics.toString(n));
   };
   var maxlength = function (n) {
      return A2(stringProperty,
      "maxLength",
      $Basics.toString(n));
   };
   var method = function (value) {
      return A2(stringProperty,
      "method",
      value);
   };
   var name = function (value) {
      return A2(stringProperty,
      "name",
      value);
   };
   var pattern = function (value) {
      return A2(stringProperty,
      "pattern",
      value);
   };
   var size = function (n) {
      return A2(stringProperty,
      "size",
      $Basics.toString(n));
   };
   var $for = function (value) {
      return A2(stringProperty,
      "htmlFor",
      value);
   };
   var form = function (value) {
      return A2(stringProperty,
      "form",
      value);
   };
   var max = function (value) {
      return A2(stringProperty,
      "max",
      value);
   };
   var min = function (value) {
      return A2(stringProperty,
      "min",
      value);
   };
   var step = function (n) {
      return A2(stringProperty,
      "step",
      n);
   };
   var cols = function (n) {
      return A2(stringProperty,
      "cols",
      $Basics.toString(n));
   };
   var rows = function (n) {
      return A2(stringProperty,
      "rows",
      $Basics.toString(n));
   };
   var wrap = function (value) {
      return A2(stringProperty,
      "wrap",
      value);
   };
   var usemap = function (value) {
      return A2(stringProperty,
      "useMap",
      value);
   };
   var shape = function (value) {
      return A2(stringProperty,
      "shape",
      value);
   };
   var coords = function (value) {
      return A2(stringProperty,
      "coords",
      value);
   };
   var challenge = function (value) {
      return A2(stringProperty,
      "challenge",
      value);
   };
   var keytype = function (value) {
      return A2(stringProperty,
      "keytype",
      value);
   };
   var align = function (value) {
      return A2(stringProperty,
      "align",
      value);
   };
   var cite = function (value) {
      return A2(stringProperty,
      "cite",
      value);
   };
   var href = function (value) {
      return A2(stringProperty,
      "href",
      value);
   };
   var target = function (value) {
      return A2(stringProperty,
      "target",
      value);
   };
   var downloadAs = function (value) {
      return A2(stringProperty,
      "download",
      value);
   };
   var hreflang = function (value) {
      return A2(stringProperty,
      "hreflang",
      value);
   };
   var media = function (value) {
      return A2(stringProperty,
      "media",
      value);
   };
   var ping = function (value) {
      return A2(stringProperty,
      "ping",
      value);
   };
   var rel = function (value) {
      return A2(stringProperty,
      "rel",
      value);
   };
   var datetime = function (value) {
      return A2(stringProperty,
      "datetime",
      value);
   };
   var pubdate = function (value) {
      return A2(stringProperty,
      "pubdate",
      value);
   };
   var start = function (n) {
      return A2(stringProperty,
      "start",
      $Basics.toString(n));
   };
   var colspan = function (n) {
      return A2(stringProperty,
      "colSpan",
      $Basics.toString(n));
   };
   var headers = function (value) {
      return A2(stringProperty,
      "headers",
      value);
   };
   var rowspan = function (n) {
      return A2(stringProperty,
      "rowSpan",
      $Basics.toString(n));
   };
   var scope = function (value) {
      return A2(stringProperty,
      "scope",
      value);
   };
   var manifest = function (value) {
      return A2(stringProperty,
      "manifest",
      value);
   };
   var boolProperty = F2(function (name,
   bool) {
      return A2(property,
      name,
      $Json$Encode.bool(bool));
   });
   var hidden = function (bool) {
      return A2(boolProperty,
      "hidden",
      bool);
   };
   var contenteditable = function (bool) {
      return A2(boolProperty,
      "contentEditable",
      bool);
   };
   var spellcheck = function (bool) {
      return A2(boolProperty,
      "spellcheck",
      bool);
   };
   var async = function (bool) {
      return A2(boolProperty,
      "async",
      bool);
   };
   var defer = function (bool) {
      return A2(boolProperty,
      "defer",
      bool);
   };
   var scoped = function (bool) {
      return A2(boolProperty,
      "scoped",
      bool);
   };
   var autoplay = function (bool) {
      return A2(boolProperty,
      "autoplay",
      bool);
   };
   var controls = function (bool) {
      return A2(boolProperty,
      "controls",
      bool);
   };
   var loop = function (bool) {
      return A2(boolProperty,
      "loop",
      bool);
   };
   var $default = function (bool) {
      return A2(boolProperty,
      "default",
      bool);
   };
   var seamless = function (bool) {
      return A2(boolProperty,
      "seamless",
      bool);
   };
   var checked = function (bool) {
      return A2(boolProperty,
      "checked",
      bool);
   };
   var selected = function (bool) {
      return A2(boolProperty,
      "selected",
      bool);
   };
   var autofocus = function (bool) {
      return A2(boolProperty,
      "autofocus",
      bool);
   };
   var disabled = function (bool) {
      return A2(boolProperty,
      "disabled",
      bool);
   };
   var multiple = function (bool) {
      return A2(boolProperty,
      "multiple",
      bool);
   };
   var novalidate = function (bool) {
      return A2(boolProperty,
      "noValidate",
      bool);
   };
   var readonly = function (bool) {
      return A2(boolProperty,
      "readOnly",
      bool);
   };
   var required = function (bool) {
      return A2(boolProperty,
      "required",
      bool);
   };
   var ismap = function (value) {
      return A2(boolProperty,
      "isMap",
      value);
   };
   var download = function (bool) {
      return A2(boolProperty,
      "download",
      bool);
   };
   var reversed = function (bool) {
      return A2(boolProperty,
      "reversed",
      bool);
   };
   var classList = function (list) {
      return $class($String.join(" ")($List.map($Basics.fst)($List.filter($Basics.snd)(list))));
   };
   var style = function (props) {
      return property("style")($Json$Encode.object($List.map(function (_v0) {
         return function () {
            switch (_v0.ctor)
            {case "_Tuple2":
               return {ctor: "_Tuple2"
                      ,_0: _v0._0
                      ,_1: $Json$Encode.string(_v0._1)};}
            _U.badCase($moduleName,
            "on line 156, column 35 to 57");
         }();
      })(props)));
   };
   var key = function (k) {
      return A2(stringProperty,
      "key",
      k);
   };
   _elm.Html.Attributes.values = {_op: _op
                                 ,key: key
                                 ,style: style
                                 ,$class: $class
                                 ,classList: classList
                                 ,id: id
                                 ,title: title
                                 ,hidden: hidden
                                 ,type$: type$
                                 ,value: value
                                 ,checked: checked
                                 ,placeholder: placeholder
                                 ,selected: selected
                                 ,accept: accept
                                 ,acceptCharset: acceptCharset
                                 ,action: action
                                 ,autocomplete: autocomplete
                                 ,autofocus: autofocus
                                 ,autosave: autosave
                                 ,disabled: disabled
                                 ,enctype: enctype
                                 ,formaction: formaction
                                 ,list: list
                                 ,maxlength: maxlength
                                 ,minlength: minlength
                                 ,method: method
                                 ,multiple: multiple
                                 ,name: name
                                 ,novalidate: novalidate
                                 ,pattern: pattern
                                 ,readonly: readonly
                                 ,required: required
                                 ,size: size
                                 ,$for: $for
                                 ,form: form
                                 ,max: max
                                 ,min: min
                                 ,step: step
                                 ,cols: cols
                                 ,rows: rows
                                 ,wrap: wrap
                                 ,href: href
                                 ,target: target
                                 ,download: download
                                 ,downloadAs: downloadAs
                                 ,hreflang: hreflang
                                 ,media: media
                                 ,ping: ping
                                 ,rel: rel
                                 ,ismap: ismap
                                 ,usemap: usemap
                                 ,shape: shape
                                 ,coords: coords
                                 ,src: src
                                 ,height: height
                                 ,width: width
                                 ,alt: alt
                                 ,autoplay: autoplay
                                 ,controls: controls
                                 ,loop: loop
                                 ,preload: preload
                                 ,poster: poster
                                 ,$default: $default
                                 ,kind: kind
                                 ,srclang: srclang
                                 ,sandbox: sandbox
                                 ,seamless: seamless
                                 ,srcdoc: srcdoc
                                 ,reversed: reversed
                                 ,start: start
                                 ,align: align
                                 ,colspan: colspan
                                 ,rowspan: rowspan
                                 ,headers: headers
                                 ,scope: scope
                                 ,async: async
                                 ,charset: charset
                                 ,content: content
                                 ,defer: defer
                                 ,httpEquiv: httpEquiv
                                 ,language: language
                                 ,scoped: scoped
                                 ,accesskey: accesskey
                                 ,contenteditable: contenteditable
                                 ,contextmenu: contextmenu
                                 ,dir: dir
                                 ,draggable: draggable
                                 ,dropzone: dropzone
                                 ,itemprop: itemprop
                                 ,lang: lang
                                 ,spellcheck: spellcheck
                                 ,tabindex: tabindex
                                 ,challenge: challenge
                                 ,keytype: keytype
                                 ,cite: cite
                                 ,datetime: datetime
                                 ,pubdate: pubdate
                                 ,manifest: manifest
                                 ,property: property
                                 ,attribute: attribute};
   return _elm.Html.Attributes.values;
};
Elm.Html = Elm.Html || {};
Elm.Html.Events = Elm.Html.Events || {};
Elm.Html.Events.make = function (_elm) {
   "use strict";
   _elm.Html = _elm.Html || {};
   _elm.Html.Events = _elm.Html.Events || {};
   if (_elm.Html.Events.values)
   return _elm.Html.Events.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Html.Events",
   $Basics = Elm.Basics.make(_elm),
   $Html = Elm.Html.make(_elm),
   $Json$Decode = Elm.Json.Decode.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $VirtualDom = Elm.VirtualDom.make(_elm);
   var keyCode = A2($Json$Decode._op[":="],
   "keyCode",
   $Json$Decode.$int);
   var targetChecked = A2($Json$Decode.at,
   _L.fromArray(["target"
                ,"checked"]),
   $Json$Decode.bool);
   var targetValue = A2($Json$Decode.at,
   _L.fromArray(["target"
                ,"value"]),
   $Json$Decode.string);
   var defaultOptions = $VirtualDom.defaultOptions;
   var Options = F2(function (a,
   b) {
      return {_: {}
             ,preventDefault: b
             ,stopPropagation: a};
   });
   var onWithOptions = $VirtualDom.onWithOptions;
   var on = $VirtualDom.on;
   var messageOn = F3(function (name,
   addr,
   msg) {
      return A3(on,
      name,
      $Json$Decode.value,
      function (_v0) {
         return function () {
            return A2($Signal.message,
            addr,
            msg);
         }();
      });
   });
   var onClick = messageOn("click");
   var onDoubleClick = messageOn("dblclick");
   var onMouseMove = messageOn("mousemove");
   var onMouseDown = messageOn("mousedown");
   var onMouseUp = messageOn("mouseup");
   var onMouseEnter = messageOn("mouseenter");
   var onMouseLeave = messageOn("mouseleave");
   var onMouseOver = messageOn("mouseover");
   var onMouseOut = messageOn("mouseout");
   var onBlur = messageOn("blur");
   var onFocus = messageOn("focus");
   var onSubmit = messageOn("submit");
   var onKey = F3(function (name,
   addr,
   handler) {
      return A3(on,
      name,
      keyCode,
      function (code) {
         return A2($Signal.message,
         addr,
         handler(code));
      });
   });
   var onKeyUp = onKey("keyup");
   var onKeyDown = onKey("keydown");
   var onKeyPress = onKey("keypress");
   _elm.Html.Events.values = {_op: _op
                             ,onBlur: onBlur
                             ,onFocus: onFocus
                             ,onSubmit: onSubmit
                             ,onKeyUp: onKeyUp
                             ,onKeyDown: onKeyDown
                             ,onKeyPress: onKeyPress
                             ,onClick: onClick
                             ,onDoubleClick: onDoubleClick
                             ,onMouseMove: onMouseMove
                             ,onMouseDown: onMouseDown
                             ,onMouseUp: onMouseUp
                             ,onMouseEnter: onMouseEnter
                             ,onMouseLeave: onMouseLeave
                             ,onMouseOver: onMouseOver
                             ,onMouseOut: onMouseOut
                             ,on: on
                             ,onWithOptions: onWithOptions
                             ,defaultOptions: defaultOptions
                             ,targetValue: targetValue
                             ,targetChecked: targetChecked
                             ,keyCode: keyCode
                             ,Options: Options};
   return _elm.Html.Events.values;
};
Elm.Html = Elm.Html || {};
Elm.Html.Lazy = Elm.Html.Lazy || {};
Elm.Html.Lazy.make = function (_elm) {
   "use strict";
   _elm.Html = _elm.Html || {};
   _elm.Html.Lazy = _elm.Html.Lazy || {};
   if (_elm.Html.Lazy.values)
   return _elm.Html.Lazy.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Html.Lazy",
   $Basics = Elm.Basics.make(_elm),
   $Html = Elm.Html.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $VirtualDom = Elm.VirtualDom.make(_elm);
   var lazy3 = $VirtualDom.lazy3;
   var lazy2 = $VirtualDom.lazy2;
   var lazy = $VirtualDom.lazy;
   _elm.Html.Lazy.values = {_op: _op
                           ,lazy: lazy
                           ,lazy2: lazy2
                           ,lazy3: lazy3};
   return _elm.Html.Lazy.values;
};
Elm.Json = Elm.Json || {};
Elm.Json.Decode = Elm.Json.Decode || {};
Elm.Json.Decode.make = function (_elm) {
   "use strict";
   _elm.Json = _elm.Json || {};
   _elm.Json.Decode = _elm.Json.Decode || {};
   if (_elm.Json.Decode.values)
   return _elm.Json.Decode.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Json.Decode",
   $Array = Elm.Array.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Json$Encode = Elm.Json.Encode.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Json = Elm.Native.Json.make(_elm),
   $Result = Elm.Result.make(_elm);
   var tuple8 = $Native$Json.decodeTuple8;
   var tuple7 = $Native$Json.decodeTuple7;
   var tuple6 = $Native$Json.decodeTuple6;
   var tuple5 = $Native$Json.decodeTuple5;
   var tuple4 = $Native$Json.decodeTuple4;
   var tuple3 = $Native$Json.decodeTuple3;
   var tuple2 = $Native$Json.decodeTuple2;
   var tuple1 = $Native$Json.decodeTuple1;
   var succeed = $Native$Json.succeed;
   var fail = $Native$Json.fail;
   var andThen = $Native$Json.andThen;
   var customDecoder = $Native$Json.customDecoder;
   var decodeValue = $Native$Json.runDecoderValue;
   var value = $Native$Json.decodeValue;
   var maybe = $Native$Json.decodeMaybe;
   var $null = $Native$Json.decodeNull;
   var array = $Native$Json.decodeArray;
   var list = $Native$Json.decodeList;
   var bool = $Native$Json.decodeBool;
   var $int = $Native$Json.decodeInt;
   var $float = $Native$Json.decodeFloat;
   var string = $Native$Json.decodeString;
   var oneOf = $Native$Json.oneOf;
   var keyValuePairs = $Native$Json.decodeKeyValuePairs;
   var object8 = $Native$Json.decodeObject8;
   var object7 = $Native$Json.decodeObject7;
   var object6 = $Native$Json.decodeObject6;
   var object5 = $Native$Json.decodeObject5;
   var object4 = $Native$Json.decodeObject4;
   var object3 = $Native$Json.decodeObject3;
   var object2 = $Native$Json.decodeObject2;
   var object1 = $Native$Json.decodeObject1;
   _op[":="] = $Native$Json.decodeField;
   var at = F2(function (fields,
   decoder) {
      return A3($List.foldr,
      F2(function (x,y) {
         return A2(_op[":="],x,y);
      }),
      decoder,
      fields);
   });
   var decodeString = $Native$Json.runDecoderString;
   var map = $Native$Json.decodeObject1;
   var dict = function (decoder) {
      return A2(map,
      $Dict.fromList,
      keyValuePairs(decoder));
   };
   var Decoder = {ctor: "Decoder"};
   _elm.Json.Decode.values = {_op: _op
                             ,decodeString: decodeString
                             ,decodeValue: decodeValue
                             ,string: string
                             ,$int: $int
                             ,$float: $float
                             ,bool: bool
                             ,$null: $null
                             ,list: list
                             ,array: array
                             ,tuple1: tuple1
                             ,tuple2: tuple2
                             ,tuple3: tuple3
                             ,tuple4: tuple4
                             ,tuple5: tuple5
                             ,tuple6: tuple6
                             ,tuple7: tuple7
                             ,tuple8: tuple8
                             ,at: at
                             ,object1: object1
                             ,object2: object2
                             ,object3: object3
                             ,object4: object4
                             ,object5: object5
                             ,object6: object6
                             ,object7: object7
                             ,object8: object8
                             ,keyValuePairs: keyValuePairs
                             ,dict: dict
                             ,maybe: maybe
                             ,oneOf: oneOf
                             ,map: map
                             ,fail: fail
                             ,succeed: succeed
                             ,andThen: andThen
                             ,value: value
                             ,customDecoder: customDecoder
                             ,Decoder: Decoder};
   return _elm.Json.Decode.values;
};
Elm.Json = Elm.Json || {};
Elm.Json.Encode = Elm.Json.Encode || {};
Elm.Json.Encode.make = function (_elm) {
   "use strict";
   _elm.Json = _elm.Json || {};
   _elm.Json.Encode = _elm.Json.Encode || {};
   if (_elm.Json.Encode.values)
   return _elm.Json.Encode.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Json.Encode",
   $Array = Elm.Array.make(_elm),
   $Native$Json = Elm.Native.Json.make(_elm);
   var list = $Native$Json.encodeList;
   var array = $Native$Json.encodeArray;
   var object = $Native$Json.encodeObject;
   var $null = $Native$Json.encodeNull;
   var bool = $Native$Json.identity;
   var $float = $Native$Json.identity;
   var $int = $Native$Json.identity;
   var string = $Native$Json.identity;
   var encode = $Native$Json.encode;
   var Value = {ctor: "Value"};
   _elm.Json.Encode.values = {_op: _op
                             ,encode: encode
                             ,string: string
                             ,$int: $int
                             ,$float: $float
                             ,bool: bool
                             ,$null: $null
                             ,list: list
                             ,array: array
                             ,object: object
                             ,Value: Value};
   return _elm.Json.Encode.values;
};
Elm.List = Elm.List || {};
Elm.List.make = function (_elm) {
   "use strict";
   _elm.List = _elm.List || {};
   if (_elm.List.values)
   return _elm.List.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "List",
   $Basics = Elm.Basics.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$List = Elm.Native.List.make(_elm);
   var sortWith = $Native$List.sortWith;
   var sortBy = $Native$List.sortBy;
   var sort = function (xs) {
      return A2(sortBy,
      $Basics.identity,
      xs);
   };
   var repeat = $Native$List.repeat;
   var drop = $Native$List.drop;
   var take = $Native$List.take;
   var map5 = $Native$List.map5;
   var map4 = $Native$List.map4;
   var map3 = $Native$List.map3;
   var map2 = $Native$List.map2;
   var any = $Native$List.any;
   var all = F2(function (pred,
   xs) {
      return $Basics.not(A2(any,
      function ($) {
         return $Basics.not(pred($));
      },
      xs));
   });
   var foldr = $Native$List.foldr;
   var foldl = $Native$List.foldl;
   var length = function (xs) {
      return A3(foldl,
      F2(function (_v0,i) {
         return function () {
            return i + 1;
         }();
      }),
      0,
      xs);
   };
   var sum = function (numbers) {
      return A3(foldl,
      F2(function (x,y) {
         return x + y;
      }),
      0,
      numbers);
   };
   var product = function (numbers) {
      return A3(foldl,
      F2(function (x,y) {
         return x * y;
      }),
      1,
      numbers);
   };
   var maximum = function (list) {
      return function () {
         switch (list.ctor)
         {case "::":
            return $Maybe.Just(A3(foldl,
              $Basics.max,
              list._0,
              list._1));}
         return $Maybe.Nothing;
      }();
   };
   var minimum = function (list) {
      return function () {
         switch (list.ctor)
         {case "::":
            return $Maybe.Just(A3(foldl,
              $Basics.min,
              list._0,
              list._1));}
         return $Maybe.Nothing;
      }();
   };
   var indexedMap = F2(function (f,
   xs) {
      return A3(map2,
      f,
      _L.range(0,length(xs) - 1),
      xs);
   });
   var member = F2(function (x,
   xs) {
      return A2(any,
      function (a) {
         return _U.eq(a,x);
      },
      xs);
   });
   var isEmpty = function (xs) {
      return function () {
         switch (xs.ctor)
         {case "[]": return true;}
         return false;
      }();
   };
   var tail = function (list) {
      return function () {
         switch (list.ctor)
         {case "::":
            return $Maybe.Just(list._1);
            case "[]":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 87 and 89");
      }();
   };
   var head = function (list) {
      return function () {
         switch (list.ctor)
         {case "::":
            return $Maybe.Just(list._0);
            case "[]":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 75 and 77");
      }();
   };
   _op["::"] = $Native$List.cons;
   var map = F2(function (f,xs) {
      return A3(foldr,
      F2(function (x,acc) {
         return A2(_op["::"],
         f(x),
         acc);
      }),
      _L.fromArray([]),
      xs);
   });
   var filter = F2(function (pred,
   xs) {
      return function () {
         var conditionalCons = F2(function (x,
         xs$) {
            return pred(x) ? A2(_op["::"],
            x,
            xs$) : xs$;
         });
         return A3(foldr,
         conditionalCons,
         _L.fromArray([]),
         xs);
      }();
   });
   var maybeCons = F3(function (f,
   mx,
   xs) {
      return function () {
         var _v15 = f(mx);
         switch (_v15.ctor)
         {case "Just":
            return A2(_op["::"],_v15._0,xs);
            case "Nothing": return xs;}
         _U.badCase($moduleName,
         "between lines 179 and 181");
      }();
   });
   var filterMap = F2(function (f,
   xs) {
      return A3(foldr,
      maybeCons(f),
      _L.fromArray([]),
      xs);
   });
   var reverse = function (list) {
      return A3(foldl,
      F2(function (x,y) {
         return A2(_op["::"],x,y);
      }),
      _L.fromArray([]),
      list);
   };
   var scanl = F3(function (f,
   b,
   xs) {
      return function () {
         var scan1 = F2(function (x,
         accAcc) {
            return function () {
               switch (accAcc.ctor)
               {case "::": return A2(_op["::"],
                    A2(f,x,accAcc._0),
                    accAcc);
                  case "[]":
                  return _L.fromArray([]);}
               _U.badCase($moduleName,
               "between lines 148 and 151");
            }();
         });
         return reverse(A3(foldl,
         scan1,
         _L.fromArray([b]),
         xs));
      }();
   });
   var append = F2(function (xs,
   ys) {
      return function () {
         switch (ys.ctor)
         {case "[]": return xs;}
         return A3(foldr,
         F2(function (x,y) {
            return A2(_op["::"],x,y);
         }),
         ys,
         xs);
      }();
   });
   var concat = function (lists) {
      return A3(foldr,
      append,
      _L.fromArray([]),
      lists);
   };
   var concatMap = F2(function (f,
   list) {
      return concat(A2(map,
      f,
      list));
   });
   var partition = F2(function (pred,
   list) {
      return function () {
         var step = F2(function (x,
         _v21) {
            return function () {
               switch (_v21.ctor)
               {case "_Tuple2":
                  return pred(x) ? {ctor: "_Tuple2"
                                   ,_0: A2(_op["::"],x,_v21._0)
                                   ,_1: _v21._1} : {ctor: "_Tuple2"
                                                   ,_0: _v21._0
                                                   ,_1: A2(_op["::"],
                                                   x,
                                                   _v21._1)};}
               _U.badCase($moduleName,
               "between lines 301 and 303");
            }();
         });
         return A3(foldr,
         step,
         {ctor: "_Tuple2"
         ,_0: _L.fromArray([])
         ,_1: _L.fromArray([])},
         list);
      }();
   });
   var unzip = function (pairs) {
      return function () {
         var step = F2(function (_v25,
         _v26) {
            return function () {
               switch (_v26.ctor)
               {case "_Tuple2":
                  return function () {
                       switch (_v25.ctor)
                       {case "_Tuple2":
                          return {ctor: "_Tuple2"
                                 ,_0: A2(_op["::"],
                                 _v25._0,
                                 _v26._0)
                                 ,_1: A2(_op["::"],
                                 _v25._1,
                                 _v26._1)};}
                       _U.badCase($moduleName,
                       "on line 339, column 12 to 28");
                    }();}
               _U.badCase($moduleName,
               "on line 339, column 12 to 28");
            }();
         });
         return A3(foldr,
         step,
         {ctor: "_Tuple2"
         ,_0: _L.fromArray([])
         ,_1: _L.fromArray([])},
         pairs);
      }();
   };
   var intersperse = F2(function (sep,
   xs) {
      return function () {
         switch (xs.ctor)
         {case "::": return function () {
                 var step = F2(function (x,
                 rest) {
                    return A2(_op["::"],
                    sep,
                    A2(_op["::"],x,rest));
                 });
                 var spersed = A3(foldr,
                 step,
                 _L.fromArray([]),
                 xs._1);
                 return A2(_op["::"],
                 xs._0,
                 spersed);
              }();
            case "[]":
            return _L.fromArray([]);}
         _U.badCase($moduleName,
         "between lines 350 and 356");
      }();
   });
   _elm.List.values = {_op: _op
                      ,isEmpty: isEmpty
                      ,length: length
                      ,reverse: reverse
                      ,member: member
                      ,head: head
                      ,tail: tail
                      ,filter: filter
                      ,take: take
                      ,drop: drop
                      ,repeat: repeat
                      ,append: append
                      ,concat: concat
                      ,intersperse: intersperse
                      ,partition: partition
                      ,unzip: unzip
                      ,map: map
                      ,map2: map2
                      ,map3: map3
                      ,map4: map4
                      ,map5: map5
                      ,filterMap: filterMap
                      ,concatMap: concatMap
                      ,indexedMap: indexedMap
                      ,foldr: foldr
                      ,foldl: foldl
                      ,sum: sum
                      ,product: product
                      ,maximum: maximum
                      ,minimum: minimum
                      ,all: all
                      ,any: any
                      ,scanl: scanl
                      ,sort: sort
                      ,sortBy: sortBy
                      ,sortWith: sortWith};
   return _elm.List.values;
};
Elm.Maybe = Elm.Maybe || {};
Elm.Maybe.make = function (_elm) {
   "use strict";
   _elm.Maybe = _elm.Maybe || {};
   if (_elm.Maybe.values)
   return _elm.Maybe.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Maybe";
   var withDefault = F2(function ($default,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just": return maybe._0;
            case "Nothing":
            return $default;}
         _U.badCase($moduleName,
         "between lines 45 and 47");
      }();
   });
   var Nothing = {ctor: "Nothing"};
   var oneOf = function (maybes) {
      return function () {
         switch (maybes.ctor)
         {case "::": return function () {
                 switch (maybes._0.ctor)
                 {case "Just": return maybes._0;
                    case "Nothing":
                    return oneOf(maybes._1);}
                 _U.badCase($moduleName,
                 "between lines 64 and 66");
              }();
            case "[]": return Nothing;}
         _U.badCase($moduleName,
         "between lines 59 and 66");
      }();
   };
   var andThen = F2(function (maybeValue,
   callback) {
      return function () {
         switch (maybeValue.ctor)
         {case "Just":
            return callback(maybeValue._0);
            case "Nothing": return Nothing;}
         _U.badCase($moduleName,
         "between lines 110 and 112");
      }();
   });
   var Just = function (a) {
      return {ctor: "Just",_0: a};
   };
   var map = F2(function (f,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return Just(f(maybe._0));
            case "Nothing": return Nothing;}
         _U.badCase($moduleName,
         "between lines 76 and 78");
      }();
   });
   _elm.Maybe.values = {_op: _op
                       ,andThen: andThen
                       ,map: map
                       ,withDefault: withDefault
                       ,oneOf: oneOf
                       ,Just: Just
                       ,Nothing: Nothing};
   return _elm.Maybe.values;
};
Elm.Native.Array = {};
Elm.Native.Array.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Array = localRuntime.Native.Array || {};
	if (localRuntime.Native.Array.values)
	{
		return localRuntime.Native.Array.values;
	}
	if ('values' in Elm.Native.Array)
	{
		return localRuntime.Native.Array.values = Elm.Native.Array.values;
	}

	var List = Elm.Native.List.make(localRuntime);

	// A RRB-Tree has two distinct data types.
	// Leaf -> "height"  is always 0
	//         "table"   is an array of elements
	// Node -> "height"  is always greater than 0
	//         "table"   is an array of child nodes
	//         "lengths" is an array of accumulated lengths of the child nodes

	// M is the maximal table size. 32 seems fast. E is the allowed increase
	// of search steps when concatting to find an index. Lower values will
	// decrease balancing, but will increase search steps.
	var M = 32;
	var E = 2;

	// An empty array.
	var empty = {
		ctor: "_Array",
		height: 0,
		table: new Array()
	};


	function get(i, array)
	{
		if (i < 0 || i >= length(array))
		{
			throw new Error(
				"Index " + i + " is out of range. Check the length of " +
				"your array first or use getMaybe or getWithDefault.");
		}
		return unsafeGet(i, array);
	}


	function unsafeGet(i, array)
	{
		for (var x = array.height; x > 0; x--)
		{
			var slot = i >> (x * 5);
			while (array.lengths[slot] <= i)
			{
				slot++;
			}
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array = array.table[slot];
		}
		return array.table[i];
	}


	// Sets the value at the index i. Only the nodes leading to i will get
	// copied and updated.
	function set(i, item, array)
	{
		if (i < 0 || length(array) <= i)
		{
			return array;
		}
		return unsafeSet(i, item, array);
	}


	function unsafeSet(i, item, array)
	{
		array = nodeCopy(array);

		if (array.height == 0)
		{
			array.table[i] = item;
		}
		else
		{
			var slot = getSlot(i, array);
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array.table[slot] = unsafeSet(i, item, array.table[slot]);
		}
		return array;
	}


	function initialize(len, f)
	{
		if (len == 0)
		{
			return empty;
		}
		var h = Math.floor( Math.log(len) / Math.log(M) );
		return initialize_(f, h, 0, len);
	}

	function initialize_(f, h, from, to)
	{
		if (h == 0)
		{
			var table = new Array((to - from) % (M + 1));
			for (var i = 0; i < table.length; i++)
			{
			  table[i] = f(from + i);
			}
			return {
				ctor: "_Array",
				height: 0,
				table: table
			};
		}

		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
		}
		return {
			ctor: "_Array",
			height: h,
			table: table,
			lengths: lengths
		};
	}

	function fromList(list)
	{
		if (list == List.Nil)
		{
			return empty;
		}

		// Allocate M sized blocks (table) and write list elements to it.
		var table = new Array(M);
		var nodes = new Array();
		var i = 0;

		while (list.ctor !== '[]')
		{
			table[i] = list._0;
			list = list._1;
			i++;

			// table is full, so we can push a leaf containing it into the
			// next node.
			if (i == M)
			{
				var leaf = {
					ctor: "_Array",
					height: 0,
					table: table
				};
				fromListPush(leaf, nodes);
				table = new Array(M);
				i = 0;
			}
		}

		// Maybe there is something left on the table.
		if (i > 0)
		{
			var leaf = {
				ctor: "_Array",
				height: 0,
				table: table.splice(0,i)
			};
			fromListPush(leaf, nodes);
		}

		// Go through all of the nodes and eventually push them into higher nodes.
		for (var h = 0; h < nodes.length - 1; h++)
		{
			if (nodes[h].table.length > 0)
			{
				fromListPush(nodes[h], nodes);
			}
		}

		var head = nodes[nodes.length - 1];
		if (head.height > 0 && head.table.length == 1)
		{
			return head.table[0];
		}
		else
		{
			return head;
		}
	}

	// Push a node into a higher node as a child.
	function fromListPush(toPush, nodes)
	{
		var h = toPush.height;

		// Maybe the node on this height does not exist.
		if (nodes.length == h)
		{
			var node = {
				ctor: "_Array",
				height: h + 1,
				table: new Array(),
				lengths: new Array()
			};
			nodes.push(node);
		}

		nodes[h].table.push(toPush);
		var len = length(toPush);
		if (nodes[h].lengths.length > 0)
		{
			len += nodes[h].lengths[nodes[h].lengths.length - 1];
		}
		nodes[h].lengths.push(len);

		if (nodes[h].table.length == M)
		{
			fromListPush(nodes[h], nodes);
			nodes[h] = {
				ctor: "_Array",
				height: h + 1,
				table: new Array(),
				lengths: new Array()
			};
		}
	}

	// Pushes an item via push_ to the bottom right of a tree.
	function push(item, a)
	{
		var pushed = push_(item, a);
		if (pushed !== null)
		{
			return pushed;
		}

		var newTree = create(item, a.height);
		return siblise(a, newTree);
	}

	// Recursively tries to push an item to the bottom-right most
	// tree possible. If there is no space left for the item,
	// null will be returned.
	function push_(item, a)
	{
		// Handle resursion stop at leaf level.
		if (a.height == 0)
		{
			if (a.table.length < M)
			{
				var newA = {
					ctor: "_Array",
					height: 0,
					table: a.table.slice()
				};
				newA.table.push(item);
				return newA;
			}
			else
			{
			  return null;
			}
		}

		// Recursively push
		var pushed = push_(item, botRight(a));

		// There was space in the bottom right tree, so the slot will
		// be updated.
		if (pushed != null)
		{
			var newA = nodeCopy(a);
			newA.table[newA.table.length - 1] = pushed;
			newA.lengths[newA.lengths.length - 1]++;
			return newA;
		}

		// When there was no space left, check if there is space left
		// for a new slot with a tree which contains only the item
		// at the bottom.
		if (a.table.length < M)
		{
			var newSlot = create(item, a.height - 1);
			var newA = nodeCopy(a);
			newA.table.push(newSlot);
			newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
			return newA;
		}
		else
		{
			return null;
		}
	}

	// Converts an array into a list of elements.
	function toList(a)
	{
		return toList_(List.Nil, a);
	}

	function toList_(list, a)
	{
		for (var i = a.table.length - 1; i >= 0; i--)
		{
			list =
				a.height == 0
					? List.Cons(a.table[i], list)
					: toList_(list, a.table[i]);
		}
		return list;
	}

	// Maps a function over the elements of an array.
	function map(f, a)
	{
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height == 0
					? f(a.table[i])
					: map(f, a.table[i]);
		}
		return newA;
	}

	// Maps a function over the elements with their index as first argument.
	function indexedMap(f, a)
	{
		return indexedMap_(f, a, 0);
	}

	function indexedMap_(f, a, from)
	{
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height == 0
					? A2(f, from + i, a.table[i])
					: indexedMap_(f, a.table[i], i == 0 ? 0 : a.lengths[i - 1]);
		}
		return newA;
	}

	function foldl(f, b, a)
	{
		if (a.height == 0)
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = foldl(f, b, a.table[i]);
			}
		}
		return b;
	}

	function foldr(f, b, a)
	{
		if (a.height == 0)
		{
			for (var i = a.table.length; i--; )
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = a.table.length; i--; )
			{
				b = foldr(f, b, a.table[i]);
			}
		}
		return b;
	}

	// TODO: currently, it slices the right, then the left. This can be
	// optimized.
	function slice(from, to, a)
	{
		if (from < 0)
		{
			from += length(a);
		}
		if (to < 0)
		{
			to += length(a);
		}
		return sliceLeft(from, sliceRight(to, a));
	}

	function sliceRight(to, a)
	{
		if (to == length(a))
		{
			return a;
		}

		// Handle leaf level.
		if (a.height == 0)
		{
			var newA = { ctor:"_Array", height:0 };
			newA.table = a.table.slice(0, to);
			return newA;
		}

		// Slice the right recursively.
		var right = getSlot(to, a);
		var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (right == 0)
		{
			return sliced;
		}

		// Create new node.
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: a.table.slice(0, right),
			lengths: a.lengths.slice(0, right)
		};
		if (sliced.table.length > 0)
		{
			newA.table[right] = sliced;
			newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
		}
		return newA;
	}

	function sliceLeft(from, a)
	{
		if (from == 0)
		{
			return a;
		}

		// Handle leaf level.
		if (a.height == 0)
		{
			var newA = { ctor:"_Array", height:0 };
			newA.table = a.table.slice(from, a.table.length + 1);
			return newA;
		}

		// Slice the left recursively.
		var left = getSlot(from, a);
		var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (left == a.table.length - 1)
		{
			return sliced;
		}

		// Create new node.
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: a.table.slice(left, a.table.length + 1),
			lengths: new Array(a.table.length - left)
		};
		newA.table[0] = sliced;
		var len = 0;
		for (var i = 0; i < newA.table.length; i++)
		{
			len += length(newA.table[i]);
			newA.lengths[i] = len;
		}

		return newA;
	}

	// Appends two trees.
	function append(a,b)
	{
		if (a.table.length === 0)
		{
			return b;
		}
		if (b.table.length === 0)
		{
			return a;
		}

		var c = append_(a, b);

		// Check if both nodes can be crunshed together.
		if (c[0].table.length + c[1].table.length <= M)
		{
			if (c[0].table.length === 0)
			{
				return c[1];
			}
			if (c[1].table.length === 0)
			{
				return c[0];
			}

			// Adjust .table and .lengths
			c[0].table = c[0].table.concat(c[1].table);
			if (c[0].height > 0)
			{
				var len = length(c[0]);
				for (var i = 0; i < c[1].lengths.length; i++)
				{
					c[1].lengths[i] += len;
				}
				c[0].lengths = c[0].lengths.concat(c[1].lengths);
			}

			return c[0];
		}

		if (c[0].height > 0)
		{
			var toRemove = calcToRemove(a, b);
			if (toRemove > E)
			{
				c = shuffle(c[0], c[1], toRemove);
			}
		}

		return siblise(c[0], c[1]);
	}

	// Returns an array of two nodes; right and left. One node _may_ be empty.
	function append_(a, b)
	{
		if (a.height === 0 && b.height === 0)
		{
			return [a, b];
		}

		if (a.height !== 1 || b.height !== 1)
		{
			if (a.height === b.height)
			{
				a = nodeCopy(a);
				b = nodeCopy(b);
				var appended = append_(botRight(a), botLeft(b));

				insertRight(a, appended[1]);
				insertLeft(b, appended[0]);
			}
			else if (a.height > b.height)
			{
				a = nodeCopy(a);
				var appended = append_(botRight(a), b);

				insertRight(a, appended[0]);
				b = parentise(appended[1], appended[1].height + 1);
			}
			else
			{
				b = nodeCopy(b);
				var appended = append_(a, botLeft(b));

				var left = appended[0].table.length === 0 ? 0 : 1;
				var right = left === 0 ? 1 : 0;
				insertLeft(b, appended[left]);
				a = parentise(appended[right], appended[right].height + 1);
			}
		}

		// Check if balancing is needed and return based on that.
		if (a.table.length === 0 || b.table.length === 0)
		{
			return [a,b];
		}

		var toRemove = calcToRemove(a, b);
		if (toRemove <= E)
		{
			return [a,b];
		}
		return shuffle(a, b, toRemove);
	}

	// Helperfunctions for append_. Replaces a child node at the side of the parent.
	function insertRight(parent, node)
	{
		var index = parent.table.length - 1;
		parent.table[index] = node;
		parent.lengths[index] = length(node)
		parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
	}

	function insertLeft(parent, node)
	{
		if (node.table.length > 0)
		{
			parent.table[0] = node;
			parent.lengths[0] = length(node);

			var len = length(parent.table[0]);
			for (var i = 1; i < parent.lengths.length; i++)
			{
				len += length(parent.table[i]);
				parent.lengths[i] = len;
			}
		}
		else
		{
			parent.table.shift();
			for (var i = 1; i < parent.lengths.length; i++)
			{
				parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
			}
			parent.lengths.shift();
		}
	}

	// Returns the extra search steps for E. Refer to the paper.
	function calcToRemove(a, b)
	{
		var subLengths = 0;
		for (var i = 0; i < a.table.length; i++)
		{
			subLengths += a.table[i].table.length;
		}
		for (var i = 0; i < b.table.length; i++)
		{
			subLengths += b.table[i].table.length;
		}

		var toRemove = a.table.length + b.table.length
		return toRemove - (Math.floor((subLengths - 1) / M) + 1);
	}

	// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
	function get2(a, b, index)
	{
		return index < a.length
			? a[index]
			: b[index - a.length];
	}

	function set2(a, b, index, value)
	{
		if (index < a.length)
		{
			a[index] = value;
		}
		else
		{
			b[index - a.length] = value;
		}
	}

	function saveSlot(a, b, index, slot)
	{
		set2(a.table, b.table, index, slot);

		var l = (index == 0 || index == a.lengths.length)
			? 0
			: get2(a.lengths, a.lengths, index - 1);

		set2(a.lengths, b.lengths, index, l + length(slot));
	}

	// Creates a node or leaf with a given length at their arrays for perfomance.
	// Is only used by shuffle.
	function createNode(h, length)
	{
		if (length < 0)
		{
			length = 0;
		}
		var a = {
			ctor: "_Array",
			height: h,
			table: new Array(length)
		};
		if (h > 0)
		{
			a.lengths = new Array(length);
		}
		return a;
	}

	// Returns an array of two balanced nodes.
	function shuffle(a, b, toRemove)
	{
		var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
		var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

		// Skip the slots with size M. More precise: copy the slot references
		// to the new node
		var read = 0;
		while (get2(a.table, b.table, read).table.length % M == 0)
		{
			set2(newA.table, newB.table, read, get2(a.table, b.table, read));
			set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
			read++;
		}

		// Pulling items from left to right, caching in a slot before writing
		// it into the new nodes.
		var write = read;
		var slot = new createNode(a.height - 1, 0);
		var from = 0;

		// If the current slot is still containing data, then there will be at
		// least one more write, so we do not break this loop yet.
		while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
		{
			// Find out the max possible items for copying.
			var source = get2(a.table, b.table, read);
			var to = Math.min(M - slot.table.length, source.table.length)

			// Copy and adjust size table.
			slot.table = slot.table.concat(source.table.slice(from, to));
			if (slot.height > 0)
			{
				var len = slot.lengths.length;
				for (var i = len; i < len + to - from; i++)
				{
					slot.lengths[i] = length(slot.table[i]);
					slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
				}
			}

			from += to;

			// Only proceed to next slots[i] if the current one was
			// fully copied.
			if (source.table.length <= to)
			{
				read++; from = 0;
			}

			// Only create a new slot if the current one is filled up.
			if (slot.table.length == M)
			{
				saveSlot(newA, newB, write, slot);
				slot = createNode(a.height - 1,0);
				write++;
			}
		}

		// Cleanup after the loop. Copy the last slot into the new nodes.
		if (slot.table.length > 0)
		{
			saveSlot(newA, newB, write, slot);
			write++;
		}

		// Shift the untouched slots to the left
		while (read < a.table.length + b.table.length )
		{
			saveSlot(newA, newB, write, get2(a.table, b.table, read));
			read++;
			write++;
		}

		return [newA, newB];
	}

	// Navigation functions
	function botRight(a)
	{
		return a.table[a.table.length - 1];
	}
	function botLeft(a)
	{
		return a.table[0];
	}

	// Copies a node for updating. Note that you should not use this if
	// only updating only one of "table" or "lengths" for performance reasons.
	function nodeCopy(a)
	{
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: a.table.slice()
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths.slice();
		}
		return newA;
	}

	// Returns how many items are in the tree.
	function length(array)
	{
		if (array.height == 0)
		{
			return array.table.length;
		}
		else
		{
			return array.lengths[array.lengths.length - 1];
		}
	}

	// Calculates in which slot of "table" the item probably is, then
	// find the exact slot via forward searching in  "lengths". Returns the index.
	function getSlot(i, a)
	{
		var slot = i >> (5 * a.height);
		while (a.lengths[slot] <= i)
		{
			slot++;
		}
		return slot;
	}

	// Recursively creates a tree with a given height containing
	// only the given item.
	function create(item, h)
	{
		if (h == 0)
		{
			return {
				ctor: "_Array",
				height: 0,
				table: [item]
			};
		}
		return {
			ctor: "_Array",
			height: h,
			table: [create(item, h - 1)],
			lengths: [1]
		};
	}

	// Recursively creates a tree that contains the given tree.
	function parentise(tree, h)
	{
		if (h == tree.height)
		{
			return tree;
		}

		return {
			ctor: "_Array",
			height: h,
			table: [parentise(tree, h - 1)],
			lengths: [length(tree)]
		};
	}

	// Emphasizes blood brotherhood beneath two trees.
	function siblise(a, b)
	{
		return {
			ctor: "_Array",
			height: a.height + 1,
			table: [a, b],
			lengths: [length(a), length(a) + length(b)]
		};
	}

	function toJSArray(a)
	{
		var jsArray = new Array(length(a));
		toJSArray_(jsArray, 0, a);
		return jsArray;
	}

	function toJSArray_(jsArray, i, a)
	{
		for (var t = 0; t < a.table.length; t++)
		{
			if (a.height == 0)
			{
				jsArray[i + t] = a.table[t];
			}
			else
			{
				var inc = t == 0 ? 0 : a.lengths[t - 1];
				toJSArray_(jsArray, i + inc, a.table[t]);
			}
		}
	}

	function fromJSArray(jsArray)
	{
		if (jsArray.length == 0)
		{
			return empty;
		}
		var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
		return fromJSArray_(jsArray, h, 0, jsArray.length);
	}

	function fromJSArray_(jsArray, h, from, to)
	{
		if (h == 0)
		{
			return {
				ctor: "_Array",
				height: 0,
				table: jsArray.slice(from, to)
			};
		}

		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
		}
		return {
			ctor: "_Array",
			height: h,
			table: table,
			lengths: lengths
		};
	}

	Elm.Native.Array.values = {
		empty: empty,
		fromList: fromList,
		toList: toList,
		initialize: F2(initialize),
		append: F2(append),
		push: F2(push),
		slice: F3(slice),
		get: F2(get),
		set: F3(set),
		map: F2(map),
		indexedMap: F2(indexedMap),
		foldl: F3(foldl),
		foldr: F3(foldr),
		length: length,

		toJSArray:toJSArray,
		fromJSArray:fromJSArray
	};

	return localRuntime.Native.Array.values = Elm.Native.Array.values;

}

Elm.Native.Basics = {};
Elm.Native.Basics.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Basics = localRuntime.Native.Basics || {};
	if (localRuntime.Native.Basics.values)
	{
		return localRuntime.Native.Basics.values;
	}

	var Utils = Elm.Native.Utils.make(localRuntime);

	function div(a, b)
	{
		return (a/b)|0;
	}
	function rem(a, b)
	{
		return a % b;
	}
	function mod(a, b)
	{
		if (b === 0)
		{
			throw new Error("Cannot perform mod 0. Division by zero error.");
		}
		var r = a % b;
		var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r+b) : -mod(-a,-b));

		return m === b ? 0 : m;
	}
	function logBase(base, n)
	{
		return Math.log(n) / Math.log(base);
	}
	function negate(n)
	{
		return -n;
	}
	function abs(n)
	{
		return n < 0 ? -n : n;
	}

	function min(a, b)
	{
		return Utils.cmp(a,b) < 0 ? a : b;
	}
	function max(a, b)
	{
		return Utils.cmp(a,b) > 0 ? a : b;
	}
	function clamp(lo, hi, n)
	{
		return Utils.cmp(n,lo) < 0 ? lo : Utils.cmp(n,hi) > 0 ? hi : n;
	}

	function xor(a, b)
	{
		return a !== b;
	}
	function not(b)
	{
		return !b;
	}
	function isInfinite(n)
	{
		return n === Infinity || n === -Infinity
	}

	function truncate(n)
	{
		return n|0;
	}

	function degrees(d)
	{
		return d * Math.PI / 180;
	}
	function turns(t)
	{
		return 2 * Math.PI * t;
	}
	function fromPolar(point)
	{
		var r = point._0;
		var t = point._1;
		return Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
	}
	function toPolar(point)
	{
		var x = point._0;
		var y = point._1;
		return Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y,x));
	}

	return localRuntime.Native.Basics.values = {
		div: F2(div),
		rem: F2(rem),
		mod: F2(mod),

		pi: Math.PI,
		e: Math.E,
		cos: Math.cos,
		sin: Math.sin,
		tan: Math.tan,
		acos: Math.acos,
		asin: Math.asin,
		atan: Math.atan,
		atan2: F2(Math.atan2),

		degrees:  degrees,
		turns:  turns,
		fromPolar:  fromPolar,
		toPolar:  toPolar,

		sqrt: Math.sqrt,
		logBase: F2(logBase),
		negate: negate,
		abs: abs,
		min: F2(min),
		max: F2(max),
		clamp: F3(clamp),
		compare: Utils.compare,

		xor: F2(xor),
		not: not,

		truncate: truncate,
		ceiling: Math.ceil,
		floor: Math.floor,
		round: Math.round,
		toFloat: function(x) { return x; },
		isNaN: isNaN,
		isInfinite: isInfinite
	};
};

Elm.Native.Char = {};
Elm.Native.Char.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Char = localRuntime.Native.Char || {};
	if (localRuntime.Native.Char.values)
	{
		return localRuntime.Native.Char.values;
	}

	var Utils = Elm.Native.Utils.make(localRuntime);

	return localRuntime.Native.Char.values = {
		fromCode : function(c) { return Utils.chr(String.fromCharCode(c)); },
		toCode   : function(c) { return c.charCodeAt(0); },
		toUpper  : function(c) { return Utils.chr(c.toUpperCase()); },
		toLower  : function(c) { return Utils.chr(c.toLowerCase()); },
		toLocaleUpper : function(c) { return Utils.chr(c.toLocaleUpperCase()); },
		toLocaleLower : function(c) { return Utils.chr(c.toLocaleLowerCase()); },
	};
};

Elm.Native.Color = {};
Elm.Native.Color.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Color = localRuntime.Native.Color || {};
	if (localRuntime.Native.Color.values)
	{
		return localRuntime.Native.Color.values;
	}

	function toCss(c)
	{
		var format = '';
		var colors = '';
		if (c.ctor === 'RGBA')
		{
			format = 'rgb';
			colors = c._0 + ', ' + c._1 + ', ' + c._2;
		}
		else
		{
			format = 'hsl';
			colors = (c._0 * 180 / Math.PI) + ', ' +
					 (c._1 * 100) + '%, ' +
					 (c._2 * 100) + '%';
		}
		if (c._3 === 1)
		{
			return format + '(' + colors + ')';
		}
		else
		{
			return format + 'a(' + colors + ', ' + c._3 + ')';
		}
	}

	return localRuntime.Native.Color.values = {
		toCss: toCss
	};

};

Elm.Native.Debug = {};
Elm.Native.Debug.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Debug = localRuntime.Native.Debug || {};
	if (localRuntime.Native.Debug.values)
	{
		return localRuntime.Native.Debug.values;
	}

	var toString = Elm.Native.Show.make(localRuntime).toString;

	function log(tag, value)
	{
		var msg = tag + ': ' + toString(value);
		var process = process || {};
		if (process.stdout)
		{
			process.stdout.write(msg);
		}
		else
		{
			console.log(msg);
		}
		return value;
	}

	function crash(message)
	{
		throw new Error(message);
	}

	function tracePath(tag, form)
	{
		if (localRuntime.debug)
		{
			return localRuntime.debug.trace(tag, form);
		}
		return form;
	}

	function watch(tag, value)
	{
		if (localRuntime.debug)
		{
			localRuntime.debug.watch(tag, value);
		}
		return value;
	}

	function watchSummary(tag, summarize, value)
	{
		if (localRuntime.debug)
		{
			localRuntime.debug.watch(tag, summarize(value));
		}
		return value;
	}

	return localRuntime.Native.Debug.values = {
		crash: crash,
		tracePath: F2(tracePath),
		log: F2(log),
		watch: F2(watch),
		watchSummary:F3(watchSummary),
	};
};

Elm.Native.Effects = {};
Elm.Native.Effects.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Effects = localRuntime.Native.Effects || {};
	if (localRuntime.Native.Effects.values)
	{
		return localRuntime.Native.Effects.values;
	}

	var Task = Elm.Native.Task.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);
	var Signal = Elm.Signal.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);


	// polyfill so things will work even if rAF is not available for some reason
	var _requestAnimationFrame =
		typeof requestAnimationFrame !== 'undefined'
			? requestAnimationFrame
			: function(cb) { setTimeout(cb, 1000 / 60); }
			;


	// batchedSending and sendCallback implement a small state machine in order
	// to schedule only one send(time) call per animation frame.
	//
	// Invariants:
	// 1. In the NO_REQUEST state, there is never a scheduled sendCallback.
	// 2. In the PENDING_REQUEST and EXTRA_REQUEST states, there is always exactly
	//    one scheduled sendCallback.
	var NO_REQUEST = 0;
	var PENDING_REQUEST = 1;
	var EXTRA_REQUEST = 2;
	var state = NO_REQUEST;
	var messageArray = [];


	function batchedSending(address, tickMessages)
	{
		// insert ticks into the messageArray
		var foundAddress = false;

		for (var i = messageArray.length; i--; )
		{
			if (messageArray[i].address === address)
			{
				foundAddress = true;
				messageArray[i].tickMessages = A3(List.foldl, List.cons, messageArray[i].tickMessages, tickMessages);
				break;
			}
		}

		if (!foundAddress)
		{
			messageArray.push({ address: address, tickMessages: tickMessages });
		}

		// do the appropriate state transition
		switch (state)
		{
			case NO_REQUEST:
				_requestAnimationFrame(sendCallback);
				state = PENDING_REQUEST;
				break;
			case PENDING_REQUEST:
				state = PENDING_REQUEST;
				break;
			case EXTRA_REQUEST:
				state = PENDING_REQUEST;
				break;
		}
	}


	function sendCallback(time)
	{
		switch (state)
		{
			case NO_REQUEST:
				// This state should not be possible. How can there be no
				// request, yet somehow we are actively fulfilling a
				// request?
				throw new Error(
					'Unexpected send callback.\n' +
					'Please report this to <https://github.com/evancz/elm-effects/issues>.'
				);

			case PENDING_REQUEST:
				// At this point, we do not *know* that another frame is
				// needed, but we make an extra request to rAF just in
				// case. It's possible to drop a frame if rAF is called
				// too late, so we just do it preemptively.
				_requestAnimationFrame(sendCallback);
				state = EXTRA_REQUEST;

				// There's also stuff we definitely need to send.
				send(time);
				return;

			case EXTRA_REQUEST:
				// Turns out the extra request was not needed, so we will
				// stop calling rAF. No reason to call it all the time if
				// no one needs it.
				state = NO_REQUEST;
				return;
		}
	}


	function send(time)
	{
		for (var i = messageArray.length; i--; )
		{
			var messages = A3(
				List.foldl,
				F2( function(toAction, list) { return List.Cons(toAction(time), list); } ),
				List.Nil,
				messageArray[i].tickMessages
			);
			Task.perform( A2(Signal.send, messageArray[i].address, messages) );
		}
		messageArray = [];
	}


	function requestTickSending(address, tickMessages)
	{
		return Task.asyncFunction(function(callback) {
			batchedSending(address, tickMessages);
			callback(Task.succeed(Utils.Tuple0));
		});
	}


	return localRuntime.Native.Effects.values = {
		requestTickSending: F2(requestTickSending)
	};

};

/* @flow */
/* global Elm, Firebase, F2, F3, F4 */

Elm.Native.ElmFire = {};
Elm.Native.ElmFire.make = function (localRuntime) {
  "use strict";

  localRuntime.Native = localRuntime.Native || {};
  localRuntime.Native.ElmFire = localRuntime.Native.ElmFire || {};
  if (localRuntime.Native.ElmFire.values) {
    return localRuntime.Native.ElmFire.values;
  }

  var Utils = Elm.Native.Utils.make (localRuntime);
  var Task = Elm.Native.Task.make (localRuntime);
  var List = Elm.Native.List.make (localRuntime);

  var pleaseReportThis = ' Should not happen, please report this as a bug in ElmFire!';

  function asMaybe (value) {
    if (typeof value === 'undefined' || value === null) {
      return { ctor: 'Nothing' };
    } else {
      return { ctor: 'Just', _0: value };
    }
  }

  function fromMaybe (maybe) {
    return maybe.ctor === 'Nothing' ? null : maybe._0;
  }

  function priority2fb (elmPriority) {
    return elmPriority.ctor === 'NoPriority' ? null : elmPriority._0;
  }

  function priority2elm (fbPriority) {
    switch (Object.prototype.toString.call (fbPriority)) {
      case '[object Number]':
        return {ctor: 'NumberPriority', _0: fbPriority};
      case '[object String]':
        return {ctor: 'StringPriority', _0: fbPriority};
      default:
        return {ctor: 'NoPriority'};
    }
  }

  function error2elm (tag, description) {
    return {
      _: {},
      tag: { ctor: tag },
      description: description
    };
  }

  var fbErrorMap = {
    PERMISSION_DENIED: 'PermissionError',
    UNAVAILABLE: 'UnavailableError',
    TOO_BIG: 'TooBigError'
  };

  function fbTaskError (fbError) {
    var tag = fbErrorMap [fbError.code];
    if (! tag) {
      tag = 'OtherFirebaseError';
    }
    return error2elm (tag, fbError.toString ());
  }

  function fbTaskFail (fbError) {
    return Task.fail (fbTaskError (fbError));
  }

  function exTaskError (exception) {
    return error2elm ('OtherFirebaseError', exception.toString ());
  }

  function exTaskFail (exception) {
    return Task.fail (exTaskError (exception));
  }

  function onCompleteCallbackRef (callback, res) {
    return function (err) {
      if (err) {
        callback (fbTaskFail (err));
      } else {
        callback (Task.succeed (res));
      }
    };
  }

  function getRefStep (location) {
    var ref;
    switch (location.ctor) {
      case 'UrlLocation':
        ref = new Firebase (location._0);
        break;
      case 'SubLocation':
        ref = getRefStep (location._1) .child (location._0);
        break;
      case 'ParentLocation':
        ref = getRefStep (location._0) .parent ();
        if (! ref) { throw ('Error: Root has no parent'); }
        break;
      case 'RootLocation':
        ref = getRefStep (location._0) .root ();
        break;
      case 'PushLocation':
        ref = getRefStep (location._0) .push ();
        break;
      case 'RefLocation':
        ref = location._0;
        break;
    }
    if (! ref) {
     throw ('Bad Firebase reference.' + pleaseReportThis);
    }
    return ref;
  }

  function getRef (location, failureCallback) {
    var ref;
    try {
      ref = getRefStep (location);
    }
    catch (exception) {
      failureCallback (Task.fail (error2elm ('LocationError', exception.toString ())));
    }
    return ref;
  }

  function toUrl (reference) {
    return reference .toString ();
  }

  function key (reference) {
    var res = reference .key ();
    if (res === null) {
      res = '';
    }
    return res;
  }

  function open (location) {
    return Task .asyncFunction (function (callback) {
      var ref = getRef (location, callback);
      if (ref) {
        callback (Task.succeed (ref));
      }
    });
  }

  function set (onDisconnect, value, location) {
    return Task .asyncFunction (function (callback) {
      var ref = getRef (location, callback);
      if (ref) {
        var onComplete;
        if (onDisconnect) {
          ref = ref.onDisconnect ();
          onComplete = onCompleteCallbackRef (callback, Utils.Tuple0);
        } else {
          onComplete = onCompleteCallbackRef (callback, ref)
        }
        try { ref.set (value, onComplete); }
        catch (exception) { callback (exTaskFail (exception)); }
      }
    });
  }

  function setWithPriority (onDisconnect, value, priority, location) {
    return Task .asyncFunction (function (callback) {
      var ref = getRef (location, callback);
      if (ref) {
        var onComplete;
        if (onDisconnect) {
          ref = ref.onDisconnect ();
          onComplete = onCompleteCallbackRef (callback, Utils.Tuple0);
        } else {
          onComplete = onCompleteCallbackRef (callback, ref)
        }
        try { ref.setWithPriority (value, priority2fb (priority), onComplete); }
        catch (exception) { callback (exTaskFail (exception)); }
      }
    });
  }

  function setPriority (priority, location) {
    return Task .asyncFunction (function (callback) {
      var ref = getRef (location, callback);
      if (ref) {
        try {
          ref.setPriority
                (priority2fb (priority), onCompleteCallbackRef (callback, ref));
        }
        catch (exception) { callback (exTaskFail (exception)); }
      }
    });
  }

  function update (onDisconnect, value, location) {
    return Task .asyncFunction (function (callback) {
      var ref = getRef (location, callback);
      if (ref) {
        var onComplete;
        if (onDisconnect) {
          ref = ref.onDisconnect ();
          onComplete = onCompleteCallbackRef (callback, Utils.Tuple0);
        } else {
          onComplete = onCompleteCallbackRef (callback, ref)
        }
        try { ref.update (value, onComplete); }
        catch (exception) { callback (exTaskFail (exception)); }
      }
    });
  }

  function remove (onDisconnect, location) {
   return Task .asyncFunction (function (callback) {
     var ref = getRef (location, callback);
     if (ref) {
      var onComplete;
      if (onDisconnect) {
        ref = ref.onDisconnect ();
        onComplete = onCompleteCallbackRef (callback, Utils.Tuple0);
      } else {
        onComplete = onCompleteCallbackRef (callback, ref)
      }
       try { ref.remove (onComplete); }
       catch (exception) { callback (exTaskFail (exception)); }
     }
   });
 }

  function onDisconnectCancel (location) {
   return Task .asyncFunction (function (callback) {
     var ref = getRef (location, callback);
     if (ref) {
       try { ref.onDisconnect().cancel (onCompleteCallbackRef (callback, Utils.Tuple0)); }
       catch (exception) { callback (exTaskFail (exception)); }
     }
   });
 }

  function transaction (updateFunc, location, applyLocally) {
    return Task .asyncFunction (function (callback) {
      var ref = getRef (location, callback);
      if (ref) {
        var fbUpdateFunc = function (prevVal) {
          var action = updateFunc (asMaybe (prevVal));
          switch (action.ctor) {
            case 'Abort':  return;
            case 'Remove': return null;
            case 'Set':    return action._0;
            default: 	throw ('Bad action.' + pleaseReportThis);
          }
        };
        var onComplete = function (err, committed, fbSnapshot) {
          if (err) {
            callback (fbTaskFail (err));
          } else {
            var snapshot = snapshot2elm ('_transaction_', fbSnapshot, null);
            var res = Utils.Tuple2 (committed, snapshot);
            callback (Task.succeed (res));
          }
        };
        try { ref.transaction (fbUpdateFunc, onComplete, applyLocally); }
        catch (exception) {
          callback (exTaskFail (exception));
        }
      }
    });
  }

  // Store for current query subscriptions
  var sNum = 0;
  var subscriptions = {};

  function nextSubscriptionId () {
    return 'q' + (++sNum);
  }

  function queryEventType (query) {
    var eventType = 'Bad query type.' + pleaseReportThis;
    switch (query.ctor) {
      case 'ValueChanged': eventType = 'value'; break;
      case 'ChildAdded':   eventType = 'child_added'; break;
      case 'ChildChanged': eventType = 'child_changed'; break;
      case 'ChildRemoved': eventType = 'child_removed'; break;
      case 'ChildMoved':   eventType = 'child_moved'; break;
    }
    return eventType;
  }

  function queryOrderPoint (isPrio, filterFn, endPoint, ref) {
    if (isPrio) {
      var prio = priority2fb (endPoint._0);
      var key  = fromMaybe (endPoint._1);
      if (key === null) {
        ref = filterFn.call (ref, prio);
      } else {
        ref = filterFn.call (ref, prio, key);
      }
    } else {
      ref = filterFn.call (ref, endPoint);
    }
    return ref;
  }

  function queryOrderAndFilter (query, ref) {
    if (query._0) {
      var orderOptions = query._0;
      var rangeOptions = null;
      var limitOptions = null;
      switch (orderOptions.ctor) {
        case 'NoOrder':
          break;
        case 'OrderByChild':
          ref = ref.orderByChild (orderOptions._0);
          rangeOptions = orderOptions._1;
          limitOptions = orderOptions._2;
          break;
        case 'OrderByValue':
          ref = ref.orderByValue ();
          rangeOptions = orderOptions._0;
          limitOptions = orderOptions._1;
          break;
        case 'OrderByKey':
          ref = ref.orderByKey ();
          rangeOptions = orderOptions._0;
          limitOptions = orderOptions._1;
          break;
        case 'OrderByPriority':
          ref = ref.orderByPriority ();
          rangeOptions = orderOptions._0;
          limitOptions = orderOptions._1;
          break;
        default: throw ('Bad query order option.' + pleaseReportThis);
      }
      if (rangeOptions) {
        var isPrio = orderOptions.ctor === 'OrderByPriority';
        switch (rangeOptions.ctor) {
          case 'NoRange':
            break;
          case 'StartAt':
            ref = queryOrderPoint (isPrio, ref.startAt, rangeOptions._0, ref);
            break;
          case 'EndAt':
            ref = queryOrderPoint (isPrio, ref.endAt,   rangeOptions._0, ref);
            break;
          case 'Range':
            ref = queryOrderPoint (isPrio, ref.startAt, rangeOptions._0, ref);
            ref = queryOrderPoint (isPrio, ref.endAt,   rangeOptions._1, ref);
            break;
          case 'EqualTo':
            ref = queryOrderPoint (isPrio, ref.equalTo, rangeOptions._0, ref);
            break;
          default: throw ('Bad query range option.' + pleaseReportThis);
        }
      }
      if (limitOptions) {
        switch (limitOptions.ctor) {
          case 'NoLimit': break;
          case 'LimitToFirst': ref = ref.limitToFirst (limitOptions._0); break;
          case 'LimitToLast':  ref = ref.limitToLast  (limitOptions._0); break;
          default: throw ('Bad query limit option.' + pleaseReportThis);
        }
      }
    }
    return ref;
  }

  function snapshot2elm (subscription, fbSnapshot, prevKey) {
    var key = fbSnapshot .key ();
    if (key === null) {
      key = '';
    }
    var value = fbSnapshot .val ();
    return {
      _: {},
      subscription: subscription,
      key: key,
      reference: fbSnapshot .ref (),
      existing: value !== null,
      value: value,
      prevKey: asMaybe (prevKey),
      priority: priority2elm (fbSnapshot .getPriority ()),
      intern_: fbSnapshot
    };
  }

  function subscribeConditional (createResponseTask, createCancellationTask, query, location) {
    return Task .asyncFunction (function (callback) {
      var ref = getRef (location, callback);
      if (ref) {
        var subscriptionId = nextSubscriptionId ();
        var onResponse = function (fbSnapshot, prevKey) {
          var snapshot = snapshot2elm (subscriptionId, fbSnapshot, prevKey);
          var responseTask = fromMaybe (createResponseTask (snapshot));
          if (responseTask !== null) {
            Task .perform (responseTask);
          }
        };
        var onCancel = function (err) {
          var cancellation = {
            ctor: 'QueryError',
            _0: subscriptionId,
            _1: fbTaskError (err)
          };
          Task .perform (createCancellationTask (cancellation));
        };
        var eventType = queryEventType (query);
        subscriptions [subscriptionId] = {
          ref: ref,
          eventType: eventType,
          callback: onResponse,
          createCancellationTask: createCancellationTask
        };
        try { queryOrderAndFilter (query, ref)
              .on (eventType, onResponse, onCancel); }
        catch (exception) {
          callback (exTaskFail (exception));
          return;
        }
        callback (Task.succeed (subscriptionId));
      }
    });
  }

  function unsubscribe (subscription) {
    return Task .asyncFunction (function (callback) {
      if (subscriptions.hasOwnProperty (subscription)) {
        var query = subscriptions [subscription];
        delete subscriptions [subscription];
        try { query.ref.off (query.eventType, query.callback); }
        catch (exception) {
          callback (exTaskFail (exception));
          return;
        }
        Task.perform (query.createCancellationTask ({
          ctor: 'Unsubscribed', _0: subscription
        }));
        callback (Task.succeed (Utils.Tuple0));
      } else {
        callback (Task.fail ({ ctor: 'UnknownSubscription' }));
      }
    });
  }

  function once (query, location) {
    return Task .asyncFunction (function (callback) {
      var ref = getRef (location, callback);
      if (ref) {
        var onResponse = function (fbSnapshot, prevKey) {
          var snapshot = snapshot2elm ('_once_', fbSnapshot, prevKey);
          callback (Task.succeed (snapshot));
        };
        var onCancel = function (err) {
          var error = fbTaskFail (err);
          callback (error);
        };
        var eventType = queryEventType (query);
        try { queryOrderAndFilter (query, ref)
              .once (eventType, onResponse, onCancel); }
        catch (exception) {
          callback (exTaskFail (exception));
        }
      }
    });
  }

  function toSnapshotList (snapshot) {
    var arr = [], prevKey = '';
    snapshot .intern_ .forEach (function (fbChildSnapshot) {
      var childSnapshot = snapshot2elm ('_child_', fbChildSnapshot, null);
      childSnapshot .prevKey = prevKey;
      prevKey = childSnapshot .key;
      arr .push (childSnapshot);
    });
    return List.fromArray (arr);
  }

  function toListGeneric (snapshot, mapSnapshot) {
   var arr = [];
   snapshot .intern_ .forEach (function (fbChildSnapshot) {
     arr .push (mapSnapshot (fbChildSnapshot));
   });
   return List.fromArray (arr);
 }

  function toValueList (snapshot) {
    return toListGeneric (snapshot, function (fbChildSnapshot) {
      return fbChildSnapshot .val ();
    });
  }

  function toKeyList (snapshot) {
    return toListGeneric (snapshot, function (fbChildSnapshot) {
      return fbChildSnapshot .key ();
    });
  }

  function toPairList (snapshot) {
    return toListGeneric (snapshot, function (fbChildSnapshot) {
      return Utils.Tuple2 (fbChildSnapshot .key (), fbChildSnapshot .val ());
    });
  }

  function exportValue (snapshot) {
    return snapshot .intern_ .exportVal ();
  }

  function setOffline (off) {
    return Task .asyncFunction (function (callback) {
      if (off) {
        Firebase.goOffline ();
      } else {
        Firebase.goOnline ();
      }
      callback (Task.succeed (Utils.Tuple0));
    });
  }

  var serverTimeStamp = Firebase.ServerValue.TIMESTAMP;

  return localRuntime.Native.ElmFire.values =
  {
    // Values exported to Elm
      toUrl: toUrl
    , key: key
    , open: open
    ,	set: F3 (set)
    ,	setWithPriority: F4 (setWithPriority)
    ,	setPriority: F2 (setPriority)
    ,	update: F3 (update)
    ,	remove: F2 (remove)
    , onDisconnectCancel: onDisconnectCancel
    ,	transaction: F3 (transaction)
    ,	subscribeConditional: F4 (subscribeConditional)
    ,	unsubscribe: unsubscribe
    ,	once: F2 (once)
    , toSnapshotList: toSnapshotList
    ,	toValueList: toValueList
    ,	toKeyList: toKeyList
    ,	toPairList: toPairList
    , exportValue: exportValue
    , setOffline: setOffline
    , serverTimeStamp: serverTimeStamp

    // Utilities for sub-modules
    , asMaybe: asMaybe
    , getRef: getRef
    , pleaseReportThis: pleaseReportThis
  };
};

/*! @license Firebase v2.2.9
    License: https://www.firebase.com/terms/terms-of-service.html */
(function() {var g,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.vb=function(){return a.uf?a.uf:a.uf=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}var la=Date.now||function(){return+new Date};
function ma(a,b){function c(){}c.prototype=b.prototype;a.$g=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Wg=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function r(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function na(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function oa(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function pa(a){var b=0,c;for(c in a)b++;return b}function qa(a){for(var b in a)return b}function ra(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function sa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function ta(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function ua(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function va(a,b){var c=ua(a,b,void 0);return c&&a[c]}function wa(a){for(var b in a)return!1;return!0}function xa(a){var b={},c;for(c in a)b[c]=a[c];return b}var ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function za(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ya.length;f++)c=ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Aa(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Ba(){this.Sd=void 0}
function Ca(a,b,c){switch(typeof b){case "string":Da(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ca(a,a.Sd?a.Sd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Da(f,c),
c.push(":"),Ca(a,a.Sd?a.Sd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Ea={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function Da(a,b){b.push('"',a.replace(Fa,function(a){if(a in Ea)return Ea[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Ea[a]=e+b.toString(16)}),'"')};function Ga(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^la()).toString(36)};var Ha;a:{var Ia=aa.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){Ha=Ja;break a}}Ha=""};function Ka(){this.Wa=-1};function La(){this.Wa=-1;this.Wa=64;this.P=[];this.ne=[];this.Uf=[];this.Ld=[];this.Ld[0]=128;for(var a=1;a<this.Wa;++a)this.Ld[a]=0;this.ee=this.ac=0;this.reset()}ma(La,Ka);La.prototype.reset=function(){this.P[0]=1732584193;this.P[1]=4023233417;this.P[2]=2562383102;this.P[3]=271733878;this.P[4]=3285377520;this.ee=this.ac=0};
function Ma(a,b,c){c||(c=0);var d=a.Uf;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.P[0];c=a.P[1];for(var h=a.P[2],k=a.P[3],l=a.P[4],m,e=0;80>e;e++)40>e?20>e?(f=k^c&(h^k),m=1518500249):(f=c^h^k,m=1859775393):60>e?(f=c&h|k&(c|h),m=2400959708):(f=c^h^k,m=3395469782),f=(b<<
5|b>>>27)+f+l+m+d[e]&4294967295,l=k,k=h,h=(c<<30|c>>>2)&4294967295,c=b,b=f;a.P[0]=a.P[0]+b&4294967295;a.P[1]=a.P[1]+c&4294967295;a.P[2]=a.P[2]+h&4294967295;a.P[3]=a.P[3]+k&4294967295;a.P[4]=a.P[4]+l&4294967295}
La.prototype.update=function(a,b){if(null!=a){n(b)||(b=a.length);for(var c=b-this.Wa,d=0,e=this.ne,f=this.ac;d<b;){if(0==f)for(;d<=c;)Ma(this,a,d),d+=this.Wa;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Wa){Ma(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Wa){Ma(this,e);f=0;break}}this.ac=f;this.ee+=b}};var u=Array.prototype,Na=u.indexOf?function(a,b,c){return u.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Oa=u.forEach?function(a,b,c){u.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Pa=u.filter?function(a,b,c){return u.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},Qa=u.map?function(a,b,c){return u.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},Ra=u.reduce?function(a,b,c,d){for(var e=[],f=1,h=arguments.length;f<h;f++)e.push(arguments[f]);d&&(e[0]=q(b,d));return u.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Oa(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Sa=u.every?function(a,b,
c){return u.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Ta(a,b){var c=Ua(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Ua(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Va(a,b){var c=Na(a,b);0<=c&&u.splice.call(a,c,1)}function Wa(a,b,c){return 2>=arguments.length?u.slice.call(a,b):u.slice.call(a,b,c)}
function Xa(a,b){a.sort(b||Ya)}function Ya(a,b){return a>b?1:a<b?-1:0};var Za=-1!=Ha.indexOf("Opera")||-1!=Ha.indexOf("OPR"),$a=-1!=Ha.indexOf("Trident")||-1!=Ha.indexOf("MSIE"),ab=-1!=Ha.indexOf("Gecko")&&-1==Ha.toLowerCase().indexOf("webkit")&&!(-1!=Ha.indexOf("Trident")||-1!=Ha.indexOf("MSIE")),bb=-1!=Ha.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(Za&&aa.opera)return a=aa.opera.version,ha(a)?a():a;ab?b=/rv\:([^\);]+)(\)|;)/:$a?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:bb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Ha))?a[1]:"");return $a&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var cb=null,db=null,eb=null;function fb(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");gb();for(var c=b?db:cb,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,k=h?a[e+1]:0,l=e+2<a.length,m=l?a[e+2]:0,t=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|m>>6,m=m&63;l||(m=64,h||(k=64));d.push(c[t],c[f],c[k],c[m])}return d.join("")}
function gb(){if(!cb){cb={};db={};eb={};for(var a=0;65>a;a++)cb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),db[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),eb[db[a]]=a,62<=a&&(eb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};var hb=hb||"2.2.9";function v(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function ib(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function jb(a){var b={};ib(a,function(a,d){b[a]=d});return b};function kb(a){var b=[];ib(a,function(a,d){ea(d)?Oa(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""}function lb(a){var b={};a=a.replace(/^\?/,"").split("&");Oa(a,function(a){a&&(a=a.split("="),b[a[0]]=a[1])});return b};function x(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function z(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function A(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(z(a,b,d)+"must be a valid function.");}function mb(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(z(a,b,!0)+"must be a valid context object.");};function nb(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):Aa(a)}function B(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ca(new Ba,a,b);a=b.join("")}return a};function ob(){this.Wd=C}ob.prototype.j=function(a){return this.Wd.Y(a)};ob.prototype.toString=function(){return this.Wd.toString()};function pb(){}pb.prototype.qf=function(){return null};pb.prototype.ze=function(){return null};var qb=new pb;function rb(a,b,c){this.Rf=a;this.Ka=b;this.Kd=c}rb.prototype.qf=function(a){var b=this.Ka.Q;if(sb(b,a))return b.j().J(a);b=null!=this.Kd?new tb(this.Kd,!0,!1):this.Ka.C();return this.Rf.xc(a,b)};rb.prototype.ze=function(a,b,c){var d=null!=this.Kd?this.Kd:ub(this.Ka);a=this.Rf.oe(d,b,1,c,a);return 0===a.length?null:a[0]};function vb(){this.ub=[]}function wb(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Zb();null===c||f.ca(c.Zb())||(a.ub.push(c),c=null);null===c&&(c=new xb(f));c.add(e)}c&&a.ub.push(c)}function yb(a,b,c){wb(a,c);zb(a,function(a){return a.ca(b)})}function Ab(a,b,c){wb(a,c);zb(a,function(a){return a.contains(b)||b.contains(a)})}
function zb(a,b){for(var c=!0,d=0;d<a.ub.length;d++){var e=a.ub[d];if(e)if(e=e.Zb(),b(e)){for(var e=a.ub[d],f=0;f<e.vd.length;f++){var h=e.vd[f];if(null!==h){e.vd[f]=null;var k=h.Vb();Bb&&Cb("event: "+h.toString());Db(k)}}a.ub[d]=null}else c=!1}c&&(a.ub=[])}function xb(a){this.ra=a;this.vd=[]}xb.prototype.add=function(a){this.vd.push(a)};xb.prototype.Zb=function(){return this.ra};function D(a,b,c,d){this.type=a;this.Ja=b;this.Xa=c;this.Le=d;this.Qd=void 0}function Eb(a){return new D(Fb,a)}var Fb="value";function Gb(a,b,c,d){this.ve=b;this.$d=c;this.Qd=d;this.ud=a}Gb.prototype.Zb=function(){var a=this.$d.mc();return"value"===this.ud?a.path:a.parent().path};Gb.prototype.Ae=function(){return this.ud};Gb.prototype.Vb=function(){return this.ve.Vb(this)};Gb.prototype.toString=function(){return this.Zb().toString()+":"+this.ud+":"+B(this.$d.mf())};function Hb(a,b,c){this.ve=a;this.error=b;this.path=c}Hb.prototype.Zb=function(){return this.path};Hb.prototype.Ae=function(){return"cancel"};
Hb.prototype.Vb=function(){return this.ve.Vb(this)};Hb.prototype.toString=function(){return this.path.toString()+":cancel"};function tb(a,b,c){this.w=a;this.ea=b;this.Ub=c}function Ib(a){return a.ea}function Jb(a,b){return b.e()?a.ea&&!a.Ub:sb(a,E(b))}function sb(a,b){return a.ea&&!a.Ub||a.w.Da(b)}tb.prototype.j=function(){return this.w};function Kb(a){this.eg=a;this.Dd=null}Kb.prototype.get=function(){var a=this.eg.get(),b=xa(a);if(this.Dd)for(var c in this.Dd)b[c]-=this.Dd[c];this.Dd=a;return b};function Lb(a,b){this.Nf={};this.fd=new Kb(a);this.ba=b;var c=1E4+2E4*Math.random();setTimeout(q(this.If,this),Math.floor(c))}Lb.prototype.If=function(){var a=this.fd.get(),b={},c=!1,d;for(d in a)0<a[d]&&v(this.Nf,d)&&(b[d]=a[d],c=!0);c&&this.ba.Ve(b);setTimeout(q(this.If,this),Math.floor(6E5*Math.random()))};function Mb(){this.Ec={}}function Nb(a,b,c){n(c)||(c=1);v(a.Ec,b)||(a.Ec[b]=0);a.Ec[b]+=c}Mb.prototype.get=function(){return xa(this.Ec)};var Ob={},Pb={};function Qb(a){a=a.toString();Ob[a]||(Ob[a]=new Mb);return Ob[a]}function Rb(a,b){var c=a.toString();Pb[c]||(Pb[c]=b());return Pb[c]};function F(a,b){this.name=a;this.S=b}function Sb(a,b){return new F(a,b)};function Tb(a,b){return Ub(a.name,b.name)}function Vb(a,b){return Ub(a,b)};function Wb(a,b,c){this.type=Xb;this.source=a;this.path=b;this.Ga=c}Wb.prototype.Xc=function(a){return this.path.e()?new Wb(this.source,G,this.Ga.J(a)):new Wb(this.source,H(this.path),this.Ga)};Wb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ga.toString()+")"};function Yb(a,b){this.type=Zb;this.source=a;this.path=b}Yb.prototype.Xc=function(){return this.path.e()?new Yb(this.source,G):new Yb(this.source,H(this.path))};Yb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function $b(a,b){this.La=a;this.wa=b?b:ac}g=$b.prototype;g.Oa=function(a,b){return new $b(this.La,this.wa.Oa(a,b,this.La).X(null,null,!1,null,null))};g.remove=function(a){return new $b(this.La,this.wa.remove(a,this.La).X(null,null,!1,null,null))};g.get=function(a){for(var b,c=this.wa;!c.e();){b=this.La(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function bc(a,b){for(var c,d=a.wa,e=null;!d.e();){c=a.La(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}g.e=function(){return this.wa.e()};g.count=function(){return this.wa.count()};g.Sc=function(){return this.wa.Sc()};g.fc=function(){return this.wa.fc()};g.ia=function(a){return this.wa.ia(a)};
g.Xb=function(a){return new cc(this.wa,null,this.La,!1,a)};g.Yb=function(a,b){return new cc(this.wa,a,this.La,!1,b)};g.$b=function(a,b){return new cc(this.wa,a,this.La,!0,b)};g.sf=function(a){return new cc(this.wa,null,this.La,!0,a)};function cc(a,b,c,d,e){this.Ud=e||null;this.Ge=d;this.Qa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.Ge?a.left:a.right;else if(0===e){this.Qa.push(a);break}else this.Qa.push(a),a=this.Ge?a.right:a.left}
function J(a){if(0===a.Qa.length)return null;var b=a.Qa.pop(),c;c=a.Ud?a.Ud(b.key,b.value):{key:b.key,value:b.value};if(a.Ge)for(b=b.left;!b.e();)a.Qa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Qa.push(b),b=b.left;return c}function dc(a){if(0===a.Qa.length)return null;var b;b=a.Qa;b=b[b.length-1];return a.Ud?a.Ud(b.key,b.value):{key:b.key,value:b.value}}function ec(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:ac;this.right=null!=e?e:ac}g=ec.prototype;
g.X=function(a,b,c,d,e){return new ec(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};g.count=function(){return this.left.count()+1+this.right.count()};g.e=function(){return!1};g.ia=function(a){return this.left.ia(a)||a(this.key,this.value)||this.right.ia(a)};function fc(a){return a.left.e()?a:fc(a.left)}g.Sc=function(){return fc(this).key};g.fc=function(){return this.right.e()?this.key:this.right.fc()};
g.Oa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.X(null,null,null,e.left.Oa(a,b,c),null):0===d?e.X(null,b,null,null,null):e.X(null,null,null,null,e.right.Oa(a,b,c));return gc(e)};function hc(a){if(a.left.e())return ac;a.left.fa()||a.left.left.fa()||(a=ic(a));a=a.X(null,null,null,hc(a.left),null);return gc(a)}
g.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.fa()||c.left.left.fa()||(c=ic(c)),c=c.X(null,null,null,c.left.remove(a,b),null);else{c.left.fa()&&(c=jc(c));c.right.e()||c.right.fa()||c.right.left.fa()||(c=kc(c),c.left.left.fa()&&(c=jc(c),c=kc(c)));if(0===b(a,c.key)){if(c.right.e())return ac;d=fc(c.right);c=c.X(d.key,d.value,null,null,hc(c.right))}c=c.X(null,null,null,null,c.right.remove(a,b))}return gc(c)};g.fa=function(){return this.color};
function gc(a){a.right.fa()&&!a.left.fa()&&(a=lc(a));a.left.fa()&&a.left.left.fa()&&(a=jc(a));a.left.fa()&&a.right.fa()&&(a=kc(a));return a}function ic(a){a=kc(a);a.right.left.fa()&&(a=a.X(null,null,null,null,jc(a.right)),a=lc(a),a=kc(a));return a}function lc(a){return a.right.X(null,null,a.color,a.X(null,null,!0,null,a.right.left),null)}function jc(a){return a.left.X(null,null,a.color,null,a.X(null,null,!0,a.left.right,null))}
function kc(a){return a.X(null,null,!a.color,a.left.X(null,null,!a.left.color,null,null),a.right.X(null,null,!a.right.color,null,null))}function mc(){}g=mc.prototype;g.X=function(){return this};g.Oa=function(a,b){return new ec(a,b,null)};g.remove=function(){return this};g.count=function(){return 0};g.e=function(){return!0};g.ia=function(){return!1};g.Sc=function(){return null};g.fc=function(){return null};g.fa=function(){return!1};var ac=new mc;function nc(a,b){return a&&"object"===typeof a?(K(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function oc(a,b){var c=new pc;qc(a,new L(""),function(a,e){c.nc(a,rc(e,b))});return c}function rc(a,b){var c=a.B().H(),c=nc(c,b),d;if(a.L()){var e=nc(a.Ca(),b);return e!==a.Ca()||c!==a.B().H()?new sc(e,M(c)):a}d=a;c!==a.B().H()&&(d=d.ga(new sc(c)));a.R(N,function(a,c){var e=rc(c,b);e!==c&&(d=d.O(a,e))});return d};function L(a,b){if(1==arguments.length){this.n=a.split("/");for(var c=0,d=0;d<this.n.length;d++)0<this.n[d].length&&(this.n[c]=this.n[d],c++);this.n.length=c;this.Z=0}else this.n=a,this.Z=b}function O(a,b){var c=E(a);if(null===c)return b;if(c===E(b))return O(H(a),H(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}function E(a){return a.Z>=a.n.length?null:a.n[a.Z]}function tc(a){return a.n.length-a.Z}
function H(a){var b=a.Z;b<a.n.length&&b++;return new L(a.n,b)}function uc(a){return a.Z<a.n.length?a.n[a.n.length-1]:null}g=L.prototype;g.toString=function(){for(var a="",b=this.Z;b<this.n.length;b++)""!==this.n[b]&&(a+="/"+this.n[b]);return a||"/"};g.slice=function(a){return this.n.slice(this.Z+(a||0))};g.parent=function(){if(this.Z>=this.n.length)return null;for(var a=[],b=this.Z;b<this.n.length-1;b++)a.push(this.n[b]);return new L(a,0)};
g.u=function(a){for(var b=[],c=this.Z;c<this.n.length;c++)b.push(this.n[c]);if(a instanceof L)for(c=a.Z;c<a.n.length;c++)b.push(a.n[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new L(b,0)};g.e=function(){return this.Z>=this.n.length};g.ca=function(a){if(tc(this)!==tc(a))return!1;for(var b=this.Z,c=a.Z;b<=this.n.length;b++,c++)if(this.n[b]!==a.n[c])return!1;return!0};
g.contains=function(a){var b=this.Z,c=a.Z;if(tc(this)>tc(a))return!1;for(;b<this.n.length;){if(this.n[b]!==a.n[c])return!1;++b;++c}return!0};var G=new L("");function vc(a,b){this.Ra=a.slice();this.Ha=Math.max(1,this.Ra.length);this.lf=b;for(var c=0;c<this.Ra.length;c++)this.Ha+=wc(this.Ra[c]);xc(this)}vc.prototype.push=function(a){0<this.Ra.length&&(this.Ha+=1);this.Ra.push(a);this.Ha+=wc(a);xc(this)};vc.prototype.pop=function(){var a=this.Ra.pop();this.Ha-=wc(a);0<this.Ra.length&&--this.Ha};
function xc(a){if(768<a.Ha)throw Error(a.lf+"has a key path longer than 768 bytes ("+a.Ha+").");if(32<a.Ra.length)throw Error(a.lf+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+yc(a));}function yc(a){return 0==a.Ra.length?"":"in property '"+a.Ra.join(".")+"'"};function zc(){this.wc={}}zc.prototype.set=function(a,b){null==b?delete this.wc[a]:this.wc[a]=b};zc.prototype.get=function(a){return v(this.wc,a)?this.wc[a]:null};zc.prototype.remove=function(a){delete this.wc[a]};zc.prototype.wf=!0;function Ac(a){this.Fc=a;this.Pd="firebase:"}g=Ac.prototype;g.set=function(a,b){null==b?this.Fc.removeItem(this.Pd+a):this.Fc.setItem(this.Pd+a,B(b))};g.get=function(a){a=this.Fc.getItem(this.Pd+a);return null==a?null:nb(a)};g.remove=function(a){this.Fc.removeItem(this.Pd+a)};g.wf=!1;g.toString=function(){return this.Fc.toString()};function Bc(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new Ac(b)}}catch(c){}return new zc}var Cc=Bc("localStorage"),P=Bc("sessionStorage");function Dc(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.lb=b;this.Db=c;this.Ug=d;this.Od=e||"";this.Pa=Cc.get("host:"+a)||this.host}function Ec(a,b){b!==a.Pa&&(a.Pa=b,"s-"===a.Pa.substr(0,2)&&Cc.set("host:"+a.host,a.Pa))}Dc.prototype.toString=function(){var a=(this.lb?"https://":"http://")+this.host;this.Od&&(a+="<"+this.Od+">");return a};var Fc=function(){var a=1;return function(){return a++}}();function K(a,b){if(!a)throw Gc(b);}function Gc(a){return Error("Firebase ("+hb+") INTERNAL ASSERT FAILED: "+a)}
function Hc(a){try{var b;if("undefined"!==typeof atob)b=atob(a);else{gb();for(var c=eb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],h=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var l=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==h||null==k||null==l)throw Error();d.push(f<<2|h>>4);64!=k&&(d.push(h<<4&240|k>>2),64!=l&&d.push(k<<6&192|l))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Wa(d,c,
c+8192));b=a}}return b}catch(m){Cb("base64Decode failed: ",m)}return null}function Ic(a){var b=Jc(a);a=new La;a.update(b);var b=[],c=8*a.ee;56>a.ac?a.update(a.Ld,56-a.ac):a.update(a.Ld,a.Wa-(a.ac-56));for(var d=a.Wa-1;56<=d;d--)a.ne[d]=c&255,c/=256;Ma(a,a.ne);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.P[d]>>e&255,++c;return fb(b)}
function Kc(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+Kc.apply(null,arguments[c]):"object"===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=" ";return b}var Bb=null,Lc=!0;function Cb(a){!0===Lc&&(Lc=!1,null===Bb&&!0===P.get("logging_enabled")&&Mc(!0));if(Bb){var b=Kc.apply(null,arguments);Bb(b)}}function Nc(a){return function(){Cb(a,arguments)}}
function Oc(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Kc.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Pc(a){var b=Kc.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function Q(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Kc.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function Qc(a){var b="",c="",d="",e="",f=!0,h="https",k=443;if(p(a)){var l=a.indexOf("//");0<=l&&(h=a.substring(0,l-1),a=a.substring(l+2));l=a.indexOf("/");-1===l&&(l=a.length);b=a.substring(0,l);e="";a=a.substring(l).split("/");for(l=0;l<a.length;l++)if(0<a[l].length){var m=a[l];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(t){}e+="/"+m}a=b.split(".");3===a.length?(c=a[1],d=a[0].toLowerCase()):2===a.length&&(c=a[0]);l=b.indexOf(":");0<=l&&(f="https"===h||"wss"===h,k=b.substring(l+1),isFinite(k)&&
(k=String(k)),k=p(k)?/^\s*-?0x/i.test(k)?parseInt(k,16):parseInt(k,10):NaN)}return{host:b,port:k,domain:c,Rg:d,lb:f,scheme:h,$c:e}}function Rc(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function Sc(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function Ub(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=Tc(a),d=Tc(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function Uc(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+B(b));}
function Vc(a){if("object"!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=B(b[d]),c+=":",c+=Vc(a[b[d]]);return c+"}"}function Wc(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function Xc(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else r(a,b)}
function Yc(a){K(!Rc(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var Zc=/^-?\d{1,10}$/;function Tc(a){return Zc.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Db(a){try{a()}catch(b){setTimeout(function(){Q("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function R(a,b){if(ha(a)){var c=Array.prototype.slice.call(arguments,1).slice();Db(function(){a.apply(null,c)})}};function Jc(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,K(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function wc(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function $c(a){var b={},c={},d={},e="";try{var f=a.split("."),b=nb(Hc(f[0])||""),c=nb(Hc(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(h){}return{Xg:b,Bc:c,data:d,Og:e}}function ad(a){a=$c(a).Bc;return"object"===typeof a&&a.hasOwnProperty("iat")?w(a,"iat"):null}function bd(a){a=$c(a);var b=a.Bc;return!!a.Og&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")};function cd(a){this.V=a;this.g=a.o.g}function dd(a,b,c,d){var e=[],f=[];Oa(b,function(b){"child_changed"===b.type&&a.g.Ad(b.Le,b.Ja)&&f.push(new D("child_moved",b.Ja,b.Xa))});ed(a,e,"child_removed",b,d,c);ed(a,e,"child_added",b,d,c);ed(a,e,"child_moved",f,d,c);ed(a,e,"child_changed",b,d,c);ed(a,e,Fb,b,d,c);return e}function ed(a,b,c,d,e,f){d=Pa(d,function(a){return a.type===c});Xa(d,q(a.fg,a));Oa(d,function(c){var d=fd(a,c,f);Oa(e,function(e){e.Kf(c.type)&&b.push(e.createEvent(d,a.V))})})}
function fd(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Qd=c.rf(b.Xa,b.Ja,a.g));return b}cd.prototype.fg=function(a,b){if(null==a.Xa||null==b.Xa)throw Gc("Should only compare child_ events.");return this.g.compare(new F(a.Xa,a.Ja),new F(b.Xa,b.Ja))};function gd(){this.bb={}}
function hd(a,b){var c=b.type,d=b.Xa;K("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");K(".priority"!==d,"Only non-priority child changes can be tracked.");var e=w(a.bb,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.bb[d]=new D("child_changed",b.Ja,d,e.Ja);else if("child_removed"==c&&"child_added"==f)delete a.bb[d];else if("child_removed"==c&&"child_changed"==f)a.bb[d]=new D("child_removed",e.Le,d);else if("child_changed"==c&&
"child_added"==f)a.bb[d]=new D("child_added",b.Ja,d);else if("child_changed"==c&&"child_changed"==f)a.bb[d]=new D("child_changed",b.Ja,d,e.Le);else throw Gc("Illegal combination of changes: "+b+" occurred after "+e);}else a.bb[d]=b};function id(a,b,c){this.Rb=a;this.qb=b;this.sb=c||null}g=id.prototype;g.Kf=function(a){return"value"===a};g.createEvent=function(a,b){var c=b.o.g;return new Gb("value",this,new S(a.Ja,b.mc(),c))};g.Vb=function(a){var b=this.sb;if("cancel"===a.Ae()){K(this.qb,"Raising a cancel event on a listener with no cancel callback");var c=this.qb;return function(){c.call(b,a.error)}}var d=this.Rb;return function(){d.call(b,a.$d)}};g.gf=function(a,b){return this.qb?new Hb(this,a,b):null};
g.matches=function(a){return a instanceof id?a.Rb&&this.Rb?a.Rb===this.Rb&&a.sb===this.sb:!0:!1};g.tf=function(){return null!==this.Rb};function jd(a,b,c){this.ha=a;this.qb=b;this.sb=c}g=jd.prototype;g.Kf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ha};g.gf=function(a,b){return this.qb?new Hb(this,a,b):null};
g.createEvent=function(a,b){K(null!=a.Xa,"Child events should have a childName.");var c=b.mc().u(a.Xa);return new Gb(a.type,this,new S(a.Ja,c,b.o.g),a.Qd)};g.Vb=function(a){var b=this.sb;if("cancel"===a.Ae()){K(this.qb,"Raising a cancel event on a listener with no cancel callback");var c=this.qb;return function(){c.call(b,a.error)}}var d=this.ha[a.ud];return function(){d.call(b,a.$d,a.Qd)}};
g.matches=function(a){if(a instanceof jd){if(!this.ha||!a.ha)return!0;if(this.sb===a.sb){var b=pa(a.ha);if(b===pa(this.ha)){if(1===b){var b=qa(a.ha),c=qa(this.ha);return c===b&&(!a.ha[b]||!this.ha[c]||a.ha[b]===this.ha[c])}return oa(this.ha,function(b,c){return a.ha[c]===b})}}}return!1};g.tf=function(){return null!==this.ha};function kd(a){this.g=a}g=kd.prototype;g.K=function(a,b,c,d,e,f){K(a.Jc(this.g),"A node must be indexed if only a child is updated");e=a.J(b);if(e.Y(d).ca(c.Y(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Da(b)?hd(f,new D("child_removed",e,b)):K(a.L(),"A child remove without an old child only makes sense on a leaf node"):e.e()?hd(f,new D("child_added",c,b)):hd(f,new D("child_changed",c,b,e)));return a.L()&&c.e()?a:a.O(b,c).mb(this.g)};
g.xa=function(a,b,c){null!=c&&(a.L()||a.R(N,function(a,e){b.Da(a)||hd(c,new D("child_removed",e,a))}),b.L()||b.R(N,function(b,e){if(a.Da(b)){var f=a.J(b);f.ca(e)||hd(c,new D("child_changed",e,b,f))}else hd(c,new D("child_added",e,b))}));return b.mb(this.g)};g.ga=function(a,b){return a.e()?C:a.ga(b)};g.Na=function(){return!1};g.Wb=function(){return this};function ld(a){this.Ce=new kd(a.g);this.g=a.g;var b;a.ma?(b=md(a),b=a.g.Pc(nd(a),b)):b=a.g.Tc();this.ed=b;a.pa?(b=od(a),a=a.g.Pc(pd(a),b)):a=a.g.Qc();this.Gc=a}g=ld.prototype;g.matches=function(a){return 0>=this.g.compare(this.ed,a)&&0>=this.g.compare(a,this.Gc)};g.K=function(a,b,c,d,e,f){this.matches(new F(b,c))||(c=C);return this.Ce.K(a,b,c,d,e,f)};
g.xa=function(a,b,c){b.L()&&(b=C);var d=b.mb(this.g),d=d.ga(C),e=this;b.R(N,function(a,b){e.matches(new F(a,b))||(d=d.O(a,C))});return this.Ce.xa(a,d,c)};g.ga=function(a){return a};g.Na=function(){return!0};g.Wb=function(){return this.Ce};function qd(a){this.sa=new ld(a);this.g=a.g;K(a.ja,"Only valid if limit has been set");this.ka=a.ka;this.Jb=!rd(a)}g=qd.prototype;g.K=function(a,b,c,d,e,f){this.sa.matches(new F(b,c))||(c=C);return a.J(b).ca(c)?a:a.Eb()<this.ka?this.sa.Wb().K(a,b,c,d,e,f):sd(this,a,b,c,e,f)};
g.xa=function(a,b,c){var d;if(b.L()||b.e())d=C.mb(this.g);else if(2*this.ka<b.Eb()&&b.Jc(this.g)){d=C.mb(this.g);b=this.Jb?b.$b(this.sa.Gc,this.g):b.Yb(this.sa.ed,this.g);for(var e=0;0<b.Qa.length&&e<this.ka;){var f=J(b),h;if(h=this.Jb?0>=this.g.compare(this.sa.ed,f):0>=this.g.compare(f,this.sa.Gc))d=d.O(f.name,f.S),e++;else break}}else{d=b.mb(this.g);d=d.ga(C);var k,l,m;if(this.Jb){b=d.sf(this.g);k=this.sa.Gc;l=this.sa.ed;var t=td(this.g);m=function(a,b){return t(b,a)}}else b=d.Xb(this.g),k=this.sa.ed,
l=this.sa.Gc,m=td(this.g);for(var e=0,y=!1;0<b.Qa.length;)f=J(b),!y&&0>=m(k,f)&&(y=!0),(h=y&&e<this.ka&&0>=m(f,l))?e++:d=d.O(f.name,C)}return this.sa.Wb().xa(a,d,c)};g.ga=function(a){return a};g.Na=function(){return!0};g.Wb=function(){return this.sa.Wb()};
function sd(a,b,c,d,e,f){var h;if(a.Jb){var k=td(a.g);h=function(a,b){return k(b,a)}}else h=td(a.g);K(b.Eb()==a.ka,"");var l=new F(c,d),m=a.Jb?ud(b,a.g):vd(b,a.g),t=a.sa.matches(l);if(b.Da(c)){for(var y=b.J(c),m=e.ze(a.g,m,a.Jb);null!=m&&(m.name==c||b.Da(m.name));)m=e.ze(a.g,m,a.Jb);e=null==m?1:h(m,l);if(t&&!d.e()&&0<=e)return null!=f&&hd(f,new D("child_changed",d,c,y)),b.O(c,d);null!=f&&hd(f,new D("child_removed",y,c));b=b.O(c,C);return null!=m&&a.sa.matches(m)?(null!=f&&hd(f,new D("child_added",
m.S,m.name)),b.O(m.name,m.S)):b}return d.e()?b:t&&0<=h(m,l)?(null!=f&&(hd(f,new D("child_removed",m.S,m.name)),hd(f,new D("child_added",d,c))),b.O(c,d).O(m.name,C)):b};function wd(a,b){this.ke=a;this.dg=b}function yd(a){this.U=a}
yd.prototype.ab=function(a,b,c,d){var e=new gd,f;if(b.type===Xb)b.source.xe?c=zd(this,a,b.path,b.Ga,c,d,e):(K(b.source.pf,"Unknown source."),f=b.source.bf,c=Ad(this,a,b.path,b.Ga,c,d,f,e));else if(b.type===Bd)b.source.xe?c=Cd(this,a,b.path,b.children,c,d,e):(K(b.source.pf,"Unknown source."),f=b.source.bf,c=Dd(this,a,b.path,b.children,c,d,f,e));else if(b.type===Ed)if(b.Vd)if(b=b.path,null!=c.tc(b))c=a;else{f=new rb(c,a,d);d=a.Q.j();if(b.e()||".priority"===E(b))Ib(a.C())?b=c.za(ub(a)):(b=a.C().j(),
K(b instanceof T,"serverChildren would be complete if leaf node"),b=c.yc(b)),b=this.U.xa(d,b,e);else{var h=E(b),k=c.xc(h,a.C());null==k&&sb(a.C(),h)&&(k=d.J(h));b=null!=k?this.U.K(d,h,k,H(b),f,e):a.Q.j().Da(h)?this.U.K(d,h,C,H(b),f,e):d;b.e()&&Ib(a.C())&&(d=c.za(ub(a)),d.L()&&(b=this.U.xa(b,d,e)))}d=Ib(a.C())||null!=c.tc(G);c=Fd(a,b,d,this.U.Na())}else c=Gd(this,a,b.path,b.Qb,c,d,e);else if(b.type===Zb)d=b.path,b=a.C(),f=b.j(),h=b.ea||d.e(),c=Hd(this,new Id(a.Q,new tb(f,h,b.Ub)),d,c,qb,e);else throw Gc("Unknown operation type: "+
b.type);e=ra(e.bb);d=c;b=d.Q;b.ea&&(f=b.j().L()||b.j().e(),h=Jd(a),(0<e.length||!a.Q.ea||f&&!b.j().ca(h)||!b.j().B().ca(h.B()))&&e.push(Eb(Jd(d))));return new wd(c,e)};
function Hd(a,b,c,d,e,f){var h=b.Q;if(null!=d.tc(c))return b;var k;if(c.e())K(Ib(b.C()),"If change path is empty, we must have complete server data"),b.C().Ub?(e=ub(b),d=d.yc(e instanceof T?e:C)):d=d.za(ub(b)),f=a.U.xa(b.Q.j(),d,f);else{var l=E(c);if(".priority"==l)K(1==tc(c),"Can't have a priority with additional path components"),f=h.j(),k=b.C().j(),d=d.ld(c,f,k),f=null!=d?a.U.ga(f,d):h.j();else{var m=H(c);sb(h,l)?(k=b.C().j(),d=d.ld(c,h.j(),k),d=null!=d?h.j().J(l).K(m,d):h.j().J(l)):d=d.xc(l,b.C());
f=null!=d?a.U.K(h.j(),l,d,m,e,f):h.j()}}return Fd(b,f,h.ea||c.e(),a.U.Na())}function Ad(a,b,c,d,e,f,h,k){var l=b.C();h=h?a.U:a.U.Wb();if(c.e())d=h.xa(l.j(),d,null);else if(h.Na()&&!l.Ub)d=l.j().K(c,d),d=h.xa(l.j(),d,null);else{var m=E(c);if(!Jb(l,c)&&1<tc(c))return b;var t=H(c);d=l.j().J(m).K(t,d);d=".priority"==m?h.ga(l.j(),d):h.K(l.j(),m,d,t,qb,null)}l=l.ea||c.e();b=new Id(b.Q,new tb(d,l,h.Na()));return Hd(a,b,c,e,new rb(e,b,f),k)}
function zd(a,b,c,d,e,f,h){var k=b.Q;e=new rb(e,b,f);if(c.e())h=a.U.xa(b.Q.j(),d,h),a=Fd(b,h,!0,a.U.Na());else if(f=E(c),".priority"===f)h=a.U.ga(b.Q.j(),d),a=Fd(b,h,k.ea,k.Ub);else{c=H(c);var l=k.j().J(f);if(!c.e()){var m=e.qf(f);d=null!=m?".priority"===uc(c)&&m.Y(c.parent()).e()?m:m.K(c,d):C}l.ca(d)?a=b:(h=a.U.K(k.j(),f,d,c,e,h),a=Fd(b,h,k.ea,a.U.Na()))}return a}
function Cd(a,b,c,d,e,f,h){var k=b;Kd(d,function(d,m){var t=c.u(d);sb(b.Q,E(t))&&(k=zd(a,k,t,m,e,f,h))});Kd(d,function(d,m){var t=c.u(d);sb(b.Q,E(t))||(k=zd(a,k,t,m,e,f,h))});return k}function Ld(a,b){Kd(b,function(b,d){a=a.K(b,d)});return a}
function Dd(a,b,c,d,e,f,h,k){if(b.C().j().e()&&!Ib(b.C()))return b;var l=b;c=c.e()?d:Md(Nd,c,d);var m=b.C().j();c.children.ia(function(c,d){if(m.Da(c)){var I=b.C().j().J(c),I=Ld(I,d);l=Ad(a,l,new L(c),I,e,f,h,k)}});c.children.ia(function(c,d){var I=!sb(b.C(),c)&&null==d.value;m.Da(c)||I||(I=b.C().j().J(c),I=Ld(I,d),l=Ad(a,l,new L(c),I,e,f,h,k))});return l}
function Gd(a,b,c,d,e,f,h){if(null!=e.tc(c))return b;var k=b.C();if(null!=d.value){if(c.e()&&k.ea||Jb(k,c))return Ad(a,b,c,k.j().Y(c),e,f,!1,h);if(c.e()){var l=Nd;k.j().R(Od,function(a,b){l=l.set(new L(a),b)});return Dd(a,b,c,l,e,f,!1,h)}return b}l=Nd;Kd(d,function(a){var b=c.u(a);Jb(k,b)&&(l=l.set(a,k.j().Y(b)))});return Dd(a,b,c,l,e,f,!1,h)};function Pd(){}var Qd={};function td(a){return q(a.compare,a)}Pd.prototype.Ad=function(a,b){return 0!==this.compare(new F("[MIN_NAME]",a),new F("[MIN_NAME]",b))};Pd.prototype.Tc=function(){return Rd};function Sd(a){this.cc=a}ma(Sd,Pd);g=Sd.prototype;g.Ic=function(a){return!a.J(this.cc).e()};g.compare=function(a,b){var c=a.S.J(this.cc),d=b.S.J(this.cc),c=c.Dc(d);return 0===c?Ub(a.name,b.name):c};g.Pc=function(a,b){var c=M(a),c=C.O(this.cc,c);return new F(b,c)};
g.Qc=function(){var a=C.O(this.cc,Td);return new F("[MAX_NAME]",a)};g.toString=function(){return this.cc};function Ud(){}ma(Ud,Pd);g=Ud.prototype;g.compare=function(a,b){var c=a.S.B(),d=b.S.B(),c=c.Dc(d);return 0===c?Ub(a.name,b.name):c};g.Ic=function(a){return!a.B().e()};g.Ad=function(a,b){return!a.B().ca(b.B())};g.Tc=function(){return Rd};g.Qc=function(){return new F("[MAX_NAME]",new sc("[PRIORITY-POST]",Td))};g.Pc=function(a,b){var c=M(a);return new F(b,new sc("[PRIORITY-POST]",c))};
g.toString=function(){return".priority"};var N=new Ud;function Vd(){}ma(Vd,Pd);g=Vd.prototype;g.compare=function(a,b){return Ub(a.name,b.name)};g.Ic=function(){throw Gc("KeyIndex.isDefinedOn not expected to be called.");};g.Ad=function(){return!1};g.Tc=function(){return Rd};g.Qc=function(){return new F("[MAX_NAME]",C)};g.Pc=function(a){K(p(a),"KeyIndex indexValue must always be a string.");return new F(a,C)};g.toString=function(){return".key"};var Od=new Vd;function Wd(){}ma(Wd,Pd);g=Wd.prototype;
g.compare=function(a,b){var c=a.S.Dc(b.S);return 0===c?Ub(a.name,b.name):c};g.Ic=function(){return!0};g.Ad=function(a,b){return!a.ca(b)};g.Tc=function(){return Rd};g.Qc=function(){return Xd};g.Pc=function(a,b){var c=M(a);return new F(b,c)};g.toString=function(){return".value"};var Yd=new Wd;function Zd(){this.Tb=this.pa=this.Lb=this.ma=this.ja=!1;this.ka=0;this.Nb="";this.ec=null;this.yb="";this.bc=null;this.wb="";this.g=N}var $d=new Zd;function rd(a){return""===a.Nb?a.ma:"l"===a.Nb}function nd(a){K(a.ma,"Only valid if start has been set");return a.ec}function md(a){K(a.ma,"Only valid if start has been set");return a.Lb?a.yb:"[MIN_NAME]"}function pd(a){K(a.pa,"Only valid if end has been set");return a.bc}
function od(a){K(a.pa,"Only valid if end has been set");return a.Tb?a.wb:"[MAX_NAME]"}function ae(a){var b=new Zd;b.ja=a.ja;b.ka=a.ka;b.ma=a.ma;b.ec=a.ec;b.Lb=a.Lb;b.yb=a.yb;b.pa=a.pa;b.bc=a.bc;b.Tb=a.Tb;b.wb=a.wb;b.g=a.g;return b}g=Zd.prototype;g.Ie=function(a){var b=ae(this);b.ja=!0;b.ka=a;b.Nb="";return b};g.Je=function(a){var b=ae(this);b.ja=!0;b.ka=a;b.Nb="l";return b};g.Ke=function(a){var b=ae(this);b.ja=!0;b.ka=a;b.Nb="r";return b};
g.ae=function(a,b){var c=ae(this);c.ma=!0;n(a)||(a=null);c.ec=a;null!=b?(c.Lb=!0,c.yb=b):(c.Lb=!1,c.yb="");return c};g.td=function(a,b){var c=ae(this);c.pa=!0;n(a)||(a=null);c.bc=a;n(b)?(c.Tb=!0,c.wb=b):(c.Zg=!1,c.wb="");return c};function be(a,b){var c=ae(a);c.g=b;return c}function ce(a){var b={};a.ma&&(b.sp=a.ec,a.Lb&&(b.sn=a.yb));a.pa&&(b.ep=a.bc,a.Tb&&(b.en=a.wb));if(a.ja){b.l=a.ka;var c=a.Nb;""===c&&(c=rd(a)?"l":"r");b.vf=c}a.g!==N&&(b.i=a.g.toString());return b}
function de(a){return!(a.ma||a.pa||a.ja)}function ee(a){var b={};if(de(a)&&a.g==N)return b;var c;a.g===N?c="$priority":a.g===Yd?c="$value":a.g===Od?c="$key":(K(a.g instanceof Sd,"Unrecognized index type!"),c=a.g.toString());b.orderBy=B(c);a.ma&&(b.startAt=B(a.ec),a.Lb&&(b.startAt+=","+B(a.yb)));a.pa&&(b.endAt=B(a.bc),a.Tb&&(b.endAt+=","+B(a.wb)));a.ja&&(rd(a)?b.limitToFirst=a.ka:b.limitToLast=a.ka);return b}g.toString=function(){return B(ce(this))};function fe(a,b){this.Bd=a;this.dc=b}fe.prototype.get=function(a){var b=w(this.Bd,a);if(!b)throw Error("No index defined for "+a);return b===Qd?null:b};function ge(a,b,c){var d=na(a.Bd,function(d,f){var h=w(a.dc,f);K(h,"Missing index implementation for "+f);if(d===Qd){if(h.Ic(b.S)){for(var k=[],l=c.Xb(Sb),m=J(l);m;)m.name!=b.name&&k.push(m),m=J(l);k.push(b);return he(k,td(h))}return Qd}h=c.get(b.name);k=d;h&&(k=k.remove(new F(b.name,h)));return k.Oa(b,b.S)});return new fe(d,a.dc)}
function ie(a,b,c){var d=na(a.Bd,function(a){if(a===Qd)return a;var d=c.get(b.name);return d?a.remove(new F(b.name,d)):a});return new fe(d,a.dc)}var je=new fe({".priority":Qd},{".priority":N});function sc(a,b){this.A=a;K(n(this.A)&&null!==this.A,"LeafNode shouldn't be created with null/undefined value.");this.aa=b||C;ke(this.aa);this.Cb=null}var le=["object","boolean","number","string"];g=sc.prototype;g.L=function(){return!0};g.B=function(){return this.aa};g.ga=function(a){return new sc(this.A,a)};g.J=function(a){return".priority"===a?this.aa:C};g.Y=function(a){return a.e()?this:".priority"===E(a)?this.aa:C};g.Da=function(){return!1};g.rf=function(){return null};
g.O=function(a,b){return".priority"===a?this.ga(b):b.e()&&".priority"!==a?this:C.O(a,b).ga(this.aa)};g.K=function(a,b){var c=E(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;K(".priority"!==c||1===tc(a),".priority must be the last token in a path");return this.O(c,C.K(H(a),b))};g.e=function(){return!1};g.Eb=function(){return 0};g.R=function(){return!1};g.H=function(a){return a&&!this.B().e()?{".value":this.Ca(),".priority":this.B().H()}:this.Ca()};
g.hash=function(){if(null===this.Cb){var a="";this.aa.e()||(a+="priority:"+me(this.aa.H())+":");var b=typeof this.A,a=a+(b+":"),a="number"===b?a+Yc(this.A):a+this.A;this.Cb=Ic(a)}return this.Cb};g.Ca=function(){return this.A};g.Dc=function(a){if(a===C)return 1;if(a instanceof T)return-1;K(a.L(),"Unknown node type");var b=typeof a.A,c=typeof this.A,d=Na(le,b),e=Na(le,c);K(0<=d,"Unknown leaf type: "+b);K(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.A<a.A?-1:this.A===a.A?0:1:e-d};
g.mb=function(){return this};g.Jc=function(){return!0};g.ca=function(a){return a===this?!0:a.L()?this.A===a.A&&this.aa.ca(a.aa):!1};g.toString=function(){return B(this.H(!0))};function T(a,b,c){this.m=a;(this.aa=b)&&ke(this.aa);a.e()&&K(!this.aa||this.aa.e(),"An empty node cannot have a priority");this.xb=c;this.Cb=null}g=T.prototype;g.L=function(){return!1};g.B=function(){return this.aa||C};g.ga=function(a){return this.m.e()?this:new T(this.m,a,this.xb)};g.J=function(a){if(".priority"===a)return this.B();a=this.m.get(a);return null===a?C:a};g.Y=function(a){var b=E(a);return null===b?this:this.J(b).Y(H(a))};g.Da=function(a){return null!==this.m.get(a)};
g.O=function(a,b){K(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.ga(b);var c=new F(a,b),d,e;b.e()?(d=this.m.remove(a),c=ie(this.xb,c,this.m)):(d=this.m.Oa(a,b),c=ge(this.xb,c,this.m));e=d.e()?C:this.aa;return new T(d,e,c)};g.K=function(a,b){var c=E(a);if(null===c)return b;K(".priority"!==E(a)||1===tc(a),".priority must be the last token in a path");var d=this.J(c).K(H(a),b);return this.O(c,d)};g.e=function(){return this.m.e()};g.Eb=function(){return this.m.count()};
var ne=/^(0|[1-9]\d*)$/;g=T.prototype;g.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.R(N,function(f,h){b[f]=h.H(a);c++;e&&ne.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&!this.B().e()&&(b[".priority"]=this.B().H());return b};g.hash=function(){if(null===this.Cb){var a="";this.B().e()||(a+="priority:"+me(this.B().H())+":");this.R(N,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Cb=""===a?"":Ic(a)}return this.Cb};
g.rf=function(a,b,c){return(c=oe(this,c))?(a=bc(c,new F(a,b)))?a.name:null:bc(this.m,a)};function ud(a,b){var c;c=(c=oe(a,b))?(c=c.Sc())&&c.name:a.m.Sc();return c?new F(c,a.m.get(c)):null}function vd(a,b){var c;c=(c=oe(a,b))?(c=c.fc())&&c.name:a.m.fc();return c?new F(c,a.m.get(c)):null}g.R=function(a,b){var c=oe(this,a);return c?c.ia(function(a){return b(a.name,a.S)}):this.m.ia(b)};g.Xb=function(a){return this.Yb(a.Tc(),a)};
g.Yb=function(a,b){var c=oe(this,b);if(c)return c.Yb(a,function(a){return a});for(var c=this.m.Yb(a.name,Sb),d=dc(c);null!=d&&0>b.compare(d,a);)J(c),d=dc(c);return c};g.sf=function(a){return this.$b(a.Qc(),a)};g.$b=function(a,b){var c=oe(this,b);if(c)return c.$b(a,function(a){return a});for(var c=this.m.$b(a.name,Sb),d=dc(c);null!=d&&0<b.compare(d,a);)J(c),d=dc(c);return c};g.Dc=function(a){return this.e()?a.e()?0:-1:a.L()||a.e()?1:a===Td?-1:0};
g.mb=function(a){if(a===Od||ta(this.xb.dc,a.toString()))return this;var b=this.xb,c=this.m;K(a!==Od,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Xb(Sb),f=J(c);f;)e=e||a.Ic(f.S),d.push(f),f=J(c);d=e?he(d,td(a)):Qd;e=a.toString();c=xa(b.dc);c[e]=a;a=xa(b.Bd);a[e]=d;return new T(this.m,this.aa,new fe(a,c))};g.Jc=function(a){return a===Od||ta(this.xb.dc,a.toString())};
g.ca=function(a){if(a===this)return!0;if(a.L())return!1;if(this.B().ca(a.B())&&this.m.count()===a.m.count()){var b=this.Xb(N);a=a.Xb(N);for(var c=J(b),d=J(a);c&&d;){if(c.name!==d.name||!c.S.ca(d.S))return!1;c=J(b);d=J(a)}return null===c&&null===d}return!1};function oe(a,b){return b===Od?null:a.xb.get(b.toString())}g.toString=function(){return B(this.H(!0))};function M(a,b){if(null===a)return C;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);K(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new sc(a,M(c));if(a instanceof Array){var d=C,e=a;r(e,function(a,b){if(v(e,b)&&"."!==b.substring(0,1)){var c=M(a);if(c.L()||!c.e())d=
d.O(b,c)}});return d.ga(M(c))}var f=[],h=!1,k=a;ib(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=M(k[a]);b.e()||(h=h||!b.B().e(),f.push(new F(a,b)))}});if(0==f.length)return C;var l=he(f,Tb,function(a){return a.name},Vb);if(h){var m=he(f,td(N));return new T(l,M(c),new fe({".priority":m},{".priority":N}))}return new T(l,M(c),je)}var pe=Math.log(2);
function qe(a){this.count=parseInt(Math.log(a+1)/pe,10);this.jf=this.count-1;this.cg=a+1&parseInt(Array(this.count+1).join("1"),2)}function re(a){var b=!(a.cg&1<<a.jf);a.jf--;return b}
function he(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var m=a[b],t=c?c(m):m;return new ec(t,m.S,!1,null,null)}var m=parseInt(f/2,10)+b,f=e(b,m),y=e(m+1,d),m=a[m],t=c?c(m):m;return new ec(t,m.S,!1,f,y)}a.sort(b);var f=function(b){function d(b,h){var k=t-b,y=t;t-=b;var y=e(k+1,y),k=a[k],I=c?c(k):k,y=new ec(I,k.S,h,null,y);f?f.left=y:m=y;f=y}for(var f=null,m=null,t=a.length,y=0;y<b.count;++y){var I=re(b),xd=Math.pow(2,b.count-(y+1));I?d(xd,!1):(d(xd,!1),d(xd,!0))}return m}(new qe(a.length));
return null!==f?new $b(d||b,f):new $b(d||b)}function me(a){return"number"===typeof a?"number:"+Yc(a):"string:"+a}function ke(a){if(a.L()){var b=a.H();K("string"===typeof b||"number"===typeof b||"object"===typeof b&&v(b,".sv"),"Priority must be a string or number.")}else K(a===Td||a.e(),"priority of unexpected type.");K(a===Td||a.B().e(),"Priority nodes can't have a priority of their own.")}var C=new T(new $b(Vb),null,je);function se(){T.call(this,new $b(Vb),C,je)}ma(se,T);g=se.prototype;
g.Dc=function(a){return a===this?0:1};g.ca=function(a){return a===this};g.B=function(){return this};g.J=function(){return C};g.e=function(){return!1};var Td=new se,Rd=new F("[MIN_NAME]",C),Xd=new F("[MAX_NAME]",Td);function Id(a,b){this.Q=a;this.Yd=b}function Fd(a,b,c,d){return new Id(new tb(b,c,d),a.Yd)}function Jd(a){return a.Q.ea?a.Q.j():null}Id.prototype.C=function(){return this.Yd};function ub(a){return a.Yd.ea?a.Yd.j():null};function te(a,b){this.V=a;var c=a.o,d=new kd(c.g),c=de(c)?new kd(c.g):c.ja?new qd(c):new ld(c);this.Hf=new yd(c);var e=b.C(),f=b.Q,h=d.xa(C,e.j(),null),k=c.xa(C,f.j(),null);this.Ka=new Id(new tb(k,f.ea,c.Na()),new tb(h,e.ea,d.Na()));this.Ya=[];this.jg=new cd(a)}function ue(a){return a.V}g=te.prototype;g.C=function(){return this.Ka.C().j()};g.gb=function(a){var b=ub(this.Ka);return b&&(de(this.V.o)||!a.e()&&!b.J(E(a)).e())?b.Y(a):null};g.e=function(){return 0===this.Ya.length};g.Pb=function(a){this.Ya.push(a)};
g.kb=function(a,b){var c=[];if(b){K(null==a,"A cancel should cancel all event registrations.");var d=this.V.path;Oa(this.Ya,function(a){(a=a.gf(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Ya.length;++f){var h=this.Ya[f];if(!h.matches(a))e.push(h);else if(a.tf()){e=e.concat(this.Ya.slice(f+1));break}}this.Ya=e}else this.Ya=[];return c};
g.ab=function(a,b,c){a.type===Bd&&null!==a.source.Ib&&(K(ub(this.Ka),"We should always have a full cache before handling merges"),K(Jd(this.Ka),"Missing event cache, even though we have a server cache"));var d=this.Ka;a=this.Hf.ab(d,a,b,c);b=this.Hf;c=a.ke;K(c.Q.j().Jc(b.U.g),"Event snap not indexed");K(c.C().j().Jc(b.U.g),"Server snap not indexed");K(Ib(a.ke.C())||!Ib(d.C()),"Once a server snap is complete, it should never go back");this.Ka=a.ke;return ve(this,a.dg,a.ke.Q.j(),null)};
function we(a,b){var c=a.Ka.Q,d=[];c.j().L()||c.j().R(N,function(a,b){d.push(new D("child_added",b,a))});c.ea&&d.push(Eb(c.j()));return ve(a,d,c.j(),b)}function ve(a,b,c,d){return dd(a.jg,b,c,d?[d]:a.Ya)};function xe(a,b,c){this.type=Bd;this.source=a;this.path=b;this.children=c}xe.prototype.Xc=function(a){if(this.path.e())return a=this.children.subtree(new L(a)),a.e()?null:a.value?new Wb(this.source,G,a.value):new xe(this.source,G,a);K(E(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new xe(this.source,H(this.path),this.children)};xe.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function ye(a,b){this.f=Nc("p:rest:");this.F=a;this.Hb=b;this.Aa=null;this.$={}}function ze(a,b){if(n(b))return"tag$"+b;var c=a.o;K(de(c)&&c.g==N,"should have a tag if it's not a default query.");return a.path.toString()}g=ye.prototype;
g.yf=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.va());var f=ze(a,c),h={};this.$[f]=h;a=ee(a.o);var k=this;Ae(this,e+".json",a,function(a,b){var t=b;404===a&&(a=t=null);null===a&&k.Hb(e,t,!1,c);w(k.$,f)===h&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};g.Pf=function(a,b){var c=ze(a,b);delete this.$[c]};g.N=function(a,b){this.Aa=a;var c=$c(a),d=c.data,c=c.Bc&&c.Bc.exp;b&&b("ok",{auth:d,expires:c})};g.he=function(a){this.Aa=null;a("ok",null)};g.Ne=function(){};
g.Cf=function(){};g.Jd=function(){};g.put=function(){};g.zf=function(){};g.Ve=function(){};
function Ae(a,b,c,d){c=c||{};c.format="export";a.Aa&&(c.auth=a.Aa);var e=(a.F.lb?"https://":"http://")+a.F.host+b+"?"+kb(c);a.f("Sending REST request for "+e);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(d&&4===f.readyState){a.f("REST Response for "+e+" received. status:",f.status,"response:",f.responseText);var b=null;if(200<=f.status&&300>f.status){try{b=nb(f.responseText)}catch(c){Q("Failed to parse JSON response for "+e+": "+f.responseText)}d(null,b)}else 401!==f.status&&404!==
f.status&&Q("Got unsuccessful REST response for "+e+" Status: "+f.status),d(f.status);d=null}};f.open("GET",e,!0);f.send()};function Be(a,b){this.value=a;this.children=b||Ce}var Ce=new $b(function(a,b){return a===b?0:a<b?-1:1});function De(a){var b=Nd;r(a,function(a,d){b=b.set(new L(d),a)});return b}g=Be.prototype;g.e=function(){return null===this.value&&this.children.e()};function Ee(a,b,c){if(null!=a.value&&c(a.value))return{path:G,value:a.value};if(b.e())return null;var d=E(b);a=a.children.get(d);return null!==a?(b=Ee(a,H(b),c),null!=b?{path:(new L(d)).u(b.path),value:b.value}:null):null}
function Fe(a,b){return Ee(a,b,function(){return!0})}g.subtree=function(a){if(a.e())return this;var b=this.children.get(E(a));return null!==b?b.subtree(H(a)):Nd};g.set=function(a,b){if(a.e())return new Be(b,this.children);var c=E(a),d=(this.children.get(c)||Nd).set(H(a),b),c=this.children.Oa(c,d);return new Be(this.value,c)};
g.remove=function(a){if(a.e())return this.children.e()?Nd:new Be(null,this.children);var b=E(a),c=this.children.get(b);return c?(a=c.remove(H(a)),b=a.e()?this.children.remove(b):this.children.Oa(b,a),null===this.value&&b.e()?Nd:new Be(this.value,b)):this};g.get=function(a){if(a.e())return this.value;var b=this.children.get(E(a));return b?b.get(H(a)):null};
function Md(a,b,c){if(b.e())return c;var d=E(b);b=Md(a.children.get(d)||Nd,H(b),c);d=b.e()?a.children.remove(d):a.children.Oa(d,b);return new Be(a.value,d)}function Ge(a,b){return He(a,G,b)}function He(a,b,c){var d={};a.children.ia(function(a,f){d[a]=He(f,b.u(a),c)});return c(b,a.value,d)}function Ie(a,b,c){return Je(a,b,G,c)}function Je(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=E(b);return(a=a.children.get(e))?Je(a,H(b),c.u(e),d):null}
function Ke(a,b,c){var d=G;if(!b.e()){var e=!0;a.value&&(e=c(d,a.value));!0===e&&(e=E(b),(a=a.children.get(e))&&Le(a,H(b),d.u(e),c))}}function Le(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=E(b);return(a=a.children.get(e))?Le(a,H(b),c.u(e),d):Nd}function Kd(a,b){Me(a,G,b)}function Me(a,b,c){a.children.ia(function(a,e){Me(e,b.u(a),c)});a.value&&c(b,a.value)}function Ne(a,b){a.children.ia(function(a,d){d.value&&b(a,d.value)})}var Nd=new Be(null);
Be.prototype.toString=function(){var a={};Kd(this,function(b,c){a[b.toString()]=c.toString()});return B(a)};function Oe(a,b,c){this.type=Ed;this.source=Pe;this.path=a;this.Qb=b;this.Vd=c}Oe.prototype.Xc=function(a){if(this.path.e()){if(null!=this.Qb.value)return K(this.Qb.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Qb.subtree(new L(a));return new Oe(G,a,this.Vd)}K(E(this.path)===a,"operationForChild called for unrelated child.");return new Oe(H(this.path),this.Qb,this.Vd)};
Oe.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Vd+" affectedTree="+this.Qb+")"};var Xb=0,Bd=1,Ed=2,Zb=3;function Qe(a,b,c,d){this.xe=a;this.pf=b;this.Ib=c;this.bf=d;K(!d||b,"Tagged queries must be from server.")}var Pe=new Qe(!0,!1,null,!1),Re=new Qe(!1,!0,null,!1);Qe.prototype.toString=function(){return this.xe?"user":this.bf?"server(queryID="+this.Ib+")":"server"};function Se(a){this.W=a}var Te=new Se(new Be(null));function Ue(a,b,c){if(b.e())return new Se(new Be(c));var d=Fe(a.W,b);if(null!=d){var e=d.path,d=d.value;b=O(e,b);d=d.K(b,c);return new Se(a.W.set(e,d))}a=Md(a.W,b,new Be(c));return new Se(a)}function Ve(a,b,c){var d=a;ib(c,function(a,c){d=Ue(d,b.u(a),c)});return d}Se.prototype.Rd=function(a){if(a.e())return Te;a=Md(this.W,a,Nd);return new Se(a)};function We(a,b){var c=Fe(a.W,b);return null!=c?a.W.get(c.path).Y(O(c.path,b)):null}
function Xe(a){var b=[],c=a.W.value;null!=c?c.L()||c.R(N,function(a,c){b.push(new F(a,c))}):a.W.children.ia(function(a,c){null!=c.value&&b.push(new F(a,c.value))});return b}function Ye(a,b){if(b.e())return a;var c=We(a,b);return null!=c?new Se(new Be(c)):new Se(a.W.subtree(b))}Se.prototype.e=function(){return this.W.e()};Se.prototype.apply=function(a){return Ze(G,this.W,a)};
function Ze(a,b,c){if(null!=b.value)return c.K(a,b.value);var d=null;b.children.ia(function(b,f){".priority"===b?(K(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Ze(a.u(b),f,c)});c.Y(a).e()||null===d||(c=c.K(a.u(".priority"),d));return c};function $e(){this.T=Te;this.na=[];this.Mc=-1}function af(a,b){for(var c=0;c<a.na.length;c++){var d=a.na[c];if(d.kd===b)return d}return null}g=$e.prototype;
g.Rd=function(a){var b=Ua(this.na,function(b){return b.kd===a});K(0<=b,"removeWrite called with nonexistent writeId.");var c=this.na[b];this.na.splice(b,1);for(var d=c.visible,e=!1,f=this.na.length-1;d&&0<=f;){var h=this.na[f];h.visible&&(f>=b&&bf(h,c.path)?d=!1:c.path.contains(h.path)&&(e=!0));f--}if(d){if(e)this.T=cf(this.na,df,G),this.Mc=0<this.na.length?this.na[this.na.length-1].kd:-1;else if(c.Ga)this.T=this.T.Rd(c.path);else{var k=this;r(c.children,function(a,b){k.T=k.T.Rd(c.path.u(b))})}return!0}return!1};
g.za=function(a,b,c,d){if(c||d){var e=Ye(this.T,a);return!d&&e.e()?b:d||null!=b||null!=We(e,G)?(e=cf(this.na,function(b){return(b.visible||d)&&(!c||!(0<=Na(c,b.kd)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||C,e.apply(b)):null}e=We(this.T,a);if(null!=e)return e;e=Ye(this.T,a);return e.e()?b:null!=b||null!=We(e,G)?(b=b||C,e.apply(b)):null};
g.yc=function(a,b){var c=C,d=We(this.T,a);if(d)d.L()||d.R(N,function(a,b){c=c.O(a,b)});else if(b){var e=Ye(this.T,a);b.R(N,function(a,b){var d=Ye(e,new L(a)).apply(b);c=c.O(a,d)});Oa(Xe(e),function(a){c=c.O(a.name,a.S)})}else e=Ye(this.T,a),Oa(Xe(e),function(a){c=c.O(a.name,a.S)});return c};g.ld=function(a,b,c,d){K(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.u(b);if(null!=We(this.T,a))return null;a=Ye(this.T,a);return a.e()?d.Y(b):a.apply(d.Y(b))};
g.xc=function(a,b,c){a=a.u(b);var d=We(this.T,a);return null!=d?d:sb(c,b)?Ye(this.T,a).apply(c.j().J(b)):null};g.tc=function(a){return We(this.T,a)};g.oe=function(a,b,c,d,e,f){var h;a=Ye(this.T,a);h=We(a,G);if(null==h)if(null!=b)h=a.apply(b);else return[];h=h.mb(f);if(h.e()||h.L())return[];b=[];a=td(f);e=e?h.$b(c,f):h.Yb(c,f);for(f=J(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=J(e);return b};
function bf(a,b){return a.Ga?a.path.contains(b):!!ua(a.children,function(c,d){return a.path.u(d).contains(b)})}function df(a){return a.visible}
function cf(a,b,c){for(var d=Te,e=0;e<a.length;++e){var f=a[e];if(b(f)){var h=f.path;if(f.Ga)c.contains(h)?(h=O(c,h),d=Ue(d,h,f.Ga)):h.contains(c)&&(h=O(h,c),d=Ue(d,G,f.Ga.Y(h)));else if(f.children)if(c.contains(h))h=O(c,h),d=Ve(d,h,f.children);else{if(h.contains(c))if(h=O(h,c),h.e())d=Ve(d,G,f.children);else if(f=w(f.children,E(h)))f=f.Y(H(h)),d=Ue(d,G,f)}else throw Gc("WriteRecord should have .snap or .children");}}return d}function ef(a,b){this.Mb=a;this.W=b}g=ef.prototype;
g.za=function(a,b,c){return this.W.za(this.Mb,a,b,c)};g.yc=function(a){return this.W.yc(this.Mb,a)};g.ld=function(a,b,c){return this.W.ld(this.Mb,a,b,c)};g.tc=function(a){return this.W.tc(this.Mb.u(a))};g.oe=function(a,b,c,d,e){return this.W.oe(this.Mb,a,b,c,d,e)};g.xc=function(a,b){return this.W.xc(this.Mb,a,b)};g.u=function(a){return new ef(this.Mb.u(a),this.W)};function ff(){this.ya={}}g=ff.prototype;g.e=function(){return wa(this.ya)};g.ab=function(a,b,c){var d=a.source.Ib;if(null!==d)return d=w(this.ya,d),K(null!=d,"SyncTree gave us an op for an invalid query."),d.ab(a,b,c);var e=[];r(this.ya,function(d){e=e.concat(d.ab(a,b,c))});return e};g.Pb=function(a,b,c,d,e){var f=a.va(),h=w(this.ya,f);if(!h){var h=c.za(e?d:null),k=!1;h?k=!0:(h=d instanceof T?c.yc(d):C,k=!1);h=new te(a,new Id(new tb(h,k,!1),new tb(d,e,!1)));this.ya[f]=h}h.Pb(b);return we(h,b)};
g.kb=function(a,b,c){var d=a.va(),e=[],f=[],h=null!=gf(this);if("default"===d){var k=this;r(this.ya,function(a,d){f=f.concat(a.kb(b,c));a.e()&&(delete k.ya[d],de(a.V.o)||e.push(a.V))})}else{var l=w(this.ya,d);l&&(f=f.concat(l.kb(b,c)),l.e()&&(delete this.ya[d],de(l.V.o)||e.push(l.V)))}h&&null==gf(this)&&e.push(new U(a.k,a.path));return{Ig:e,kg:f}};function hf(a){return Pa(ra(a.ya),function(a){return!de(a.V.o)})}g.gb=function(a){var b=null;r(this.ya,function(c){b=b||c.gb(a)});return b};
function jf(a,b){if(de(b.o))return gf(a);var c=b.va();return w(a.ya,c)}function gf(a){return va(a.ya,function(a){return de(a.V.o)})||null};function kf(a){this.ta=Nd;this.jb=new $e;this.af={};this.lc={};this.Nc=a}function lf(a,b,c,d,e){var f=a.jb,h=e;K(d>f.Mc,"Stacking an older write on top of newer ones");n(h)||(h=!0);f.na.push({path:b,Ga:c,kd:d,visible:h});h&&(f.T=Ue(f.T,b,c));f.Mc=d;return e?mf(a,new Wb(Pe,b,c)):[]}function nf(a,b,c,d){var e=a.jb;K(d>e.Mc,"Stacking an older merge on top of newer ones");e.na.push({path:b,children:c,kd:d,visible:!0});e.T=Ve(e.T,b,c);e.Mc=d;c=De(c);return mf(a,new xe(Pe,b,c))}
function of(a,b,c){c=c||!1;var d=af(a.jb,b);if(a.jb.Rd(b)){var e=Nd;null!=d.Ga?e=e.set(G,!0):ib(d.children,function(a,b){e=e.set(new L(a),b)});return mf(a,new Oe(d.path,e,c))}return[]}function pf(a,b,c){c=De(c);return mf(a,new xe(Re,b,c))}function qf(a,b,c,d){d=rf(a,d);if(null!=d){var e=sf(d);d=e.path;e=e.Ib;b=O(d,b);c=new Wb(new Qe(!1,!0,e,!0),b,c);return tf(a,d,c)}return[]}
function uf(a,b,c,d){if(d=rf(a,d)){var e=sf(d);d=e.path;e=e.Ib;b=O(d,b);c=De(c);c=new xe(new Qe(!1,!0,e,!0),b,c);return tf(a,d,c)}return[]}
kf.prototype.Pb=function(a,b){var c=a.path,d=null,e=!1;Ke(this.ta,c,function(a,b){var f=O(a,c);d=b.gb(f);e=e||null!=gf(b);return!d});var f=this.ta.get(c);f?(e=e||null!=gf(f),d=d||f.gb(G)):(f=new ff,this.ta=this.ta.set(c,f));var h;null!=d?h=!0:(h=!1,d=C,Ne(this.ta.subtree(c),function(a,b){var c=b.gb(G);c&&(d=d.O(a,c))}));var k=null!=jf(f,a);if(!k&&!de(a.o)){var l=vf(a);K(!(l in this.lc),"View does not exist, but we have a tag");var m=wf++;this.lc[l]=m;this.af["_"+m]=l}h=f.Pb(a,b,new ef(c,this.jb),
d,h);k||e||(f=jf(f,a),h=h.concat(xf(this,a,f)));return h};
kf.prototype.kb=function(a,b,c){var d=a.path,e=this.ta.get(d),f=[];if(e&&("default"===a.va()||null!=jf(e,a))){f=e.kb(a,b,c);e.e()&&(this.ta=this.ta.remove(d));e=f.Ig;f=f.kg;b=-1!==Ua(e,function(a){return de(a.o)});var h=Ie(this.ta,d,function(a,b){return null!=gf(b)});if(b&&!h&&(d=this.ta.subtree(d),!d.e()))for(var d=yf(d),k=0;k<d.length;++k){var l=d[k],m=l.V,l=zf(this,l);this.Nc.Ye(m,Af(this,m),l.xd,l.G)}if(!h&&0<e.length&&!c)if(b)this.Nc.be(a,null);else{var t=this;Oa(e,function(a){a.va();var b=t.lc[vf(a)];
t.Nc.be(a,b)})}Bf(this,e)}return f};kf.prototype.za=function(a,b){var c=this.jb,d=Ie(this.ta,a,function(b,c){var d=O(b,a);if(d=c.gb(d))return d});return c.za(a,d,b,!0)};function yf(a){return Ge(a,function(a,c,d){if(c&&null!=gf(c))return[gf(c)];var e=[];c&&(e=hf(c));r(d,function(a){e=e.concat(a)});return e})}function Bf(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!de(d.o)){var d=vf(d),e=a.lc[d];delete a.lc[d];delete a.af["_"+e]}}}
function xf(a,b,c){var d=b.path,e=Af(a,b);c=zf(a,c);b=a.Nc.Ye(b,e,c.xd,c.G);d=a.ta.subtree(d);if(e)K(null==gf(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Ge(d,function(a,b,c){if(!a.e()&&b&&null!=gf(b))return[ue(gf(b))];var d=[];b&&(d=d.concat(Qa(hf(b),function(a){return a.V})));r(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Nc.be(c,Af(a,c));return b}
function zf(a,b){var c=b.V,d=Af(a,c);return{xd:function(){return(b.C()||C).hash()},G:function(b){if("ok"===b){if(d){var f=c.path;if(b=rf(a,d)){var h=sf(b);b=h.path;h=h.Ib;f=O(b,f);f=new Yb(new Qe(!1,!0,h,!0),f);b=tf(a,b,f)}else b=[]}else b=mf(a,new Yb(Re,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
(f="The service is unavailable");f=Error(b+": "+f);f.code=b.toUpperCase();return a.kb(c,null,f)}}}function vf(a){return a.path.toString()+"$"+a.va()}function sf(a){var b=a.indexOf("$");K(-1!==b&&b<a.length-1,"Bad queryKey.");return{Ib:a.substr(b+1),path:new L(a.substr(0,b))}}function rf(a,b){var c=a.af,d="_"+b;return d in c?c[d]:void 0}function Af(a,b){var c=vf(b);return w(a.lc,c)}var wf=1;
function tf(a,b,c){var d=a.ta.get(b);K(d,"Missing sync point for query tag that we're tracking");return d.ab(c,new ef(b,a.jb),null)}function mf(a,b){return Cf(a,b,a.ta,null,new ef(G,a.jb))}function Cf(a,b,c,d,e){if(b.path.e())return Df(a,b,c,d,e);var f=c.get(G);null==d&&null!=f&&(d=f.gb(G));var h=[],k=E(b.path),l=b.Xc(k);if((c=c.children.get(k))&&l)var m=d?d.J(k):null,k=e.u(k),h=h.concat(Cf(a,l,c,m,k));f&&(h=h.concat(f.ab(b,e,d)));return h}
function Df(a,b,c,d,e){var f=c.get(G);null==d&&null!=f&&(d=f.gb(G));var h=[];c.children.ia(function(c,f){var m=d?d.J(c):null,t=e.u(c),y=b.Xc(c);y&&(h=h.concat(Df(a,y,f,m,t)))});f&&(h=h.concat(f.ab(b,e,d)));return h};function Ef(){this.children={};this.nd=0;this.value=null}function Ff(a,b,c){this.Gd=a?a:"";this.Zc=b?b:null;this.w=c?c:new Ef}function Gf(a,b){for(var c=b instanceof L?b:new L(b),d=a,e;null!==(e=E(c));)d=new Ff(e,d,w(d.w.children,e)||new Ef),c=H(c);return d}g=Ff.prototype;g.Ca=function(){return this.w.value};function Hf(a,b){K("undefined"!==typeof b,"Cannot set value to undefined");a.w.value=b;If(a)}g.clear=function(){this.w.value=null;this.w.children={};this.w.nd=0;If(this)};
g.wd=function(){return 0<this.w.nd};g.e=function(){return null===this.Ca()&&!this.wd()};g.R=function(a){var b=this;r(this.w.children,function(c,d){a(new Ff(d,b,c))})};function Jf(a,b,c,d){c&&!d&&b(a);a.R(function(a){Jf(a,b,!0,d)});c&&d&&b(a)}function Kf(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}g.path=function(){return new L(null===this.Zc?this.Gd:this.Zc.path()+"/"+this.Gd)};g.name=function(){return this.Gd};g.parent=function(){return this.Zc};
function If(a){if(null!==a.Zc){var b=a.Zc,c=a.Gd,d=a.e(),e=v(b.w.children,c);d&&e?(delete b.w.children[c],b.w.nd--,If(b)):d||e||(b.w.children[c]=a.w,b.w.nd++,If(b))}};function Lf(a){K(ea(a)&&0<a.length,"Requires a non-empty array");this.Vf=a;this.Oc={}}Lf.prototype.ge=function(a,b){for(var c=this.Oc[a]||[],d=0;d<c.length;d++)c[d].zc.apply(c[d].Ma,Array.prototype.slice.call(arguments,1))};Lf.prototype.Fb=function(a,b,c){Mf(this,a);this.Oc[a]=this.Oc[a]||[];this.Oc[a].push({zc:b,Ma:c});(a=this.Be(a))&&b.apply(c,a)};Lf.prototype.hc=function(a,b,c){Mf(this,a);a=this.Oc[a]||[];for(var d=0;d<a.length;d++)if(a[d].zc===b&&(!c||c===a[d].Ma)){a.splice(d,1);break}};
function Mf(a,b){K(Ta(a.Vf,function(a){return a===b}),"Unknown event: "+b)};var Nf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);K(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);K(20===c.length,"nextPushId: Length should be 20.");
return c}}();function Of(){Lf.call(this,["online"]);this.jc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.jc||(a.jc=!0,a.ge("online",!0))},!1);window.addEventListener("offline",function(){a.jc&&(a.jc=!1,a.ge("online",!1))},!1)}}ma(Of,Lf);Of.prototype.Be=function(a){K("online"===a,"Unknown event type: "+a);return[this.jc]};ca(Of);function Pf(){Lf.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Ob=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.Ob&&(c.Ob=b,c.ge("visible",b))},!1)}}ma(Pf,Lf);Pf.prototype.Be=function(a){K("visible"===a,"Unknown event type: "+a);return[this.Ob]};ca(Pf);var Qf=/[\[\].#$\/\u0000-\u001F\u007F]/,Rf=/[\[\].#$\u0000-\u001F\u007F]/,Sf=/^[a-zA-Z][a-zA-Z._\-+]+$/;function Tf(a){return p(a)&&0!==a.length&&!Qf.test(a)}function Uf(a){return null===a||p(a)||ga(a)&&!Rc(a)||ia(a)&&v(a,".sv")}function Vf(a,b,c,d){d&&!n(b)||Wf(z(a,1,d),b,c)}
function Wf(a,b,c){c instanceof L&&(c=new vc(c,a));if(!n(b))throw Error(a+"contains undefined "+yc(c));if(ha(b))throw Error(a+"contains a function "+yc(c)+" with contents: "+b.toString());if(Rc(b))throw Error(a+"contains "+b.toString()+" "+yc(c));if(p(b)&&b.length>10485760/3&&10485760<wc(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+yc(c)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var d=!1,e=!1;ib(b,function(b,h){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
!0,!Tf(b)))throw Error(a+" contains an invalid key ("+b+") "+yc(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Wf(a,h,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+yc(c)+" in addition to actual children.");}}
function Xf(a,b,c){if(!ia(b)||ea(b))throw Error(z(a,1,!1)+" must be an Object containing the children to replace.");if(v(b,".value"))throw Error(z(a,1,!1)+' must not contain ".value".  To overwrite with a leaf value, just use .set() instead.');Vf(a,b,c,!1)}
function Yf(a,b,c){if(Rc(c))throw Error(z(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Uf(c))throw Error(z(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function Zf(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(z(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function $f(a,b,c,d){if((!d||n(c))&&!Tf(c))throw Error(z(a,b,d)+'was an invalid key: "'+c+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function ag(a,b){if(!p(b)||0===b.length||Rf.test(b))throw Error(z(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function bg(a,b){if(".info"===E(b))throw Error(a+" failed: Can't modify data under /.info/");}function cg(a,b){if(!p(b))throw Error(z(a,1,!1)+"must be a valid credential (a string).");}function dg(a,b,c){if(!p(c))throw Error(z(a,b,!1)+"must be a valid string.");}
function eg(a,b){dg(a,1,b);if(!Sf.test(b))throw Error(z(a,1,!1)+"'"+b+"' is not a valid authentication provider.");}function fg(a,b,c,d){if(!d||n(c))if(!ia(c)||null===c)throw Error(z(a,b,d)+"must be a valid object.");}function gg(a,b,c){if(!ia(b)||!v(b,c))throw Error(z(a,1,!1)+'must contain the key "'+c+'"');if(!p(w(b,c)))throw Error(z(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function hg(){this.set={}}g=hg.prototype;g.add=function(a,b){this.set[a]=null!==b?b:!0};g.contains=function(a){return v(this.set,a)};g.get=function(a){return this.contains(a)?this.set[a]:void 0};g.remove=function(a){delete this.set[a]};g.clear=function(){this.set={}};g.e=function(){return wa(this.set)};g.count=function(){return pa(this.set)};function ig(a,b){r(a.set,function(a,d){b(d,a)})}g.keys=function(){var a=[];r(this.set,function(b,c){a.push(c)});return a};function pc(){this.m=this.A=null}pc.prototype.find=function(a){if(null!=this.A)return this.A.Y(a);if(a.e()||null==this.m)return null;var b=E(a);a=H(a);return this.m.contains(b)?this.m.get(b).find(a):null};pc.prototype.nc=function(a,b){if(a.e())this.A=b,this.m=null;else if(null!==this.A)this.A=this.A.K(a,b);else{null==this.m&&(this.m=new hg);var c=E(a);this.m.contains(c)||this.m.add(c,new pc);c=this.m.get(c);a=H(a);c.nc(a,b)}};
function jg(a,b){if(b.e())return a.A=null,a.m=null,!0;if(null!==a.A){if(a.A.L())return!1;var c=a.A;a.A=null;c.R(N,function(b,c){a.nc(new L(b),c)});return jg(a,b)}return null!==a.m?(c=E(b),b=H(b),a.m.contains(c)&&jg(a.m.get(c),b)&&a.m.remove(c),a.m.e()?(a.m=null,!0):!1):!0}function qc(a,b,c){null!==a.A?c(b,a.A):a.R(function(a,e){var f=new L(b.toString()+"/"+a);qc(e,f,c)})}pc.prototype.R=function(a){null!==this.m&&ig(this.m,function(b,c){a(b,c)})};var kg="auth.firebase.com";function lg(a,b,c){this.od=a||{};this.fe=b||{};this.$a=c||{};this.od.remember||(this.od.remember="default")}var mg=["remember","redirectTo"];function ng(a){var b={},c={};ib(a||{},function(a,e){0<=Na(mg,a)?b[a]=e:c[a]=e});return new lg(b,{},c)};function og(a,b){this.Re=["session",a.Od,a.Db].join(":");this.ce=b}og.prototype.set=function(a,b){if(!b)if(this.ce.length)b=this.ce[0];else throw Error("fb.login.SessionManager : No storage options available!");b.set(this.Re,a)};og.prototype.get=function(){var a=Qa(this.ce,q(this.og,this)),a=Pa(a,function(a){return null!==a});Xa(a,function(a,c){return ad(c.token)-ad(a.token)});return 0<a.length?a.shift():null};og.prototype.og=function(a){try{var b=a.get(this.Re);if(b&&b.token)return b}catch(c){}return null};
og.prototype.clear=function(){var a=this;Oa(this.ce,function(b){b.remove(a.Re)})};function pg(){return"undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:""}function qg(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pg())}function rg(){return"undefined"!==typeof location&&/^file:\//.test(location.href)}
function sg(a){var b=pg();if(""===b)return!1;if("Microsoft Internet Explorer"===navigator.appName){if((b=b.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<b.length)return parseFloat(b[1])>=a}else if(-1<b.indexOf("Trident")&&(b=b.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<b.length)return parseFloat(b[1])>=a;return!1};function tg(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function ug(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function vg(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
function wg(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function xg(a){var b="";try{a=a.replace("#","");var c=lb(a);c&&v(c,"__firebase_request_key")&&(b=w(c,"__firebase_request_key"))}catch(d){}return b}function yg(){var a=Qc(kg);return a.scheme+"://"+a.host+"/v2"}function zg(a){return yg()+"/"+a+"/auth/channel"};function Ag(a){var b=this;this.Ac=a;this.de="*";sg(8)?this.Rc=this.zd=tg():(this.Rc=window.opener,this.zd=window);if(!b.Rc)throw"Unable to find relay frame";ug(this.zd,"message",q(this.ic,this));ug(this.zd,"message",q(this.Bf,this));try{Bg(this,{a:"ready"})}catch(c){ug(this.Rc,"load",function(){Bg(b,{a:"ready"})})}ug(window,"unload",q(this.zg,this))}function Bg(a,b){b=B(b);sg(8)?a.Rc.doPost(b,a.de):a.Rc.postMessage(b,a.de)}
Ag.prototype.ic=function(a){var b=this,c;try{c=nb(a.data)}catch(d){}c&&"request"===c.a&&(vg(window,"message",this.ic),this.de=a.origin,this.Ac&&setTimeout(function(){b.Ac(b.de,c.d,function(a,c){b.bg=!c;b.Ac=void 0;Bg(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};Ag.prototype.zg=function(){try{vg(this.zd,"message",this.Bf)}catch(a){}this.Ac&&(Bg(this,{a:"error",d:"unknown closed window"}),this.Ac=void 0);try{window.close()}catch(b){}};Ag.prototype.Bf=function(a){if(this.bg&&"die"===a.data)try{window.close()}catch(b){}};function Cg(a){this.pc=Ga()+Ga()+Ga();this.Ef=a}Cg.prototype.open=function(a,b){P.set("redirect_request_id",this.pc);P.set("redirect_request_id",this.pc);b.requestId=this.pc;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+kb(b);window.location=a};Cg.isAvailable=function(){return!rg()&&!qg()};Cg.prototype.Cc=function(){return"redirect"};var Dg={NETWORK_ERROR:"Unable to contact the Firebase server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function Eg(a){var b=Error(w(Dg,a),a);b.code=a;return b};function Fg(a){var b;(b=!a.window_features)||(b=pg(),b=-1!==b.indexOf("Fennec/")||-1!==b.indexOf("Firefox/")&&-1!==b.indexOf("Android"));b&&(a.window_features=void 0);a.window_name||(a.window_name="_blank");this.options=a}
Fg.prototype.open=function(a,b,c){function d(a){h&&(document.body.removeChild(h),h=void 0);t&&(t=clearInterval(t));vg(window,"message",e);vg(window,"unload",d);if(m&&!a)try{m.close()}catch(b){k.postMessage("die",l)}m=k=void 0}function e(a){if(a.origin===l)try{var b=nb(a.data);"ready"===b.a?k.postMessage(y,l):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f=sg(8),h,k;if(!this.options.relay_url)return c(Error("invalid arguments: origin of url and relay_url must match"));
var l=wg(a);if(l!==wg(this.options.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},0);else{f&&(h=document.createElement("iframe"),h.setAttribute("src",this.options.relay_url),h.style.display="none",h.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(h),k=h.contentWindow);a+=(/\?/.test(a)?"":"?")+kb(b);var m=window.open(a,this.options.window_name,this.options.window_features);k||(k=m);var t=setInterval(function(){m&&m.closed&&
(d(!1),c&&(c(Eg("USER_CANCELLED")),c=null))},500),y=B({a:"request",d:b});ug(window,"unload",d);ug(window,"message",e)}};
Fg.isAvailable=function(){var a;if(a="postMessage"in window&&!rg())(a=qg()||"undefined"!==typeof navigator&&(!!pg().match(/Windows Phone/)||!!window.Windows&&/^ms-appx:/.test(location.href)))||(a=pg(),a="undefined"!==typeof navigator&&"undefined"!==typeof window&&!!(a.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||a.match(/CriOS/)||a.match(/Twitter for iPhone/)||a.match(/FBAN\/FBIOS/)||window.navigator.standalone)),a=!a;return a&&!pg().match(/PhantomJS/)};Fg.prototype.Cc=function(){return"popup"};function Gg(a){a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.options=a}
Gg.prototype.open=function(a,b,c){function d(){c&&(c(Eg("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.options.method.toUpperCase(),h;ug(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=nb(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(Eg("SERVER_ERROR")):c(Eg("NETWORK_ERROR"));c=null;vg(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+kb(b),h=null;else{var k=this.options.headers.content_type;
"application/json"===k&&(h=B(b));"application/x-www-form-urlencoded"===k&&(h=kb(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};za(a,this.options.headers);for(var l in a)e.setRequestHeader(l,a[l]);e.send(h)};Gg.isAvailable=function(){var a;if(a=!!window.XMLHttpRequest)a=pg(),a=!(a.match(/MSIE/)||a.match(/Trident/))||sg(10);return a};Gg.prototype.Cc=function(){return"json"};function Hg(a){this.pc=Ga()+Ga()+Ga();this.Ef=a}
Hg.prototype.open=function(a,b,c){function d(){c&&(c(Eg("USER_CANCELLED")),c=null)}var e=this,f=Qc(kg),h;b.requestId=this.pc;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=kb(b);(h=window.open(a,"_blank","location=no"))&&ha(h.addEventListener)?(h.addEventListener("loadstart",function(a){var b;if(b=a&&a.url)a:{try{var m=document.createElement("a");m.href=a.url;b=m.host===f.host&&"/blank/page.html"===m.pathname;break a}catch(t){}b=!1}b&&(a=xg(a.url),h.removeEventListener("exit",
d),h.close(),a=new lg(null,null,{requestId:e.pc,requestKey:a}),e.Ef.requestWithCredential("/auth/session",a,c),c=null)}),h.addEventListener("exit",d)):c(Eg("TRANSPORT_UNAVAILABLE"))};Hg.isAvailable=function(){return qg()};Hg.prototype.Cc=function(){return"redirect"};function Ig(a){a.callback_parameter||(a.callback_parameter="callback");this.options=a;window.__firebase_auth_jsonp=window.__firebase_auth_jsonp||{}}
Ig.prototype.open=function(a,b,c){function d(){c&&(c(Eg("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__firebase_auth_jsonp[f]=void 0;wa(window.__firebase_auth_jsonp)&&(window.__firebase_auth_jsonp=void 0);try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);vg(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.options.callback_parameter]="__firebase_auth_jsonp."+f;a+=(/\?/.test(a)?"":"?")+kb(b);
ug(window,"beforeunload",d);window.__firebase_auth_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};Jg(f,a,c)};
function Jg(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(Eg("NETWORK_ERROR"))};var e=document.getElementsByTagName("head");(e&&0!=e.length?e[0]:document.documentElement).appendChild(d)}catch(f){c&&c(Eg("NETWORK_ERROR"))}},0)}Ig.isAvailable=function(){return"undefined"!==typeof document&&null!=document.createElement};
Ig.prototype.Cc=function(){return"json"};function Kg(a,b,c,d){Lf.call(this,["auth_status"]);this.F=a;this.ef=b;this.Tg=c;this.Me=d;this.sc=new og(a,[Cc,P]);this.nb=null;this.Te=!1;Lg(this)}ma(Kg,Lf);g=Kg.prototype;g.ye=function(){return this.nb||null};function Lg(a){P.get("redirect_request_id")&&Mg(a);var b=a.sc.get();b&&b.token?(Ng(a,b),a.ef(b.token,function(c,d){Og(a,c,d,!1,b.token,b)},function(b,d){Pg(a,"resumeSession()",b,d)})):Ng(a,null)}
function Qg(a,b,c,d,e,f){"firebaseio-demo.com"===a.F.domain&&Q("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");a.ef(b,function(f,k){Og(a,f,k,!0,b,c,d||{},e)},function(b,c){Pg(a,"auth()",b,c,f)})}function Rg(a,b){a.sc.clear();Ng(a,null);a.Tg(function(a,d){if("ok"===a)R(b,null);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;R(b,f)}})}
function Og(a,b,c,d,e,f,h,k){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=bd(e)?e:"",c=null,b&&v(b,"uid")?c=w(b,"uid"):v(f,"uid")&&(c=w(f,"uid")),f.uid=c,c="custom",b&&v(b,"provider")?c=w(b,"provider"):v(f,"provider")&&(c=w(f,"provider")),f.provider=c,a.sc.clear(),bd(e)&&(h=h||{},c=Cc,"sessionOnly"===h.remember&&(c=P),"none"!==h.remember&&a.sc.set(f,c)),Ng(a,f)),R(k,null,f)):(a.sc.clear(),Ng(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,R(k,f))}
function Pg(a,b,c,d,e){Q(b+" was canceled: "+d);a.sc.clear();Ng(a,null);a=Error(d);a.code=c.toUpperCase();R(e,a)}function Sg(a,b,c,d,e){Tg(a);c=new lg(d||{},{},c||{});Ug(a,[Gg,Ig],"/auth/"+b,c,e)}
function Vg(a,b,c,d){Tg(a);var e=[Fg,Hg];c=ng(c);"anonymous"===b||"password"===b?setTimeout(function(){R(d,Eg("TRANSPORT_UNAVAILABLE"))},0):(c.fe.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-625):0),c.fe.relay_url=zg(a.F.Db),c.fe.requestWithCredential=q(a.qc,a),Ug(a,e,"/auth/"+b,c,d))}
function Mg(a){var b=P.get("redirect_request_id");if(b){var c=P.get("redirect_client_options");P.remove("redirect_request_id");P.remove("redirect_client_options");var d=[Gg,Ig],b={requestId:b,requestKey:xg(document.location.hash)},c=new lg(c,{},b);a.Te=!0;try{document.location.hash=document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/,"")}catch(e){}Ug(a,d,"/auth/session",c,function(){this.Te=!1}.bind(a))}}
g.te=function(a,b){Tg(this);var c=ng(a);c.$a._method="POST";this.qc("/users",c,function(a,c){a?R(b,a):R(b,a,c)})};g.Ue=function(a,b){var c=this;Tg(this);var d="/users/"+encodeURIComponent(a.email),e=ng(a);e.$a._method="DELETE";this.qc(d,e,function(a,d){!a&&d&&d.uid&&c.nb&&c.nb.uid&&c.nb.uid===d.uid&&Rg(c);R(b,a)})};g.qe=function(a,b){Tg(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=ng(a);d.$a._method="PUT";d.$a.password=a.newPassword;this.qc(c,d,function(a){R(b,a)})};
g.pe=function(a,b){Tg(this);var c="/users/"+encodeURIComponent(a.oldEmail)+"/email",d=ng(a);d.$a._method="PUT";d.$a.email=a.newEmail;d.$a.password=a.password;this.qc(c,d,function(a){R(b,a)})};g.We=function(a,b){Tg(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=ng(a);d.$a._method="POST";this.qc(c,d,function(a){R(b,a)})};g.qc=function(a,b,c){Wg(this,[Gg,Ig],a,b,c)};
function Ug(a,b,c,d,e){Wg(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?Qg(a,c.token,c,d.od,function(a,b){a?R(e,a):R(e,null,b)}):R(e,b||Eg("UNKNOWN_ERROR"))})}
function Wg(a,b,c,d,e){b=Pa(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){R(e,Eg("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.fe),d=jb(d.$a),d.v="js-"+hb,d.transport=b.Cc(),d.suppress_status_codes=!0,a=yg()+"/"+a.F.Db+c,b.open(a,d,function(a,b){if(a)R(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;R(e,c)}else R(e,null,b)}))}
function Ng(a,b){var c=null!==a.nb||null!==b;a.nb=b;c&&a.ge("auth_status",b);a.Me(null!==b)}g.Be=function(a){K("auth_status"===a,'initial event must be of type "auth_status"');return this.Te?null:[this.nb]};function Tg(a){var b=a.F;if("firebaseio.com"!==b.domain&&"firebaseio-demo.com"!==b.domain&&"auth.firebase.com"===kg)throw Error("This custom Firebase server ('"+a.F.domain+"') does not support delegated login.");};function Xg(a){this.ic=a;this.Nd=[];this.Sb=0;this.re=-1;this.Gb=null}function Yg(a,b,c){a.re=b;a.Gb=c;a.re<a.Sb&&(a.Gb(),a.Gb=null)}function Zg(a,b,c){for(a.Nd[b]=c;a.Nd[a.Sb];){var d=a.Nd[a.Sb];delete a.Nd[a.Sb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Db(function(){f.ic(d[e])})}if(a.Sb===a.re){a.Gb&&(clearTimeout(a.Gb),a.Gb(),a.Gb=null);break}a.Sb++}};function $g(a,b,c){this.se=a;this.f=Nc(a);this.ob=this.pb=0;this.Va=Qb(b);this.Zd=c;this.Hc=!1;this.jd=function(a){b.host!==b.Pa&&(a.ns=b.Db);var c=[],f;for(f in a)a.hasOwnProperty(f)&&c.push(f+"="+a[f]);return(b.lb?"https://":"http://")+b.Pa+"/.lp?"+c.join("&")}}var ah,bh;
$g.prototype.open=function(a,b){this.hf=0;this.la=b;this.Af=new Xg(a);this.Ab=!1;var c=this;this.rb=setTimeout(function(){c.f("Timed out trying to connect.");c.hb();c.rb=null},Math.floor(3E4));Sc(function(){if(!c.Ab){c.Ta=new ch(function(a,b,d,k,l){dh(c,arguments);if(c.Ta)if(c.rb&&(clearTimeout(c.rb),c.rb=null),c.Hc=!0,"start"==a)c.id=b,c.Gf=d;else if("close"===a)b?(c.Ta.Xd=!1,Yg(c.Af,b,function(){c.hb()})):c.hb();else throw Error("Unrecognized command received: "+a);},function(a,b){dh(c,arguments);
Zg(c.Af,a,b)},function(){c.hb()},c.jd);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Ta.ie&&(a.cb=c.Ta.ie);a.v="5";c.Zd&&(a.s=c.Zd);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.jd(a);c.f("Connecting via long-poll to "+a);eh(c.Ta,a,function(){})}})};
$g.prototype.start=function(){var a=this.Ta,b=this.Gf;a.sg=this.id;a.tg=b;for(a.me=!0;fh(a););a=this.id;b=this.Gf;this.gc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.gc.src=this.jd(c);this.gc.style.display="none";document.body.appendChild(this.gc)};
$g.isAvailable=function(){return ah||!bh&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Vg)&&!0};g=$g.prototype;g.Ed=function(){};g.dd=function(){this.Ab=!0;this.Ta&&(this.Ta.close(),this.Ta=null);this.gc&&(document.body.removeChild(this.gc),this.gc=null);this.rb&&(clearTimeout(this.rb),this.rb=null)};
g.hb=function(){this.Ab||(this.f("Longpoll is closing itself"),this.dd(),this.la&&(this.la(this.Hc),this.la=null))};g.close=function(){this.Ab||(this.f("Longpoll is being closed."),this.dd())};g.send=function(a){a=B(a);this.pb+=a.length;Nb(this.Va,"bytes_sent",a.length);a=Jc(a);a=fb(a,!0);a=Wc(a,1840);for(var b=0;b<a.length;b++){var c=this.Ta;c.ad.push({Kg:this.hf,Sg:a.length,kf:a[b]});c.me&&fh(c);this.hf++}};function dh(a,b){var c=B(b).length;a.ob+=c;Nb(a.Va,"bytes_received",c)}
function ch(a,b,c,d){this.jd=d;this.ib=c;this.Qe=new hg;this.ad=[];this.ue=Math.floor(1E8*Math.random());this.Xd=!0;this.ie=Fc();window["pLPCommand"+this.ie]=a;window["pRTLPCB"+this.ie]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||Cb("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.fb=a.contentDocument:a.contentWindow?a.fb=a.contentWindow.document:a.document&&(a.fb=a.document);this.Ea=a;a="";this.Ea.src&&"javascript:"===this.Ea.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ea.fb.open(),this.Ea.fb.write(a),this.Ea.fb.close()}catch(f){Cb("frame writing exception"),f.stack&&Cb(f.stack),Cb(f)}}
ch.prototype.close=function(){this.me=!1;if(this.Ea){this.Ea.fb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ea&&(document.body.removeChild(a.Ea),a.Ea=null)},Math.floor(0))}var b=this.ib;b&&(this.ib=null,b())};
function fh(a){if(a.me&&a.Xd&&a.Qe.count()<(0<a.ad.length?2:1)){a.ue++;var b={};b.id=a.sg;b.pw=a.tg;b.ser=a.ue;for(var b=a.jd(b),c="",d=0;0<a.ad.length;)if(1870>=a.ad[0].kf.length+30+c.length){var e=a.ad.shift(),c=c+"&seg"+d+"="+e.Kg+"&ts"+d+"="+e.Sg+"&d"+d+"="+e.kf;d++}else break;gh(a,b+c,a.ue);return!0}return!1}function gh(a,b,c){function d(){a.Qe.remove(c);fh(a)}a.Qe.add(c,1);var e=setTimeout(d,Math.floor(25E3));eh(a,b,function(){clearTimeout(e);d()})}
function eh(a,b,c){setTimeout(function(){try{if(a.Xd){var d=a.Ea.fb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){Cb("Long-poll script failed to load: "+b);a.Xd=!1;a.close()};a.Ea.fb.body.appendChild(d)}}catch(e){}},Math.floor(1))};var hh=null;"undefined"!==typeof MozWebSocket?hh=MozWebSocket:"undefined"!==typeof WebSocket&&(hh=WebSocket);function ih(a,b,c){this.se=a;this.f=Nc(this.se);this.frames=this.Kc=null;this.ob=this.pb=this.cf=0;this.Va=Qb(b);this.eb=(b.lb?"wss://":"ws://")+b.Pa+"/.ws?v=5";"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(this.eb+="&r=f");b.host!==b.Pa&&(this.eb=this.eb+"&ns="+b.Db);c&&(this.eb=this.eb+"&s="+c)}var jh;
ih.prototype.open=function(a,b){this.ib=b;this.xg=a;this.f("Websocket connecting to "+this.eb);this.Hc=!1;Cc.set("previous_websocket_failure",!0);try{this.ua=new hh(this.eb)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.hb();return}var e=this;this.ua.onopen=function(){e.f("Websocket connected.");e.Hc=!0};this.ua.onclose=function(){e.f("Websocket connection was disconnected.");e.ua=null;e.hb()};this.ua.onmessage=function(a){if(null!==e.ua)if(a=a.data,e.ob+=
a.length,Nb(e.Va,"bytes_received",a.length),kh(e),null!==e.frames)lh(e,a);else{a:{K(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.cf=b;e.frames=[];a=null;break a}}e.cf=1;e.frames=[]}null!==a&&lh(e,a)}};this.ua.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.hb()}};ih.prototype.start=function(){};
ih.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==hh&&!jh};ih.responsesRequiredToBeHealthy=2;ih.healthyTimeout=3E4;g=ih.prototype;g.Ed=function(){Cc.remove("previous_websocket_failure")};function lh(a,b){a.frames.push(b);if(a.frames.length==a.cf){var c=a.frames.join("");a.frames=null;c=nb(c);a.xg(c)}}
g.send=function(a){kh(this);a=B(a);this.pb+=a.length;Nb(this.Va,"bytes_sent",a.length);a=Wc(a,16384);1<a.length&&this.ua.send(String(a.length));for(var b=0;b<a.length;b++)this.ua.send(a[b])};g.dd=function(){this.Ab=!0;this.Kc&&(clearInterval(this.Kc),this.Kc=null);this.ua&&(this.ua.close(),this.ua=null)};g.hb=function(){this.Ab||(this.f("WebSocket is closing itself"),this.dd(),this.ib&&(this.ib(this.Hc),this.ib=null))};g.close=function(){this.Ab||(this.f("WebSocket is being closed"),this.dd())};
function kh(a){clearInterval(a.Kc);a.Kc=setInterval(function(){a.ua&&a.ua.send("0");kh(a)},Math.floor(45E3))};function mh(a){nh(this,a)}var oh=[$g,ih];function nh(a,b){var c=ih&&ih.isAvailable(),d=c&&!(Cc.wf||!0===Cc.get("previous_websocket_failure"));b.Ug&&(c||Q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.gd=[ih];else{var e=a.gd=[];Xc(oh,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function ph(a){if(0<a.gd.length)return a.gd[0];throw Error("No transports available");};function qh(a,b,c,d,e,f){this.id=a;this.f=Nc("c:"+this.id+":");this.ic=c;this.Wc=d;this.la=e;this.Oe=f;this.F=b;this.Md=[];this.ff=0;this.Of=new mh(b);this.Ua=0;this.f("Connection created");rh(this)}
function rh(a){var b=ph(a.Of);a.I=new b("c:"+a.id+":"+a.ff++,a.F);a.Se=b.responsesRequiredToBeHealthy||0;var c=sh(a,a.I),d=th(a,a.I);a.hd=a.I;a.cd=a.I;a.D=null;a.Bb=!1;setTimeout(function(){a.I&&a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.yd=setTimeout(function(){a.yd=null;a.Bb||(a.I&&102400<a.I.ob?(a.f("Connection exceeded healthy timeout but has received "+a.I.ob+" bytes.  Marking connection healthy."),a.Bb=!0,a.I.Ed()):a.I&&10240<a.I.pb?a.f("Connection exceeded healthy timeout but has sent "+
a.I.pb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function th(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.Ua?1===a.Ua&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.F.Pa.substr(0,2)&&(Cc.remove("host:"+a.F.host),a.F.Pa=a.F.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.hd!==c&&a.cd!==c||a.close()):a.f("closing an old connection")}}
function sh(a,b){return function(c){if(2!=a.Ua)if(b===a.cd){var d=Uc("t",c);c=Uc("d",c);if("c"==d){if(d=Uc("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.Zd=c.s;Ec(a.F,f);0==a.Ua&&(a.I.start(),uh(a,a.I,d),"5"!==e&&Q("Protocol version mismatch detected"),c=a.Of,(c=1<c.gd.length?c.gd[1]:null)&&vh(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.cd=a.D;for(c=0;c<a.Md.length;++c)a.Id(a.Md[c]);a.Md=[];wh(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.Oe&&(a.Oe(c),a.Oe=null),a.la=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Ec(a.F,c),1===a.Ua?a.close():(xh(a),rh(a))):"e"===d?Oc("Server Error: "+c):"o"===d?(a.f("got pong on primary."),yh(a),zh(a)):Oc("Unknown control packet command: "+d)}else"d"==d&&a.Id(c)}else if(b===a.D)if(d=Uc("t",c),c=Uc("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?Ah(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.hd!==a.D&&a.cd!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.Mf--,Ah(a)));else if("d"==d)a.Md.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}qh.prototype.Fa=function(a){Bh(this,{t:"d",d:a})};function wh(a){a.hd===a.D&&a.cd===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.se),a.I=a.D,a.D=null)}
function Ah(a){0>=a.Mf?(a.f("Secondary connection is healthy."),a.Bb=!0,a.D.Ed(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.hd=a.D,wh(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}qh.prototype.Id=function(a){yh(this);this.ic(a)};function yh(a){a.Bb||(a.Se--,0>=a.Se&&(a.f("Primary connection is healthy."),a.Bb=!0,a.I.Ed()))}
function vh(a,b){a.D=new b("c:"+a.id+":"+a.ff++,a.F,a.Zd);a.Mf=b.responsesRequiredToBeHealthy||0;a.D.open(sh(a,a.D),th(a,a.D));setTimeout(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function uh(a,b,c){a.f("Realtime connection established.");a.I=b;a.Ua=1;a.Wc&&(a.Wc(c),a.Wc=null);0===a.Se?(a.f("Primary connection is healthy."),a.Bb=!0):setTimeout(function(){zh(a)},Math.floor(5E3))}
function zh(a){a.Bb||1!==a.Ua||(a.f("sending ping on primary."),Bh(a,{t:"c",d:{t:"p",d:{}}}))}function Bh(a,b){if(1!==a.Ua)throw"Connection is not connected";a.hd.send(b)}qh.prototype.close=function(){2!==this.Ua&&(this.f("Closing realtime connection."),this.Ua=2,xh(this),this.la&&(this.la(),this.la=null))};function xh(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.yd&&(clearTimeout(a.yd),a.yd=null)};function Ch(a,b,c,d){this.id=Dh++;this.f=Nc("p:"+this.id+":");this.xf=this.Fe=!1;this.$={};this.qa=[];this.Yc=0;this.Vc=[];this.oa=!1;this.Za=1E3;this.Fd=3E5;this.Hb=b;this.Uc=c;this.Pe=d;this.F=a;this.tb=this.Aa=this.Ia=this.Xe=null;this.Ob=!1;this.Td={};this.Jg=0;this.nf=!0;this.Lc=this.He=null;Eh(this,0);Pf.vb().Fb("visible",this.Ag,this);-1===a.host.indexOf("fblocal")&&Of.vb().Fb("online",this.yg,this)}var Dh=0,Fh=0;g=Ch.prototype;
g.Fa=function(a,b,c){var d=++this.Jg;a={r:d,a:a,b:b};this.f(B(a));K(this.oa,"sendRequest call when we're not connected not allowed.");this.Ia.Fa(a);c&&(this.Td[d]=c)};g.yf=function(a,b,c,d){var e=a.va(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.$[f]=this.$[f]||{};K(!this.$[f][e],"listen() called twice for same path/queryId.");a={G:d,xd:b,Gg:a,tag:c};this.$[f][e]=a;this.oa&&Gh(this,a)};
function Gh(a,b){var c=b.Gg,d=c.path.toString(),e=c.va();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=ce(c.o),f.t=b.tag);f.h=b.xd();a.Fa("q",f,function(f){var k=f.d,l=f.s;if(k&&"object"===typeof k&&v(k,"w")){var m=w(k,"w");ea(m)&&0<=Na(m,"no_index")&&Q("Using an unspecified index. Consider adding "+('".indexOn": "'+c.o.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.$[d]&&a.$[d][e])===b&&(a.f("listen response",f),"ok"!==l&&Hh(a,d,e),b.G&&b.G(l,
k))})}g.N=function(a,b,c){this.Aa={gg:a,of:!1,zc:b,md:c};this.f("Authenticating using credential: "+a);Ih(this);(b=40==a.length)||(a=$c(a).Bc,b="object"===typeof a&&!0===w(a,"admin"));b&&(this.f("Admin auth credential detected.  Reducing max reconnect time."),this.Fd=3E4)};g.he=function(a){delete this.Aa;this.oa&&this.Fa("unauth",{},function(b){a(b.s,b.d)})};
function Ih(a){var b=a.Aa;a.oa&&b&&a.Fa("auth",{cred:b.gg},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.Aa===b&&delete a.Aa;b.of?"ok"!==d&&b.md&&b.md(d,c):(b.of=!0,b.zc&&b.zc(d,c))})}g.Pf=function(a,b){var c=a.path.toString(),d=a.va();this.f("Unlisten called for "+c+" "+d);if(Hh(this,c,d)&&this.oa){var e=ce(a.o);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.Fa("n",c)}};g.Ne=function(a,b,c){this.oa?Jh(this,"o",a,b,c):this.Vc.push({$c:a,action:"o",data:b,G:c})};
g.Cf=function(a,b,c){this.oa?Jh(this,"om",a,b,c):this.Vc.push({$c:a,action:"om",data:b,G:c})};g.Jd=function(a,b){this.oa?Jh(this,"oc",a,null,b):this.Vc.push({$c:a,action:"oc",data:null,G:b})};function Jh(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.Fa(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}g.put=function(a,b,c,d){Kh(this,"p",a,b,c,d)};g.zf=function(a,b,c,d){Kh(this,"m",a,b,c,d)};
function Kh(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.qa.push({action:b,Jf:d,G:e});a.Yc++;b=a.qa.length-1;a.oa?Lh(a,b):a.f("Buffering put: "+c)}function Lh(a,b){var c=a.qa[b].action,d=a.qa[b].Jf,e=a.qa[b].G;a.qa[b].Hg=a.oa;a.Fa(c,d,function(d){a.f(c+" response",d);delete a.qa[b];a.Yc--;0===a.Yc&&(a.qa=[]);e&&e(d.s,d.d)})}g.Ve=function(a){this.oa&&(a={c:a},this.f("reportStats",a),this.Fa("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
g.Id=function(a){if("r"in a){this.f("from server: "+B(a));var b=a.r,c=this.Td[b];c&&(delete this.Td[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.f("handleServerMessage",b,c),"d"===b?this.Hb(c.p,c.d,!1,c.t):"m"===b?this.Hb(c.p,c.d,!0,c.t):"c"===b?Mh(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.Aa,delete this.Aa,c&&c.md&&c.md(a,b)):"sd"===b?this.Xe?this.Xe(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n",
"\nFIREBASE: ")):Oc("Unrecognized action received from server: "+B(b)+"\nAre you using the latest client?"))}};g.Wc=function(a){this.f("connection ready");this.oa=!0;this.Lc=(new Date).getTime();this.Pe({serverTimeOffset:a-(new Date).getTime()});this.nf&&(a={},a["sdk.js."+hb.replace(/\./g,"-")]=1,qg()&&(a["framework.cordova"]=1),this.Ve(a));Nh(this);this.nf=!1;this.Uc(!0)};
function Eh(a,b){K(!a.Ia,"Scheduling a connect when we're already connected/ing?");a.tb&&clearTimeout(a.tb);a.tb=setTimeout(function(){a.tb=null;Oh(a)},Math.floor(b))}g.Ag=function(a){a&&!this.Ob&&this.Za===this.Fd&&(this.f("Window became visible.  Reducing delay."),this.Za=1E3,this.Ia||Eh(this,0));this.Ob=a};g.yg=function(a){a?(this.f("Browser went online."),this.Za=1E3,this.Ia||Eh(this,0)):(this.f("Browser went offline.  Killing connection."),this.Ia&&this.Ia.close())};
g.Df=function(){this.f("data client disconnected");this.oa=!1;this.Ia=null;for(var a=0;a<this.qa.length;a++){var b=this.qa[a];b&&"h"in b.Jf&&b.Hg&&(b.G&&b.G("disconnect"),delete this.qa[a],this.Yc--)}0===this.Yc&&(this.qa=[]);this.Td={};Ph(this)&&(this.Ob?this.Lc&&(3E4<(new Date).getTime()-this.Lc&&(this.Za=1E3),this.Lc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Za=this.Fd,this.He=(new Date).getTime()),a=Math.max(0,this.Za-((new Date).getTime()-this.He)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),Eh(this,a),this.Za=Math.min(this.Fd,1.3*this.Za));this.Uc(!1)};function Oh(a){if(Ph(a)){a.f("Making a connection attempt");a.He=(new Date).getTime();a.Lc=null;var b=q(a.Id,a),c=q(a.Wc,a),d=q(a.Df,a),e=a.id+":"+Fh++;a.Ia=new qh(e,a.F,b,c,d,function(b){Q(b+" ("+a.F.toString()+")");a.xf=!0})}}g.zb=function(){this.Fe=!0;this.Ia?this.Ia.close():(this.tb&&(clearTimeout(this.tb),this.tb=null),this.oa&&this.Df())};g.rc=function(){this.Fe=!1;this.Za=1E3;this.Ia||Eh(this,0)};
function Mh(a,b,c){c=c?Qa(c,function(a){return Vc(a)}).join("$"):"default";(a=Hh(a,b,c))&&a.G&&a.G("permission_denied")}function Hh(a,b,c){b=(new L(b)).toString();var d;n(a.$[b])?(d=a.$[b][c],delete a.$[b][c],0===pa(a.$[b])&&delete a.$[b]):d=void 0;return d}function Nh(a){Ih(a);r(a.$,function(b){r(b,function(b){Gh(a,b)})});for(var b=0;b<a.qa.length;b++)a.qa[b]&&Lh(a,b);for(;a.Vc.length;)b=a.Vc.shift(),Jh(a,b.action,b.$c,b.data,b.G)}function Ph(a){var b;b=Of.vb().jc;return!a.xf&&!a.Fe&&b};var V={mg:function(){ah=jh=!0}};V.forceLongPolling=V.mg;V.ng=function(){bh=!0};V.forceWebSockets=V.ng;V.Ng=function(a,b){a.k.Sa.Xe=b};V.setSecurityDebugCallback=V.Ng;V.Ze=function(a,b){a.k.Ze(b)};V.stats=V.Ze;V.$e=function(a,b){a.k.$e(b)};V.statsIncrementCounter=V.$e;V.sd=function(a){return a.k.sd};V.dataUpdateCount=V.sd;V.qg=function(a,b){a.k.Ee=b};V.interceptServerData=V.qg;V.wg=function(a){new Ag(a)};V.onPopupOpen=V.wg;V.Lg=function(a){kg=a};V.setAuthenticationServer=V.Lg;function S(a,b,c){this.w=a;this.V=b;this.g=c}S.prototype.H=function(){x("Firebase.DataSnapshot.val",0,0,arguments.length);return this.w.H()};S.prototype.val=S.prototype.H;S.prototype.mf=function(){x("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.w.H(!0)};S.prototype.exportVal=S.prototype.mf;S.prototype.lg=function(){x("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.w.e()};S.prototype.exists=S.prototype.lg;
S.prototype.u=function(a){x("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));ag("Firebase.DataSnapshot.child",a);var b=new L(a),c=this.V.u(b);return new S(this.w.Y(b),c,N)};S.prototype.child=S.prototype.u;S.prototype.Da=function(a){x("Firebase.DataSnapshot.hasChild",1,1,arguments.length);ag("Firebase.DataSnapshot.hasChild",a);var b=new L(a);return!this.w.Y(b).e()};S.prototype.hasChild=S.prototype.Da;
S.prototype.B=function(){x("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.w.B().H()};S.prototype.getPriority=S.prototype.B;S.prototype.forEach=function(a){x("Firebase.DataSnapshot.forEach",1,1,arguments.length);A("Firebase.DataSnapshot.forEach",1,a,!1);if(this.w.L())return!1;var b=this;return!!this.w.R(this.g,function(c,d){return a(new S(d,b.V.u(c),N))})};S.prototype.forEach=S.prototype.forEach;
S.prototype.wd=function(){x("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.w.L()?!1:!this.w.e()};S.prototype.hasChildren=S.prototype.wd;S.prototype.name=function(){Q("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");x("Firebase.DataSnapshot.name",0,0,arguments.length);return this.key()};S.prototype.name=S.prototype.name;S.prototype.key=function(){x("Firebase.DataSnapshot.key",0,0,arguments.length);return this.V.key()};
S.prototype.key=S.prototype.key;S.prototype.Eb=function(){x("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.w.Eb()};S.prototype.numChildren=S.prototype.Eb;S.prototype.mc=function(){x("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.V};S.prototype.ref=S.prototype.mc;function Qh(a,b){this.F=a;this.Va=Qb(a);this.fd=null;this.da=new vb;this.Hd=1;this.Sa=null;b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)?(this.ba=new ye(this.F,q(this.Hb,this)),setTimeout(q(this.Uc,this,!0),0)):this.ba=this.Sa=new Ch(this.F,q(this.Hb,this),q(this.Uc,this),q(this.Pe,this));this.Qg=Rb(a,q(function(){return new Lb(this.Va,this.ba)},this));this.uc=new Ff;
this.De=new ob;var c=this;this.Cd=new kf({Ye:function(a,b,f,h){b=[];f=c.De.j(a.path);f.e()||(b=mf(c.Cd,new Wb(Re,a.path,f)),setTimeout(function(){h("ok")},0));return b},be:ba});Rh(this,"connected",!1);this.la=new pc;this.N=new Kg(a,q(this.ba.N,this.ba),q(this.ba.he,this.ba),q(this.Me,this));this.sd=0;this.Ee=null;this.M=new kf({Ye:function(a,b,f,h){c.ba.yf(a,f,b,function(b,e){var f=h(b,e);Ab(c.da,a.path,f)});return[]},be:function(a,b){c.ba.Pf(a,b)}})}g=Qh.prototype;
g.toString=function(){return(this.F.lb?"https://":"http://")+this.F.host};g.name=function(){return this.F.Db};function Sh(a){a=a.De.j(new L(".info/serverTimeOffset")).H()||0;return(new Date).getTime()+a}function Th(a){a=a={timestamp:Sh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
g.Hb=function(a,b,c,d){this.sd++;var e=new L(a);b=this.Ee?this.Ee(a,b):b;a=[];d?c?(b=na(b,function(a){return M(a)}),a=uf(this.M,e,b,d)):(b=M(b),a=qf(this.M,e,b,d)):c?(d=na(b,function(a){return M(a)}),a=pf(this.M,e,d)):(d=M(b),a=mf(this.M,new Wb(Re,e,d)));d=e;0<a.length&&(d=Uh(this,e));Ab(this.da,d,a)};g.Uc=function(a){Rh(this,"connected",a);!1===a&&Vh(this)};g.Pe=function(a){var b=this;Xc(a,function(a,d){Rh(b,d,a)})};g.Me=function(a){Rh(this,"authenticated",a)};
function Rh(a,b,c){b=new L("/.info/"+b);c=M(c);var d=a.De;d.Wd=d.Wd.K(b,c);c=mf(a.Cd,new Wb(Re,b,c));Ab(a.da,b,c)}g.Kb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Yg:c});var e=Th(this);b=M(b,c);var e=rc(b,e),f=this.Hd++,e=lf(this.M,a,e,f,!0);wb(this.da,e);var h=this;this.ba.put(a.toString(),b.H(!0),function(b,c){var e="ok"===b;e||Q("set at "+a+" failed: "+b);e=of(h.M,f,!e);Ab(h.da,a,e);Wh(d,b,c)});e=Xh(this,a);Uh(this,e);Ab(this.da,e,[])};
g.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Th(this),f={};r(b,function(a,b){d=!1;var c=M(a);f[b]=rc(c,e)});if(d)Cb("update() called with empty data.  Don't do anything."),Wh(c,"ok");else{var h=this.Hd++,k=nf(this.M,a,f,h);wb(this.da,k);var l=this;this.ba.zf(a.toString(),b,function(b,d){var e="ok"===b;e||Q("update at "+a+" failed: "+b);var e=of(l.M,h,!e),f=a;0<e.length&&(f=Uh(l,a));Ab(l.da,f,e);Wh(c,b,d)});b=Xh(this,a);Uh(this,b);Ab(this.da,a,[])}};
function Vh(a){a.f("onDisconnectEvents");var b=Th(a),c=[];qc(oc(a.la,b),G,function(b,e){c=c.concat(mf(a.M,new Wb(Re,b,e)));var f=Xh(a,b);Uh(a,f)});a.la=new pc;Ab(a.da,G,c)}g.Jd=function(a,b){var c=this;this.ba.Jd(a.toString(),function(d,e){"ok"===d&&jg(c.la,a);Wh(b,d,e)})};function Yh(a,b,c,d){var e=M(c);a.ba.Ne(b.toString(),e.H(!0),function(c,h){"ok"===c&&a.la.nc(b,e);Wh(d,c,h)})}function Zh(a,b,c,d,e){var f=M(c,d);a.ba.Ne(b.toString(),f.H(!0),function(c,d){"ok"===c&&a.la.nc(b,f);Wh(e,c,d)})}
function $h(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(Cb("onDisconnect().update() called with empty data.  Don't do anything."),Wh(d,"ok")):a.ba.Cf(b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var m=M(c[l]);a.la.nc(b.u(l),m)}Wh(d,e,f)})}function ai(a,b,c){c=".info"===E(b.path)?a.Cd.Pb(b,c):a.M.Pb(b,c);yb(a.da,b.path,c)}g.zb=function(){this.Sa&&this.Sa.zb()};g.rc=function(){this.Sa&&this.Sa.rc()};
g.Ze=function(a){if("undefined"!==typeof console){a?(this.fd||(this.fd=new Kb(this.Va)),a=this.fd.get()):a=this.Va.get();var b=Ra(sa(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};g.$e=function(a){Nb(this.Va,a);this.Qg.Nf[a]=!0};g.f=function(a){var b="";this.Sa&&(b=this.Sa.id+":");Cb(b,arguments)};
function Wh(a,b,c){a&&Db(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function bi(a,b,c,d,e){function f(){}a.f("transaction on "+b);var h=new U(a,b);h.Fb("value",f);c={path:b,update:c,G:d,status:null,Ff:Fc(),df:e,Lf:0,je:function(){h.hc("value",f)},le:null,Ba:null,pd:null,qd:null,rd:null};d=a.M.za(b,void 0)||C;c.pd=d;d=c.update(d.H());if(n(d)){Wf("transaction failed: Data returned ",d,c.path);c.status=1;e=Gf(a.uc,b);var k=e.Ca()||[];k.push(c);Hf(e,k);"object"===typeof d&&null!==d&&v(d,".priority")?(k=w(d,".priority"),K(Uf(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.M.za(b)||C).B().H();e=Th(a);d=M(d,k);e=rc(d,e);c.qd=d;c.rd=e;c.Ba=a.Hd++;c=lf(a.M,b,e,c.Ba,c.df);Ab(a.da,b,c);ci(a)}else c.je(),c.qd=null,c.rd=null,c.G&&(a=new S(c.pd,new U(a,c.path),N),c.G(null,!1,a))}function ci(a,b){var c=b||a.uc;b||di(a,c);if(null!==c.Ca()){var d=ei(a,c);K(0<d.length,"Sending zero length transaction queue");Sa(d,function(a){return 1===a.status})&&fi(a,c.path(),d)}else c.wd()&&c.R(function(b){ci(a,b)})}
function fi(a,b,c){for(var d=Qa(c,function(a){return a.Ba}),e=a.M.za(b,d)||C,d=e,e=e.hash(),f=0;f<c.length;f++){var h=c[f];K(1===h.status,"tryToSendTransactionQueue_: items in queue should all be run.");h.status=2;h.Lf++;var k=O(b,h.path),d=d.K(k,h.qd)}d=d.H(!0);a.ba.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(of(a.M,c[f].Ba));if(c[f].G){var h=c[f].rd,k=new U(a,c[f].path);d.push(q(c[f].G,
null,null,!0,new S(h,k,N)))}c[f].je()}di(a,Gf(a.uc,b));ci(a);Ab(a.da,b,e);for(f=0;f<d.length;f++)Db(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(Q("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].le=d;Uh(a,b)}},e)}function Uh(a,b){var c=gi(a,b),d=c.path(),c=ei(a,c);hi(a,c,d);return d}
function hi(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Qa(b,function(a){return a.Ba}),h=0;h<b.length;h++){var k=b[h],l=O(c,k.path),m=!1,t;K(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)m=!0,t=k.le,e=e.concat(of(a.M,k.Ba,!0));else if(1===k.status)if(25<=k.Lf)m=!0,t="maxretry",e=e.concat(of(a.M,k.Ba,!0));else{var y=a.M.za(k.path,f)||C;k.pd=y;var I=b[h].update(y.H());n(I)?(Wf("transaction failed: Data returned ",I,k.path),l=M(I),"object"===typeof I&&null!=
I&&v(I,".priority")||(l=l.ga(y.B())),y=k.Ba,I=Th(a),I=rc(l,I),k.qd=l,k.rd=I,k.Ba=a.Hd++,Va(f,y),e=e.concat(lf(a.M,k.path,I,k.Ba,k.df)),e=e.concat(of(a.M,y,!0))):(m=!0,t="nodata",e=e.concat(of(a.M,k.Ba,!0)))}Ab(a.da,c,e);e=[];m&&(b[h].status=3,setTimeout(b[h].je,Math.floor(0)),b[h].G&&("nodata"===t?(k=new U(a,b[h].path),d.push(q(b[h].G,null,null,!1,new S(b[h].pd,k,N)))):d.push(q(b[h].G,null,Error(t),!1,null))))}di(a,a.uc);for(h=0;h<d.length;h++)Db(d[h]);ci(a)}}
function gi(a,b){for(var c,d=a.uc;null!==(c=E(b))&&null===d.Ca();)d=Gf(d,c),b=H(b);return d}function ei(a,b){var c=[];ii(a,b,c);c.sort(function(a,b){return a.Ff-b.Ff});return c}function ii(a,b,c){var d=b.Ca();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.R(function(b){ii(a,b,c)})}function di(a,b){var c=b.Ca();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Hf(b,0<c.length?c:null)}b.R(function(b){di(a,b)})}
function Xh(a,b){var c=gi(a,b).path(),d=Gf(a.uc,b);Kf(d,function(b){ji(a,b)});ji(a,d);Jf(d,function(b){ji(a,b)});return c}
function ji(a,b){var c=b.Ca();if(null!==c){for(var d=[],e=[],f=-1,h=0;h<c.length;h++)4!==c[h].status&&(2===c[h].status?(K(f===h-1,"All SENT items should be at beginning of queue."),f=h,c[h].status=4,c[h].le="set"):(K(1===c[h].status,"Unexpected transaction status in abort"),c[h].je(),e=e.concat(of(a.M,c[h].Ba,!0)),c[h].G&&d.push(q(c[h].G,null,Error("set"),!1,null))));-1===f?Hf(b,null):c.length=f+1;Ab(a.da,b.path(),e);for(h=0;h<d.length;h++)Db(d[h])}};function W(){this.oc={};this.Qf=!1}W.prototype.zb=function(){for(var a in this.oc)this.oc[a].zb()};W.prototype.rc=function(){for(var a in this.oc)this.oc[a].rc()};W.prototype.we=function(){this.Qf=!0};ca(W);W.prototype.interrupt=W.prototype.zb;W.prototype.resume=W.prototype.rc;function X(a,b){this.bd=a;this.ra=b}X.prototype.cancel=function(a){x("Firebase.onDisconnect().cancel",0,1,arguments.length);A("Firebase.onDisconnect().cancel",1,a,!0);this.bd.Jd(this.ra,a||null)};X.prototype.cancel=X.prototype.cancel;X.prototype.remove=function(a){x("Firebase.onDisconnect().remove",0,1,arguments.length);bg("Firebase.onDisconnect().remove",this.ra);A("Firebase.onDisconnect().remove",1,a,!0);Yh(this.bd,this.ra,null,a)};X.prototype.remove=X.prototype.remove;
X.prototype.set=function(a,b){x("Firebase.onDisconnect().set",1,2,arguments.length);bg("Firebase.onDisconnect().set",this.ra);Vf("Firebase.onDisconnect().set",a,this.ra,!1);A("Firebase.onDisconnect().set",2,b,!0);Yh(this.bd,this.ra,a,b)};X.prototype.set=X.prototype.set;
X.prototype.Kb=function(a,b,c){x("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);bg("Firebase.onDisconnect().setWithPriority",this.ra);Vf("Firebase.onDisconnect().setWithPriority",a,this.ra,!1);Yf("Firebase.onDisconnect().setWithPriority",2,b);A("Firebase.onDisconnect().setWithPriority",3,c,!0);Zh(this.bd,this.ra,a,b,c)};X.prototype.setWithPriority=X.prototype.Kb;
X.prototype.update=function(a,b){x("Firebase.onDisconnect().update",1,2,arguments.length);bg("Firebase.onDisconnect().update",this.ra);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;Q("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Xf("Firebase.onDisconnect().update",a,this.ra);A("Firebase.onDisconnect().update",2,b,!0);
$h(this.bd,this.ra,a,b)};X.prototype.update=X.prototype.update;function Y(a,b,c,d){this.k=a;this.path=b;this.o=c;this.kc=d}
function ki(a){var b=null,c=null;a.ma&&(b=nd(a));a.pa&&(c=pd(a));if(a.g===Od){if(a.ma){if("[MIN_NAME]"!=md(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.pa){if("[MAX_NAME]"!=od(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===N){if(null!=b&&!Uf(b)||null!=c&&!Uf(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(K(a.g instanceof Sd||a.g===Yd,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function li(a){if(a.ma&&a.pa&&a.ja&&(!a.ja||""===a.Nb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function mi(a,b){if(!0===a.kc)throw Error(b+": You can't combine multiple orderBy calls.");}g=Y.prototype;g.mc=function(){x("Query.ref",0,0,arguments.length);return new U(this.k,this.path)};
g.Fb=function(a,b,c,d){x("Query.on",2,4,arguments.length);Zf("Query.on",a,!1);A("Query.on",2,b,!1);var e=ni("Query.on",c,d);if("value"===a)ai(this.k,this,new id(b,e.cancel||null,e.Ma||null));else{var f={};f[a]=b;ai(this.k,this,new jd(f,e.cancel,e.Ma))}return b};
g.hc=function(a,b,c){x("Query.off",0,3,arguments.length);Zf("Query.off",a,!0);A("Query.off",2,b,!0);mb("Query.off",3,c);var d=null,e=null;"value"===a?d=new id(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new jd(e,null,c||null));e=this.k;d=".info"===E(this.path)?e.Cd.kb(this,d):e.M.kb(this,d);yb(e.da,this.path,d)};
g.Bg=function(a,b){function c(h){f&&(f=!1,e.hc(a,c),b.call(d.Ma,h))}x("Query.once",2,4,arguments.length);Zf("Query.once",a,!1);A("Query.once",2,b,!1);var d=ni("Query.once",arguments[2],arguments[3]),e=this,f=!0;this.Fb(a,c,function(b){e.hc(a,c);d.cancel&&d.cancel.call(d.Ma,b)})};
g.Ie=function(a){Q("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");x("Query.limit",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.");if(this.o.ja)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var b=this.o.Ie(a);li(b);return new Y(this.k,this.path,b,this.kc)};
g.Je=function(a){x("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.o.ja)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.o.Je(a),this.kc)};
g.Ke=function(a){x("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.o.ja)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.o.Ke(a),this.kc)};
g.Cg=function(a){x("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');$f("Query.orderByChild",1,a,!1);mi(this,"Query.orderByChild");var b=be(this.o,new Sd(a));ki(b);return new Y(this.k,
this.path,b,!0)};g.Dg=function(){x("Query.orderByKey",0,0,arguments.length);mi(this,"Query.orderByKey");var a=be(this.o,Od);ki(a);return new Y(this.k,this.path,a,!0)};g.Eg=function(){x("Query.orderByPriority",0,0,arguments.length);mi(this,"Query.orderByPriority");var a=be(this.o,N);ki(a);return new Y(this.k,this.path,a,!0)};g.Fg=function(){x("Query.orderByValue",0,0,arguments.length);mi(this,"Query.orderByValue");var a=be(this.o,Yd);ki(a);return new Y(this.k,this.path,a,!0)};
g.ae=function(a,b){x("Query.startAt",0,2,arguments.length);Vf("Query.startAt",a,this.path,!0);$f("Query.startAt",2,b,!0);var c=this.o.ae(a,b);li(c);ki(c);if(this.o.ma)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new Y(this.k,this.path,c,this.kc)};
g.td=function(a,b){x("Query.endAt",0,2,arguments.length);Vf("Query.endAt",a,this.path,!0);$f("Query.endAt",2,b,!0);var c=this.o.td(a,b);li(c);ki(c);if(this.o.pa)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new Y(this.k,this.path,c,this.kc)};
g.ig=function(a,b){x("Query.equalTo",1,2,arguments.length);Vf("Query.equalTo",a,this.path,!1);$f("Query.equalTo",2,b,!0);if(this.o.ma)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.o.pa)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.ae(a,b).td(a,b)};
g.toString=function(){x("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Z;c<a.n.length;c++)""!==a.n[c]&&(b+="/"+encodeURIComponent(String(a.n[c])));return this.k.toString()+(b||"/")};g.va=function(){var a=Vc(ce(this.o));return"{}"===a?"default":a};
function ni(a,b,c){var d={cancel:null,Ma:null};if(b&&c)d.cancel=b,A(a,3,d.cancel,!0),d.Ma=c,mb(a,4,d.Ma);else if(b)if("object"===typeof b&&null!==b)d.Ma=b;else if("function"===typeof b)d.cancel=b;else throw Error(z(a,3,!0)+" must either be a cancel callback or a context object.");return d}Y.prototype.ref=Y.prototype.mc;Y.prototype.on=Y.prototype.Fb;Y.prototype.off=Y.prototype.hc;Y.prototype.once=Y.prototype.Bg;Y.prototype.limit=Y.prototype.Ie;Y.prototype.limitToFirst=Y.prototype.Je;
Y.prototype.limitToLast=Y.prototype.Ke;Y.prototype.orderByChild=Y.prototype.Cg;Y.prototype.orderByKey=Y.prototype.Dg;Y.prototype.orderByPriority=Y.prototype.Eg;Y.prototype.orderByValue=Y.prototype.Fg;Y.prototype.startAt=Y.prototype.ae;Y.prototype.endAt=Y.prototype.td;Y.prototype.equalTo=Y.prototype.ig;Y.prototype.toString=Y.prototype.toString;var Z={};Z.vc=Ch;Z.DataConnection=Z.vc;Ch.prototype.Pg=function(a,b){this.Fa("q",{p:a},b)};Z.vc.prototype.simpleListen=Z.vc.prototype.Pg;Ch.prototype.hg=function(a,b){this.Fa("echo",{d:a},b)};Z.vc.prototype.echo=Z.vc.prototype.hg;Ch.prototype.interrupt=Ch.prototype.zb;Z.Tf=qh;Z.RealTimeConnection=Z.Tf;qh.prototype.sendRequest=qh.prototype.Fa;qh.prototype.close=qh.prototype.close;
Z.pg=function(a){var b=Ch.prototype.put;Ch.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Ch.prototype.put=b}};Z.hijackHash=Z.pg;Z.Sf=Dc;Z.ConnectionTarget=Z.Sf;Z.va=function(a){return a.va()};Z.queryIdentifier=Z.va;Z.rg=function(a){return a.k.Sa.$};Z.listens=Z.rg;Z.we=function(a){a.we()};Z.forceRestClient=Z.we;function U(a,b){var c,d,e;if(a instanceof Qh)c=a,d=b;else{x("new Firebase",1,2,arguments.length);d=Qc(arguments[0]);c=d.Rg;"firebase"===d.domain&&Pc(d.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");c&&"undefined"!=c||Pc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d.lb||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
c=new Dc(d.host,d.lb,c,"ws"===d.scheme||"wss"===d.scheme);d=new L(d.$c);e=d.toString();var f;!(f=!p(c.host)||0===c.host.length||!Tf(c.Db))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(p(e)&&0!==e.length&&!Rf.test(e)));if(f)throw Error(z("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof W)e=b;else if(p(b))e=W.vb(),c.Od=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
else e=W.vb();f=c.toString();var h=w(e.oc,f);h||(h=new Qh(c,e.Qf),e.oc[f]=h);c=h}Y.call(this,c,d,$d,!1)}ma(U,Y);var oi=U,pi=["Firebase"],qi=aa;pi[0]in qi||!qi.execScript||qi.execScript("var "+pi[0]);for(var ri;pi.length&&(ri=pi.shift());)!pi.length&&n(oi)?qi[ri]=oi:qi=qi[ri]?qi[ri]:qi[ri]={};U.goOffline=function(){x("Firebase.goOffline",0,0,arguments.length);W.vb().zb()};U.goOnline=function(){x("Firebase.goOnline",0,0,arguments.length);W.vb().rc()};
function Mc(a,b){K(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?Bb=q(console.log,console):"object"===typeof console.log&&(Bb=function(a){console.log(a)})),b&&P.set("logging_enabled",!0)):a?Bb=a:(Bb=null,P.remove("logging_enabled"))}U.enableLogging=Mc;U.ServerValue={TIMESTAMP:{".sv":"timestamp"}};U.SDK_VERSION=hb;U.INTERNAL=V;U.Context=W;U.TEST_ACCESS=Z;
U.prototype.name=function(){Q("Firebase.name() being deprecated. Please use Firebase.key() instead.");x("Firebase.name",0,0,arguments.length);return this.key()};U.prototype.name=U.prototype.name;U.prototype.key=function(){x("Firebase.key",0,0,arguments.length);return this.path.e()?null:uc(this.path)};U.prototype.key=U.prototype.key;
U.prototype.u=function(a){x("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof L))if(null===E(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));ag("Firebase.child",b)}else ag("Firebase.child",a);return new U(this.k,this.path.u(a))};U.prototype.child=U.prototype.u;U.prototype.parent=function(){x("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.k,a)};U.prototype.parent=U.prototype.parent;
U.prototype.root=function(){x("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};U.prototype.root=U.prototype.root;U.prototype.set=function(a,b){x("Firebase.set",1,2,arguments.length);bg("Firebase.set",this.path);Vf("Firebase.set",a,this.path,!1);A("Firebase.set",2,b,!0);this.k.Kb(this.path,a,null,b||null)};U.prototype.set=U.prototype.set;
U.prototype.update=function(a,b){x("Firebase.update",1,2,arguments.length);bg("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;Q("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Xf("Firebase.update",a,this.path);A("Firebase.update",2,b,!0);this.k.update(this.path,a,b||null)};U.prototype.update=U.prototype.update;
U.prototype.Kb=function(a,b,c){x("Firebase.setWithPriority",2,3,arguments.length);bg("Firebase.setWithPriority",this.path);Vf("Firebase.setWithPriority",a,this.path,!1);Yf("Firebase.setWithPriority",2,b);A("Firebase.setWithPriority",3,c,!0);if(".length"===this.key()||".keys"===this.key())throw"Firebase.setWithPriority failed: "+this.key()+" is a read-only object.";this.k.Kb(this.path,a,b,c||null)};U.prototype.setWithPriority=U.prototype.Kb;
U.prototype.remove=function(a){x("Firebase.remove",0,1,arguments.length);bg("Firebase.remove",this.path);A("Firebase.remove",1,a,!0);this.set(null,a)};U.prototype.remove=U.prototype.remove;
U.prototype.transaction=function(a,b,c){x("Firebase.transaction",1,3,arguments.length);bg("Firebase.transaction",this.path);A("Firebase.transaction",1,a,!1);A("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(z("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Firebase.transaction failed: "+this.key()+" is a read-only object.";"undefined"===typeof c&&(c=!0);bi(this.k,this.path,a,b||null,c)};U.prototype.transaction=U.prototype.transaction;
U.prototype.Mg=function(a,b){x("Firebase.setPriority",1,2,arguments.length);bg("Firebase.setPriority",this.path);Yf("Firebase.setPriority",1,a);A("Firebase.setPriority",2,b,!0);this.k.Kb(this.path.u(".priority"),a,null,b)};U.prototype.setPriority=U.prototype.Mg;
U.prototype.push=function(a,b){x("Firebase.push",0,2,arguments.length);bg("Firebase.push",this.path);Vf("Firebase.push",a,this.path,!0);A("Firebase.push",2,b,!0);var c=Sh(this.k),c=Nf(c),c=this.u(c);"undefined"!==typeof a&&null!==a&&c.set(a,b);return c};U.prototype.push=U.prototype.push;U.prototype.ib=function(){bg("Firebase.onDisconnect",this.path);return new X(this.k,this.path)};U.prototype.onDisconnect=U.prototype.ib;
U.prototype.N=function(a,b,c){Q("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");x("Firebase.auth",1,3,arguments.length);cg("Firebase.auth",a);A("Firebase.auth",2,b,!0);A("Firebase.auth",3,b,!0);Qg(this.k.N,a,{},{remember:"none"},b,c)};U.prototype.auth=U.prototype.N;U.prototype.he=function(a){x("Firebase.unauth",0,1,arguments.length);A("Firebase.unauth",1,a,!0);Rg(this.k.N,a)};U.prototype.unauth=U.prototype.he;
U.prototype.ye=function(){x("Firebase.getAuth",0,0,arguments.length);return this.k.N.ye()};U.prototype.getAuth=U.prototype.ye;U.prototype.vg=function(a,b){x("Firebase.onAuth",1,2,arguments.length);A("Firebase.onAuth",1,a,!1);mb("Firebase.onAuth",2,b);this.k.N.Fb("auth_status",a,b)};U.prototype.onAuth=U.prototype.vg;U.prototype.ug=function(a,b){x("Firebase.offAuth",1,2,arguments.length);A("Firebase.offAuth",1,a,!1);mb("Firebase.offAuth",2,b);this.k.N.hc("auth_status",a,b)};U.prototype.offAuth=U.prototype.ug;
U.prototype.Xf=function(a,b,c){x("Firebase.authWithCustomToken",2,3,arguments.length);cg("Firebase.authWithCustomToken",a);A("Firebase.authWithCustomToken",2,b,!1);fg("Firebase.authWithCustomToken",3,c,!0);Qg(this.k.N,a,{},c||{},b)};U.prototype.authWithCustomToken=U.prototype.Xf;U.prototype.Yf=function(a,b,c){x("Firebase.authWithOAuthPopup",2,3,arguments.length);eg("Firebase.authWithOAuthPopup",a);A("Firebase.authWithOAuthPopup",2,b,!1);fg("Firebase.authWithOAuthPopup",3,c,!0);Vg(this.k.N,a,c,b)};
U.prototype.authWithOAuthPopup=U.prototype.Yf;U.prototype.Zf=function(a,b,c){x("Firebase.authWithOAuthRedirect",2,3,arguments.length);eg("Firebase.authWithOAuthRedirect",a);A("Firebase.authWithOAuthRedirect",2,b,!1);fg("Firebase.authWithOAuthRedirect",3,c,!0);var d=this.k.N;Tg(d);var e=[Cg],f=ng(c);"anonymous"===a||"firebase"===a?R(b,Eg("TRANSPORT_UNAVAILABLE")):(P.set("redirect_client_options",f.od),Ug(d,e,"/auth/"+a,f,b))};U.prototype.authWithOAuthRedirect=U.prototype.Zf;
U.prototype.$f=function(a,b,c,d){x("Firebase.authWithOAuthToken",3,4,arguments.length);eg("Firebase.authWithOAuthToken",a);A("Firebase.authWithOAuthToken",3,c,!1);fg("Firebase.authWithOAuthToken",4,d,!0);p(b)?(dg("Firebase.authWithOAuthToken",2,b),Sg(this.k.N,a+"/token",{access_token:b},d,c)):(fg("Firebase.authWithOAuthToken",2,b,!1),Sg(this.k.N,a+"/token",b,d,c))};U.prototype.authWithOAuthToken=U.prototype.$f;
U.prototype.Wf=function(a,b){x("Firebase.authAnonymously",1,2,arguments.length);A("Firebase.authAnonymously",1,a,!1);fg("Firebase.authAnonymously",2,b,!0);Sg(this.k.N,"anonymous",{},b,a)};U.prototype.authAnonymously=U.prototype.Wf;
U.prototype.ag=function(a,b,c){x("Firebase.authWithPassword",2,3,arguments.length);fg("Firebase.authWithPassword",1,a,!1);gg("Firebase.authWithPassword",a,"email");gg("Firebase.authWithPassword",a,"password");A("Firebase.authWithPassword",2,b,!1);fg("Firebase.authWithPassword",3,c,!0);Sg(this.k.N,"password",a,c,b)};U.prototype.authWithPassword=U.prototype.ag;
U.prototype.te=function(a,b){x("Firebase.createUser",2,2,arguments.length);fg("Firebase.createUser",1,a,!1);gg("Firebase.createUser",a,"email");gg("Firebase.createUser",a,"password");A("Firebase.createUser",2,b,!1);this.k.N.te(a,b)};U.prototype.createUser=U.prototype.te;U.prototype.Ue=function(a,b){x("Firebase.removeUser",2,2,arguments.length);fg("Firebase.removeUser",1,a,!1);gg("Firebase.removeUser",a,"email");gg("Firebase.removeUser",a,"password");A("Firebase.removeUser",2,b,!1);this.k.N.Ue(a,b)};
U.prototype.removeUser=U.prototype.Ue;U.prototype.qe=function(a,b){x("Firebase.changePassword",2,2,arguments.length);fg("Firebase.changePassword",1,a,!1);gg("Firebase.changePassword",a,"email");gg("Firebase.changePassword",a,"oldPassword");gg("Firebase.changePassword",a,"newPassword");A("Firebase.changePassword",2,b,!1);this.k.N.qe(a,b)};U.prototype.changePassword=U.prototype.qe;
U.prototype.pe=function(a,b){x("Firebase.changeEmail",2,2,arguments.length);fg("Firebase.changeEmail",1,a,!1);gg("Firebase.changeEmail",a,"oldEmail");gg("Firebase.changeEmail",a,"newEmail");gg("Firebase.changeEmail",a,"password");A("Firebase.changeEmail",2,b,!1);this.k.N.pe(a,b)};U.prototype.changeEmail=U.prototype.pe;
U.prototype.We=function(a,b){x("Firebase.resetPassword",2,2,arguments.length);fg("Firebase.resetPassword",1,a,!1);gg("Firebase.resetPassword",a,"email");A("Firebase.resetPassword",2,b,!1);this.k.N.We(a,b)};U.prototype.resetPassword=U.prototype.We;})();



// setup
Elm.Native = Elm.Native || {};
Elm.Native.Graphics = Elm.Native.Graphics || {};
Elm.Native.Graphics.Collage = Elm.Native.Graphics.Collage || {};

// definition
Elm.Native.Graphics.Collage.make = function(localRuntime) {
	'use strict';

	// attempt to short-circuit
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Graphics = localRuntime.Native.Graphics || {};
	localRuntime.Native.Graphics.Collage = localRuntime.Native.Graphics.Collage || {};
	if ('values' in localRuntime.Native.Graphics.Collage)
	{
		return localRuntime.Native.Graphics.Collage.values;
	}

	// okay, we cannot short-ciruit, so now we define everything
	var Color = Elm.Native.Color.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var NativeElement = Elm.Native.Graphics.Element.make(localRuntime);
	var Transform = Elm.Transform2D.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);

	function setStrokeStyle(ctx, style)
	{
		ctx.lineWidth = style.width;

		var cap = style.cap.ctor;
		ctx.lineCap = cap === 'Flat'
			? 'butt'
			: cap === 'Round'
				? 'round'
				: 'square';

		var join = style.join.ctor;
		ctx.lineJoin = join === 'Smooth'
			? 'round'
			: join === 'Sharp'
				? 'miter'
				: 'bevel';

		ctx.miterLimit = style.join._0 || 10;
		ctx.strokeStyle = Color.toCss(style.color);
	}

	function setFillStyle(ctx, style)
	{
		var sty = style.ctor;
		ctx.fillStyle = sty === 'Solid'
			? Color.toCss(style._0)
			: sty === 'Texture'
				? texture(redo, ctx, style._0)
				: gradient(ctx, style._0);
	}

	function trace(ctx, path)
	{
		var points = List.toArray(path);
		var i = points.length - 1;
		if (i <= 0)
		{
			return;
		}
		ctx.moveTo(points[i]._0, points[i]._1);
		while (i--)
		{
			ctx.lineTo(points[i]._0, points[i]._1);
		}
		if (path.closed)
		{
			i = points.length - 1;
			ctx.lineTo(points[i]._0, points[i]._1);
		}
	}

	function line(ctx,style,path)
	{
		(style.dashing.ctor === '[]')
			? trace(ctx, path)
			: customLineHelp(ctx, style, path);
		ctx.scale(1,-1);
		ctx.stroke();
	}

	function customLineHelp(ctx, style, path)
	{
		var points = List.toArray(path);
		if (path.closed)
		{
			points.push(points[0]);
		}
		var pattern = List.toArray(style.dashing);
		var i = points.length - 1;
		if (i <= 0)
		{
			return;
		}
		var x0 = points[i]._0, y0 = points[i]._1;
		var x1=0, y1=0, dx=0, dy=0, remaining=0, nx=0, ny=0;
		var pindex = 0, plen = pattern.length;
		var draw = true, segmentLength = pattern[0];
		ctx.moveTo(x0,y0);
		while (i--)
		{
			x1 = points[i]._0;
			y1 = points[i]._1;
			dx = x1 - x0;
			dy = y1 - y0;
			remaining = Math.sqrt(dx * dx + dy * dy);
			while (segmentLength <= remaining)
			{
				x0 += dx * segmentLength / remaining;
				y0 += dy * segmentLength / remaining;
				ctx[draw ? 'lineTo' : 'moveTo'](x0, y0);
				// update starting position
				dx = x1 - x0;
				dy = y1 - y0;
				remaining = Math.sqrt(dx * dx + dy * dy);
				// update pattern
				draw = !draw;
				pindex = (pindex + 1) % plen;
				segmentLength = pattern[pindex];
			}
			if (remaining > 0)
			{
				ctx[draw ? 'lineTo' : 'moveTo'](x1, y1);
				segmentLength -= remaining;
			}
			x0 = x1;
			y0 = y1;
		}
	}

	function drawLine(ctx, style, path)
	{
		setStrokeStyle(ctx, style);
		return line(ctx, style, path);
	}

	function texture(redo, ctx, src)
	{
		var img = new Image();
		img.src = src;
		img.onload = redo;
		return ctx.createPattern(img, 'repeat');
	}

	function gradient(ctx, grad)
	{
		var g;
		var stops = [];
		if (grad.ctor === 'Linear')
		{
			var p0 = grad._0, p1 = grad._1;
			g = ctx.createLinearGradient(p0._0, -p0._1, p1._0, -p1._1);
			stops = List.toArray(grad._2);
		}
		else
		{
			var p0 = grad._0, p2 = grad._2;
			g = ctx.createRadialGradient(p0._0, -p0._1, grad._1, p2._0, -p2._1, grad._3);
			stops = List.toArray(grad._4);
		}
		var len = stops.length;
		for (var i = 0; i < len; ++i)
		{
			var stop = stops[i];
			g.addColorStop(stop._0, Color.toCss(stop._1));
		}
		return g;
	}

	function drawShape(redo, ctx, style, path)
	{
		trace(ctx, path);
		setFillStyle(ctx, style);
		ctx.scale(1,-1);
		ctx.fill();
	}


	// TEXT RENDERING

	function fillText(redo, ctx, text)
	{
		drawText(ctx, text, ctx.fillText);
	}

	function strokeText(redo, ctx, style, text)
	{
		setStrokeStyle(ctx, style);
		// Use native canvas API for dashes only for text for now
		// Degrades to non-dashed on IE 9 + 10
		if (style.dashing.ctor !== '[]' && ctx.setLineDash)
		{
			var pattern = List.toArray(style.dashing);
			ctx.setLineDash(pattern);
		}
		drawText(ctx, text, ctx.strokeText);
	}

	function drawText(ctx, text, canvasDrawFn)
	{
		var textChunks = chunkText(defaultContext, text);

		var totalWidth = 0;
		var maxHeight = 0;
		var numChunks = textChunks.length;

		ctx.scale(1,-1);

		for (var i = numChunks; i--; )
		{
			var chunk = textChunks[i];
			ctx.font = chunk.font;
			var metrics = ctx.measureText(chunk.text);
			chunk.width = metrics.width;
			totalWidth += chunk.width;
			if (chunk.height > maxHeight)
			{
				maxHeight = chunk.height;
			}
		}

		var x = -totalWidth / 2.0;
		for (var i = 0; i < numChunks; ++i)
		{
			var chunk = textChunks[i];
			ctx.font = chunk.font;
			ctx.fillStyle = chunk.color;
			canvasDrawFn.call(ctx, chunk.text, x, maxHeight / 2);
			x += chunk.width;
		}
	}

	function toFont(props)
	{
		return [
			props['font-style'],
			props['font-variant'],
			props['font-weight'],
			props['font-size'],
			props['font-family']
		].join(' ');
	}


	// Convert the object returned by the text module
	// into something we can use for styling canvas text
	function chunkText(context, text)
	{
		var tag = text.ctor;
		if (tag === 'Text:Append')
		{
			var leftChunks = chunkText(context, text._0);
			var rightChunks = chunkText(context, text._1);
			return leftChunks.concat(rightChunks);
		}
		if (tag === 'Text:Text')
		{
			return [{
				text: text._0,
				color: context.color,
				height: context['font-size'].slice(0,-2) | 0,
				font: toFont(context)
			}];
		}
		if (tag === 'Text:Meta')
		{
			var newContext = freshContext(text._0, context);
			return chunkText(newContext, text._1);
		}
	}

	function freshContext(props, ctx)
	{
		return {
			'font-style': props['font-style'] || ctx['font-style'],
			'font-variant': props['font-variant'] || ctx['font-variant'],
			'font-weight': props['font-weight'] || ctx['font-weight'],
			'font-size': props['font-size'] || ctx['font-size'],
			'font-family': props['font-family'] || ctx['font-family'],
			'color': props['color'] || ctx['color']
		};
	}

	var defaultContext = {
		'font-style': 'normal',
		'font-variant': 'normal',
		'font-weight': 'normal',
		'font-size': '12px',
		'font-family': 'sans-serif',
		'color': 'black'
	};


	// IMAGES

	function drawImage(redo, ctx, form)
	{
		var img = new Image();
		img.onload = redo;
		img.src = form._3;
		var w = form._0,
			h = form._1,
			pos = form._2,
			srcX = pos._0,
			srcY = pos._1,
			srcW = w,
			srcH = h,
			destX = -w/2,
			destY = -h/2,
			destW = w,
			destH = h;

		ctx.scale(1,-1);
		ctx.drawImage(img, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
	}

	function renderForm(redo, ctx, form)
	{
		ctx.save();

		var x = form.x,
			y = form.y,
			theta = form.theta,
			scale = form.scale;

		if (x !== 0 || y !== 0)
		{
			ctx.translate(x, y);
		}
		if (theta !== 0)
		{
			ctx.rotate(theta);
		}
		if (scale !== 1)
		{
			ctx.scale(scale,scale);
		}
		if (form.alpha !== 1)
		{
			ctx.globalAlpha = ctx.globalAlpha * form.alpha;
		}

		ctx.beginPath();
		var f = form.form;
		switch (f.ctor)
		{
			case 'FPath':
				drawLine(ctx, f._0, f._1);
				break;

			case 'FImage':
				drawImage(redo, ctx, f);
				break;

			case 'FShape':
				if (f._0.ctor === 'Line')
				{
					f._1.closed = true;
					drawLine(ctx, f._0._0, f._1);
				}
				else
				{
					drawShape(redo, ctx, f._0._0, f._1);
				}
				break;

			case 'FText':
				fillText(redo, ctx, f._0);
				break;

			case 'FOutlinedText':
				strokeText(redo, ctx, f._0, f._1);
				break;
		}
		ctx.restore();
	}

	function formToMatrix(form)
	{
	   var scale = form.scale;
	   var matrix = A6( Transform.matrix, scale, 0, 0, scale, form.x, form.y );

	   var theta = form.theta
	   if (theta !== 0)
	   {
		   matrix = A2( Transform.multiply, matrix, Transform.rotation(theta) );
	   }

	   return matrix;
	}

	function str(n)
	{
		if (n < 0.00001 && n > -0.00001)
		{
			return 0;
		}
		return n;
	}

	function makeTransform(w, h, form, matrices)
	{
		var props = form.form._0.props;
		var m = A6( Transform.matrix, 1, 0, 0, -1,
					(w - props.width ) / 2,
					(h - props.height) / 2 );
		var len = matrices.length;
		for (var i = 0; i < len; ++i)
		{
			m = A2( Transform.multiply, m, matrices[i] );
		}
		m = A2( Transform.multiply, m, formToMatrix(form) );

		return 'matrix(' +
			str( m[0]) + ', ' + str( m[3]) + ', ' +
			str(-m[1]) + ', ' + str(-m[4]) + ', ' +
			str( m[2]) + ', ' + str( m[5]) + ')';
	}

	function stepperHelp(list)
	{
		var arr = List.toArray(list);
		var i = 0;
		function peekNext()
		{
			return i < arr.length ? arr[i].form.ctor : '';
		}
		// assumes that there is a next element
		function next()
		{
			var out = arr[i];
			++i;
			return out;
		}
		return {
			peekNext: peekNext,
			next: next
		};
	}

	function formStepper(forms)
	{
		var ps = [stepperHelp(forms)];
		var matrices = [];
		var alphas = [];
		function peekNext()
		{
			var len = ps.length;
			var formType = '';
			for (var i = 0; i < len; ++i )
			{
				if (formType = ps[i].peekNext()) return formType;
			}
			return '';
		}
		// assumes that there is a next element
		function next(ctx)
		{
			while (!ps[0].peekNext())
			{
				ps.shift();
				matrices.pop();
				alphas.shift();
				if (ctx)
				{
					ctx.restore();
				}
			}
			var out = ps[0].next();
			var f = out.form;
			if (f.ctor === 'FGroup')
			{
				ps.unshift(stepperHelp(f._1));
				var m = A2(Transform.multiply, f._0, formToMatrix(out));
				ctx.save();
				ctx.transform(m[0], m[3], m[1], m[4], m[2], m[5]);
				matrices.push(m);

				var alpha = (alphas[0] || 1) * out.alpha;
				alphas.unshift(alpha);
				ctx.globalAlpha = alpha;
			}
			return out;
		}
		function transforms()
		{
			return matrices;
		}
		function alpha()
		{
			return alphas[0] || 1;
		}
		return {
			peekNext: peekNext,
			next: next,
			transforms: transforms,
			alpha: alpha
		};
	}

	function makeCanvas(w,h)
	{
		var canvas = NativeElement.createNode('canvas');
		canvas.style.width  = w + 'px';
		canvas.style.height = h + 'px';
		canvas.style.display = "block";
		canvas.style.position = "absolute";
		var ratio = window.devicePixelRatio || 1;
		canvas.width  = w * ratio;
		canvas.height = h * ratio;
		return canvas;
	}

	function render(model)
	{
		var div = NativeElement.createNode('div');
		div.style.overflow = 'hidden';
		div.style.position = 'relative';
		update(div, model, model);
		return div;
	}

	function nodeStepper(w,h,div)
	{
		var kids = div.childNodes;
		var i = 0;
		var ratio = window.devicePixelRatio || 1;

		function transform(transforms, ctx)
		{
			ctx.translate( w / 2 * ratio, h / 2 * ratio );
			ctx.scale( ratio, -ratio );
			var len = transforms.length;
			for (var i = 0; i < len; ++i)
			{
				var m = transforms[i];
				ctx.save();
				ctx.transform(m[0], m[3], m[1], m[4], m[2], m[5]);
			}
			return ctx;
		}
		function nextContext(transforms)
		{
			while (i < kids.length)
			{
				var node = kids[i];
				if (node.getContext)
				{
					node.width = w * ratio;
					node.height = h * ratio;
					node.style.width = w + 'px';
					node.style.height = h + 'px';
					++i;
					return transform(transforms, node.getContext('2d'));
				}
				div.removeChild(node);
			}
			var canvas = makeCanvas(w,h);
			div.appendChild(canvas);
			// we have added a new node, so we must step our position
			++i;
			return transform(transforms, canvas.getContext('2d'));
		}
		function addElement(matrices, alpha, form)
		{
			var kid = kids[i];
			var elem = form.form._0;

			var node = (!kid || kid.getContext)
				? NativeElement.render(elem)
				: NativeElement.update(kid, kid.oldElement, elem);

			node.style.position = 'absolute';
			node.style.opacity = alpha * form.alpha * elem.props.opacity;
			NativeElement.addTransform(node.style, makeTransform(w, h, form, matrices));
			node.oldElement = elem;
			++i;
			if (!kid)
			{
				div.appendChild(node);
			}
			else
			{
				div.insertBefore(node, kid);
			}
		}
		function clearRest()
		{
			while (i < kids.length)
			{
				div.removeChild(kids[i]);
			}
		}
		return {
			nextContext: nextContext,
			addElement: addElement,
			clearRest: clearRest
		};
	}


	function update(div, _, model)
	{
		var w = model.w;
		var h = model.h;

		var forms = formStepper(model.forms);
		var nodes = nodeStepper(w,h,div);
		var ctx = null;
		var formType = '';

		while (formType = forms.peekNext())
		{
			// make sure we have context if we need it
			if (ctx === null && formType !== 'FElement')
			{
				ctx = nodes.nextContext(forms.transforms());
				ctx.globalAlpha = forms.alpha();
			}

			var form = forms.next(ctx);
			// if it is FGroup, all updates are made within formStepper when next is called.
			if (formType === 'FElement')
			{
				// update or insert an element, get a new context
				nodes.addElement(forms.transforms(), forms.alpha(), form);
				ctx = null;
			}
			else if (formType !== 'FGroup')
			{
				renderForm(function() { update(div, model, model); }, ctx, form);
			}
		}
		nodes.clearRest();
		return div;
	}


	function collage(w,h,forms)
	{
		return A3(NativeElement.newElement, w, h, {
			ctor: 'Custom',
			type: 'Collage',
			render: render,
			update: update,
			model: {w:w, h:h, forms:forms}
		});
	}

	return localRuntime.Native.Graphics.Collage.values = {
		collage: F3(collage)
	};

};


// setup
Elm.Native = Elm.Native || {};
Elm.Native.Graphics = Elm.Native.Graphics || {};
Elm.Native.Graphics.Element = Elm.Native.Graphics.Element || {};

// definition
Elm.Native.Graphics.Element.make = function(localRuntime) {
	'use strict';

	// attempt to short-circuit
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Graphics = localRuntime.Native.Graphics || {};
	localRuntime.Native.Graphics.Element = localRuntime.Native.Graphics.Element || {};
	if ('values' in localRuntime.Native.Graphics.Element)
	{
		return localRuntime.Native.Graphics.Element.values;
	}

	var Color = Elm.Native.Color.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);
	var Text = Elm.Native.Text.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);


	// CREATION

	function createNode(elementType)
	{
		var node = document.createElement(elementType);
		node.style.padding = "0";
		node.style.margin = "0";
		return node;
	}


	function newElement(width, height, elementPrim)
	{
		return {
			_: {},
			element: elementPrim,
			props: {
				_: {},
				id: Utils.guid(),
				width: width,
				height: height,
				opacity: 1,
				color: Maybe.Nothing,
				href: "",
				tag: "",
				hover: Utils.Tuple0,
				click: Utils.Tuple0
			}
		};
	}


	// PROPERTIES

	function setProps(elem, node)
	{
		var props = elem.props;

		var element = elem.element;
		var width = props.width - (element.adjustWidth || 0);
		var height = props.height - (element.adjustHeight || 0);
		node.style.width  = (width |0) + 'px';
		node.style.height = (height|0) + 'px';

		if (props.opacity !== 1)
		{
			node.style.opacity = props.opacity;
		}

		if (props.color.ctor === 'Just')
		{
			node.style.backgroundColor = Color.toCss(props.color._0);
		}

		if (props.tag !== '')
		{
			node.id = props.tag;
		}

		if (props.hover.ctor !== '_Tuple0')
		{
			addHover(node, props.hover);
		}

		if (props.click.ctor !== '_Tuple0')
		{
			addClick(node, props.click);
		}

		if (props.href !== '')
		{
			var anchor = createNode('a');
			anchor.href = props.href;
			anchor.style.display = 'block';
			anchor.style.pointerEvents = 'auto';
			anchor.appendChild(node);
			node = anchor;
		}

		return node;
	}

	function addClick(e, handler)
	{
		e.style.pointerEvents = 'auto';
		e.elm_click_handler = handler;
		function trigger(ev)
		{
			e.elm_click_handler(Utils.Tuple0);
			ev.stopPropagation();
		}
		e.elm_click_trigger = trigger;
		e.addEventListener('click', trigger);
	}

	function removeClick(e, handler)
	{
		if (e.elm_click_trigger)
		{
			e.removeEventListener('click', e.elm_click_trigger);
			e.elm_click_trigger = null;
			e.elm_click_handler = null;
		}
	}

	function addHover(e, handler)
	{
		e.style.pointerEvents = 'auto';
		e.elm_hover_handler = handler;
		e.elm_hover_count = 0;

		function over(evt)
		{
			if (e.elm_hover_count++ > 0) return;
			e.elm_hover_handler(true);
			evt.stopPropagation();
		}
		function out(evt)
		{
			if (e.contains(evt.toElement || evt.relatedTarget)) return;
			e.elm_hover_count = 0;
			e.elm_hover_handler(false);
			evt.stopPropagation();
		}
		e.elm_hover_over = over;
		e.elm_hover_out = out;
		e.addEventListener('mouseover', over);
		e.addEventListener('mouseout', out);
	}

	function removeHover(e)
	{
		e.elm_hover_handler = null;
		if (e.elm_hover_over)
		{
			e.removeEventListener('mouseover', e.elm_hover_over);
			e.elm_hover_over = null;
		}
		if (e.elm_hover_out)
		{
			e.removeEventListener('mouseout', e.elm_hover_out);
			e.elm_hover_out = null;
		}
	}


	// IMAGES

	function image(props, img)
	{
		switch (img._0.ctor)
		{
			case 'Plain':
				return plainImage(img._3);

			case 'Fitted':
				return fittedImage(props.width, props.height, img._3);

			case 'Cropped':
				return croppedImage(img,props.width,props.height,img._3);

			case 'Tiled':
				return tiledImage(img._3);
		}
	}

	function plainImage(src)
	{
		var img = createNode('img');
		img.src = src;
		img.name = src;
		img.style.display = "block";
		return img;
	}

	function tiledImage(src)
	{
		var div = createNode('div');
		div.style.backgroundImage = 'url(' + src + ')';
		return div;
	}

	function fittedImage(w, h, src)
	{
		var div = createNode('div');
		div.style.background = 'url(' + src + ') no-repeat center';
		div.style.webkitBackgroundSize = 'cover';
		div.style.MozBackgroundSize = 'cover';
		div.style.OBackgroundSize = 'cover';
		div.style.backgroundSize = 'cover';
		return div;
	}

	function croppedImage(elem, w, h, src)
	{
		var pos = elem._0._0;
		var e = createNode('div');
		e.style.overflow = "hidden";

		var img = createNode('img');
		img.onload = function() {
			var sw = w / elem._1, sh = h / elem._2;
			img.style.width = ((this.width * sw)|0) + 'px';
			img.style.height = ((this.height * sh)|0) + 'px';
			img.style.marginLeft = ((- pos._0 * sw)|0) + 'px';
			img.style.marginTop = ((- pos._1 * sh)|0) + 'px';
		};
		img.src = src;
		img.name = src;
		e.appendChild(img);
		return e;
	}


	// FLOW

	function goOut(node)
	{
		node.style.position = 'absolute';
		return node;
	}
	function goDown(node)
	{
		return node;
	}
	function goRight(node)
	{
		node.style.styleFloat = 'left';
		node.style.cssFloat = 'left';
		return node;
	}

	var directionTable = {
		DUp    : goDown,
		DDown  : goDown,
		DLeft  : goRight,
		DRight : goRight,
		DIn    : goOut,
		DOut   : goOut
	};
	function needsReversal(dir)
	{
		return dir == 'DUp' || dir == 'DLeft' || dir == 'DIn';
	}

	function flow(dir,elist)
	{
		var array = List.toArray(elist);
		var container = createNode('div');
		var goDir = directionTable[dir];
		if (goDir == goOut)
		{
			container.style.pointerEvents = 'none';
		}
		if (needsReversal(dir))
		{
			array.reverse();
		}
		var len = array.length;
		for (var i = 0; i < len; ++i)
		{
			container.appendChild(goDir(render(array[i])));
		}
		return container;
	}


	// CONTAINER

	function toPos(pos)
	{
		return pos.ctor === "Absolute"
			? pos._0 + "px"
			: (pos._0 * 100) + "%";
	}

	// must clear right, left, top, bottom, and transform
	// before calling this function
	function setPos(pos,elem,e)
	{
		var element = elem.element;
		var props = elem.props;
		var w = props.width + (element.adjustWidth ? element.adjustWidth : 0);
		var h = props.height + (element.adjustHeight ? element.adjustHeight : 0);

		e.style.position = 'absolute';
		e.style.margin = 'auto';
		var transform = '';

		switch (pos.horizontal.ctor)
		{
			case 'P':
				e.style.right = toPos(pos.x);
				e.style.removeProperty('left');
				break;

			case 'Z':
				transform = 'translateX(' + ((-w/2)|0) + 'px) ';

			case 'N':
				e.style.left = toPos(pos.x);
				e.style.removeProperty('right');
				break;
		}
		switch (pos.vertical.ctor)
		{
			case 'N':
				e.style.bottom = toPos(pos.y);
				e.style.removeProperty('top');
				break;

			case 'Z':
				transform += 'translateY(' + ((-h/2)|0) + 'px)';

			case 'P':
				e.style.top = toPos(pos.y);
				e.style.removeProperty('bottom');
				break;
		}
		if (transform !== '')
		{
			addTransform(e.style, transform);
		}
		return e;
	}

	function addTransform(style, transform)
	{
		style.transform       = transform;
		style.msTransform     = transform;
		style.MozTransform    = transform;
		style.webkitTransform = transform;
		style.OTransform      = transform;
	}

	function container(pos,elem)
	{
		var e = render(elem);
		setPos(pos, elem, e);
		var div = createNode('div');
		div.style.position = 'relative';
		div.style.overflow = 'hidden';
		div.appendChild(e);
		return div;
	}


	function rawHtml(elem)
	{
		var html = elem.html;
		var guid = elem.guid;
		var align = elem.align;

		var div = createNode('div');
		div.innerHTML = html;
		div.style.visibility = "hidden";
		if (align)
		{
			div.style.textAlign = align;
		}
		div.style.visibility = 'visible';
		div.style.pointerEvents = 'auto';
		return div;
	}


	// RENDER

	function render(elem)
	{
		return setProps(elem, makeElement(elem));
	}
	function makeElement(e)
	{
		var elem = e.element;
		switch(elem.ctor)
		{
			case 'Image':
				return image(e.props, elem);

			case 'Flow':
				return flow(elem._0.ctor, elem._1);

			case 'Container':
				return container(elem._0, elem._1);

			case 'Spacer':
				return createNode('div');

			case 'RawHtml':
				return rawHtml(elem);

			case 'Custom':
				return elem.render(elem.model);
		}
	}

	function updateAndReplace(node, curr, next)
	{
		var newNode = update(node, curr, next);
		if (newNode !== node)
		{
			node.parentNode.replaceChild(newNode, node);
		}
		return newNode;
	}


	// UPDATE

	function update(node, curr, next)
	{
		var rootNode = node;
		if (node.tagName === 'A')
		{
			node = node.firstChild;
		}
		if (curr.props.id === next.props.id)
		{
			updateProps(node, curr, next);
			return rootNode;
		}
		if (curr.element.ctor !== next.element.ctor)
		{
			return render(next);
		}
		var nextE = next.element;
		var currE = curr.element;
		switch(nextE.ctor)
		{
			case "Spacer":
				updateProps(node, curr, next);
				return rootNode;

			case "RawHtml":
				if(currE.html.valueOf() !== nextE.html.valueOf())
				{
					node.innerHTML = nextE.html;
				}
				updateProps(node, curr, next);
				return rootNode;

			case "Image":
				if (nextE._0.ctor === 'Plain')
				{
					if (nextE._3 !== currE._3)
					{
						node.src = nextE._3;
					}
				}
				else if (!Utils.eq(nextE,currE)
					|| next.props.width !== curr.props.width
					|| next.props.height !== curr.props.height)
				{
					return render(next);
				}
				updateProps(node, curr, next);
				return rootNode;

			case "Flow":
				var arr = List.toArray(nextE._1);
				for (var i = arr.length; i--; )
				{
					arr[i] = arr[i].element.ctor;
				}
				if (nextE._0.ctor !== currE._0.ctor)
				{
					return render(next);
				}
				var nexts = List.toArray(nextE._1);
				var kids = node.childNodes;
				if (nexts.length !== kids.length)
				{
					return render(next);
				}
				var currs = List.toArray(currE._1);
				var dir = nextE._0.ctor;
				var goDir = directionTable[dir];
				var toReverse = needsReversal(dir);
				var len = kids.length;
				for (var i = len; i-- ;)
				{
					var subNode = kids[toReverse ? len - i - 1 : i];
					goDir(updateAndReplace(subNode, currs[i], nexts[i]));
				}
				updateProps(node, curr, next);
				return rootNode;

			case "Container":
				var subNode = node.firstChild;
				var newSubNode = updateAndReplace(subNode, currE._1, nextE._1);
				setPos(nextE._0, nextE._1, newSubNode);
				updateProps(node, curr, next);
				return rootNode;

			case "Custom":
				if (currE.type === nextE.type)
				{
					var updatedNode = nextE.update(node, currE.model, nextE.model);
					updateProps(updatedNode, curr, next);
					return updatedNode;
				}
				return render(next);
		}
	}

	function updateProps(node, curr, next)
	{
		var nextProps = next.props;
		var currProps = curr.props;

		var element = next.element;
		var width = nextProps.width - (element.adjustWidth || 0);
		var height = nextProps.height - (element.adjustHeight || 0);
		if (width !== currProps.width)
		{
			node.style.width = (width|0) + 'px';
		}
		if (height !== currProps.height)
		{
			node.style.height = (height|0) + 'px';
		}

		if (nextProps.opacity !== currProps.opacity)
		{
			node.style.opacity = nextProps.opacity;
		}

		var nextColor = nextProps.color.ctor === 'Just'
			? Color.toCss(nextProps.color._0)
			: '';
		if (node.style.backgroundColor !== nextColor)
		{
			node.style.backgroundColor = nextColor;
		}

		if (nextProps.tag !== currProps.tag)
		{
			node.id = nextProps.tag;
		}

		if (nextProps.href !== currProps.href)
		{
			if (currProps.href === '')
			{
				// add a surrounding href
				var anchor = createNode('a');
				anchor.href = nextProps.href;
				anchor.style.display = 'block';
				anchor.style.pointerEvents = 'auto';

				node.parentNode.replaceChild(anchor, node);
				anchor.appendChild(node);
			}
			else if (nextProps.href === '')
			{
				// remove the surrounding href
				var anchor = node.parentNode;
				anchor.parentNode.replaceChild(node, anchor);
			}
			else
			{
				// just update the link
				node.parentNode.href = nextProps.href;
			}
		}

		// update click and hover handlers
		var removed = false;

		// update hover handlers
		if (currProps.hover.ctor === '_Tuple0')
		{
			if (nextProps.hover.ctor !== '_Tuple0')
			{
				addHover(node, nextProps.hover);
			}
		}
		else
		{
			if (nextProps.hover.ctor === '_Tuple0')
			{
				removed = true;
				removeHover(node);
			}
			else
			{
				node.elm_hover_handler = nextProps.hover;
			}
		}

		// update click handlers
		if (currProps.click.ctor === '_Tuple0')
		{
			if (nextProps.click.ctor !== '_Tuple0')
			{
				addClick(node, nextProps.click);
			}
		}
		else
		{
			if (nextProps.click.ctor === '_Tuple0')
			{
				removed = true;
				removeClick(node);
			}
			else
			{
				node.elm_click_handler = nextProps.click;
			}
		}

		// stop capturing clicks if
		if (removed
			&& nextProps.hover.ctor === '_Tuple0'
			&& nextProps.click.ctor === '_Tuple0')
		{
			node.style.pointerEvents = 'none';
		}
	}


	// TEXT

	function block(align)
	{
		return function(text)
		{
			var raw = {
				ctor :'RawHtml',
				html : Text.renderHtml(text),
				align: align
			};
			var pos = htmlHeight(0, raw);
			return newElement(pos._0, pos._1, raw);
		}
	}

	function markdown(text)
	{
		var raw = {
			ctor:'RawHtml',
			html: text,
			align: null
		};
		var pos = htmlHeight(0, raw);
		return newElement(pos._0, pos._1, raw);
	}

	function htmlHeight(width, rawHtml)
	{
		// create dummy node
		var temp = document.createElement('div');
		temp.innerHTML = rawHtml.html;
		if (width > 0)
		{
			temp.style.width = width + "px";
		}
		temp.style.visibility = "hidden";
		temp.style.styleFloat = "left";
		temp.style.cssFloat   = "left";

		document.body.appendChild(temp);

		// get dimensions
		var style = window.getComputedStyle(temp, null);
		var w = Math.ceil(style.getPropertyValue("width").slice(0,-2) - 0);
		var h = Math.ceil(style.getPropertyValue("height").slice(0,-2) - 0);
		document.body.removeChild(temp);
		return Utils.Tuple2(w,h);
	}


	return localRuntime.Native.Graphics.Element.values = {
		render: render,
		update: update,
		updateAndReplace: updateAndReplace,

		createNode: createNode,
		newElement: F3(newElement),
		addTransform: addTransform,
		htmlHeight: F2(htmlHeight),
		guid: Utils.guid,

		block: block,
		markdown: markdown
	};

};

Elm.Native.Json = {};
Elm.Native.Json.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Json = localRuntime.Native.Json || {};
	if (localRuntime.Native.Json.values) {
		return localRuntime.Native.Json.values;
	}

	var ElmArray = Elm.Native.Array.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);
	var Result = Elm.Result.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);


	function crash(expected, actual) {
		throw new Error(
			'expecting ' + expected + ' but got ' + JSON.stringify(actual)
		);
	}


	// PRIMITIVE VALUES

	function decodeNull(successValue) {
		return function(value) {
			if (value === null) {
				return successValue;
			}
			crash('null', value);
		};
	}


	function decodeString(value) {
		if (typeof value === 'string' || value instanceof String) {
			return value;
		}
		crash('a String', value);
	}


	function decodeFloat(value) {
		if (typeof value === 'number') {
			return value;
		}
		crash('a Float', value);
	}


	function decodeInt(value) {
		if (typeof value === 'number' && (value|0) === value) {
			return value;
		}
		crash('an Int', value);
	}


	function decodeBool(value) {
		if (typeof value === 'boolean') {
			return value;
		}
		crash('a Bool', value);
	}


	// ARRAY

	function decodeArray(decoder) {
		return function(value) {
			if (value instanceof Array) {
				var len = value.length;
				var array = new Array(len);
				for (var i = len; i-- ; ) {
					array[i] = decoder(value[i]);
				}
				return ElmArray.fromJSArray(array);
			}
			crash('an Array', value);
		};
	}


	// LIST

	function decodeList(decoder) {
		return function(value) {
			if (value instanceof Array) {
				var len = value.length;
				var list = List.Nil;
				for (var i = len; i-- ; ) {
					list = List.Cons( decoder(value[i]), list );
				}
				return list;
			}
			crash('a List', value);
		};
	}


	// MAYBE

	function decodeMaybe(decoder) {
		return function(value) {
			try {
				return Maybe.Just(decoder(value));
			} catch(e) {
				return Maybe.Nothing;
			}
		};
	}


	// FIELDS

	function decodeField(field, decoder) {
		return function(value) {
			var subValue = value[field];
			if (subValue !== undefined) {
				return decoder(subValue);
			}
			crash("an object with field '" + field + "'", value);
		};
	}


	// OBJECTS

	function decodeKeyValuePairs(decoder) {
		return function(value) {
			var isObject =
				typeof value === 'object'
					&& value !== null
					&& !(value instanceof Array);

			if (isObject) {
				var keyValuePairs = List.Nil;
				for (var key in value) {
					var elmValue = decoder(value[key]);
					var pair = Utils.Tuple2(key, elmValue);
					keyValuePairs = List.Cons(pair, keyValuePairs);
				}
				return keyValuePairs;
			}

			crash("an object", value);
		};
	}

	function decodeObject1(f, d1) {
		return function(value) {
			return f(d1(value));
		};
	}

	function decodeObject2(f, d1, d2) {
		return function(value) {
			return A2( f, d1(value), d2(value) );
		};
	}

	function decodeObject3(f, d1, d2, d3) {
		return function(value) {
			return A3( f, d1(value), d2(value), d3(value) );
		};
	}

	function decodeObject4(f, d1, d2, d3, d4) {
		return function(value) {
			return A4( f, d1(value), d2(value), d3(value), d4(value) );
		};
	}

	function decodeObject5(f, d1, d2, d3, d4, d5) {
		return function(value) {
			return A5( f, d1(value), d2(value), d3(value), d4(value), d5(value) );
		};
	}

	function decodeObject6(f, d1, d2, d3, d4, d5, d6) {
		return function(value) {
			return A6( f,
				d1(value),
				d2(value),
				d3(value),
				d4(value),
				d5(value),
				d6(value)
			);
		};
	}

	function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7) {
		return function(value) {
			return A7( f,
				d1(value),
				d2(value),
				d3(value),
				d4(value),
				d5(value),
				d6(value),
				d7(value)
			);
		};
	}

	function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8) {
		return function(value) {
			return A8( f,
				d1(value),
				d2(value),
				d3(value),
				d4(value),
				d5(value),
				d6(value),
				d7(value),
				d8(value)
			);
		};
	}


	// TUPLES

	function decodeTuple1(f, d1) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 1 ) {
				crash('a Tuple of length 1', value);
			}
			return f( d1(value[0]) );
		};
	}

	function decodeTuple2(f, d1, d2) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 2 ) {
				crash('a Tuple of length 2', value);
			}
			return A2( f, d1(value[0]), d2(value[1]) );
		};
	}

	function decodeTuple3(f, d1, d2, d3) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 3 ) {
				crash('a Tuple of length 3', value);
			}
			return A3( f, d1(value[0]), d2(value[1]), d3(value[2]) );
		};
	}


	function decodeTuple4(f, d1, d2, d3, d4) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 4 ) {
				crash('a Tuple of length 4', value);
			}
			return A4( f, d1(value[0]), d2(value[1]), d3(value[2]), d4(value[3]) );
		};
	}


	function decodeTuple5(f, d1, d2, d3, d4, d5) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 5 ) {
				crash('a Tuple of length 5', value);
			}
			return A5( f,
				d1(value[0]),
				d2(value[1]),
				d3(value[2]),
				d4(value[3]),
				d5(value[4])
			);
		};
	}


	function decodeTuple6(f, d1, d2, d3, d4, d5, d6) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 6 ) {
				crash('a Tuple of length 6', value);
			}
			return A6( f,
				d1(value[0]),
				d2(value[1]),
				d3(value[2]),
				d4(value[3]),
				d5(value[4]),
				d6(value[5])
			);
		};
	}

	function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 7 ) {
				crash('a Tuple of length 7', value);
			}
			return A7( f,
				d1(value[0]),
				d2(value[1]),
				d3(value[2]),
				d4(value[3]),
				d5(value[4]),
				d6(value[5]),
				d7(value[6])
			);
		};
	}


	function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 8 ) {
				crash('a Tuple of length 8', value);
			}
			return A8( f,
				d1(value[0]),
				d2(value[1]),
				d3(value[2]),
				d4(value[3]),
				d5(value[4]),
				d6(value[5]),
				d7(value[6]),
				d8(value[7])
			);
		};
	}


	// CUSTOM DECODERS

	function decodeValue(value) {
		return value;
	}

	function runDecoderValue(decoder, value) {
		try {
			return Result.Ok(decoder(value));
		} catch(e) {
			return Result.Err(e.message);
		}
	}

	function customDecoder(decoder, callback) {
		return function(value) {
			var result = callback(decoder(value));
			if (result.ctor === 'Err') {
				throw new Error('custom decoder failed: ' + result._0);
			}
			return result._0;
		}
	}

	function andThen(decode, callback) {
		return function(value) {
			var result = decode(value);
			return callback(result)(value);
		}
	}

	function fail(msg) {
		return function(value) {
			throw new Error(msg);
		}
	}

	function succeed(successValue) {
		return function(value) {
			return successValue;
		}
	}


	// ONE OF MANY

	function oneOf(decoders) {
		return function(value) {
			var errors = [];
			var temp = decoders;
			while (temp.ctor !== '[]') {
				try {
					return temp._0(value);
				} catch(e) {
					errors.push(e.message);
				}
				temp = temp._1;
			}
			throw new Error('expecting one of the following:\n    ' + errors.join('\n    '));
		}
	}

	function get(decoder, value) {
		try {
			return Result.Ok(decoder(value));
		} catch(e) {
			return Result.Err(e.message);
		}
	}


	// ENCODE / DECODE

	function runDecoderString(decoder, string) {
		try {
			return Result.Ok(decoder(JSON.parse(string)));
		} catch(e) {
			return Result.Err(e.message);
		}
	}

	function encode(indentLevel, value) {
		return JSON.stringify(value, null, indentLevel);
	}

	function identity(value) {
		return value;
	}

	function encodeObject(keyValuePairs) {
		var obj = {};
		while (keyValuePairs.ctor !== '[]') {
			var pair = keyValuePairs._0;
			obj[pair._0] = pair._1;
			keyValuePairs = keyValuePairs._1;
		}
		return obj;
	}

	return localRuntime.Native.Json.values = {
		encode: F2(encode),
		runDecoderString: F2(runDecoderString),
		runDecoderValue: F2(runDecoderValue),

		get: F2(get),
		oneOf: oneOf,

		decodeNull: decodeNull,
		decodeInt: decodeInt,
		decodeFloat: decodeFloat,
		decodeString: decodeString,
		decodeBool: decodeBool,

		decodeMaybe: decodeMaybe,

		decodeList: decodeList,
		decodeArray: decodeArray,

		decodeField: F2(decodeField),

		decodeObject1: F2(decodeObject1),
		decodeObject2: F3(decodeObject2),
		decodeObject3: F4(decodeObject3),
		decodeObject4: F5(decodeObject4),
		decodeObject5: F6(decodeObject5),
		decodeObject6: F7(decodeObject6),
		decodeObject7: F8(decodeObject7),
		decodeObject8: F9(decodeObject8),
		decodeKeyValuePairs: decodeKeyValuePairs,

		decodeTuple1: F2(decodeTuple1),
		decodeTuple2: F3(decodeTuple2),
		decodeTuple3: F4(decodeTuple3),
		decodeTuple4: F5(decodeTuple4),
		decodeTuple5: F6(decodeTuple5),
		decodeTuple6: F7(decodeTuple6),
		decodeTuple7: F8(decodeTuple7),
		decodeTuple8: F9(decodeTuple8),

		andThen: F2(andThen),
		decodeValue: decodeValue,
		customDecoder: F2(customDecoder),
		fail: fail,
		succeed: succeed,

		identity: identity,
		encodeNull: null,
		encodeArray: ElmArray.toJSArray,
		encodeList: List.toArray,
		encodeObject: encodeObject

	};

};

Elm.Native.List = {};
Elm.Native.List.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.List = localRuntime.Native.List || {};
	if (localRuntime.Native.List.values)
	{
		return localRuntime.Native.List.values;
	}
	if ('values' in Elm.Native.List)
	{
		return localRuntime.Native.List.values = Elm.Native.List.values;
	}

	var Utils = Elm.Native.Utils.make(localRuntime);

	var Nil = Utils.Nil;
	var Cons = Utils.Cons;

	function toArray(xs)
	{
		var out = [];
		while (xs.ctor !== '[]')
		{
			out.push(xs._0);
			xs = xs._1;
		}
		return out;
	}

	function fromArray(arr)
	{
		var out = Nil;
		for (var i = arr.length; i--; )
		{
			out = Cons(arr[i], out);
		}
		return out;
	}

	function range(lo,hi)
	{
		var lst = Nil;
		if (lo <= hi)
		{
			do { lst = Cons(hi,lst) } while (hi-->lo);
		}
		return lst
	}

	// f defined similarly for both foldl and foldr (NB: different from Haskell)
	// ie, foldl : (a -> b -> b) -> b -> [a] -> b
	function foldl(f, b, xs)
	{
		var acc = b;
		while (xs.ctor !== '[]')
		{
			acc = A2(f, xs._0, acc);
			xs = xs._1;
		}
		return acc;
	}

	function foldr(f, b, xs)
	{
		var arr = toArray(xs);
		var acc = b;
		for (var i = arr.length; i--; )
		{
			acc = A2(f, arr[i], acc);
		}
		return acc;
	}

	function any(pred, xs)
	{
		while (xs.ctor !== '[]')
		{
			if (pred(xs._0))
			{
				return true;
			}
			xs = xs._1;
		}
		return false;
	}

	function map2(f, xs, ys)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]')
		{
			arr.push(A2(f, xs._0, ys._0));
			xs = xs._1;
			ys = ys._1;
		}
		return fromArray(arr);
	}

	function map3(f, xs, ys, zs)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
		{
			arr.push(A3(f, xs._0, ys._0, zs._0));
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function map4(f, ws, xs, ys, zs)
	{
		var arr = [];
		while (   ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function map5(f, vs, ws, xs, ys, zs)
	{
		var arr = [];
		while (   vs.ctor !== '[]'
			   && ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
			vs = vs._1;
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function sortBy(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a,b){
			return Utils.cmp(f(a), f(b));
		}));
	}

	function sortWith(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a,b){
			var ord = f(a)(b).ctor;
			return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
		}));
	}

	function take(n, xs)
	{
		var arr = [];
		while (xs.ctor !== '[]' && n > 0)
		{
			arr.push(xs._0);
			xs = xs._1;
			--n;
		}
		return fromArray(arr);
	}

	function drop(n, xs)
	{
		while (xs.ctor !== '[]' && n > 0)
		{
			xs = xs._1;
			--n;
		}
		return xs;
	}

	function repeat(n, x)
	{
		var arr = [];
		var pattern = [x];
		while (n > 0)
		{
			if (n & 1)
			{
				arr = arr.concat(pattern);
			}
			n >>= 1, pattern = pattern.concat(pattern);
		}
		return fromArray(arr);
	}


	Elm.Native.List.values = {
		Nil:Nil,
		Cons:Cons,
		cons:F2(Cons),
		toArray:toArray,
		fromArray:fromArray,
		range:range,

		foldl:F3(foldl),
		foldr:F3(foldr),

		any:F2(any),
		map2:F3(map2),
		map3:F4(map3),
		map4:F5(map4),
		map5:F6(map5),
		sortBy:F2(sortBy),
		sortWith:F2(sortWith),
		take:F2(take),
		drop:F2(drop),
		repeat:F2(repeat)
	};
	return localRuntime.Native.List.values = Elm.Native.List.values;

};

Elm.Native.Port = {};
Elm.Native.Port.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Port = localRuntime.Native.Port || {};
	if (localRuntime.Native.Port.values)
	{
		return localRuntime.Native.Port.values;
	}

	var NS;
	var Utils = Elm.Native.Utils.make(localRuntime);


	// INBOUND

	function inbound(name, type, converter)
	{
		if (!localRuntime.argsTracker[name])
		{
			throw new Error(
				"Port Error:\n" +
				"No argument was given for the port named '" + name + "' with type:\n\n" +
				"    " + type.split('\n').join('\n        ') + "\n\n" +
				"You need to provide an initial value!\n\n" +
				"Find out more about ports here <http://elm-lang.org/learn/Ports.elm>"
			);
		}
		var arg = localRuntime.argsTracker[name];
		arg.used = true;

		return jsToElm(name, type, converter, arg.value);
	}


	function inboundSignal(name, type, converter)
	{
		var initialValue = inbound(name, type, converter);

		if (!NS)
		{
			NS = Elm.Native.Signal.make(localRuntime);
		}
		var signal = NS.input('inbound-port-' + name, initialValue);

		function send(jsValue)
		{
			var elmValue = jsToElm(name, type, converter, jsValue);
			setTimeout(function() {
				localRuntime.notify(signal.id, elmValue);
			}, 0);
		}

		localRuntime.ports[name] = { send: send };

		return signal;
	}


	function jsToElm(name, type, converter, value)
	{
		try
		{
			return converter(value);
		}
		catch(e)
		{
			throw new Error(
				"Port Error:\n" +
				"Regarding the port named '" + name + "' with type:\n\n" +
				"    " + type.split('\n').join('\n        ') + "\n\n" +
				"You just sent the value:\n\n" +
				"    " + JSON.stringify(value) + "\n\n" +
				"but it cannot be converted to the necessary type.\n" +
				e.message
			);
		}
	}


	// OUTBOUND

	function outbound(name, converter, elmValue)
	{
		localRuntime.ports[name] = converter(elmValue);
	}


	function outboundSignal(name, converter, signal)
	{
		var subscribers = [];

		function subscribe(handler)
		{
			subscribers.push(handler);
		}
		function unsubscribe(handler)
		{
			subscribers.pop(subscribers.indexOf(handler));
		}

		function notify(elmValue)
		{
			var jsValue = converter(elmValue);
			var len = subscribers.length;
			for (var i = 0; i < len; ++i)
			{
				subscribers[i](jsValue);
			}
		}

		if (!NS)
		{
			NS = Elm.Native.Signal.make(localRuntime);
		}
		NS.output('outbound-port-' + name, notify, signal);

		localRuntime.ports[name] = {
			subscribe: subscribe,
			unsubscribe: unsubscribe
		};

		return signal;
	}


	return localRuntime.Native.Port.values = {
		inbound: inbound,
		outbound: outbound,
		inboundSignal: inboundSignal,
		outboundSignal: outboundSignal
	};
};


if (!Elm.fullscreen) {

	(function() {
		'use strict';

		var Display = {
			FULLSCREEN: 0,
			COMPONENT: 1,
			NONE: 2
		};

		Elm.fullscreen = function(module, args)
		{
			var container = document.createElement('div');
			document.body.appendChild(container);
			return init(Display.FULLSCREEN, container, module, args || {});
		};

		Elm.embed = function(module, container, args)
		{
			var tag = container.tagName;
			if (tag !== 'DIV')
			{
				throw new Error('Elm.node must be given a DIV, not a ' + tag + '.');
			}
			return init(Display.COMPONENT, container, module, args || {});
		};

		Elm.worker = function(module, args)
		{
			return init(Display.NONE, {}, module, args || {});
		};

		function init(display, container, module, args, moduleToReplace)
		{
			// defining state needed for an instance of the Elm RTS
			var inputs = [];

			/* OFFSET
			 * Elm's time traveling debugger lets you pause time. This means
			 * "now" may be shifted a bit into the past. By wrapping Date.now()
			 * we can manage this.
			 */
			var timer = {
				programStart: Date.now(),
				now: function()
				{
					return Date.now();
				}
			};

			var updateInProgress = false;
			function notify(id, v)
			{
				if (updateInProgress)
				{
					throw new Error(
						'The notify function has been called synchronously!\n' +
						'This can lead to frames being dropped.\n' +
						'Definitely report this to <https://github.com/elm-lang/Elm/issues>\n');
				}
				updateInProgress = true;
				var timestep = timer.now();
				for (var i = inputs.length; i--; )
				{
					inputs[i].notify(timestep, id, v);
				}
				updateInProgress = false;
			}
			function setTimeout(func, delay)
			{
				return window.setTimeout(func, delay);
			}

			var listeners = [];
			function addListener(relevantInputs, domNode, eventName, func)
			{
				domNode.addEventListener(eventName, func);
				var listener = {
					relevantInputs: relevantInputs,
					domNode: domNode,
					eventName: eventName,
					func: func
				};
				listeners.push(listener);
			}

			var argsTracker = {};
			for (var name in args)
			{
				argsTracker[name] = {
					value: args[name],
					used: false
				};
			}

			// create the actual RTS. Any impure modules will attach themselves to this
			// object. This permits many Elm programs to be embedded per document.
			var elm = {
				notify: notify,
				setTimeout: setTimeout,
				node: container,
				addListener: addListener,
				inputs: inputs,
				timer: timer,
				argsTracker: argsTracker,
				ports: {},

				isFullscreen: function() { return display === Display.FULLSCREEN; },
				isEmbed: function() { return display === Display.COMPONENT; },
				isWorker: function() { return display === Display.NONE; }
			};

			function swap(newModule)
			{
				removeListeners(listeners);
				var div = document.createElement('div');
				var newElm = init(display, div, newModule, args, elm);
				inputs = [];
				// elm.swap = newElm.swap;
				return newElm;
			}

			function dispose()
			{
				removeListeners(listeners);
				inputs = [];
			}

			var Module = {};
			try
			{
				Module = module.make(elm);
				checkInputs(elm);
			}
			catch (error)
			{
				if (typeof container.appendChild == 'undefined')
				{
					console.log(error.message);
				}
				else
				{
					container.appendChild(errorNode(error.message));
				}
				throw error;
			}

			if (display !== Display.NONE)
			{
				var graphicsNode = initGraphics(elm, Module);
			}

			var rootNode = { kids: inputs };
			trimDeadNodes(rootNode);
			inputs = rootNode.kids;
			filterListeners(inputs, listeners);

			addReceivers(elm.ports);

			if (typeof moduleToReplace !== 'undefined')
			{
				hotSwap(moduleToReplace, elm);

				// rerender scene if graphics are enabled.
				if (typeof graphicsNode !== 'undefined')
				{
					graphicsNode.notify(0, true, 0);
				}
			}

			return {
				swap: swap,
				ports: elm.ports,
				dispose: dispose
			};
		};

		function checkInputs(elm)
		{
			var argsTracker = elm.argsTracker;
			for (var name in argsTracker)
			{
				if (!argsTracker[name].used)
				{
					throw new Error(
						"Port Error:\nYou provided an argument named '" + name +
						"' but there is no corresponding port!\n\n" +
						"Maybe add a port '" + name + "' to your Elm module?\n" +
						"Maybe remove the '" + name + "' argument from your initialization code in JS?"
					);
				}
			}
		}

		function errorNode(message)
		{
			var code = document.createElement('code');

			var lines = message.split('\n');
			code.appendChild(document.createTextNode(lines[0]));
			code.appendChild(document.createElement('br'));
			code.appendChild(document.createElement('br'));
			for (var i = 1; i < lines.length; ++i)
			{
				code.appendChild(document.createTextNode('\u00A0 \u00A0 ' + lines[i].replace(/  /g, '\u00A0 ')));
				code.appendChild(document.createElement('br'));
			}
			code.appendChild(document.createElement('br'));
			code.appendChild(document.createTextNode("Open the developer console for more details."));
			return code;
		}


		//// FILTER SIGNALS ////

		// TODO: move this code into the signal module and create a function
		// Signal.initializeGraph that actually instantiates everything.

		function filterListeners(inputs, listeners)
		{
			loop:
			for (var i = listeners.length; i--; )
			{
				var listener = listeners[i];
				for (var j = inputs.length; j--; )
				{
					if (listener.relevantInputs.indexOf(inputs[j].id) >= 0)
					{
						continue loop;
					}
				}
				listener.domNode.removeEventListener(listener.eventName, listener.func);
			}
		}

		function removeListeners(listeners)
		{
			for (var i = listeners.length; i--; )
			{
				var listener = listeners[i];
				listener.domNode.removeEventListener(listener.eventName, listener.func);
			}
		}

		// add receivers for built-in ports if they are defined
		function addReceivers(ports)
		{
			if ('title' in ports)
			{
				if (typeof ports.title === 'string')
				{
					document.title = ports.title;
				}
				else
				{
					ports.title.subscribe(function(v) { document.title = v; });
				}
			}
			if ('redirect' in ports)
			{
				ports.redirect.subscribe(function(v) {
					if (v.length > 0)
					{
						window.location = v;
					}
				});
			}
		}


		// returns a boolean representing whether the node is alive or not.
		function trimDeadNodes(node)
		{
			if (node.isOutput)
			{
				return true;
			}

			var liveKids = [];
			for (var i = node.kids.length; i--; )
			{
				var kid = node.kids[i];
				if (trimDeadNodes(kid))
				{
					liveKids.push(kid);
				}
			}
			node.kids = liveKids;

			return liveKids.length > 0;
		}


		////  RENDERING  ////

		function initGraphics(elm, Module)
		{
			if (!('main' in Module))
			{
				throw new Error("'main' is missing! What do I display?!");
			}

			var signalGraph = Module.main;

			// make sure the signal graph is actually a signal & extract the visual model
			if (!('notify' in signalGraph))
			{
				signalGraph = Elm.Signal.make(elm).constant(signalGraph);
			}
			var initialScene = signalGraph.value;

			// Figure out what the render functions should be
			var render;
			var update;
			if (initialScene.props)
			{
				var Element = Elm.Native.Graphics.Element.make(elm);
				render = Element.render;
				update = Element.updateAndReplace;
			}
			else
			{
				var VirtualDom = Elm.Native.VirtualDom.make(elm);
				render = VirtualDom.render;
				update = VirtualDom.updateAndReplace;
			}

			// Add the initialScene to the DOM
			var container = elm.node;
			var node = render(initialScene);
			while (container.firstChild)
			{
				container.removeChild(container.firstChild);
			}
			container.appendChild(node);

			var _requestAnimationFrame =
				typeof requestAnimationFrame !== 'undefined'
					? requestAnimationFrame
					: function(cb) { setTimeout(cb, 1000/60); }
					;

			// domUpdate is called whenever the main Signal changes.
			//
			// domUpdate and drawCallback implement a small state machine in order
			// to schedule only 1 draw per animation frame. This enforces that
			// once draw has been called, it will not be called again until the
			// next frame.
			//
			// drawCallback is scheduled whenever
			// 1. The state transitions from PENDING_REQUEST to EXTRA_REQUEST, or
			// 2. The state transitions from NO_REQUEST to PENDING_REQUEST
			//
			// Invariants:
			// 1. In the NO_REQUEST state, there is never a scheduled drawCallback.
			// 2. In the PENDING_REQUEST and EXTRA_REQUEST states, there is always exactly 1
			//    scheduled drawCallback.
			var NO_REQUEST = 0;
			var PENDING_REQUEST = 1;
			var EXTRA_REQUEST = 2;
			var state = NO_REQUEST;
			var savedScene = initialScene;
			var scheduledScene = initialScene;

			function domUpdate(newScene)
			{
				scheduledScene = newScene;

				switch (state)
				{
					case NO_REQUEST:
						_requestAnimationFrame(drawCallback);
						state = PENDING_REQUEST;
						return;
					case PENDING_REQUEST:
						state = PENDING_REQUEST;
						return;
					case EXTRA_REQUEST:
						state = PENDING_REQUEST;
						return;
				}
			}

			function drawCallback()
			{
				switch (state)
				{
					case NO_REQUEST:
						// This state should not be possible. How can there be no
						// request, yet somehow we are actively fulfilling a
						// request?
						throw new Error(
							"Unexpected draw callback.\n" +
							"Please report this to <https://github.com/elm-lang/core/issues>."
						);

					case PENDING_REQUEST:
						// At this point, we do not *know* that another frame is
						// needed, but we make an extra request to rAF just in
						// case. It's possible to drop a frame if rAF is called
						// too late, so we just do it preemptively.
						_requestAnimationFrame(drawCallback);
						state = EXTRA_REQUEST;

						// There's also stuff we definitely need to draw.
						draw();
						return;

					case EXTRA_REQUEST:
						// Turns out the extra request was not needed, so we will
						// stop calling rAF. No reason to call it all the time if
						// no one needs it.
						state = NO_REQUEST;
						return;
				}
			}

			function draw()
			{
				update(elm.node.firstChild, savedScene, scheduledScene);
				if (elm.Native.Window)
				{
					elm.Native.Window.values.resizeIfNeeded();
				}
				savedScene = scheduledScene;
			}

			var renderer = Elm.Native.Signal.make(elm).output('main', domUpdate, signalGraph);

			// must check for resize after 'renderer' is created so
			// that changes show up.
			if (elm.Native.Window)
			{
				elm.Native.Window.values.resizeIfNeeded();
			}

			return renderer;
		}

		//// HOT SWAPPING ////

		// Returns boolean indicating if the swap was successful.
		// Requires that the two signal graphs have exactly the same
		// structure.
		function hotSwap(from, to)
		{
			function similar(nodeOld,nodeNew)
			{
				if (nodeOld.id !== nodeNew.id)
				{
					return false;
				}
				if (nodeOld.isOutput)
				{
					return nodeNew.isOutput;
				}
				return nodeOld.kids.length === nodeNew.kids.length;
			}
			function swap(nodeOld,nodeNew)
			{
				nodeNew.value = nodeOld.value;
				return true;
			}
			var canSwap = depthFirstTraversals(similar, from.inputs, to.inputs);
			if (canSwap)
			{
				depthFirstTraversals(swap, from.inputs, to.inputs);
			}
			from.node.parentNode.replaceChild(to.node, from.node);

			return canSwap;
		}

		// Returns false if the node operation f ever fails.
		function depthFirstTraversals(f, queueOld, queueNew)
		{
			if (queueOld.length !== queueNew.length)
			{
				return false;
			}
			queueOld = queueOld.slice(0);
			queueNew = queueNew.slice(0);

			var seen = [];
			while (queueOld.length > 0 && queueNew.length > 0)
			{
				var nodeOld = queueOld.pop();
				var nodeNew = queueNew.pop();
				if (seen.indexOf(nodeOld.id) < 0)
				{
					if (!f(nodeOld, nodeNew))
					{
						return false;
					}
					queueOld = queueOld.concat(nodeOld.kids || []);
					queueNew = queueNew.concat(nodeNew.kids || []);
					seen.push(nodeOld.id);
				}
			}
			return true;
		}
	}());

	function F2(fun)
	{
		function wrapper(a) { return function(b) { return fun(a,b) } }
		wrapper.arity = 2;
		wrapper.func = fun;
		return wrapper;
	}

	function F3(fun)
	{
		function wrapper(a) {
			return function(b) { return function(c) { return fun(a,b,c) }}
		}
		wrapper.arity = 3;
		wrapper.func = fun;
		return wrapper;
	}

	function F4(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return fun(a,b,c,d) }}}
		}
		wrapper.arity = 4;
		wrapper.func = fun;
		return wrapper;
	}

	function F5(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return fun(a,b,c,d,e) }}}}
		}
		wrapper.arity = 5;
		wrapper.func = fun;
		return wrapper;
	}

	function F6(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return function(f) {
			return fun(a,b,c,d,e,f) }}}}}
		}
		wrapper.arity = 6;
		wrapper.func = fun;
		return wrapper;
	}

	function F7(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return function(f) {
			return function(g) { return fun(a,b,c,d,e,f,g) }}}}}}
		}
		wrapper.arity = 7;
		wrapper.func = fun;
		return wrapper;
	}

	function F8(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return function(f) {
			return function(g) { return function(h) {
			return fun(a,b,c,d,e,f,g,h)}}}}}}}
		}
		wrapper.arity = 8;
		wrapper.func = fun;
		return wrapper;
	}

	function F9(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return function(f) {
			return function(g) { return function(h) { return function(i) {
			return fun(a,b,c,d,e,f,g,h,i) }}}}}}}}
		}
		wrapper.arity = 9;
		wrapper.func = fun;
		return wrapper;
	}

	function A2(fun,a,b)
	{
		return fun.arity === 2
			? fun.func(a,b)
			: fun(a)(b);
	}
	function A3(fun,a,b,c)
	{
		return fun.arity === 3
			? fun.func(a,b,c)
			: fun(a)(b)(c);
	}
	function A4(fun,a,b,c,d)
	{
		return fun.arity === 4
			? fun.func(a,b,c,d)
			: fun(a)(b)(c)(d);
	}
	function A5(fun,a,b,c,d,e)
	{
		return fun.arity === 5
			? fun.func(a,b,c,d,e)
			: fun(a)(b)(c)(d)(e);
	}
	function A6(fun,a,b,c,d,e,f)
	{
		return fun.arity === 6
			? fun.func(a,b,c,d,e,f)
			: fun(a)(b)(c)(d)(e)(f);
	}
	function A7(fun,a,b,c,d,e,f,g)
	{
		return fun.arity === 7
			? fun.func(a,b,c,d,e,f,g)
			: fun(a)(b)(c)(d)(e)(f)(g);
	}
	function A8(fun,a,b,c,d,e,f,g,h)
	{
		return fun.arity === 8
			? fun.func(a,b,c,d,e,f,g,h)
			: fun(a)(b)(c)(d)(e)(f)(g)(h);
	}
	function A9(fun,a,b,c,d,e,f,g,h,i)
	{
		return fun.arity === 9
			? fun.func(a,b,c,d,e,f,g,h,i)
			: fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
	}
}

Elm.Native.Show = {};
Elm.Native.Show.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Show = localRuntime.Native.Show || {};
	if (localRuntime.Native.Show.values)
	{
		return localRuntime.Native.Show.values;
	}

	var _Array;
	var Dict;
	var List;
	var Utils = Elm.Native.Utils.make(localRuntime);

	var toString = function(v)
	{
		var type = typeof v;
		if (type === "function")
		{
			var name = v.func ? v.func.name : v.name;
			return '<function' + (name === '' ? '' : ': ') + name + '>';
		}
		else if (type === "boolean")
		{
			return v ? "True" : "False";
		}
		else if (type === "number")
		{
			return v + "";
		}
		else if ((v instanceof String) && v.isChar)
		{
			return "'" + addSlashes(v, true) + "'";
		}
		else if (type === "string")
		{
			return '"' + addSlashes(v, false) + '"';
		}
		else if (type === "object" && '_' in v && probablyPublic(v))
		{
			var output = [];
			for (var k in v._)
			{
				for (var i = v._[k].length; i--; )
				{
					output.push(k + " = " + toString(v._[k][i]));
				}
			}
			for (var k in v)
			{
				if (k === '_') continue;
				output.push(k + " = " + toString(v[k]));
			}
			if (output.length === 0)
			{
				return "{}";
			}
			return "{ " + output.join(", ") + " }";
		}
		else if (type === "object" && 'ctor' in v)
		{
			if (v.ctor.substring(0,6) === "_Tuple")
			{
				var output = [];
				for (var k in v)
				{
					if (k === 'ctor') continue;
					output.push(toString(v[k]));
				}
				return "(" + output.join(",") + ")";
			}
			else if (v.ctor === "_Array")
			{
				if (!_Array)
				{
					_Array = Elm.Array.make(localRuntime);
				}
				var list = _Array.toList(v);
				return "Array.fromList " + toString(list);
			}
			else if (v.ctor === "::")
			{
				var output = '[' + toString(v._0);
				v = v._1;
				while (v.ctor === "::")
				{
					output += "," + toString(v._0);
					v = v._1;
				}
				return output + ']';
			}
			else if (v.ctor === "[]")
			{
				return "[]";
			}
			else if (v.ctor === "RBNode" || v.ctor === "RBEmpty")
			{
				if (!Dict)
				{
					Dict = Elm.Dict.make(localRuntime);
				}
				if (!List)
				{
					List = Elm.List.make(localRuntime);
				}
				var list = Dict.toList(v);
				var name = "Dict";
				if (list.ctor === "::" && list._0._1.ctor === "_Tuple0")
				{
					name = "Set";
					list = A2(List.map, function(x){return x._0}, list);
				}
				return name + ".fromList " + toString(list);
			}
			else if (v.ctor.slice(0,5) === "Text:")
			{
				return '<text>'
			}
			else
			{
				var output = "";
				for (var i in v)
				{
					if (i === 'ctor') continue;
					var str = toString(v[i]);
					var parenless = str[0] === '{' || str[0] === '<' || str.indexOf(' ') < 0;
					output += ' ' + (parenless ? str : '(' + str + ')');
				}
				return v.ctor + output;
			}
		}
		if (type === 'object' && 'notify' in v && 'id' in v)
		{
			return '<Signal>';
		}
		return "<internal structure>";
	};

	function addSlashes(str, isChar)
	{
		var s = str.replace(/\\/g, '\\\\')
				  .replace(/\n/g, '\\n')
				  .replace(/\t/g, '\\t')
				  .replace(/\r/g, '\\r')
				  .replace(/\v/g, '\\v')
				  .replace(/\0/g, '\\0');
		if (isChar)
		{
			return s.replace(/\'/g, "\\'")
		}
		else
		{
			return s.replace(/\"/g, '\\"');
		}
	}

	function probablyPublic(v)
	{
		var keys = Object.keys(v);
		var len = keys.length;
		if (len === 3
			&& 'props' in v
			&& 'element' in v)
		{
			return false;
		}
		else if (len === 5
			&& 'horizontal' in v
			&& 'vertical' in v
			&& 'x' in v
			&& 'y' in v)
		{
			return false;
		}
		else if (len === 7
			&& 'theta' in v
			&& 'scale' in v
			&& 'x' in v
			&& 'y' in v
			&& 'alpha' in v
			&& 'form' in v)
		{
			return false;
		}
		return true;
	}

	return localRuntime.Native.Show.values = {
		toString: toString
	};
};

Elm.Native.Signal = {};
Elm.Native.Signal.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Signal = localRuntime.Native.Signal || {};
	if (localRuntime.Native.Signal.values)
	{
		return localRuntime.Native.Signal.values;
	}


	var Task = Elm.Native.Task.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);


	function broadcastToKids(node, timestamp, update)
	{
		var kids = node.kids;
		for (var i = kids.length; i--; )
		{
			kids[i].notify(timestamp, update, node.id);
		}
	}


	// INPUT

	function input(name, base)
	{
		var node = {
			id: Utils.guid(),
			name: 'input-' + name,
			value: base,
			parents: [],
			kids: []
		};

		node.notify = function(timestamp, targetId, value) {
			var update = targetId === node.id;
			if (update)
			{
				node.value = value;
			}
			broadcastToKids(node, timestamp, update);
			return update;
		};

		localRuntime.inputs.push(node);

		return node;
	}

	function constant(value)
	{
		return input('constant', value);
	}


	// MAILBOX

	function mailbox(base)
	{
		var signal = input('mailbox', base);

		function send(value) {
			return Task.asyncFunction(function(callback) {
				localRuntime.setTimeout(function() {
					localRuntime.notify(signal.id, value);
				}, 0);
				callback(Task.succeed(Utils.Tuple0));
			});
		}

		return {
			_: {},
			signal: signal,
			address: {
				ctor: 'Address',
				_0: send
			}
		};
	}

	function sendMessage(message)
	{
		Task.perform(message._0);
	}


	// OUTPUT

	function output(name, handler, parent)
	{
		var node = {
			id: Utils.guid(),
			name: 'output-' + name,
			parents: [parent],
			isOutput: true
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentUpdate)
			{
				handler(parent.value);
			}
		};

		parent.kids.push(node);

		return node;
	}


	// MAP

	function mapMany(refreshValue, args)
	{
		var node = {
			id: Utils.guid(),
			name: 'map' + args.length,
			value: refreshValue(),
			parents: args,
			kids: []
		};

		var numberOfParents = args.length;
		var count = 0;
		var update = false;

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			++count;

			update = update || parentUpdate;

			if (count === numberOfParents)
			{
				if (update)
				{
					node.value = refreshValue();
				}
				broadcastToKids(node, timestamp, update);
				update = false;
				count = 0;
			}
		};

		for (var i = numberOfParents; i--; )
		{
			args[i].kids.push(node);
		}

		return node;
	}


	function map(func, a)
	{
		function refreshValue()
		{
			return func(a.value);
		}
		return mapMany(refreshValue, [a]);
	}


	function map2(func, a, b)
	{
		function refreshValue()
		{
			return A2( func, a.value, b.value );
		}
		return mapMany(refreshValue, [a,b]);
	}


	function map3(func, a, b, c)
	{
		function refreshValue()
		{
			return A3( func, a.value, b.value, c.value );
		}
		return mapMany(refreshValue, [a,b,c]);
	}


	function map4(func, a, b, c, d)
	{
		function refreshValue()
		{
			return A4( func, a.value, b.value, c.value, d.value );
		}
		return mapMany(refreshValue, [a,b,c,d]);
	}


	function map5(func, a, b, c, d, e)
	{
		function refreshValue()
		{
			return A5( func, a.value, b.value, c.value, d.value, e.value );
		}
		return mapMany(refreshValue, [a,b,c,d,e]);
	}



	// FOLD

	function foldp(update, state, signal)
	{
		var node = {
			id: Utils.guid(),
			name: 'foldp',
			parents: [signal],
			kids: [],
			value: state
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentUpdate)
			{
				node.value = A2( update, signal.value, node.value );
			}
			broadcastToKids(node, timestamp, parentUpdate);
		};

		signal.kids.push(node);

		return node;
	}


	// TIME

	function timestamp(signal)
	{
		var node = {
			id: Utils.guid(),
			name: 'timestamp',
			value: Utils.Tuple2(localRuntime.timer.programStart, signal.value),
			parents: [signal],
			kids: []
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentUpdate)
			{
				node.value = Utils.Tuple2(timestamp, signal.value);
			}
			broadcastToKids(node, timestamp, parentUpdate);
		};

		signal.kids.push(node);

		return node;
	}


	function delay(time, signal)
	{
		var delayed = input('delay-input-' + time, signal.value);

		function handler(value)
		{
			setTimeout(function() {
				localRuntime.notify(delayed.id, value);
			}, time);
		}

		output('delay-output-' + time, handler, signal);

		return delayed;
	}


	// MERGING

	function genericMerge(tieBreaker, leftStream, rightStream)
	{
		var node = {
			id: Utils.guid(),
			name: 'merge',
			value: A2(tieBreaker, leftStream.value, rightStream.value),
			parents: [leftStream, rightStream],
			kids: []
		};

		var left = { touched: false, update: false, value: null };
		var right = { touched: false, update: false, value: null };

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentID === leftStream.id)
			{
				left.touched = true;
				left.update = parentUpdate;
				left.value = leftStream.value;
			}
			if (parentID === rightStream.id)
			{
				right.touched = true;
				right.update = parentUpdate;
				right.value = rightStream.value;
			}

			if (left.touched && right.touched)
			{
				var update = false;
				if (left.update && right.update)
				{
					node.value = A2(tieBreaker, left.value, right.value);
					update = true;
				}
				else if (left.update)
				{
					node.value = left.value;
					update = true;
				}
				else if (right.update)
				{
					node.value = right.value;
					update = true;
				}
				left.touched = false;
				right.touched = false;

				broadcastToKids(node, timestamp, update);
			}
		};

		leftStream.kids.push(node);
		rightStream.kids.push(node);

		return node;
	}


	// FILTERING

	function filterMap(toMaybe, base, signal)
	{
		var maybe = toMaybe(signal.value);
		var node = {
			id: Utils.guid(),
			name: 'filterMap',
			value: maybe.ctor === 'Nothing' ? base : maybe._0,
			parents: [signal],
			kids: []
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			var update = false;
			if (parentUpdate)
			{
				var maybe = toMaybe(signal.value);
				if (maybe.ctor === 'Just')
				{
					update = true;
					node.value = maybe._0;
				}
			}
			broadcastToKids(node, timestamp, update);
		};

		signal.kids.push(node);

		return node;
	}


	// SAMPLING

	function sampleOn(ticker, signal)
	{
		var node = {
			id: Utils.guid(),
			name: 'sampleOn',
			value: signal.value,
			parents: [ticker, signal],
			kids: []
		};

		var signalTouch = false;
		var tickerTouch = false;
		var tickerUpdate = false;

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentID === ticker.id)
			{
				tickerTouch = true;
				tickerUpdate = parentUpdate;
			}
			if (parentID === signal.id)
			{
				signalTouch = true;
			}

			if (tickerTouch && signalTouch)
			{
				if (tickerUpdate)
				{
					node.value = signal.value;
				}
				tickerTouch = false;
				signalTouch = false;

				broadcastToKids(node, timestamp, tickerUpdate);
			}
		};

		ticker.kids.push(node);
		signal.kids.push(node);

		return node;
	}


	// DROP REPEATS

	function dropRepeats(signal)
	{
		var node = {
			id: Utils.guid(),
			name: 'dropRepeats',
			value: signal.value,
			parents: [signal],
			kids: []
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			var update = false;
			if (parentUpdate && !Utils.eq(node.value, signal.value))
			{
				node.value = signal.value;
				update = true;
			}
			broadcastToKids(node, timestamp, update);
		};

		signal.kids.push(node);

		return node;
	}


	return localRuntime.Native.Signal.values = {
		input: input,
		constant: constant,
		mailbox: mailbox,
		sendMessage: sendMessage,
		output: output,
		map: F2(map),
		map2: F3(map2),
		map3: F4(map3),
		map4: F5(map4),
		map5: F6(map5),
		foldp: F3(foldp),
		genericMerge: F3(genericMerge),
		filterMap: F3(filterMap),
		sampleOn: F2(sampleOn),
		dropRepeats: dropRepeats,
		timestamp: timestamp,
		delay: F2(delay)
	};
};

Elm.Native.String = {};
Elm.Native.String.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.String = localRuntime.Native.String || {};
	if (localRuntime.Native.String.values)
	{
		return localRuntime.Native.String.values;
	}
	if ('values' in Elm.Native.String)
	{
		return localRuntime.Native.String.values = Elm.Native.String.values;
	}


	var Char = Elm.Char.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);
	var Result = Elm.Result.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);

	function isEmpty(str)
	{
		return str.length === 0;
	}
	function cons(chr,str)
	{
		return chr + str;
	}
	function uncons(str)
	{
		var hd;
		return (hd = str[0])
			? Maybe.Just(Utils.Tuple2(Utils.chr(hd), str.slice(1)))
			: Maybe.Nothing;
	}
	function append(a,b)
	{
		return a + b;
	}
	function concat(strs)
	{
		return List.toArray(strs).join('');
	}
	function length(str)
	{
		return str.length;
	}
	function map(f,str)
	{
		var out = str.split('');
		for (var i = out.length; i--; )
		{
			out[i] = f(Utils.chr(out[i]));
		}
		return out.join('');
	}
	function filter(pred,str)
	{
		return str.split('').map(Utils.chr).filter(pred).join('');
	}
	function reverse(str)
	{
		return str.split('').reverse().join('');
	}
	function foldl(f,b,str)
	{
		var len = str.length;
		for (var i = 0; i < len; ++i)
		{
			b = A2(f, Utils.chr(str[i]), b);
		}
		return b;
	}
	function foldr(f,b,str)
	{
		for (var i = str.length; i--; )
		{
			b = A2(f, Utils.chr(str[i]), b);
		}
		return b;
	}

	function split(sep, str)
	{
		return List.fromArray(str.split(sep));
	}
	function join(sep, strs)
	{
		return List.toArray(strs).join(sep);
	}
	function repeat(n, str)
	{
		var result = '';
		while (n > 0)
		{
			if (n & 1)
			{
				result += str;
			}
			n >>= 1, str += str;
		}
		return result;
	}

	function slice(start, end, str)
	{
		return str.slice(start,end);
	}
	function left(n, str)
	{
		return n < 1 ? "" : str.slice(0,n);
	}
	function right(n, str)
	{
		return n < 1 ? "" : str.slice(-n);
	}
	function dropLeft(n, str)
	{
		return n < 1 ? str : str.slice(n);
	}
	function dropRight(n, str)
	{
		return n < 1 ? str : str.slice(0,-n);
	}

	function pad(n,chr,str)
	{
		var half = (n - str.length) / 2;
		return repeat(Math.ceil(half),chr) + str + repeat(half|0,chr);
	}
	function padRight(n,chr,str)
	{
		return str + repeat(n - str.length, chr);
	}
	function padLeft(n,chr,str)
	{
		return repeat(n - str.length, chr) + str;
	}

	function trim(str)
	{
		return str.trim();
	}
	function trimLeft(str)
	{
		return str.trimLeft();
	}
	function trimRight(str)
	{
		return str.trimRight();
	}

	function words(str)
	{
		return List.fromArray(str.trim().split(/\s+/g));
	}
	function lines(str)
	{
		return List.fromArray(str.split(/\r\n|\r|\n/g));
	}

	function toUpper(str)
	{
		return str.toUpperCase();
	}
	function toLower(str)
	{
		return str.toLowerCase();
	}

	function any(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (pred(Utils.chr(str[i])))
			{
				return true;
			}
		}
		return false;
	}
	function all(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (!pred(Utils.chr(str[i])))
			{
				return false;
			}
		}
		return true;
	}

	function contains(sub, str)
	{
		return str.indexOf(sub) > -1;
	}
	function startsWith(sub, str)
	{
		return str.indexOf(sub) === 0;
	}
	function endsWith(sub, str)
	{
		return str.length >= sub.length &&
			str.lastIndexOf(sub) === str.length - sub.length;
	}
	function indexes(sub, str)
	{
		var subLen = sub.length;
		var i = 0;
		var is = [];
		while ((i = str.indexOf(sub, i)) > -1)
		{
			is.push(i);
			i = i + subLen;
		}
		return List.fromArray(is);
	}

	function toInt(s)
	{
		var len = s.length;
		if (len === 0)
		{
			return Result.Err("could not convert string '" + s + "' to an Int" );
		}
		var start = 0;
		if (s[0] == '-')
		{
			if (len === 1)
			{
				return Result.Err("could not convert string '" + s + "' to an Int" );
			}
			start = 1;
		}
		for (var i = start; i < len; ++i)
		{
			if (!Char.isDigit(s[i]))
			{
				return Result.Err("could not convert string '" + s + "' to an Int" );
			}
		}
		return Result.Ok(parseInt(s, 10));
	}

	function toFloat(s)
	{
		var len = s.length;
		if (len === 0)
		{
			return Result.Err("could not convert string '" + s + "' to a Float" );
		}
		var start = 0;
		if (s[0] == '-')
		{
			if (len === 1)
			{
				return Result.Err("could not convert string '" + s + "' to a Float" );
			}
			start = 1;
		}
		var dotCount = 0;
		for (var i = start; i < len; ++i)
		{
			if (Char.isDigit(s[i]))
			{
				continue;
			}
			if (s[i] === '.')
			{
				dotCount += 1;
				if (dotCount <= 1)
				{
					continue;
				}
			}
			return Result.Err("could not convert string '" + s + "' to a Float" );
		}
		return Result.Ok(parseFloat(s));
	}

	function toList(str)
	{
		return List.fromArray(str.split('').map(Utils.chr));
	}
	function fromList(chars)
	{
		return List.toArray(chars).join('');
	}

	return Elm.Native.String.values = {
		isEmpty: isEmpty,
		cons: F2(cons),
		uncons: uncons,
		append: F2(append),
		concat: concat,
		length: length,
		map: F2(map),
		filter: F2(filter),
		reverse: reverse,
		foldl: F3(foldl),
		foldr: F3(foldr),

		split: F2(split),
		join: F2(join),
		repeat: F2(repeat),

		slice: F3(slice),
		left: F2(left),
		right: F2(right),
		dropLeft: F2(dropLeft),
		dropRight: F2(dropRight),

		pad: F3(pad),
		padLeft: F3(padLeft),
		padRight: F3(padRight),

		trim: trim,
		trimLeft: trimLeft,
		trimRight: trimRight,

		words: words,
		lines: lines,

		toUpper: toUpper,
		toLower: toLower,

		any: F2(any),
		all: F2(all),

		contains: F2(contains),
		startsWith: F2(startsWith),
		endsWith: F2(endsWith),
		indexes: F2(indexes),

		toInt: toInt,
		toFloat: toFloat,
		toList: toList,
		fromList: fromList
	};
};

Elm.Native.Task = {};
Elm.Native.Task.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Task = localRuntime.Native.Task || {};
	if (localRuntime.Native.Task.values)
	{
		return localRuntime.Native.Task.values;
	}

	var Result = Elm.Result.make(localRuntime);
	var Signal;
	var Utils = Elm.Native.Utils.make(localRuntime);


	// CONSTRUCTORS

	function succeed(value)
	{
		return {
			tag: 'Succeed',
			value: value
		};
	}

	function fail(error)
	{
		return {
			tag: 'Fail',
			value: error
		};
	}

	function asyncFunction(func)
	{
		return {
			tag: 'Async',
			asyncFunction: func
		};
	}

	function andThen(task, callback)
	{
		return {
			tag: 'AndThen',
			task: task,
			callback: callback
		};
	}

	function catch_(task, callback)
	{
		return {
			tag: 'Catch',
			task: task,
			callback: callback
		};
	}


	// RUNNER

	function perform(task) {
		runTask({ task: task }, function() {});
	}

	function performSignal(name, signal)
	{
		var workQueue = [];

		function onComplete()
		{
			workQueue.shift();

			setTimeout(function() {
				if (workQueue.length > 0)
				{
					runTask(workQueue[0], onComplete);
				}
			}, 0);
		}

		function register(task)
		{
			var root = { task: task };
			workQueue.push(root);
			if (workQueue.length === 1)
			{
				runTask(root, onComplete);
			}
		}

		if (!Signal)
		{
			Signal = Elm.Native.Signal.make(localRuntime);
		}
		Signal.output('perform-tasks-' + name, register, signal);

		register(signal.value);

		return signal;
	}

	function mark(status, task)
	{
		return { status: status, task: task };
	}

	function runTask(root, onComplete)
	{
		var result = mark('runnable', root.task);
		while (result.status === 'runnable')
		{
			result = stepTask(onComplete, root, result.task);
		}

		if (result.status === 'done')
		{
			root.task = result.task;
			onComplete();
		}

		if (result.status === 'blocked')
		{
			root.task = result.task;
		}
	}

	function stepTask(onComplete, root, task)
	{
		var tag = task.tag;

		if (tag === 'Succeed' || tag === 'Fail')
		{
			return mark('done', task);
		}

		if (tag === 'Async')
		{
			var placeHolder = {};
			var couldBeSync = true;
			var wasSync = false;

			task.asyncFunction(function(result) {
				placeHolder.tag = result.tag;
				placeHolder.value = result.value;
				if (couldBeSync)
				{
					wasSync = true;
				}
				else
				{
					runTask(root, onComplete);
				}
			});
			couldBeSync = false;
			return mark(wasSync ? 'done' : 'blocked', placeHolder);
		}

		if (tag === 'AndThen' || tag === 'Catch')
		{
			var result = mark('runnable', task.task);
			while (result.status === 'runnable')
			{
				result = stepTask(onComplete, root, result.task);
			}

			if (result.status === 'done')
			{
				var activeTask = result.task;
				var activeTag = activeTask.tag;

				var succeedChain = activeTag === 'Succeed' && tag === 'AndThen';
				var failChain = activeTag === 'Fail' && tag === 'Catch';

				return (succeedChain || failChain)
					? mark('runnable', task.callback(activeTask.value))
					: mark('runnable', activeTask);
			}
			if (result.status === 'blocked')
			{
				return mark('blocked', {
					tag: tag,
					task: result.task,
					callback: task.callback
				});
			}
		}
	}


	// THREADS

	function sleep(time) {
		return asyncFunction(function(callback) {
			setTimeout(function() {
				callback(succeed(Utils.Tuple0));
			}, time);
		});
	}

	function spawn(task) {
		return asyncFunction(function(callback) {
			var id = setTimeout(function() {
				perform(task);
			}, 0);
			callback(succeed(id));
		});
	}


	return localRuntime.Native.Task.values = {
		succeed: succeed,
		fail: fail,
		asyncFunction: asyncFunction,
		andThen: F2(andThen),
		catch_: F2(catch_),
		perform: perform,
		performSignal: performSignal,
		spawn: spawn,
		sleep: sleep
	};
};

Elm.Native.Text = {};
Elm.Native.Text.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Text = localRuntime.Native.Text || {};
	if (localRuntime.Native.Text.values)
	{
		return localRuntime.Native.Text.values;
	}

	var toCss = Elm.Native.Color.make(localRuntime).toCss;
	var List = Elm.Native.List.make(localRuntime);


	// CONSTRUCTORS

	function fromString(str)
	{
		return {
			ctor: 'Text:Text',
			_0: str
		};
	}

	function append(a, b)
	{
		return {
			ctor: 'Text:Append',
			_0: a,
			_1: b
		};
	}

	function addMeta(field, value, text)
	{
		var newProps = {};
		var newText = {
			ctor: 'Text:Meta',
			_0: newProps,
			_1: text
		};

		if (text.ctor === 'Text:Meta')
		{
			newText._1 = text._1;
			var props = text._0;
			for (var i = metaKeys.length; i--; )
			{
				var key = metaKeys[i];
				var val = props[key];
				if (val)
				{
					newProps[key] = val;
				}
			}
		}
		newProps[field] = value;
		return newText;
	}

	var metaKeys = [
		'font-size',
		'font-family',
		'font-style',
		'font-weight',
		'href',
		'text-decoration',
		'color'
	];


	// conversions from Elm values to CSS

	function toTypefaces(list)
	{
		var typefaces = List.toArray(list);
		for (var i = typefaces.length; i--; )
		{
			var typeface = typefaces[i];
			if (typeface.indexOf(' ') > -1)
			{
				typefaces[i] = "'" + typeface + "'";
			}
		}
		return typefaces.join(',');
	}

	function toLine(line)
	{
		var ctor = line.ctor;
		return ctor === 'Under'
			? 'underline'
			: ctor === 'Over'
				? 'overline'
				: 'line-through';
	}

	// setting styles of Text

	function style(style, text)
	{
		var newText = addMeta('color', toCss(style.color), text);
		var props = newText._0;

		if (style.typeface.ctor !== '[]')
		{
			props['font-family'] = toTypefaces(style.typeface);
		}
		if (style.height.ctor !== "Nothing")
		{
			props['font-size'] = style.height._0 + 'px';
		}
		if (style.bold)
		{
			props['font-weight'] = 'bold';
		}
		if (style.italic)
		{
			props['font-style'] = 'italic';
		}
		if (style.line.ctor !== 'Nothing')
		{
			props['text-decoration'] = toLine(style.line._0);
		}
		return newText;
	}

	function height(px, text)
	{
		return addMeta('font-size', px + 'px', text);
	}

	function typeface(names, text)
	{
		return addMeta('font-family', toTypefaces(names), text);
	}

	function monospace(text)
	{
		return addMeta('font-family', 'monospace', text);
	}

	function italic(text)
	{
		return addMeta('font-style', 'italic', text);
	}

	function bold(text)
	{
		return addMeta('font-weight', 'bold', text);
	}

	function link(href, text)
	{
		return addMeta('href', href, text);
	}

	function line(line, text)
	{
		return addMeta('text-decoration', toLine(line), text);
	}

	function color(color, text)
	{
		return addMeta('color', toCss(color), text);;
	}


	// RENDER

	function renderHtml(text)
	{
		var tag = text.ctor;
		if (tag === 'Text:Append')
		{
			return renderHtml(text._0) + renderHtml(text._1);
		}
		if (tag === 'Text:Text')
		{
			return properEscape(text._0);
		}
		if (tag === 'Text:Meta')
		{
			return renderMeta(text._0, renderHtml(text._1));
		}
	}

	function renderMeta(metas, string)
	{
		var href = metas['href'];
		if (href)
		{
			string = '<a href="' + href + '">' + string + '</a>';
		}
		var styles = '';
		for (var key in metas)
		{
			if (key === 'href')
			{
				continue;
			}
			styles += key + ':' + metas[key] + ';';
		}
		if (styles)
		{
			string = '<span style="' + styles + '">' + string + '</span>';
		}
		return string;
	}

	function properEscape(str)
	{
		if (str.length == 0)
		{
			return str;
		}
		str = str //.replace(/&/g,  "&#38;")
			.replace(/"/g,  '&#34;')
			.replace(/'/g,  "&#39;")
			.replace(/</g,  "&#60;")
			.replace(/>/g,  "&#62;");
		var arr = str.split('\n');
		for (var i = arr.length; i--; )
		{
			arr[i] = makeSpaces(arr[i]);
		}
		return arr.join('<br/>');
	}

	function makeSpaces(s)
	{
		if (s.length == 0)
		{
			return s;
		}
		var arr = s.split('');
		if (arr[0] == ' ')
		{
			arr[0] = "&nbsp;"
		}
		for (var i = arr.length; --i; )
		{
			if (arr[i][0] == ' ' && arr[i-1] == ' ')
			{
				arr[i-1] = arr[i-1] + arr[i];
				arr[i] = '';
			}
		}
		for (var i = arr.length; i--; )
		{
			if (arr[i].length > 1 && arr[i][0] == ' ')
			{
				var spaces = arr[i].split('');
				for (var j = spaces.length - 2; j >= 0; j -= 2)
				{
					spaces[j] = '&nbsp;';
				}
				arr[i] = spaces.join('');
			}
		}
		arr = arr.join('');
		if (arr[arr.length-1] === " ")
		{
			return arr.slice(0,-1) + '&nbsp;';
		}
		return arr;
	}


	return localRuntime.Native.Text.values = {
		fromString: fromString,
		append: F2(append),

		height: F2(height),
		italic: italic,
		bold: bold,
		line: F2(line),
		monospace: monospace,
		typeface: F2(typeface),
		color: F2(color),
		link: F2(link),
		style: F2(style),

		toTypefaces: toTypefaces,
		toLine: toLine,
		renderHtml: renderHtml
	};
};

Elm.Native.Time = {};
Elm.Native.Time.make = function(localRuntime)
{

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Time = localRuntime.Native.Time || {};
	if (localRuntime.Native.Time.values)
	{
		return localRuntime.Native.Time.values;
	}

	var NS = Elm.Native.Signal.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);


	// FRAMES PER SECOND

	function fpsWhen(desiredFPS, isOn)
	{
		var msPerFrame = 1000 / desiredFPS;
		var ticker = NS.input('fps-' + desiredFPS, null);

		function notifyTicker()
		{
			localRuntime.notify(ticker.id, null);
		}

		function firstArg(x, y)
		{
			return x;
		}

		// input fires either when isOn changes, or when ticker fires.
		// Its value is a tuple with the current timestamp, and the state of isOn
		var input = NS.timestamp(A3(NS.map2, F2(firstArg), NS.dropRepeats(isOn), ticker));

		var initialState = {
			isOn: false,
			time: localRuntime.timer.programStart,
			delta: 0
		};

		var timeoutId;

		function update(input,state)
		{
			var currentTime = input._0;
			var isOn = input._1;
			var wasOn = state.isOn;
			var previousTime = state.time;

			if (isOn)
			{
				timeoutId = localRuntime.setTimeout(notifyTicker, msPerFrame);
			}
			else if (wasOn)
			{
				clearTimeout(timeoutId);
			}

			return {
				isOn: isOn,
				time: currentTime,
				delta: (isOn && !wasOn) ? 0 : currentTime - previousTime
			};
		}

		return A2(
			NS.map,
			function(state) { return state.delta; },
			A3(NS.foldp, F2(update), update(input.value,initialState), input)
		);
	}


	// EVERY

	function every(t)
	{
		var ticker = NS.input('every-' + t, null);
		function tellTime()
		{
			localRuntime.notify(ticker.id, null);
		}
		var clock = A2( NS.map, fst, NS.timestamp(ticker) );
		setInterval(tellTime, t);
		return clock;
	}


	function fst(pair)
	{
		return pair._0;
	}


	function read(s)
	{
		var t = Date.parse(s);
		return isNaN(t) ? Maybe.Nothing : Maybe.Just(t);
	}

	return localRuntime.Native.Time.values = {
		fpsWhen: F2(fpsWhen),
		every: every,
		toDate: function(t) { return new window.Date(t); },
		read: read
	};

};

Elm.Native.Transform2D = {};
Elm.Native.Transform2D.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Transform2D = localRuntime.Native.Transform2D || {};
	if (localRuntime.Native.Transform2D.values)
	{
		return localRuntime.Native.Transform2D.values;
	}

	var A;
	if (typeof Float32Array === 'undefined')
	{
		A = function(arr)
		{
			this.length = arr.length;
			this[0] = arr[0];
			this[1] = arr[1];
			this[2] = arr[2];
			this[3] = arr[3];
			this[4] = arr[4];
			this[5] = arr[5];
		};
	}
	else
	{
		A = Float32Array;
	}

	// layout of matrix in an array is
	//
	//   | m11 m12 dx |
	//   | m21 m22 dy |
	//   |  0   0   1 |
	//
	//  new A([ m11, m12, dx, m21, m22, dy ])

	var identity = new A([1,0,0,0,1,0]);
	function matrix(m11, m12, m21, m22, dx, dy)
	{
		return new A([m11, m12, dx, m21, m22, dy]);
	}

	function rotation(t)
	{
		var c = Math.cos(t);
		var s = Math.sin(t);
		return new A([c, -s, 0, s, c, 0]);
	}

	function rotate(t,m)
	{
		var c = Math.cos(t);
		var s = Math.sin(t);
		var m11 = m[0], m12 = m[1], m21 = m[3], m22 = m[4];
		return new A([m11*c + m12*s, -m11*s + m12*c, m[2],
					  m21*c + m22*s, -m21*s + m22*c, m[5]]);
	}
	/*
	function move(xy,m) {
		var x = xy._0;
		var y = xy._1;
		var m11 = m[0], m12 = m[1], m21 = m[3], m22 = m[4];
		return new A([m11, m12, m11*x + m12*y + m[2],
					  m21, m22, m21*x + m22*y + m[5]]);
	}
	function scale(s,m) { return new A([m[0]*s, m[1]*s, m[2], m[3]*s, m[4]*s, m[5]]); }
	function scaleX(x,m) { return new A([m[0]*x, m[1], m[2], m[3]*x, m[4], m[5]]); }
	function scaleY(y,m) { return new A([m[0], m[1]*y, m[2], m[3], m[4]*y, m[5]]); }
	function reflectX(m) { return new A([-m[0], m[1], m[2], -m[3], m[4], m[5]]); }
	function reflectY(m) { return new A([m[0], -m[1], m[2], m[3], -m[4], m[5]]); }

	function transform(m11, m21, m12, m22, mdx, mdy, n) {
		var n11 = n[0], n12 = n[1], n21 = n[3], n22 = n[4], ndx = n[2], ndy = n[5];
		return new A([m11*n11 + m12*n21,
					  m11*n12 + m12*n22,
					  m11*ndx + m12*ndy + mdx,
					  m21*n11 + m22*n21,
					  m21*n12 + m22*n22,
					  m21*ndx + m22*ndy + mdy]);
	}
	*/
	function multiply(m, n)
	{
		var m11 = m[0], m12 = m[1], m21 = m[3], m22 = m[4], mdx = m[2], mdy = m[5];
		var n11 = n[0], n12 = n[1], n21 = n[3], n22 = n[4], ndx = n[2], ndy = n[5];
		return new A([m11*n11 + m12*n21,
					  m11*n12 + m12*n22,
					  m11*ndx + m12*ndy + mdx,
					  m21*n11 + m22*n21,
					  m21*n12 + m22*n22,
					  m21*ndx + m22*ndy + mdy]);
	}

	return localRuntime.Native.Transform2D.values = {
		identity:identity,
		matrix:F6(matrix),
		rotation:rotation,
		multiply:F2(multiply)
		/*
		transform:F7(transform),
		rotate:F2(rotate),
		move:F2(move),
		scale:F2(scale),
		scaleX:F2(scaleX),
		scaleY:F2(scaleY),
		reflectX:reflectX,
		reflectY:reflectY
		*/
	};

};

Elm.Native = Elm.Native || {};
Elm.Native.Utils = {};
Elm.Native.Utils.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Utils = localRuntime.Native.Utils || {};
	if (localRuntime.Native.Utils.values)
	{
		return localRuntime.Native.Utils.values;
	}

	function eq(l,r)
	{
		var stack = [{'x': l, 'y': r}]
		while (stack.length > 0)
		{
			var front = stack.pop();
			var x = front.x;
			var y = front.y;
			if (x === y)
			{
				continue;
			}
			if (typeof x === "object")
			{
				var c = 0;
				for (var i in x)
				{
					++c;
					if (i in y)
					{
						if (i !== 'ctor')
						{
							stack.push({ 'x': x[i], 'y': y[i] });
						}
					}
					else
					{
						return false;
					}
				}
				if ('ctor' in x)
				{
					stack.push({'x': x.ctor, 'y': y.ctor});
				}
				if (c !== Object.keys(y).length)
				{
					return false;
				}
			}
			else if (typeof x === 'function')
			{
				throw new Error('Equality error: general function equality is ' +
								'undecidable, and therefore, unsupported');
			}
			else
			{
				return false;
			}
		}
		return true;
	}

	// code in Generate/JavaScript.hs depends on the particular
	// integer values assigned to LT, EQ, and GT
	var LT = -1, EQ = 0, GT = 1, ord = ['LT','EQ','GT'];

	function compare(x,y)
	{
		return {
			ctor: ord[cmp(x,y)+1]
		};
	}

	function cmp(x,y) {
		var ord;
		if (typeof x !== 'object')
		{
			return x === y ? EQ : x < y ? LT : GT;
		}
		else if (x.isChar)
		{
			var a = x.toString();
			var b = y.toString();
			return a === b
				? EQ
				: a < b
					? LT
					: GT;
		}
		else if (x.ctor === "::" || x.ctor === "[]")
		{
			while (true)
			{
				if (x.ctor === "[]" && y.ctor === "[]")
				{
					return EQ;
				}
				if (x.ctor !== y.ctor)
				{
					return x.ctor === '[]' ? LT : GT;
				}
				ord = cmp(x._0, y._0);
				if (ord !== EQ)
				{
					return ord;
				}
				x = x._1;
				y = y._1;
			}
		}
		else if (x.ctor.slice(0,6) === '_Tuple')
		{
			var n = x.ctor.slice(6) - 0;
			var err = 'cannot compare tuples with more than 6 elements.';
			if (n === 0) return EQ;
			if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
			if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
			if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
			if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
			if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
			if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
			if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
			return EQ;
		}
		else
		{
			throw new Error('Comparison error: comparison is only defined on ints, ' +
							'floats, times, chars, strings, lists of comparable values, ' +
							'and tuples of comparable values.');
		}
	}


	var Tuple0 = {
		ctor: "_Tuple0"
	};

	function Tuple2(x,y)
	{
		return {
			ctor: "_Tuple2",
			_0: x,
			_1: y
		};
	}

	function chr(c)
	{
		var x = new String(c);
		x.isChar = true;
		return x;
	}

	function txt(str)
	{
		var t = new String(str);
		t.text = true;
		return t;
	}

	var count = 0;
	function guid(_)
	{
		return count++
	}

	function copy(oldRecord)
	{
		var newRecord = {};
		for (var key in oldRecord)
		{
			var value = key === '_'
				? copy(oldRecord._)
				: oldRecord[key];
			newRecord[key] = value;
		}
		return newRecord;
	}

	function remove(key, oldRecord)
	{
		var record = copy(oldRecord);
		if (key in record._)
		{
			record[key] = record._[key][0];
			record._[key] = record._[key].slice(1);
			if (record._[key].length === 0)
			{
				delete record._[key];
			}
		}
		else
		{
			delete record[key];
		}
		return record;
	}

	function replace(keyValuePairs, oldRecord)
	{
		var record = copy(oldRecord);
		for (var i = keyValuePairs.length; i--; )
		{
			var pair = keyValuePairs[i];
			record[pair[0]] = pair[1];
		}
		return record;
	}

	function insert(key, value, oldRecord)
	{
		var newRecord = copy(oldRecord);
		if (key in newRecord)
		{
			var values = newRecord._[key];
			var copiedValues = values ? values.slice(0) : [];
			newRecord._[key] = [newRecord[key]].concat(copiedValues);
		}
		newRecord[key] = value;
		return newRecord;
	}

	function getXY(e)
	{
		var posx = 0;
		var posy = 0;
		if (e.pageX || e.pageY)
		{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY)
		{
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}

		if (localRuntime.isEmbed())
		{
			var rect = localRuntime.node.getBoundingClientRect();
			var relx = rect.left + document.body.scrollLeft + document.documentElement.scrollLeft;
			var rely = rect.top + document.body.scrollTop + document.documentElement.scrollTop;
			// TODO: figure out if there is a way to avoid rounding here
			posx = posx - Math.round(relx) - localRuntime.node.clientLeft;
			posy = posy - Math.round(rely) - localRuntime.node.clientTop;
		}
		return Tuple2(posx, posy);
	}


	//// LIST STUFF ////

	var Nil = { ctor:'[]' };

	function Cons(hd,tl)
	{
		return {
			ctor: "::",
			_0: hd,
			_1: tl
		};
	}

	function append(xs,ys)
	{
		// append Strings
		if (typeof xs === "string")
		{
			return xs + ys;
		}

		// append Text
		if (xs.ctor.slice(0,5) === 'Text:')
		{
			return {
				ctor: 'Text:Append',
				_0: xs,
				_1: ys
			};
		}



		// append Lists
		if (xs.ctor === '[]')
		{
			return ys;
		}
		var root = Cons(xs._0, Nil);
		var curr = root;
		xs = xs._1;
		while (xs.ctor !== '[]')
		{
			curr._1 = Cons(xs._0, Nil);
			xs = xs._1;
			curr = curr._1;
		}
		curr._1 = ys;
		return root;
	}

	//// RUNTIME ERRORS ////

	function indent(lines)
	{
		return '\n' + lines.join('\n');
	}

	function badCase(moduleName, span)
	{
		var msg = indent([
			'Non-exhaustive pattern match in case-expression.',
			'Make sure your patterns cover every case!'
		]);
		throw new Error('Runtime error in module ' + moduleName + ' (' + span + ')' + msg);
	}

	function badIf(moduleName, span)
	{
		var msg = indent([
			'Non-exhaustive pattern match in multi-way-if expression.',
			'It is best to use \'otherwise\' as the last branch of multi-way-if.'
		]);
		throw new Error('Runtime error in module ' + moduleName + ' (' + span + ')' + msg);
	}


	function badPort(expected, received)
	{
		var msg = indent([
			'Expecting ' + expected + ' but was given ',
			JSON.stringify(received)
		]);
		throw new Error('Runtime error when sending values through a port.' + msg);
	}


	return localRuntime.Native.Utils.values = {
		eq: eq,
		cmp: cmp,
		compare: F2(compare),
		Tuple0: Tuple0,
		Tuple2: Tuple2,
		chr: chr,
		txt: txt,
		copy: copy,
		remove: remove,
		replace: replace,
		insert: insert,
		guid: guid,
		getXY: getXY,

		Nil: Nil,
		Cons: Cons,
		append: F2(append),

		badCase: badCase,
		badIf: badIf,
		badPort: badPort
	};
};

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var createElement = require("./vdom/create-element.js")

module.exports = createElement

},{"./vdom/create-element.js":6}],2:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-document":24}],3:[function(require,module,exports){
"use strict";

module.exports = function isObject(x) {
	return typeof x === "object" && x !== null;
};

},{}],4:[function(require,module,exports){
var nativeIsArray = Array.isArray
var toString = Object.prototype.toString

module.exports = nativeIsArray || isArray

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}

},{}],5:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook.js")

module.exports = applyProperties

function applyProperties(node, props, previous) {
    for (var propName in props) {
        var propValue = props[propName]

        if (propValue === undefined) {
            removeProperty(node, propName, propValue, previous);
        } else if (isHook(propValue)) {
            removeProperty(node, propName, propValue, previous)
            if (propValue.hook) {
                propValue.hook(node,
                    propName,
                    previous ? previous[propName] : undefined)
            }
        } else {
            if (isObject(propValue)) {
                patchObject(node, props, previous, propName, propValue);
            } else {
                node[propName] = propValue
            }
        }
    }
}

function removeProperty(node, propName, propValue, previous) {
    if (previous) {
        var previousValue = previous[propName]

        if (!isHook(previousValue)) {
            if (propName === "attributes") {
                for (var attrName in previousValue) {
                    node.removeAttribute(attrName)
                }
            } else if (propName === "style") {
                for (var i in previousValue) {
                    node.style[i] = ""
                }
            } else if (typeof previousValue === "string") {
                node[propName] = ""
            } else {
                node[propName] = null
            }
        } else if (previousValue.unhook) {
            previousValue.unhook(node, propName, propValue)
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined

    // Set attributes
    if (propName === "attributes") {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName]

            if (attrValue === undefined) {
                node.removeAttribute(attrName)
            } else {
                node.setAttribute(attrName, attrValue)
            }
        }

        return
    }

    if(previousValue && isObject(previousValue) &&
        getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue
        return
    }

    if (!isObject(node[propName])) {
        node[propName] = {}
    }

    var replacer = propName === "style" ? "" : undefined

    for (var k in propValue) {
        var value = propValue[k]
        node[propName][k] = (value === undefined) ? replacer : value
    }
}

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}

},{"../vnode/is-vhook.js":13,"is-object":3}],6:[function(require,module,exports){
var document = require("global/document")

var applyProperties = require("./apply-properties")

var isVNode = require("../vnode/is-vnode.js")
var isVText = require("../vnode/is-vtext.js")
var isWidget = require("../vnode/is-widget.js")
var handleThunk = require("../vnode/handle-thunk.js")

module.exports = createElement

function createElement(vnode, opts) {
    var doc = opts ? opts.document || document : document
    var warn = opts ? opts.warn : null

    vnode = handleThunk(vnode).a

    if (isWidget(vnode)) {
        return vnode.init()
    } else if (isVText(vnode)) {
        return doc.createTextNode(vnode.text)
    } else if (!isVNode(vnode)) {
        if (warn) {
            warn("Item is not a valid virtual dom node", vnode)
        }
        return null
    }

    var node = (vnode.namespace === null) ?
        doc.createElement(vnode.tagName) :
        doc.createElementNS(vnode.namespace, vnode.tagName)

    var props = vnode.properties
    applyProperties(node, props)

    var children = vnode.children

    for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i], opts)
        if (childNode) {
            node.appendChild(childNode)
        }
    }

    return node
}

},{"../vnode/handle-thunk.js":11,"../vnode/is-vnode.js":14,"../vnode/is-vtext.js":15,"../vnode/is-widget.js":16,"./apply-properties":5,"global/document":2}],7:[function(require,module,exports){
// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
// We don't want to read all of the DOM nodes in the tree so we use
// the in-order tree indexing to eliminate recursion down certain branches.
// We only recurse into a DOM node if we know that it contains a child of
// interest.

var noChild = {}

module.exports = domIndex

function domIndex(rootNode, tree, indices, nodes) {
    if (!indices || indices.length === 0) {
        return {}
    } else {
        indices.sort(ascending)
        return recurse(rootNode, tree, indices, nodes, 0)
    }
}

function recurse(rootNode, tree, indices, nodes, rootIndex) {
    nodes = nodes || {}


    if (rootNode) {
        if (indexInRange(indices, rootIndex, rootIndex)) {
            nodes[rootIndex] = rootNode
        }

        var vChildren = tree.children

        if (vChildren) {

            var childNodes = rootNode.childNodes

            for (var i = 0; i < tree.children.length; i++) {
                rootIndex += 1

                var vChild = vChildren[i] || noChild
                var nextIndex = rootIndex + (vChild.count || 0)

                // skip recursion down the tree if there are no nodes down here
                if (indexInRange(indices, rootIndex, nextIndex)) {
                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
                }

                rootIndex = nextIndex
            }
        }
    }

    return nodes
}

// Binary search for an index in the interval [left, right]
function indexInRange(indices, left, right) {
    if (indices.length === 0) {
        return false
    }

    var minIndex = 0
    var maxIndex = indices.length - 1
    var currentIndex
    var currentItem

    while (minIndex <= maxIndex) {
        currentIndex = ((maxIndex + minIndex) / 2) >> 0
        currentItem = indices[currentIndex]

        if (minIndex === maxIndex) {
            return currentItem >= left && currentItem <= right
        } else if (currentItem < left) {
            minIndex = currentIndex + 1
        } else  if (currentItem > right) {
            maxIndex = currentIndex - 1
        } else {
            return true
        }
    }

    return false;
}

function ascending(a, b) {
    return a > b ? 1 : -1
}

},{}],8:[function(require,module,exports){
var applyProperties = require("./apply-properties")

var isWidget = require("../vnode/is-widget.js")
var VPatch = require("../vnode/vpatch.js")

var render = require("./create-element")
var updateWidget = require("./update-widget")

module.exports = applyPatch

function applyPatch(vpatch, domNode, renderOptions) {
    var type = vpatch.type
    var vNode = vpatch.vNode
    var patch = vpatch.patch

    switch (type) {
        case VPatch.REMOVE:
            return removeNode(domNode, vNode)
        case VPatch.INSERT:
            return insertNode(domNode, patch, renderOptions)
        case VPatch.VTEXT:
            return stringPatch(domNode, vNode, patch, renderOptions)
        case VPatch.WIDGET:
            return widgetPatch(domNode, vNode, patch, renderOptions)
        case VPatch.VNODE:
            return vNodePatch(domNode, vNode, patch, renderOptions)
        case VPatch.ORDER:
            reorderChildren(domNode, patch)
            return domNode
        case VPatch.PROPS:
            applyProperties(domNode, patch, vNode.properties)
            return domNode
        case VPatch.THUNK:
            return replaceRoot(domNode,
                renderOptions.patch(domNode, patch, renderOptions))
        default:
            return domNode
    }
}

function removeNode(domNode, vNode) {
    var parentNode = domNode.parentNode

    if (parentNode) {
        parentNode.removeChild(domNode)
    }

    destroyWidget(domNode, vNode);

    return null
}

function insertNode(parentNode, vNode, renderOptions) {
    var newNode = render(vNode, renderOptions)

    if (parentNode) {
        parentNode.appendChild(newNode)
    }

    return parentNode
}

function stringPatch(domNode, leftVNode, vText, renderOptions) {
    var newNode

    if (domNode.nodeType === 3) {
        domNode.replaceData(0, domNode.length, vText.text)
        newNode = domNode
    } else {
        var parentNode = domNode.parentNode
        newNode = render(vText, renderOptions)

        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode)
        }
    }

    return newNode
}

function widgetPatch(domNode, leftVNode, widget, renderOptions) {
    var updating = updateWidget(leftVNode, widget)
    var newNode

    if (updating) {
        newNode = widget.update(leftVNode, domNode) || domNode
    } else {
        newNode = render(widget, renderOptions)
    }

    var parentNode = domNode.parentNode

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    if (!updating) {
        destroyWidget(domNode, leftVNode)
    }

    return newNode
}

function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
    var parentNode = domNode.parentNode
    var newNode = render(vNode, renderOptions)

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    return newNode
}

function destroyWidget(domNode, w) {
    if (typeof w.destroy === "function" && isWidget(w)) {
        w.destroy(domNode)
    }
}

function reorderChildren(domNode, moves) {
    var childNodes = domNode.childNodes
    var keyMap = {}
    var node
    var remove
    var insert

    for (var i = 0; i < moves.removes.length; i++) {
        remove = moves.removes[i]
        node = childNodes[remove.from]
        if (remove.key) {
            keyMap[remove.key] = node
        }
        domNode.removeChild(node)
    }

    var length = childNodes.length
    for (var j = 0; j < moves.inserts.length; j++) {
        insert = moves.inserts[j]
        node = keyMap[insert.key]
        // this is the weirdest bug i've ever seen in webkit
        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
    }
}

function replaceRoot(oldRoot, newRoot) {
    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
    }

    return newRoot;
}

},{"../vnode/is-widget.js":16,"../vnode/vpatch.js":19,"./apply-properties":5,"./create-element":6,"./update-widget":10}],9:[function(require,module,exports){
var document = require("global/document")
var isArray = require("x-is-array")

var domIndex = require("./dom-index")
var patchOp = require("./patch-op")
module.exports = patch

function patch(rootNode, patches) {
    return patchRecursive(rootNode, patches)
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches)

    if (indices.length === 0) {
        return rootNode
    }

    var index = domIndex(rootNode, patches.a, indices)
    var ownerDocument = rootNode.ownerDocument

    if (!renderOptions) {
        renderOptions = { patch: patchRecursive }
        if (ownerDocument !== document) {
            renderOptions.document = ownerDocument
        }
    }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i]
        rootNode = applyPatch(rootNode,
            index[nodeIndex],
            patches[nodeIndex],
            renderOptions)
    }

    return rootNode
}

function applyPatch(rootNode, domNode, patchList, renderOptions) {
    if (!domNode) {
        return rootNode
    }

    var newNode

    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            newNode = patchOp(patchList[i], domNode, renderOptions)

            if (domNode === rootNode) {
                rootNode = newNode
            }
        }
    } else {
        newNode = patchOp(patchList, domNode, renderOptions)

        if (domNode === rootNode) {
            rootNode = newNode
        }
    }

    return rootNode
}

function patchIndices(patches) {
    var indices = []

    for (var key in patches) {
        if (key !== "a") {
            indices.push(Number(key))
        }
    }

    return indices
}

},{"./dom-index":7,"./patch-op":8,"global/document":2,"x-is-array":4}],10:[function(require,module,exports){
var isWidget = require("../vnode/is-widget.js")

module.exports = updateWidget

function updateWidget(a, b) {
    if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
            return a.id === b.id
        } else {
            return a.init === b.init
        }
    }

    return false
}

},{"../vnode/is-widget.js":16}],11:[function(require,module,exports){
var isVNode = require("./is-vnode")
var isVText = require("./is-vtext")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")

module.exports = handleThunk

function handleThunk(a, b) {
    var renderedA = a
    var renderedB = b

    if (isThunk(b)) {
        renderedB = renderThunk(b, a)
    }

    if (isThunk(a)) {
        renderedA = renderThunk(a, null)
    }

    return {
        a: renderedA,
        b: renderedB
    }
}

function renderThunk(thunk, previous) {
    var renderedThunk = thunk.vnode

    if (!renderedThunk) {
        renderedThunk = thunk.vnode = thunk.render(previous)
    }

    if (!(isVNode(renderedThunk) ||
            isVText(renderedThunk) ||
            isWidget(renderedThunk))) {
        throw new Error("thunk did not return a valid node");
    }

    return renderedThunk
}

},{"./is-thunk":12,"./is-vnode":14,"./is-vtext":15,"./is-widget":16}],12:[function(require,module,exports){
module.exports = isThunk

function isThunk(t) {
    return t && t.type === "Thunk"
}

},{}],13:[function(require,module,exports){
module.exports = isHook

function isHook(hook) {
    return hook &&
      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
}

},{}],14:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualNode

function isVirtualNode(x) {
    return x && x.type === "VirtualNode" && x.version === version
}

},{"./version":17}],15:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualText

function isVirtualText(x) {
    return x && x.type === "VirtualText" && x.version === version
}

},{"./version":17}],16:[function(require,module,exports){
module.exports = isWidget

function isWidget(w) {
    return w && w.type === "Widget"
}

},{}],17:[function(require,module,exports){
module.exports = "2"

},{}],18:[function(require,module,exports){
var version = require("./version")
var isVNode = require("./is-vnode")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")
var isVHook = require("./is-vhook")

module.exports = VirtualNode

var noProperties = {}
var noChildren = []

function VirtualNode(tagName, properties, children, key, namespace) {
    this.tagName = tagName
    this.properties = properties || noProperties
    this.children = children || noChildren
    this.key = key != null ? String(key) : undefined
    this.namespace = (typeof namespace === "string") ? namespace : null

    var count = (children && children.length) || 0
    var descendants = 0
    var hasWidgets = false
    var hasThunks = false
    var descendantHooks = false
    var hooks

    for (var propName in properties) {
        if (properties.hasOwnProperty(propName)) {
            var property = properties[propName]
            if (isVHook(property) && property.unhook) {
                if (!hooks) {
                    hooks = {}
                }

                hooks[propName] = property
            }
        }
    }

    for (var i = 0; i < count; i++) {
        var child = children[i]
        if (isVNode(child)) {
            descendants += child.count || 0

            if (!hasWidgets && child.hasWidgets) {
                hasWidgets = true
            }

            if (!hasThunks && child.hasThunks) {
                hasThunks = true
            }

            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
                descendantHooks = true
            }
        } else if (!hasWidgets && isWidget(child)) {
            if (typeof child.destroy === "function") {
                hasWidgets = true
            }
        } else if (!hasThunks && isThunk(child)) {
            hasThunks = true;
        }
    }

    this.count = count + descendants
    this.hasWidgets = hasWidgets
    this.hasThunks = hasThunks
    this.hooks = hooks
    this.descendantHooks = descendantHooks
}

VirtualNode.prototype.version = version
VirtualNode.prototype.type = "VirtualNode"

},{"./is-thunk":12,"./is-vhook":13,"./is-vnode":14,"./is-widget":16,"./version":17}],19:[function(require,module,exports){
var version = require("./version")

VirtualPatch.NONE = 0
VirtualPatch.VTEXT = 1
VirtualPatch.VNODE = 2
VirtualPatch.WIDGET = 3
VirtualPatch.PROPS = 4
VirtualPatch.ORDER = 5
VirtualPatch.INSERT = 6
VirtualPatch.REMOVE = 7
VirtualPatch.THUNK = 8

module.exports = VirtualPatch

function VirtualPatch(type, vNode, patch) {
    this.type = Number(type)
    this.vNode = vNode
    this.patch = patch
}

VirtualPatch.prototype.version = version
VirtualPatch.prototype.type = "VirtualPatch"

},{"./version":17}],20:[function(require,module,exports){
var version = require("./version")

module.exports = VirtualText

function VirtualText(text) {
    this.text = String(text)
}

VirtualText.prototype.version = version
VirtualText.prototype.type = "VirtualText"

},{"./version":17}],21:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook")

module.exports = diffProps

function diffProps(a, b) {
    var diff

    for (var aKey in a) {
        if (!(aKey in b)) {
            diff = diff || {}
            diff[aKey] = undefined
        }

        var aValue = a[aKey]
        var bValue = b[aKey]

        if (aValue === bValue) {
            continue
        } else if (isObject(aValue) && isObject(bValue)) {
            if (getPrototype(bValue) !== getPrototype(aValue)) {
                diff = diff || {}
                diff[aKey] = bValue
            } else if (isHook(bValue)) {
                 diff = diff || {}
                 diff[aKey] = bValue
            } else {
                var objectDiff = diffProps(aValue, bValue)
                if (objectDiff) {
                    diff = diff || {}
                    diff[aKey] = objectDiff
                }
            }
        } else {
            diff = diff || {}
            diff[aKey] = bValue
        }
    }

    for (var bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {}
            diff[bKey] = b[bKey]
        }
    }

    return diff
}

function getPrototype(value) {
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(value)
  } else if (value.__proto__) {
    return value.__proto__
  } else if (value.constructor) {
    return value.constructor.prototype
  }
}

},{"../vnode/is-vhook":13,"is-object":3}],22:[function(require,module,exports){
var isArray = require("x-is-array")

var VPatch = require("../vnode/vpatch")
var isVNode = require("../vnode/is-vnode")
var isVText = require("../vnode/is-vtext")
var isWidget = require("../vnode/is-widget")
var isThunk = require("../vnode/is-thunk")
var handleThunk = require("../vnode/handle-thunk")

var diffProps = require("./diff-props")

module.exports = diff

function diff(a, b) {
    var patch = { a: a }
    walk(a, b, patch, 0)
    return patch
}

function walk(a, b, patch, index) {
    if (a === b) {
        return
    }

    var apply = patch[index]
    var applyClear = false

    if (isThunk(a) || isThunk(b)) {
        thunks(a, b, patch, index)
    } else if (b == null) {

        // If a is a widget we will add a remove patch for it
        // Otherwise any child widgets/hooks must be destroyed.
        // This prevents adding two remove patches for a widget.
        if (!isWidget(a)) {
            clearState(a, patch, index)
            apply = patch[index]
        }

        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
    } else if (isVNode(b)) {
        if (isVNode(a)) {
            if (a.tagName === b.tagName &&
                a.namespace === b.namespace &&
                a.key === b.key) {
                var propsPatch = diffProps(a.properties, b.properties)
                if (propsPatch) {
                    apply = appendPatch(apply,
                        new VPatch(VPatch.PROPS, a, propsPatch))
                }
                apply = diffChildren(a, b, patch, apply, index)
            } else {
                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
                applyClear = true
            }
        } else {
            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
            applyClear = true
        }
    } else if (isVText(b)) {
        if (!isVText(a)) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
            applyClear = true
        } else if (a.text !== b.text) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
        }
    } else if (isWidget(b)) {
        if (!isWidget(a)) {
            applyClear = true
        }

        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
    }

    if (apply) {
        patch[index] = apply
    }

    if (applyClear) {
        clearState(a, patch, index)
    }
}

function diffChildren(a, b, patch, apply, index) {
    var aChildren = a.children
    var orderedSet = reorder(aChildren, b.children)
    var bChildren = orderedSet.children

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen

    for (var i = 0; i < len; i++) {
        var leftNode = aChildren[i]
        var rightNode = bChildren[i]
        index += 1

        if (!leftNode) {
            if (rightNode) {
                // Excess nodes in b need to be added
                apply = appendPatch(apply,
                    new VPatch(VPatch.INSERT, null, rightNode))
            }
        } else {
            walk(leftNode, rightNode, patch, index)
        }

        if (isVNode(leftNode) && leftNode.count) {
            index += leftNode.count
        }
    }

    if (orderedSet.moves) {
        // Reorder nodes last
        apply = appendPatch(apply, new VPatch(
            VPatch.ORDER,
            a,
            orderedSet.moves
        ))
    }

    return apply
}

function clearState(vNode, patch, index) {
    // TODO: Make this a single walk, not two
    unhook(vNode, patch, index)
    destroyWidgets(vNode, patch, index)
}

// Patch records for all destroyed widgets must be added because we need
// a DOM node reference for the destroy function
function destroyWidgets(vNode, patch, index) {
    if (isWidget(vNode)) {
        if (typeof vNode.destroy === "function") {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(VPatch.REMOVE, vNode, null)
            )
        }
    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
        var children = vNode.children
        var len = children.length
        for (var i = 0; i < len; i++) {
            var child = children[i]
            index += 1

            destroyWidgets(child, patch, index)

            if (isVNode(child) && child.count) {
                index += child.count
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

// Create a sub-patch for thunks
function thunks(a, b, patch, index) {
    var nodes = handleThunk(a, b)
    var thunkPatch = diff(nodes.a, nodes.b)
    if (hasPatches(thunkPatch)) {
        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
    }
}

function hasPatches(patch) {
    for (var index in patch) {
        if (index !== "a") {
            return true
        }
    }

    return false
}

// Execute hooks when two nodes are identical
function unhook(vNode, patch, index) {
    if (isVNode(vNode)) {
        if (vNode.hooks) {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(
                    VPatch.PROPS,
                    vNode,
                    undefinedKeys(vNode.hooks)
                )
            )
        }

        if (vNode.descendantHooks || vNode.hasThunks) {
            var children = vNode.children
            var len = children.length
            for (var i = 0; i < len; i++) {
                var child = children[i]
                index += 1

                unhook(child, patch, index)

                if (isVNode(child) && child.count) {
                    index += child.count
                }
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

function undefinedKeys(obj) {
    var result = {}

    for (var key in obj) {
        result[key] = undefined
    }

    return result
}

// List diff, naive left to right reordering
function reorder(aChildren, bChildren) {
    // O(M) time, O(M) memory
    var bChildIndex = keyIndex(bChildren)
    var bKeys = bChildIndex.keys
    var bFree = bChildIndex.free

    if (bFree.length === bChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(N) time, O(N) memory
    var aChildIndex = keyIndex(aChildren)
    var aKeys = aChildIndex.keys
    var aFree = aChildIndex.free

    if (aFree.length === aChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(MAX(N, M)) memory
    var newChildren = []

    var freeIndex = 0
    var freeCount = bFree.length
    var deletedItems = 0

    // Iterate through a and match a node in b
    // O(N) time,
    for (var i = 0 ; i < aChildren.length; i++) {
        var aItem = aChildren[i]
        var itemIndex

        if (aItem.key) {
            if (bKeys.hasOwnProperty(aItem.key)) {
                // Match up the old keys
                itemIndex = bKeys[aItem.key]
                newChildren.push(bChildren[itemIndex])

            } else {
                // Remove old keyed items
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        } else {
            // Match the item in a with the next free item in b
            if (freeIndex < freeCount) {
                itemIndex = bFree[freeIndex++]
                newChildren.push(bChildren[itemIndex])
            } else {
                // There are no free items in b to match with
                // the free items in a, so the extra free nodes
                // are deleted.
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        }
    }

    var lastFreeIndex = freeIndex >= bFree.length ?
        bChildren.length :
        bFree[freeIndex]

    // Iterate through b and append any new keys
    // O(M) time
    for (var j = 0; j < bChildren.length; j++) {
        var newItem = bChildren[j]

        if (newItem.key) {
            if (!aKeys.hasOwnProperty(newItem.key)) {
                // Add any new keyed items
                // We are adding new items to the end and then sorting them
                // in place. In future we should insert new items in place.
                newChildren.push(newItem)
            }
        } else if (j >= lastFreeIndex) {
            // Add any leftover non-keyed items
            newChildren.push(newItem)
        }
    }

    var simulate = newChildren.slice()
    var simulateIndex = 0
    var removes = []
    var inserts = []
    var simulateItem

    for (var k = 0; k < bChildren.length;) {
        var wantedItem = bChildren[k]
        simulateItem = simulate[simulateIndex]

        // remove items
        while (simulateItem === null && simulate.length) {
            removes.push(remove(simulate, simulateIndex, null))
            simulateItem = simulate[simulateIndex]
        }

        if (!simulateItem || simulateItem.key !== wantedItem.key) {
            // if we need a key in this position...
            if (wantedItem.key) {
                if (simulateItem && simulateItem.key) {
                    // if an insert doesn't put this key in place, it needs to move
                    if (bKeys[simulateItem.key] !== k + 1) {
                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
                        simulateItem = simulate[simulateIndex]
                        // if the remove didn't put the wanted item in place, we need to insert it
                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
                            inserts.push({key: wantedItem.key, to: k})
                        }
                        // items are matching, so skip ahead
                        else {
                            simulateIndex++
                        }
                    }
                    else {
                        inserts.push({key: wantedItem.key, to: k})
                    }
                }
                else {
                    inserts.push({key: wantedItem.key, to: k})
                }
                k++
            }
            // a key in simulate has no matching wanted key, remove it
            else if (simulateItem && simulateItem.key) {
                removes.push(remove(simulate, simulateIndex, simulateItem.key))
            }
        }
        else {
            simulateIndex++
            k++
        }
    }

    // remove all the remaining nodes from simulate
    while(simulateIndex < simulate.length) {
        simulateItem = simulate[simulateIndex]
        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
    }

    // If the only moves we have are deletes then we can just
    // let the delete patch remove these items.
    if (removes.length === deletedItems && !inserts.length) {
        return {
            children: newChildren,
            moves: null
        }
    }

    return {
        children: newChildren,
        moves: {
            removes: removes,
            inserts: inserts
        }
    }
}

function remove(arr, index, key) {
    arr.splice(index, 1)

    return {
        from: index,
        key: key
    }
}

function keyIndex(children) {
    var keys = {}
    var free = []
    var length = children.length

    for (var i = 0; i < length; i++) {
        var child = children[i]

        if (child.key) {
            keys[child.key] = i
        } else {
            free.push(i)
        }
    }

    return {
        keys: keys,     // A hash of key name to index
        free: free,     // An array of unkeyed item indices
    }
}

function appendPatch(apply, patch) {
    if (apply) {
        if (isArray(apply)) {
            apply.push(patch)
        } else {
            apply = [apply, patch]
        }

        return apply
    } else {
        return patch
    }
}

},{"../vnode/handle-thunk":11,"../vnode/is-thunk":12,"../vnode/is-vnode":14,"../vnode/is-vtext":15,"../vnode/is-widget":16,"../vnode/vpatch":19,"./diff-props":21,"x-is-array":4}],23:[function(require,module,exports){
var VNode = require('virtual-dom/vnode/vnode');
var VText = require('virtual-dom/vnode/vtext');
var diff = require('virtual-dom/vtree/diff');
var patch = require('virtual-dom/vdom/patch');
var createElement = require('virtual-dom/create-element');
var isHook = require("virtual-dom/vnode/is-vhook");


Elm.Native.VirtualDom = {};
Elm.Native.VirtualDom.make = function(elm)
{
	elm.Native = elm.Native || {};
	elm.Native.VirtualDom = elm.Native.VirtualDom || {};
	if (elm.Native.VirtualDom.values)
	{
		return elm.Native.VirtualDom.values;
	}

	var Element = Elm.Native.Graphics.Element.make(elm);
	var Json = Elm.Native.Json.make(elm);
	var List = Elm.Native.List.make(elm);
	var Signal = Elm.Native.Signal.make(elm);
	var Utils = Elm.Native.Utils.make(elm);

	var ATTRIBUTE_KEY = 'UniqueNameThatOthersAreVeryUnlikelyToUse';

	function listToProperties(list)
	{
		var object = {};
		while (list.ctor !== '[]')
		{
			var entry = list._0;
			if (entry.key === ATTRIBUTE_KEY)
			{
				object.attributes = object.attributes || {};
				object.attributes[entry.value.attrKey] = entry.value.attrValue;
			}
			else
			{
				object[entry.key] = entry.value;
			}
			list = list._1;
		}
		return object;
	}

	function node(name)
	{
		return F2(function(propertyList, contents) {
			return makeNode(name, propertyList, contents);
		});
	}

	function makeNode(name, propertyList, contents)
	{
		var props = listToProperties(propertyList);

		var key, namespace;
		// support keys
		if (props.key !== undefined)
		{
			key = props.key;
			props.key = undefined;
		}

		// support namespace
		if (props.namespace !== undefined)
		{
			namespace = props.namespace;
			props.namespace = undefined;
		}

		// ensure that setting text of an input does not move the cursor
		var useSoftSet =
			name === 'input'
			&& props.value !== undefined
			&& !isHook(props.value);

		if (useSoftSet)
		{
			props.value = SoftSetHook(props.value);
		}

		return new VNode(name, props, List.toArray(contents), key, namespace);
	}

	function property(key, value)
	{
		return {
			key: key,
			value: value
		};
	}

	function attribute(key, value)
	{
		return {
			key: ATTRIBUTE_KEY,
			value: {
				attrKey: key,
				attrValue: value
			}
		};
	}

	function on(name, options, decoder, createMessage)
	{
		function eventHandler(event)
		{
			var value = A2(Json.runDecoderValue, decoder, event);
			if (value.ctor === 'Ok')
			{
				if (options.stopPropagation)
				{
					event.stopPropagation();
				}
				if (options.preventDefault)
				{
					event.preventDefault();
				}
				Signal.sendMessage(createMessage(value._0));
			}
		}
		return property('on' + name, eventHandler);
	}

	function SoftSetHook(value)
	{
		if (!(this instanceof SoftSetHook))
		{
			return new SoftSetHook(value);
		}

		this.value = value;
	}

	SoftSetHook.prototype.hook = function (node, propertyName)
	{
		if (node[propertyName] !== this.value)
		{
			node[propertyName] = this.value;
		}
	};

	function text(string)
	{
		return new VText(string);
	}

	function ElementWidget(element)
	{
		this.element = element;
	}

	ElementWidget.prototype.type = "Widget";

	ElementWidget.prototype.init = function init()
	{
		return Element.render(this.element);
	};

	ElementWidget.prototype.update = function update(previous, node)
	{
		return Element.update(node, previous.element, this.element);
	};

	function fromElement(element)
	{
		return new ElementWidget(element);
	}

	function toElement(width, height, html)
	{
		return A3(Element.newElement, width, height, {
			ctor: 'Custom',
			type: 'evancz/elm-html',
			render: render,
			update: update,
			model: html
		});
	}

	function render(model)
	{
		var element = Element.createNode('div');
		element.appendChild(createElement(model));
		return element;
	}

	function update(node, oldModel, newModel)
	{
		updateAndReplace(node.firstChild, oldModel, newModel);
		return node;
	}

	function updateAndReplace(node, oldModel, newModel)
	{
		var patches = diff(oldModel, newModel);
		var newNode = patch(node, patches);
		return newNode;
	}

	function lazyRef(fn, a)
	{
		function thunk()
		{
			return fn(a);
		}
		return new Thunk(fn, [a], thunk);
	}

	function lazyRef2(fn, a, b)
	{
		function thunk()
		{
			return A2(fn, a, b);
		}
		return new Thunk(fn, [a,b], thunk);
	}

	function lazyRef3(fn, a, b, c)
	{
		function thunk()
		{
			return A3(fn, a, b, c);
		}
		return new Thunk(fn, [a,b,c], thunk);
	}

	function Thunk(fn, args, thunk)
	{
		this.fn = fn;
		this.args = args;
		this.vnode = null;
		this.key = undefined;
		this.thunk = thunk;
	}

	Thunk.prototype.type = "Thunk";
	Thunk.prototype.update = updateThunk;
	Thunk.prototype.render = renderThunk;

	function shouldUpdate(current, previous)
	{
		if (current.fn !== previous.fn)
		{
			return true;
		}

		// if it's the same function, we know the number of args must match
		var cargs = current.args;
		var pargs = previous.args;

		for (var i = cargs.length; i--; )
		{
			if (cargs[i] !== pargs[i])
			{
				return true;
			}
		}

		return false;
	}

	function updateThunk(previous, domNode)
	{
		if (!shouldUpdate(this, previous))
		{
			this.vnode = previous.vnode;
			return;
		}

		if (!this.vnode)
		{
			this.vnode = this.thunk();
		}

		var patches = diff(previous.vnode, this.vnode);
		patch(domNode, patches);
	}

	function renderThunk()
	{
		return this.thunk();
	}

	return Elm.Native.VirtualDom.values = {
		node: node,
		text: text,
		on: F4(on),

		property: F2(property),
		attribute: F2(attribute),

		lazy: F2(lazyRef),
		lazy2: F3(lazyRef2),
		lazy3: F4(lazyRef3),

		toElement: F3(toElement),
		fromElement: fromElement,

		render: createElement,
		updateAndReplace: updateAndReplace
	};
};

},{"virtual-dom/create-element":1,"virtual-dom/vdom/patch":9,"virtual-dom/vnode/is-vhook":13,"virtual-dom/vnode/vnode":18,"virtual-dom/vnode/vtext":20,"virtual-dom/vtree/diff":22}],24:[function(require,module,exports){

},{}]},{},[23]);

Elm.Result = Elm.Result || {};
Elm.Result.make = function (_elm) {
   "use strict";
   _elm.Result = _elm.Result || {};
   if (_elm.Result.values)
   return _elm.Result.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Result",
   $Maybe = Elm.Maybe.make(_elm);
   var toMaybe = function (result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return $Maybe.Nothing;
            case "Ok":
            return $Maybe.Just(result._0);}
         _U.badCase($moduleName,
         "between lines 164 and 166");
      }();
   };
   var Err = function (a) {
      return {ctor: "Err",_0: a};
   };
   var andThen = F2(function (result,
   callback) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return Err(result._0);
            case "Ok":
            return callback(result._0);}
         _U.badCase($moduleName,
         "between lines 126 and 128");
      }();
   });
   var Ok = function (a) {
      return {ctor: "Ok",_0: a};
   };
   var map = F2(function (func,
   ra) {
      return function () {
         switch (ra.ctor)
         {case "Err": return Err(ra._0);
            case "Ok":
            return Ok(func(ra._0));}
         _U.badCase($moduleName,
         "between lines 41 and 43");
      }();
   });
   var map2 = F3(function (func,
   ra,
   rb) {
      return function () {
         var _v9 = {ctor: "_Tuple2"
                   ,_0: ra
                   ,_1: rb};
         switch (_v9.ctor)
         {case "_Tuple2":
            switch (_v9._0.ctor)
              {case "Err":
                 return Err(_v9._0._0);
                 case "Ok": switch (_v9._1.ctor)
                   {case "Ok": return Ok(A2(func,
                        _v9._0._0,
                        _v9._1._0));}
                   break;}
              switch (_v9._1.ctor)
              {case "Err":
                 return Err(_v9._1._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 55 and 58");
      }();
   });
   var map3 = F4(function (func,
   ra,
   rb,
   rc) {
      return function () {
         var _v16 = {ctor: "_Tuple3"
                    ,_0: ra
                    ,_1: rb
                    ,_2: rc};
         switch (_v16.ctor)
         {case "_Tuple3":
            switch (_v16._0.ctor)
              {case "Err":
                 return Err(_v16._0._0);
                 case "Ok": switch (_v16._1.ctor)
                   {case "Ok":
                      switch (_v16._2.ctor)
                        {case "Ok": return Ok(A3(func,
                             _v16._0._0,
                             _v16._1._0,
                             _v16._2._0));}
                        break;}
                   break;}
              switch (_v16._1.ctor)
              {case "Err":
                 return Err(_v16._1._0);}
              switch (_v16._2.ctor)
              {case "Err":
                 return Err(_v16._2._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 63 and 67");
      }();
   });
   var map4 = F5(function (func,
   ra,
   rb,
   rc,
   rd) {
      return function () {
         var _v26 = {ctor: "_Tuple4"
                    ,_0: ra
                    ,_1: rb
                    ,_2: rc
                    ,_3: rd};
         switch (_v26.ctor)
         {case "_Tuple4":
            switch (_v26._0.ctor)
              {case "Err":
                 return Err(_v26._0._0);
                 case "Ok": switch (_v26._1.ctor)
                   {case "Ok":
                      switch (_v26._2.ctor)
                        {case "Ok":
                           switch (_v26._3.ctor)
                             {case "Ok": return Ok(A4(func,
                                  _v26._0._0,
                                  _v26._1._0,
                                  _v26._2._0,
                                  _v26._3._0));}
                             break;}
                        break;}
                   break;}
              switch (_v26._1.ctor)
              {case "Err":
                 return Err(_v26._1._0);}
              switch (_v26._2.ctor)
              {case "Err":
                 return Err(_v26._2._0);}
              switch (_v26._3.ctor)
              {case "Err":
                 return Err(_v26._3._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 72 and 77");
      }();
   });
   var map5 = F6(function (func,
   ra,
   rb,
   rc,
   rd,
   re) {
      return function () {
         var _v39 = {ctor: "_Tuple5"
                    ,_0: ra
                    ,_1: rb
                    ,_2: rc
                    ,_3: rd
                    ,_4: re};
         switch (_v39.ctor)
         {case "_Tuple5":
            switch (_v39._0.ctor)
              {case "Err":
                 return Err(_v39._0._0);
                 case "Ok": switch (_v39._1.ctor)
                   {case "Ok":
                      switch (_v39._2.ctor)
                        {case "Ok":
                           switch (_v39._3.ctor)
                             {case "Ok":
                                switch (_v39._4.ctor)
                                  {case "Ok": return Ok(A5(func,
                                       _v39._0._0,
                                       _v39._1._0,
                                       _v39._2._0,
                                       _v39._3._0,
                                       _v39._4._0));}
                                  break;}
                             break;}
                        break;}
                   break;}
              switch (_v39._1.ctor)
              {case "Err":
                 return Err(_v39._1._0);}
              switch (_v39._2.ctor)
              {case "Err":
                 return Err(_v39._2._0);}
              switch (_v39._3.ctor)
              {case "Err":
                 return Err(_v39._3._0);}
              switch (_v39._4.ctor)
              {case "Err":
                 return Err(_v39._4._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 82 and 88");
      }();
   });
   var formatError = F2(function (f,
   result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return Err(f(result._0));
            case "Ok":
            return Ok(result._0);}
         _U.badCase($moduleName,
         "between lines 148 and 150");
      }();
   });
   var fromMaybe = F2(function (err,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return Ok(maybe._0);
            case "Nothing":
            return Err(err);}
         _U.badCase($moduleName,
         "between lines 180 and 182");
      }();
   });
   _elm.Result.values = {_op: _op
                        ,map: map
                        ,map2: map2
                        ,map3: map3
                        ,map4: map4
                        ,map5: map5
                        ,andThen: andThen
                        ,toMaybe: toMaybe
                        ,fromMaybe: fromMaybe
                        ,formatError: formatError
                        ,Ok: Ok
                        ,Err: Err};
   return _elm.Result.values;
};
Elm.Signal = Elm.Signal || {};
Elm.Signal.make = function (_elm) {
   "use strict";
   _elm.Signal = _elm.Signal || {};
   if (_elm.Signal.values)
   return _elm.Signal.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Signal",
   $Basics = Elm.Basics.make(_elm),
   $Debug = Elm.Debug.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Signal = Elm.Native.Signal.make(_elm),
   $Task = Elm.Task.make(_elm);
   var send = F2(function (_v0,
   value) {
      return function () {
         switch (_v0.ctor)
         {case "Address":
            return A2($Task.onError,
              _v0._0(value),
              function (_v3) {
                 return function () {
                    return $Task.succeed({ctor: "_Tuple0"});
                 }();
              });}
         _U.badCase($moduleName,
         "between lines 370 and 371");
      }();
   });
   var Message = function (a) {
      return {ctor: "Message"
             ,_0: a};
   };
   var message = F2(function (_v5,
   value) {
      return function () {
         switch (_v5.ctor)
         {case "Address":
            return Message(_v5._0(value));}
         _U.badCase($moduleName,
         "on line 352, column 5 to 24");
      }();
   });
   var mailbox = $Native$Signal.mailbox;
   var Address = function (a) {
      return {ctor: "Address"
             ,_0: a};
   };
   var forwardTo = F2(function (_v8,
   f) {
      return function () {
         switch (_v8.ctor)
         {case "Address":
            return Address(function (x) {
                 return _v8._0(f(x));
              });}
         _U.badCase($moduleName,
         "on line 339, column 5 to 29");
      }();
   });
   var Mailbox = F2(function (a,
   b) {
      return {_: {}
             ,address: a
             ,signal: b};
   });
   var sampleOn = $Native$Signal.sampleOn;
   var dropRepeats = $Native$Signal.dropRepeats;
   var filterMap = $Native$Signal.filterMap;
   var filter = F3(function (isOk,
   base,
   signal) {
      return A3(filterMap,
      function (value) {
         return isOk(value) ? $Maybe.Just(value) : $Maybe.Nothing;
      },
      base,
      signal);
   });
   var merge = F2(function (left,
   right) {
      return A3($Native$Signal.genericMerge,
      $Basics.always,
      left,
      right);
   });
   var mergeMany = function (signalList) {
      return function () {
         var _v11 = $List.reverse(signalList);
         switch (_v11.ctor)
         {case "::":
            return A3($List.foldl,
              merge,
              _v11._0,
              _v11._1);
            case "[]":
            return $Debug.crash("mergeMany was given an empty list!");}
         _U.badCase($moduleName,
         "between lines 177 and 182");
      }();
   };
   var foldp = $Native$Signal.foldp;
   var map5 = $Native$Signal.map5;
   var map4 = $Native$Signal.map4;
   var map3 = $Native$Signal.map3;
   var map2 = $Native$Signal.map2;
   _op["~"] = F2(function (funcs,
   args) {
      return A3(map2,
      F2(function (f,v) {
         return f(v);
      }),
      funcs,
      args);
   });
   var map = $Native$Signal.map;
   _op["<~"] = map;
   var constant = $Native$Signal.constant;
   var Signal = {ctor: "Signal"};
   _elm.Signal.values = {_op: _op
                        ,merge: merge
                        ,mergeMany: mergeMany
                        ,map: map
                        ,map2: map2
                        ,map3: map3
                        ,map4: map4
                        ,map5: map5
                        ,constant: constant
                        ,dropRepeats: dropRepeats
                        ,filter: filter
                        ,filterMap: filterMap
                        ,sampleOn: sampleOn
                        ,foldp: foldp
                        ,mailbox: mailbox
                        ,send: send
                        ,message: message
                        ,forwardTo: forwardTo
                        ,Mailbox: Mailbox};
   return _elm.Signal.values;
};
Elm.StartApp = Elm.StartApp || {};
Elm.StartApp.make = function (_elm) {
   "use strict";
   _elm.StartApp = _elm.StartApp || {};
   if (_elm.StartApp.values)
   return _elm.StartApp.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "StartApp",
   $Basics = Elm.Basics.make(_elm),
   $Effects = Elm.Effects.make(_elm),
   $Html = Elm.Html.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Task = Elm.Task.make(_elm);
   var start = function (config) {
      return function () {
         var updateStep = F2(function (action,
         _v0) {
            return function () {
               switch (_v0.ctor)
               {case "_Tuple2":
                  return function () {
                       var $ = A2(config.update,
                       action,
                       _v0._0),
                       newModel = $._0,
                       additionalEffects = $._1;
                       return {ctor: "_Tuple2"
                              ,_0: newModel
                              ,_1: $Effects.batch(_L.fromArray([_v0._1
                                                               ,additionalEffects]))};
                    }();}
               _U.badCase($moduleName,
               "between lines 94 and 97");
            }();
         });
         var update = F2(function (actions,
         _v4) {
            return function () {
               switch (_v4.ctor)
               {case "_Tuple2":
                  return A3($List.foldl,
                    updateStep,
                    {ctor: "_Tuple2"
                    ,_0: _v4._0
                    ,_1: $Effects.none},
                    actions);}
               _U.badCase($moduleName,
               "on line 101, column 13 to 64");
            }();
         });
         var messages = $Signal.mailbox(_L.fromArray([]));
         var singleton = function (action) {
            return _L.fromArray([action]);
         };
         var address = A2($Signal.forwardTo,
         messages.address,
         singleton);
         var inputs = $Signal.mergeMany(A2($List._op["::"],
         messages.signal,
         A2($List.map,
         $Signal.map(singleton),
         config.inputs)));
         var effectsAndModel = A3($Signal.foldp,
         update,
         config.init,
         inputs);
         var model = A2($Signal.map,
         $Basics.fst,
         effectsAndModel);
         return {_: {}
                ,html: A2($Signal.map,
                config.view(address),
                model)
                ,model: model
                ,tasks: A2($Signal.map,
                function ($) {
                   return $Effects.toTask(messages.address)($Basics.snd($));
                },
                effectsAndModel)};
      }();
   };
   var App = F3(function (a,b,c) {
      return {_: {}
             ,html: a
             ,model: b
             ,tasks: c};
   });
   var Config = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,init: a
             ,inputs: d
             ,update: b
             ,view: c};
   });
   _elm.StartApp.values = {_op: _op
                          ,start: start
                          ,Config: Config
                          ,App: App};
   return _elm.StartApp.values;
};
Elm.String = Elm.String || {};
Elm.String.make = function (_elm) {
   "use strict";
   _elm.String = _elm.String || {};
   if (_elm.String.values)
   return _elm.String.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "String",
   $Maybe = Elm.Maybe.make(_elm),
   $Native$String = Elm.Native.String.make(_elm),
   $Result = Elm.Result.make(_elm);
   var fromList = $Native$String.fromList;
   var toList = $Native$String.toList;
   var toFloat = $Native$String.toFloat;
   var toInt = $Native$String.toInt;
   var indices = $Native$String.indexes;
   var indexes = $Native$String.indexes;
   var endsWith = $Native$String.endsWith;
   var startsWith = $Native$String.startsWith;
   var contains = $Native$String.contains;
   var all = $Native$String.all;
   var any = $Native$String.any;
   var toLower = $Native$String.toLower;
   var toUpper = $Native$String.toUpper;
   var lines = $Native$String.lines;
   var words = $Native$String.words;
   var trimRight = $Native$String.trimRight;
   var trimLeft = $Native$String.trimLeft;
   var trim = $Native$String.trim;
   var padRight = $Native$String.padRight;
   var padLeft = $Native$String.padLeft;
   var pad = $Native$String.pad;
   var dropRight = $Native$String.dropRight;
   var dropLeft = $Native$String.dropLeft;
   var right = $Native$String.right;
   var left = $Native$String.left;
   var slice = $Native$String.slice;
   var repeat = $Native$String.repeat;
   var join = $Native$String.join;
   var split = $Native$String.split;
   var foldr = $Native$String.foldr;
   var foldl = $Native$String.foldl;
   var reverse = $Native$String.reverse;
   var filter = $Native$String.filter;
   var map = $Native$String.map;
   var length = $Native$String.length;
   var concat = $Native$String.concat;
   var append = $Native$String.append;
   var uncons = $Native$String.uncons;
   var cons = $Native$String.cons;
   var fromChar = function ($char) {
      return A2(cons,$char,"");
   };
   var isEmpty = $Native$String.isEmpty;
   _elm.String.values = {_op: _op
                        ,isEmpty: isEmpty
                        ,length: length
                        ,reverse: reverse
                        ,repeat: repeat
                        ,cons: cons
                        ,uncons: uncons
                        ,fromChar: fromChar
                        ,append: append
                        ,concat: concat
                        ,split: split
                        ,join: join
                        ,words: words
                        ,lines: lines
                        ,slice: slice
                        ,left: left
                        ,right: right
                        ,dropLeft: dropLeft
                        ,dropRight: dropRight
                        ,contains: contains
                        ,startsWith: startsWith
                        ,endsWith: endsWith
                        ,indexes: indexes
                        ,indices: indices
                        ,toInt: toInt
                        ,toFloat: toFloat
                        ,toList: toList
                        ,fromList: fromList
                        ,toUpper: toUpper
                        ,toLower: toLower
                        ,pad: pad
                        ,padLeft: padLeft
                        ,padRight: padRight
                        ,trim: trim
                        ,trimLeft: trimLeft
                        ,trimRight: trimRight
                        ,map: map
                        ,filter: filter
                        ,foldl: foldl
                        ,foldr: foldr
                        ,any: any
                        ,all: all};
   return _elm.String.values;
};
Elm.Task = Elm.Task || {};
Elm.Task.make = function (_elm) {
   "use strict";
   _elm.Task = _elm.Task || {};
   if (_elm.Task.values)
   return _elm.Task.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Task",
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Task = Elm.Native.Task.make(_elm),
   $Result = Elm.Result.make(_elm);
   var sleep = $Native$Task.sleep;
   var spawn = $Native$Task.spawn;
   var ThreadID = function (a) {
      return {ctor: "ThreadID"
             ,_0: a};
   };
   var onError = $Native$Task.catch_;
   var andThen = $Native$Task.andThen;
   var fail = $Native$Task.fail;
   var mapError = F2(function (f,
   promise) {
      return A2(onError,
      promise,
      function (err) {
         return fail(f(err));
      });
   });
   var succeed = $Native$Task.succeed;
   var map = F2(function (func,
   promiseA) {
      return A2(andThen,
      promiseA,
      function (a) {
         return succeed(func(a));
      });
   });
   var map2 = F3(function (func,
   promiseA,
   promiseB) {
      return A2(andThen,
      promiseA,
      function (a) {
         return A2(andThen,
         promiseB,
         function (b) {
            return succeed(A2(func,a,b));
         });
      });
   });
   var map3 = F4(function (func,
   promiseA,
   promiseB,
   promiseC) {
      return A2(andThen,
      promiseA,
      function (a) {
         return A2(andThen,
         promiseB,
         function (b) {
            return A2(andThen,
            promiseC,
            function (c) {
               return succeed(A3(func,
               a,
               b,
               c));
            });
         });
      });
   });
   var map4 = F5(function (func,
   promiseA,
   promiseB,
   promiseC,
   promiseD) {
      return A2(andThen,
      promiseA,
      function (a) {
         return A2(andThen,
         promiseB,
         function (b) {
            return A2(andThen,
            promiseC,
            function (c) {
               return A2(andThen,
               promiseD,
               function (d) {
                  return succeed(A4(func,
                  a,
                  b,
                  c,
                  d));
               });
            });
         });
      });
   });
   var map5 = F6(function (func,
   promiseA,
   promiseB,
   promiseC,
   promiseD,
   promiseE) {
      return A2(andThen,
      promiseA,
      function (a) {
         return A2(andThen,
         promiseB,
         function (b) {
            return A2(andThen,
            promiseC,
            function (c) {
               return A2(andThen,
               promiseD,
               function (d) {
                  return A2(andThen,
                  promiseE,
                  function (e) {
                     return succeed(A5(func,
                     a,
                     b,
                     c,
                     d,
                     e));
                  });
               });
            });
         });
      });
   });
   var andMap = F2(function (promiseFunc,
   promiseValue) {
      return A2(andThen,
      promiseFunc,
      function (func) {
         return A2(andThen,
         promiseValue,
         function (value) {
            return succeed(func(value));
         });
      });
   });
   var sequence = function (promises) {
      return function () {
         switch (promises.ctor)
         {case "::": return A3(map2,
              F2(function (x,y) {
                 return A2($List._op["::"],
                 x,
                 y);
              }),
              promises._0,
              sequence(promises._1));
            case "[]":
            return succeed(_L.fromArray([]));}
         _U.badCase($moduleName,
         "between lines 101 and 106");
      }();
   };
   var toMaybe = function (task) {
      return A2(onError,
      A2(map,$Maybe.Just,task),
      function (_v3) {
         return function () {
            return succeed($Maybe.Nothing);
         }();
      });
   };
   var fromMaybe = F2(function ($default,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return succeed(maybe._0);
            case "Nothing":
            return fail($default);}
         _U.badCase($moduleName,
         "between lines 139 and 141");
      }();
   });
   var toResult = function (task) {
      return A2(onError,
      A2(map,$Result.Ok,task),
      function (msg) {
         return succeed($Result.Err(msg));
      });
   };
   var fromResult = function (result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return fail(result._0);
            case "Ok":
            return succeed(result._0);}
         _U.badCase($moduleName,
         "between lines 151 and 153");
      }();
   };
   var Task = {ctor: "Task"};
   _elm.Task.values = {_op: _op
                      ,succeed: succeed
                      ,fail: fail
                      ,map: map
                      ,map2: map2
                      ,map3: map3
                      ,map4: map4
                      ,map5: map5
                      ,andMap: andMap
                      ,sequence: sequence
                      ,andThen: andThen
                      ,onError: onError
                      ,mapError: mapError
                      ,toMaybe: toMaybe
                      ,fromMaybe: fromMaybe
                      ,toResult: toResult
                      ,fromResult: fromResult
                      ,spawn: spawn
                      ,sleep: sleep};
   return _elm.Task.values;
};
Elm.Text = Elm.Text || {};
Elm.Text.make = function (_elm) {
   "use strict";
   _elm.Text = _elm.Text || {};
   if (_elm.Text.values)
   return _elm.Text.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Text",
   $Color = Elm.Color.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Text = Elm.Native.Text.make(_elm);
   var line = $Native$Text.line;
   var italic = $Native$Text.italic;
   var bold = $Native$Text.bold;
   var color = $Native$Text.color;
   var height = $Native$Text.height;
   var link = $Native$Text.link;
   var monospace = $Native$Text.monospace;
   var typeface = $Native$Text.typeface;
   var style = $Native$Text.style;
   var append = $Native$Text.append;
   var fromString = $Native$Text.fromString;
   var empty = fromString("");
   var concat = function (texts) {
      return A3($List.foldr,
      append,
      empty,
      texts);
   };
   var join = F2(function (seperator,
   texts) {
      return concat(A2($List.intersperse,
      seperator,
      texts));
   });
   var defaultStyle = {_: {}
                      ,bold: false
                      ,color: $Color.black
                      ,height: $Maybe.Nothing
                      ,italic: false
                      ,line: $Maybe.Nothing
                      ,typeface: _L.fromArray([])};
   var Style = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,bold: d
             ,color: c
             ,height: b
             ,italic: e
             ,line: f
             ,typeface: a};
   });
   var Through = {ctor: "Through"};
   var Over = {ctor: "Over"};
   var Under = {ctor: "Under"};
   var Text = {ctor: "Text"};
   _elm.Text.values = {_op: _op
                      ,fromString: fromString
                      ,empty: empty
                      ,append: append
                      ,concat: concat
                      ,join: join
                      ,link: link
                      ,style: style
                      ,defaultStyle: defaultStyle
                      ,typeface: typeface
                      ,monospace: monospace
                      ,height: height
                      ,color: color
                      ,bold: bold
                      ,italic: italic
                      ,line: line
                      ,Style: Style
                      ,Under: Under
                      ,Over: Over
                      ,Through: Through};
   return _elm.Text.values;
};
Elm.Time = Elm.Time || {};
Elm.Time.make = function (_elm) {
   "use strict";
   _elm.Time = _elm.Time || {};
   if (_elm.Time.values)
   return _elm.Time.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Time",
   $Basics = Elm.Basics.make(_elm),
   $Native$Signal = Elm.Native.Signal.make(_elm),
   $Native$Time = Elm.Native.Time.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var delay = $Native$Signal.delay;
   var since = F2(function (time,
   signal) {
      return function () {
         var stop = A2($Signal.map,
         $Basics.always(-1),
         A2(delay,time,signal));
         var start = A2($Signal.map,
         $Basics.always(1),
         signal);
         var delaydiff = A3($Signal.foldp,
         F2(function (x,y) {
            return x + y;
         }),
         0,
         A2($Signal.merge,start,stop));
         return A2($Signal.map,
         F2(function (x,y) {
            return !_U.eq(x,y);
         })(0),
         delaydiff);
      }();
   });
   var timestamp = $Native$Signal.timestamp;
   var every = $Native$Time.every;
   var fpsWhen = $Native$Time.fpsWhen;
   var fps = function (targetFrames) {
      return A2(fpsWhen,
      targetFrames,
      $Signal.constant(true));
   };
   var inMilliseconds = function (t) {
      return t;
   };
   var millisecond = 1;
   var second = 1000 * millisecond;
   var minute = 60 * second;
   var hour = 60 * minute;
   var inHours = function (t) {
      return t / hour;
   };
   var inMinutes = function (t) {
      return t / minute;
   };
   var inSeconds = function (t) {
      return t / second;
   };
   _elm.Time.values = {_op: _op
                      ,millisecond: millisecond
                      ,second: second
                      ,minute: minute
                      ,hour: hour
                      ,inMilliseconds: inMilliseconds
                      ,inSeconds: inSeconds
                      ,inMinutes: inMinutes
                      ,inHours: inHours
                      ,fps: fps
                      ,fpsWhen: fpsWhen
                      ,every: every
                      ,timestamp: timestamp
                      ,delay: delay
                      ,since: since};
   return _elm.Time.values;
};
Elm.TodoMVC = Elm.TodoMVC || {};
Elm.TodoMVC.make = function (_elm) {
   "use strict";
   _elm.TodoMVC = _elm.TodoMVC || {};
   if (_elm.TodoMVC.values)
   return _elm.TodoMVC.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "TodoMVC",
   $Basics = Elm.Basics.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Effects = Elm.Effects.make(_elm),
   $ElmFire = Elm.ElmFire.make(_elm),
   $Html = Elm.Html.make(_elm),
   $Html$Attributes = Elm.Html.Attributes.make(_elm),
   $Html$Events = Elm.Html.Events.make(_elm),
   $Html$Lazy = Elm.Html.Lazy.make(_elm),
   $Json$Decode = Elm.Json.Decode.make(_elm),
   $Json$Encode = Elm.Json.Encode.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $StartApp = Elm.StartApp.make(_elm),
   $Task = Elm.Task.make(_elm);
   var focus = $Signal.mailbox("");
   var runFocus = Elm.Native.Port.make(_elm).outboundSignal("runFocus",
   function (v) {
      return v;
   },
   A2($Signal.map,
   F2(function (x,y) {
      return A2($Basics._op["++"],
      x,
      y);
   })("#todo-"),
   focus.signal));
   var showBlock = function (visible) {
      return $Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                  ,_0: "display"
                                                  ,_1: visible ? "block" : "none"}]));
   };
   var onEnter = F2(function (address,
   value) {
      return function () {
         var is13 = function (code) {
            return _U.eq(code,
            13) ? $Result.Ok({ctor: "_Tuple0"}) : $Result.Err("not the right key code");
         };
         return A3($Html$Events.on,
         "keydown",
         A2($Json$Decode.customDecoder,
         $Html$Events.keyCode,
         is13),
         function (_v0) {
            return function () {
               return A2($Signal.message,
               address,
               value);
            }();
         });
      }();
   });
   var viewInfoFooter = function (guiAddress) {
      return A2($Html.footer,
      _L.fromArray([$Html$Attributes.$class("info")]),
      _L.fromArray([A2($Html.p,
                   _L.fromArray([]),
                   _L.fromArray([$Html.text("Double-click to edit a todo")]))
                   ,A2($Html.p,
                   _L.fromArray([]),
                   _L.fromArray([$Html.text("Created by ")
                                ,A2($Html.a,
                                _L.fromArray([$Html$Attributes.href("https://github.com/evancz")]),
                                _L.fromArray([$Html.text("Evan Czaplicki")]))
                                ,$Html.text(" and ")
                                ,A2($Html.a,
                                _L.fromArray([$Html$Attributes.href("https://github.com/ThomasWeiser")]),
                                _L.fromArray([$Html.text("Thomas Weiser")]))]))
                   ,A2($Html.p,
                   _L.fromArray([]),
                   _L.fromArray([$Html.text("Part of ")
                                ,A2($Html.a,
                                _L.fromArray([$Html$Attributes.href("http://todomvc.com")]),
                                _L.fromArray([$Html.text("TodoMVC")]))]))
                   ,A2($Html.p,
                   _L.fromArray([]),
                   _L.fromArray([A2($Html.a,
                   _L.fromArray([$Html$Attributes.href("https://github.com/ThomasWeiser/todomvc-elmfire")]),
                   _L.fromArray([$Html.text("Source code at GitHub")]))]))]));
   };
   var augment = function (model) {
      return function () {
         var itemList = $Dict.toList(model.items);
         var $ = A3($List.foldl,
         F2(function (_v2,_v3) {
            return function () {
               switch (_v3.ctor)
               {case "_Tuple2":
                  return function () {
                       switch (_v2.ctor)
                       {case "_Tuple2":
                          return {ctor: "_Tuple2"
                                 ,_0: _v3._0 + 1
                                 ,_1: _v3._1 + (_v2._1.completed ? 1 : 0)};}
                       _U.badCase($moduleName,
                       "on line 367, column 12 to 66");
                    }();}
               _U.badCase($moduleName,
               "on line 367, column 12 to 66");
            }();
         }),
         {ctor: "_Tuple2",_0: 0,_1: 0},
         itemList),
         itemsTotal = $._0,
         itemsCompleted = $._1;
         return {_: {}
                ,count: {_: {}
                        ,completed: itemsCompleted
                        ,total: itemsTotal}
                ,itemList: itemList};
      }();
   };
   var AugModel = F2(function (a,
   b) {
      return {_: {}
             ,count: b
             ,itemList: a};
   });
   var NoEffectEvent = {ctor: "NoEffectEvent"};
   var effectInput = $Signal.mailbox(NoEffectEvent);
   var Removed = function (a) {
      return {ctor: "Removed"
             ,_0: a};
   };
   var Changed = function (a) {
      return {ctor: "Changed"
             ,_0: a};
   };
   var Added = function (a) {
      return {ctor: "Added",_0: a};
   };
   var NoServerEvent = {ctor: "NoServerEvent"};
   var serverInput = $Signal.mailbox(NoServerEvent);
   var SetFilter = function (a) {
      return {ctor: "SetFilter"
             ,_0: a};
   };
   var EditAddField = function (a) {
      return {ctor: "EditAddField"
             ,_0: a};
   };
   var EditExistingItem = function (a) {
      return {ctor: "EditExistingItem"
             ,_0: a};
   };
   var CheckAllItems = function (a) {
      return {ctor: "CheckAllItems"
             ,_0: a};
   };
   var CheckItem = F2(function (a,
   b) {
      return {ctor: "CheckItem"
             ,_0: a
             ,_1: b};
   });
   var DeleteCompletedItems = {ctor: "DeleteCompletedItems"};
   var DeleteItem = function (a) {
      return {ctor: "DeleteItem"
             ,_0: a};
   };
   var UpdateItem = function (a) {
      return {ctor: "UpdateItem"
             ,_0: a};
   };
   var viewItem = F3(function (guiAddress,
   editingItem,
   _v10) {
      return function () {
         switch (_v10.ctor)
         {case "_Tuple2":
            return function () {
                 var isEditing = function () {
                    switch (editingItem.ctor)
                    {case "Just":
                       switch (editingItem._0.ctor)
                         {case "_Tuple2":
                            return _U.eq(_v10._0,
                              editingItem._0._0) ? {ctor: "_Tuple2"
                                                   ,_0: true
                                                   ,_1: editingItem._0._1} : {ctor: "_Tuple2"
                                                                             ,_0: false
                                                                             ,_1: ""};}
                         break;}
                    return {ctor: "_Tuple2"
                           ,_0: false
                           ,_1: ""};
                 }();
                 return A2($Html.li,
                 _L.fromArray([$Html$Attributes.classList(_L.fromArray([{ctor: "_Tuple2"
                                                                        ,_0: "completed"
                                                                        ,_1: _v10._1.completed}
                                                                       ,{ctor: "_Tuple2"
                                                                        ,_0: "editing"
                                                                        ,_1: $Basics.fst(isEditing)}]))
                              ,$Html$Attributes.key(_v10._0)]),
                 _L.fromArray([A2($Html.div,
                              _L.fromArray([$Html$Attributes.$class("view")]),
                              _L.fromArray([A2($Html.input,
                                           _L.fromArray([$Html$Attributes.$class("toggle")
                                                        ,$Html$Attributes.type$("checkbox")
                                                        ,$Html$Attributes.checked(_v10._1.completed)
                                                        ,A2($Html$Events.onClick,
                                                        guiAddress,
                                                        A2(CheckItem,
                                                        _v10._0,
                                                        $Basics.not(_v10._1.completed)))]),
                                           _L.fromArray([]))
                                           ,A2($Html.label,
                                           _L.fromArray([A2($Html$Events.onDoubleClick,
                                           guiAddress,
                                           EditExistingItem($Maybe.Just({ctor: "_Tuple2"
                                                                        ,_0: _v10._0
                                                                        ,_1: _v10._1.title})))]),
                                           _L.fromArray([$Html.text(_v10._1.title)]))
                                           ,A2($Html.button,
                                           _L.fromArray([$Html$Attributes.$class("destroy")
                                                        ,A2($Html$Events.onClick,
                                                        guiAddress,
                                                        DeleteItem(_v10._0))]),
                                           _L.fromArray([]))]))
                              ,A2($Html.input,
                              _L.fromArray([$Html$Attributes.$class("edit")
                                           ,$Html$Attributes.id(A2($Basics._op["++"],
                                           "todo-",
                                           _v10._0))
                                           ,$Html$Attributes.value($Basics.fst(isEditing) ? $Basics.snd(isEditing) : "")
                                           ,A3($Html$Events.on,
                                           "input",
                                           $Html$Events.targetValue,
                                           function (val) {
                                              return A2($Signal.message,
                                              guiAddress,
                                              EditExistingItem($Maybe.Just({ctor: "_Tuple2"
                                                                           ,_0: _v10._0
                                                                           ,_1: val})));
                                           })
                                           ,A2($Html$Events.onBlur,
                                           guiAddress,
                                           UpdateItem(_v10._0))
                                           ,A2(onEnter,
                                           guiAddress,
                                           UpdateItem(_v10._0))]),
                              _L.fromArray([]))]));
              }();}
         _U.badCase($moduleName,
         "between lines 443 and 484");
      }();
   });
   var viewItemList = F3(function (guiAddress,
   model,
   augModel) {
      return function () {
         var isVisibleItem = function (_v18) {
            return function () {
               switch (_v18.ctor)
               {case "_Tuple2":
                  return function () {
                       var _v22 = model.filter;
                       switch (_v22.ctor)
                       {case "Active":
                          return $Basics.not(_v18._1.completed);
                          case "All": return true;
                          case "Completed":
                          return _v18._1.completed;}
                       _U.badCase($moduleName,
                       "between lines 416 and 420");
                    }();}
               _U.badCase($moduleName,
               "between lines 416 and 420");
            }();
         };
         var visibleItemList = A2($List.filter,
         isVisibleItem,
         augModel.itemList);
         var allCompleted = _U.eq(augModel.count.total,
         augModel.count.completed);
         var visible = true;
         return A2($Html.section,
         _L.fromArray([$Html$Attributes.$class("main")
                      ,showBlock($Basics.not($List.isEmpty(visibleItemList)))]),
         _L.fromArray([A2($Html.input,
                      _L.fromArray([$Html$Attributes.id("toggle-all")
                                   ,$Html$Attributes.$class("toggle-all")
                                   ,$Html$Attributes.type$("checkbox")
                                   ,$Html$Attributes.checked(allCompleted)
                                   ,A2($Html$Events.onClick,
                                   guiAddress,
                                   CheckAllItems($Basics.not(allCompleted)))]),
                      _L.fromArray([]))
                      ,A2($Html.label,
                      _L.fromArray([$Html$Attributes.$for("toggle-all")]),
                      _L.fromArray([$Html.text("Mark all as complete")]))
                      ,A2($Html.ul,
                      _L.fromArray([$Html$Attributes.$class("todo-list")]),
                      A2($List.map,
                      A2(viewItem,
                      guiAddress,
                      model.editingItem),
                      visibleItemList))]));
      }();
   });
   var AddItem = {ctor: "AddItem"};
   var viewEntry = F2(function (guiAddress,
   content) {
      return A2($Html.header,
      _L.fromArray([$Html$Attributes.$class("header")]),
      _L.fromArray([A2($Html.h1,
                   _L.fromArray([]),
                   _L.fromArray([$Html.text("todos")]))
                   ,A2($Html.input,
                   _L.fromArray([$Html$Attributes.$class("new-todo")
                                ,$Html$Attributes.placeholder("What needs to be done?")
                                ,$Html$Attributes.autofocus(true)
                                ,$Html$Attributes.value(content)
                                ,A3($Html$Events.on,
                                "input",
                                $Html$Events.targetValue,
                                function ($) {
                                   return $Signal.message(guiAddress)(EditAddField($));
                                })
                                ,A2(onEnter,
                                guiAddress,
                                AddItem)]),
                   _L.fromArray([]))]));
   });
   var NoGuiEvent = {ctor: "NoGuiEvent"};
   var FromEffect = function (a) {
      return {ctor: "FromEffect"
             ,_0: a};
   };
   var kickOff = function ($) {
      return $Effects.task($Task.map($Basics.always(FromEffect(NoEffectEvent)))($Task.toMaybe($)));
   };
   var FromServer = function (a) {
      return {ctor: "FromServer"
             ,_0: a};
   };
   var FromGui = function (a) {
      return {ctor: "FromGui"
             ,_0: a};
   };
   var Completed = {ctor: "Completed"};
   var Active = {ctor: "Active"};
   var All = {ctor: "All"};
   var initialModel = {_: {}
                      ,addField: ""
                      ,editingItem: $Maybe.Nothing
                      ,filter: All
                      ,items: $Dict.empty};
   var viewControls = F3(function (guiAddress,
   model,
   augModel) {
      return function () {
         var visible = true;
         var countLeft = augModel.count.total - augModel.count.completed;
         var itemNoun = _U.eq(countLeft,
         1) ? " item" : " items";
         var countCompleted = augModel.count.completed;
         return A2($Html.footer,
         _L.fromArray([$Html$Attributes.$class("footer")
                      ,showBlock(visible)]),
         _L.fromArray([A2($Html.span,
                      _L.fromArray([$Html$Attributes.$class("todo-count")]),
                      _L.fromArray([A2($Html.strong,
                                   _L.fromArray([]),
                                   _L.fromArray([$Html.text($Basics.toString(countLeft))]))
                                   ,$Html.text(A2($Basics._op["++"],
                                   itemNoun,
                                   " left"))]))
                      ,A2($Html.ul,
                      _L.fromArray([$Html$Attributes.$class("filters")]),
                      _L.fromArray([A2($Html.li,
                                   _L.fromArray([A2($Html$Events.onClick,
                                   guiAddress,
                                   SetFilter(All))]),
                                   _L.fromArray([A2($Html.a,
                                                _L.fromArray([$Html$Attributes.href("#/")
                                                             ,$Html$Attributes.classList(_L.fromArray([{ctor: "_Tuple2"
                                                                                                       ,_0: "selected"
                                                                                                       ,_1: _U.eq(model.filter,
                                                                                                       All)}]))]),
                                                _L.fromArray([$Html.text("All")]))
                                                ,$Html.text(" ")]))
                                   ,A2($Html.li,
                                   _L.fromArray([A2($Html$Events.onClick,
                                   guiAddress,
                                   SetFilter(Active))]),
                                   _L.fromArray([A2($Html.a,
                                                _L.fromArray([$Html$Attributes.href("#/active")
                                                             ,$Html$Attributes.classList(_L.fromArray([{ctor: "_Tuple2"
                                                                                                       ,_0: "selected"
                                                                                                       ,_1: _U.eq(model.filter,
                                                                                                       Active)}]))]),
                                                _L.fromArray([$Html.text("Active")]))
                                                ,$Html.text(" ")]))
                                   ,A2($Html.li,
                                   _L.fromArray([A2($Html$Events.onClick,
                                   guiAddress,
                                   SetFilter(Completed))]),
                                   _L.fromArray([A2($Html.a,
                                   _L.fromArray([$Html$Attributes.href("#/completed")
                                                ,$Html$Attributes.classList(_L.fromArray([{ctor: "_Tuple2"
                                                                                          ,_0: "selected"
                                                                                          ,_1: _U.eq(model.filter,
                                                                                          Completed)}]))]),
                                   _L.fromArray([$Html.text("Completed")]))]))]))
                      ,A2($Html.button,
                      _L.fromArray([$Html$Attributes.$class("clear-completed")
                                   ,$Html$Attributes.hidden(_U.eq(countCompleted,
                                   0))
                                   ,A2($Html$Events.onClick,
                                   guiAddress,
                                   DeleteCompletedItems)]),
                      _L.fromArray([$Html.text("Clear completed")]))]));
      }();
   });
   var view = F2(function (actionAddress,
   model) {
      return function () {
         var guiAddress = A2($Signal.forwardTo,
         actionAddress,
         FromGui);
         var augModel = augment(model);
         return A2($Html.div,
         _L.fromArray([]),
         _L.fromArray([A2($Html.section,
                      _L.fromArray([$Html$Attributes.$class("todoapp")]),
                      _L.fromArray([A3($Html$Lazy.lazy2,
                                   viewEntry,
                                   guiAddress,
                                   model.addField)
                                   ,A4($Html$Lazy.lazy3,
                                   viewItemList,
                                   guiAddress,
                                   model,
                                   augModel)
                                   ,A4($Html$Lazy.lazy3,
                                   viewControls,
                                   guiAddress,
                                   model,
                                   augModel)]))
                      ,viewInfoFooter(guiAddress)]));
      }();
   });
   var Item = F2(function (a,b) {
      return {_: {}
             ,completed: b
             ,title: a};
   });
   var decoderItem = A3($Json$Decode.object2,
   Item,
   A2($Json$Decode._op[":="],
   "title",
   $Json$Decode.string),
   A2($Json$Decode._op[":="],
   "completed",
   $Json$Decode.bool));
   var decodeItem = function (value) {
      return $Result.toMaybe(A2($Json$Decode.decodeValue,
      decoderItem,
      value));
   };
   var Model = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,addField: c
             ,editingItem: d
             ,filter: b
             ,items: a};
   });
   var firebase_test = "https://elmfire-todomvc.firebaseio.com/todos";
   var firebaseUrl = firebase_test;
   var initialEffect = function () {
      var loc = $ElmFire.fromUrl(firebaseUrl);
      var doNothing = function (_v23) {
         return function () {
            return $Task.succeed({ctor: "_Tuple0"});
         }();
      };
      var snap2task = F2(function (eventOp,
      snapshot) {
         return function () {
            var _v25 = decodeItem(snapshot.value);
            switch (_v25.ctor)
            {case "Just":
               return A2($Signal.send,
                 serverInput.address,
                 eventOp({ctor: "_Tuple2"
                         ,_0: snapshot.key
                         ,_1: _v25._0}));
               case "Nothing":
               return $Task.fail({ctor: "_Tuple0"});}
            _U.badCase($moduleName,
            "between lines 152 and 158");
         }();
      });
      return kickOff(A2($Task.andThen,
      A4($ElmFire.subscribe,
      snap2task(Added),
      doNothing,
      $ElmFire.childAdded($ElmFire.noOrder),
      loc),
      function (_v27) {
         return function () {
            return A2($Task.andThen,
            A4($ElmFire.subscribe,
            snap2task(Changed),
            doNothing,
            $ElmFire.childChanged($ElmFire.noOrder),
            loc),
            function (_v29) {
               return function () {
                  return A2($Task.andThen,
                  A4($ElmFire.subscribe,
                  snap2task(function (_v31) {
                     return function () {
                        switch (_v31.ctor)
                        {case "_Tuple2":
                           return Removed(_v31._0);}
                        _U.badCase($moduleName,
                        "on line 170, column 33 to 43");
                     }();
                  }),
                  doNothing,
                  $ElmFire.childRemoved($ElmFire.noOrder),
                  loc),
                  function (_v35) {
                     return function () {
                        return $Task.succeed({ctor: "_Tuple0"});
                     }();
                  });
               }();
            });
         }();
      }));
   }();
   var updateState = F2(function (action,
   model) {
      return function () {
         switch (action.ctor)
         {case "FromEffect":
            return {ctor: "_Tuple2"
                   ,_0: model
                   ,_1: $Effects.none};
            case "FromGui":
            switch (action._0.ctor)
              {case "AddItem":
                 return {ctor: "_Tuple2"
                        ,_0: _U.replace([["addField"
                                         ,""]],
                        model)
                        ,_1: _U.eq(model.addField,
                        "") ? $Effects.none : kickOff(A2($ElmFire.set,
                        $Json$Encode.object(_L.fromArray([{ctor: "_Tuple2"
                                                          ,_0: "title"
                                                          ,_1: $Json$Encode.string(model.addField)}
                                                         ,{ctor: "_Tuple2"
                                                          ,_0: "completed"
                                                          ,_1: $Json$Encode.bool(false)}])),
                        $ElmFire.push($ElmFire.fromUrl(firebaseUrl))))};
                 case "CheckAllItems":
                 return {ctor: "_Tuple2"
                        ,_0: model
                        ,_1: $Effects.batch(A2($List.map,
                        function (key) {
                           return kickOff(A3($ElmFire.transaction,
                           function (maybeItem) {
                              return function () {
                                 switch (maybeItem.ctor)
                                 {case "Just":
                                    return function () {
                                         var _v58 = decodeItem(maybeItem._0);
                                         switch (_v58.ctor)
                                         {case "Just":
                                            return $ElmFire.Set($Json$Encode.object(_L.fromArray([{ctor: "_Tuple2"
                                                                                                  ,_0: "title"
                                                                                                  ,_1: $Json$Encode.string(_v58._0.title)}
                                                                                                 ,{ctor: "_Tuple2"
                                                                                                  ,_0: "completed"
                                                                                                  ,_1: $Json$Encode.bool(action._0._0)}])));
                                            case "Nothing":
                                            return $ElmFire.Abort;}
                                         _U.badCase($moduleName,
                                         "between lines 308 and 318");
                                      }();
                                    case "Nothing":
                                    return $ElmFire.Abort;}
                                 _U.badCase($moduleName,
                                 "between lines 306 and 320");
                              }();
                           },
                           $ElmFire.sub(key)($ElmFire.fromUrl(firebaseUrl)),
                           true));
                        },
                        $Dict.keys(model.items)))};
                 case "CheckItem":
                 return {ctor: "_Tuple2"
                        ,_0: model
                        ,_1: kickOff(A2($ElmFire.update,
                        $Json$Encode.object(_L.fromArray([{ctor: "_Tuple2"
                                                          ,_0: "completed"
                                                          ,_1: $Json$Encode.bool(action._0._1)}])),
                        $ElmFire.sub(action._0._0)($ElmFire.fromUrl(firebaseUrl))))};
                 case "DeleteCompletedItems":
                 return {ctor: "_Tuple2"
                        ,_0: model
                        ,_1: $Effects.batch(A2($List.filterMap,
                        function (_v60) {
                           return function () {
                              switch (_v60.ctor)
                              {case "_Tuple2":
                                 return _v60._1.completed ? $Maybe.Just(kickOff(A3($ElmFire.transaction,
                                   function (maybeItem) {
                                      return function () {
                                         switch (maybeItem.ctor)
                                         {case "Just":
                                            return function () {
                                                 var _v66 = decodeItem(maybeItem._0);
                                                 switch (_v66.ctor)
                                                 {case "Just":
                                                    return _v66._0.completed ? $ElmFire.Remove : $ElmFire.Abort;
                                                    case "Nothing":
                                                    return $ElmFire.Abort;}
                                                 _U.badCase($moduleName,
                                                 "between lines 273 and 280");
                                              }();
                                            case "Nothing":
                                            return $ElmFire.Abort;}
                                         _U.badCase($moduleName,
                                         "between lines 271 and 282");
                                      }();
                                   },
                                   $ElmFire.sub(_v60._0)($ElmFire.fromUrl(firebaseUrl)),
                                   true))) : $Maybe.Nothing;}
                              _U.badCase($moduleName,
                              "between lines 267 and 285");
                           }();
                        },
                        $Dict.toList(model.items)))};
                 case "DeleteItem":
                 return {ctor: "_Tuple2"
                        ,_0: model
                        ,_1: kickOff($ElmFire.remove($ElmFire.sub(action._0._0)($ElmFire.fromUrl(firebaseUrl))))};
                 case "EditAddField":
                 return {ctor: "_Tuple2"
                        ,_0: _U.replace([["addField"
                                         ,action._0._0]],
                        model)
                        ,_1: $Effects.none};
                 case "EditExistingItem":
                 return {ctor: "_Tuple2"
                        ,_0: _U.replace([["editingItem"
                                         ,action._0._0]],
                        model)
                        ,_1: function () {
                           switch (action._0._0.ctor)
                           {case "Just":
                              switch (action._0._0._0.ctor)
                                {case "_Tuple2":
                                   return kickOff(A2($Signal.send,
                                     focus.address,
                                     action._0._0._0._0));}
                                break;}
                           return $Effects.none;
                        }()};
                 case "SetFilter":
                 return {ctor: "_Tuple2"
                        ,_0: _U.replace([["filter"
                                         ,action._0._0]],
                        model)
                        ,_1: $Effects.none};
                 case "UpdateItem":
                 return {ctor: "_Tuple2"
                        ,_0: _U.replace([["editingItem"
                                         ,$Maybe.Nothing]],
                        model)
                        ,_1: function () {
                           var _v72 = model.editingItem;
                           switch (_v72.ctor)
                           {case "Just":
                              switch (_v72._0.ctor)
                                {case "_Tuple2":
                                   return _U.eq(action._0._0,
                                     _v72._0._0) ? kickOff(_U.eq(_v72._0._1,
                                     "") ? $ElmFire.remove($ElmFire.sub(action._0._0)($ElmFire.fromUrl(firebaseUrl))) : A2($ElmFire.update,
                                     $Json$Encode.object(_L.fromArray([{ctor: "_Tuple2"
                                                                       ,_0: "title"
                                                                       ,_1: $Json$Encode.string(_v72._0._1)}])),
                                     $ElmFire.sub(action._0._0)($ElmFire.fromUrl(firebaseUrl)))) : $Effects.none;}
                                break;}
                           return $Effects.none;
                        }()};}
              break;
            case "FromServer":
            switch (action._0.ctor)
              {case "Added":
                 switch (action._0._0.ctor)
                   {case "_Tuple2":
                      return {ctor: "_Tuple2"
                             ,_0: _U.replace([["items"
                                              ,A3($Dict.insert,
                                              action._0._0._0,
                                              action._0._0._1,
                                              model.items)]],
                             model)
                             ,_1: $Effects.none};}
                   break;
                 case "Changed":
                 switch (action._0._0.ctor)
                   {case "_Tuple2":
                      return {ctor: "_Tuple2"
                             ,_0: _U.replace([["items"
                                              ,A3($Dict.insert,
                                              action._0._0._0,
                                              action._0._0._1,
                                              model.items)]],
                             model)
                             ,_1: $Effects.none};}
                   break;
                 case "Removed":
                 return {ctor: "_Tuple2"
                        ,_0: _U.replace([["items"
                                         ,A2($Dict.remove,
                                         action._0._0,
                                         model.items)]],
                        model)
                        ,_1: $Effects.none};}
              break;}
         return {ctor: "_Tuple2"
                ,_0: model
                ,_1: $Effects.none};
      }();
   });
   var config = {_: {}
                ,init: {ctor: "_Tuple2"
                       ,_0: initialModel
                       ,_1: initialEffect}
                ,inputs: _L.fromArray([A2($Signal.map,
                FromServer,
                serverInput.signal)])
                ,update: updateState
                ,view: view};
   var app = $StartApp.start(config);
   var runEffects = Elm.Native.Task.make(_elm).performSignal("runEffects",
   app.tasks);
   var main = app.html;
   var firebase_foreign = "https://todomvc-angular.firebaseio.com/todos";
   _elm.TodoMVC.values = {_op: _op
                         ,firebase_foreign: firebase_foreign
                         ,firebase_test: firebase_test
                         ,firebaseUrl: firebaseUrl
                         ,config: config
                         ,app: app
                         ,main: main
                         ,Model: Model
                         ,Item: Item
                         ,All: All
                         ,Active: Active
                         ,Completed: Completed
                         ,initialModel: initialModel
                         ,FromGui: FromGui
                         ,FromServer: FromServer
                         ,FromEffect: FromEffect
                         ,NoGuiEvent: NoGuiEvent
                         ,AddItem: AddItem
                         ,UpdateItem: UpdateItem
                         ,DeleteItem: DeleteItem
                         ,DeleteCompletedItems: DeleteCompletedItems
                         ,CheckItem: CheckItem
                         ,CheckAllItems: CheckAllItems
                         ,EditExistingItem: EditExistingItem
                         ,EditAddField: EditAddField
                         ,SetFilter: SetFilter
                         ,NoServerEvent: NoServerEvent
                         ,Added: Added
                         ,Changed: Changed
                         ,Removed: Removed
                         ,serverInput: serverInput
                         ,NoEffectEvent: NoEffectEvent
                         ,effectInput: effectInput
                         ,initialEffect: initialEffect
                         ,decodeItem: decodeItem
                         ,decoderItem: decoderItem
                         ,kickOff: kickOff
                         ,updateState: updateState
                         ,AugModel: AugModel
                         ,augment: augment
                         ,view: view
                         ,viewEntry: viewEntry
                         ,viewItemList: viewItemList
                         ,viewItem: viewItem
                         ,viewControls: viewControls
                         ,viewInfoFooter: viewInfoFooter
                         ,onEnter: onEnter
                         ,showBlock: showBlock
                         ,focus: focus};
   return _elm.TodoMVC.values;
};
Elm.Transform2D = Elm.Transform2D || {};
Elm.Transform2D.make = function (_elm) {
   "use strict";
   _elm.Transform2D = _elm.Transform2D || {};
   if (_elm.Transform2D.values)
   return _elm.Transform2D.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Transform2D",
   $Native$Transform2D = Elm.Native.Transform2D.make(_elm);
   var multiply = $Native$Transform2D.multiply;
   var rotation = $Native$Transform2D.rotation;
   var matrix = $Native$Transform2D.matrix;
   var translation = F2(function (x,
   y) {
      return A6(matrix,
      1,
      0,
      0,
      1,
      x,
      y);
   });
   var scale = function (s) {
      return A6(matrix,
      s,
      0,
      0,
      s,
      0,
      0);
   };
   var scaleX = function (x) {
      return A6(matrix,
      x,
      0,
      0,
      1,
      0,
      0);
   };
   var scaleY = function (y) {
      return A6(matrix,
      1,
      0,
      0,
      y,
      0,
      0);
   };
   var identity = $Native$Transform2D.identity;
   var Transform2D = {ctor: "Transform2D"};
   _elm.Transform2D.values = {_op: _op
                             ,identity: identity
                             ,matrix: matrix
                             ,multiply: multiply
                             ,rotation: rotation
                             ,translation: translation
                             ,scale: scale
                             ,scaleX: scaleX
                             ,scaleY: scaleY};
   return _elm.Transform2D.values;
};
Elm.VirtualDom = Elm.VirtualDom || {};
Elm.VirtualDom.make = function (_elm) {
   "use strict";
   _elm.VirtualDom = _elm.VirtualDom || {};
   if (_elm.VirtualDom.values)
   return _elm.VirtualDom.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "VirtualDom",
   $Basics = Elm.Basics.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Json$Decode = Elm.Json.Decode.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$VirtualDom = Elm.Native.VirtualDom.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var lazy3 = $Native$VirtualDom.lazy3;
   var lazy2 = $Native$VirtualDom.lazy2;
   var lazy = $Native$VirtualDom.lazy;
   var defaultOptions = {_: {}
                        ,preventDefault: false
                        ,stopPropagation: false};
   var Options = F2(function (a,
   b) {
      return {_: {}
             ,preventDefault: b
             ,stopPropagation: a};
   });
   var onWithOptions = $Native$VirtualDom.on;
   var on = F3(function (eventName,
   decoder,
   toMessage) {
      return A4($Native$VirtualDom.on,
      eventName,
      defaultOptions,
      decoder,
      toMessage);
   });
   var attribute = $Native$VirtualDom.attribute;
   var property = $Native$VirtualDom.property;
   var Property = {ctor: "Property"};
   var fromElement = $Native$VirtualDom.fromElement;
   var toElement = $Native$VirtualDom.toElement;
   var text = $Native$VirtualDom.text;
   var node = $Native$VirtualDom.node;
   var Node = {ctor: "Node"};
   _elm.VirtualDom.values = {_op: _op
                            ,text: text
                            ,node: node
                            ,toElement: toElement
                            ,fromElement: fromElement
                            ,property: property
                            ,attribute: attribute
                            ,on: on
                            ,onWithOptions: onWithOptions
                            ,defaultOptions: defaultOptions
                            ,lazy: lazy
                            ,lazy2: lazy2
                            ,lazy3: lazy3
                            ,Options: Options};
   return _elm.VirtualDom.values;
};
