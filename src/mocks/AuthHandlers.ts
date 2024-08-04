import { delay, http, HttpResponse } from 'msw'

const login = http.post('/api/login', async ({ params, request }) => {
  await delay(2000)

  const body: any = await request.json()

  console.log('body', body)
  if (body?.username === 'error') {
    return HttpResponse.json(
      {
        error: 'bad_username_password',
        message: '用户名或密码不正确！'
      },
      { status: 400 }
    )
  }
  return HttpResponse.json({
    username: 'uname',
    name: 'John Maverick'
  })
})

export const AuthHandlers = [login]
