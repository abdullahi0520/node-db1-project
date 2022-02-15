exports.checkAccountPayload = (req, res, next) => {

  console.log('check acc payload mid')
  next();
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('check acc uniquness mid')
  next();
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('check acc i d  mid')
  next();
}
