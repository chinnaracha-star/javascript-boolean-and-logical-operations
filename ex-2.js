// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

// กรณีที่ 1: ผู้ซื้อมียอดสั่งซื้อสินค้าจากเดือนที่แล้วมากกว่า 4000 บาท และวันที่ซื้อสินค้าเป็นวันจันทร์ถึงวันศุกร์ 
// และไม่เคยซื้อสินค้าจากหมวดหมู่ IT มาก่อน และไม่เคยเข้าร่วมกิจกรรมมหกรรมลดราคามาก่อน
// กรณีที่ 2 : ผู้ซื้อเป็น Member ในระดับ Platinum


let hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory &&
     !hasAttendedDiscountEvent) || isPlatinum;

    //true && true && true && false
    //false
    //false || false 
console.log(hasPromotion);
