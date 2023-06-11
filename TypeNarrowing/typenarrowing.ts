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

  //Type checking for types and interfaces
  type Fish = { swim: () => void };
  type Bird = { fly: () => void };
   
  function move(animal: Fish | Bird) {
    if ("swim" in animal) {
      return animal.swim();
    }
   
    return animal.fly();
  }
  // insctanceof narrowing
// typeof ceck for default type but instance of check for custom object
  function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
    }
  }

  // Very advance case of type narrowing and type checking
 //From line 33 and 34
 function isFish(pet: Fish | Bird): pet is Fish {   // Return type here is pet as fish
    return (pet as Fish).swim !== undefined;
  }

  function getFood(pet: Fish|Bird){
    if (isFish(pet)){
        pet
        return "Fish Food"
    } else {
        pet
        return "Bird Food"
    }
  }

  // Discriminated union
  interface Circle{
    kind: "circle",
    radius: number
  }
  interface Square{
    kind: "square",
    side: number
  }

  interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
  }

  //type Shape = Circle| Square
  function grtShape( shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius^2
    }
    return shape.side * shape.side
  }

  // Some default in switch case

  interface Triangle {
    kind: "triangle";
    sideLength: number;
  }
   
  type Shape = Circle | Square | Triangle;
   
  function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.side ** 2;
      default:
        const _exhaustiveCheck: never = shape;
  //Type 'Triangle' is not assignable to type 'never'.
        return _exhaustiveCheck;
    }
  }
