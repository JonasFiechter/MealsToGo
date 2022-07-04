import { mocks } from "./mock";

export const restaurantRequest = (location = "37.213,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if(!mock) {
            reject('not found');
        }
        resolve(mock)
    })
}

restaurantRequest().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});