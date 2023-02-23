const { Router } = require('express')
const FilesManager = require('../dao/files.dao')
const Order = require('../dao/models/order.model')
const ordersManager = new FilesManager('Orders.json')

const router = Router()

router.get('/', async (req, res) => {
  const { page } = req.query
  const orders = await Order.find({})

  res.json({ message: orders })
})

router.get('/reports', async (req, res) => {
  const orders = await Order.aggregate([
    {
      $match: {
        size: "medium"
      }
    },
    {
      $group: {
        _id: "$name",
        totalQuantity: {
          $sum: "$quantity"
        }
      }
    },
    {
      $sort: {
        totalQuantity: -1
      }
    },
    {
      $group: {
        _id: 1,
        orders: {
          $push: "$$ROOT"
        }
      }
    },
    {
      $project: {
        "_id": 0,
        orders: "$orders"
      }
    },
    {
      $merge: {
        into: "reports"
      }
    }
  ])

  res.json({ message: 'Nuevo reporte generado' })
})

router.post('/', async (req, res) => {
  const orders = await ordersManager.loadItems()
  const response = await Order.insertMany(orders)
  res.json({ message: response })
})

module.exports = router