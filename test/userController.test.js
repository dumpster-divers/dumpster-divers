const request = require('../api/request')

const {
  addUser,
  getAllUsers,
  deleteUser,
  updateUser,
  loginUser,
} = require('../controllers/userController')


const allRecordCount = 36
test(`The Users table has ${allRecordCount} records`, async () => {
  const userLists = await request('/api/users/get-all')

  expect(userLists.length).toEqual(allRecordCount)
})

// 查询 Users表 指定用户信息，自测时 name = demo, username = Gruesome-Grateful-Crane，根据实际数据做调整
describe('Tests for user registration and login', () => {
  const name = 'John Citizen'
  const lessName = 'de'
  const username = 'Disturbed-Mean-Chimpanzee'

  // 用户注册时 要求 name 信息不少于 2 位，此示例 对 userController 的注册部分添加了校验改动
  test(`The ${lessName} for name is less then 2`, async () => {
    const userInfo = await request({
      method: 'POST',
      url: '/api/users/add',
      data: {
        name: lessName,
      },
    })

    expect(userInfo.code).toBe(-1)
  })

  // 通过 给定的 username 可以查出对应的 name 信息
  test(`The ${username}'s name is ${name}`, async () => {
    const userInfo = await request({
      method: 'GET',
      url: '/api/users/login',
      params: { username },
    })

    expect(userInfo.name).toBe(name)
  })
})
