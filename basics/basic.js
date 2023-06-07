"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeting = "hello";
console.log(greeting);
//number
var userId = 3344;
//boolean
var admin = true;
//any type in typescript - you must avoid this type at all the cost as musch as possible as typechecking is completely stop here. 
var hero; //this hero variable is automatically assigned as "any" type
function getHero() {
    return "thor";
}
hero = getHero();
