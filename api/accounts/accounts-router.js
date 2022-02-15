const router = require('express').Router()
const mid = require('./accounts-middleware')
const Account = require('./accounts-model')
router.get('/', async(req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = await Account.getAll()
    res.json(accounts)
  } catch (err) {
    next({status:422 , message: 'this is bad'})
  }
})

router.get('/:id', mid.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
    res.json(req.account)
})

router.post('/', mid.checkAccountPayload, mid.checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const newAccount = await Account.create(req.body)
    res.status(201).json(newAccount)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', mid.checkAccountId, mid.checkAccountPayload,  async(req, res, next) => {
  // DO YOUR MAGIC
  const updated = await Account.updateById(req.params.id, req.body)
  res.json(updated)
  try {
  res.json('put account id')
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', mid.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    await Account.deleteById(req.params.id)
  res.json(req.account)
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
