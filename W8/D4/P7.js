//Generating OTP using crypto and hashing it using bcypt
const crypto = require('crypto');
const bcrypt = require('bcrypt');

function generateOTP(length = 6){
    return crypto.randomInt(100000,999999).toString();

}
async function hashOTP(otp) {
    return await bcrypt.hash(otp,10);
}

async function verifyOTP(input,hash) {
    return await bcrypt.compare(input,hash);

}
(async () =>{
    const otp = generateOTP();
    console.log("Generated otp",otp);

    const hashedOtp = await hashOTP(otp);
    console.log("hashed otp",hashedOtp);

    console.log("verification:",await verifyOTP(otp,hashedOtp));

})();