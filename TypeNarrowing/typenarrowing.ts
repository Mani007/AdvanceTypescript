// Type narrowing for industry standard code
// typeof  is number, string,object - including array
function detecttype(val1: number|string){
    if (typeof val1 === 'string') {   // type narrowing
        return val1.toLocaleLowerCase()
    }
    return val1+3
}

function provideID(id: string|null){
    if(!id){
        console.log("provide ID please")
        return
    }
    return id.toLocaleLowerCase()
}

// Be careful with type of values
function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {   // type checking in recursion
      for (const s of strs) {
  //'strs' is possibly 'null'.
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      // do nothing
    }
  }

