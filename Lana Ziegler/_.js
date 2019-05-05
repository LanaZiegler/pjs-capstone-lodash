{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const _ = \{\
//clamp method  \
  clamp(number, lower, upper) \{\
    let lowerClampedValue = Math.max(number, lower);\
    let clampedValue = Math.min(lowerClampedValue, upper);\
    return clampedValue;\
     \},\
\
  //inRange method  \
  inRange(number, start, end) \{\
    if(end === undefined) \{\
      end = start;\
      start = 0;\
    \};\
    if (start > end) \{\
      const temp = end;\
      end = start;\
      start = temp;\
    \};\
    \
    let isInRange = ((start <= number) && (number < end));\
    return isInRange;\
    \},\
  \
  //words method\
  words(string) \{\
    words = string.split(' ')\
    return words\
  \},\
//pad method\
  pad(string, length)\{\
    if(string.length >= length)\{\
      return string;\
    \};\
    const startPaddingLength = Math.floor((length - string.length) / 2);\
   const endPaddingLength = length - string.length - startPaddingLength;\
    const paddedString =' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);\
    return paddedString;\
  \},\
  \
  //has method\
   has(object, key) \{\
   const hasValue = object[key];\
     if(hasValue != undefined)\{\
       return true;\
     \} return false;\
 \},\
  \
  //invert method\
  invert(object)\{\
    let invertedObject = \{\};\
    for(let key in object) \{\
      const OriginalValue = object[key];\
      invertedObject = \{originalValue : key\}\
    \}\
    return invertedObject;\
  \},\
  \
  //findkey method\
  findKey(object, predicate)\{\
    for(let key in object) \{\
      let value = object[key];\
      let predicateReturnValue = predicate(value);\
      if(predicateReturnValue)\{\
        return key;\
      \};\
    \};\
    undefined\
    return undefined;\
  \},\
  \
  //drop method\
  drop(array, n)\{\
    if(n === undefined) \{\
      n = 1;\
    \}\
    let droppedArray = array.slice(n, array.length);\
    return droppedArray;\
  \},\
  \
  //dropWhile method\
  dropWhile(array, predicate)\{\
    const cb = (element, index) => \{\
      return !predicate(element, index, array);\
    \};\
    let dropNumber = array.findIndex(cb);\
    let droppedArray = this.drop(array, dropNumber);\
    return droppedArray;\
  \},\
  \
  //chunk method\
  chunk(array, size=1)\{\
    let arrayChunks = [];\
    for(let i = 0; i < array.length; i += size)\{\
      let arrayChunk = array.slice(i, i+size);\
      arrayChunks.push(arrayChunk);\
    \}\
    return arrayChunks\
  \}\
  \
\
\
\
\
\
\
\
\
\
\
\
\
\
\
  \}\
// Do not write or modify code below this line.\
module.exports = _;}