// distance from hq in blocks
let y=2
function distanceFromHqInBlocks(PickupLocation) {
    const HqLocation = 42;
    return Math.abs(PickupLocation - HqLocation);
}
//distance from hq in feet
function distanceFromHqInFeet(PickupLocation) {
    const blocks = distanceFromHqInBlocks(PickupLocation);
    return (blocks * 264);
}
// distance travelled in feet
function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = (distanceInBlocks * 264)
    return distanceInFeet
}
// calculates fare prices 
function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination)
    if (distanceInFeet <= 400) {
        return 0
    } else if (400 < distanceInFeet && distanceInFeet <= 2000) {
        return ((distanceInFeet - 400) * 0.02)
    } else if (2000 < distanceInFeet && distanceInFeet <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}