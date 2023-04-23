import * as type from "../types";
export default function getUsers(page) {
  console.log()
  return {
    type: type.GET_USERS_REQUESTED,
  };
}
export function getSearch(searchValue) {
 console.log(searchValue)
  return {
    type: type.GET_USERS_REQUESTED,
    payload: searchValue
  };
}
