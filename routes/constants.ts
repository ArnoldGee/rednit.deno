import { employmentTypes } from './../constants/employmentTypes.ts';
import { RouterContext } from "../deps.ts";
import { sectors } from "../constants/sectors.ts";

export function getEmploymentTypes({response}: RouterContext) {
  response.body = employmentTypes;
}

export function getSectors({response}: RouterContext) {
  response.body = sectors;
}