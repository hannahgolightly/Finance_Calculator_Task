/**
 * function to calculate the 5% admin fee
 * @param {amountBorrow} contains the amount borrowed
 */
function adminFee(amountBorrow) {
    var fee = (amountBorrow * 0.05);
    return fee;
}
