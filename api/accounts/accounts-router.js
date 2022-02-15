const router = require('express').Router()
const mid = require('./accounts-middleware')
router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('get account')
  } catch (err) {
    next({status:422 , message: 'this is bad'})
  }
})

router.get('/:id', mid.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
res.json('get account id')
  } catch (err) {
    next(err)
  }
})

router.post('/', mid.checkAccountPayload, mid.checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('[post] account')
  } catch (err) {
    next(err)
  }
})

router.put('/:id', mid.checkAccountId,  (req, res, next) => {
  // DO YOUR MAGIC
  try {
  res.json('put account id')
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', mid.checkAccountId, mid.checkAccountNameUnique, mid.checkAccountPayload, (req, res, next) => {
  // DO YOUR MAGIC
  try {
  res.json('delete account id')
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
 res.status(err.status || 500).json({
   message: err.message,
 })
})

module.exports = router;
