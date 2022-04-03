
var admin = require("firebase-admin");

var serviceAccount = require("./thegrid-408ba-firebase-adminsdk-c3i0u-671e8c0e38.json");

var uid = process.argv[2];

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


admin.auth().setCustomUserClaims(uid, {admin:true})
    .then(() => {
    console.log('custom claims set for user', uid);
    process.exit()
    })
    .catch(error => {
        console.log(error);
        process.exit(1);
    })
