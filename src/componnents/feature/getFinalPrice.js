const getFinalPrice = ( {price, voucher}) => {
    return price - (price*voucher/100);
}
 
export default getFinalPrice;